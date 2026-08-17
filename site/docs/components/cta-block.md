---
title: "CTA Block"
---

# CTA Block

**Component:** `cta-block`  
**DEPT mapping:** CTA Block  
**Used on:** 71 page(s)

Card-style call-to-action container: eyebrow, heading, rich body and a pill CTA button, optionally with a small campaign logo/icon beside the heading. Variants observed: a 4-column teaser row linking to sibling campaign pages (shared experience fragment), and a boxed content card with rich bulleted copy wrapped around an inline image ('Shop stories').

> **Migration notes:** Absorbs raw 'content-card' (single-use boxed card; analyst mapped it to CTA Block). The 4-column teaser usage was an AEM experience fragment shared across EU-policy pages — model as a reusable entry.

## CMS data model

| Field | Type | Required | Description |
|---|---|---|---|
| `variant` | string | no | Enum: banner | contentCard | teaserColumns. |
| `eyebrow` | string | no | Eyebrow label, e.g. 'Corporate social responsibility'. |
| `heading` | string | yes | CTA/card heading. |
| `body` | richtext | no | Main copy (merged: body + bodyTop). |
| `image` | image | no | Inline photo in the middle of the content card variant. |
| `secondaryBody` | richtext | no | Copy below the inline image (merged: bodyBottom). |
| `icon` | image | no | Small campaign logo/mark beside the heading. |
| `ctaLabel` | string | no | Button label, e.g. 'View CSR Report'. |
| `ctaUrl` | link | no | Button target. |
| `items` | array&lt;object> | no | teaserColumns variant: teaser links to related pages. Each: {title (string), text (string), linkLabel (string), linkUrl (link)}. |

## Used on slugs

- [`/en/home`](/pages/en_home)
- [`/en/home/careers/early-career-opportunities/asia-pacific`](/pages/en_home_careers_early-career-opportunities_asia-pacific)
- [`/en/home/careers/early-career-opportunities/asia-pacific/ad-nextgen-program`](/pages/en_home_careers_early-career-opportunities_asia-pacific_ad-nextgen-program)
- [`/en/home/careers/early-career-opportunities/asia-pacific/internship-program`](/pages/en_home_careers_early-career-opportunities_asia-pacific_internship-program)
- [`/en/home/careers/early-career-opportunities/asia-pacific/lead-program`](/pages/en_home_careers_early-career-opportunities_asia-pacific_lead-program)
- [`/en/home/careers/early-career-opportunities/europe`](/pages/en_home_careers_early-career-opportunities_europe)
- [`/en/home/careers/early-career-opportunities/europe/commercial`](/pages/en_home_careers_early-career-opportunities_europe_commercial)
- [`/en/home/careers/early-career-opportunities/europe/data-science`](/pages/en_home_careers_early-career-opportunities_europe_data-science)
- [`/en/home/careers/early-career-opportunities/europe/faq`](/pages/en_home_careers_early-career-opportunities_europe_faq)
- [`/en/home/careers/early-career-opportunities/europe/finance`](/pages/en_home_careers_early-career-opportunities_europe_finance)
- [`/en/home/careers/early-career-opportunities/europe/operations`](/pages/en_home_careers_early-career-opportunities_europe_operations)
- [`/en/home/careers/early-career-opportunities/europe/research-and-development`](/pages/en_home_careers_early-career-opportunities_europe_research-and-development)
- [`/en/home/careers/early-career-opportunities/europe/sales`](/pages/en_home_careers_early-career-opportunities_europe_sales)
- [`/en/home/careers/early-career-opportunities/europe/supply-chain`](/pages/en_home_careers_early-career-opportunities_europe_supply-chain)
- [`/en/home/careers/early-career-opportunities/global`](/pages/en_home_careers_early-career-opportunities_global)
- [`/en/home/careers/early-career-opportunities/north-america`](/pages/en_home_careers_early-career-opportunities_north-america)
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
- [`/en/home/company/overview`](/pages/en_home_company_overview)
- [`/en/home/eu-policy/europes-waste-problem`](/pages/en_home_eu-policy_europes-waste-problem)
- [`/en/home/eu-policy/our-vision-more-sustainable-competitive-europe-connecting-physical-and-digital`](/pages/en_home_eu-policy_our-vision-more-sustainable-competitive-europe-connecting-physical-and-digital)
- [`/en/home/eu-policy/sustainable-supply-chains`](/pages/en_home_eu-policy_sustainable-supply-chains)
- [`/en/home/industries`](/pages/en_home_industries)
- [`/en/home/news/company-blog/shops-and-installers-in-the-news-13-avery-dennison-success-stories`](/pages/en_home_news_company-blog_shops-and-installers-in-the-news-13-avery-dennison-success-stories)
- [`/en/home/technologies`](/pages/en_home_technologies)
