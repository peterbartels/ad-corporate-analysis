<!-- generated: component composition analysis -->
**Page:** [/en/home/news/company-blog/expanding-the-discussion-on-work-zone-safety](https://www.averydennison.com/en/home/news/company-blog/expanding-the-discussion-on-work-zone-safety.html)  
**Template cluster:** `2304cbfd86` (company blog article)  
*Rem base: the site sets `html { font-size: 62.5% }` at desktop widths (>=1180px), so 1rem = 10px in all margin values below.*

> **Template note:** this layout is shared by 2 pages:
> - `/en/home/news/company-blog/expanding-the-discussion-on-work-zone-safety`
> - `/en/home/news/company-blog/safer-roads-safer-mobility`

# Company blog article — event recap with inline photos

Two-column blog article template: first-person event recap opening with a quoted teaser line, alternating richtext with two inline photos (second one part-width). Sidebar carries related articles and a newsletter signup.

1. `icon-button` — '← Back to all blogs' text link. *Margin below: ~75px (visual).*
2. `article-header` — H1 headline, quoted teaser line, author byline and date. *Margin below: ~40px (visual).*
3. `image` — Landscape hero photo. *Margin below: ~40px (visual).*
4. `social-share` — 'Share' + icon row above a divider. *Margin below: ~64px (visual).*
5. `richtext` — Opening body copy with inline links. *Margin below: ~40px (visual).*
6. `image` — Inline full-column event photo. *Margin below: ~40px (visual).*
7. `richtext` — Middle body copy. *Margin below: ~40px (visual).*
8. `image` — Part-width inline photo (single column of a column-control). *Margin below: ~40px (visual).*
9. `richtext` — Closing paragraphs. *Margin below: ~40px (visual).*
10. `icon-button` — Repeated '← Back to all blogs' link. *Margin below: 89.6px (mg-bt-l).*
11. `carousel-block` — Sidebar 'You may also like': vertical list of 3 related blog cards (thumbnail, date, title, 'Read more >' link). *Margin below: ~48px (visual, divider rule).*
12. `form-block` — Sidebar 'Sign up for updates' newsletter form: required email field + 'Sign up' pill button (avd-form posting to marketing automation). *Margin below: page-end buffer.*

## Vertical rhythm

Older blog skeleton: no explicit spacer components between sections — gaps come from component margins (~24-40px between body blocks, ~64px around the share divider). The page closes with a single `spacer mg-bt-l` (5.6rem / 56px) before the footer. Sidebar (related list + signup form) sits in a right-hand column beside the article body.
