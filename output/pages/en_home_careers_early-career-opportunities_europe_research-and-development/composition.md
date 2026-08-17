<!-- generated: component composition analysis -->
**Page:** [/en/home/careers/early-career-opportunities/europe/research-and-development](https://www.averydennison.com/en/home/careers/early-career-opportunities/europe/research-and-development.html)  
**Template cluster:** `69c0ea7499` (program stream detail page with contact form)  
*Rem base: the site sets `html { font-size: 62.5% }` at desktop widths (>=1180px), so 1rem = 10px in all margin values below.*

> **Template note:** this layout is shared by 8 pages:
> - `/en/home/careers/early-career-opportunities/europe/commercial`
> - `/en/home/careers/early-career-opportunities/europe/data-science`
> - `/en/home/careers/early-career-opportunities/europe/faq`
> - `/en/home/careers/early-career-opportunities/europe/finance`
> - `/en/home/careers/early-career-opportunities/europe/operations`
> - `/en/home/careers/early-career-opportunities/europe/research-and-development`
> - `/en/home/careers/early-career-opportunities/europe/sales`
> - `/en/home/careers/early-career-opportunities/europe/supply-chain`

# Program stream detail page with contact form

Template for the 8 program-stream detail pages (Commercial, Finance, Supply Chain, ...): a single editorial column, a one-group sidebar and the shared contact band.

1. `richtext` - back link to the parent graduate-program page. Margin below: ~55px (visual estimate).
2. `richtext` - main column: h1 stream title, intro paragraphs, "Your tasks may include" bullet list and a "Qualifications" section with an expectations list. Margin below: ~90px (mg-tp-l, 5.6rem, before the contact band).
3. `cta-block` - right sidebar with a single group: "Don't see the role you're looking for?" text and "Join talent community" button. Margin below: ~90px.
4. `richtext` - full-width light-gray contact band: centered "Contact Us" heading, FAQ link and recruiter mailto link. Margin below: ~30px.
5. `form-block` - AEM avd-form contact form inside the band (fields configured per page; shown as the email prompt on these stream pages). Margin below: ~80px to page end.

Vertical rhythm: minimal spacers - mg-tp-l (5.6rem/~90px) lifts the gray contact band off the two-column content; the band carries its own ~100px internal padding; remaining spacing comes from richtext heading margins.
