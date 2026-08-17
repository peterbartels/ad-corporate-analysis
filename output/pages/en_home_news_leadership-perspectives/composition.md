<!-- generated: component composition analysis -->
**Page:** `/en/home/news/leadership-perspectives`  
**Template cluster:** `37258e001c` (blog listing)  
*Rem base: the site sets `html { font-size: 62.5% }` at desktop widths (>=1180px), so 1rem = 10px in all margin values below.*

> **Template note:** this layout is shared by 2 pages:
> - `/en/home/news/company-blog`
> - `/en/home/news/leadership-perspectives`

# Blog listing — Company blog

Newer spacer-driven listing template: a centered title block and a paginated card grid of all company-blog articles, framed by content-buffer spacers.

1. `richtext` — centered H1 "Company blog" plus one centered intro sentence ("The latest stories from our employees..."). The page opens with a 100px top spacer (content-buffer). Margin below: 100px (content-buffer, 10rem).
2. `carousel-block` — blog listing grid (AEM list component, `cq-dd-pages has-view-more`): responsive 4-column grid of article cards, 8 shown initially, newest first. Each card: landscape thumbnail, date ("Aug 14, 2026"), bold title linking to the article, and a "Read more >" link. A black pill "View more" `button` under the grid reveals further pages of cards (client-side). Margin below: 100px (content-buffer, 10rem) to page end.

## Vertical rhythm

Spacer components drive spacing: content-buffer (10rem / 100px, halved on mobile) above the title, between title and grid, and after the grid to the footer. Card rows are ~48px apart; the View more button sits ~72px under the grid.
