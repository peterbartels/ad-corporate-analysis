<!-- generated: component composition analysis -->
**Page:** `/en/home/news/press-releases/currys-rolls-out-electronic-shelf-edge-labelling`  
**Template cluster:** `3adfaf638f` (press release - customer story)  
*Rem base: the site sets `html { font-size: 62.5% }` at desktop widths (>=1180px), so 1rem = 10px in all margin values below.*

# Press release - customer story announcement

Two-column press release on the buffer-spacer template for a customer/partner rollout: photo lead image, footnoted body and About sections for every company involved. 1 page in this cluster.

1. `back-link` — '<- Back to all press releases' link at the top
   Margin below: 100px (content-buffer)
2. `article-header` — H1 headline plus 'Download story as PDF' link
   Margin below: 50px (section-buffer)
3. `media-contacts` — right-rail 'Media contact' listing external PR contacts
   Margin below: n/a (sidebar)
4. `image` — editorial in-store/product photograph as lead visual
   Margin below: 50px (section-buffer)
5. `social-share` — 'Share' with Facebook, X, LinkedIn, email icons between hairline rules
   Margin below: ~48px (visual)
6. `richtext` — body: italic subheadline, dateline lead, rollout detail, quotes from each partner, superscript footnotes, '###'
   Margin below: 50px (section-buffer)
7. `richtext` — boilerplate: one 'About' section per company involved
   Margin below: 50px (section-buffer)
8. `back-link` — bottom '<- Back to all press releases' link
   Margin below: 100px (content-buffer) to page end

## Vertical rhythm
The page uses AEM spacer components with inline-styled buffer classes: `content-buffer` (margin-bottom 10rem = 100px desktop, halved to 5rem = 50px on mobile) after the top back link and after the bottom back link, and `section-buffer` (5rem = 50px) between all in-article sections. Hairline horizontal rules (raw HTML embeds) frame the share row and separate the body from the boilerplate; they carry no extra spacing of their own.
