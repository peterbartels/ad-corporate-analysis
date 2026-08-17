# Tiles

**Component:** `tile`  
**DEPT mapping:** Tiles  
**Used on:** 3 page(s)

Vertical text-image teaser cards (observed: 2 side by side on the homepage) with image, category eyebrow, title and a read-more link. Editorial teaser counterpart to the query-driven carousel-block.

> **Migration notes:** DEPT vocabulary also lists 'tile-list'; not observed separately in this inventory — this block already models the list.

## Example

![Tiles example — /en/home](examples/tile.png)

*Captured live from [/en/home](https://www.averydennison.com/en/home.html) — see the [page composition](../pages/en_home/composition.md).*

## CMS data model

| Field | Type | Required | Description |
|---|---|---|---|
| `items` | array<object> | yes | Teaser cards. Each: {image (image, required), category (string), title (string, required), linkLabel (string), linkUrl (link, required)}. |

## Used on slugs

- `/en/home`
- `/en/home/industries`
- `/en/home/technologies`
