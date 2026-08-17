<!-- generated: component composition analysis -->
**Page:** `/en/home/legal-and-privacy-notices`  
**Template cluster:** `6cf015440a` (legal-document)  
*Rem base: the site sets `html { font-size: 62.5% }` at desktop widths (>=1180px), so 1rem = 10px in all margin values below.*

# Legal document page (Legal and privacy notices)

Long-form single-column legal/utility page: one centered title followed by ~24 numbered richtext sections with an anchor-linked table of contents. No imagery, no tables (the 'table-alternating-rows' class is only a text-styling wrapper here).

1. `richtext` — Centered H1 "Legal and privacy notices" and H4 "Last updated: April 2024". Page opens with 100px (content-buffer, 10rem) top spacing. Margin below: 0.
2. `richtext` — Intro paragraphs (Global Data Privacy Notice scope) plus a "Contents" block of in-page anchor links (1. Who are we?, 2. What personal information do we collect and why?, ... 11. Additional information for US Residents in certain states (including California), 12. Third parties, etc.). Margin below: 50px (section-buffer, 5rem).
3. `richtext` (x~24) — Numbered legal sections, each an H2/H3 heading with paragraphs, bullet lists and inline links, each carrying an anchor id targeted by the Contents list. One section boundary additionally renders a gray divider rule (spacer line--gray section-buffer). Margin between sections: 50px (section-buffer, 5rem).
4. Page ends with 100px (content-buffer, 10rem) before the footer.

Vertical rhythm: uniform 50px section-buffer (5rem) spacers between every richtext section (17 explicit spacer components plus one line--gray divider variant), bookended by 100px content-buffer (10rem) at top and bottom; buffers halve on mobile.
