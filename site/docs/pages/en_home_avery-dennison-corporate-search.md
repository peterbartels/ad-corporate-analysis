---
title: "avery-dennison-corporate-search"
---

<!-- generated: component composition analysis -->
**Page:** [`/en/home/avery-dennison-corporate-search`](/pages/en_home_avery-dennison-corporate-search)  
**Template cluster:** `3a0c73ff6d` (site search results page)  
*Rem base: the site sets `html { font-size: 62.5% }` at desktop widths (>=1180px), so 1rem = 10px in all margin values below.*

# Site search results page

Single-purpose functional page hosting the corporate search application on a custom AEM search-page template.

1. [`richtext`](/components/richtext) - "Search" page title with a divider rule below. Margin below: ~60px (visual estimate).
2. [`site-search`](/components/site-search) - bespoke AngularJS search application: keyword input with submit button, left "Narrow Your Search" facet accordions (Business Solution, Content Type), results list (title link, source, PDF text snippet, thumbnail icon) showing 10 of N results, and numeric pagination. Margin below: ~80px to page end.

Vertical rhythm: no CMS spacer components; layout spacing comes from the search app's own styles (roughly 60-80px between title, search box and results). In the rebuild this page is an application shell around a search service rather than a composition of content blocks.

## Screenshot

Full-page capture at 1440px viewport width (header/footer cropped), scaled to 800px:

<img src="/screens/en_home_avery-dennison-corporate-search.webp" alt="Full-page screenshot of /en/home/avery-dennison-corporate-search" loading="lazy" style="max-width:100%;border:1px solid var(--vp-c-divider);border-radius:6px;" />
