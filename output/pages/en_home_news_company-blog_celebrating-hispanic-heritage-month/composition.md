<!-- generated: component composition analysis -->
**Page:** [/en/home/news/company-blog/celebrating-hispanic-heritage-month](https://www.averydennison.com/en/home/news/company-blog/celebrating-hispanic-heritage-month.html)  
**Template cluster:** `69953ef2c1` (company blog article)  
*Rem base: the site sets `html { font-size: 62.5% }` at desktop widths (>=1180px), so 1rem = 10px in all margin values below.*

# Company blog article — ERG feature with inline graphic

Two-column blog article template: employee-resource-group feature with captioned photos and one image-beside-text section (award seal graphic next to copy). Sidebar carries related articles and a newsletter signup.

1. `icon-button` — '← Back to all blogs' text link. *Margin below: ~75px (visual).*
2. `article-header` — H1 headline, foundation/team byline and date. *Margin below: 50px (section-buffer).*
3. `image` — Hero group photo with caption. *Margin below: ~67px (visual).*
4. `social-share` — 'Share' + icon row above a divider. *Margin below: 50px (section-buffer).*
5. `richtext` — First body half: story paragraphs with quotes and inline links. *Margin below: ~40px (visual).*
6. `image` — Captioned group photo mid-article. *Margin below: ~40px (visual).*
7. `richtext` — Second body half. *Margin below: ~40px (visual).*
8. `side-by-side` — Small graphic/badge (left) with related copy (right). *Margin below: ~40px (visual).*
9. `richtext` — Closing paragraph. *Margin below: 50px (section-buffer).*
10. `icon-button` — Repeated '← Back to all blogs' link. *Margin below: 100px (content-buffer).*
11. `carousel-block` — Sidebar 'You may also like': vertical list of 3 related blog cards (thumbnail, date, title, 'Read more >' link). *Margin below: ~48px (visual, divider rule).*
12. `form-block` — Sidebar 'Sign up for updates' newsletter form: required email field + 'Sign up' pill button (avd-form posting to marketing automation). *Margin below: page-end buffer.*

## Vertical rhythm

Newer blog skeleton using explicit spacers: `section-buffer` (5rem / 50px, halved on mobile) separates title, byline, hero and body; the page opens and closes with `content-buffer` (10rem / 100px, 5rem mobile). Body blocks are ~24-40px apart. Sidebar (related list + signup form) sits in a right-hand column beside the article body.
