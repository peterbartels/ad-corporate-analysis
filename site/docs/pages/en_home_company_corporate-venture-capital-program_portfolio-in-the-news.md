---
title: "portfolio-in-the-news"
---

<!-- generated: component composition analysis -->
**Page:** [`/en/home/company/corporate-venture-capital-program/portfolio-in-the-news`](/pages/en_home_company_corporate-venture-capital-program_portfolio-in-the-news)  
**Template cluster:** `7a956f4693` (news link index page)  
*Rem base: the site sets `html { font-size: 62.5% }` at desktop widths (>=1180px), so 1rem = 10px in all margin values below.*

# News link index page

Long single-column directory of external press links, grouped per portfolio company.

1. [`richtext`](/components/richtext) — centered H1. Margin below: ~24px (visual estimate).
2. [`on-page-navigation`](/components/on-page-navigation) — pipe-separated anchor links to each company section. Margin below: 100px (content-buffer, 10rem).
3. [`table`](/components/table) — repeated ~11 times, one section per company: an H2 company heading followed by an alternating-row link table where each row holds a date and an underlined external headline link. Sections are separated by a 1px gray divider (line--gray) plus 50px (section-buffer, 5rem). Margin below last section: 100px (content-buffer) to page end.

## Vertical rhythm
content-buffer 10rem/100px frames the page; repeated company sections use section-buffer 5rem/50px with a gray divider line between them.

## Screenshot

Full-page capture at 1440px viewport width (header/footer cropped), scaled to 800px:

<img src="/screens/en_home_company_corporate-venture-capital-program_portfolio-in-the-news.webp" alt="Full-page screenshot of /en/home/company/corporate-venture-capital-program/portfolio-in-the-news" loading="lazy" style="max-width:100%;border:1px solid var(--vp-c-divider);border-radius:6px;" />
