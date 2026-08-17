---
title: "share"
---

<!-- generated: component composition analysis -->
**Page:** [`/en/home/unlocking-food-waste-value-report/share`](/pages/en_home_unlocking-food-waste-value-report_share)  
**Template cluster:** `e3067b2a7e` (campaign share page)  
*Rem base: the site sets `html { font-size: 62.5% }` at desktop widths (>=1180px), so 1rem = 10px in all margin values below.*

# Campaign share page

Campaign subpage of the report microsite: the shared stat hero plus a single share panel built from the campaign's dotted-rule table.

1. [`campaign-stat-hero`](/components/campaign-stat-hero) — same full-width photo hero as the campaign home (eyebrow, h1, subheading, rule-separated stat lines), no CTA button. Margin below: 50px (section-buffer, 5rem).
2. [`table`](/components/table) — light variant with black dotted rules, titled "Share with your colleagues", three rows: Email (icon links for Other email client, Gmail, Outlook, Yahoo Mail, Apple iCloud), Social media (LinkedIn, Facebook, X, Threads icon links), and DIY (a boxed pre-written share message with short link and a click-to-copy-to-clipboard control). Margin below: 100px (content-buffer) to the footer.

Vertical rhythm: section-buffer 5rem (80px) between hero and share panel, content-buffer 10rem (160px desktop / 5rem mobile) to the page end; row spacing inside the panel comes from the dotted-rule dividers.

## Screenshot

Full-page capture at 1440px viewport width (header/footer cropped), scaled to 800px:

<img src="/screens/en_home_unlocking-food-waste-value-report_share.webp" alt="Full-page screenshot of /en/home/unlocking-food-waste-value-report/share" loading="lazy" style="max-width:100%;border:1px solid var(--vp-c-divider);border-radius:6px;" />
