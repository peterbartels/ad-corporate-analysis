---
title: "Tiles"
---

# Tiles

**Component:** `tile`  
**DEPT mapping:** Tiles  
**Used on:** 3 page(s)

Vertical text-image teaser cards (observed: 2 side by side on the homepage) with image, category eyebrow, title and a read-more link. Editorial teaser counterpart to the query-driven carousel-block.

> **Migration notes:** DEPT vocabulary also lists 'tile-list'; not observed separately in this inventory — this block already models the list.

## CMS data model

| Field | Type | Required | Description |
|---|---|---|---|
| `items` | array&lt;object> | yes | Teaser cards. Each: {image (image, required), category (string), title (string, required), linkLabel (string), linkUrl (link, required)}. |

## Used on slugs

- [`/en/home`](/pages/en_home)
- [`/en/home/industries`](/pages/en_home_industries)
- [`/en/home/technologies`](/pages/en_home_technologies)
