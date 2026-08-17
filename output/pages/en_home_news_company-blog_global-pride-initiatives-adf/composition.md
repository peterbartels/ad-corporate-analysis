<!-- generated: component composition analysis -->
**Page:** `/en/home/news/company-blog/global-pride-initiatives-adf`  
**Template cluster:** `def1b94cf5` (blog-article)  
*Rem base: the site sets `html { font-size: 62.5% }` at desktop widths (>=1180px), so 1rem = 10px in all margin values below.*

# Blog article page (long-form story with in-body images)

Two-column blog template: long editorial article left, sidebar right (related articles + email signup). Variant distinguished by multiple in-body images (singles and a two-up grid) with explicit section-buffer spacers between blocks.

1. `back-link` — "<- Back to all blogs"; page opens with 100px (content-buffer, 10rem) context spacing.
2. `article-header` — H1 title, author "Avery Dennison Foundation", date. Margin below: 50px (section-buffer, 5rem).
3. `image` — Hero photo. Margin below: ~40px (visual estimate).
4. `social-share` — facebook/X/LinkedIn/email. Margin below: 50px (section-buffer, 5rem).
5. `richtext` (x~6) — Intro paragraph, then three grantee sections each headed by a linked organization name (Connecting Dreams Foundation, Oogachaga, Plexus Education Foundation) with paragraphs, italic pull-quotes and a bullet list of initiatives, plus a closing paragraph. 50px (section-buffer, 5rem) between blocks.
6. `image` (x2) — Single in-body photos (CDF group photo; Oogachaga card). Margin below: 50px (section-buffer, 5rem).
7. `image` — Two-up photo grid (images[], columns: 2) for the Plexus section. Margin below: 50px (section-buffer, 5rem).
8. Sidebar `carousel-block` — "You may also like": 3 curated article cards (image, date, headline, "Read more >").
9. Sidebar `form-block` — "Sign up for updates": email field + "Sign up", POST /bin/services/contacts.
10. `back-link` — repeated at article end above a hairline. Margin below: 100px (content-buffer, 10rem) to footer.

Vertical rhythm: this variant uses explicit spacer components — 50px section-buffer (5rem) between every body block and 100px content-buffer (10rem) at page top and bottom; buffers halve on mobile.
