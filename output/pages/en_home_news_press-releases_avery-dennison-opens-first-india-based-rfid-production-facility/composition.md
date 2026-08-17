<!-- generated: component composition analysis -->
**Page:** `/en/home/news/press-releases/avery-dennison-opens-first-india-based-rfid-production-facility`  
**Template cluster:** `696c712cbf` (press release - short announcement)  
*Rem base: the site sets `html { font-size: 62.5% }` at desktop widths (>=1180px), so 1rem = 10px in all margin values below.*

> **Template note:** this layout is shared by 7 pages:
> - `/en/home/news/press-releases/avery-dennison-completes-acquisition-of-meridians-flooring-business`
> - `/en/home/news/press-releases/avery-dennison-names-senior-vice-president-and-general-manager-materials-group-na`
> - `/en/home/news/press-releases/avery-dennison-opens-first-india-based-rfid-production-facility`
> - `/en/home/news/press-releases/avery-dennison-to-reveal-how-rfid-is-revolutionizing-retail-nrf`
> - `/en/home/news/press-releases/fast-company-recognizes-avery-dennison-worlds-most-innovative-companies`
> - `/en/home/news/press-releases/turning-potential-into-operational-success-avery-dennison-gets-set-for-retails-big-show`
> - `/en/home/news/press-releases/unlocking-growth-and-sustainability`

# Press release - short announcement

Compact two-column press release on the buffer-spacer template: brand-red logo card as lead image and a short two-paragraph body. 7 pages share this layout.

1. `back-link` — '<- Back to all press releases' link at the top
   Margin below: 100px (content-buffer)
2. `article-header` — H1 headline plus 'Download story as PDF' link
   Margin below: 50px (section-buffer)
3. `media-contacts` — right-rail 'Media contact' block, optionally labeled per organization, with investor- and media-relations groups
   Margin below: n/a (sidebar)
4. `image` — lead visual: solid brand-color card with the Avery Dennison logo (or similar branded graphic)
   Margin below: 50px (section-buffer)
5. `social-share` — 'Share' with Facebook, X, LinkedIn, email icons between hairline rules
   Margin below: ~48px (visual)
6. `richtext` — short body: bold dateline lead and one or two paragraphs of announcement copy
   Margin below: 50px (section-buffer)
7. `richtext` — 'About Avery Dennison' boilerplate
   Margin below: 50px (section-buffer)
8. `back-link` — bottom '<- Back to all press releases' link
   Margin below: 100px (content-buffer) to page end

## Vertical rhythm
The page uses AEM spacer components with inline-styled buffer classes: `content-buffer` (margin-bottom 10rem = 100px desktop, halved to 5rem = 50px on mobile) after the top back link and after the bottom back link, and `section-buffer` (5rem = 50px) between all in-article sections. Hairline horizontal rules (raw HTML embeds) frame the share row and separate the body from the boilerplate; they carry no extra spacing of their own.
