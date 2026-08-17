---
title: "life-at-ad"
---

<!-- generated: component composition analysis -->
**Page:** [/en/home/careers/life-at-ad](https://www.averydennison.com/en/home/careers/life-at-ad.html)  
**Template cluster:** `598a46c040` (employee stories listing page)  
*Rem base: the site sets `html { font-size: 62.5% }` at desktop widths (>=1180px), so 1rem = 10px in all margin values below.*

# Employee stories listing page

Full-width listing template for Careers > Life at AD: a centered intro followed by a filterable card grid of all employee story articles.

1. [`richtext`](/components/richtext) — centered page title 'Life at AD' and a one-line intro ('Meet and learn from employees…'). Margin below: 50px (section-buffer, 5rem).
2. [`accordion-block`](/components/accordion-block) — horizontal filter tabs ('All Employees', 'Early Life') acting as list filters; the active tab controls which card list is shown. Margin below: 0px (grid follows immediately).
3. [`carousel-block`](/components/carousel-block) — responsive 4-column card grid of employee stories; each card has a photo thumbnail, 'EMPLOYEE' eyebrow, name/role/country title and a 'Read more >' link; a centered black 'View more' button loads additional cards. Margin below: 100px (content-buffer, 10rem; 5rem on mobile).

Vertical rhythm: sparse page — `section-buffer` (50px) between intro and grid, `content-buffer` (100px desktop / 50px mobile; 1rem = 10px on this site) between the grid and the footer. Card grid gutters are ~30px.

## Screenshot

Full-page capture at 1440px viewport width (header/footer cropped), scaled to 800px:

<img src="/screens/en_home_careers_life-at-ad.webp" alt="Full-page screenshot of /en/home/careers/life-at-ad" loading="lazy" style="max-width:100%;border:1px solid var(--vp-c-divider);border-radius:6px;" />
