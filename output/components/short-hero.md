# Short Hero

**Component:** `short-hero`  
**DEPT mapping:** Short hero component  
**Used on:** 4 page(s)

Full-width decorative photo banner without text overlay, used at the top of campaign article pages. Fixed height band (~25rem desktop, ~10rem mobile) with the image applied as a cover background.

> **Migration notes:** Authored in AEM both as an image component and as a CSS background-image band; unify on a single image field in the headless model.

## CMS data model

| Field | Type | Required | Description |
|---|---|---|---|
| `image` | image | yes | Full-width background photo. |
| `imageAlt` | string | no | Alt text (empty when purely decorative). |
| `height` | string | no | Optional height token override (default 25rem). |

## Used on slugs

- `/en/home/eu-policy/benefits-of-sustainability-compliance`
- `/en/home/eu-policy/europes-waste-problem`
- `/en/home/eu-policy/our-vision-more-sustainable-competitive-europe-connecting-physical-and-digital`
- `/en/home/eu-policy/sustainable-supply-chains`
