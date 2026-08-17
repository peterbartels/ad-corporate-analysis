---
title: "creative-showcase"
---

<!-- generated: component composition analysis -->
**Page:** [`/en/home/technologies/creative-showcase`](/pages/en_home_technologies_creative-showcase)  
**Template cluster:** `1a45184d88` (technology showcase landing page)  
*Rem base: the site sets `html { font-size: 62.5% }` at desktop widths (>=1180px), so 1rem = 10px in all margin values below.*

> **Template note:** this layout is shared by 2 pages:
> - [`/en/home/technologies/creative-showcase`](/pages/en_home_technologies_creative-showcase)
> - [`/en/home/technologies/emerging-technologies`](/pages/en_home_technologies_emerging-technologies)

# Technology showcase landing page

Card-list landing template, structurally the lighter sibling of the capabilities page: centered intro plus a stack of uniform cards, no featured band.

1. [`richtext`](/components/richtext) — centered h1 title with a short centered intro paragraph. Margin below: 100px (content-buffer, 10rem).
2. [`side-by-side`](/components/side-by-side) — repeated showcase card, ~6 instances stacked vertically (white card with drop shadow): heading, description paragraph, black "Learn more" pill button on the left, image on the right; some cards append a "Regional sites available" inline link row. Margin between cards: 50px (section-buffer, 5rem); after the last card: 100px (content-buffer) to the footer.

Vertical rhythm: content-buffer 10rem (160px desktop / 5rem mobile) after the intro and at the page end, section-buffer 5rem (80px) between sibling cards.

## Screenshot

Full-page capture at 1440px viewport width (header/footer cropped), scaled to 800px:

<img src="/screens/en_home_technologies_creative-showcase.webp" alt="Full-page screenshot of /en/home/technologies/creative-showcase" loading="lazy" style="max-width:100%;border:1px solid var(--vp-c-divider);border-radius:6px;" />
