<!-- generated: component composition analysis -->
**Page:** `/en/home/news/company-blog/avery-dennison-recognized-for-another-industry-first`  
**Template cluster:** `a5792de942` (company blog article)  
*Rem base: the site sets `html { font-size: 62.5% }` at desktop widths (>=1180px), so 1rem = 10px in all margin values below.*

# Company blog article — interview with pull-quote

Two-column blog article template (main column ~2/3, sidebar ~1/3): interview-style story with a grey pull-quote panel and one inline image. Sidebar carries related articles and a newsletter signup.

1. `icon-button` — '← Back to all blogs' text link with left arrow, top of content. *Margin below: ~75px (visual).*
2. `article-header` — H1 headline, bold standfirst paragraph, author byline and display date. *Margin below: ~40px (visual).*
3. `image` — Landscape hero photo for the story (e.g. team photo). *Margin below: ~40px (visual).*
4. `social-share` — 'Share' + Facebook / X / LinkedIn / email icon row above a divider rule. *Margin below: ~64px (visual).*
5. `richtext` — Opening body copy and Q&A paragraphs with bold question leads and inline links. *Margin below: ~40px (visual).*
6. `article-quote` — Grey pull-quote panel with oversized quotation mark. *Margin below: ~40px (visual).*
7. `richtext` — Further Q&A body copy. *Margin below: ~40px (visual).*
8. `image` — Inline supporting photo (portrait crop, left-aligned). *Margin below: ~40px (visual).*
9. `richtext` — Closing Q&A copy with italic thank-you line and social-media link. *Margin below: ~40px (visual).*
10. `icon-button` — Repeated '← Back to all blogs' link closing the article. *Margin below: 89.6px (mg-bt-l).*
11. `carousel-block` — Sidebar 'You may also like': vertical list of 3 related blog cards (thumbnail, date, title, 'Read more >' link). *Margin below: ~48px (visual, divider rule).*
12. `form-block` — Sidebar 'Sign up for updates' newsletter form: required email field + 'Sign up' pill button (avd-form posting to marketing automation). *Margin below: page-end buffer.*

## Vertical rhythm

Older blog skeleton: no explicit spacer components between sections — gaps come from component margins (~24-40px between body blocks, ~64px around the share divider). The page closes with a single `spacer mg-bt-l` (5.6rem / 56px) before the footer. Sidebar (related list + signup form) sits in a right-hand column beside the article body.
