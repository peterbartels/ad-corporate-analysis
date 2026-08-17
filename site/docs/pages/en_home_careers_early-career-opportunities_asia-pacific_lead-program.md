---
title: "lead-program"
---

<!-- generated: component composition analysis -->
**Page:** [`/en/home/careers/early-career-opportunities/asia-pacific/lead-program`](/pages/en_home_careers_early-career-opportunities_asia-pacific_lead-program)  
**Template cluster:** `a6d0dd2922` (career program detail page with contact section)  
*Rem base: the site sets `html { font-size: 62.5% }` at desktop widths (>=1180px), so 1rem = 10px in all margin values below.*

# Career program detail page with contact section

Same two-column program detail layout as the sibling template, extended with a full-width contact band at the bottom.

1. [`richtext`](/components/richtext) - back link to the parent overview. Margin below: ~45px (visual estimate).
2. [`richtext`](/components/richtext) - main column: h1 program title, intro paragraphs, candidate-profile bullet lists, "Hiring process" and "Requirements" sections. Margin below: ~80px (visual estimate).
3. [`cta-block`](/components/cta-block) - sidebar "Be a part of our team" with "Search jobs" button. Margin below: 50px (section-buffer, 5rem).
4. [`cta-block`](/components/cta-block) - sidebar "Don't see the role you're looking for?" with "Join talent community" button. Margin below: 50px (section-buffer).
5. [`richtext`](/components/richtext) - full-width light-gray contact band opens: centered "Contact Us" heading with recruiter prompt and mailto link. Margin below: ~30px.
6. [`form-block`](/components/form-block) - AEM avd-form contact form inside the band (renders as the email prompt on the representative page; member pages can expose input fields). Margin below: ~80px to page end.

Vertical rhythm: section-buffer 5rem/50px between sidebar CTAs and before the contact band; the gray band supplies its own ~100px internal padding; buffers halve on mobile.

## Screenshot

Full-page capture at 1440px viewport width (header/footer cropped), scaled to 800px:

<img src="/screens/en_home_careers_early-career-opportunities_asia-pacific_lead-program.webp" alt="Full-page screenshot of /en/home/careers/early-career-opportunities/asia-pacific/lead-program" loading="lazy" style="max-width:100%;border:1px solid var(--vp-c-divider);border-radius:6px;" />
