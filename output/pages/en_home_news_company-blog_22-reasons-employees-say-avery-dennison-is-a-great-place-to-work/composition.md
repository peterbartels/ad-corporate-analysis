<!-- generated: component composition analysis -->
**Page:** [/en/home/news/company-blog/22-reasons-employees-say-avery-dennison-is-a-great-place-to-work](https://www.averydennison.com/en/home/news/company-blog/22-reasons-employees-say-avery-dennison-is-a-great-place-to-work.html)  
**Template cluster:** `68744d6613` (blog-article)  
*Rem base: the site sets `html { font-size: 62.5% }` at desktop widths (>=1180px), so 1rem = 10px in all margin values below.*

# Blog article page (list-style post with alternating-row table)

Two-column blog template: article column left (~2/3) and sidebar right with related articles and email signup. This variant's body is a single alternating-row quote table.

1. `back-link` — "<- Back to all blogs" top left. Margin below: ~40px (visual estimate).
2. `article-header` — H1 title, bold standfirst, author ("Avery Dennison Communications"), date. Margin below: ~30px (visual estimate).
3. `image` — Hero photo at article-column width. Margin below: ~40px (visual estimate).
4. `social-share` — "Share" + facebook/X/LinkedIn/email icons, hairline divider below. Margin below: ~48px (visual estimate).
5. `richtext` — H2 lead-in "I think Avery Dennison is a great place to work because...". Margin below: ~30px.
6. `table` — 22 single-cell rows with alternating gray/white backgrounds, each a richtext employee quote with bold key phrases; hairline divider after. Margin below: ~90px (mg-bt-l, 5.6rem).
7. Sidebar `carousel-block` — "You may also like": 3 curated article cards (thumbnail, headline, author-date byline, "Read more >"), sourced from an AEM fixed-page list.
8. Sidebar `form-block` — "Sign up for updates": required email field + "Sign up" button, POST to /bin/services/contacts.
9. `back-link` — repeated "<- Back to all blogs" at article end. Margin below: ~90px (mg-bt-l, 5.6rem) to footer.

Vertical rhythm: the article flow uses the type scale's own spacing (no section spacers); explicit spacing appears only as mg-bt-s (2.8rem/45px) under the sidebar heading and a closing mg-bt-l (5.6rem/~90px) spacer before the footer.
