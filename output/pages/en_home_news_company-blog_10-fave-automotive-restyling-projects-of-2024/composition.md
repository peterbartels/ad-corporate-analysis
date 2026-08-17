<!-- generated: component composition analysis -->
**Page:** `/en/home/news/company-blog/10-fave-automotive-restyling-projects-of-2024`  
**Template cluster:** `a3191cc424` (Blog article)  
*Rem base: the site sets `html { font-size: 62.5% }` at desktop widths (>=1180px), so 1rem = 10px in all margin values below.*

> **Template note:** this layout is shared by 4 pages:
> - `/en/home/news/company-blog/10-fave-automotive-restyling-projects-of-2024`
> - `/en/home/news/company-blog/graphics-solutions-favorite-projects-of-q2-2025`
> - `/en/home/news/company-blog/graphics-solutions-favorite-projects-of-q3-2025`
> - `/en/home/news/company-blog/graphics-solutions-favorite-projects-of-q4-2025`

# Blog article (listicle with project cards)

Two-column blog template: main article column (~2/3) with a sticky sidebar (~1/3) holding related articles and a newsletter signup. This variant is a listicle whose body is a stack of ten styled project cards.

## Sections (in order)

1. `back-link` — '← Back to all blogs' to the blog overview. Margin below: ~30px.
2. `article-header` — h1 title, business attribution ('Avery Dennison Graphics Solutions'), publish date. Margin below: ~30px.
3. `image` — Full-column hero photo. Margin below: ~30px.
4. `social-share` — 'Share' label + Facebook / X / LinkedIn / Email pills, hairline divider beneath. Margin below: 50px (section-buffer, 5rem).
5. `richtext` — Intro paragraph. Margin below: 50px (section-buffer, 5rem).
6. `side-by-side` × 10 — Project cards on a light panel background: Instagram handle, linked project title, description, small 'Products used' credits; project photo on the right. Margin below: 50px (section-buffer, 5rem) after each.
7. `richtext` — Closing call-to-action paragraph with social links. Margin below: ~40px.
8. `back-link` — Repeat of '← Back to all blogs'. Margin below: 100px (content-buffer, 10rem).

## Sidebar (right column)

- `carousel-block` — 'You may also like': 3 related posts (thumbnail, date, title, 'Read more >'). Margin below: 50px (section-buffer, 5rem).
- `form-block` — 'Sign up for updates': required email field + 'Sign up' button, POSTs to /bin/services/contacts. 

## Vertical rhythm

Body blocks are separated by section-buffer spacers (5rem = 50px, halved on mobile); article header/hero/share cluster uses tighter component margins (~28px, mg-bt-s); page ends with a content-buffer (10rem = 100px).
