<!-- generated: component composition analysis -->
**Page:** [/en/home/recruitment-privacy-notices](https://www.averydennison.com/en/home/recruitment-privacy-notices.html)  
**Template cluster:** `1b35667649` (document download list page)  
*Rem base: the site sets `html { font-size: 62.5% }` at desktop widths (>=1180px), so 1rem = 10px in all margin values below.*

# Document download list page

Legal/document hub template: a centered title block followed by a two-column list of localized PDF download links.

1. `richtext` — centered h1 page title plus h4 sub-lines ("Last updated: <date>" and an instruction to download the notice in your language). Margin below: 50px (section-buffer, 5rem).
2. `richtext` — two side-by-side richtext columns (one column-control row), each an alphabetical list of underlined language links pointing to PDF documents in the DAM; ~28 links in total across both columns. In a headless model this becomes a single download-link list split over two columns. Margin below: 100px (content-buffer) to the footer.

Vertical rhythm: section-buffer 5rem (80px) between title block and link lists, content-buffer 10rem (160px desktop / 5rem mobile) to the page end; spacing between links is created by empty paragraphs inside the richtext.
