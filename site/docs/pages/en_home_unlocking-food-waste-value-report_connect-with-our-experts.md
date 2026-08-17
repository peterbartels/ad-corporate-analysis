---
title: "connect-with-our-experts"
---

<!-- generated: component composition analysis -->
**Page:** [/en/home/unlocking-food-waste-value-report/connect-with-our-experts](https://www.averydennison.com/en/home/unlocking-food-waste-value-report/connect-with-our-experts.html)  
**Template cluster:** `b7960bb140` (campaign contact form page)  
*Rem base: the site sets `html { font-size: 62.5% }` at desktop widths (>=1180px), so 1rem = 10px in all margin values below.*

# Campaign contact form page

Campaign subpage of the report microsite: the shared stat hero followed by a single expert-contact form.

1. [`campaign-stat-hero`](/components/campaign-stat-hero) — same full-width photo hero as the campaign home (eyebrow, h1, subheading, rule-separated stat lines) but without a CTA button. Margin below: 100px (content-buffer, 10rem).
2. [`richtext`](/components/richtext) — h2 section heading "Connect with our experts". Margin below: 50px (section-buffer, 5rem).
3. [`form-block`](/components/form-block) — embedded Act-On (ao-form) contact form: name, email, phone, company, job title, country and audience selects, a pill-style multi-select group of solution interests, a message textarea, contact and marketing opt-in checkboxes with legal copy, reCAPTCHA, and a red "Get in touch" submit button; a hidden modal trigger accompanies it. Margin below: 100px (content-buffer) to the footer.

Vertical rhythm: content-buffer 10rem (160px desktop / 5rem mobile) after hero and before footer, section-buffer 5rem (80px) between heading and form; field spacing comes from the Act-On form grid.

## Screenshot

Full-page capture at 1440px viewport width (header/footer cropped), scaled to 800px:

<img src="/screens/en_home_unlocking-food-waste-value-report_connect-with-our-experts.webp" alt="Full-page screenshot of /en/home/unlocking-food-waste-value-report/connect-with-our-experts" loading="lazy" style="max-width:100%;border:1px solid var(--vp-c-divider);border-radius:6px;" />
