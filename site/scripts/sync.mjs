#!/usr/bin/env node
/**
 * Generate the VitePress docs tree from ../output:
 *  - docs/components/<name>.md   (component docs, slug lists linked to page docs)
 *  - docs/components/index.md    (component overview table)
 *  - docs/pages/<slug>.md        (per-page composition, component names linked, screenshot embedded)
 *  - docs/pages/index.md         (page index grouped by site section)
 *  - docs/.vitepress/sidebar.json
 */
import { readFileSync, writeFileSync, readdirSync, existsSync, mkdirSync, copyFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const HERE = dirname(fileURLToPath(import.meta.url))
const OUT = join(HERE, '..', '..', 'output')
const DOCS = join(HERE, '..', 'docs')

const slugToPath = (slug) => '/' + slug.replaceAll('_', '/')
const pathToSlug = (p) => p.replace(/^\//, '').replaceAll('/', '_')

// ---------- gather sources ----------
const pageSlugs = readdirSync(join(OUT, 'pages'), { withFileTypes: true })
  .filter((d) => d.isDirectory() && existsSync(join(OUT, 'pages', d.name, 'composition.md')))
  .map((d) => d.name)
  .sort()
const pageSet = new Set(pageSlugs)

const componentNames = readdirSync(join(OUT, 'components'))
  .filter((f) => f.endsWith('.md') && f !== 'README.md')
  .map((f) => f.replace(/\.md$/, ''))
  .sort()
const componentSet = new Set(componentNames)

let screenManifest = {}
try {
  screenManifest = JSON.parse(readFileSync(join(DOCS, 'public', 'screens', 'manifest.json'), 'utf8'))
} catch {
  console.warn('warning: screens/manifest.json missing — run scripts/images.py first; assuming .webp')
}

// ---------- shared transforms ----------
// `component-name` -> linked inline code
function linkComponents(md) {
  return md.replace(/`([a-z0-9-]+)`/g, (m, name) =>
    componentSet.has(name) ? `[\`${name}\`](/components/${name})` : m)
}
// `/en/home/...` inline-code paths -> links to page docs
function linkPagePaths(md) {
  return md.replace(/`(\/en\/home[a-z0-9\-/]*)`/g, (m, p) => {
    const slug = pathToSlug(p)
    return pageSet.has(slug) ? `[\`${p}\`](/pages/${slug})` : m
  })
}
const esc = (s) => s.replace(/"/g, '\\"')
// Component example screenshots: output/components/examples/<name>.png -> docs/public/component-examples/
// and rewrite their markdown references before the generic transforms run.
function linkExamples(md) {
  return md
    .replace(/\]\(examples\//g, '](/component-examples/')
    .replace(/\]\(\.\.\/pages\/([a-zA-Z0-9_-]+)\/composition\.md\)/g, '](/pages/$1)')
}
// Escape `<` outside code spans/fences so Vue doesn't parse "array<object>" etc. as HTML
function escapeAngles(md) {
  let inFence = false
  return md.split('\n').map((line) => {
    if (/^\s*(```|~~~)/.test(line)) { inFence = !inFence; return line }
    if (inFence) return line
    return line.split('`').map((part, i) =>
      i % 2 === 0 ? part.replace(/<(?=[a-zA-Z/])/g, '&lt;') : part).join('`')
  }).join('\n')
}

// ---------- per-page docs ----------
mkdirSync(join(DOCS, 'pages'), { recursive: true })
const pageMeta = {}
for (const slug of pageSlugs) {
  let md = readFileSync(join(OUT, 'pages', slug, 'composition.md'), 'utf8')
  const typeMatch = md.match(/\*\*Template cluster:\*\* `\w+` \(([^)]*)\)/)
  const pageType = typeMatch ? typeMatch[1] : ''
  const segs = slug.replace(/^en_home_?/, '').split('_').filter(Boolean)
  const title = segs.length ? segs[segs.length - 1] : 'home'
  pageMeta[slug] = { pageType, segs, title }

  md = linkComponents(linkPagePaths(escapeAngles(md)))
  const ext = screenManifest[slug] || 'webp'
  const body = `---
title: "${esc(title)}"
---

${md.trim()}

## Screenshot

Full-page capture at 1440px viewport width (header/footer cropped), scaled to 800px:

<img src="/screens/${slug}.${ext}" alt="Full-page screenshot of ${esc(slugToPath(slug))}" loading="lazy" style="max-width:100%;border:1px solid var(--vp-c-divider);border-radius:6px;" />
`
  writeFileSync(join(DOCS, 'pages', slug + '.md'), body)
}

// ---------- component docs ----------
mkdirSync(join(DOCS, 'components'), { recursive: true })
const examplesDir = join(OUT, 'components', 'examples')
const examplesDest = join(DOCS, 'public', 'component-examples')
let exampleCount = 0
if (existsSync(examplesDir)) {
  mkdirSync(examplesDest, { recursive: true })
  for (const f of readdirSync(examplesDir)) {
    if (!/\.(png|webp|jpe?g)$/i.test(f)) continue
    copyFileSync(join(examplesDir, f), join(examplesDest, f))
    exampleCount++
  }
}
for (const name of componentNames) {
  let md = readFileSync(join(OUT, 'components', name + '.md'), 'utf8')
  md = linkPagePaths(escapeAngles(linkExamples(md)))
  const title = (md.match(/^# (.+)$/m) || [null, name])[1]
  writeFileSync(join(DOCS, 'components', name + '.md'), `---\ntitle: "${esc(title)}"\n---\n\n${md.trim()}\n`)
}
// overview table (README links like [`name`](name.md) keep working as relative links)
{
  let md = readFileSync(join(OUT, 'components', 'README.md'), 'utf8')
  writeFileSync(join(DOCS, 'components', 'index.md'), `---\ntitle: Components\n---\n\n${md.trim()}\n`)
}

// ---------- page grouping (shared by index + sidebar) ----------
const groups = new Map() // groupKey -> [slug]
for (const slug of pageSlugs) {
  const { segs } = pageMeta[slug]
  const key = segs.length === 0 ? 'home' : segs[0]
  if (!groups.has(key)) groups.set(key, [])
  groups.get(key).push(slug)
}
const groupLabel = (k) => k.replaceAll('-', ' ')
const itemLabel = (slug, dropSegs) => {
  const { segs } = pageMeta[slug]
  const rest = segs.slice(dropSegs)
  return rest.length ? rest.join(' / ') : '(overview)'
}

// ---------- pages index ----------
{
  const lines = ['---', 'title: Pages', '---', '', '# Pages', '',
    `All ${pageSlugs.length} captured pages of the corporate site, grouped by section. Each page documents its component composition, margins, and full-page screenshot.`, '']
  for (const [key, slugs] of [...groups.entries()].sort()) {
    lines.push(`## ${groupLabel(key)}`, '')
    for (const slug of slugs) {
      const t = pageMeta[slug].pageType
      lines.push(`- [${itemLabel(slug, key === 'home' ? 0 : 1) }](/pages/${slug})${t ? ` — ${t}` : ''}`)
    }
    lines.push('')
  }
  writeFileSync(join(DOCS, 'pages', 'index.md'), lines.join('\n'))
}

// ---------- sidebar ----------
function sidebarGroup(key, slugs) {
  // large groups get one nested level (e.g. news -> company-blog / press-releases)
  if (slugs.length > 25) {
    const sub = new Map()
    for (const slug of slugs) {
      const segs = pageMeta[slug].segs
      const k2 = segs.length > 1 ? segs[1] : '(overview)'
      if (!sub.has(k2)) sub.set(k2, [])
      sub.get(k2).push(slug)
    }
    return {
      text: groupLabel(key), collapsed: true,
      items: [...sub.entries()].sort().map(([k2, ss]) =>
        ss.length === 1
          ? { text: itemLabel(ss[0], 1), link: '/pages/' + ss[0] }
          : { text: groupLabel(k2), collapsed: true,
              items: ss.map((s) => ({ text: itemLabel(s, 2), link: '/pages/' + s })) })
    }
  }
  return {
    text: groupLabel(key), collapsed: true,
    items: slugs.map((s) => ({ text: itemLabel(s, key === 'home' ? 0 : 1), link: '/pages/' + s }))
  }
}
const sidebar = [
  { text: `Components (${componentNames.length})`, collapsed: false,
    items: [{ text: 'Overview', link: '/components/' },
      ...componentNames.map((n) => ({ text: n, link: '/components/' + n }))] },
  { text: `Pages (${pageSlugs.length})`, collapsed: false,
    items: [{ text: 'All pages', link: '/pages/' },
      ...[...groups.entries()].sort().map(([k, ss]) => sidebarGroup(k, ss))] },
]
writeFileSync(join(DOCS, '.vitepress', 'sidebar.json'), JSON.stringify(sidebar, null, 1))

console.log(`sync: ${componentNames.length} components (${exampleCount} example images), ${pageSlugs.length} pages, sidebar written`)
