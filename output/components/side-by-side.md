# Side-by-side Block

**Component:** `side-by-side`  
**DEPT mapping:** Side-by-side Block / Featured content block  
**Used on:** 56 page(s)

Two-column media + text block, the most versatile layout component observed. Text column carries eyebrow, heading, rich body and up to two pill buttons; media column carries an image (with caption and stat/source notes), an image pair, or an embedded YouTube video, on either side. Variants include a grey band background, an elevated white card ('featured content') style, a right-hand callout panel, and a repeated-rows mode (logo/portrait left, linked text right) used for award winners, capability lists and profile sequences.

> **Migration notes:** Needs reconciliation with DEPT: the repeated-rows 'items' usage may be better authored as multiple side-by-side instances or a dedicated list block; decide before content modeling freeze.

## CMS data model

| Field | Type | Required | Description |
|---|---|---|---|
| `eyebrow` | string | no | Eyebrow label above the heading (merged: eyebrow + sectionLabel). |
| `heading` | string | no | Block title. |
| `body` | richtext | no | Text column content (merged: body + text). |
| `image` | image | no | Media column image. |
| `imageAlt` | string | no | Alt text. |
| `imageCaption` | string | no | Caption under the image (merged: imageCaption + caption). |
| `images` | array<image> | no | Optional image pair shown side by side in the media column. |
| `videoUrl` | link | no | YouTube embed in the media column (merged: videoUrl + video.youtubeUrl). |
| `mediaPosition` | string | no | Enum: left | right (merged: imagePosition + mediaPosition). |
| `background` | string | no | Section background token, e.g. light grey band. |
| `cardStyle` | boolean | no | Render as elevated white card with shadow (merged: cardStyle + highlighted). |
| `buttons` | array<object> | no | Up to 2 buttons. Each: {label (string), url (link), style (enum: primary | secondary)}. |
| `ctaLabel` | string | no | Single 'Read more'-style link label (merged: linkLabel + ctaLabel). |
| `ctaUrl` | link | no | Single link target (merged: linkUrl + ctaUrl). |
| `statNotes` | richtext | no | Bold statistics + citation under the caption. |
| `callout` | object | no | Optional right-column callout panel: {title (string), body (richtext)}. |
| `items` | array<object> | no | Repeated-rows variant (award winners, capabilities, profiles). Each: {image (image), imageAlt (string), title (string), titleUrl (link), subtitle (string, e.g. award category), heading (string), body (richtext), ctaLabel (string), ctaUrl (link), regionalLinks (array<object>: {label, url})}. |

## Used on slugs

- `/en/home`
- `/en/home/careers/early-career-opportunities`
- `/en/home/careers/overview`
- `/en/home/company/avery-dennison-foundation`
- `/en/home/company/corporate-venture-capital-program`
- `/en/home/company/diversity`
- `/en/home/company/our-history`
- `/en/home/company/overview`
- `/en/home/eu-policy`
- `/en/home/eu-policy/benefits-of-sustainability-compliance`
- `/en/home/eu-policy/europes-waste-problem`
- `/en/home/eu-policy/our-vision-more-sustainable-competitive-europe-connecting-physical-and-digital`
- `/en/home/eu-policy/sustainable-supply-chains`
- `/en/home/industries`
- `/en/home/industries/advertising`
- `/en/home/industries/advertising-and-promotion`
- `/en/home/industries/apparel`
- `/en/home/industries/apparel-branding-and-solutions`
- `/en/home/industries/architecture-and-buildings`
- `/en/home/industries/automotive`
- `/en/home/industries/building-and-construction`
- `/en/home/industries/consumer-packaged-goods`
- `/en/home/industries/durable-goods-and-equipment`
- `/en/home/industries/durable-goods-and-equipment-labels`
- `/en/home/industries/electronics-and-electrical`
- `/en/home/industries/food`
- `/en/home/industries/government`
- `/en/home/industries/logistics`
- `/en/home/industries/medical-and-healthcare`
- `/en/home/industries/optica-supply-chain-solutions`
- `/en/home/industries/retail`
- `/en/home/industries/rfid`
- `/en/home/industries/supply-chain`
- `/en/home/industries/transportation`
- `/en/home/legal-and-privacy-notices/general-terms-and-conditions-of-purchase`
- `/en/home/news/company-blog/10-fave-automotive-restyling-projects-of-2024`
- `/en/home/news/company-blog/adf-scholars-spotlight-august-2024`
- `/en/home/news/company-blog/avery-dennison-foundation-shares-new-strategy-address-global-challenges`
- `/en/home/news/company-blog/celebrating-25-years-in-india`
- `/en/home/news/company-blog/celebrating-hispanic-heritage-month`
- `/en/home/news/company-blog/celebrating-the-2024-avery-dennison-foundation-leadership-excellence-awardees`
- `/en/home/news/company-blog/graphics-solutions-favorite-projects-of-q1-2025`
- `/en/home/news/company-blog/graphics-solutions-favorite-projects-of-q2-2025`
- `/en/home/news/company-blog/graphics-solutions-favorite-projects-of-q3-2025`
- `/en/home/news/company-blog/graphics-solutions-favorite-projects-of-q4-2025`
- `/en/home/news/company-blog/happy-pride-introducing-unite-employee-resource-group`
- `/en/home/news/company-blog/introducing-avery-dennison-elevate-employee-resource-group`
- `/en/home/news/company-blog/introducing-veterans-employee-resource-group`
- `/en/home/news/company-blog/what-to-look-for-in-an-auto-window-film-ft-harold-nimtz`
- `/en/home/news/company-blog/what-would-stan-think-90-years-of-avery-dennison`
- `/en/home/news/company-blog/what-you-need-to-know-ppf-narayan-andrews`
- `/en/home/news/press-releases/avery-dennison-it-announces-inaugural-supplier-excellence-award-winners`
- `/en/home/technologies`
- `/en/home/technologies/core-capabilities`
- `/en/home/technologies/creative-showcase`
- `/en/home/technologies/emerging-technologies`
