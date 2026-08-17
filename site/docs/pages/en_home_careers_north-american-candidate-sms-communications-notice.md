---
title: "north-american-candidate-sms-communications-notice"
---

<!-- generated: component composition analysis -->
**Page:** [/en/home/careers/north-american-candidate-sms-communications-notice](https://www.averydennison.com/en/home/careers/north-american-candidate-sms-communications-notice.html)  
**Template cluster:** `fd3a316b75` (plain text / policy page)  
*Rem base: the site sets `html { font-size: 62.5% }` at desktop widths (>=1180px), so 1rem = 10px in all margin values below.*

> **Template note:** this layout is shared by 5 pages:
> - [`/en/home/careers/applicant-affirmative-action-program`](/pages/en_home_careers_applicant-affirmative-action-program)
> - [`/en/home/careers/north-american-candidate-sms-communications-notice`](/pages/en_home_careers_north-american-candidate-sms-communications-notice)
> - [`/en/home/careers/virtual-interview-instructions`](/pages/en_home_careers_virtual-interview-instructions)
> - [`/en/home/careers/voluntary-self-identification-of-disability`](/pages/en_home_careers_voluntary-self-identification-of-disability)
> - [`/en/home/careers/voluntary-self-identification-of-vevraa-status`](/pages/en_home_careers_voluntary-self-identification-of-vevraa-status)

# Plain text / policy page

Minimal single-column template for policy and program information pages (5 members): a top buffer, stacked richtext blocks, a bottom buffer.

1. [`richtext`](/components/richtext) - centered page title (h1), bold sub-heading and body paragraphs. Blocks carry a table-alternating-rows wrapper, so striped tables can appear inside the text. Margin below: 0 (flows into next block). A 100px content-buffer (10rem) precedes this block at the top of the page.
2. [`richtext`](/components/richtext) - second text block with the same optional alternating-row table styling; empty of table content on the representative page but available for tabular policy data on member pages. Margin below: 100px (content-buffer, 10rem) to page end.

Vertical rhythm: content-buffer 10rem/100px above and below the text column (5rem/50px on mobile); no intermediate spacers - paragraph margins alone separate the copy.

## Screenshot

Full-page capture at 1440px viewport width (header/footer cropped), scaled to 800px:

<img src="/screens/en_home_careers_north-american-candidate-sms-communications-notice.webp" alt="Full-page screenshot of /en/home/careers/north-american-candidate-sms-communications-notice" loading="lazy" style="max-width:100%;border:1px solid var(--vp-c-divider);border-radius:6px;" />
