# People Overview

**Component:** `people-overview`  
**DEPT mapping:** People overview 6 tiles  
**Used on:** 2 page(s)

Grid of people tiles with circular photo, name and role, optionally grouped under a heading (e.g. 'Enterprise' leadership group on a gray band). Tiles optionally link to individual bio pages; observed in 3-per-row groups on leadership and ventures pages.

> **Migration notes:** In headless, people should be entries of a Person content type referenced here (shared with person-bio and article-author).

## CMS data model

| Field | Type | Required | Description |
|---|---|---|---|
| `heading` | string | no | Group heading, e.g. 'Enterprise'. |
| `people` | array<object> | yes | People tiles. Each: {photo (image, required), name (string, required), role (string), bioUrl (link, optional link to bio page)}. |

## Used on slugs

- `/en/home/company/corporate-venture-capital-program`
- `/en/home/company/our-leadership`
