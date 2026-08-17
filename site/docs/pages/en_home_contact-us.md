---
title: "contact-us"
---

<!-- generated: component composition analysis -->
**Page:** [`/en/home/contact-us`](/pages/en_home_contact-us)  
**Template cluster:** `996a1574c8` (contact form page)  
*Rem base: the site sets `html { font-size: 62.5% }` at desktop widths (>=1180px), so 1rem = 10px in all margin values below.*

# Contact form page

The corporate contact page: a title above a native AEM form with an address sidebar.

1. [`richtext`](/components/richtext) — centered H1 "Contact us". Margin below: 50px (section-buffer, 5rem).
2. [`form-block`](/components/form-block) — native avd-form in a two-column layout: the left column is a rich text sidebar ("Headquarters" with address and phone), the right column holds paired text inputs (First name / Last name, Email address / Category dropdown), a large required Description textarea, a Google reCAPTCHA checkbox, and a red "Send message" submit button. Below the form sits a bold-led rich text footnote about making a compliance report with two inline links. Margin below: 100px (content-buffer, 10rem) to page end.

## Vertical rhythm
section-buffer 5rem (80px) after the title; form internals use small mg-bt-s/mg-bt-m utility margins; the page closes with content-buffer 10rem (160px desktop, 5rem mobile).

## Screenshot

Full-page capture at 1440px viewport width (header/footer cropped), scaled to 800px:

<img src="/screens/en_home_contact-us.webp" alt="Full-page screenshot of /en/home/contact-us" loading="lazy" style="max-width:100%;border:1px solid var(--vp-c-divider);border-radius:6px;" />
