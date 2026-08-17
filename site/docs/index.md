---
layout: home
title: Overview
hero:
  name: Component Inventory
  text: Avery Dennison corporate website
  tagline: 328 captured pages, 164 unique layout templates, distilled into 36 reusable components with headless-CMS data models — prepared for the AEM 6.5 → React/Next.js migration by DEPT.
  actions:
    - theme: brand
      text: Browse components
      link: /components/
    - theme: alt
      text: Browse pages
      link: /pages/
features:
  - title: 36 components
    details: Deduplicated component library. 28 map to the DEPT component vocabulary, 8 are newly identified. Each doc includes a description, variants, a headless-CMS data model, migration notes, and every slug using it.
    link: /components/
  - title: 328 page compositions
    details: Every captured page documents its ordered component composition and the vertical margins between components, plus the full-page screenshot. Identical templates cross-reference each other.
    link: /pages/
  - title: Real margins, real data
    details: Margins come from the site's spacer system (content-buffer 10rem, home-nav-buffer 7.5rem, section-buffer 5rem). The site sets html font-size to 62.5% at desktop widths, so 1rem = 10px in all values.
---

## How this inventory was made

- Every page under `output/pages` (full-page screenshot + HTML capture) was parsed into an ordered outline of AEM component markers, then clustered: **328 pages collapse into 164 unique layout templates** (plus 6 empty AEM "Node Page" stubs).
- Analysis agents examined each template's screenshot and markup, naming sections against the DEPT component mapping and recording the data a headless CMS would need.
- A reconciliation pass merged synonyms (43 raw names → **36 canonical components**) and finalized the CMS field models.
- Margins were verified against the site's inline spacer CSS. Note the rem base: `html { font-size: 62.5% }` at ≥1180px viewports, so **1rem = 10px**.

## Reading guide

- **[Components](/components/)** — start here for the migration content model. The overview table is sorted by how many pages use each component.
- **[Pages](/pages/)** — per-page composition docs, grouped by site section. Pages sharing a template link to each other, so reviewing one representative per template covers the whole site.
