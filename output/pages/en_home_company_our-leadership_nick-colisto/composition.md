<!-- generated: component composition analysis -->
**Page:** `/en/home/company/our-leadership/nick-colisto`  
**Template cluster:** `4ad5c26a09` (leadership bio page)  
*Rem base: the site sets `html { font-size: 62.5% }` at desktop widths (>=1180px), so 1rem = 10px in all margin values below.*

> **Template note:** this layout is shared by 16 pages:
> - `/en/home/company/our-leadership/danny-allouche`
> - `/en/home/company/our-leadership/deena-baker-nel`
> - `/en/home/company/our-leadership/deon-stander`
> - `/en/home/company/our-leadership/francisco-melo`
> - `/en/home/company/our-leadership/greg-lovins`
> - `/en/home/company/our-leadership/ignacio-walker`
> - `/en/home/company/our-leadership/isabela-galli`
> - `/en/home/company/our-leadership/johnny-gao`
> - `/en/home/company/our-leadership/mariana-rodriguez`
> - `/en/home/company/our-leadership/michael-barton`
> - `/en/home/company/our-leadership/michael-colarossi`
> - `/en/home/company/our-leadership/ned-peverley`
> - `/en/home/company/our-leadership/nick-colisto`
> - `/en/home/company/our-leadership/pankaj-bhardwaj`
> - `/en/home/company/our-leadership/pascale-wautelet`
> - `/en/home/company/our-leadership/srikar-kasarla`

# Leadership bio page

Executive biography template shared by all 16 leadership bio pages: portrait left, structured bio right, back link below.

1. `person-bio` — two-column layout: large circular executive portrait photo in the left column; right column holds the H1 name, role line, a LinkedIn Profile icon link, and several biography paragraphs. In AEM this is assembled from image + text + html blocks, but for headless it should be one structured Person Bio component fed from a people collection. Margin below: 100px (content-buffer, 10rem).
2. `richtext` — underlined "← Back to our leadership" link. Margin below: ~120px (visual estimate) to page end.

## Vertical rhythm
Single content-buffer 10rem/100px separates the bio from the back link; the page is otherwise compact.
