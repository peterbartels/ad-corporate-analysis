<!-- generated: component composition analysis -->
**Page:** [/en/home/industries/transportation](https://www.averydennison.com/en/home/industries/transportation.html)  
**Template cluster:** `c0d42894da` (Industry overview page)  
*Rem base: the site sets `html { font-size: 62.5% }` at desktop widths (>=1180px), so 1rem = 10px in all margin values below.*

# Industry overview page

Single-column marketing page introducing an industry (Transportation) with segment write-ups and a grid of business-unit tiles. No hero banner — the page opens directly with a centered title.

## Sections (in order)

1. `richtext` — Centered h1 page title ('Transportation').
   Margin below: 50px (section-buffer, 5rem).
2. `side-by-side` — Two intro paragraphs left, supporting photo right (~40/60 split).
   Margin below: 50px (section-buffer, 5rem).
3. `richtext` × 7 — One per industry segment: h2 heading (Aircraft, Fleet, Heavy equipment, Marine, Rail, Recreational vehicles, Ticketing and baggage tracking), a short paragraph, then 1–3 underlined product links ending in ' >'. Some segments append a small-print 'Regional sites available: BR | LATAM | APAC' link row (authored as an html embed but purely inline text links).
   Margin below: 50px (section-buffer, 5rem) after each; 100px (content-buffer, 10rem) after the last.
4. Full-width black horizontal rule (spacer `line--black` + content-buffer) separating page body from the tile grid.
5. `richtext` — h2 'Industry solutions from our businesses'.
   Margin below: 50px (section-buffer, 5rem).
6. `image-link-block` — 15 small link tiles in a 5-column grid; each tile is a white card with the business-unit name and a circled-arrow icon, linking out to the business microsite (new tab). No images on this instance (box-button--small vertical variant).
   Margin below: 100px (content-buffer, 10rem) to the footer.

## Vertical rhythm

Page top/bottom padding uses content-buffer (10rem = 100px, 5rem on mobile); sections are separated with section-buffer spacers (5rem = 50px). The single black rule (line--black spacer) marks the transition into the cross-business tile grid.
