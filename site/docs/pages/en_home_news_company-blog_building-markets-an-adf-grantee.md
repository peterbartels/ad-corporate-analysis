---
title: "building-markets-an-adf-grantee"
---

<!-- generated: component composition analysis -->
**Page:** [/en/home/news/company-blog/building-markets-an-adf-grantee](https://www.averydennison.com/en/home/news/company-blog/building-markets-an-adf-grantee.html)  
**Template cluster:** `fa32b9224c` (company blog article)  
*Rem base: the site sets `html { font-size: 62.5% }` at desktop widths (>=1180px), so 1rem = 10px in all margin values below.*

# Company blog article — long-form story with captioned images (no hero)

Two-column blog article template without a hero image: share icons sit directly under the byline, and the body alternates richtext with five captioned photos. Sidebar carries related articles and a newsletter signup.

1. [`icon-button`](/components/icon-button) — '← Back to all blogs' text link. *Margin below: ~75px (visual).*
2. [`article-header`](/components/article-header) — H1 headline, author byline (e.g. foundation team) and date — no standfirst, no hero. *Margin below: ~24px (visual).*
3. [`social-share`](/components/social-share) — 'Share' + icon row directly below the byline. *Margin below: 50px (section-buffer).*
4. [`richtext`](/components/richtext) — Body copy block (intro / program description / quotes). *Margin below: ~40px (visual).*
5. [`image`](/components/image) — Captioned photo (caption may include a quote and attribution). Alternates with the richtext above — the richtext/image pair repeats 5 times through the article. *Margin below: ~40px (visual).*
6. [`richtext`](/components/richtext) — Closing paragraphs. *Margin below: 50px (section-buffer).*
7. [`icon-button`](/components/icon-button) — Repeated '← Back to all blogs' link. *Margin below: 100px (content-buffer).*
8. [`carousel-block`](/components/carousel-block) — Sidebar 'You may also like': vertical list of 3 related blog cards (thumbnail, date, title, 'Read more >' link). *Margin below: ~48px (visual, divider rule).*
9. [`form-block`](/components/form-block) — Sidebar 'Sign up for updates' newsletter form: required email field + 'Sign up' pill button (avd-form posting to marketing automation). *Margin below: page-end buffer.*

## Vertical rhythm

Newer blog skeleton using explicit spacers: `section-buffer` (5rem / 50px, halved on mobile) separates title, byline, hero and body; the page opens and closes with `content-buffer` (10rem / 100px, 5rem mobile). Body blocks are ~24-40px apart. Sidebar (related list + signup form) sits in a right-hand column beside the article body.

## Screenshot

Full-page capture at 1440px viewport width (header/footer cropped), scaled to 800px:

<img src="/screens/en_home_news_company-blog_building-markets-an-adf-grantee.webp" alt="Full-page screenshot of /en/home/news/company-blog/building-markets-an-adf-grantee" loading="lazy" style="max-width:100%;border:1px solid var(--vp-c-divider);border-radius:6px;" />
