# Prompt — Fix Cloudflare Worker Resource Limits (Error 1102)

## Problem

The site returns **Error 1102: Worker exceeded resource limits** on Cloudflare. The Worker bundle has grown too large after expanding to 41 regions with 21,000+ static pages.

## TASK 1 — Diagnose the bundle size

```bash
# 1. Check the total .open-next output size
npm run build 2>&1 | tail -5
du -sh .open-next/ 2>/dev/null || echo "Run build first"

# 2. Check the Worker script size specifically
find .open-next -name "*.js" -path "*/worker/*" | head -10
find .open-next -name "*.js" -path "*/worker/*" -exec du -sh {} \; | sort -rh | head -10

# 3. Check the SVG content file size (likely the biggest culprit)
wc -c data/svgContent.ts 2>/dev/null || echo "File not found"
ls -lh data/svgContent.ts 2>/dev/null

# 4. Check total data file sizes
for f in data/*.ts; do echo "$(wc -c < "$f") $f"; done | sort -rn

# 5. Check the generated page count
npm run build 2>&1 | grep "static pages"

# 6. Check static asset sizes
du -sh .open-next/assets/ 2>/dev/null
du -sh .open-next/server-functions/ 2>/dev/null
du -sh .open-next/cache/ 2>/dev/null

# 7. Check Cloudflare Workers plan limits
echo "Free plan: 1MB script, 128MB memory, 10ms CPU"
echo "Paid plan ($5/mo): 10MB script, 128MB memory, 30s CPU"
```

## TASK 2 — Identify the fix

There are several possible solutions depending on what's too large:

### Fix A: If svgContent.ts is too large (most likely)

The auto-generated SVG data file contains all 26 canonical cut SVGs + cow silhouette as string constants baked into the JS bundle. This may be several MB.

**Solution**: Move SVG content to static assets served via Cloudflare's CDN instead of baking them into the Worker script.

1. Keep the SVGs as static files in `public/svg/` (they already are)
2. On the client side, fetch SVGs via HTTP instead of server-side rendering them
3. Convert `CowDiagramNew` from a server component to a client component that fetches SVGs

```tsx
// components/CowDiagramNewClient.tsx
"use client";
import { useEffect, useState } from "react";

export function CowDiagram({ canonicalId, matchType }) {
  const [cowSvg, setCowSvg] = useState("");
  const [cutSvg, setCutSvg] = useState("");
  
  useEffect(() => {
    fetch("/svg/cow.svg").then(r => r.text()).then(setCowSvg);
    if (canonicalId) {
      fetch(`/svg/canonical/${canonicalId}.svg`).then(r => r.text()).then(setCutSvg);
    }
  }, [canonicalId]);
  
  // Render SVGs...
}
```

This removes the SVG strings from the Worker bundle entirely.

### Fix B: If the total page data is too large

With 41 regions × 36 cuts × many routes, the pre-rendered page data may exceed limits.

**Solution**: Use ISR (Incremental Static Regeneration) instead of pre-rendering everything. Only pre-render the top ~500 most important routes. Let the rest render on-demand.

```ts
// app/[pair]/[cut]/page.tsx
export function generateStaticParams() {
  // Only return the top routes, not ALL 21,000+
  return getTopRoutes(500); // High-traffic routes only
}

export const dynamicParams = true; // Allow on-demand rendering for the rest
export const revalidate = 86400; // Cache for 24 hours after first render
```

But this reintroduces the SVG loading problem (fs.readFileSync doesn't work on-demand). So Fix A must be applied first.

### Fix C: Upgrade to Cloudflare Workers Paid plan

The paid plan ($5/month) increases the script size limit from 1MB to 10MB and CPU time from 10ms to 30s. This may be enough without any code changes.

**Check your current plan:**
Go to Cloudflare Dashboard → Workers & Pages → Overview → see if you're on Free or Paid.

## TASK 3 — Implement the chosen fix

### Recommended approach: Fix A + Fix B combined

1. **Move SVGs to client-side fetching** (Fix A) — removes the largest chunk from the Worker bundle
2. **Reduce pre-rendered routes to top ~1000** (Fix B) — reduces the Worker's static data
3. **Keep ISR for the rest** — on-demand rendering with 24h cache

This is the most sustainable approach as the site continues to grow.

### Implementation:

#### Step 1: Delete the svgContent.ts prebuild approach

```bash
# Remove the prebuild script dependency
# package.json: remove "prebuild" script
# .gitignore: remove data/svgContent.ts entry
# Delete data/svgContent.ts
```

#### Step 2: Convert CowDiagramNew to client-side SVG loading

```tsx
// components/CowDiagramNew.tsx — change to client component
"use client";

import { useEffect, useState } from "react";
import type { CanonicalId, MatchType } from "@/lib/types";

type CutHighlight = {
  canonicalId: CanonicalId;
  matchType: MatchType;
};

type Props = {
  highlights: CutHighlight[];
  viewBox?: string;
  className?: string;
};

export function CowDiagramNew({ highlights, viewBox = "0 0 711.89 622.56", className }: Props) {
  const [cowInner, setCowInner] = useState<string>("");
  const [cutLayers, setCutLayers] = useState<{ id: CanonicalId; matchType: MatchType; svg: string }[]>([]);

  useEffect(() => {
    // Load cow silhouette
    fetch("/svg/cow.svg")
      .then(r => r.text())
      .then(raw => {
        const inner = raw.replace(/<svg[^>]*>/, "").replace(/<\/svg>\s*$/, "").trim();
        setCowInner(inner);
      })
      .catch(() => {});

    // Load highlighted cut SVGs
    highlights.forEach(h => {
      fetch(`/svg/canonical/${h.canonicalId}.svg`)
        .then(r => {
          if (!r.ok) return;
          return r.text();
        })
        .then(raw => {
          if (!raw) return;
          const inner = raw.replace(/<svg[^>]*>/, "").replace(/<\/svg>\s*$/, "").trim();
          setCutLayers(prev => [...prev.filter(l => l.id !== h.canonicalId), { id: h.canonicalId, matchType: h.matchType, svg: inner }]);
        })
        .catch(() => {});
    });
  }, [highlights]);

  return (
    <div className={className}>
      <svg viewBox={viewBox} xmlns="http://www.w3.org/2000/svg" className="w-full h-auto"
        role="img" aria-label={`Beef cow diagram`}>
        <g className="cow-silhouette" opacity="0.15"
          dangerouslySetInnerHTML={{ __html: cowInner }} />
        {cutLayers.map(layer => (
          <g key={layer.id} className={`cut-highlight cut-highlight-${layer.matchType}`}
            dangerouslySetInnerHTML={{ __html: layer.svg }} />
        ))}
      </svg>
    </div>
  );
}
```

#### Step 3: Reduce generateStaticParams to top routes

```ts
// lib/content.ts
export function allPairCutParams(): { pair: string; cut: string }[] {
  // ... existing code that generates ALL routes ...
  const all = [...]; // full list
  
  // Return only top ~1000 most important routes
  // Priority: popular cuts × popular country pairs
  const priorityCuts = ["picanha", "ribeye", "entrecote", "arrachera", "vacio", "sirloin", "tenderloin", "striploin", "flank", "brisket"];
  const priorityPairs = ["brazil-to-usa", "france-to-usa", "argentina-to-usa", "mexico-to-usa", "uk-to-usa", "usa-to-france", "usa-to-brazil"];
  
  // Sort: priority routes first, then the rest up to limit
  const sorted = all.sort((a, b) => {
    const aScore = (priorityCuts.some(c => a.cut.includes(c)) ? 10 : 0) + (priorityPairs.some(p => a.pair === p) ? 10 : 0);
    const bScore = (priorityCuts.some(c => b.cut.includes(c)) ? 10 : 0) + (priorityPairs.some(p => b.pair === p) ? 10 : 0);
    return bScore - aScore;
  });
  
  return sorted.slice(0, 1000);
}
```

#### Step 4: Verify the Worker size is within limits

```bash
npm run build
du -sh .open-next/
find .open-next -name "*.js" -path "*/worker/*" -exec du -sh {} \; | sort -rh | head -5
```

## TASK 4 — Test and deploy

```bash
npx tsc --noEmit
npm run build 2>&1 | tail -20
npm run build 2>&1 | grep "static pages"

# Verify bundle size is under limits
find .open-next -name "*.js" | xargs du -sh | sort -rh | head -10

git add -A
git commit -m "fix: reduce Worker bundle size — client-side SVG loading + capped static routes"
git push origin main
```

## RULES
- The site MUST deploy successfully on Cloudflare Workers
- SVGs must still display correctly (just loaded differently)
- All routes must still work (pre-rendered or on-demand via ISR)
- Do NOT delete any data files or entries
- Do NOT reduce the dataset — the 41 regions and 102 Tier 3 entities stay
