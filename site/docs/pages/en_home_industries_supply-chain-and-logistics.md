---
title: "supply-chain-and-logistics"
---

<!-- generated: component composition analysis -->
**Page:** [`/en/home/industries/supply-chain-and-logistics`](/pages/en_home_industries_supply-chain-and-logistics)  
**Template cluster:** `1cf0b13871` (industry landing page (legacy link directory))  
*Rem base: the site sets `html { font-size: 62.5% }` at desktop widths (>=1180px), so 1rem = 10px in all margin values below.*

# Industry landing page — legacy link directory (Supply Chain & Logistics)

Older-generation "Industries" template: an (empty) hero image slot, the page title, an intro richtext, then a stack of five titled link-collection sections that deep-link into Avery Dennison business/brand websites. No AEM spacer components — spacing comes from component CSS.

1. [`richtext`](/components/richtext) — H1 page title ("Supply Chain & Logistics", rendered from the template page-title slot) followed by two intro paragraphs. The template also renders a hero container with an empty `hero-image-background` slot above it (no image authored on this page — model as an optional hero image on the page object). Margin below: ~48px (visual estimate).
2. [`table`](/components/table) — link-collection section ("collectionoflinks"), repeated 5 times: "Brand Protection & Security", "Global Compliance", "Inventory Accuracy & Visibility", "Packaging & Shipping", "Retail Point-of-Sale". Each section is an H4 heading over a thin rule, a short description paragraph, then 1–9 full-width link rows: bold topic label on the left, "Go to &lt;business> website" with an external-link icon on the right; the whole row is one external link. Sections are separated by ~72px (visual estimate); the last section runs to the page end with ~100px below (visual estimate).

## Vertical rhythm

No spacer components on this legacy template; sections sit ~70px apart from built-in component margins. The hero slot is empty, so the page effectively starts at the H1.

## Screenshot

Full-page capture at 1440px viewport width (header/footer cropped), scaled to 800px:

<img src="/screens/en_home_industries_supply-chain-and-logistics.webp" alt="Full-page screenshot of /en/home/industries/supply-chain-and-logistics" loading="lazy" style="max-width:100%;border:1px solid var(--vp-c-divider);border-radius:6px;" />
