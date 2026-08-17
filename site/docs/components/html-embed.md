---
title: "HTML Embed"
---

# HTML Embed

**Component:** `html-embed`  
**DEPT mapping:** HTML embed  
**Used on:** 2 page(s)

Raw HTML escape hatch for bespoke markup that has no structured component, e.g. the stacked orange policy-highlight rows on the EU campaign page. Renders author-supplied HTML inside the page layout.

> **Migration notes:** Keep usage minimal in the headless build; each observed usage (orange highlight rows) should ideally get a structured block instead. Also the fallback for one-off campaign share widgets (see table notes).

## CMS data model

| Field | Type | Required | Description |
|---|---|---|---|
| `html` | text | yes | Raw HTML markup (sanitized/allow-listed at render time). |
| `label` | string | no | Internal editor label describing what the embed contains. |

## Used on slugs

- [`/en/home/eu-policy/our-vision-more-sustainable-competitive-europe-connecting-physical-and-digital`](/pages/en_home_eu-policy_our-vision-more-sustainable-competitive-europe-connecting-physical-and-digital)
- [`/en/home/making-possible`](/pages/en_home_making-possible)
