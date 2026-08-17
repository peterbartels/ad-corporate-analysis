---
title: "Publication"
---

# Publication

**Component:** `publication`  
**DEPT mapping:** Publication component  
**Used on:** 2 page(s)

Embedded page-flip document viewer for annual/integrated reports, rendering a Heyzine flip-book in a responsive iframe. Used on report landing and publication pages.

> **Migration notes:** PDF-embed per DEPT table. Third-party Heyzine dependency; confirm CSP/consent handling in the Next.js build.

## Example

![Publication example — /en/home/company/avery-dennison-foundation/corporate-social-responsibility-report](/component-examples/publication.png)

*Captured live from [/en/home/company/avery-dennison-foundation/corporate-social-responsibility-report](https://www.averydennison.com/en/home/company/avery-dennison-foundation/corporate-social-responsibility-report.html) — see the [page composition](/pages/en_home_company_avery-dennison-foundation_corporate-social-responsibility-report).*

## CMS data model

| Field | Type | Required | Description |
|---|---|---|---|
| `embedUrl` | link | yes | Heyzine flip-book iframe src (merged: flipbookUrl + embedUrl). |
| `title` | string | yes | Report title for the iframe accessibility label. |

## Used on slugs

- [`/en/home/company/avery-dennison-foundation/corporate-social-responsibility-report`](/pages/en_home_company_avery-dennison-foundation_corporate-social-responsibility-report)
- [`/en/home/company/reports/integrated-report`](/pages/en_home_company_reports_integrated-report)
