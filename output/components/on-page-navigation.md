# On-page Navigation

**Component:** `on-page-navigation`  
**DEPT mapping:** On page navigation  
**Used on:** 16 page(s)

Quick-link navigation band in two observed shapes: a row of icon quick links to key sections (Businesses / Reports / Sustainability / About) and a horizontal anchor-link bar jumping to page sections (#impact, #grantmaking, ...) with an active state.

## CMS data model

| Field | Type | Required | Description |
|---|---|---|---|
| `variant` | string | no | Enum: iconLinks | anchors. |
| `links` | array<object> | yes | Navigation items (merged: items[] + links[]). Each: {label (string, required), icon (image, iconLinks variant), anchor (string, in-page target), url (link)}. |
| `activeUrl` | link | no | Currently active item (usually derived at runtime, not authored). |

## Used on slugs

- `/en/home`
- `/en/home/company/avery-dennison-foundation`
- `/en/home/company/avery-dennison-foundation/grantmaking`
- `/en/home/company/corporate-venture-capital-program`
- `/en/home/company/corporate-venture-capital-program/portfolio-in-the-news`
- `/en/home/company/our-leadership`
- `/en/home/company/overview`
- `/en/home/company/reports`
- `/en/home/eu-policy`
- `/en/home/eu-policy/benefits-of-sustainability-compliance`
- `/en/home/eu-policy/europes-waste-problem`
- `/en/home/eu-policy/our-vision-more-sustainable-competitive-europe-connecting-physical-and-digital`
- `/en/home/eu-policy/sustainable-supply-chains`
- `/en/home/industries`
- `/en/home/news/press-releases`
- `/en/home/technologies`
