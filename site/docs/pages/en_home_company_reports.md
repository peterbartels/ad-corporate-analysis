---
title: "reports"
---

<!-- generated: component composition analysis -->
**Page:** [/en/home/company/reports](https://www.averydennison.com/en/home/company/reports.html)  
**Template cluster:** `bcebec41f0` (document directory page)  
*Rem base: the site sets `html { font-size: 62.5% }` at desktop widths (>=1180px), so 1rem = 10px in all margin values below.*

# Document directory page

A long directory of downloadable corporate documents (annual reports, governance charters, ESG disclosures) grouped in labeled two-column sections.

1. [`richtext`](/components/richtext) — centered page H1 ("Reports"). Margin below: ~24px.
2. [`on-page-navigation`](/components/on-page-navigation) — a horizontal row of anchor jump links (Integrated reports | Company profile | Corporate governance | Environmental, social and governance). Margin below: 50px (section-buffer, 5rem).
3. [`richtext`](/components/richtext) — four repeated two-column groups: left column holds the bold category label (e.g. "Integrated reports"), right column holds a long list of document links, optionally broken up by bold sub-group headings (e.g. "Governing documents", "Carbon disclosure"). Groups are separated by a full-width gray divider line plus 50px (section-buffer, 5rem). Margin below last group: 100px (content-buffer, 10rem; 5rem mobile) to page end.

## Vertical rhythm
Standard corporate spacer system: section-buffer 5rem (80px) between document groups (paired with an html-embedded gray rule), content-buffer 10rem (160px, halved on mobile) closing the page.

## Screenshot

Full-page capture at 1440px viewport width (header/footer cropped), scaled to 800px:

<img src="/screens/en_home_company_reports.webp" alt="Full-page screenshot of /en/home/company/reports" loading="lazy" style="max-width:100%;border:1px solid var(--vp-c-divider);border-radius:6px;" />
