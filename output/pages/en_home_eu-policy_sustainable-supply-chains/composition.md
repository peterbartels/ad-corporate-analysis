<!-- generated: component composition analysis -->
**Page:** `/en/home/eu-policy/sustainable-supply-chains`  
**Template cluster:** `c82871ad94` (EU policy campaign article)  
*Rem base: the site sets `html { font-size: 62.5% }` at desktop widths (>=1180px), so 1rem = 10px in all margin values below.*

# EU policy campaign article

Long-form editorial page from the EU-policy campaign hub: image banner, sibling-page navigation, magazine-style article sections mixing text, images and statistic callouts, a native contact form and a shared 4-column teaser band.

1. `short-hero` — Full-width background-image banner (25rem tall, aerial photo, no text overlay). Margin below: ~100px (element carries content-buffer class).
2. `on-page-navigation` — Centered two-row link list to the 5 pages of the EU-policy hub; the current page is highlighted. Margin below: ~50px.
3. `richtext` — Centered H1 article title plus a centered standfirst paragraph. Margin below: 50px (section-buffer).
4. `side-by-side` — H2 "The EU Green Deal…" section: link-rich paragraphs left, captioned editorial photo right. Margin below: 50px (section-buffer).
5. `richtext` — H2 "European business is concerned…" with body copy left and a bold statistic callout (with source link) right. Margin below: ~40px.
6. `image` — Full-width editorial photo with bold caption, a statistic/source note beside it and follow-on paragraphs beneath. Margin below: 50px (section-buffer).
7. `side-by-side` — H2 "How sustainability can offer a double-win…": text left, captioned photo with statistic notes right (textimage, vertical variant). Margin below: 50px (section-buffer).
8. `side-by-side` — Boxed case study "Building a circular mattress industry through connected products": text left, photo right (textimage, horizontal variant). Margin below: 50px (section-buffer).
9. `richtext` — Closing paragraphs with an inline "Read on" link. Margin below: ~30px.
10. `button` — Black pill CTA "More on DPPaaS". Margin below: ~150px, then a 1px gray rule (spacer line--gray).
11. `richtext` — Centered H2 "Contact Our Experts". Margin below: ~40px.
12. `form-block` — Native AEM form (POST /bin/services/contacts): Name, Email Address, Your Inquiry textarea, reCAPTCHA v2, red "Send message" button. Margin below: ~120px.
13. `richtext` — Heading of the full-width gray teaser band. Margin below: ~40px.
14. `cta-block` — 4 teaser columns (title, text, "Read more >" link) pointing to the other EU-policy pages; shared experience fragment. Runs to page end.

## Vertical rhythm

Mostly `section-buffer` (5rem/50px) between article sections, `content-buffer` (10rem/100px) around major zones; thin rules via `line--gray`/`line--black` spacer variants. Several gaps are bespoke to this campaign template rather than the standard buffer scale.
