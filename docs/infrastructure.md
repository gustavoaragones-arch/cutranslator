# Infrastructure Notes — Cutranslator

## Stack
Next.js → Vercel

## Deployment

Platform: Vercel (migrated from Cloudflare Workers, June 12 2026)

Deploy sequence:
- Push to main branch on GitHub
- Vercel auto-builds and deploys on every push
- No manual build steps required
- Build command: `next build` (auto-detected)

Environment variables (set in Vercel dashboard):
- `NEXT_PUBLIC_SITE_URL=https://cutranslator.com`

Domains:
- `cutranslator.com` → Production (Vercel)
- `www.cutranslator.com` → 308 redirect to cutranslator.com
- `beefcutsconverter.com` → 308 redirect to cutranslator.com
- `cutranslator.vercel.app` → Production (Vercel)

DNS: Managed by Cloudflare (free plan, DNS only, no proxying). Cloudflare is not used for compute.

## What Was Removed

The following Cloudflare-specific artifacts were removed or archived during migration:

- `open-next.config.ts` → archived to `docs/cloudflare-archive/`
- `wrangler.toml` → archived to `docs/cloudflare-archive/`
- `@opennextjs/cloudflare` dependency removed
- `wrangler` dependency removed
- `pages:build`, `preview:cf`, `deploy:cf`, `cf-typegen` scripts removed from package.json
- Cloudflare Worker (cutranslator) deleted
- Workers Paid plan cancelled

## Why We Migrated

- **$160/month CPU charges with minimal traffic** — OpenNext Worker executed SSR on every request including crawlers and health checks
- **Two-build problem caused repeated production failures** — `next build` and `opennextjs-cloudflare build` had to both run before deploying; skipping either caused stale production. The `.open-next` directory was dated May 19 while code shipped through June 11 — offal pages 404'd in production for weeks undetected.
- **macOS 12.6 incompatibility with `wrangler deploy`** — local deployment impossible without patching `node_modules` after every `npm install`
- **OpenNext bundle staleness caused features to be missing in production for weeks undetected**
- **Fail-open behavior hid errors silently** — if a Worker function failed, Cloudflare served the static fallback, making the site appear working while broken

## Vercel Advantages for This Project

- Next.js is Vercel's native framework — zero configuration required
- Static pages served from CDN with zero compute cost — no CPU billing for pre-rendered pages
- Single build step — push to GitHub, done
- Deployment failures are visible, not silent
- No OpenNext layer, no wrangler, no two-build problem

## Historical Context (Cloudflare Era)

The original Cloudflare deployment exhibited several failure modes documented here for reference.

**The Two-Build Problem:** Two separate build artifacts had to both be current before deploying — `.next/` (Next.js build) and `.open-next/` (OpenNext/Cloudflare build). Skipping the second step deployed a stale Worker regardless of what was in `.next/`. There was no warning — the deploy succeeded silently while running old code.

**Fail-open behavior:** If a Worker function failed, Cloudflare served the static fallback (index.html). Errors were hidden. The system appeared working but was broken. This made debugging extremely difficult — routes worked on localhost, 404'd on production, and cache purges appeared to do nothing.

**Turbopack font cache:** `@vercel/turbopack-next/internal/font/google/font` errors appeared in environments where the font cache was empty. Workaround was `next build --webpack`. Not relevant on Vercel.

The archived Cloudflare config files are in `docs/cloudflare-archive/` for reference.

---
Last updated: June 12, 2026
