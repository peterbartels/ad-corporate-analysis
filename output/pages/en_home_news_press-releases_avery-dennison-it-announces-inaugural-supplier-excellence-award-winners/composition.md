<!-- generated: component composition analysis -->
**Page:** [/en/home/news/press-releases/avery-dennison-it-announces-inaugural-supplier-excellence-award-winners](https://www.averydennison.com/en/home/news/press-releases/avery-dennison-it-announces-inaugural-supplier-excellence-award-winners.html)  
**Template cluster:** `96e0e2e195` (press release - award winners)  
*Rem base: the site sets `html { font-size: 62.5% }` at desktop widths (>=1180px), so 1rem = 10px in all margin values below.*

# Press release - award winners with logo rows

Two-column press release on the buffer-spacer template whose body is followed by a heading and a stack of two-column logo rows (winner logo left, linked name + award category right). 1 page in this cluster.

1. `back-link` — '<- Back to all press releases' link at the top
   Margin below: 100px (content-buffer)
2. `article-header` — H1 headline plus 'Download story as PDF' link
   Margin below: 50px (section-buffer)
3. `media-contacts` — right-rail 'Media Contacts' with a single contact group
   Margin below: n/a (sidebar)
4. `image` — branded campaign graphic (title card artwork) as lead visual
   Margin below: 50px (section-buffer)
5. `social-share` — 'Share' with Facebook, X, LinkedIn, email icons between hairline rules
   Margin below: ~48px (visual)
6. `richtext` — body: dateline lead, program description and executive quote
   Margin below: 50px (section-buffer)
7. `richtext` — bold heading introducing the winners list
   Margin below: 50px (section-buffer)
8. `side-by-side` — three stacked two-column rows: winner logo image left, linked company name with award category right; 50px (section-buffer) between rows
   Margin below: 50px (section-buffer)
9. `richtext` — 'About Avery Dennison' boilerplate
   Margin below: 50px (section-buffer)
10. `back-link` — bottom '<- Back to all press releases' link
   Margin below: 100px (content-buffer) to page end

## Vertical rhythm
The page uses AEM spacer components with inline-styled buffer classes: `content-buffer` (margin-bottom 10rem = 100px desktop, halved to 5rem = 50px on mobile) after the top back link and after the bottom back link, and `section-buffer` (5rem = 50px) between all in-article sections. Hairline horizontal rules (raw HTML embeds) frame the share row and separate the body from the boilerplate; they carry no extra spacing of their own.
