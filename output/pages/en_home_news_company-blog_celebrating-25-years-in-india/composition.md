<!-- generated: component composition analysis -->
**Page:** `/en/home/news/company-blog/celebrating-25-years-in-india`  
**Template cluster:** `349ea457b5` (company blog article)  
*Rem base: the site sets `html { font-size: 62.5% }` at desktop widths (>=1180px), so 1rem = 10px in all margin values below.*

# Company blog article — multi-testimonial roundup

Two-column blog article template: anniversary/roundup story built from six repeated employee profiles — a small portrait + name/role row followed by a long quoted testimonial. Sidebar carries related articles and a newsletter signup.

1. `icon-button` — '← Back to all blogs' text link. *Margin below: ~75px (visual).*
2. `article-header` — H1 headline, bold standfirst, team byline and date. *Margin below: ~40px (visual).*
3. `image` — Branded campaign hero graphic. *Margin below: ~40px (visual).*
4. `social-share` — 'Share' + icon row above a divider. *Margin below: ~64px (visual).*
5. `side-by-side` — Employee portrait photo (left) with name + job title (right). Repeats 6 times through the page, once per featured employee. *Margin below: ~24px (visual).*
6. `richtext` — Quoted testimonial paragraphs for that employee; alternates with each `side-by-side` row (6 blocks total). *Margin below: ~40px (visual).*
7. `icon-button` — Repeated '← Back to all blogs' link. *Margin below: 89.6px (mg-bt-l).*
8. `carousel-block` — Sidebar 'You may also like': vertical list of 3 related blog cards (thumbnail, date, title, 'Read more >' link). *Margin below: ~48px (visual, divider rule).*
9. `form-block` — Sidebar 'Sign up for updates' newsletter form: required email field + 'Sign up' pill button (avd-form posting to marketing automation). *Margin below: page-end buffer.*

## Vertical rhythm

Older blog skeleton: no explicit spacer components between sections — gaps come from component margins (~24-40px between body blocks, ~64px around the share divider). The page closes with a single `spacer mg-bt-l` (5.6rem / 56px) before the footer. Sidebar (related list + signup form) sits in a right-hand column beside the article body.
