---
title: "Statistics Block"
---

# Statistics Block

**Component:** `statistics-block`  
**DEPT mapping:** Statistics Block  
**Used on:** 55 page(s)

Displays statistics and fact highlights in several observed layouts: a 3-box bordered fact row (employee stories: 'Years with AD' etc.), a mosaic grid of mixed-size colored stat tiles with big numbers, a dark full-width impact band with a display-size figure, badge image and CTA, and a staggered 2-column grid of value cards with icons. Variant field selects the layout.

> **Migration notes:** Per DEPT table 'info stat boxes / big numbers'. The valueCards usage may deserve splitting into categories-block during build if editors find the variant overloaded.

## CMS data model

| Field | Type | Required | Description |
|---|---|---|---|
| `variant` | string | yes | Enum: factRow | tileMosaic | impactBand | valueCards. |
| `eyebrow` | string | no | Small eyebrow heading, e.g. 'Our 2025 impact'. |
| `theme` | string | no | Enum: default | dark. Dark/black full-width band (impactBand). |
| `stats` | array&lt;object> | yes | Stat items (merged: stats[] + items[] + tiles[]). Each: {value (string, big number/short fact), label (string), description (richtext), icon (image, valueCards), image (image, photo-tile variant), backgroundColor (string, tile color token), hasBackground (boolean, alternating card background)}. |
| `statValue` | string | no | Display-size single figure for the impactBand variant, e.g. '$6.1+ million'. |
| `badgeImage` | image | no | Award badge shown in the impactBand variant. |
| `body` | richtext | no | Summary paragraph (impactBand). |
| `ctaLabel` | string | no | CTA button label, e.g. 'View CSR Report'. |
| `ctaUrl` | link | no | CTA target. |

## Used on slugs

- [`/en/home/careers/employee-stories/alexandrina-cheptanaru`](/pages/en_home_careers_employee-stories_alexandrina-cheptanaru)
- [`/en/home/careers/employee-stories/ana-cervantes`](/pages/en_home_careers_employee-stories_ana-cervantes)
- [`/en/home/careers/employee-stories/andre-salmazzo`](/pages/en_home_careers_employee-stories_andre-salmazzo)
- [`/en/home/careers/employee-stories/andrea-gissi`](/pages/en_home_careers_employee-stories_andrea-gissi)
- [`/en/home/careers/employee-stories/anniek-wiltink`](/pages/en_home_careers_employee-stories_anniek-wiltink)
- [`/en/home/careers/employee-stories/anula-prokopowicz`](/pages/en_home_careers_employee-stories_anula-prokopowicz)
- [`/en/home/careers/employee-stories/arnela-hodzic-isakovic`](/pages/en_home_careers_employee-stories_arnela-hodzic-isakovic)
- [`/en/home/careers/employee-stories/artur-praski`](/pages/en_home_careers_employee-stories_artur-praski)
- [`/en/home/careers/employee-stories/artur-praski/artur-praski-local`](/pages/en_home_careers_employee-stories_artur-praski_artur-praski-local)
- [`/en/home/careers/employee-stories/cristina-linte-glass`](/pages/en_home_careers_employee-stories_cristina-linte-glass)
- [`/en/home/careers/employee-stories/diego-saul`](/pages/en_home_careers_employee-stories_diego-saul)
- [`/en/home/careers/employee-stories/fabrice-bayle`](/pages/en_home_careers_employee-stories_fabrice-bayle)
- [`/en/home/careers/employee-stories/femke-zijlstra`](/pages/en_home_careers_employee-stories_femke-zijlstra)
- [`/en/home/careers/employee-stories/gayan-fernando`](/pages/en_home_careers_employee-stories_gayan-fernando)
- [`/en/home/careers/employee-stories/ioanna-georgiou`](/pages/en_home_careers_employee-stories_ioanna-georgiou)
- [`/en/home/careers/employee-stories/ivete-dias`](/pages/en_home_careers_employee-stories_ivete-dias)
- [`/en/home/careers/employee-stories/jenny-hu`](/pages/en_home_careers_employee-stories_jenny-hu)
- [`/en/home/careers/employee-stories/jigyasa-daiya`](/pages/en_home_careers_employee-stories_jigyasa-daiya)
- [`/en/home/careers/employee-stories/john-ellison`](/pages/en_home_careers_employee-stories_john-ellison)
- [`/en/home/careers/employee-stories/jolanta-wojciechowska`](/pages/en_home_careers_employee-stories_jolanta-wojciechowska)
- [`/en/home/careers/employee-stories/jonas-janiunas`](/pages/en_home_careers_employee-stories_jonas-janiunas)
- [`/en/home/careers/employee-stories/juliana-bonani`](/pages/en_home_careers_employee-stories_juliana-bonani)
- [`/en/home/careers/employee-stories/juliana-bonani/juliana-bonani-local`](/pages/en_home_careers_employee-stories_juliana-bonani_juliana-bonani-local)
- [`/en/home/careers/employee-stories/katarina-kelam`](/pages/en_home_careers_employee-stories_katarina-kelam)
- [`/en/home/careers/employee-stories/krisakorn-rerkrai`](/pages/en_home_careers_employee-stories_krisakorn-rerkrai)
- [`/en/home/careers/employee-stories/marie-brochenin`](/pages/en_home_careers_employee-stories_marie-brochenin)
- [`/en/home/careers/employee-stories/merve-ozdemir-ceran`](/pages/en_home_careers_employee-stories_merve-ozdemir-ceran)
- [`/en/home/careers/employee-stories/michael-bruon`](/pages/en_home_careers_employee-stories_michael-bruon)
- [`/en/home/careers/employee-stories/michael-kampers`](/pages/en_home_careers_employee-stories_michael-kampers)
- [`/en/home/careers/employee-stories/mutlu-cavusoglu`](/pages/en_home_careers_employee-stories_mutlu-cavusoglu)
- [`/en/home/careers/employee-stories/panisara-marukapitak`](/pages/en_home_careers_employee-stories_panisara-marukapitak)
- [`/en/home/careers/employee-stories/paul-dunn`](/pages/en_home_careers_employee-stories_paul-dunn)
- [`/en/home/careers/employee-stories/pierre-goedert`](/pages/en_home_careers_employee-stories_pierre-goedert)
- [`/en/home/careers/employee-stories/richard-ohm`](/pages/en_home_careers_employee-stories_richard-ohm)
- [`/en/home/careers/employee-stories/richard-rigg`](/pages/en_home_careers_employee-stories_richard-rigg)
- [`/en/home/careers/employee-stories/rob-de-koning`](/pages/en_home_careers_employee-stories_rob-de-koning)
- [`/en/home/careers/employee-stories/robin-cote`](/pages/en_home_careers_employee-stories_robin-cote)
- [`/en/home/careers/employee-stories/royce-mason`](/pages/en_home_careers_employee-stories_royce-mason)
- [`/en/home/careers/employee-stories/sabrina-garcia`](/pages/en_home_careers_employee-stories_sabrina-garcia)
- [`/en/home/careers/employee-stories/sanaa-iqbal`](/pages/en_home_careers_employee-stories_sanaa-iqbal)
- [`/en/home/careers/employee-stories/severine-marquet`](/pages/en_home_careers_employee-stories_severine-marquet)
- [`/en/home/careers/employee-stories/sheila-yanes`](/pages/en_home_careers_employee-stories_sheila-yanes)
- [`/en/home/careers/employee-stories/tiina-vuorinen`](/pages/en_home_careers_employee-stories_tiina-vuorinen)
- [`/en/home/careers/employee-stories/truc-le`](/pages/en_home_careers_employee-stories_truc-le)
- [`/en/home/careers/employee-stories/valentin-rock`](/pages/en_home_careers_employee-stories_valentin-rock)
- [`/en/home/careers/employee-stories/ventsislav-lihachov`](/pages/en_home_careers_employee-stories_ventsislav-lihachov)
- [`/en/home/careers/employee-stories/venus-liu`](/pages/en_home_careers_employee-stories_venus-liu)
- [`/en/home/careers/employee-stories/zuzanna-kokot`](/pages/en_home_careers_employee-stories_zuzanna-kokot)
- [`/en/home/company/avery-dennison-foundation`](/pages/en_home_company_avery-dennison-foundation)
- [`/en/home/company/overview`](/pages/en_home_company_overview)
- [`/en/home/company/values`](/pages/en_home_company_values)
- [`/en/home/cybersecurity`](/pages/en_home_cybersecurity)
- [`/en/home/eu-policy/benefits-of-sustainability-compliance`](/pages/en_home_eu-policy_benefits-of-sustainability-compliance)
- [`/en/home/eu-policy/europes-waste-problem`](/pages/en_home_eu-policy_europes-waste-problem)
- [`/en/home/unlocking-food-waste-value-report`](/pages/en_home_unlocking-food-waste-value-report)
