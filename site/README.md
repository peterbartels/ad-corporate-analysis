# AD Component Inventory — static site

VitePress site presenting the component inventory and per-page composition analysis
of the Avery Dennison corporate website (AEM 6.5 → headless CMS + React/Next.js).

The markdown and screenshots under `docs/` are **generated** from `../output`
(component docs, per-page `composition.md`, full-page screenshots) — commit them;
the Cloudflare build only runs VitePress and does not need `../output`.

## Local development

```sh
npm install
npm run sync    # regenerate docs/ from ../output (needs python3 + Pillow for screenshots)
npm run dev     # live preview at http://localhost:5173
npm run build   # static build into docs/.vitepress/dist
```

Run `npm run sync` again whenever anything in `../output` changes, then commit the result.

## Deploying on Cloudflare (git integration — recommended)

Push this `site/` directory to GitHub (as the repo root, or set the *Root directory*
accordingly), then in the Cloudflare dashboard: **Workers & Pages → Create → Pages →
Connect to Git** and select the repo with:

| Setting          | Value                  |
| ---------------- | ---------------------- |
| Framework preset | VitePress              |
| Build command    | `npm run build`        |
| Build output     | `docs/.vitepress/dist` |
| Root directory   | `/` (or `site/` if the repo contains the parent project) |

Every push then builds and deploys automatically. All content is static —
no functions, bindings, or environment variables required.

## Deploying as a Worker (alternative)

`wrangler.jsonc` is included for Workers static assets:

```sh
npm run build
npx wrangler deploy
```

## Layout

```
docs/
  index.md              # landing page
  components/           # one doc per component + overview table (generated)
  pages/                # one doc per captured page + index (generated)
  public/screens/       # resized screenshots, WebP (PNG for >16k px tall pages) (generated)
  .vitepress/
    config.mjs          # VitePress config (local search, cleanUrls)
    sidebar.json        # generated sidebar tree
scripts/
  images.py             # screenshot conversion (Pillow)
  sync.mjs              # markdown generation + cross-linking + sidebar
```
