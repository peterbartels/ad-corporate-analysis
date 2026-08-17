---
title: "Categories Block"
---

# Categories Block

**Component:** `categories-block`  
**DEPT mapping:** Categories Block  
**Used on:** 9 page(s)

Row/grid of icon-led category items: line-art icon, title, description, optional number and optional read-more link (e.g. Foundation pillars: Education access / Environmental sustainability / Secure livelihoods; EU-policy teaser columns). An awards variant renders a dark band with a central circular trophy badge and award mentions (title + awarding body) split left/right of the icon.

> **Migration notes:** Absorbs raw 'awards-block' (careers dark award band) — its shape (central trophy icon, items with title + source) matches the awards variant already observed in categories-block.

## CMS data model

| Field | Type | Required | Description |
|---|---|---|---|
| `variant` | string | yes | Enum: categories | awards. |
| `heading` | string | no | Section heading above the items. |
| `intro` | string | no | Short supporting sentence under the heading (awards variant). |
| `icon` | image | no | Central/leading badge graphic, e.g. circular trophy (awards variant). |
| `items` | array&lt;object> | yes | Category or award items (merged: items[] + awards[]). Each: {icon (image), title (string, required), description (richtext), number (string), source (string, awarding organization), linkLabel (string), linkUrl (link)}. |
| `theme` | string | no | Enum: default | dark. Dark/black band token (awards variant). |

## Used on slugs

- [`/en/home/careers/overview`](/pages/en_home_careers_overview)
- [`/en/home/company/avery-dennison-foundation`](/pages/en_home_company_avery-dennison-foundation)
- [`/en/home/company/avery-dennison-foundation/grantmaking`](/pages/en_home_company_avery-dennison-foundation_grantmaking)
- [`/en/home/company/corporate-venture-capital-program`](/pages/en_home_company_corporate-venture-capital-program)
- [`/en/home/company/diversity`](/pages/en_home_company_diversity)
- [`/en/home/eu-policy`](/pages/en_home_eu-policy)
- [`/en/home/eu-policy/benefits-of-sustainability-compliance`](/pages/en_home_eu-policy_benefits-of-sustainability-compliance)
- [`/en/home/eu-policy/europes-waste-problem`](/pages/en_home_eu-policy_europes-waste-problem)
- [`/en/home/eu-policy/our-vision-more-sustainable-competitive-europe-connecting-physical-and-digital`](/pages/en_home_eu-policy_our-vision-more-sustainable-competitive-europe-connecting-physical-and-digital)
