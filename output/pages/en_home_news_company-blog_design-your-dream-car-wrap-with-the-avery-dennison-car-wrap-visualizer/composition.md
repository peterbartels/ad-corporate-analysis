<!-- generated: component composition analysis -->
**Page:** `/en/home/news/company-blog/design-your-dream-car-wrap-with-the-avery-dennison-car-wrap-visualizer`  
**Template cluster:** `6bb077a85c` (company blog article)  
*Rem base: the site sets `html { font-size: 62.5% }` at desktop widths (>=1180px), so 1rem = 10px in all margin values below.*

# Company blog article — product how-to with video

Two-column blog article template: product walkthrough combining richtext (feature bullets, step-by-step how-to), two inline images and an embedded JW Player video from the DAM. Sidebar carries related articles and a newsletter signup.

1. `icon-button` — '← Back to all blogs' text link. *Margin below: ~75px (visual).*
2. `article-header` — H1 headline, team byline and date. *Margin below: 50px (section-buffer).*
3. `image` — Hero photo. *Margin below: ~67px (visual).*
4. `social-share` — 'Share' + icon row above a divider. *Margin below: 50px (section-buffer).*
5. `richtext` — Intro copy with feature bullet list. *Margin below: ~40px (visual).*
6. `image` — Inline product screenshot image. *Margin below: ~40px (visual).*
7. `richtext` — Transition copy. *Margin below: ~40px (visual).*
8. `video-block` — DAM-hosted promo video in JW Player with poster frame and play button. *Margin below: ~40px (visual).*
9. `richtext` — 'How to use' section: h2 + step-by-step h3 blocks with links. *Margin below: ~40px (visual).*
10. `image` — Example render image with small caption line. *Margin below: ~24px (visual).*
11. `richtext` — Closing call-to-action paragraph. *Margin below: 50px (section-buffer).*
12. `icon-button` — Repeated '← Back to all blogs' link. *Margin below: 100px (content-buffer).*
13. `carousel-block` — Sidebar 'You may also like': vertical list of 3 related blog cards (thumbnail, date, title, 'Read more >' link). *Margin below: ~48px (visual, divider rule).*
14. `form-block` — Sidebar 'Sign up for updates' newsletter form: required email field + 'Sign up' pill button (avd-form posting to marketing automation). *Margin below: page-end buffer.*

## Vertical rhythm

Newer blog skeleton using explicit spacers: `section-buffer` (5rem / 50px, halved on mobile) separates title, byline, hero and body; the page opens and closes with `content-buffer` (10rem / 100px, 5rem mobile). Body blocks are ~24-40px apart. Sidebar (related list + signup form) sits in a right-hand column beside the article body.
