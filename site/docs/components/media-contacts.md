---
title: "Media Contacts"
---

# Media Contacts

**Component:** `media-contacts`  
**DEPT mapping:** NEW - Media Contacts Block  
**Used on:** 61 page(s)

Right-rail contact list on press-release pages: 'Media Contact(s)' heading, optional lead-in sentence, and one or more contact groups (Media Relations, Investor Relations, partner organisations) each with eyebrow label, name, role and mailto link.

> **Migration notes:** NEW component (currently authored as richtext in AEM). Absorbs raw 'media-contact' (singular) — identical press-sidebar block. Model the default corporate contacts as a reusable entry.

## CMS data model

| Field | Type | Required | Description |
|---|---|---|---|
| `heading` | string | yes | Sidebar heading, 'Media Contacts' / 'Media contact'. |
| `intro` | string | no | Lead-in sentence, e.g. 'For interviews, data requests...'. |
| `contacts` | array&lt;object> | yes | Contact entries (merged: groups[] + contacts[]). Each: {orgLabel (string, e.g. 'Avery Dennison:'), department (string, eyebrow e.g. 'MEDIA RELATIONS' — merged contactType + department), name (string, required), role (string), email (link, mailto)}. |

## Used on slugs

- [`/en/home/news/press-releases/540-billion-global-food-waste-bill-exposed-for-2026`](/pages/en_home_news_press-releases_540-billion-global-food-waste-bill-exposed-for-2026)
- `/en/home/news/press-releases/RETHINK-retail-recognizes-julie-vargas`
- [`/en/home/news/press-releases/avery-dennison-acquires-catchpoint-ip`](/pages/en_home_news_press-releases_avery-dennison-acquires-catchpoint-ip)
- [`/en/home/news/press-releases/avery-dennison-acquires-rietveld`](/pages/en_home_news_press-releases_avery-dennison-acquires-rietveld)
- [`/en/home/news/press-releases/avery-dennison-acquires-textrace`](/pages/en_home_news_press-releases_avery-dennison-acquires-textrace)
- [`/en/home/news/press-releases/avery-dennison-and-the-premier-league-present-the-name-behind-the-numbers`](/pages/en_home_news_press-releases_avery-dennison-and-the-premier-league-present-the-name-behind-the-numbers)
- [`/en/home/news/press-releases/avery-dennison-and-walmart-collaborate-to-enhance-freshness-rfid`](/pages/en_home_news_press-releases_avery-dennison-and-walmart-collaborate-to-enhance-freshness-rfid)
- [`/en/home/news/press-releases/avery-dennison-and-wiliot-expand-strategic-partnership`](/pages/en_home_news_press-releases_avery-dennison-and-wiliot-expand-strategic-partnership)
- [`/en/home/news/press-releases/avery-dennison-announces-fourth-quarter-and-full-year-2021-results`](/pages/en_home_news_press-releases_avery-dennison-announces-fourth-quarter-and-full-year-2021-results)
- [`/en/home/news/press-releases/avery-dennison-announces-fourth-quarter-and-full-year-2022-results`](/pages/en_home_news_press-releases_avery-dennison-announces-fourth-quarter-and-full-year-2022-results)
- [`/en/home/news/press-releases/avery-dennison-announces-planned-ceo-succession`](/pages/en_home_news_press-releases_avery-dennison-announces-planned-ceo-succession)
- [`/en/home/news/press-releases/avery-dennison-announces-q1-2022-results`](/pages/en_home_news_press-releases_avery-dennison-announces-q1-2022-results)
- [`/en/home/news/press-releases/avery-dennison-announces-q1-2023-results`](/pages/en_home_news_press-releases_avery-dennison-announces-q1-2023-results)
- [`/en/home/news/press-releases/avery-dennison-announces-q1-2024-results`](/pages/en_home_news_press-releases_avery-dennison-announces-q1-2024-results)
- [`/en/home/news/press-releases/avery-dennison-announces-q1-2025-results`](/pages/en_home_news_press-releases_avery-dennison-announces-q1-2025-results)
- [`/en/home/news/press-releases/avery-dennison-announces-q1-2026-results`](/pages/en_home_news_press-releases_avery-dennison-announces-q1-2026-results)
- [`/en/home/news/press-releases/avery-dennison-announces-q2-2022-results`](/pages/en_home_news_press-releases_avery-dennison-announces-q2-2022-results)
- [`/en/home/news/press-releases/avery-dennison-announces-q2-2023-results`](/pages/en_home_news_press-releases_avery-dennison-announces-q2-2023-results)
- [`/en/home/news/press-releases/avery-dennison-announces-q2-2024-results`](/pages/en_home_news_press-releases_avery-dennison-announces-q2-2024-results)
- [`/en/home/news/press-releases/avery-dennison-announces-q2-2025-results`](/pages/en_home_news_press-releases_avery-dennison-announces-q2-2025-results)
- [`/en/home/news/press-releases/avery-dennison-announces-q3-2022-results`](/pages/en_home_news_press-releases_avery-dennison-announces-q3-2022-results)
- [`/en/home/news/press-releases/avery-dennison-announces-q3-2023-results`](/pages/en_home_news_press-releases_avery-dennison-announces-q3-2023-results)
- [`/en/home/news/press-releases/avery-dennison-announces-q3-2024-results`](/pages/en_home_news_press-releases_avery-dennison-announces-q3-2024-results)
- [`/en/home/news/press-releases/avery-dennison-announces-q3-2025-results`](/pages/en_home_news_press-releases_avery-dennison-announces-q3-2025-results)
- [`/en/home/news/press-releases/avery-dennison-announces-q4-and-full-year-2023-results`](/pages/en_home_news_press-releases_avery-dennison-announces-q4-and-full-year-2023-results)
- [`/en/home/news/press-releases/avery-dennison-announces-q4-and-full-year-2024-results`](/pages/en_home_news_press-releases_avery-dennison-announces-q4-and-full-year-2024-results)
- [`/en/home/news/press-releases/avery-dennison-announces-q4-and-full-year-2025-results`](/pages/en_home_news_press-releases_avery-dennison-announces-q4-and-full-year-2025-results)
- [`/en/home/news/press-releases/avery-dennison-announces-strategic-75-million-investment-in-wiliot-to-scale-physical-ai`](/pages/en_home_news_press-releases_avery-dennison-announces-strategic-75-million-investment-in-wiliot-to-scale-physical-ai)
- [`/en/home/news/press-releases/avery-dennison-commissions-europes-largest-concentrated-solar-thermal-platform-and-thermal-storage-unit-in-turnhout-belgium`](/pages/en_home_news_press-releases_avery-dennison-commissions-europes-largest-concentrated-solar-thermal-platform-and-thermal-storage-unit-in-turnhout-belgium)
- [`/en/home/news/press-releases/avery-dennison-completes-acquisition-of-meridians-flooring-business`](/pages/en_home_news_press-releases_avery-dennison-completes-acquisition-of-meridians-flooring-business)
- [`/en/home/news/press-releases/avery-dennison-earns-top-score-on-hrc-foundation-2022-corporate-equality-index`](/pages/en_home_news_press-releases_avery-dennison-earns-top-score-on-hrc-foundation-2022-corporate-equality-index)
- [`/en/home/news/press-releases/avery-dennison-expands-rfid-adoption-in-grocery-retail-industry`](/pages/en_home_news_press-releases_avery-dennison-expands-rfid-adoption-in-grocery-retail-industry)
- [`/en/home/news/press-releases/avery-dennison-fortifies-its-presence-in-india`](/pages/en_home_news_press-releases_avery-dennison-fortifies-its-presence-in-india)
- [`/en/home/news/press-releases/avery-dennison-invests-in-series-b-funding-of-3d-current-collectors-manufacturer-addionics`](/pages/en_home_news_press-releases_avery-dennison-invests-in-series-b-funding-of-3d-current-collectors-manufacturer-addionics)
- [`/en/home/news/press-releases/avery-dennison-it-announces-inaugural-supplier-excellence-award-winners`](/pages/en_home_news_press-releases_avery-dennison-it-announces-inaugural-supplier-excellence-award-winners)
- `/en/home/news/press-releases/avery-dennison-joins-WBCSD`
- [`/en/home/news/press-releases/avery-dennison-launches-ad-identifresh`](/pages/en_home_news_press-releases_avery-dennison-launches-ad-identifresh)
- [`/en/home/news/press-releases/avery-dennison-launches-ad-stretch-accelerator-program`](/pages/en_home_news_press-releases_avery-dennison-launches-ad-stretch-accelerator-program)
- [`/en/home/news/press-releases/avery-dennison-materials-group-names-matthias-matt-liebert-as-general-manager-for-taylor-adhesives`](/pages/en_home_news_press-releases_avery-dennison-materials-group-names-matthias-matt-liebert-as-general-manager-for-taylor-adhesives)
- [`/en/home/news/press-releases/avery-dennison-names-deon-stander-president-and-chief-operating-officer`](/pages/en_home_news_press-releases_avery-dennison-names-deon-stander-president-and-chief-operating-officer)
- [`/en/home/news/press-releases/avery-dennison-names-presidents-for-two-business-segments`](/pages/en_home_news_press-releases_avery-dennison-names-presidents-for-two-business-segments)
- [`/en/home/news/press-releases/avery-dennison-names-ryan-yost-president-materials-group`](/pages/en_home_news_press-releases_avery-dennison-names-ryan-yost-president-materials-group)
- [`/en/home/news/press-releases/avery-dennison-names-senior-vice-president-and-general-manager-materials-group-na`](/pages/en_home_news_press-releases_avery-dennison-names-senior-vice-president-and-general-manager-materials-group-na)
- [`/en/home/news/press-releases/avery-dennison-opens-first-india-based-rfid-production-facility`](/pages/en_home_news_press-releases_avery-dennison-opens-first-india-based-rfid-production-facility)
- [`/en/home/news/press-releases/avery-dennison-partners-to-fund-innovation-with-emerald-technology-ventures`](/pages/en_home_news_press-releases_avery-dennison-partners-to-fund-innovation-with-emerald-technology-ventures)
- `/en/home/news/press-releases/avery-dennison-scores-strategic-partnership-position-with-LaLiga`
- [`/en/home/news/press-releases/avery-dennison-signs-a-definitive-agreement-to-acquire-silver-crystal-group`](/pages/en_home_news_press-releases_avery-dennison-signs-a-definitive-agreement-to-acquire-silver-crystal-group)
- [`/en/home/news/press-releases/avery-dennison-signs-agreement-to-acquire-thermopatch`](/pages/en_home_news_press-releases_avery-dennison-signs-agreement-to-acquire-thermopatch)
- [`/en/home/news/press-releases/avery-dennison-to-acquire-meridians-flooring-business`](/pages/en_home_news_press-releases_avery-dennison-to-acquire-meridians-flooring-business)
- [`/en/home/news/press-releases/avery-dennison-to-invest-over-60-million-euros-in-expansion-in-europe`](/pages/en_home_news_press-releases_avery-dennison-to-invest-over-60-million-euros-in-expansion-in-europe)
- [`/en/home/news/press-releases/avery-dennison-to-reveal-how-rfid-is-revolutionizing-retail-nrf`](/pages/en_home_news_press-releases_avery-dennison-to-reveal-how-rfid-is-revolutionizing-retail-nrf)
- [`/en/home/news/press-releases/basf-and-avery-dennison-collaborate-to-launch-acrylates-based-on-renewable-electricity`](/pages/en_home_news_press-releases_basf-and-avery-dennison-collaborate-to-launch-acrylates-based-on-renewable-electricity)
- [`/en/home/news/press-releases/currys-rolls-out-electronic-shelf-edge-labelling`](/pages/en_home_news_press-releases_currys-rolls-out-electronic-shelf-edge-labelling)
- [`/en/home/news/press-releases/electrified-with-avery-dennison`](/pages/en_home_news_press-releases_electrified-with-avery-dennison)
- [`/en/home/news/press-releases/estimated-94-billion-dollar-meat-waste-bill-significant-retail-inventory-challenge`](/pages/en_home_news_press-releases_estimated-94-billion-dollar-meat-waste-bill-significant-retail-inventory-challenge)
- [`/en/home/news/press-releases/fast-company-recognizes-avery-dennison-worlds-most-innovative-companies`](/pages/en_home_news_press-releases_fast-company-recognizes-avery-dennison-worlds-most-innovative-companies)
- [`/en/home/news/press-releases/industry-first-rfid-label-recognized-by-apr-for-compatibility-with-pet-recycling-stream`](/pages/en_home_news_press-releases_industry-first-rfid-label-recognized-by-apr-for-compatibility-with-pet-recycling-stream)
- [`/en/home/news/press-releases/new-cardinal-health-surgical-drape-features-avery-dennison-benehold-chg-adhesive-technology`](/pages/en_home_news_press-releases_new-cardinal-health-surgical-drape-features-avery-dennison-benehold-chg-adhesive-technology)
- [`/en/home/news/press-releases/turning-potential-into-operational-success-avery-dennison-gets-set-for-retails-big-show`](/pages/en_home_news_press-releases_turning-potential-into-operational-success-avery-dennison-gets-set-for-retails-big-show)
- [`/en/home/news/press-releases/unlocking-growth-and-sustainability`](/pages/en_home_news_press-releases_unlocking-growth-and-sustainability)
- [`/en/home/news/press-releases/vestcom-research-reveals-the-power-of-in-store-media-maximizing-impact`](/pages/en_home_news_press-releases_vestcom-research-reveals-the-power-of-in-store-media-maximizing-impact)
