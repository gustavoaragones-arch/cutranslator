# Infrastructure Notes — Cutranslator

## Stack
Next.js → OpenNext → Cloudflare Workers (via wrangler)

## The Two-Build Problem

There are two separate build artifacts that must both be 
current before deploying:

- `.next/` — built by `next build` or `next build --webpack`. 
  Used by local dev and type checking. Claude Code runs this 
  to validate correctness.
- `.open-next/` — built by `npx opennextjs-cloudflare build`. 
  This is what Cloudflare Workers actually runs. If this is 
  stale, the live site runs old code regardless of what is 
  in `.next`.

**The correct deploy sequence — all three steps, every time:**
```bash
next build --webpack
npx opennextjs-cloudflare build
npx wrangler deploy
```

Skipping the middle step means Cloudflare runs whatever 
`.open-next` was last built, which could be weeks old.

## Symptoms of a Stale .open-next

- Routes work on localhost, 404 on production
- Data changes don't appear on live site
- Cache purge and redeploy appear to do nothing

This is what caused all offal cut and tradition pages to 
404 in production through June 2026 despite clean builds 
and cache purges. The `.open-next` directory was dated 
May 19 while code had been shipping through June 11.

## Cloudflare Pain Points on This Project

**Aggressive edge caching** — cached responses persist 
after fixes. Requires manual purge in dashboard or via 
wrangler. Never debug with cached HTML.

**Fail-open behavior** — if a Worker function fails, 
Cloudflare serves the static fallback (index.html). 
Errors are hidden. The system appears working but is 
broken. Disable fail-open during development.

**OpenNext build layer** — the extra build step 
(`opennextjs-cloudflare build`) is easy to omit in 
manual deploys. It is not part of the standard Next.js 
workflow and easy to forget.

**Turbopack font cache** — `@vercel/turbopack-next/internal/
font/google/font` errors appear in sandbox/CI environments 
where the font cache is empty. Use `next build --webpack` 
as fallback. This is an infrastructure artifact, not a 
code problem.

**Static file limit on free plan** — ~20,000 files per 
deployment. Programmatic SEO sites approach this quickly. 
Resolved by moving to paid plan.

**Multi-domain canonical risk** — `.pages.dev` subdomain 
always exists alongside the custom domain. Risk of 
duplicate content indexing if canonical tags are not 
enforced on every page.

## Retrospective

Cloudflare's architecture creates invisible failure modes 
that cost significant debugging time on this project. 
The OpenNext layer adds operational complexity that 
standard Next.js deployments don't have.

For a Next.js project of this complexity, Vercel would 
have been the simpler choice — direct framework integration, 
no OpenNext layer, no wrangler config, no two-build problem, 
deployment failures are visible rather than silent.

If starting over: Vercel for deployment. Cloudflare for 
DNS only if needed.

## Package.json Deploy Script

Add this to package.json scripts to enforce correct 
deploy sequence:

```json
"deploy": "next build --webpack && npx opennextjs-cloudflare build && npx wrangler deploy"
```

This makes it impossible to accidentally deploy a 
stale `.open-next`.

## macOS 12.6 Deploy Workaround

`wrangler deploy` on macOS 12.6 fails because `workerd` 
requires macOS 13.5+ C++ runtime symbols. Two patches 
are required in node_modules (not committed — reapply 
after `npm install`):

**1. `node_modules/miniflare/dist/src/index.js` line ~51223:**
Add `return;` as the first line of `checkMacOSVersion()` 
to skip the OS version check.

**2. `node_modules/@opennextjs/cloudflare/dist/cli/commands/utils/helpers.js`:**
Wrap the `getPlatformProxy(...)` call in a macOS version 
guard so it is skipped on macOS < 13 (darwin kernel < 22). 
The `[vars]` block in `wrangler.toml` already provides 
all required env vars for this project.

After applying both patches, `npx wrangler deploy` 
works normally. The post-deploy 
`Failed to fetch auth token: 400 Bad Request` error 
is a telemetry/log-streaming step and does not affect 
the deploy — the worker is live when you see 
`Deployed cutranslator triggers`.

---
Last updated: June 11, 2026
