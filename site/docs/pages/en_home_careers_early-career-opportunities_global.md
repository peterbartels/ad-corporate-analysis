---
title: "global"
---

<!-- generated: component composition analysis -->
**Page:** [`/en/home/careers/early-career-opportunities/global`](/pages/en_home_careers_early-career-opportunities_global)  
**Template cluster:** `684a270a48` (career program detail page (two-column with sidebar))  
*Rem base: the site sets `html { font-size: 62.5% }` at desktop widths (>=1180px), so 1rem = 10px in all margin values below.*

# Career program detail page (two-column with sidebar)

Global program (GOLD) detail template: top-buffered editorial column and the standard two-group recruiting sidebar, no contact band.

1. [`richtext`](/components/richtext) - back link to the early-career-opportunities parent. Margin below: 50px (section-buffer, 5rem). A 100px content-buffer precedes it at the top of the page.
2. [`richtext`](/components/richtext) - main column part 1: h1 program title, intro paragraph, rotation/benefit bullet lists and a "What are we looking for" list. Margin below: 50px (section-buffer).
3. [`richtext`](/components/richtext) - main column part 2: "Application Process" heading with "On Campus:" and "Online" bullet lists. Margin below: ~80px (visual estimate).
4. [`cta-block`](/components/cta-block) - sidebar "Be a part of our team" with "Search jobs" button. Margin below: 50px (section-buffer).
5. [`cta-block`](/components/cta-block) - sidebar "Don't see the role you're looking for?" with "Join talent community" button. Margin below: 100px (content-buffer, 10rem) to page end.

Vertical rhythm: content-buffer 10rem/100px opens and closes the page; section-buffer 5rem/50px separates the back link, copy blocks and sidebar groups; buffers halve on mobile.

## Screenshot

Full-page capture at 1440px viewport width (header/footer cropped), scaled to 800px:

<img src="/screens/en_home_careers_early-career-opportunities_global.webp" alt="Full-page screenshot of /en/home/careers/early-career-opportunities/global" loading="lazy" style="max-width:100%;border:1px solid var(--vp-c-divider);border-radius:6px;" />
