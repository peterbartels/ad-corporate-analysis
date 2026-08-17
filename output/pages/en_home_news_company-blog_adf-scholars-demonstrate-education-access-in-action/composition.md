<!-- generated: component composition analysis -->
**Page:** [/en/home/news/company-blog/adf-scholars-demonstrate-education-access-in-action](https://www.averydennison.com/en/home/news/company-blog/adf-scholars-demonstrate-education-access-in-action.html)  
**Template cluster:** `75b99e97fa` (company blog article (profile sections))  
*Rem base: the site sets `html { font-size: 62.5% }` at desktop widths (>=1180px), so 1rem = 10px in all margin values below.*

# Company blog article (profile sections)

Blog article template built from repeating person-profile chapters: sub-heading, portrait/family photo, then the person's story.

1. `back-link` — '← Back to all blogs'. Margin below: ~64px.
2. `article-header` — title, category label, date. Margin below: ~40px.
3. `image` — lead photo (collage of the profiled people) with caption. Margin below: ~40px.
4. `social-share` — share icons + divider. Margin below: 45px (mg-bt-s).
5. `richtext` — program introduction with inline links. Margin below: 50px (section-buffer).
6. Repeated 3x per profiled person: `richtext` sub-heading (name – role, location, ~32px below), `image` profile photo (~32px below), `richtext` story paragraphs with quotes (~48px below).
7. `richtext` — closing summary paragraph. Margin below: ~48px to divider.
8. `back-link` — bottom back link. Margin below: 100px (content-buffer).

Sidebar: `carousel-block` ('You may also like', 3 posts) then `form-block` ('Sign up for updates').

**Vertical rhythm:** one `section-buffer` (5rem / 50px) after the intro; inside the repeating profile chapters gaps are tighter (~32–48px); page ends with `content-buffer` (10rem / 100px).
