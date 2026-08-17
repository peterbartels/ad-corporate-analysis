---
title: "overview"
---

<!-- generated: component composition analysis -->
**Page:** [`/en/home/company/overview`](/pages/en_home_company_overview)  
**Template cluster:** `98c65f1042` (company overview landing page)  
*Rem base: the site sets `html { font-size: 62.5% }` at desktop widths (>=1180px), so 1rem = 10px in all margin values below.*

# Company overview landing page

Section-index landing page for the company area: intro, brand CTA card, stat row, businesses link grid, and a series of teaser rows linking to sub-pages.

1. [`richtext`](/components/richtext) — centered H1 "About the company". Margin below: ~24px (visual estimate).
2. [`on-page-navigation`](/components/on-page-navigation) — 6 pipe-separated anchor links. Margin below: 50px (section-buffer, 5rem).
3. [`richtext`](/components/richtext) — 4 intro paragraphs. Margin below: 50px (section-buffer).
4. [`cta-block`](/components/cta-block) — white card with the MAKING POSSIBLE™ wordmark, supporting line and "Learn more" button. Margin below: 50px (section-buffer).
5. [`statistics-block`](/components/statistics-block) — 3 stat boxes (Locations in 50+ Countries / Operations 100+ / Employees 35,000+). Margin below: 100px (content-buffer, 10rem).
6. [`richtext`](/components/richtext) — dark band heading "Our businesses". Margin below: 50px (section-buffer).
7. [`image-link-block`](/components/image-link-block) — 15 small vertical box-button cards (5 per row) linking to business sites; each item is an experience fragment. Margin below: 100px (content-buffer).
8. [`side-by-side`](/components/side-by-side) — "Our values" text + button left, YouTube video right. Margin below: 100px (content-buffer).
9. [`richtext`](/components/richtext) — light-gray band heading "Living our values". Margin below: 100px (content-buffer).
10. [`side-by-side`](/components/side-by-side) — "Sustainability" text + button left, YouTube video right. Margin below: 100px (content-buffer).
11. [`side-by-side`](/components/side-by-side) — "Foundation and corporate social responsibility" text + button left, photo right. Margin below: 100px (content-buffer).
12. [`side-by-side`](/components/side-by-side) — "Diversity, equity and inclusion" text + button left, photo right. Margin below: 100px (content-buffer).
13. [`side-by-side`](/components/side-by-side) — dark band: historic photo left, "Company history" text + "See the progress" button right. Margin below: 100px (content-buffer) to page end.

## Vertical rhythm
Teaser rows and bands are consistently separated by content-buffer 10rem/100px (5rem on mobile); intra-band gaps use section-buffer 5rem/50px.

## Screenshot

Full-page capture at 1440px viewport width (header/footer cropped), scaled to 800px:

<img src="/screens/en_home_company_overview.webp" alt="Full-page screenshot of /en/home/company/overview" loading="lazy" style="max-width:100%;border:1px solid var(--vp-c-divider);border-radius:6px;" />
