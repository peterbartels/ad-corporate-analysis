---
title: "Image Link Block"
---

# Image Link Block

**Component:** `image-link-block`  
**DEPT mapping:** Image Link Block / Categories Block  
**Used on:** 26 page(s)

Grid of box-button links, observed as a 5-column grid of 15 business-unit boxes on the homepage and landing pages. Items are label + URL boxes, optionally with an image and a vertical/small orientation variant.

> **Migration notes:** Per DEPT table 'Image Link Block / Categories Block (box buttons)' — confirm with DEPT whether this merges with categories-block in the final design system; kept separate here because observed items are pure label links without icon/description.

## Example

![Image Link Block example — /en/home](/component-examples/image-link-block.png)

*Captured live from [/en/home](https://www.averydennison.com/en/home.html) — see the [page composition](/pages/en_home).*

## CMS data model

| Field | Type | Required | Description |
|---|---|---|---|
| `heading` | string | no | Optional section heading. |
| `items` | array&lt;object> | yes | Box buttons. Each: {label (string, required), url (link, required), image (image, optional), orientation (enum: horizontal | vertical)}. |
| `columns` | number | no | Grid columns (observed 5). |

## Used on slugs

- [`/en/home`](/pages/en_home)
- [`/en/home/careers/early-career-opportunities`](/pages/en_home_careers_early-career-opportunities)
- [`/en/home/careers/talent-community`](/pages/en_home_careers_talent-community)
- [`/en/home/company/overview`](/pages/en_home_company_overview)
- [`/en/home/industries`](/pages/en_home_industries)
- [`/en/home/industries/advertising`](/pages/en_home_industries_advertising)
- [`/en/home/industries/advertising-and-promotion`](/pages/en_home_industries_advertising-and-promotion)
- [`/en/home/industries/apparel`](/pages/en_home_industries_apparel)
- [`/en/home/industries/apparel-branding-and-solutions`](/pages/en_home_industries_apparel-branding-and-solutions)
- [`/en/home/industries/architecture-and-buildings`](/pages/en_home_industries_architecture-and-buildings)
- [`/en/home/industries/automotive`](/pages/en_home_industries_automotive)
- [`/en/home/industries/building-and-construction`](/pages/en_home_industries_building-and-construction)
- [`/en/home/industries/consumer-packaged-goods`](/pages/en_home_industries_consumer-packaged-goods)
- [`/en/home/industries/durable-goods-and-equipment`](/pages/en_home_industries_durable-goods-and-equipment)
- [`/en/home/industries/durable-goods-and-equipment-labels`](/pages/en_home_industries_durable-goods-and-equipment-labels)
- [`/en/home/industries/electronics-and-electrical`](/pages/en_home_industries_electronics-and-electrical)
- [`/en/home/industries/food`](/pages/en_home_industries_food)
- [`/en/home/industries/government`](/pages/en_home_industries_government)
- [`/en/home/industries/logistics`](/pages/en_home_industries_logistics)
- [`/en/home/industries/medical-and-healthcare`](/pages/en_home_industries_medical-and-healthcare)
- [`/en/home/industries/optica-supply-chain-solutions`](/pages/en_home_industries_optica-supply-chain-solutions)
- [`/en/home/industries/retail`](/pages/en_home_industries_retail)
- [`/en/home/industries/rfid`](/pages/en_home_industries_rfid)
- [`/en/home/industries/supply-chain`](/pages/en_home_industries_supply-chain)
- [`/en/home/industries/transportation`](/pages/en_home_industries_transportation)
- [`/en/home/technologies`](/pages/en_home_technologies)
