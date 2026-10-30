# jackiedaytona.com

Static site built with [Astro](https://astro.build). No jQuery and no client framework; the
few interactive bits (menu, lightbox, video, newsletter) are small inline scripts.

## Run it

Needs Node 22.23.4 or newer (pinned in `.nvmrc` and `package.json` → `volta`).

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs static files to dist/
```

`dist/` can be deployed to any static host (Vercel, Netlify, Cloudflare Pages, S3).

## Editing content

Almost everything lives in `src/data/site.ts`: streaming and social links, the tracklist,
credits, booking email, Mailchimp list and analytics IDs.

- Artwork goes in `src/assets/`. Astro resizes it and serves WebP at build time, so you can
  drop in full-size originals.
- `src/pages/index.astro` is the homepage; `src/pages/landing.astro` is the newsletter-only page.
