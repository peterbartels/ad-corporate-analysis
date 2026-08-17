---
title: "integrated-report"
---

<!-- generated: component composition analysis -->
**Page:** [/en/home/company/reports/integrated-report](https://www.averydennison.com/en/home/company/reports/integrated-report.html)  
**Template cluster:** `87dcb6e6d6` (report publication page)  
*Rem base: the site sets `html { font-size: 62.5% }` at desktop widths (>=1180px), so 1rem = 10px in all margin values below.*

# Report publication page

A single-report detail page: title, share icons, an embedded page-flip viewer of the PDF, a download button, and a sidebar of previous editions.

1. [`richtext`](/components/richtext) — report title H1 in the main (left) column, e.g. an integrated sustainability and annual report name. Margin below: ~32px.
2. [`social-share`](/components/social-share) — "Share" label with Facebook, X, LinkedIn and email icons. Margin below: ~48px.
3. [`publication`](/components/publication) — Heyzine flip-book iframe embedding the report PDF with pager/zoom/download controls, on a light gray canvas. Margin below: 50px (section-buffer, 5rem).
4. [`button`](/components/button) — dark "View PDF" pill linking to the raw PDF. Margin below: ~80px.
5. [`richtext`](/components/richtext) — right-hand sidebar heading "Previous Reports". Margin below: ~16px.
6. [`table`](/components/table) — simple link list (rendered from a table) of previous report years linking to sibling pages. Margin below: 100px (content-buffer, 10rem) to page end.

## Vertical rhythm
section-buffer 5rem (80px) separates the embed from the button; the page closes with content-buffer 10rem (160px desktop, 5rem mobile). The sidebar sits in a right column beside components 1–4.

## Screenshot

Full-page capture at 1440px viewport width (header/footer cropped), scaled to 800px:

<img src="/screens/en_home_company_reports_integrated-report.webp" alt="Full-page screenshot of /en/home/company/reports/integrated-report" loading="lazy" style="max-width:100%;border:1px solid var(--vp-c-divider);border-radius:6px;" />
