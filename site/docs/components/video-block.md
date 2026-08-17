---
title: "Video Block"
---

# Video Block

**Component:** `video-block`  
**DEPT mapping:** Video Block  
**Used on:** 16 page(s)

Video embed block supporting YouTube iframes (single, or 2-3 in a row with captions), DAM-hosted video played in JW Player with a poster frame and play button, and a full-width autoplaying/looping decorative video banner. Optional caption line below.

> **Migration notes:** JW Player usage is legacy — DEPT build should standardize on a single player for DAM video; YouTube embeds need cookie-consent gating.

## Example

![Video Block example — /en/home/careers/early-career-opportunities](/component-examples/video-block.png)

*Captured live from [/en/home/careers/early-career-opportunities](https://www.averydennison.com/en/home/careers/early-career-opportunities.html) — see the [page composition](/pages/en_home_careers_early-career-opportunities).*

## CMS data model

| Field | Type | Required | Description |
|---|---|---|---|
| `variant` | string | no | Enum: inline | row | banner. banner = full-width autoplay/loop decorative video. |
| `videos` | array&lt;object> | yes | One or more videos (merged: videos[] + single-video props). Each: {provider (enum: youtube | dam, required), youtubeId (string), videoUrl (link, youtube embed URL alternative), damVideo (reference, DAM rendition for JW Player), title (string), caption (string), posterImage (image), posterTitle (string, name overlay on poster)}. |
| `autoplay` | boolean | no | Autoplay + loop (banner variant). |
| `caption` | string | no | Shared caption line below the block. |

## Used on slugs

- [`/en/home/careers/early-career-opportunities`](/pages/en_home_careers_early-career-opportunities)
- [`/en/home/careers/overview`](/pages/en_home_careers_overview)
- [`/en/home/company/corporate-venture-capital-program`](/pages/en_home_company_corporate-venture-capital-program)
- [`/en/home/company/diversity`](/pages/en_home_company_diversity)
- [`/en/home/eu-policy/europes-waste-problem`](/pages/en_home_eu-policy_europes-waste-problem)
- [`/en/home/making-possible`](/pages/en_home_making-possible)
- [`/en/home/news/company-blog/avery-dennison-helps-2-make-a-wish-kids-wishes-come-true`](/pages/en_home_news_company-blog_avery-dennison-helps-2-make-a-wish-kids-wishes-come-true)
- [`/en/home/news/company-blog/design-your-dream-car-wrap-with-the-avery-dennison-car-wrap-visualizer`](/pages/en_home_news_company-blog_design-your-dream-car-wrap-with-the-avery-dennison-car-wrap-visualizer)
- [`/en/home/news/company-blog/ecovias-launches-vertical-sign-center-with-trafficjet`](/pages/en_home_news_company-blog_ecovias-launches-vertical-sign-center-with-trafficjet)
- [`/en/home/news/company-blog/inventing-the-future`](/pages/en_home_news_company-blog_inventing-the-future)
- [`/en/home/news/company-blog/next-level-innovation-z2010-passes-the-ice-bucket-test`](/pages/en_home_news_company-blog_next-level-innovation-z2010-passes-the-ice-bucket-test)
- [`/en/home/news/company-blog/shop-profits-productivity-and-professionalism-get-a-big-boost`](/pages/en_home_news_company-blog_shop-profits-productivity-and-professionalism-get-a-big-boost)
- [`/en/home/news/company-blog/taking-command-of-color`](/pages/en_home_news_company-blog_taking-command-of-color)
- [`/en/home/news/company-blog/what-to-look-for-in-a-color-change-and-full-vehicle-wrap`](/pages/en_home_news_company-blog_what-to-look-for-in-a-color-change-and-full-vehicle-wrap)
- [`/en/home/news/company-blog/what-to-look-for-in-an-auto-window-film-ft-harold-nimtz`](/pages/en_home_news_company-blog_what-to-look-for-in-an-auto-window-film-ft-harold-nimtz)
- [`/en/home/news/company-blog/what-you-need-to-know-ppf-narayan-andrews`](/pages/en_home_news_company-blog_what-you-need-to-know-ppf-narayan-andrews)
