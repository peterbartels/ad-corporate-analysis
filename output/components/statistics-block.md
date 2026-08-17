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
| `stats` | array<object> | yes | Stat items (merged: stats[] + items[] + tiles[]). Each: {value (string, big number/short fact), label (string), description (richtext), icon (image, valueCards), image (image, photo-tile variant), backgroundColor (string, tile color token), hasBackground (boolean, alternating card background)}. |
| `statValue` | string | no | Display-size single figure for the impactBand variant, e.g. '$6.1+ million'. |
| `badgeImage` | image | no | Award badge shown in the impactBand variant. |
| `body` | richtext | no | Summary paragraph (impactBand). |
| `ctaLabel` | string | no | CTA button label, e.g. 'View CSR Report'. |
| `ctaUrl` | link | no | CTA target. |

## Used on slugs

- `/en/home/careers/employee-stories/alexandrina-cheptanaru`
- `/en/home/careers/employee-stories/ana-cervantes`
- `/en/home/careers/employee-stories/andre-salmazzo`
- `/en/home/careers/employee-stories/andrea-gissi`
- `/en/home/careers/employee-stories/anniek-wiltink`
- `/en/home/careers/employee-stories/anula-prokopowicz`
- `/en/home/careers/employee-stories/arnela-hodzic-isakovic`
- `/en/home/careers/employee-stories/artur-praski`
- `/en/home/careers/employee-stories/artur-praski/artur-praski-local`
- `/en/home/careers/employee-stories/cristina-linte-glass`
- `/en/home/careers/employee-stories/diego-saul`
- `/en/home/careers/employee-stories/fabrice-bayle`
- `/en/home/careers/employee-stories/femke-zijlstra`
- `/en/home/careers/employee-stories/gayan-fernando`
- `/en/home/careers/employee-stories/ioanna-georgiou`
- `/en/home/careers/employee-stories/ivete-dias`
- `/en/home/careers/employee-stories/jenny-hu`
- `/en/home/careers/employee-stories/jigyasa-daiya`
- `/en/home/careers/employee-stories/john-ellison`
- `/en/home/careers/employee-stories/jolanta-wojciechowska`
- `/en/home/careers/employee-stories/jonas-janiunas`
- `/en/home/careers/employee-stories/juliana-bonani`
- `/en/home/careers/employee-stories/juliana-bonani/juliana-bonani-local`
- `/en/home/careers/employee-stories/katarina-kelam`
- `/en/home/careers/employee-stories/krisakorn-rerkrai`
- `/en/home/careers/employee-stories/marie-brochenin`
- `/en/home/careers/employee-stories/merve-ozdemir-ceran`
- `/en/home/careers/employee-stories/michael-bruon`
- `/en/home/careers/employee-stories/michael-kampers`
- `/en/home/careers/employee-stories/mutlu-cavusoglu`
- `/en/home/careers/employee-stories/panisara-marukapitak`
- `/en/home/careers/employee-stories/paul-dunn`
- `/en/home/careers/employee-stories/pierre-goedert`
- `/en/home/careers/employee-stories/richard-ohm`
- `/en/home/careers/employee-stories/richard-rigg`
- `/en/home/careers/employee-stories/rob-de-koning`
- `/en/home/careers/employee-stories/robin-cote`
- `/en/home/careers/employee-stories/royce-mason`
- `/en/home/careers/employee-stories/sabrina-garcia`
- `/en/home/careers/employee-stories/sanaa-iqbal`
- `/en/home/careers/employee-stories/severine-marquet`
- `/en/home/careers/employee-stories/sheila-yanes`
- `/en/home/careers/employee-stories/tiina-vuorinen`
- `/en/home/careers/employee-stories/truc-le`
- `/en/home/careers/employee-stories/valentin-rock`
- `/en/home/careers/employee-stories/ventsislav-lihachov`
- `/en/home/careers/employee-stories/venus-liu`
- `/en/home/careers/employee-stories/zuzanna-kokot`
- `/en/home/company/avery-dennison-foundation`
- `/en/home/company/overview`
- `/en/home/company/values`
- `/en/home/cybersecurity`
- `/en/home/eu-policy/benefits-of-sustainability-compliance`
- `/en/home/eu-policy/europes-waste-problem`
- `/en/home/unlocking-food-waste-value-report`
