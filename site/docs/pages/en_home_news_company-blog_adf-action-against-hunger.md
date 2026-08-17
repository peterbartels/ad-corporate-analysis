---
title: "adf-action-against-hunger"
---

<!-- generated: component composition analysis -->
**Page:** [/en/home/news/company-blog/adf-action-against-hunger](https://www.averydennison.com/en/home/news/company-blog/adf-action-against-hunger.html)  
**Template cluster:** `438c8ba563` (company blog article)  
*Rem base: the site sets `html { font-size: 62.5% }` at desktop widths (>=1180px), so 1rem = 10px in all margin values below.*

# Company blog article

Standard two-column blog article: main article column (left, ~2/3) with a persistent sidebar (right, ~1/3) holding related articles and a newsletter signup.

1. [`back-link`](/components/back-link) — '← Back to all blogs' text link at the top of the main column. Margin below: ~64px (visual estimate).
2. [`article-header`](/components/article-header) — article title (H1), category label (e.g. foundation/business name) and publish date. Margin below: ~40px.
3. [`image`](/components/image) — full-column lead photo with a small grey caption underneath. Margin below: ~40px.
4. [`social-share`](/components/social-share) — 'Share' label with Facebook, X, LinkedIn and email icons, followed by a horizontal divider. Margin below: 45px (mg-bt-s, 2.8rem).
5. [`richtext`](/components/richtext) — first body section: several paragraphs with inline links and quotes. Margin below: 50px (section-buffer, 5rem).
6. [`image`](/components/image) — inline article photo with caption. Margin below: 50px (section-buffer, 5rem).
7. [`richtext`](/components/richtext) — second body section including a bulleted results list and closing quote paragraphs. Margin below: ~48px to the closing divider.
8. [`back-link`](/components/back-link) — repeated '← Back to all blogs' link after a divider. Margin below: 100px (content-buffer, 10rem) to page end.

Sidebar (renders alongside the article):
- [`carousel-block`](/components/carousel-block) — 'You may also like' list of 3 related posts (thumbnail, date, title, 'Read more >'). Margin below: ~48px.
- [`form-block`](/components/form-block) — 'Sign up for updates' email capture (email field + black 'Sign up' pill button).

**Vertical rhythm:** body sections are separated by `section-buffer` spacers (5rem / 50px, halved on mobile); the page closes with a `content-buffer` (10rem / 100px). Small gaps (share row, captions) use mg-bt-s (2.8rem / ~45px).

## Screenshot

Full-page capture at 1440px viewport width (header/footer cropped), scaled to 800px:

<img src="/screens/en_home_news_company-blog_adf-action-against-hunger.webp" alt="Full-page screenshot of /en/home/news/company-blog/adf-action-against-hunger" loading="lazy" style="max-width:100%;border:1px solid var(--vp-c-divider);border-radius:6px;" />
