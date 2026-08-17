<!-- generated: component composition analysis -->
**Page:** [/en/home/technologies/core-capabilities](https://www.averydennison.com/en/home/technologies/core-capabilities.html)  
**Template cluster:** `95c281f8d4` (capabilities overview landing page)  
*Rem base: the site sets `html { font-size: 62.5% }` at desktop widths (>=1180px), so 1rem = 10px in all margin values below.*

# Capabilities overview landing page

Long card-list landing template: centered intro, one featured card on a grey band, then a stack of uniform text+image cards.

1. `richtext` — centered h1 title with a short centered intro paragraph. Margin below: 50px (section-buffer, 5rem).
2. `side-by-side` — featured card introduced by a small "Featured capability" label, sitting on a full-width grey band: heading, description, black "Learn more" pill button on the left, image on the right. Margin below: 100px (content-buffer, 10rem).
3. `side-by-side` — repeated capability card, ~14 instances stacked vertically (white card with drop shadow): heading, short paragraph, "Learn more" button, image right; some cards append a "Regional sites available" inline link row. Margin between cards: 50px (section-buffer, 5rem); after the last card: 100px (content-buffer) to the footer.

Vertical rhythm: strict alternation of section-buffer 5rem (80px) between sibling cards and content-buffer 10rem (160px desktop, 5rem mobile) after the intro/featured band and at the page end.
