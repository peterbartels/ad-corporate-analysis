<!-- generated: component composition analysis -->
**Page:** `/en/home/legal-and-privacy-notices/avery-dennison-general-terms-and-conditions-of-purchase`  
**Template cluster:** `5dce1efbdb` (legal document listing)  
*Rem base: the site sets `html { font-size: 62.5% }` at desktop widths (>=1180px), so 1rem = 10px in all margin values below.*

# Legal document listing — General Terms and Conditions of Purchase

Legal-and-privacy-notices template: page title, an italic intro paragraph, then four regional groups of downloadable PDF documents rendered as row tables. No spacer components; gaps come from component margins.

1. `richtext` — H1 page title ("Avery Dennison General Terms and Conditions of Purchase", from the template page-title slot) plus one italic intro paragraph stating that these terms apply to all AD purchases. Margin below: ~40px (visual estimate).
2. `table` — document-download group ("productdocuments" table), repeated 4 times: North America, Latin America, EMEA, Asia Pacific. Each group is a bold heading line ("General Terms and Conditions of Purchase <region>:") followed by 1–6 rule-separated rows; each row is a document title link with a "<size> KB (PDF)" meta line beneath it and a PDF file icon on the right, the whole row linking to a DAM PDF asset (some titles localized, incl. RTL Hebrew). Groups are separated by ~90px (visual estimate); the last runs to the page end.

## Vertical rhythm

Legacy content template without spacers: ~40px after the intro, ~90px between document groups (visual estimates). In a headless model this is one repeatable "document group" list on the page.
