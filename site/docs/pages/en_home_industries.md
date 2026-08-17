---
title: "industries"
---

<!-- generated: component composition analysis -->
**Page:** [`/en/home/industries`](/pages/en_home_industries)  
**Template cluster:** `c5ebb61544` (corporate homepage)  
*Rem base: the site sets `html { font-size: 62.5% }` at desktop widths (>=1180px), so 1rem = 10px in all margin values below.*

> **Template note:** this layout is shared by 3 pages:
> - [`/en/home`](/pages/en_home)
> - [`/en/home/industries`](/pages/en_home_industries)
> - [`/en/home/technologies`](/pages/en_home_technologies)

# Corporate homepage

Full-width marketing homepage; the only template using the hero carousel, dark business-grid band and campaign banner.

1. [`hero-carousel`](/components/hero-carousel) - 3 rotating full-bleed slides, each with a white text card (heading, short body, red CTA pill) and slide indicators/arrows. Margin below: 75px (home-nav-buffer, 7.5rem; 0 on mobile).
2. [`on-page-navigation`](/components/on-page-navigation) - row of 4 icon quick links (Businesses, Reports, Sustainability, About) linking to key site sections. Margin below: 50px (section-buffer, 5rem).
3. [`richtext`](/components/richtext) - centered one-paragraph company mission statement. Margin below: 100px (content-buffer, 10rem).
4. [`richtext`](/components/richtext) - "Our businesses" heading, opening a full-width dark (near-black) band. Margin below: 50px (section-buffer).
5. [`image-link-block`](/components/image-link-block) - grid of 15 small vertical box-button links, one per business unit, white cards on the dark band. Margin below: ~120px (band padding, visual estimate).
6. [`richtext`](/components/richtext) - "Inside Avery Dennison" section heading on light-gray band. Margin below: 50px (section-buffer).
7. [`campaign-stat-hero`](/components/campaign-stat-hero) - bespoke full-width campaign banner (nourish-header markup): background photo, eyebrow, oversized heading, subheading, rule-separated stat lines and a CTA button. Margin below: 50px (section-buffer).
8. [`side-by-side`](/components/side-by-side) - horizontal news teaser: eyebrow "In the news", title, read-more link beside a large graphic. Margin below: 50px (section-buffer).
9. [`cta-block`](/components/cta-block) - white card with eyebrow, headline and a "View CSR Report" button. Margin below: 50px (section-buffer).
10. [`tile`](/components/tile) - two vertical teaser cards (image on top, category label, title, read-more link) for editorial articles. Margin below: ~80px to page end.

Vertical rhythm: spacer components drive all gaps - content-buffer 10rem/100px between major chapters, section-buffer 5rem/50px between sections, home-nav-buffer 7.5rem/75px after the hero; buffers halve (5rem) or collapse (home-nav 0) on mobile.

## Screenshot

Full-page capture at 1440px viewport width (header/footer cropped), scaled to 800px:

<img src="/screens/en_home_industries.webp" alt="Full-page screenshot of /en/home/industries" loading="lazy" style="max-width:100%;border:1px solid var(--vp-c-divider);border-radius:6px;" />
