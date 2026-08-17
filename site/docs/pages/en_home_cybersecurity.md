---
title: "cybersecurity"
---

<!-- generated: component composition analysis -->
**Page:** [/en/home/cybersecurity](https://www.averydennison.com/en/home/cybersecurity.html)  
**Template cluster:** `ef97ef574a` (policy page with info boxes)  
*Rem base: the site sets `html { font-size: 62.5% }` at desktop widths (>=1180px), so 1rem = 10px in all margin values below.*

# Policy page with info boxes

A long-form policy page that opens with a grid of highlight boxes before the numbered text body.

1. [`richtext`](/components/richtext) — centered H1 "Cybersecurity", followed by an H2, a last-updated line and an intro paragraph. Margin below: 100px (content-buffer, 10rem).
2. [`statistics-block`](/components/statistics-block) — six info boxes (heading + short paragraph) arranged 2 rows x 3 columns on a full-width light gray band; 50px (desktop-buffer, 5rem) between the two rows. Margin below: 100px (content-buffer, 10rem).
3. [`richtext`](/components/richtext) — "Contents" table-of-contents with a nested numbered anchor list. Margin below: 50px (section-buffer, 5rem).
4. [`richtext`](/components/richtext) — five repeated numbered policy sections (H2 plus paragraphs, bold key phrases and bullet lists), separated by 50px (section-buffer, 5rem). Margin below the last: 100px (content-buffer, 10rem) to page end.

## Vertical rhythm
content-buffer 10rem (160px) frames the intro and the gray info-box band; section-buffer 5rem (80px) paces the numbered text sections; desktop-buffer 5rem separates rows inside the box grid.

## Screenshot

Full-page capture at 1440px viewport width (header/footer cropped), scaled to 800px:

<img src="/screens/en_home_cybersecurity.webp" alt="Full-page screenshot of /en/home/cybersecurity" loading="lazy" style="max-width:100%;border:1px solid var(--vp-c-divider);border-radius:6px;" />
