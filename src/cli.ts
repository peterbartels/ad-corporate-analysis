#!/usr/bin/env node
import { chromium, type Page } from "playwright";
import Sitemapper from "sitemapper";
import * as fs from "fs/promises";
import * as path from "path";
import { createHash } from "crypto";

const EN_PREFIX = "https://www.averydennison.com/en/";

// ---------------------------------------------------------------------------
// CLI args
// ---------------------------------------------------------------------------

const args = process.argv.slice(2);
let sitemapUrl = "";
let limit = Infinity;
let outDir = "output";

for (let i = 0; i < args.length; i++) {
  if (args[i] === "--limit") limit = Number(args[++i]);
  else if (args[i] === "--out") outDir = args[++i];
  else if (!sitemapUrl) sitemapUrl = args[i];
}

if (!sitemapUrl) {
  console.error("Usage: screenie <sitemap-url> [--limit N] [--out DIR]");
  process.exit(1);
}

const pagesDir = path.join(outDir, "pages");
const componentsDir = path.join(outDir, "components");
const registryFile = path.join(componentsDir, "registry.json");
const cssDir = path.join(outDir, "css");
const cssManifestFile = path.join(cssDir, "manifest.json");

// ---------------------------------------------------------------------------
// Component registry (persisted across runs so re-runs also deduplicate)
// ---------------------------------------------------------------------------

interface ComponentMeta {
  headline: string;
  itemCount: number;
  imgCount: number;
  wordCount: number;
  linkCount: number;
  hasVideo: boolean;
  tag: string;
  classes: string;
}

interface DetectedComponent extends ComponentMeta {
  screenieId: string;
  type: string;
  skeleton: string;
}

interface ComponentRecord {
  id: string;
  type: string;
  skeleton: string;
  description: string;
  meta: ComponentMeta;
  urls: string[];
}

type Registry = Record<string, ComponentRecord>;

async function loadRegistry(): Promise<Registry> {
  try {
    return JSON.parse(await fs.readFile(registryFile, "utf-8"));
  } catch {
    return {};
  }
}

async function saveRegistry(registry: Registry): Promise<void> {
  await fs.writeFile(registryFile, JSON.stringify(registry, null, 2), "utf-8");
}

// Maps absolute stylesheet URL -> local filename in cssDir. Stylesheets are
// global/static and shared across pages, so each is downloaded exactly once.
type CssManifest = Record<string, string>;

async function loadCssManifest(): Promise<CssManifest> {
  try {
    return JSON.parse(await fs.readFile(cssManifestFile, "utf-8"));
  } catch {
    return {};
  }
}

async function saveCssManifest(manifest: CssManifest): Promise<void> {
  await fs.writeFile(cssManifestFile, JSON.stringify(manifest, null, 2), "utf-8");
}

// ---------------------------------------------------------------------------
// Descriptions & markdown
// ---------------------------------------------------------------------------

const TYPE_INFO: Record<string, { title: string; blurb: string }> = {
  hero: {
    title: "Hero",
    blurb:
      "A full-width banner section at the top of the page that introduces the page topic, typically combining a large heading with a background or feature image.",
  },
  carousel: {
    title: "Carousel",
    blurb:
      "A slider/carousel component that cycles through multiple slides of content horizontally, usually with navigation arrows or dots.",
  },
  "card-grid": {
    title: "Card Grid",
    blurb:
      "A collection of repeated card items laid out in a grid or row. Each card combines an image with a heading, short text and/or a link.",
  },
  card: {
    title: "Card",
    blurb:
      "A single card/teaser block combining an image with a heading, short text and/or a link, used to point to related content.",
  },
  "image-grid": {
    title: "Image Grid",
    blurb:
      "A gallery-style grid of images (or logos) with little to no accompanying text per item.",
  },
  image: {
    title: "Image",
    blurb: "A standalone full-width or feature image block with little to no text.",
  },
  statistics: {
    title: "Statistics Block",
    blurb:
      "A block of key figures/metrics displayed as large numbers, each with a short caption, used to highlight facts at a glance.",
  },
  accordion: {
    title: "Accordion",
    blurb:
      "A vertically stacked set of expandable/collapsible panels, each revealing more content when its header is clicked.",
  },
  tabs: {
    title: "Tabs",
    blurb:
      "A tabbed interface where content panels are switched via a horizontal list of tab labels.",
  },
  video: {
    title: "Video",
    blurb: "An embedded video player (native video or YouTube/Vimeo iframe) block.",
  },
  quote: {
    title: "Quote / Testimonial",
    blurb:
      "A highlighted quotation or testimonial, typically with attribution, set apart from body text.",
  },
  cta: {
    title: "Call to Action",
    blurb:
      "A prominent call-to-action band combining a short message with one or more action buttons/links.",
  },
  breadcrumb: {
    title: "Breadcrumb",
    blurb:
      "A breadcrumb navigation trail showing the current page's position in the site hierarchy.",
  },
  form: {
    title: "Form",
    blurb:
      "An input form (e.g. signup, subscribe, contact or search) with one or more fields and a submit action.",
  },
  article: {
    title: "Article / Rich Text",
    blurb:
      "A long-form rich-text content block consisting of multiple paragraphs, possibly with inline headings, links and images.",
  },
  list: {
    title: "List",
    blurb: "A vertical list of repeated text items or links.",
  },
};

function describeComponent(type: string, meta: ComponentMeta): string {
  const info = TYPE_INFO[type] ?? { title: type, blurb: "A recognized page component." };
  const details: string[] = [];
  if (meta.itemCount >= 3) details.push(`${meta.itemCount} repeated items`);
  if (meta.imgCount > 0) details.push(`${meta.imgCount} image(s)`);
  if (meta.linkCount > 0) details.push(`${meta.linkCount} link(s)`);
  if (meta.hasVideo) details.push("an embedded video");
  if (meta.wordCount > 0) details.push(`~${meta.wordCount} words of text`);
  const detail = details.length
    ? ` The first instance found contains ${details.join(", ")}.`
    : "";
  return info.blurb + detail;
}

function componentMarkdown(record: ComponentRecord): string {
  const info = TYPE_INFO[record.type] ?? { title: record.type, blurb: "" };
  const lines = [
    `# ${info.title} (\`${record.id}\`)`,
    "",
    `![${record.id}](./screenshot.png)`,
    "",
    `**Type:** \`${record.type}\``,
    "",
    "## Description",
    "",
    record.description,
    "",
  ];
  if (record.meta.headline) {
    lines.push(`**Example content:** “${record.meta.headline}”`, "");
  }
  lines.push(
    "## Markup",
    "",
    `Root element: \`<${record.meta.tag}${record.meta.classes ? ` class="${record.meta.classes}"` : ""}>\``,
    "",
    "<details><summary>Structure fingerprint</summary>",
    "",
    "```",
    record.skeleton,
    "```",
    "",
    "</details>",
    "",
    "## Used on",
    "",
    ...record.urls.map((u) => `- ${u}`),
    ""
  );
  return lines.join("\n");
}

async function writeComponentFiles(record: ComponentRecord): Promise<void> {
  const dir = path.join(componentsDir, record.id);
  await fs.mkdir(dir, { recursive: true });
  await fs.writeFile(path.join(dir, "README.md"), componentMarkdown(record), "utf-8");
}

async function writeComponentIndex(registry: Registry): Promise<void> {
  const records = Object.values(registry).sort((a, b) => a.id.localeCompare(b.id));
  const lines = [
    "# Component Library",
    "",
    `${records.length} unique component(s) detected.`,
    "",
    "| Component | Type | Used on |",
    "|---|---|---|",
    ...records.map(
      (r) => `| [${r.id}](./${r.id}/README.md) | ${r.type} | ${r.urls.length} page(s) |`
    ),
    "",
  ];
  await fs.writeFile(path.join(componentsDir, "README.md"), lines.join("\n"), "utf-8");
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function urlSlug(url: string): string {
  const { pathname } = new URL(url);
  const slug = pathname
    .replace(/\.html?$/, "")
    .replace(/[^a-zA-Z0-9-]+/g, "_")
    .replace(/^_+|_+$/g, "");
  return slug || "home";
}

function hashSignature(type: string, skeleton: string): string {
  return createHash("sha1").update(`${type}|${skeleton}`).digest("hex").slice(0, 8);
}

async function preparePage(page: Page): Promise<void> {
  // Kill cookie-consent overlays, then header/footer.
  await page.evaluate(() => {
    const NOISE = [
      "#onetrust-consent-sdk",
      "#onetrust-banner-sdk",
      ".onetrust-pc-dark-filter",
      "#CybotCookiebotDialog",
      ".cookie-banner",
      "#cookie-banner",
      ".truste_overlay",
      ".truste_box_overlay",
      "header",
      "footer",
      '[role="banner"]',
      '[role="contentinfo"]',
      ".page-header",
      ".page-footer",
    ];
    document.querySelectorAll(NOISE.join(",")).forEach((el) => el.remove());
  });

  // Freeze animations so lazy/AOS-style reveals don't leave elements invisible.
  await page.addStyleTag({
    content: `*, *::before, *::after { animation: none !important; transition: none !important; }
[data-aos] { opacity: 1 !important; transform: none !important; }`,
  });

  // Scroll through the whole page to trigger lazy-loaded images, then back up.
  await page.evaluate(async () => {
    await new Promise<void>((resolve) => {
      const step = () => {
        window.scrollBy(0, 700);
        if (window.scrollY + window.innerHeight >= document.body.scrollHeight - 10) {
          resolve();
        } else {
          setTimeout(step, 120);
        }
      };
      step();
    });
  });
  await page.waitForTimeout(800);
  await page.evaluate(() => window.scrollTo(0, 0));
}

// ---------------------------------------------------------------------------
// In-page component detection
// ---------------------------------------------------------------------------

async function detectComponents(page: Page): Promise<DetectedComponent[]> {
  return page.evaluate(() => {
    const KEYWORDS: Array<[string, RegExp]> = [
      ["breadcrumb", /breadcrumb/],
      ["carousel", /carousel|slider|swiper|slick|glide|splide|slideshow/],
      ["statistics", /statistic|\bstats?\b|metric|counter|key-?figures/],
      ["accordion", /accordion|collapsible/],
      ["tabs", /\btabs?\b|tab-list|tab-nav|tabbed/],
      ["image-grid", /gallery|image-grid|mosaic|masonry|logo-grid|logo-wall/],
      ["card-grid", /card-grid|card-list|\bcards\b|teasers|tiles|listing/],
      ["card", /\bcard\b|teaser|\btile\b/],
      ["hero", /\bhero\b|masthead|jumbotron|stage|page-banner|\bbanner\b/],
      ["video", /video|media-player|youtube|vimeo/],
      ["quote", /\bquote\b|blockquote|testimonial/],
      ["cta", /\bcta\b|call-to-action|callout/],
      ["form", /\bform\b|signup|subscribe|newsletter/],
      ["article", /\barticle\b|rich-?text|text-?block|content-?block|wysiwyg|prose/],
      ["list", /\blist\b|link-list|download-list/],
    ];

    const docHeight = document.body.scrollHeight;
    const root = document.querySelector("main") ?? document.body;

    const classStr = (el: Element): string =>
      `${el.getAttribute("class") ?? ""} ${el.id ?? ""}`.toLowerCase();

    const visible = (el: Element): boolean => {
      const style = window.getComputedStyle(el);
      if (style.display === "none" || style.visibility === "hidden" || Number(style.opacity) === 0)
        return false;
      const r = el.getBoundingClientRect();
      return r.width > 0 && r.height > 0;
    };

    const words = (el: Element): number =>
      (el.textContent ?? "").trim().split(/\s+/).filter(Boolean).length;

    // Largest group of structurally-similar sibling children (repeated items).
    const biggestGroup = (parent: Element): Element[] | null => {
      const map = new Map<string, Element[]>();
      for (const k of Array.from(parent.children)) {
        const key =
          k.tagName +
          "|" +
          (k.getAttribute("class") ?? "").split(/\s+/).filter(Boolean).slice(0, 2).join(".");
        const arr = map.get(key) ?? [];
        arr.push(k);
        map.set(key, arr);
      }
      let best: Element[] | null = null;
      for (const arr of map.values()) {
        if (arr.length >= 3 && (!best || arr.length > best.length)) best = arr;
      }
      return best;
    };

    const repeatedChildren = (el: Element): { count: number; sample: Element } | null => {
      let best = biggestGroup(el);
      for (const k of Array.from(el.children).slice(0, 6)) {
        const g = biggestGroup(k);
        if (g && (!best || g.length > best.length)) best = g;
      }
      if (!best) return null;
      const r = best[0].getBoundingClientRect();
      if (r.width < 100 || r.height < 50) return null;
      return { count: best.length, sample: best[0] };
    };

    const looksLikeStat = (item: Element): boolean => {
      for (const el of Array.from(item.querySelectorAll<HTMLElement>("*")).slice(0, 30)) {
        const text = (el.childNodes.length ? el.textContent ?? "" : "").trim();
        if (
          /^[~$€£]?\d[\d.,]*\s*(%|\+|k|m|x|million|billion)?$/i.test(text) &&
          parseFloat(window.getComputedStyle(el).fontSize) >= 26
        )
          return true;
      }
      return false;
    };

    const classify = (
      el: Element,
      rect: DOMRect,
      rep: { count: number; sample: Element } | null
    ): string | null => {
      const attr = classStr(el);
      const hasVideo = !!el.querySelector(
        "video, iframe[src*='youtube'], iframe[src*='vimeo'], iframe[src*='brightcove']"
      );

      let kw: string | null = null;
      for (const [type, re] of KEYWORDS) {
        if (re.test(attr)) {
          kw = type;
          break;
        }
      }
      // Refine / sanity-check keyword matches against actual structure.
      if (kw === "card" && rep && rep.count >= 3) kw = "card-grid";
      if (kw === "form" && !el.querySelector("form, input, select, textarea")) kw = null;
      if (kw === "video" && !hasVideo) kw = null;
      if (kw === "statistics" && rep && !looksLikeStat(rep.sample) && !looksLikeStat(el)) kw = null;
      if (kw) return kw;

      // Pure structural classification.
      if (rep) {
        const s = rep.sample;
        if (looksLikeStat(s)) return "statistics";
        const sImg = !!s.querySelector("img, picture");
        if (sImg && words(s) < 8) return "image-grid";
        if (sImg) return "card-grid";
        return "list";
      }
      if (rect.top + window.scrollY < 350 && rect.height >= 300 && el.querySelector("h1"))
        return "hero";
      if (hasVideo && words(el) < 60) return "video";
      const imgs = el.querySelectorAll("img, picture");
      if (imgs.length === 1 && words(el) < 15) {
        const ir = imgs[0].getBoundingClientRect();
        if (ir.width * ir.height > 0.6 * rect.width * rect.height) return "image";
      }
      if (words(el) > 120 && el.querySelectorAll("p").length >= 2) return "article";
      if ((el.tagName === "UL" || el.tagName === "OL") && el.children.length >= 4) return "list";
      return null;
    };

    // Structure fingerprint used for cross-page deduplication: tag + stable
    // classes, with children collapsed to their unique shapes so a 3-card and
    // a 4-card instance of the same grid hash identically.
    const skeleton = (el: Element, depth: number): string => {
      const cls = (el.getAttribute("class") ?? "")
        .split(/\s+/)
        .filter(Boolean)
        .filter((c) => !/\d/.test(c) && !/^(is-|has-|active|selected|open|show|aos)/.test(c))
        .sort()
        .slice(0, 3)
        .join(".");
      let s = el.tagName.toLowerCase() + (cls ? "." + cls : "");
      if (depth > 0 && el.children.length) {
        const kids = Array.from(el.children)
          .slice(0, 12)
          .map((k) => skeleton(k, depth - 1));
        s += "[" + Array.from(new Set(kids)).sort().join(",") + "]";
      }
      return s;
    };

    // 1. Gather + classify candidates (document order).
    const candidates = Array.from(
      root.querySelectorAll("section, article, ul, ol, div[class], nav[class]")
    );
    const classified: Array<{ el: Element; type: string; rep: ReturnType<typeof repeatedChildren> }> =
      [];
    for (const el of candidates) {
      if (!visible(el)) continue;
      const rect = el.getBoundingClientRect();
      if (rect.width < 350 || rect.height < 120) continue;
      if (docHeight > 2000 && rect.height > 0.85 * docHeight) continue; // page wrapper
      const rep = repeatedChildren(el);
      const type = classify(el, rect, rep);
      if (type) classified.push({ el, type, rep });
    }

    // 2. Drop layout containers: elements wrapping >=2 classified descendants
    //    of different types are section wrappers, not components themselves.
    const isContainer = (c: { el: Element; type: string }): boolean => {
      const inside = classified.filter((o) => o.el !== c.el && c.el.contains(o.el));
      return inside.length >= 2 && new Set(inside.map((o) => o.type)).size >= 2;
    };

    // 3. Outermost wins: skip anything nested inside an accepted component.
    const accepted: Array<{ el: Element; type: string; rep: ReturnType<typeof repeatedChildren> }> =
      [];
    for (const c of classified) {
      if (isContainer(c)) continue;
      if (accepted.some((a) => a.el.contains(c.el))) continue;
      accepted.push(c);
      if (accepted.length >= 40) break;
    }

    // 4. Tag elements + collect metadata for the Node side.
    return accepted.map((c, i) => {
      const el = c.el as HTMLElement;
      el.setAttribute("data-screenie-id", String(i));
      const heading = el.querySelector("h1, h2, h3, h4");
      return {
        screenieId: String(i),
        type: c.type,
        skeleton: skeleton(el, 3),
        headline: (heading?.textContent ?? "").trim().slice(0, 80),
        itemCount: c.rep?.count ?? 0,
        imgCount: el.querySelectorAll("img, picture").length,
        wordCount: words(el),
        linkCount: el.querySelectorAll("a[href]").length,
        hasVideo: !!el.querySelector("video, iframe[src*='youtube'], iframe[src*='vimeo']"),
        tag: el.tagName.toLowerCase(),
        classes: (el.getAttribute("class") ?? "").trim().slice(0, 120),
      };
    });
  });
}

// Download every stylesheet the page uses (once, globally deduplicated), then
// rewrite the live DOM's <link> hrefs to the local shared copies so the saved
// HTML resolves offline. Must run AFTER all screenshots — the rewritten hrefs
// don't resolve in the browser context.
async function saveStylesheets(page: Page, manifest: CssManifest): Promise<void> {
  const hrefs = await page.evaluate(() =>
    Array.from(document.querySelectorAll('link[rel="stylesheet"][href]')).map(
      (l) => (l as HTMLLinkElement).href
    )
  );

  for (const href of hrefs) {
    if (manifest[href]) continue;
    try {
      const res = await page.request.get(href, { timeout: 20_000 });
      if (!res.ok()) {
        console.log(`  ! css HTTP ${res.status()}: ${href}`);
        continue;
      }
      const base = (new URL(href).pathname.split("/").pop() || "stylesheet")
        .replace(/\.css$/i, "")
        .replace(/[^a-zA-Z0-9_-]+/g, "_")
        .slice(0, 60);
      const name = `${base}-${createHash("sha1").update(href).digest("hex").slice(0, 8)}.css`;
      await fs.writeFile(path.join(cssDir, name), await res.body());
      manifest[href] = name;
    } catch (err) {
      console.log(`  ! css fetch failed: ${href} — ${err instanceof Error ? err.message : err}`);
    }
  }

  await page.evaluate((map) => {
    document.querySelectorAll('link[rel="stylesheet"][href]').forEach((l) => {
      const link = l as HTMLLinkElement;
      const local = map[link.href];
      if (local) link.setAttribute("href", `../../css/${local}`);
    });
  }, manifest);
}

// ---------------------------------------------------------------------------
// Per-page processing
// ---------------------------------------------------------------------------

async function processPage(
  page: Page,
  url: string,
  registry: Registry,
  cssManifest: CssManifest
): Promise<void> {
  const start = performance.now();
  try {
    const response = await page.goto(url, { waitUntil: "domcontentloaded", timeout: 45_000 });
    await page.waitForLoadState("load", { timeout: 15_000 }).catch(() => {});
    const status = response?.status() ?? 0;
    if (status >= 400) {
      console.log(`${url} — HTTP ${status}, skipped`);
      return;
    }
  } catch (err) {
    console.log(`${url} — navigation failed: ${err instanceof Error ? err.message : err}`);
    return;
  }

  await preparePage(page);

  const pageDir = path.join(pagesDir, urlSlug(url));
  await fs.mkdir(pageDir, { recursive: true });
  await page.screenshot({ path: path.join(pageDir, "full.png"), fullPage: true });

  const components = await detectComponents(page);
  let newCount = 0;

  for (const comp of components) {
    const key = hashSignature(comp.type, comp.skeleton);
    let record = registry[key];

    if (!record) {
      record = {
        id: `${comp.type}-${key}`,
        type: comp.type,
        skeleton: comp.skeleton,
        description: describeComponent(comp.type, comp),
        meta: {
          headline: comp.headline,
          itemCount: comp.itemCount,
          imgCount: comp.imgCount,
          wordCount: comp.wordCount,
          linkCount: comp.linkCount,
          hasVideo: comp.hasVideo,
          tag: comp.tag,
          classes: comp.classes,
        },
        urls: [],
      };
      registry[key] = record;
      newCount++;

      const dir = path.join(componentsDir, record.id);
      await fs.mkdir(dir, { recursive: true });
      try {
        await page
          .locator(`[data-screenie-id="${comp.screenieId}"]`)
          .screenshot({ path: path.join(dir, "screenshot.png"), timeout: 10_000 });
      } catch (err) {
        console.log(
          `  ! could not screenshot ${record.id}: ${err instanceof Error ? err.message : err}`
        );
      }
    }

    // Deduplication: never re-register a known component — only extend its URL list.
    if (!record.urls.includes(url)) {
      record.urls.push(url);
      await writeComponentFiles(record);
    }
  }

  // Save the page's HTML (header/footer already stripped) with stylesheet
  // links rewritten to the shared local css/ copies. Done last: the rewrite
  // breaks in-browser style resolution, so no screenshots may follow it.
  await saveStylesheets(page, cssManifest);
  await fs.writeFile(path.join(pageDir, "index.html"), await page.content(), "utf-8");

  await saveRegistry(registry);
  await saveCssManifest(cssManifest);
  const ms = Math.round(performance.now() - start);
  console.log(`${url} — ${ms}ms — ${components.length} component(s), ${newCount} new`);
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main(): Promise<void> {
  console.log(`Fetching sitemap: ${sitemapUrl}\n`);

  const sitemap = new Sitemapper({ timeout: 30_000 });
  const { sites, errors } = await sitemap.fetch(sitemapUrl);

  if (errors?.length) {
    for (const err of errors) {
      console.error(`Sitemap error (${err.type}): ${err.url}`);
    }
  }

  const enSites = (sites ?? []).filter((u) => u.startsWith(EN_PREFIX)).slice(0, limit);

  if (!enSites.length) {
    console.log(`No URLs starting with ${EN_PREFIX} found in sitemap.`);
    return;
  }

  console.log(`Found ${enSites.length} English URL(s)\n`);

  await fs.mkdir(pagesDir, { recursive: true });
  await fs.mkdir(componentsDir, { recursive: true });
  await fs.mkdir(cssDir, { recursive: true });
  const registry = await loadRegistry();
  const cssManifest = await loadCssManifest();

  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    userAgent: "screenie/1.0 (Playwright)",
  });
  const page = await context.newPage();

  try {
    for (const url of enSites) {
      await processPage(page, url, registry, cssManifest);
    }
  } finally {
    await writeComponentIndex(registry);
    await browser.close();
  }

  const total = Object.keys(registry).length;
  console.log(`\n✓ Done. ${total} unique component(s) in ${componentsDir}/`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
