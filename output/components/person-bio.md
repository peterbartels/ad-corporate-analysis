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

- `/en/home/company/our-leadership/danny-allouche`
- `/en/home/company/our-leadership/deena-baker-nel`
- `/en/home/company/our-leadership/deon-stander`
- `/en/home/company/our-leadership/francisco-melo`
- `/en/home/company/our-leadership/greg-lovins`
- `/en/home/company/our-leadership/ignacio-walker`
- `/en/home/company/our-leadership/isabela-galli`
- `/en/home/company/our-leadership/johnny-gao`
- `/en/home/company/our-leadership/mariana-rodriguez`
- `/en/home/company/our-leadership/michael-barton`
- `/en/home/company/our-leadership/michael-colarossi`
- `/en/home/company/our-leadership/ned-peverley`
- `/en/home/company/our-leadership/nick-colisto`
- `/en/home/company/our-leadership/pankaj-bhardwaj`
- `/en/home/company/our-leadership/pascale-wautelet`
- `/en/home/company/our-leadership/srikar-kasarla`
- `/en/home/news/company-blog/a-conversation-with-shruti-george`
- `/en/home/news/company-blog/introducing-avery-dennison-black-employee-resource-group`
- `/en/home/news/company-blog/pride-2023-meet-unite-ally-will-sandman`
- `/en/home/news/company-blog/voz-latina-employee-resource-group`
