<!-- generated: component composition analysis -->
**Page:** `/en/home/careers/search-jobs`  
**Template cluster:** `b8afa38fa0` (job search page)  
*Rem base: the site sets `html { font-size: 62.5% }` at desktop widths (>=1180px), so 1rem = 10px in all margin values below.*

# Job search page

Two-column careers page: a client-side SmartRecruiters job board in the main column with a CTA sidebar on the right.

1. `richtext` — H1 "Search jobs" plus an intro paragraph containing an inline link to the Recruitment Fraud Disclaimer. Margin below: 50px (section-buffer, 5rem).
2. `job-search` — bespoke JS widget (sr-job-board markup) that fetches jobs from the SmartRecruiters API: keyword search field, Country/City/Department dropdowns, work-location filter chips, a list of ~10 job cards (title, posted badge, location, department, worksite) and a "View more jobs" button. Margin below: 100px (content-buffer, 10rem) to page end.
3. `richtext` — sidebar heading "Talent community" with promo copy. Margin below: ~24px (visual estimate).
4. `button` — black pill "Join talent community". Margin below: 50px (section-buffer, 5rem).
5. `richtext` — sidebar heading "Interested in a specific role?" with signup copy. Margin below: ~24px (visual estimate).
6. `button` — black pill "Sign up for job alerts". Margin below: 50px (section-buffer, 5rem).
7. `richtext` — US applicants note linking to the military talent careers site. Margin below: 100px (content-buffer) to page end.

## Vertical rhythm
Standard spacer system: content-buffer 10rem/100px (halves to 5rem on mobile) frames the page top and bottom; section-buffer 5rem/50px separates the sidebar CTA groups and the intro from the job board.
