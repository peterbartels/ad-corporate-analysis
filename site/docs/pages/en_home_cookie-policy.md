---
title: "cookie-policy"
---

<!-- generated: component composition analysis -->
**Page:** [/en/home/cookie-policy](https://www.averydennison.com/en/home/cookie-policy.html)  
**Template cluster:** `2fea2975f2` (legal policy text page)  
*Rem base: the site sets `html { font-size: 62.5% }` at desktop widths (>=1180px), so 1rem = 10px in all margin values below.*

# Legal policy text page

A pure long-form text page (cookie/privacy style legal notice) in a single narrow column.

1. [`richtext`](/components/richtext) — H1 "Cookie policy", a "Last updated" date line, and several intro paragraphs. Margin below: 50px (section-buffer, 5rem) with a gray divider line.
2. [`richtext`](/components/richtext) — "Contents" table-of-contents: a numbered list of anchor links to the nine sections. Margin below: 50px (section-buffer, 5rem).
3. [`richtext`](/components/richtext) — nine repeated numbered sections (e.g. "1. What are cookies?" … "9. Further information"), each an H2 plus paragraphs, bold sub-headings, bullet lists and inline links. Sections are separated by 50px (section-buffer, 5rem). Margin below the last: 100px (content-buffer, 10rem) to page end.

## Vertical rhythm
Repetitive section-buffer 5rem (80px) between every text section, an occasional gray rule via html embed, and a closing content-buffer 10rem (160px desktop, 5rem mobile).

## Screenshot

Full-page capture at 1440px viewport width (header/footer cropped), scaled to 800px:

<img src="/screens/en_home_cookie-policy.webp" alt="Full-page screenshot of /en/home/cookie-policy" loading="lazy" style="max-width:100%;border:1px solid var(--vp-c-divider);border-radius:6px;" />
