import { relatedByCanonical } from "@/data/clusters";
import { getCanonicalById } from "@/lib/canonical";
import {
  canonicalHitsFromMappings,
  expandMapsTo,
  findRegionalMappings,
  labelsForCanonical,
  mappingsHaveRegionalConflict,
} from "@/lib/mappings";
import { regionLabel } from "@/lib/regions";
import type {
  AmbiguityInfo,
  AmbiguityType,
  CanonicalCut,
  CanonicalId,
  RegionalNameEntry,
  RegionSlug,
  RelatedItem,
  ResolveExplanation,
  ResolveResult,
  ResolvedTarget,
} from "@/lib/types";
import { normalizeForLookup } from "@/utils/normalize";

const RELATED_LIMIT = 5;
const LOW_CONF_THRESHOLD = 0.75;

function sortTargets(
  hits: Map<CanonicalId, { confidence: number; note?: string }>,
  targetRegion: RegionSlug,
): ResolvedTarget[] {
  const rows: ResolvedTarget[] = [];
  for (const [canonicalId, meta] of hits) {
    rows.push({
      canonicalId,
      names: labelsForCanonical(canonicalId, targetRegion),
      confidence: meta.confidence,
      note: meta.note,
    });
  }
  rows.sort((a, b) => b.confidence - a.confidence);
  return rows;
}

function buildAmbiguity(args: {
  matches: RegionalNameEntry[];
  primary: ResolvedTarget | null;
}): AmbiguityInfo {
  const { matches, primary } = args;
  const anyMulti = matches.some((m) => expandMapsTo(m.maps_to).length > 1);
  const regionConflict = mappingsHaveRegionalConflict(matches);
  const lowPrimary = primary != null && primary.confidence < LOW_CONF_THRESHOLD;

  let type: AmbiguityType | null = null;
  const parts: string[] = [];

  if (anyMulti) {
    type = "multi_cut";
    parts.push(
      "This name spans more than one canonical cut in our ontology—compare the alternatives below.",
    );
  }
  if (regionConflict) {
    type = type ?? "region_conflict";
    parts.push(
      "Multiple regional definitions apply to this lookup key; results may depend on butcher or dataset row.",
    );
  }
  if (lowPrimary) {
    parts.push(
      `Match confidence is below ${Math.round(LOW_CONF_THRESHOLD * 100)}%—treat as indicative, not definitive.`,
    );
  }

  const exists = anyMulti || regionConflict || lowPrimary;
  const multiBanner =
    "⚠️ This cut may refer to multiple different cuts depending on region.";
  const lowBanner =
    "⚠️ Mapping confidence is limited—verify the exact subprimal with your butcher.";

  let message = "";
  if (exists) {
    if (anyMulti || regionConflict) {
      message = [multiBanner, ...parts].join(" ");
    } else if (lowPrimary) {
      message = [lowBanner, ...parts].join(" ");
    } else {
      message = parts.join(" ");
    }
  }

  return {
    exists,
    type,
    message,
  };
}

function buildExplanation(args: {
  inputDisplay: string;
  inputRegion: RegionSlug;
  targetRegion: RegionSlug;
  primary: ResolvedTarget | null;
  canonical: CanonicalCut | null;
  altCount: number;
}): ResolveExplanation {
  const from = regionLabel(args.inputRegion);
  const to = regionLabel(args.targetRegion);
  if (!args.primary || !args.canonical) {
    const msg = `We could not map “${args.inputDisplay}” from ${from} to ${to} in the current dataset. Try another spelling or a nearby retail name.`;
    return { short: msg, detailed: msg };
  }
  const p = args.primary;
  const c = args.canonical;
  const short = `“${args.inputDisplay}” from ${from} most often aligns with ${p.names[0]} in ${to} in our seeded data.`;
  const alt =
    args.altCount > 0
      ? ` ${args.altCount} other canonical interpretation${args.altCount === 1 ? "" : "s"} may apply.`
      : "";
  const detailed = `“${args.inputDisplay}” in ${from} maps to canonical ${p.canonicalId.replace(/_/g, " ")} (${c.primal}: ${c.location}). In ${to}, look for labels such as ${p.names.join(" · ")}.${alt} ${c.description}`.trim();
  return { short: `${short}${alt}`.trim(), detailed };
}

function buildRelated(
  primaryId: CanonicalId | null,
  targetRegion: RegionSlug,
): RelatedItem[] {
  if (!primaryId) return [];
  const ids = relatedByCanonical[primaryId] ?? [];
  return ids.slice(0, RELATED_LIMIT).map((canonicalId) => ({
    canonicalId,
    names: labelsForCanonical(canonicalId, targetRegion),
  }));
}

/**
 * Resolve a regional cut name to the target region via the canonical layer.
 */
export function resolveCut(
  inputName: string,
  inputRegion: RegionSlug,
  targetRegion: RegionSlug,
): ResolveResult {
  const inputNormalized = normalizeForLookup(inputName);
  const matches = findRegionalMappings(inputRegion, inputNormalized);
  const hits = canonicalHitsFromMappings(matches);
  const sorted = sortTargets(hits, targetRegion);
  const primary = sorted[0] ?? null;
  const alternatives = sorted.slice(1);
  const canonical = primary ? getCanonicalById(primary.canonicalId) ?? null : null;

  const ambiguity = buildAmbiguity({ matches, primary });
  const explanation = buildExplanation({
    inputDisplay: inputName.trim() || inputNormalized,
    inputRegion,
    targetRegion,
    primary,
    canonical,
    altCount: alternatives.length,
  });

  return {
    inputNormalized,
    canonical,
    primary,
    alternatives,
    ambiguity,
    explanation,
    related: buildRelated(primary?.canonicalId ?? null, targetRegion),
  };
}
