# Personal site + résumé

A single-page portfolio and a matching print-ready résumé PDF, both generated
from one file you fill in. Built with [Astro](https://astro.build) and Tailwind
CSS 4, self-hosted fonts (Geist, Geist Mono, Cormorant Garamond via Fontsource),
deployed to [Fly.io](https://fly.io).

Requires Node 22+ (`.nvmrc` pins 24 — run `nvm use`).

## Make it yours

```sh
cp -r content.example content   # your details; gitignored, never committed
npm install
npm run dev                     # http://localhost:4321
```

Edit **`content/site.ts`** — name, role, contact links, skills, experience,
projects, education, plus the résumé and llms.txt copy. It is the only file with
personal data in it. Replace the three placeholder images beside it:

| File | Used for |
|---|---|
| `content/portrait.jpg` | homepage hero (copied to `public/portrait.jpg`) |
| `content/headshot.jpg` | résumé header (copied to `resume/headshot.jpg`) |
| `content/og.png` | social share card (copied to `public/og.png`) |

Everything else is generated from `content/site.ts` by
`scripts/build-content.mjs`, which runs automatically before `dev` and `build`:

- `public/llms.txt` — the summary crawling agents read
- `resume/resume-print.html` — print source for the PDF

Don't edit those two by hand; they get overwritten. Layout and styling live in
`src/layouts/Layout.astro`, `src/styles/cv.css`, and `resume/resume.css`.

`/retro` is a hidden, `noindex` experiment — the same content as a
keyboard-driven old-game menu (`src/pages/retro.astro`). Not linked from
anywhere.

## The downloadable résumé (PDF)

The "download résumé" buttons link to a real, print-optimized 2-page PDF, not a
print dialog. After changing `content/site.ts`:

```sh
npm run resume    # regenerates resume-print.html, then the PDF
```

It renders with a headless Chromium browser (Chrome / Brave / Edge / Chromium)
via `--print-to-pdf`, and writes to the path set in `site.resumePdf`.

**Check the page count after any wording change.** The layout is tuned to land
on exactly two pages; a longer bullet can spill it to three.

## Deploy to Fly

Deploys run from your machine, so the gitignored `content/` is in the build
context. There is no CI workflow — that is deliberate: CI builds from the git
checkout, which by design does not have your content in it.

```sh
cp fly.example.toml fly.toml   # then set a unique app name
fly launch --no-deploy         # keep the existing fly.toml + Dockerfile
npm run deploy
```

After that, `npm run deploy` is all you need. For a custom domain:

```sh
fly certs add your-domain.com
```

Set that same domain as `site.url` in `content/site.ts` — `astro.config.mjs`
reads it from there for sitemap, canonical, and OG URLs.
