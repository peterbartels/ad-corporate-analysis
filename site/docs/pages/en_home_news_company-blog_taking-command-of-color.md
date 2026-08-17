---
title: "taking-command-of-color"
---

<!-- generated: component composition analysis -->
**Page:** [/en/home/news/company-blog/taking-command-of-color](https://www.averydennison.com/en/home/news/company-blog/taking-command-of-color.html)  
**Template cluster:** `4ba53cbc79` (blog Q&A article with video and images)  
*Rem base: the site sets `html { font-size: 62.5% }` at desktop widths (>=1180px), so 1rem = 10px in all margin values below.*

# Blog Q&A article with video and images

Expert Q&A article: long question-and-answer richtext interleaved with one embedded video and three inline photos; standard right sidebar.

1. [`back-link`](/components/back-link) — top 'Back to all blogs' link. ~40px below.
2. [`article-header`](/components/article-header) — H1 title (with descriptive subtitle), author/team line, publish date. ~32px below.
3. [`image`](/components/image) — hero image. ~40px below.
4. [`social-share`](/components/social-share) — Share icons. ~64px below.
5. [`richtext`](/components/richtext) — intro, bulleted interviewee list and first Q&A blocks. 50px below (section-buffer, 5rem).
6. [`video-block`](/components/video-block) — embedded YouTube video. 50px below (section-buffer).
7. [`richtext`](/components/richtext) — Q&A continuation. 50px below (section-buffer).
8. [`image`](/components/image) — inline photo. 50px below (section-buffer).
9. [`richtext`](/components/richtext) — Q&A continuation. 50px below (section-buffer).
10. [`image`](/components/image) — inline photo. 50px below (section-buffer).
11. [`richtext`](/components/richtext) — Q&A continuation with a numbered checklist. 50px below (section-buffer).
12. [`image`](/components/image) — inline photo. 50px below (section-buffer).
13. [`richtext`](/components/richtext) — closing Q&A and resource links, then a horizontal rule. ~64px below.
14. [`carousel-block`](/components/carousel-block) — sidebar 'You may also like', three related article cards. ~48px below in sidebar.
15. [`form-block`](/components/form-block) — sidebar newsletter signup. Ends the sidebar.
16. [`back-link`](/components/back-link) — bottom return link. 100px (content-buffer) to page end.

Vertical rhythm: every media/text boundary in the body is an authored `section-buffer` spacer (5rem = 50px); the page closes with a 10rem `content-buffer` (5rem mobile).

## Screenshot

Full-page capture at 1440px viewport width (header/footer cropped), scaled to 800px:

<img src="/screens/en_home_news_company-blog_taking-command-of-color.webp" alt="Full-page screenshot of /en/home/news/company-blog/taking-command-of-color" loading="lazy" style="max-width:100%;border:1px solid var(--vp-c-divider);border-radius:6px;" />
