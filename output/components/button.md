# Button

**Component:** `button`  
**DEPT mapping:** Button  
**Used on:** 30 page(s)

Standalone pill-style button/link, in primary red, secondary outline and dark/black variants. Supports in-page anchor targets and an optional small sidebar heading (e.g. 'Related') rendered above it.

## Example

![Button example — /en/home/careers/overview](examples/button.png)

*Captured live from [/en/home/careers/overview](https://www.averydennison.com/en/home/careers/overview.html) — see the [page composition](../pages/en_home_careers_overview/composition.md).*

## CMS data model

| Field | Type | Required | Description |
|---|---|---|---|
| `label` | string | yes | Button text. |
| `url` | link | yes | Target URL or in-page anchor (merged: url + anchor). |
| `variant` | string | no | Enum: primary | secondary | dark (merged: variant + style). |
| `heading` | string | no | Optional sub-heading rendered above the button in sidebars. |

## Used on slugs

- `/en/home/careers/overview`
- `/en/home/careers/search-jobs`
- `/en/home/careers/talent-community`
- `/en/home/company/avery-dennison-foundation`
- `/en/home/company/avery-dennison-foundation/corporate-social-responsibility-report`
- `/en/home/company/avery-dennison-foundation/grantmaking`
- `/en/home/company/corporate-venture-capital-program`
- `/en/home/company/our-history`
- `/en/home/company/reports/integrated-report`
- `/en/home/contact-us/thank-you`
- `/en/home/eu-policy/benefits-of-sustainability-compliance`
- `/en/home/eu-policy/europes-waste-problem`
- `/en/home/eu-policy/sustainable-supply-chains`
- `/en/home/news/press-releases/avery-dennison-announces-fourth-quarter-and-full-year-2022-results`
- `/en/home/news/press-releases/avery-dennison-announces-q1-2022-results`
- `/en/home/news/press-releases/avery-dennison-announces-q1-2023-results`
- `/en/home/news/press-releases/avery-dennison-announces-q1-2024-results`
- `/en/home/news/press-releases/avery-dennison-announces-q1-2025-results`
- `/en/home/news/press-releases/avery-dennison-announces-q1-2026-results`
- `/en/home/news/press-releases/avery-dennison-announces-q2-2022-results`
- `/en/home/news/press-releases/avery-dennison-announces-q2-2023-results`
- `/en/home/news/press-releases/avery-dennison-announces-q2-2024-results`
- `/en/home/news/press-releases/avery-dennison-announces-q2-2025-results`
- `/en/home/news/press-releases/avery-dennison-announces-q3-2023-results`
- `/en/home/news/press-releases/avery-dennison-announces-q3-2024-results`
- `/en/home/news/press-releases/avery-dennison-announces-q3-2025-results`
- `/en/home/news/press-releases/avery-dennison-announces-q4-and-full-year-2023-results`
- `/en/home/news/press-releases/avery-dennison-announces-q4-and-full-year-2024-results`
- `/en/home/news/press-releases/avery-dennison-announces-q4-and-full-year-2025-results`
- `/en/home/unlocking-food-waste-value-report`
