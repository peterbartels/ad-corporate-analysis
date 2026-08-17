---
title: "Accordion Block"
---

# Accordion Block

**Component:** `accordion-block`  
**DEPT mapping:** Accordion Block  
**Used on:** 1 page(s)

Expand/collapse block, observed on the employee stories listing page in its tab variant: filter tabs ('All Employees', 'Early Life', ...) that each reveal a different card list. Model supports both classic accordion items and tab-with-list usage.

> **Migration notes:** The tab-filter usage is really a listing filter; DEPT may prefer implementing it as part of the listing page template instead of a content block.

## Example

![Accordion Block example — /en/home/careers/life-at-ad](/component-examples/accordion-block.png)

*Captured live from [/en/home/careers/life-at-ad](https://www.averydennison.com/en/home/careers/life-at-ad.html) — see the [page composition](/pages/en_home_careers_life-at-ad).*

## CMS data model

| Field | Type | Required | Description |
|---|---|---|---|
| `variant` | string | no | Enum: accordion | tabs. |
| `items` | array&lt;object> | yes | Panels/tabs (merged: tabs[]). Each: {label (string, required), content (richtext), list (reference to a carousel-block/list shown when active)}. |

## Used on slugs

- [`/en/home/careers/life-at-ad`](/pages/en_home_careers_life-at-ad)
