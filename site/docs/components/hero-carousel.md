---
title: "Hero Carousel"
---

# Hero Carousel

**Component:** `hero-carousel`  
**DEPT mapping:** Carousel component  
**Used on:** 3 page(s)

Full-width hero slider used at the top of the corporate homepage. Each slide shows a full-bleed background image with a white text card containing a heading, short body copy and an optional CTA. Supports autoplay and slide indicator dots.

> **Migration notes:** Source: AEM carousel component on the homepage. Distinct from carousel-block (article card lists) and campaign-stat-hero (bespoke nourish-header built on carousel markup).

## Example

![Hero Carousel example — /en/home](/component-examples/hero-carousel.png)

*Captured live from [/en/home](https://www.averydennison.com/en/home.html) — see the [page composition](/pages/en_home).*

## CMS data model

| Field | Type | Required | Description |
|---|---|---|---|
| `slides` | array&lt;object> | yes | Hero slides (observed: 3). Each: {image (image, required), imageAlt (string), heading (string, required), body (richtext), ctaLabel (string), ctaUrl (link)}. |
| `autoplay` | boolean | no | Auto-advance slides. |
| `showIndicators` | boolean | no | Show slide indicator dots. |

## Used on slugs

- [`/en/home`](/pages/en_home)
- [`/en/home/industries`](/pages/en_home_industries)
- [`/en/home/technologies`](/pages/en_home_technologies)
