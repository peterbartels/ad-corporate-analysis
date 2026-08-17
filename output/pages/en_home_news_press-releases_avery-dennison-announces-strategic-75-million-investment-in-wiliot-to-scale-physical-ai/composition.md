<!-- generated: component composition analysis -->
**Page:** [/en/home/news/press-releases/avery-dennison-announces-strategic-75-million-investment-in-wiliot-to-scale-physical-ai](https://www.averydennison.com/en/home/news/press-releases/avery-dennison-announces-strategic-75-million-investment-in-wiliot-to-scale-physical-ai.html)  
**Template cluster:** `c27099a492` (press release - corporate announcement)  
*Rem base: the site sets `html { font-size: 62.5% }` at desktop widths (>=1180px), so 1rem = 10px in all margin values below.*

> **Template note:** this layout is shared by 3 pages:
> - `/en/home/news/press-releases/avery-dennison-announces-strategic-75-million-investment-in-wiliot-to-scale-physical-ai`
> - `/en/home/news/press-releases/avery-dennison-launches-ad-identifresh`
> - `/en/home/news/press-releases/avery-dennison-materials-group-names-matthias-matt-liebert-as-general-manager-for-taylor-adhesives`

# Press release - corporate announcement

Two-column press-release detail (article left, single media-contact sidebar right) for a corporate/investment announcement, on the buffer-spacer template. 3 pages share this layout.

1. `back-link` — '<- Back to all press releases' link at the top
   Margin below: 100px (content-buffer)
2. `article-header` — H1 headline plus 'Download story as PDF' link
   Margin below: 50px (section-buffer)
3. `media-contacts` — right-rail 'Media contact' block: media-relations and investor-relations contacts (name, role, mailto)
   Margin below: n/a (sidebar)
4. `image` — lead visual, e.g. split-panel dual-logo lock-up of the two companies
   Margin below: 50px (section-buffer)
5. `social-share` — 'Share' with Facebook, X, LinkedIn, email icons between hairline rules
   Margin below: ~48px (visual)
6. `richtext` — body: italic subheadline, dateline lead, announcement copy and executive quotes, '###'
   Margin below: 50px (section-buffer)
7. `richtext` — About Avery Dennison + About partner-company boilerplate
   Margin below: 50px (section-buffer)
8. `back-link` — bottom '<- Back to all press releases' link
   Margin below: 100px (content-buffer) to page end

## Vertical rhythm
The page uses AEM spacer components with inline-styled buffer classes: `content-buffer` (margin-bottom 10rem = 100px desktop, halved to 5rem = 50px on mobile) after the top back link and after the bottom back link, and `section-buffer` (5rem = 50px) between all in-article sections. Hairline horizontal rules (raw HTML embeds) frame the share row and separate the body from the boilerplate; they carry no extra spacing of their own.
