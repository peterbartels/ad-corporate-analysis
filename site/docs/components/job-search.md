---
title: "Job Search"
---

# Job Search

**Component:** `job-search`  
**DEPT mapping:** HTML embed (SmartRecruiters)  
**Used on:** 1 page(s)

SmartRecruiters job-search widget: keyword search, country/city/department dropdowns, work-location toggle chips, and result cards (title, posted badge, location, department, worksite) with a 'View more jobs' load-more. All job data and filters come client-side from the SmartRecruiters API — only widget configuration is CMS-authored.

> **Migration notes:** Per DEPT table this is an HTML embed of the SmartRecruiters widget; jobCard.* and filters[] props observed by analysts are runtime API data, not CMS fields. Rebuild as a React integration in Next.js.

## CMS data model

| Field | Type | Required | Description |
|---|---|---|---|
| `companyId` | string | yes | SmartRecruiters company identifier (AveryDennison). |
| `searchPlaceholder` | string | no | Search input placeholder. |
| `viewMoreLabel` | string | no | 'View more jobs' button label. |

## Used on slugs

- [`/en/home/careers/search-jobs`](/pages/en_home_careers_search-jobs)
