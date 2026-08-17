---
title: "Timeline Block"
---

# Timeline Block

**Component:** `timeline-block`  
**DEPT mapping:** NEW - Timeline Block  
**Used on:** 1 page(s)

Company-history timeline: era sections (1940-1949 through 2020-Present) rendered as alternating white/gray full-width bands with the era label in a left column, each containing mixed entries — photo cards with year and caption, and bordered milestone text cards.

> **Migration notes:** NEW component, single-use on the company history page.

## CMS data model

| Field | Type | Required | Description |
|---|---|---|---|
| `decades` | array&lt;object> | yes | Era sections. Each: {label (string, required, e.g. '1960-1989'), entries (array&lt;object>: {year (string), image (image, optional historic photo), imageAlt (string), text (richtext, milestone description)})}. |

## Used on slugs

- [`/en/home/company/our-history`](/pages/en_home_company_our-history)
