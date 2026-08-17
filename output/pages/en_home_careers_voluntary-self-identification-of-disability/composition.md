<!-- generated: component composition analysis -->
**Page:** [/en/home/careers/voluntary-self-identification-of-disability](https://www.averydennison.com/en/home/careers/voluntary-self-identification-of-disability.html)  
**Template cluster:** `fd3a316b75` (plain text / policy page)  
*Rem base: the site sets `html { font-size: 62.5% }` at desktop widths (>=1180px), so 1rem = 10px in all margin values below.*

> **Template note:** this layout is shared by 5 pages:
> - `/en/home/careers/applicant-affirmative-action-program`
> - `/en/home/careers/north-american-candidate-sms-communications-notice`
> - `/en/home/careers/virtual-interview-instructions`
> - `/en/home/careers/voluntary-self-identification-of-disability`
> - `/en/home/careers/voluntary-self-identification-of-vevraa-status`

# Plain text / policy page

Minimal single-column template for policy and program information pages (5 members): a top buffer, stacked richtext blocks, a bottom buffer.

1. `richtext` - centered page title (h1), bold sub-heading and body paragraphs. Blocks carry a table-alternating-rows wrapper, so striped tables can appear inside the text. Margin below: 0 (flows into next block). A 100px content-buffer (10rem) precedes this block at the top of the page.
2. `richtext` - second text block with the same optional alternating-row table styling; empty of table content on the representative page but available for tabular policy data on member pages. Margin below: 100px (content-buffer, 10rem) to page end.

Vertical rhythm: content-buffer 10rem/100px above and below the text column (5rem/50px on mobile); no intermediate spacers - paragraph margins alone separate the copy.
