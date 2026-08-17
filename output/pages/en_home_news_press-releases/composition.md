<!-- generated: component composition analysis -->
**Page:** [/en/home/news/press-releases](https://www.averydennison.com/en/home/news/press-releases.html)  
**Template cluster:** `47986aca87` (press releases overview with media inquiries form)  
*Rem base: the site sets `html { font-size: 62.5% }` at desktop widths (>=1180px), so 1rem = 10px in all margin values below.*

# Press releases overview

Listing template for the press-release section: centered title, jump links, a load-more card grid of releases, and a full-width media inquiries form on a grey band.

1. `richtext` - centered page title 'Press releases'. Margin below: ~16px.
2. `on-page-navigation` - centered text links 'Media inquiries | Investor news' jumping to the form section / investor news. Margin below: 100px (content-buffer).
3. `carousel-block` - auto-generated press-release teaser grid, 4 columns x 2 rows initially (image, date, bold title, 'Read more >' link per card) with a dark 'View more' load-more pill button centered beneath. Built from three stacked AEM list components that render as one grid. Margin below: 100px (content-buffer).
4. `form-block` - 'Media inquiries' contact form on a full-width light-grey background: first name, last name, email, category dropdown, inquiry textarea, Google reCAPTCHA and a red 'Send message' submit button. Margin below: 42px (mg-bt-m) to footer.

Vertical rhythm: 100px `content-buffer` spacers separate the three page zones; inside the form, small `mg-bt-s`/`mg-bt-m` utility margins (28px/42px) space the fields.
