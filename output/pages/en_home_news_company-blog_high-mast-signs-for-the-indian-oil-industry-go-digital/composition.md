<!-- generated: component composition analysis -->
**Page:** [/en/home/news/company-blog/high-mast-signs-for-the-indian-oil-industry-go-digital](https://www.averydennison.com/en/home/news/company-blog/high-mast-signs-for-the-indian-oil-industry-go-digital.html)  
**Template cluster:** `6080bb04f2` (company blog article)  
*Rem base: the site sets `html { font-size: 62.5% }` at desktop widths (>=1180px), so 1rem = 10px in all margin values below.*

> **Template note:** this layout is shared by 4 pages:
> - `/en/home/news/company-blog/brimos-produces-high-quality-overhead-guide-signs-with-ease-using-trafficjet-pro`
> - `/en/home/news/company-blog/high-mast-signs-for-the-indian-oil-industry-go-digital`
> - `/en/home/news/company-blog/pride-2023-meet-members-of-unite-florian-schwickert`
> - `/en/home/news/company-blog/pride-2023-meet-members-of-unite-maria-ocampo`

# Company blog article — customer story with two-up image row

Two-column blog article template: customer/case story whose body is split by a row of two equal-width images. Sidebar carries related articles and a newsletter signup.

1. `icon-button` — '← Back to all blogs' text link. *Margin below: ~75px (visual).*
2. `article-header` — H1 headline, bold standfirst, author byline and date. *Margin below: ~40px (visual).*
3. `image` — Landscape hero photo. *Margin below: ~40px (visual).*
4. `social-share` — 'Share' + Facebook / X / LinkedIn / email icons above a divider. *Margin below: ~64px (visual).*
5. `richtext` — First half of the story with inline links. *Margin below: ~40px (visual).*
6. `image` — Two images side-by-side in one row (equal columns). *Margin below: ~40px (visual).*
7. `richtext` — Second half of the story, customer quote paragraph and closing link. *Margin below: ~40px (visual).*
8. `icon-button` — Repeated '← Back to all blogs' link. *Margin below: 89.6px (mg-bt-l).*
9. `carousel-block` — Sidebar 'You may also like': vertical list of 3 related blog cards (thumbnail, date, title, 'Read more >' link). *Margin below: ~48px (visual, divider rule).*
10. `form-block` — Sidebar 'Sign up for updates' newsletter form: required email field + 'Sign up' pill button (avd-form posting to marketing automation). *Margin below: page-end buffer.*

## Vertical rhythm

Older blog skeleton: no explicit spacer components between sections — gaps come from component margins (~24-40px between body blocks, ~64px around the share divider). The page closes with a single `spacer mg-bt-l` (5.6rem / 56px) before the footer. Sidebar (related list + signup form) sits in a right-hand column beside the article body.
