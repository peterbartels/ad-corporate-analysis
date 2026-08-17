---
title: "Campaign Stat Hero"
---

# Campaign Stat Hero

**Component:** `campaign-stat-hero`  
**DEPT mapping:** NEW - Campaign Stat Hero  
**Used on:** 6 page(s)

Bespoke campaign hero banner (nourish-header markup built on carousel structure): full-width background photo with uppercase eyebrow, large h1 campaign title (e.g. 'The $540B Grocery Bill'), supporting subheading, a column of stat lines separated by horizontal rules, and an optional red CTA button (desktop and mobile variants). Used on the homepage takeover and campaign report/contact/share pages.

> **Migration notes:** NEW component. Absorbs raw 'campaign-stat-banner' (identical props, same bespoke nourish-header markup). Kept separate from short-hero (no text) and statistics-block (inline stats) — genuinely a distinct hero pattern.

## CMS data model

| Field | Type | Required | Description |
|---|---|---|---|
| `backgroundImage` | image | yes | Full-width background photo. |
| `eyebrow` | string | no | Small uppercase campaign line, e.g. 'MAKING THE INVISIBLE VISIBLE'. |
| `heading` | string | yes | H1 campaign title. |
| `subheading` | string | no | H2 support line. |
| `stats` | array&lt;object> | no | Stat lines separated by rules. Each: {text (string, e.g. '3,500 GLOBAL RETAIL LEADERS')}. |
| `ctaLabel` | string | no | CTA button label, e.g. 'Download the full report'. |
| `ctaUrl` | link | no | CTA target (often an anchor to the form). |

## Used on slugs

- [`/en/home`](/pages/en_home)
- [`/en/home/industries`](/pages/en_home_industries)
- [`/en/home/technologies`](/pages/en_home_technologies)
- [`/en/home/unlocking-food-waste-value-report`](/pages/en_home_unlocking-food-waste-value-report)
- [`/en/home/unlocking-food-waste-value-report/connect-with-our-experts`](/pages/en_home_unlocking-food-waste-value-report_connect-with-our-experts)
- [`/en/home/unlocking-food-waste-value-report/share`](/pages/en_home_unlocking-food-waste-value-report_share)
