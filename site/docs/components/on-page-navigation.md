---
title: "On-page Navigation"
---

# On-page Navigation

**Component:** `on-page-navigation`  
**DEPT mapping:** On page navigation  
**Used on:** 16 page(s)

Quick-link navigation band in two observed shapes: a row of icon quick links to key sections (Businesses / Reports / Sustainability / About) and a horizontal anchor-link bar jumping to page sections (#impact, #grantmaking, ...) with an active state.

## CMS data model

| Field | Type | Required | Description |
|---|---|---|---|
| `variant` | string | no | Enum: iconLinks | anchors. |
| `links` | array&lt;object> | yes | Navigation items (merged: items[] + links[]). Each: {label (string, required), icon (image, iconLinks variant), anchor (string, in-page target), url (link)}. |
| `activeUrl` | link | no | Currently active item (usually derived at runtime, not authored). |

## Used on slugs

- [`/en/home`](/pages/en_home)
- [`/en/home/company/avery-dennison-foundation`](/pages/en_home_company_avery-dennison-foundation)
- [`/en/home/company/avery-dennison-foundation/grantmaking`](/pages/en_home_company_avery-dennison-foundation_grantmaking)
- [`/en/home/company/corporate-venture-capital-program`](/pages/en_home_company_corporate-venture-capital-program)
- [`/en/home/company/corporate-venture-capital-program/portfolio-in-the-news`](/pages/en_home_company_corporate-venture-capital-program_portfolio-in-the-news)
- [`/en/home/company/our-leadership`](/pages/en_home_company_our-leadership)
- [`/en/home/company/overview`](/pages/en_home_company_overview)
- [`/en/home/company/reports`](/pages/en_home_company_reports)
- [`/en/home/eu-policy`](/pages/en_home_eu-policy)
- [`/en/home/eu-policy/benefits-of-sustainability-compliance`](/pages/en_home_eu-policy_benefits-of-sustainability-compliance)
- [`/en/home/eu-policy/europes-waste-problem`](/pages/en_home_eu-policy_europes-waste-problem)
- [`/en/home/eu-policy/our-vision-more-sustainable-competitive-europe-connecting-physical-and-digital`](/pages/en_home_eu-policy_our-vision-more-sustainable-competitive-europe-connecting-physical-and-digital)
- [`/en/home/eu-policy/sustainable-supply-chains`](/pages/en_home_eu-policy_sustainable-supply-chains)
- [`/en/home/industries`](/pages/en_home_industries)
- [`/en/home/news/press-releases`](/pages/en_home_news_press-releases)
- [`/en/home/technologies`](/pages/en_home_technologies)
