---
title: "Site Search"
---

# Site Search

**Component:** `site-search`  
**DEPT mapping:** NEW - Site Search  
**Used on:** 1 page(s)

Site-wide search results application (legacy AngularJS): keyword input, collapsible facet filters (Business Solution, Content Type) with value counts, paginated results (10 per page). Functional component — results and facets come from a search index, not the CMS.

> **Migration notes:** NEW, non-CMS functional component. Full rebuild in React against a new search service (e.g. Algolia/Elastic); facet values are runtime data, not authored fields.

## CMS data model

| Field | Type | Required | Description |
|---|---|---|---|
| `searchPlaceholder` | string | no | Input placeholder, 'Enter your search keyword(s) here...'. |
| `submitLabel` | string | no | Search button label. |
| `resultsPerPage` | number | no | Page size (observed 10). |
| `searchEndpoint` | string | yes | Search index/API powering results, facets and pagination. |

## Used on slugs

- [`/en/home/avery-dennison-corporate-search`](/pages/en_home_avery-dennison-corporate-search)
