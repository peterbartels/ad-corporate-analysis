# Image Link Block

**Component:** `image-link-block`  
**DEPT mapping:** Image Link Block / Categories Block  
**Used on:** 26 page(s)

Grid of box-button links, observed as a 5-column grid of 15 business-unit boxes on the homepage and landing pages. Items are label + URL boxes, optionally with an image and a vertical/small orientation variant.

> **Migration notes:** Per DEPT table 'Image Link Block / Categories Block (box buttons)' — confirm with DEPT whether this merges with categories-block in the final design system; kept separate here because observed items are pure label links without icon/description.

## CMS data model

| Field | Type | Required | Description |
|---|---|---|---|
| `heading` | string | no | Optional section heading. |
| `items` | array<object> | yes | Box buttons. Each: {label (string, required), url (link, required), image (image, optional), orientation (enum: horizontal | vertical)}. |
| `columns` | number | no | Grid columns (observed 5). |

## Used on slugs

- `/en/home`
- `/en/home/careers/early-career-opportunities`
- `/en/home/careers/talent-community`
- `/en/home/company/overview`
- `/en/home/industries`
- `/en/home/industries/advertising`
- `/en/home/industries/advertising-and-promotion`
- `/en/home/industries/apparel`
- `/en/home/industries/apparel-branding-and-solutions`
- `/en/home/industries/architecture-and-buildings`
- `/en/home/industries/automotive`
- `/en/home/industries/building-and-construction`
- `/en/home/industries/consumer-packaged-goods`
- `/en/home/industries/durable-goods-and-equipment`
- `/en/home/industries/durable-goods-and-equipment-labels`
- `/en/home/industries/electronics-and-electrical`
- `/en/home/industries/food`
- `/en/home/industries/government`
- `/en/home/industries/logistics`
- `/en/home/industries/medical-and-healthcare`
- `/en/home/industries/optica-supply-chain-solutions`
- `/en/home/industries/retail`
- `/en/home/industries/rfid`
- `/en/home/industries/supply-chain`
- `/en/home/industries/transportation`
- `/en/home/technologies`
