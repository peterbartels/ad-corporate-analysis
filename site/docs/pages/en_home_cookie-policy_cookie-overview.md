---
title: "cookie-overview"
---

<!-- generated: component composition analysis -->
**Page:** [/en/home/cookie-policy/cookie-overview](https://www.averydennison.com/en/home/cookie-policy/cookie-overview.html)  
**Template cluster:** `eb2a1c9f1c` (cookie tables reference page)  
*Rem base: the site sets `html { font-size: 62.5% }` at desktop widths (>=1180px), so 1rem = 10px in all margin values below.*

# Cookie tables reference page

An extremely long generated reference page listing every cookie by category in alternating-row tables.

1. [`richtext`](/components/richtext) — H1 "Cookie overview", a last-updated line, intro text and a contents list of anchor links. Margin below: 50px (section-buffer, 5rem) with gray divider line.
2. [`richtext`](/components/richtext) — category heading and description paragraph (repeated for each of ~6 cookie categories: strictly necessary, performance, functional, targeting, social media). Margin below: ~24px.
3. [`table`](/components/table) — one or two cookie tables per category (first-party and third-party sub-tables) with alternating-shaded rows listing cookie name, description and duration; hundreds of rows across the page. Category groups repeat the [`richtext`](/components/richtext) + [`table`](/components/table) pair, separated by 50px (section-buffer, 5rem). Margin below the last: 100px (content-buffer, 10rem).

## Vertical rhythm
Repeating heading-plus-table groups with section-buffer 5rem (80px) between categories and a closing content-buffer 10rem (160px desktop, 5rem mobile).

## Screenshot

Full-page capture at 1440px viewport width (header/footer cropped), scaled to 800px:

<img src="/screens/en_home_cookie-policy_cookie-overview.png" alt="Full-page screenshot of /en/home/cookie-policy/cookie-overview" loading="lazy" style="max-width:100%;border:1px solid var(--vp-c-divider);border-radius:6px;" />
