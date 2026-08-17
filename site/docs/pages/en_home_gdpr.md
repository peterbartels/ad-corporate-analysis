---
title: "gdpr"
---

<!-- generated: component composition analysis -->
**Page:** [`/en/home/gdpr`](/pages/en_home_gdpr)  
**Template cluster:** `737d1ffa91` (legal statement page)  
*Rem base: the site sets `html { font-size: 62.5% }` at desktop widths (>=1180px), so 1rem = 10px in all margin values below.*

# Legal statement page

Minimal single-column legal/policy template: one richtext body under a centered title, no hero, no imagery.

1. [`richtext`](/components/richtext) — Centered H1 ("GDPR statement") followed directly by the complete statement body: intro paragraphs, two bulleted lists, and closing paragraph with inline links (FAQ link, mailto). The HTML wraps the copy in a table-alternating-rows container but it renders as plain flowing text. Margin below: ~70px (spacer mg-bt-xl) to page end.

## Vertical rhythm

No buffer-scale spacers; the only explicit spacing is a final `mg-bt-xl` spacer (2.5 x paragraph line-height, ~70px) before the footer. All other spacing comes from richtext paragraph margins.

## Screenshot

Full-page capture at 1440px viewport width (header/footer cropped), scaled to 800px:

<img src="/screens/en_home_gdpr.webp" alt="Full-page screenshot of /en/home/gdpr" loading="lazy" style="max-width:100%;border:1px solid var(--vp-c-divider);border-radius:6px;" />
