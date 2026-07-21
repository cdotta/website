# cristiandotta.com

Personal site / CV for Cristian Dotta — a single-page portfolio built from the
"Website with resume styling" Claude Design project.

Built with [Astro](https://astro.build) + Tailwind CSS 4, self-hosted fonts
(Geist, Geist Mono, Cormorant Garamond via Fontsource), and deployed to
[Fly.io](https://fly.io).

Requires Node 22+ (`.nvmrc` pins 24 — run `nvm use`).

## Develop

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # production build into dist/
npm run preview   # serve the production build locally
```

## Editing content

Everything personal lives in **`src/config.ts`** — name, role, contact links,
metrics, skills, experience, and education. Edit there; the page in
`src/pages/index.astro` maps over it.

- Layout / `<head>` / OG + Twitter meta: `src/layouts/Layout.astro`
- Colors, fonts, component classes, reveal-on-scroll: `src/styles/cv.css`
- Favicon: `public/favicon.svg` · Social share image: `public/og.png`

## The downloadable résumé (PDF)

The "download résumé" buttons link to `public/Cristian-Dotta-Resume.pdf` — a
real, print-optimized 2-page PDF (not a print dialog).

To update it: edit `resume/resume-print.html`, then regenerate:

```sh
./resume/generate.sh    # renders the HTML to public/Cristian-Dotta-Resume.pdf
```

The script uses a headless Chromium browser (Chrome / Brave / Edge / Chromium)
via `--print-to-pdf`.

## Before going live

1. Set your real domain in `astro.config.mjs` (`site`) and `src/config.ts` (`url`).
2. Confirm the LinkedIn URL in `src/config.ts` (currently a best-guess placeholder).

## Deploy to Fly

First time (needs [flyctl](https://fly.io/docs/flyctl/install/)):

```sh
fly launch --no-deploy   # pick a unique app name; keep the existing fly.toml + Dockerfile
fly deploy
```

After that, `fly deploy` is all you need. For a custom domain:

```sh
fly certs add cristiandotta.com
```
