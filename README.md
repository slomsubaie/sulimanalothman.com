# sulimanalothman.com

Personal resume site for Suliman Alothman, written in plain HTML, CSS and JavaScript with no build step.

## Editing content

| What | Where |
|---|---|
| Jobs, case studies, skills, certifications, education | `data/content.js` |
| Headline, impact numbers, pillars, contact links | `index.html` |
| Colours, layout | `css/styles.css` (tokens at the top) |
| Downloadable CV | replace `assets/Suliman-Alothman-CV.pdf` (keep the name) |
| Photo | save as `assets/headshot.jpg` and follow the comment in `index.html` (search for `portrait`) |

**Demo videos (Jamaiaty):** the pop-up player on the HOA entry plays two Unlisted YouTube videos. To replace one, upload the new video to YouTube and put its ID (the part after `youtu.be/` or `watch?v=`) in `demo.videos.en.id` or `demo.videos.ar.id` in `data/content.js`, then update `duration`. Arabic-language browsers start on the Arabic video.

To add a job, copy one `{ ... }` block in `experience` and edit it. The newest job goes first. `tracks` takes any of `"build"`, `"assure"`, `"lead"`; these control the colour tags and the filter buttons.

After an edit, also update `<lastmod>` in `sitemap.xml`.

## Preview locally

```sh
python3 -m http.server 8000
# open http://localhost:8000
```

## Quality checks

Every push and pull request runs `.github/workflows/checks.yml`:

- HTML validation (`html-validate`)
- Broken-link scan (`lychee`)
- WCAG 2 AA accessibility audit (`pa11y-ci`, using the axe and HTML_CodeSniffer runners)
- Lighthouse, which fails if Performance, Accessibility, Best Practices or SEO drops below 95

The site deploys to GitHub Pages only when every check passes.

## First-time setup

1. **Buy the domain** `sulimanalothman.com` from any registrar (Namecheap, Cloudflare, GoDaddy, ...).
2. **Create a GitHub repo**, e.g. `slomsubaie/sulimanalothman.com` (it must be public on a free plan), then:
   ```sh
   cd ~/personalcv
   git init -b main
   git add .
   git commit -m "Initial site"
   git remote add origin https://github.com/slomsubaie/sulimanalothman.com.git
   git push -u origin main
   ```
3. **Turn on Pages:** go to Repo → Settings → Pages → Source and choose **GitHub Actions**.
4. **Set up the custom domain:** in the same Pages screen, enter `sulimanalothman.com` and save.
5. **DNS** at your registrar:
   - `A` records for `@` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `CNAME` for `www` → `slomsubaie.github.io`
6. Once DNS resolves (minutes to a few hours), tick **Enforce HTTPS** in Settings → Pages.
7. Check the link preview at https://www.linkedin.com/post-inspector/

`linkedincv.pdf` (the original export) is git-ignored; the published copy is in `assets/`.

## Analytics (private)

Visits are counted with [GoatCounter](https://www.goatcounter.com): no cookies, no personal data. The dashboard is only visible to you: https://sulimanalothman.goatcounter.com

- **Exclude your own visits:** open `https://sulimanalothman.com/#toggle-goatcounter` once on each of your devices and browsers.
- **Where visitors stop:** each section sends an event the first time a visitor scrolls to it: `section-impact`, `section-about`, `section-experience`, `section-case-studies`, `section-research`, `section-skills`, `section-contact`. Divide an event's count by total visits. For example, 100 visits and `section-research` 30 means 70% leave before the Research section.
- **Key clicks:** `cv-download-hero`, `cv-download-contact`, `linkedin-hero`, `linkedin-contact`, `github`, `email-contact`, `demo-open`, `demo-switch-en`, `demo-switch-ar`, `demo-youtube`, `paper-request`, `paper-gmail`, `paper-outlook`, `paper-copy`, `case-open-1` to `case-open-5`, `filter-build`, `filter-assure`, `filter-lead`.
- Each event is counted at most once per visit. To track another link or button, give it a `data-goal="name"` attribute.
- **Also worth a look:** Referrers (did LinkedIn send people?), Locations, and Sizes (phone vs desktop).

## License

Copyright © 2026 Suliman Alothman. All rights reserved. No permission is granted to copy, modify or redistribute this code or content. See `LICENSE`.
