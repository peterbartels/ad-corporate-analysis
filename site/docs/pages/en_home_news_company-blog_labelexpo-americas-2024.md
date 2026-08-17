---
title: "labelexpo-americas-2024"
---

<!-- generated: component composition analysis -->
**Page:** [/en/home/news/company-blog/labelexpo-americas-2024](https://www.averydennison.com/en/home/news/company-blog/labelexpo-americas-2024.html)  
**Template cluster:** `d02c087570` (blog-article)  
*Rem base: the site sets `html { font-size: 62.5% }` at desktop widths (>=1180px), so 1rem = 10px in all margin values below.*

# Blog article page (event recap with photo grids)

Two-column blog template: event-recap article left, sidebar right (related articles + email signup). Variant distinguished by subheaded body sections interleaved with a two-up photo grid and a closing full-width photo, spaced with explicit section-buffers.

1. [`back-link`](/components/back-link) — "<- Back to all blogs"; page opens with 100px (content-buffer, 10rem) context spacing.
2. [`article-header`](/components/article-header) — H1 title, author "Global Communications Team", date. Margin below: ~24px (visual estimate).
3. [`image`](/components/image) — Hero photo (Avery Dennison booth). Margin below: ~40px.
4. [`social-share`](/components/social-share) — facebook/X/LinkedIn/email, hairline divider. Margin below: 50px (section-buffer, 5rem).
5. [`richtext`](/components/richtext) — Intro + bold-subheaded sections (Beyond the booth; RFID Experience; Thought Leadership on Innovation Stage). Margin below: 50px (section-buffer, 5rem).
6. [`image`](/components/image) — Two-up photo grid (images[], columns: 2). Margin below: 50px (section-buffer, 5rem).
7. [`richtext`](/components/richtext) — Honoring Stan Avery section (external Label Industry Global Awards link) and Labelpalooza section ending with a contact CTA line. Margin below: 50px (section-buffer, 5rem).
8. [`image`](/components/image) — Closing full-width photo, hairline divider after. Margin below: 50px (section-buffer, 5rem).
9. Sidebar [`carousel-block`](/components/carousel-block) — "You may also like": 3 curated article cards (image, date, headline, "Read more >").
10. Sidebar [`form-block`](/components/form-block) — "Sign up for updates": email field + "Sign up", POST /bin/services/contacts.
11. [`back-link`](/components/back-link) — repeated at article end. Margin below: 100px (content-buffer, 10rem) to footer.

Vertical rhythm: explicit 50px section-buffer (5rem) spacers between all body blocks; 100px content-buffer (10rem) at page top and bottom; buffers halve on mobile.

## Screenshot

Full-page capture at 1440px viewport width (header/footer cropped), scaled to 800px:

<img src="/screens/en_home_news_company-blog_labelexpo-americas-2024.webp" alt="Full-page screenshot of /en/home/news/company-blog/labelexpo-americas-2024" loading="lazy" style="max-width:100%;border:1px solid var(--vp-c-divider);border-radius:6px;" />
