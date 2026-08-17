<!-- generated: component composition analysis -->
**Page:** `/en/home/news/company-blog/avery-dennison-helps-2-make-a-wish-kids-wishes-come-true`  
**Template cluster:** `4387538938` (company blog article (video + photo essay))  
*Rem base: the site sets `html { font-size: 62.5% }` at desktop widths (>=1180px), so 1rem = 10px in all margin values below.*

# Company blog article (video + photo essay)

Long-form photo-essay variant of the blog article: no lead image — the header goes straight to the share row, an embedded YouTube video sits high in the body, and 5+ captioned photos alternate with text; boilerplate 'About' sections close the article.

1. `back-link` — '← Back to all blogs'. Margin below: ~64px.
2. `article-header` — title, category label, date; no lead image. Margin below: ~24px.
3. `social-share` — share icons + divider. Margin below: 45px (mg-bt-s).
4. `richtext` — intro paragraphs. Margin below: 50px (section-buffer).
5. `video-block` — embedded YouTube video (responsive 16:9 iframe). Margin below: ~40px.
6. Alternation repeated ~5x: `richtext` story section (~40px below) then `image` captioned event photo (~40px below); the final photo row is a 2-up collage.
7. `richtext` — closing story paragraphs. Margin below: 50px (section-buffer).
8. `richtext` — 'About [organization]' boilerplate sections with external links. Margin below: ~48px to divider.
9. `back-link` — bottom back link. Margin below: 100px (content-buffer).

Sidebar: `carousel-block` ('You may also like', 3 posts) then `form-block` ('Sign up for updates').

**Vertical rhythm:** `section-buffer` (5rem / 50px) around intro and closing; ~40px through the photo-essay alternation; `content-buffer` (10rem / 100px) at page end.
