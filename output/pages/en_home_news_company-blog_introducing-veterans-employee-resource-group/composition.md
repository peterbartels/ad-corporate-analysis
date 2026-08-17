<!-- generated: component composition analysis -->
**Page:** `/en/home/news/company-blog/introducing-veterans-employee-resource-group`  
**Template cluster:** `f834a28060` (Blog article)  
*Rem base: the site sets `html { font-size: 62.5% }` at desktop widths (>=1180px), so 1rem = 10px in all margin values below.*

> **Template note:** this layout is shared by 3 pages:
> - `/en/home/news/company-blog/happy-pride-introducing-unite-employee-resource-group`
> - `/en/home/news/company-blog/introducing-avery-dennison-elevate-employee-resource-group`
> - `/en/home/news/company-blog/introducing-veterans-employee-resource-group`

# Blog article (interview / Q&A)

Two-column blog template: main article column with sidebar ('You may also like' + signup). This variant is an interview post — the header carries a bold standfirst quote, and an inline portrait with a name/role caption sits mid-article. Notably this older post uses component margins (mg-bt-*) instead of explicit spacer components.

## Sections (in order)

1. `back-link` — '← Back to all blogs'. Margin below: ~30px.
2. `article-header` — h1 title, bold standfirst pull-quote, attribution ('Communications Team'), date. Margin below: ~30px.
3. `image` — Hero (rainbow-gradient banner graphic). Margin below: ~30px.
4. `social-share` — Facebook / X / LinkedIn / Email pills over a hairline divider. Margin below: ~50px.
5. `richtext` — Intro + first Q&A pairs (bold question subheads). Margin below: ~28px (mg-bt-s).
6. `side-by-side` — Portrait photo left, bold name + role caption right; no background panel. Margin below: ~28px (mg-bt-s).
7. `richtext` — Remaining Q&A pairs, ending on a hairline divider. Margin below: ~50px.
8. `back-link` — Bottom repeat. Margin below: 56px (mg-bt-l, --space-l = 2 × line-height).

## Sidebar (right column)

- `carousel-block` — 'You may also like': 3 related posts. Margin below: ~50px.
- `form-block` — 'Sign up for updates' email capture, POST /bin/services/contacts.

## Vertical rhythm

Tighter rhythm than newer posts: paragraph-scale margins (mg-bt-s = 28px, mg-bt-l = 56px) rather than section-buffer spacers; the page closes with a single mg-bt-l spacer (56px).
