---
title: "our-history"
---

<!-- generated: component composition analysis -->
**Page:** [/en/home/company/our-history](https://www.averydennison.com/en/home/company/our-history.html)  
**Template cluster:** `91fe310b40` (company history timeline page)  
*Rem base: the site sets `html { font-size: 62.5% }` at desktop widths (>=1180px), so 1rem = 10px in all margin values below.*

# Company history timeline page

Bespoke long-scroll timeline: intro story rows followed by decade bands, each mixing captioned historic photos and milestone text cards. Built in AEM from generic image/text blocks; for headless it should become one structured component.

1. [`button`](/components/button) — outlined "Jump to 2020-Present" anchor shortcut at the top. Margin below: 50px (section-buffer, 5rem).
2. [`richtext`](/components/richtext) — centered display headline introducing the story. Margin below: 100px (content-buffer, 10rem).
3. [`side-by-side`](/components/side-by-side) — historic founder photo left, founding story text right. Margin below: 86px (history-buffer, 5.4rem).
4. [`side-by-side`](/components/side-by-side) — caption text left, historic product photo right. Margin below: 100px (content-buffer).
5. [`timeline-block`](/components/timeline-block) — seven era sections (1940–1949 through 2020–Present) on alternating white/gray bands. Each era shows its range label in the left column and a mix of photo cards (year, image, caption) and bordered milestone text cards (year + description); entries inside an era are spaced by 86px history-buffer with 160px content-buffer between eras. Margin below: 100px (content-buffer) to page end.

## Vertical rhythm
Three-tier system: content-buffer 10rem/100px between eras, page-specific history-buffer 5.4rem/86px between timeline entries, section-buffer 5rem/50px for smaller gaps.

## Screenshot

Full-page capture at 1440px viewport width (header/footer cropped), scaled to 800px:

<img src="/screens/en_home_company_our-history.webp" alt="Full-page screenshot of /en/home/company/our-history" loading="lazy" style="max-width:100%;border:1px solid var(--vp-c-divider);border-radius:6px;" />
