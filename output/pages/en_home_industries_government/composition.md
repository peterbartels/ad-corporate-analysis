<!-- generated: component composition analysis -->
**Page:** [/en/home/industries/government](https://www.averydennison.com/en/home/industries/government.html)  
**Template cluster:** `05b4b9bf3a` (industry landing page)  
*Rem base: the site sets `html { font-size: 62.5% }` at desktop widths (>=1180px), so 1rem = 10px in all margin values below.*

> **Template note:** this layout is shared by 3 pages:
> - `/en/home/industries/durable-goods-and-equipment`
> - `/en/home/industries/durable-goods-and-equipment-labels`
> - `/en/home/industries/government`

# Industry landing page — Durable goods and equipment

Standard "Industries" template: a centered title, a text-and-image introduction, a stack of product-category sections with deep links into brand sites, and a shared "Industry solutions from our businesses" box-button grid. Member pages: 3.

1. `richtext` — Centered H1 with the industry name. The page opens with a 100px top spacer (content-buffer) above it. Margin below: 50px (section-buffer).
2. `side-by-side` — Introduction: one or two paragraphs on the left, an industry mood photo on the right (2-column layout, text parbase + image parbase). Margin below: 50px (section-buffer).
3. `richtext` — Repeated product-category sections (4 on the representative page; count varies across member pages). Each section is an H2 category heading, a short description paragraph, and one or more underlined "product name >" links, often followed by a small "Regional sites available: BR | LATAM | APAC" locale link row. Sections are separated by 50px (section-buffer); 100px (content-buffer) after the last one, then a full-width black horizontal rule (spacer line--black).
4. `richtext` — H2 "Industry solutions from our businesses". Margin below: 50px (section-buffer).
5. `image-link-block` — Grid of 15 small white box-button cards (business name + circular arrow icon, 5 columns x 3 rows), each linking to an Avery Dennison business/brand website. The cards are shared experience fragments reused on every industry page. Margin below: 100px (content-buffer) to page end.

## Vertical rhythm

Spacing is driven by AEM spacer components: `section-buffer` = 5rem (80px) between related blocks, `content-buffer` = 10rem (160px) between major page zones and at the top/bottom of the page. The divider before the business grid is a spacer with `line--black` (1px full-width rule) plus content-buffer.
