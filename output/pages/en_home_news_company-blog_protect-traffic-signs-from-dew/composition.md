<!-- generated: component composition analysis -->
**Page:** `/en/home/news/company-blog/protect-traffic-signs-from-dew`  
**Template cluster:** `050884a638` (company blog article)  
*Rem base: the site sets `html { font-size: 62.5% }` at desktop widths (>=1180px), so 1rem = 10px in all margin values below.*

> **Template note:** this layout is shared by 3 pages:
> - `/en/home/news/company-blog/choose-fluorescent-for-work-zone-signage`
> - `/en/home/news/company-blog/helping-tourists-navigate-italy-with-vibrant-full-color-reflective-signs`
> - `/en/home/news/company-blog/protect-traffic-signs-from-dew`

# Company blog article — thought-leadership piece with inline photos

Two-column blog article template: expert/product thought-leadership article alternating richtext with two full-column inline photos. Sidebar carries related articles and a newsletter signup.

1. `icon-button` — '← Back to all blogs' text link. *Margin below: ~75px (visual).*
2. `article-header` — H1 headline, product-manager byline and date. *Margin below: 50px (section-buffer).*
3. `image` — Landscape hero photo. *Margin below: ~67px (visual).*
4. `social-share` — 'Share' + icon row above a divider. *Margin below: 50px (section-buffer).*
5. `richtext` — Opening body copy with inline links. *Margin below: ~40px (visual).*
6. `image` — Inline full-column photo. *Margin below: ~40px (visual).*
7. `richtext` — Middle body copy. *Margin below: ~40px (visual).*
8. `image` — Second inline photo. *Margin below: ~40px (visual).*
9. `richtext` — Closing paragraph with product links. *Margin below: 50px (section-buffer).*
10. `icon-button` — Repeated '← Back to all blogs' link. *Margin below: 100px (content-buffer).*
11. `carousel-block` — Sidebar 'You may also like': vertical list of 3 related blog cards (thumbnail, date, title, 'Read more >' link). *Margin below: ~48px (visual, divider rule).*
12. `form-block` — Sidebar 'Sign up for updates' newsletter form: required email field + 'Sign up' pill button (avd-form posting to marketing automation). *Margin below: page-end buffer.*

## Vertical rhythm

Newer blog skeleton using explicit spacers: `section-buffer` (5rem / 50px, halved on mobile) separates title, byline, hero and body; the page opens and closes with `content-buffer` (10rem / 100px, 5rem mobile). Body blocks are ~24-40px apart. Sidebar (related list + signup form) sits in a right-hand column beside the article body.
