# Callout Box

**Component:** `callout-box`  
**DEPT mapping:** NEW - Highlight Callout Box  
**Used on:** 1 page(s)

Grey highlight panel with a red top border containing a heading and rich text (observed: bulleted country list), floated to the right of the article body. A styled-richtext panel used to break out key program facts.

> **Migration notes:** NEW component (currently styled richtext in AEM). The same callout shape appears embedded in side-by-side (callout.title/callout.body) — reuse this model there.

## CMS data model

| Field | Type | Required | Description |
|---|---|---|---|
| `heading` | string | no | Panel heading / lead-in. |
| `body` | richtext | yes | Panel content, e.g. bulleted list. |
| `position` | string | no | Enum: right | full. Observed floated right beside body text. |

## Used on slugs

- `/en/home/making-possible`
