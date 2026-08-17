# Testimonial Cards

**Component:** `testimonial-card`  
**DEPT mapping:** NEW - Testimonial Card Grid  
**Used on:** 1 page(s)

Grid of grey quote cards (observed: two side by side on the campaign report page, bespoke nourish-testimony markup). Each card has a decorative illustration on top, a heading, a pull quote, and speaker attribution with round avatar, name and role.

> **Migration notes:** NEW component (bespoke campaign HTML). Distinct from article-quote (single inline pull quote); if DEPT prefers consolidation it could become a multi-item variant of the Quote Block.

## CMS data model

| Field | Type | Required | Description |
|---|---|---|---|
| `items` | array<object> | yes | Quote cards. Each: {illustration (image), title (string), quote (string, required), avatar (image), name (string, required), role (string)}. |

## Used on slugs

- `/en/home/unlocking-food-waste-value-report`
