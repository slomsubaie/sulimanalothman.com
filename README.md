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
