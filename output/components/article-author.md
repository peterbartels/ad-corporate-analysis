# Article Author

**Component:** `article-author`  
**DEPT mapping:** NEW - Article author byline  
**Used on:** 18 page(s)

Author byline card for leadership-perspectives articles: round headshot, name, job title and a 'LinkedIn Profile' button. Typically shown at the top or bottom of the article.

> **Migration notes:** NEW component per DEPT table. Should reference a shared Person content type (also used by people-overview and person-bio).

## Example

![Article Author example — /en/home/news/leadership-perspectives/nick-colisto/championing-collaboration](examples/article-author.png)

*Captured live from [/en/home/news/leadership-perspectives/nick-colisto/championing-collaboration](https://www.averydennison.com/en/home/news/leadership-perspectives/nick-colisto/championing-collaboration.html) — see the [page composition](../pages/en_home_news_leadership-perspectives_nick-colisto_championing-collaboration/composition.md).*

## CMS data model

| Field | Type | Required | Description |
|---|---|---|---|
| `photo` | image | no | Round author headshot. |
| `name` | string | yes | Author name. |
| `jobTitle` | string | no | Author job title (merged: jobTitle + role). |
| `linkedinUrl` | link | no | LinkedIn profile URL. |
| `linkedinLabel` | string | no | Button label, default 'LinkedIn Profile'. |

## Used on slugs

- `/en/home/news/company-blog/how-it-shared-services-are-a-digital-metropolis-helping-companies-on-their-transformation-journey`
- `/en/home/news/company-blog/paving-the-path-to-continuous-modernization-and-business-value`
- `/en/home/news/company-blog/the-future-of-ai-business-with-nick-colisto`
- `/en/home/news/leadership-perspectives/nick-colisto/championing-collaboration`
- `/en/home/news/leadership-perspectives/nick-colisto/cutting-through-complexity`
- `/en/home/news/leadership-perspectives/nick-colisto/engineering-leadership-from-within`
- `/en/home/news/leadership-perspectives/nick-colisto/execution-is-a-leadership-behavior-not-an-operational-task`
- `/en/home/news/leadership-perspectives/nick-colisto/from-problem-solving-capability-building-ai`
- `/en/home/news/leadership-perspectives/nick-colisto/how-it-shared-services-are-a-digital-metropolis-helping-companies-on-their-transformation-journey`
- `/en/home/news/leadership-perspectives/nick-colisto/leading-change-in-the-digital-era`
- `/en/home/news/leadership-perspectives/nick-colisto/living-our-values-through-technology`
- `/en/home/news/leadership-perspectives/nick-colisto/net-zero-it`
- `/en/home/news/leadership-perspectives/nick-colisto/paving-the-path-to-continuous-modernization-and-business-value`
- `/en/home/news/leadership-perspectives/nick-colisto/the-four-digital-experiences-powering-growth-and-efficiency`
- `/en/home/news/leadership-perspectives/nick-colisto/the-future-of-ai-business-with-nick-colisto`
- `/en/home/news/leadership-perspectives/nick-colisto/the-journey-to-high-road-leadership`
- `/en/home/news/leadership-perspectives/nick-colisto/the-strategic-advantages-of-inclusive-leadership-in-it`
- `/en/home/news/leadership-perspectives/nick-colisto/what-happens-when-you-put-exceptional-tools-in-the-hands-of-exceptional-people`
