<!-- generated: component composition analysis -->
**Page:** `/en/home/news/press-releases/avery-dennison-announces-q1-2022-results`  
**Template cluster:** `b3bf97e15d` (press release - quarterly earnings (legacy))  
*Rem base: the site sets `html { font-size: 62.5% }` at desktop widths (>=1180px), so 1rem = 10px in all margin values below.*

> **Template note:** this layout is shared by 7 pages:
> - `/en/home/news/press-releases/avery-dennison-announces-fourth-quarter-and-full-year-2022-results`
> - `/en/home/news/press-releases/avery-dennison-announces-q1-2022-results`
> - `/en/home/news/press-releases/avery-dennison-announces-q1-2023-results`
> - `/en/home/news/press-releases/avery-dennison-announces-q2-2022-results`
> - `/en/home/news/press-releases/avery-dennison-announces-q2-2023-results`
> - `/en/home/news/press-releases/avery-dennison-announces-q3-2023-results`
> - `/en/home/news/press-releases/avery-dennison-announces-q4-and-full-year-2023-results`

# Press release - quarterly earnings (legacy template)

Two-column press-release detail page (article left, contacts right) announcing quarterly/full-year results; legacy spacing without buffer spacers. 7 pages share this layout.

1. `back-link` — underlined '<- Back to all press releases' link at the top of the content area
   Margin below: ~48px (visual)
2. `article-header` — H1 headline plus a 'Download story as PDF' link
   Margin below: ~40px (visual)
3. `media-contacts` — right-rail 'Media Contacts' block: MEDIA RELATIONS and INVESTOR RELATIONS groups with name, role and mailto link
   Margin below: n/a (sidebar)
4. `button` — 'Related' heading with a black pill button linking to the Financial Review and Analysis document, below the contacts in the sidebar
   Margin below: n/a (sidebar)
5. `image` — full-column-width quarter graphic (e.g. large 'Q4 2022' artwork) acting as the lead visual
   Margin below: ~40px (visual)
6. `social-share` — 'Share' label with Facebook, X, LinkedIn and email icons, framed by hairline rules
   Margin below: ~48px (visual)
7. `richtext` — the complete earnings release: highlights bullet list, dateline lead paragraph, CEO quotes, results by segment with nested lists, balance sheet / taxes / guidance sections, '###' sign-off
   Margin below: ~64px (visual)
8. `richtext` — boilerplate: About Avery Dennison, Safe Harbor statement and forward-looking risk factors
   Margin below: ~56px (visual)
9. `back-link` — repeated '<- Back to all press releases' link at the bottom
   Margin below: ~56px (mg-bt-l spacer) to page end

## Vertical rhythm
Older press-release template: no buffer spacers between sections - gaps are baked into component margins (~40-64px visually). A single trailing spacer `mg-bt-l` (var(--space-l) = 2 line-heights, ~56px) sits before the footer. Hairline rules frame the share row and the boilerplate section.
