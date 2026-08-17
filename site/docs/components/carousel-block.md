---
title: "Carousel Block"
---

# Carousel Block

**Component:** `carousel-block`  
**DEPT mapping:** Carousel Block  
**Used on:** 112 page(s)

Article/card list block: a 4-column card grid with 'View more' load-more (employee stories, press releases), a 3-4 card 'Read more' row sourced from blog articles, or a compact sidebar 'You may also like' list of 3 related-article teasers. Cards show thumbnail, category eyebrow or date, title and link. Can be fed manually or by a page-tree/tag query.

> **Migration notes:** Absorbs raw 'related-articles' (identical sidebar 'You may also like' shape). In AEM this was often 3 stacked list components rendering one grid — model as one block with a query source; strong candidate for tag-driven auto lists.

## Example

![Carousel Block example — /en/home/careers/life-at-ad](/component-examples/carousel-block.png)

*Captured live from [/en/home/careers/life-at-ad](https://www.averydennison.com/en/home/careers/life-at-ad.html) — see the [page composition](/pages/en_home_careers_life-at-ad).*

## CMS data model

| Field | Type | Required | Description |
|---|---|---|---|
| `variant` | string | yes | Enum: grid | row | sidebarList. |
| `heading` | string | no | Block heading, e.g. 'You may also like' (merged: heading + title). |
| `source` | reference | no | Optional tag/page-tree query feeding the list automatically. |
| `items` | array&lt;object> | no | Manual cards (merged: items[] + articles[]). Each: {image (image), category (string), date (string), title (string, required), url (link, required)}. Omit when source is set. |
| `pageSize` | number | no | Cards shown initially (observed: 8 = 2 rows x 4). |
| `readMoreLabel` | string | no | Per-card link label, e.g. 'Read more >'. |
| `viewMoreLabel` | string | no | Load-more / view-all button label. |
| `viewMoreUrl` | link | no | View-all target (when not load-more). |

## Used on slugs

- [`/en/home/careers/life-at-ad`](/pages/en_home_careers_life-at-ad)
- [`/en/home/careers/overview`](/pages/en_home_careers_overview)
- [`/en/home/company/avery-dennison-foundation`](/pages/en_home_company_avery-dennison-foundation)
- [`/en/home/company/corporate-venture-capital-program`](/pages/en_home_company_corporate-venture-capital-program)
- [`/en/home/making-possible`](/pages/en_home_making-possible)
- [`/en/home/news/company-blog`](/pages/en_home_news_company-blog)
- [`/en/home/news/company-blog/10-fave-automotive-restyling-projects-of-2024`](/pages/en_home_news_company-blog_10-fave-automotive-restyling-projects-of-2024)
- [`/en/home/news/company-blog/22-reasons-employees-say-avery-dennison-is-a-great-place-to-work`](/pages/en_home_news_company-blog_22-reasons-employees-say-avery-dennison-is-a-great-place-to-work)
- [`/en/home/news/company-blog/3rd-trafficjet-printer-for-bb-skilti-iceland`](/pages/en_home_news_company-blog_3rd-trafficjet-printer-for-bb-skilti-iceland)
- [`/en/home/news/company-blog/50-years-of-reflective-solutions-in-brazil`](/pages/en_home_news_company-blog_50-years-of-reflective-solutions-in-brazil)
- [`/en/home/news/company-blog/a-conversation-with-shruti-george`](/pages/en_home_news_company-blog_a-conversation-with-shruti-george)
- [`/en/home/news/company-blog/adf-action-against-hunger`](/pages/en_home_news_company-blog_adf-action-against-hunger)
- [`/en/home/news/company-blog/adf-celebrates-pride-and-partners-making-a-difference`](/pages/en_home_news_company-blog_adf-celebrates-pride-and-partners-making-a-difference)
- [`/en/home/news/company-blog/adf-grantee-global-fund-for-children`](/pages/en_home_news_company-blog_adf-grantee-global-fund-for-children)
- [`/en/home/news/company-blog/adf-scholars-demonstrate-education-access-in-action`](/pages/en_home_news_company-blog_adf-scholars-demonstrate-education-access-in-action)
- [`/en/home/news/company-blog/adf-scholars-spotlight-august-2024`](/pages/en_home_news_company-blog_adf-scholars-spotlight-august-2024)
- [`/en/home/news/company-blog/avery-dennison-and-employees-lend-a-hand-to-ukraine`](/pages/en_home_news_company-blog_avery-dennison-and-employees-lend-a-hand-to-ukraine)
- [`/en/home/news/company-blog/avery-dennison-foundation-celebrates-international-womens-day`](/pages/en_home_news_company-blog_avery-dennison-foundation-celebrates-international-womens-day)
- [`/en/home/news/company-blog/avery-dennison-foundation-grant-is-empowering-ai-leadership-for-women-across-asia`](/pages/en_home_news_company-blog_avery-dennison-foundation-grant-is-empowering-ai-leadership-for-women-across-asia)
- [`/en/home/news/company-blog/avery-dennison-foundation-helps-kids-of-employees-achieve-their-dreams-of-higher-education`](/pages/en_home_news_company-blog_avery-dennison-foundation-helps-kids-of-employees-achieve-their-dreams-of-higher-education)
- [`/en/home/news/company-blog/avery-dennison-foundation-invests-in-womens-empowerment`](/pages/en_home_news_company-blog_avery-dennison-foundation-invests-in-womens-empowerment)
- [`/en/home/news/company-blog/avery-dennison-foundation-shares-new-strategy-address-global-challenges`](/pages/en_home_news_company-blog_avery-dennison-foundation-shares-new-strategy-address-global-challenges)
- [`/en/home/news/company-blog/avery-dennison-helps-2-make-a-wish-kids-wishes-come-true`](/pages/en_home_news_company-blog_avery-dennison-helps-2-make-a-wish-kids-wishes-come-true)
- [`/en/home/news/company-blog/avery-dennison-it-announces-2025-supplier-excellence-award-winners`](/pages/en_home_news_company-blog_avery-dennison-it-announces-2025-supplier-excellence-award-winners)
- [`/en/home/news/company-blog/avery-dennison-north-america-sites-raise-over-500k-for-united-way`](/pages/en_home_news_company-blog_avery-dennison-north-america-sites-raise-over-500k-for-united-way)
- [`/en/home/news/company-blog/avery-dennison-recognized-for-another-industry-first`](/pages/en_home_news_company-blog_avery-dennison-recognized-for-another-industry-first)
- [`/en/home/news/company-blog/avery-dennison-reflective-solutions-enhances-safety-in-indias-first-hybrid-ambulance`](/pages/en_home_news_company-blog_avery-dennison-reflective-solutions-enhances-safety-in-indias-first-hybrid-ambulance)
- [`/en/home/news/company-blog/brimos-produces-high-quality-overhead-guide-signs-with-ease-using-trafficjet-pro`](/pages/en_home_news_company-blog_brimos-produces-high-quality-overhead-guide-signs-with-ease-using-trafficjet-pro)
- [`/en/home/news/company-blog/building-markets-an-adf-grantee`](/pages/en_home_news_company-blog_building-markets-an-adf-grantee)
- [`/en/home/news/company-blog/celebrating-25-years-in-india`](/pages/en_home_news_company-blog_celebrating-25-years-in-india)
- [`/en/home/news/company-blog/celebrating-earth-day-with-global-forest-generation`](/pages/en_home_news_company-blog_celebrating-earth-day-with-global-forest-generation)
- [`/en/home/news/company-blog/celebrating-hispanic-heritage-month`](/pages/en_home_news_company-blog_celebrating-hispanic-heritage-month)
- [`/en/home/news/company-blog/celebrating-the-2024-avery-dennison-foundation-leadership-excellence-awardees`](/pages/en_home_news_company-blog_celebrating-the-2024-avery-dennison-foundation-leadership-excellence-awardees)
- [`/en/home/news/company-blog/choose-fluorescent-for-work-zone-signage`](/pages/en_home_news_company-blog_choose-fluorescent-for-work-zone-signage)
- [`/en/home/news/company-blog/create-more-with-avery-dennison-top-25-supreme-wrapping-film-colors`](/pages/en_home_news_company-blog_create-more-with-avery-dennison-top-25-supreme-wrapping-film-colors)
- [`/en/home/news/company-blog/design-your-dream-car-wrap-with-the-avery-dennison-car-wrap-visualizer`](/pages/en_home_news_company-blog_design-your-dream-car-wrap-with-the-avery-dennison-car-wrap-visualizer)
- [`/en/home/news/company-blog/ecovias-launches-vertical-sign-center-with-trafficjet`](/pages/en_home_news_company-blog_ecovias-launches-vertical-sign-center-with-trafficjet)
- [`/en/home/news/company-blog/expanding-the-discussion-on-work-zone-safety`](/pages/en_home_news_company-blog_expanding-the-discussion-on-work-zone-safety)
- [`/en/home/news/company-blog/first-trafficjet-xpress-printer-installed-at-trafficsupply`](/pages/en_home_news_company-blog_first-trafficjet-xpress-printer-installed-at-trafficsupply)
- [`/en/home/news/company-blog/first-trafficjet-xpress-printer-installed-in-france`](/pages/en_home_news_company-blog_first-trafficjet-xpress-printer-installed-in-france)
- [`/en/home/news/company-blog/global-impact-for-iwd`](/pages/en_home_news_company-blog_global-impact-for-iwd)
- [`/en/home/news/company-blog/global-pride-initiatives-adf`](/pages/en_home_news_company-blog_global-pride-initiatives-adf)
- [`/en/home/news/company-blog/graphics-solutions-favorite-projects-of-q1-2025`](/pages/en_home_news_company-blog_graphics-solutions-favorite-projects-of-q1-2025)
- [`/en/home/news/company-blog/graphics-solutions-favorite-projects-of-q2-2025`](/pages/en_home_news_company-blog_graphics-solutions-favorite-projects-of-q2-2025)
- [`/en/home/news/company-blog/graphics-solutions-favorite-projects-of-q3-2025`](/pages/en_home_news_company-blog_graphics-solutions-favorite-projects-of-q3-2025)
- [`/en/home/news/company-blog/graphics-solutions-favorite-projects-of-q4-2025`](/pages/en_home_news_company-blog_graphics-solutions-favorite-projects-of-q4-2025)
- [`/en/home/news/company-blog/happy-pride-introducing-unite-employee-resource-group`](/pages/en_home_news_company-blog_happy-pride-introducing-unite-employee-resource-group)
- [`/en/home/news/company-blog/helping-tourists-navigate-italy-with-vibrant-full-color-reflective-signs`](/pages/en_home_news_company-blog_helping-tourists-navigate-italy-with-vibrant-full-color-reflective-signs)
- [`/en/home/news/company-blog/high-mast-signs-for-the-indian-oil-industry-go-digital`](/pages/en_home_news_company-blog_high-mast-signs-for-the-indian-oil-industry-go-digital)
- [`/en/home/news/company-blog/how-it-shared-services-are-a-digital-metropolis-helping-companies-on-their-transformation-journey`](/pages/en_home_news_company-blog_how-it-shared-services-are-a-digital-metropolis-helping-companies-on-their-transformation-journey)
- [`/en/home/news/company-blog/improving-roadway-safety-in-brazil-for-more-than-20-years`](/pages/en_home_news_company-blog_improving-roadway-safety-in-brazil-for-more-than-20-years)
- [`/en/home/news/company-blog/international-standard-for-vehicle-markings-astm-d8514`](/pages/en_home_news_company-blog_international-standard-for-vehicle-markings-astm-d8514)
- [`/en/home/news/company-blog/introducing-avery-dennison-black-employee-resource-group`](/pages/en_home_news_company-blog_introducing-avery-dennison-black-employee-resource-group)
- [`/en/home/news/company-blog/introducing-avery-dennison-elevate-employee-resource-group`](/pages/en_home_news_company-blog_introducing-avery-dennison-elevate-employee-resource-group)
- [`/en/home/news/company-blog/introducing-veterans-employee-resource-group`](/pages/en_home_news_company-blog_introducing-veterans-employee-resource-group)
- [`/en/home/news/company-blog/inventing-the-future`](/pages/en_home_news_company-blog_inventing-the-future)
- [`/en/home/news/company-blog/is-vehicle-customization-the-best-route-to-shop-growth`](/pages/en_home_news_company-blog_is-vehicle-customization-the-best-route-to-shop-growth)
- [`/en/home/news/company-blog/labelexpo-americas-2024`](/pages/en_home_news_company-blog_labelexpo-americas-2024)
- [`/en/home/news/company-blog/next-level-innovation-z2010-passes-the-ice-bucket-test`](/pages/en_home_news_company-blog_next-level-innovation-z2010-passes-the-ice-bucket-test)
- [`/en/home/news/company-blog/nobilis-d-o-o-boosts-traffic-sign-production-trafficjet`](/pages/en_home_news_company-blog_nobilis-d-o-o-boosts-traffic-sign-production-trafficjet)
- [`/en/home/news/company-blog/ol-1200-anti-dew-film-protecting-traffic-signs-in-the-uk`](/pages/en_home_news_company-blog_ol-1200-anti-dew-film-protecting-traffic-signs-in-the-uk)
- [`/en/home/news/company-blog/ol-1200-anti-dew-film-protecting-traffic-signs-in-uk`](/pages/en_home_news_company-blog_ol-1200-anti-dew-film-protecting-traffic-signs-in-uk)
- [`/en/home/news/company-blog/paving-the-path-to-continuous-modernization-and-business-value`](/pages/en_home_news_company-blog_paving-the-path-to-continuous-modernization-and-business-value)
- [`/en/home/news/company-blog/pride-2022-meet-members-of-unite-kelly-ruffenach`](/pages/en_home_news_company-blog_pride-2022-meet-members-of-unite-kelly-ruffenach)
- [`/en/home/news/company-blog/pride-2023-meet-members-of-unite-alice-li`](/pages/en_home_news_company-blog_pride-2023-meet-members-of-unite-alice-li)
- [`/en/home/news/company-blog/pride-2023-meet-members-of-unite-florian-schwickert`](/pages/en_home_news_company-blog_pride-2023-meet-members-of-unite-florian-schwickert)
- [`/en/home/news/company-blog/pride-2023-meet-members-of-unite-maria-ocampo`](/pages/en_home_news_company-blog_pride-2023-meet-members-of-unite-maria-ocampo)
- [`/en/home/news/company-blog/pride-2023-meet-unite-ally-will-sandman`](/pages/en_home_news_company-blog_pride-2023-meet-unite-ally-will-sandman)
- [`/en/home/news/company-blog/protect-traffic-signs-from-dew`](/pages/en_home_news_company-blog_protect-traffic-signs-from-dew)
- [`/en/home/news/company-blog/protecting-traffic-signs-in-serbia-from-dew-ol-1200`](/pages/en_home_news_company-blog_protecting-traffic-signs-in-serbia-from-dew-ol-1200)
- [`/en/home/news/company-blog/rooted-in-community-avery-dennison-brazil-is-sustaining-what-matters-most`](/pages/en_home_news_company-blog_rooted-in-community-avery-dennison-brazil-is-sustaining-what-matters-most)
- [`/en/home/news/company-blog/safer-roads-safer-mobility`](/pages/en_home_news_company-blog_safer-roads-safer-mobility)
- [`/en/home/news/company-blog/shop-profits-productivity-and-professionalism-get-a-big-boost`](/pages/en_home_news_company-blog_shop-profits-productivity-and-professionalism-get-a-big-boost)
- [`/en/home/news/company-blog/shops-and-installers-in-the-news-13-avery-dennison-success-stories`](/pages/en_home_news_company-blog_shops-and-installers-in-the-news-13-avery-dennison-success-stories)
- [`/en/home/news/company-blog/standing-still-is-going-backwards`](/pages/en_home_news_company-blog_standing-still-is-going-backwards)
- [`/en/home/news/company-blog/tackling-tomorrows-top-business-challenges-with-two-simple-words`](/pages/en_home_news_company-blog_tackling-tomorrows-top-business-challenges-with-two-simple-words)
- [`/en/home/news/company-blog/taking-command-of-color`](/pages/en_home_news_company-blog_taking-command-of-color)
- [`/en/home/news/company-blog/the-future-of-ai-business-with-nick-colisto`](/pages/en_home_news_company-blog_the-future-of-ai-business-with-nick-colisto)
- [`/en/home/news/company-blog/the-roadshow-that-transformed-buenos-aires`](/pages/en_home_news_company-blog_the-roadshow-that-transformed-buenos-aires)
- [`/en/home/news/company-blog/top-10-supreme-wrapping-film-colors-2025`](/pages/en_home_news_company-blog_top-10-supreme-wrapping-film-colors-2025)
- [`/en/home/news/company-blog/trafficjet-pro-finds-a-house-in-germany`](/pages/en_home_news_company-blog_trafficjet-pro-finds-a-house-in-germany)
- [`/en/home/news/company-blog/trafficjet-pro-osburn-signs`](/pages/en_home_news_company-blog_trafficjet-pro-osburn-signs)
- [`/en/home/news/company-blog/trafficjet-pro-speeds-up-production-at-industrias-saludes-in-spain`](/pages/en_home_news_company-blog_trafficjet-pro-speeds-up-production-at-industrias-saludes-in-spain)
- [`/en/home/news/company-blog/trafficjet-pro-successfully-installed-at-nour-massah`](/pages/en_home_news_company-blog_trafficjet-pro-successfully-installed-at-nour-massah)
- [`/en/home/news/company-blog/trafficjet-xpert-installed-at-medivia-kft-hungary`](/pages/en_home_news_company-blog_trafficjet-xpert-installed-at-medivia-kft-hungary)
- [`/en/home/news/company-blog/updates-to-build-america-buy-america-requirements`](/pages/en_home_news_company-blog_updates-to-build-america-buy-america-requirements)
- [`/en/home/news/company-blog/vehicle-safety-in-saudi-arabia-leveled-up-by-adopting-logo-conspicuity-tape`](/pages/en_home_news_company-blog_vehicle-safety-in-saudi-arabia-leveled-up-by-adopting-logo-conspicuity-tape)
- [`/en/home/news/company-blog/voz-latina-employee-resource-group`](/pages/en_home_news_company-blog_voz-latina-employee-resource-group)
- [`/en/home/news/company-blog/welsh-sign-manufacturer-speeds-up-productivity-with-trafficjet-pro`](/pages/en_home_news_company-blog_welsh-sign-manufacturer-speeds-up-productivity-with-trafficjet-pro)
- [`/en/home/news/company-blog/what-to-look-for-in-a-color-change-and-full-vehicle-wrap`](/pages/en_home_news_company-blog_what-to-look-for-in-a-color-change-and-full-vehicle-wrap)
- [`/en/home/news/company-blog/what-to-look-for-in-an-auto-window-film-ft-harold-nimtz`](/pages/en_home_news_company-blog_what-to-look-for-in-an-auto-window-film-ft-harold-nimtz)
- [`/en/home/news/company-blog/what-would-stan-think-90-years-of-avery-dennison`](/pages/en_home_news_company-blog_what-would-stan-think-90-years-of-avery-dennison)
- [`/en/home/news/company-blog/what-you-need-to-know-ppf-narayan-andrews`](/pages/en_home_news_company-blog_what-you-need-to-know-ppf-narayan-andrews)
- [`/en/home/news/company-blog/winter-proof-your-vinyl-installs`](/pages/en_home_news_company-blog_winter-proof-your-vinyl-installs)
- [`/en/home/news/company-blog/yungatha-expands-with-trafficjet-xpress`](/pages/en_home_news_company-blog_yungatha-expands-with-trafficjet-xpress)
- [`/en/home/news/leadership-perspectives`](/pages/en_home_news_leadership-perspectives)
- [`/en/home/news/leadership-perspectives/nick-colisto/championing-collaboration`](/pages/en_home_news_leadership-perspectives_nick-colisto_championing-collaboration)
- [`/en/home/news/leadership-perspectives/nick-colisto/cutting-through-complexity`](/pages/en_home_news_leadership-perspectives_nick-colisto_cutting-through-complexity)
- [`/en/home/news/leadership-perspectives/nick-colisto/engineering-leadership-from-within`](/pages/en_home_news_leadership-perspectives_nick-colisto_engineering-leadership-from-within)
- [`/en/home/news/leadership-perspectives/nick-colisto/execution-is-a-leadership-behavior-not-an-operational-task`](/pages/en_home_news_leadership-perspectives_nick-colisto_execution-is-a-leadership-behavior-not-an-operational-task)
- [`/en/home/news/leadership-perspectives/nick-colisto/from-problem-solving-capability-building-ai`](/pages/en_home_news_leadership-perspectives_nick-colisto_from-problem-solving-capability-building-ai)
- [`/en/home/news/leadership-perspectives/nick-colisto/how-it-shared-services-are-a-digital-metropolis-helping-companies-on-their-transformation-journey`](/pages/en_home_news_leadership-perspectives_nick-colisto_how-it-shared-services-are-a-digital-metropolis-helping-companies-on-their-transformation-journey)
- [`/en/home/news/leadership-perspectives/nick-colisto/leading-change-in-the-digital-era`](/pages/en_home_news_leadership-perspectives_nick-colisto_leading-change-in-the-digital-era)
- [`/en/home/news/leadership-perspectives/nick-colisto/living-our-values-through-technology`](/pages/en_home_news_leadership-perspectives_nick-colisto_living-our-values-through-technology)
- [`/en/home/news/leadership-perspectives/nick-colisto/net-zero-it`](/pages/en_home_news_leadership-perspectives_nick-colisto_net-zero-it)
- [`/en/home/news/leadership-perspectives/nick-colisto/paving-the-path-to-continuous-modernization-and-business-value`](/pages/en_home_news_leadership-perspectives_nick-colisto_paving-the-path-to-continuous-modernization-and-business-value)
- [`/en/home/news/leadership-perspectives/nick-colisto/the-four-digital-experiences-powering-growth-and-efficiency`](/pages/en_home_news_leadership-perspectives_nick-colisto_the-four-digital-experiences-powering-growth-and-efficiency)
- [`/en/home/news/leadership-perspectives/nick-colisto/the-future-of-ai-business-with-nick-colisto`](/pages/en_home_news_leadership-perspectives_nick-colisto_the-future-of-ai-business-with-nick-colisto)
- [`/en/home/news/leadership-perspectives/nick-colisto/the-journey-to-high-road-leadership`](/pages/en_home_news_leadership-perspectives_nick-colisto_the-journey-to-high-road-leadership)
- [`/en/home/news/leadership-perspectives/nick-colisto/the-strategic-advantages-of-inclusive-leadership-in-it`](/pages/en_home_news_leadership-perspectives_nick-colisto_the-strategic-advantages-of-inclusive-leadership-in-it)
- [`/en/home/news/leadership-perspectives/nick-colisto/what-happens-when-you-put-exceptional-tools-in-the-hands-of-exceptional-people`](/pages/en_home_news_leadership-perspectives_nick-colisto_what-happens-when-you-put-exceptional-tools-in-the-hands-of-exceptional-people)
- [`/en/home/news/press-releases`](/pages/en_home_news_press-releases)
