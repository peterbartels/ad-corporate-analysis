<!-- generated: component composition analysis -->
**Page:** [/en/home/company/avery-dennison-foundation/corporate-social-responsibility-report](https://www.averydennison.com/en/home/company/avery-dennison-foundation/corporate-social-responsibility-report.html)  
**Template cluster:** `5887f999d8` (report landing page)  
*Rem base: the site sets `html { font-size: 62.5% }` at desktop widths (>=1180px), so 1rem = 10px in all margin values below.*

# Report landing page

Two-column publication page: current report as an embedded flipbook in the main column, an archive link list in the sidebar.

1. `richtext` — H1, intro paragraph, and a bold year label above the embed. Margin below: ~40px (visual estimate).
2. `publication` — third-party Heyzine flip-book iframe presenting the current report with paging/zoom controls. Margin below: 50px (section-buffer, 5rem).
3. `button` — "View PDF" linking to the PDF asset. Margin below: 100px (content-buffer, 10rem) to page end.
4. `richtext` — sidebar "Previous CSR Reports" heading with a stack of year links (markup uses a simple table of links). Margin below: 100px (content-buffer) to page end.

## Vertical rhythm
content-buffer 10rem/100px frames the page; section-buffer 5rem/50px separates the flipbook from its download button.
