---
title: "making-possible"
---

<!-- generated: component composition analysis -->
**Page:** [/en/home/making-possible](https://www.averydennison.com/en/home/making-possible.html)  
**Template cluster:** `f18c34ef03` (campaign-landing)  
*Rem base: the site sets `html { font-size: 62.5% }` at desktop widths (>=1180px), so 1rem = 10px in all margin values below.*

# Campaign landing page (Making Possible)

Highly art-directed brand-campaign page built largely from raw html embeds: hero video, interactive pill-video section, dark customer-spotlight band, auto-scrolling press slider and a full-bleed contact form.

1. [`video-block`](/components/video-block) — Full-width hero video (self-hosted DAM mp4, poster + native controls). Margin below: 0, flows into the title band.
2. [`richtext`](/components/richtext) — Light-gray band with oversized red display title "MAKING POSSIBLE(TM)" (invisible h1 for a11y) and two centered intro paragraphs. Margin below: 100px (content-buffer, 10rem).
3. [`richtext`](/components/richtext) — H2 "Helping to address pressing industry challenges" + intro line. Margin below: ~40px (visual estimate).
4. [`html-embed`](/components/html-embed) — Custom interactive "pill video" component: four challenge labels, each paired with a looping pill-shaped video (desktop) and an h4 + mobile video variant (mp-trend-mobile). Data: items[] {label, pillVideo, mobileVideo}. Margin below: 100px (content-buffer, 10rem).
5. [`callout-box`](/components/callout-box) — Gray "Related" panel: report thumbnail, bold title (Forbes Insights report), supporting copy, black "View report" button. Margin below: 100px (content-buffer, 10rem).
6. [`richtext`](/components/richtext) — Reverse H2 "Customer spotlight" opening a full-bleed black band.
7. [`carousel-block`](/components/carousel-block) — Six customer-story cards on the dark band (2 featured large + 4 standard), each image + headline + "Read more >" link. Margin below: 100px (content-buffer, 10rem).
8. [`richtext`](/components/richtext) — H2 "In the press". Margin below: 50px (section-buffer, 5rem).
9. [`carousel-block`](/components/carousel-block) — Auto-scrolling press marquee (custom mp-press-slider embed): 5 cards, each an h4 headline + external CTA button (Go to video/article/podcast); pauses on hover. Margin below: 100px (content-buffer, 10rem).
10. [`form-block`](/components/form-block) — Full-bleed dark-red contact band: heading + "go to home page" link, fields firstName/lastName/company/email + message textarea, reCAPTCHA, "Send message" pill button; POST to /bin/services/contacts.

Vertical rhythm: 100px content-buffer (10rem) between major campaign zones and 50px section-buffer (5rem) inside zones, implemented as html-embed spacers (9 content-buffer + 6 section-buffer occurrences); buffers halve on mobile. Dark bands are full-bleed with internal padding.

## Screenshot

Full-page capture at 1440px viewport width (header/footer cropped), scaled to 800px:

<img src="/screens/en_home_making-possible.webp" alt="Full-page screenshot of /en/home/making-possible" loading="lazy" style="max-width:100%;border:1px solid var(--vp-c-divider);border-radius:6px;" />
