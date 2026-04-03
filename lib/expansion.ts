/**
 * Auto expansion / gap detection over static ontology data.
 * Designed for pure functions + JSON export so you can later merge in
 * search-console queries, analytics, or CMS flags without changing call sites.
 */
import { relatedByCanonical } from "@/data/clusters";
import { canonicalLabels, regionalNames } from "@/data/regionalNames";
import { regions } from "@/data/regions";
import {
  allCompareSlugs,
  allWhatIsCutSlugs,
  compareSlugForCanonicalPair,
  listCanonicalIds,
} from "@/lib/content";
import { listCanonicalCuts } from "@/lib/canonical";
import { expandMapsTo } from "@/lib/mappings";
import { regionLabel } from "@/lib/regions";
import type { CanonicalId, RegionSlug } from "@/lib/types";
import { normalizeForLookup, slugifyCut } from "@/utils/normalize";

const ALL_REGIONS: readonly RegionSlug[] = regions.map((r) => r.id);

/** Culturally high-signal or high-ambiguity cuts for prioritization. */
const HIGH_PRIORITY_CANONICAL: ReadonlySet<CanonicalId> = new Set([
  "sirloin_cap",
  "striploin",
  "flank",
  "skirt",
  "sirloin_flap",
  "ribeye",
]);

function regionsWithMappingForCanonical(id: CanonicalId): Set<RegionSlug> {
  const s = new Set<RegionSlug>();
  for (const m of regionalNames) {
    if (expandMapsTo(m.maps_to).includes(id)) s.add(m.region);
  }
  return s;
}

export type MissingTranslationEntry = {
  canonical: CanonicalId;
  missingRegions: RegionSlug[];
  /** Regions that already have a mapping (for UI). */
  coveredRegions: RegionSlug[];
};

export type MissingDefinitionEntry = {
  canonical: CanonicalId;
  region: RegionSlug;
  /** Label from canonicalLabels not represented as a regionalNames row. */
  label: string;
  suggestedSlug: string;
  reason: string;
};

export type ComparisonCheckEntry = {
  canonicalA: CanonicalId;
  canonicalB: CanonicalId;
  slug: string;
  path: string;
  exists: boolean;
};

export type WeakCoverageEntry = {
  canonical: CanonicalId;
  regionCount: number;
  missingCount: number;
  missingRegions: RegionSlug[];
  /** 1–10 */
  priority: number;
  reason: string;
};

export type ExpansionOpportunity = {
  type: "translation" | "definition" | "comparison";
  priority: number;
  reason: string;
  canonicalId?: CanonicalId;
  region?: RegionSlug;
  compareWith?: CanonicalId;
  slug?: string;
};

export type MissingWhatIsPageEntry = {
  slug: string;
  path: string;
  /** Where this surface form surfaced (canonical alias, label row, etc.). */
  source: string;
};

export type ExpansionReport = {
  generatedAt: string;
  dataset: {
    canonicalCount: number;
    regionCount: number;
    regionalNameRows: number;
    comparePageSlugs: number;
    whatIsSlugs: number;
  };
  missingTranslations: MissingTranslationEntry[];
  missingDefinitions: MissingDefinitionEntry[];
  /** Alias / label slugs not present in `allWhatIsCutSlugs()` (no generated what-is route). */
  missingWhatIsPages: MissingWhatIsPageEntry[];
  /** Recommended pairs (usually all exist when ontology is complete). */
  recommendedComparisons: ComparisonCheckEntry[];
  missingComparisons: ComparisonCheckEntry[];
  weakCoverage: WeakCoverageEntry[];
  /** Flat, sorted list for automation / planning hooks. */
  opportunities: ExpansionOpportunity[];
};

function scoreTranslationGap(
  canonicalId: CanonicalId,
  region: RegionSlug,
): { priority: number; reason: string } {
  const ambiguousInDataset = regionalNames.some(
    (m) =>
      expandMapsTo(m.maps_to).includes(canonicalId) &&
      (m.type === "ambiguous" || expandMapsTo(m.maps_to).length > 1),
  );

  let priority = 5;
  let reason = "Common cut—add regional retail name to improve translation coverage.";

  if (HIGH_PRIORITY_CANONICAL.has(canonicalId)) {
    priority = 8;
    reason =
      "High ambiguity or culturally important cut (picanha/strip/flank overlap)—prioritize mapping.";
  } else {
    priority = 4;
    reason = "Niche cut—lower confusion risk; schedule after high-priority gaps.";
  }

  if (ambiguousInDataset) {
    priority = Math.min(10, priority + 1);
    reason = `${reason} (Ontology flags ambiguous regional usage for this cut.)`;
  }
  if (region === "mexico" || region === "spain") {
    priority = Math.min(10, priority + 1);
    reason = `${reason} (${regionLabel(region)} is a priority locale).`;
  }

  return { priority, reason };
}

function scoreDefinitionGap(canonicalId: CanonicalId): { priority: number; reason: string } {
  const p = HIGH_PRIORITY_CANONICAL.has(canonicalId) ? 7 : 5;
  return {
    priority: p,
    reason:
      "Canonical label exists in ontology but no matching regionalNames row—add for consistent what-is slugs.",
  };
}

function scoreWeakCoverage(entry: MissingTranslationEntry): number {
  const missingRatio = entry.missingRegions.length / ALL_REGIONS.length;
  let p = Math.round(4 + missingRatio * 6);
  if (HIGH_PRIORITY_CANONICAL.has(entry.canonical)) p += 1;
  return Math.min(10, Math.max(1, p));
}

function buildMissingTranslations(): MissingTranslationEntry[] {
  const out: MissingTranslationEntry[] = [];
  for (const id of listCanonicalIds()) {
    const have = regionsWithMappingForCanonical(id);
    const missing = ALL_REGIONS.filter((r) => !have.has(r));
    if (missing.length > 0) {
      out.push({
        canonical: id,
        missingRegions: missing,
        coveredRegions: ALL_REGIONS.filter((r) => have.has(r)),
      });
    }
  }
  return out.sort((a, b) => b.missingRegions.length - a.missingRegions.length);
}

function buildMissingWhatIsPages(): MissingWhatIsPageEntry[] {
  const have = new Set(allWhatIsCutSlugs());
  const out: MissingWhatIsPageEntry[] = [];
  const seen = new Set<string>();

  for (const c of listCanonicalCuts()) {
    for (const a of c.aliases ?? []) {
      const slug = slugifyCut(a);
      if (!have.has(slug) && !seen.has(slug)) {
        seen.add(slug);
        out.push({
          slug,
          path: `/what-is/${slug}`,
          source: `canonical alias (${c.id})`,
        });
      }
    }
  }

  return out.sort((a, b) => a.slug.localeCompare(b.slug));
}

function buildMissingDefinitions(): MissingDefinitionEntry[] {
  const out: MissingDefinitionEntry[] = [];
  for (const id of listCanonicalIds()) {
    const labelsByRegion = canonicalLabels[id];
    if (!labelsByRegion) continue;
    for (const region of ALL_REGIONS) {
      const labs = labelsByRegion[region];
      if (!labs) continue;
      for (const lab of labs) {
        const key = normalizeForLookup(lab);
        const has = regionalNames.some(
          (m) => m.region === region && normalizeForLookup(m.name) === key,
        );
        if (!has) {
          out.push({
            canonical: id,
            region,
            label: lab,
            suggestedSlug: slugifyCut(lab),
            reason: "canonicalLabels entry without regionalNames row",
          });
        }
      }
    }
  }
  return out;
}

function buildComparisonChecks(): {
  recommended: ComparisonCheckEntry[];
  missing: ComparisonCheckEntry[];
} {
  const compareSet = new Set(allCompareSlugs());
  const recommended: ComparisonCheckEntry[] = [];
  const seenSlugs = new Set<string>();

  for (const id of listCanonicalIds()) {
    const related = relatedByCanonical[id] ?? [];
    const targets = [...related].slice(0, 3);
    for (const other of targets) {
      const slug = compareSlugForCanonicalPair(id, other);
      if (seenSlugs.has(slug)) continue;
      seenSlugs.add(slug);
      const path = `/compare/${slug}`;
      const exists = compareSet.has(slug);
      recommended.push({
        canonicalA: id < other ? id : other,
        canonicalB: id < other ? other : id,
        slug,
        path,
        exists,
      });
    }
  }

  const missing = recommended.filter((r) => !r.exists);
  return { recommended, missing };
}

function buildWeakCoverage(
  missingTranslations: MissingTranslationEntry[],
): WeakCoverageEntry[] {
  return missingTranslations.map((m) => {
    const priority = scoreWeakCoverage(m);
    return {
      canonical: m.canonical,
      regionCount: m.coveredRegions.length,
      missingCount: m.missingRegions.length,
      missingRegions: m.missingRegions,
      priority,
      reason: `${m.missingRegions.length} region(s) lack a mapped retail name for this canonical cut.`,
    };
  });
}

function buildOpportunities(
  missingTranslations: MissingTranslationEntry[],
  missingDefinitions: MissingDefinitionEntry[],
  missingWhatIsPages: MissingWhatIsPageEntry[],
  missingComparisons: ComparisonCheckEntry[],
): ExpansionOpportunity[] {
  const opps: ExpansionOpportunity[] = [];

  for (const mt of missingTranslations) {
    for (const region of mt.missingRegions) {
      const { priority, reason } = scoreTranslationGap(mt.canonical, region);
      opps.push({
        type: "translation",
        priority,
        reason,
        canonicalId: mt.canonical,
        region,
      });
    }
  }

  for (const d of missingDefinitions) {
    const { priority, reason } = scoreDefinitionGap(d.canonical);
    opps.push({
      type: "definition",
      priority,
      reason,
      canonicalId: d.canonical,
      region: d.region,
      slug: d.suggestedSlug,
    });
  }

  for (const w of missingWhatIsPages) {
    opps.push({
      type: "definition",
      priority: 6,
      reason: `What-is slug missing from generated index—add regionalNames row or extend static params: ${w.source}`,
      slug: w.slug,
    });
  }

  for (const c of missingComparisons) {
    opps.push({
      type: "comparison",
      priority: 9,
      reason: "Compare page missing from generated slug set—regenerate or fix ontology.",
      canonicalId: c.canonicalA,
      compareWith: c.canonicalB,
      slug: c.slug,
    });
  }

  opps.sort((a, b) => b.priority - a.priority);
  return opps;
}

function mergeDuplicateOpportunities(opps: ExpansionOpportunity[]): ExpansionOpportunity[] {
  const byKey = new Map<string, ExpansionOpportunity>();
  for (const o of opps) {
    const key = `${o.type}:${o.canonicalId ?? ""}:${o.region ?? ""}:${o.slug ?? ""}:${o.compareWith ?? ""}`;
    const prev = byKey.get(key);
    if (!prev || o.priority > prev.priority) byKey.set(key, o);
  }
  return [...byKey.values()].sort((a, b) => b.priority - a.priority);
}

/**
 * Scans canonical cuts, regional names, and compare slugs to surface data gaps
 * for editorial expansion (no network I/O; safe at build time).
 */
export function getExpansionOpportunities(): ExpansionReport {
  const missingTranslations = buildMissingTranslations();
  const missingDefinitions = buildMissingDefinitions();
  const defSlugs = new Set(missingDefinitions.map((d) => d.suggestedSlug));
  const missingWhatIsPages = buildMissingWhatIsPages().filter((w) => !defSlugs.has(w.slug));
  const { recommended: recommendedComparisons, missing: missingComparisons } =
    buildComparisonChecks();
  const weakCoverage = buildWeakCoverage(missingTranslations);
  const opportunities = mergeDuplicateOpportunities(
    buildOpportunities(
      missingTranslations,
      missingDefinitions,
      missingWhatIsPages,
      missingComparisons,
    ),
  );

  const whatIsSlugs = new Set<string>();
  for (const m of regionalNames) whatIsSlugs.add(slugifyCut(m.name));

  return {
    generatedAt: new Date().toISOString(),
    dataset: {
      canonicalCount: listCanonicalIds().length,
      regionCount: ALL_REGIONS.length,
      regionalNameRows: regionalNames.length,
      comparePageSlugs: allCompareSlugs().length,
      whatIsSlugs: whatIsSlugs.size,
    },
    missingTranslations,
    missingDefinitions,
    missingWhatIsPages,
    recommendedComparisons,
    missingComparisons,
    weakCoverage,
    opportunities,
  };
}

/** JSON string for scripts, CI, or future automation. */
export function exportExpansionReport(): string {
  return JSON.stringify(getExpansionOpportunities(), null, 2);
}
