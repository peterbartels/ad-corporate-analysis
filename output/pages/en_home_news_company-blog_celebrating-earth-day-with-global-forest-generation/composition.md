<!-- generated: component composition analysis -->
**Page:** `/en/home/news/company-blog/celebrating-earth-day-with-global-forest-generation`  
**Template cluster:** `22cd1ce55a` (company blog article)  
*Rem base: the site sets `html { font-size: 62.5% }` at desktop widths (>=1180px), so 1rem = 10px in all margin values below.*

# Company blog article — photo essay with quoted captions

Two-column blog article template: foundation photo-essay where the hero and inline images carry captions plus attributed quotes. Body alternates richtext and captioned photos. Sidebar carries related articles and a newsletter signup.

1. `icon-button` — '← Back to all blogs' text link. *Margin below: ~75px (visual).*
2. `article-header` — H1 headline, foundation byline and date. *Margin below: 50px (section-buffer).*
3. `image` — Hero photo with photo-credit caption and an attributed quote beneath. *Margin below: ~24px (visual).*
4. `social-share` — 'Share' + icon row above a divider. *Margin below: 50px (section-buffer).*
5. `richtext` — Body copy (story sections, one with bullet list). Alternates with the captioned image below — the pair repeats 3 times. *Margin below: ~40px (visual).*
6. `image` — Captioned photo with quote + attribution lines. *Margin below: ~40px (visual).*
7. `richtext` — Closing paragraphs with inline links. *Margin below: ~40px (visual).*
8. `image` — Final full-width photo with caption. *Margin below: 50px (section-buffer).*
9. `icon-button` — Repeated '← Back to all blogs' link. *Margin below: 100px (content-buffer).*
10. `carousel-block` — Sidebar 'You may also like': vertical list of 3 related blog cards (thumbnail, date, title, 'Read more >' link). *Margin below: ~48px (visual, divider rule).*
11. `form-block` — Sidebar 'Sign up for updates' newsletter form: required email field + 'Sign up' pill button (avd-form posting to marketing automation). *Margin below: page-end buffer.*

## Vertical rhythm

Newer blog skeleton using explicit spacers: `section-buffer` (5rem / 50px, halved on mobile) separates title, byline, hero and body; the page opens and closes with `content-buffer` (10rem / 100px, 5rem mobile). Body blocks are ~24-40px apart. Sidebar (related list + signup form) sits in a right-hand column beside the article body.
