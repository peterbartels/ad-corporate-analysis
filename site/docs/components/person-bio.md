---
title: "Person Bio"
---

# Person Bio

**Component:** `person-bio`  
**DEPT mapping:** NEW - Person Bio  
**Used on:** 20 page(s)

Leadership biography page block: large circular portrait in the left column with name (h1), role and a LinkedIn profile link, and 5-6 biography paragraphs in the right column.

> **Migration notes:** NEW component. Model as a Person content type shared with people-overview and article-author; bio pages then render Person entries.

## CMS data model

| Field | Type | Required | Description |
|---|---|---|---|
| `photo` | image | yes | Large circular portrait. |
| `name` | string | yes | Person name (page h1). |
| `role` | string | yes | Title, e.g. 'President, Materials Group'. |
| `linkedinUrl` | link | no | LinkedIn profile link. |
| `bio` | richtext | yes | Biography paragraphs. |

## Used on slugs

- [`/en/home/company/our-leadership/danny-allouche`](/pages/en_home_company_our-leadership_danny-allouche)
- [`/en/home/company/our-leadership/deena-baker-nel`](/pages/en_home_company_our-leadership_deena-baker-nel)
- [`/en/home/company/our-leadership/deon-stander`](/pages/en_home_company_our-leadership_deon-stander)
- [`/en/home/company/our-leadership/francisco-melo`](/pages/en_home_company_our-leadership_francisco-melo)
- [`/en/home/company/our-leadership/greg-lovins`](/pages/en_home_company_our-leadership_greg-lovins)
- [`/en/home/company/our-leadership/ignacio-walker`](/pages/en_home_company_our-leadership_ignacio-walker)
- [`/en/home/company/our-leadership/isabela-galli`](/pages/en_home_company_our-leadership_isabela-galli)
- [`/en/home/company/our-leadership/johnny-gao`](/pages/en_home_company_our-leadership_johnny-gao)
- [`/en/home/company/our-leadership/mariana-rodriguez`](/pages/en_home_company_our-leadership_mariana-rodriguez)
- [`/en/home/company/our-leadership/michael-barton`](/pages/en_home_company_our-leadership_michael-barton)
- [`/en/home/company/our-leadership/michael-colarossi`](/pages/en_home_company_our-leadership_michael-colarossi)
- [`/en/home/company/our-leadership/ned-peverley`](/pages/en_home_company_our-leadership_ned-peverley)
- [`/en/home/company/our-leadership/nick-colisto`](/pages/en_home_company_our-leadership_nick-colisto)
- [`/en/home/company/our-leadership/pankaj-bhardwaj`](/pages/en_home_company_our-leadership_pankaj-bhardwaj)
- [`/en/home/company/our-leadership/pascale-wautelet`](/pages/en_home_company_our-leadership_pascale-wautelet)
- [`/en/home/company/our-leadership/srikar-kasarla`](/pages/en_home_company_our-leadership_srikar-kasarla)
- [`/en/home/news/company-blog/a-conversation-with-shruti-george`](/pages/en_home_news_company-blog_a-conversation-with-shruti-george)
- [`/en/home/news/company-blog/introducing-avery-dennison-black-employee-resource-group`](/pages/en_home_news_company-blog_introducing-avery-dennison-black-employee-resource-group)
- [`/en/home/news/company-blog/pride-2023-meet-unite-ally-will-sandman`](/pages/en_home_news_company-blog_pride-2023-meet-unite-ally-will-sandman)
- [`/en/home/news/company-blog/voz-latina-employee-resource-group`](/pages/en_home_news_company-blog_voz-latina-employee-resource-group)
