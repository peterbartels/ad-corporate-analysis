<!-- generated: component composition analysis -->
**Page:** [/en/home/industries/supply-chain](https://www.averydennison.com/en/home/industries/supply-chain.html)  
**Template cluster:** `3af23ee5f5` (industry-landing)  
*Rem base: the site sets `html { font-size: 62.5% }` at desktop widths (>=1180px), so 1rem = 10px in all margin values below.*

# Industry landing page (Supply chain)

Single-column marketing landing page for an industry vertical: centered title, text+image intro, five link-rich topic sections, and a 15-tile grid of business links.

1. `richtext` — Centered H1 page title ("Supply chain"). Margin below: 50px (section-buffer, 5rem).
2. `side-by-side` — Two-column intro: two paragraphs of body copy left, photo right. Margin below: 50px (section-buffer, 5rem).
3. `richtext` (x5) — Topic sections (Global compliance; Inventory accuracy & visibility; Packaging & shipping; Retail point-of-sale; Brand protection & security). Each is an H2, an intro paragraph, and a stack of underlined "Label >" arrow links; one link has a "Regional sites available: BR | AR + UY | CL | CO" sub-row. 50px (section-buffer, 5rem) between sections; 100px (content-buffer, 10rem) after the last.
4. Full-width black horizontal rule (spacer line--black) with 100px (content-buffer, 10rem) below it.
5. `richtext` — H2 "Industry solutions from our businesses". Margin below: 50px (section-buffer, 5rem).
6. `image-link-block` — Grid of 15 small box-button tiles (5 columns x 3 rows), each a business name plus circular arrow icon linking out (Label and Packaging Materials, Graphics Solutions, Reflective Solutions, Performance Tapes, Performance Polymers, Medical, Digital Ink, Hanita, Smartrac, Apparel, Identification, Vestcom, Fastener, Yongle Tape, Taylor Adhesives). Each tile comes from a reusable experience fragment. Margin below: 100px (content-buffer, 10rem) to footer.

Vertical rhythm: spacers are explicit AEM spacer components — 50px section-buffer (5rem) between sections inside a topic run, 100px content-buffer (10rem) between major page zones (halved to 5rem on mobile); one black divider line separates editorial content from the business-links grid.
