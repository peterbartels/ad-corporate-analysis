---
title: "People Overview"
---

# People Overview

**Component:** `people-overview`  
**DEPT mapping:** People overview 6 tiles  
**Used on:** 2 page(s)

Grid of people tiles with circular photo, name and role, optionally grouped under a heading (e.g. 'Enterprise' leadership group on a gray band). Tiles optionally link to individual bio pages; observed in 3-per-row groups on leadership and ventures pages.

> **Migration notes:** In headless, people should be entries of a Person content type referenced here (shared with person-bio and article-author).

## Example

![People Overview example — /en/home/company/our-leadership](/component-examples/people-overview.png)

*Captured live from [/en/home/company/our-leadership](https://www.averydennison.com/en/home/company/our-leadership.html) — see the [page composition](/pages/en_home_company_our-leadership).*

## CMS data model

| Field | Type | Required | Description |
|---|---|---|---|
| `heading` | string | no | Group heading, e.g. 'Enterprise'. |
| `people` | array&lt;object> | yes | People tiles. Each: {photo (image, required), name (string, required), role (string), bioUrl (link, optional link to bio page)}. |

## Used on slugs

- [`/en/home/company/corporate-venture-capital-program`](/pages/en_home_company_corporate-venture-capital-program)
- [`/en/home/company/our-leadership`](/pages/en_home_company_our-leadership)
