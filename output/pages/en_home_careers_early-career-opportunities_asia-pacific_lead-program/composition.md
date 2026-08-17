<!-- generated: component composition analysis -->
**Page:** [/en/home/careers/early-career-opportunities/asia-pacific/lead-program](https://www.averydennison.com/en/home/careers/early-career-opportunities/asia-pacific/lead-program.html)  
**Template cluster:** `a6d0dd2922` (career program detail page with contact section)  
*Rem base: the site sets `html { font-size: 62.5% }` at desktop widths (>=1180px), so 1rem = 10px in all margin values below.*

# Career program detail page with contact section

Same two-column program detail layout as the sibling template, extended with a full-width contact band at the bottom.

1. `richtext` - back link to the parent overview. Margin below: ~45px (visual estimate).
2. `richtext` - main column: h1 program title, intro paragraphs, candidate-profile bullet lists, "Hiring process" and "Requirements" sections. Margin below: ~80px (visual estimate).
3. `cta-block` - sidebar "Be a part of our team" with "Search jobs" button. Margin below: 50px (section-buffer, 5rem).
4. `cta-block` - sidebar "Don't see the role you're looking for?" with "Join talent community" button. Margin below: 50px (section-buffer).
5. `richtext` - full-width light-gray contact band opens: centered "Contact Us" heading with recruiter prompt and mailto link. Margin below: ~30px.
6. `form-block` - AEM avd-form contact form inside the band (renders as the email prompt on the representative page; member pages can expose input fields). Margin below: ~80px to page end.

Vertical rhythm: section-buffer 5rem/50px between sidebar CTAs and before the contact band; the gray band supplies its own ~100px internal padding; buffers halve on mobile.
