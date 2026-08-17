---
title: "Article Quote"
---

# Article Quote

**Component:** `article-quote`  
**DEPT mapping:** Quote Block - Article  
**Used on:** 71 page(s)

Pull-quote / testimonial block used inside articles and on careers pages. Shows a large quote with optional attribution (name, role, business unit) and an optional circular portrait photo of the speaker.

> **Migration notes:** Distinct from testimonial-card (multi-card grid on the campaign report page).

## Example

![Article Quote example — /en/home/careers/employee-stories/alexandrina-cheptanaru](/component-examples/article-quote.png)

*Captured live from [/en/home/careers/employee-stories/alexandrina-cheptanaru](https://www.averydennison.com/en/home/careers/employee-stories/alexandrina-cheptanaru.html) — see the [page composition](/pages/en_home_careers_employee-stories_alexandrina-cheptanaru).*

## CMS data model

| Field | Type | Required | Description |
|---|---|---|---|
| `quote` | richtext | yes | Quote text. |
| `authorName` | string | no | Attribution name (merged: authorName + attribution.name + attribution). |
| `authorRole` | string | no | Attribution role/title (merged: authorRole + attribution.role). |
| `authorBusiness` | string | no | Business unit, e.g. 'Materials Group'. |
| `portrait` | image | no | Circular portrait photo (merged: image + portrait). |

## Used on slugs

- [`/en/home/careers/early-career-opportunities`](/pages/en_home_careers_early-career-opportunities)
- [`/en/home/careers/early-career-opportunities/asia-pacific`](/pages/en_home_careers_early-career-opportunities_asia-pacific)
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
- [`/en/home/news/company-blog/avery-dennison-recognized-for-another-industry-first`](/pages/en_home_news_company-blog_avery-dennison-recognized-for-another-industry-first)
- [`/en/home/news/company-blog/global-impact-for-iwd`](/pages/en_home_news_company-blog_global-impact-for-iwd)
- [`/en/home/news/company-blog/how-it-shared-services-are-a-digital-metropolis-helping-companies-on-their-transformation-journey`](/pages/en_home_news_company-blog_how-it-shared-services-are-a-digital-metropolis-helping-companies-on-their-transformation-journey)
- [`/en/home/news/company-blog/paving-the-path-to-continuous-modernization-and-business-value`](/pages/en_home_news_company-blog_paving-the-path-to-continuous-modernization-and-business-value)
- [`/en/home/news/company-blog/the-future-of-ai-business-with-nick-colisto`](/pages/en_home_news_company-blog_the-future-of-ai-business-with-nick-colisto)
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
