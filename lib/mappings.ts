import { canonicalLabels, regionalNames } from "@/data/regionalNames";
import { lookupIndex, regionSlugsInOrder } from "@/lib/indexes";
import type { CanonicalId, MatchType, RegionSlug, RegionalCut, RegionalName } from "@/lib/types";

export function findRegionalMappings(
  inputRegion: RegionSlug,
  normalizedLookupKey: string,
): RegionalName[] {
  const row = lookupIndex.get(`${inputRegion}-${normalizedLookupKey}`);
  return row ? [row] : [];
}

/** All dataset rows whose indexed lookup key matches (any region). */
export function findRegionalEntriesByNormalizedKey(
  normalizedLookupKey: string,
): RegionalName[] {
  const out: RegionalName[] = [];
  for (const slug of regionSlugsInOrder) {
    const row = lookupIndex.get(`${slug}-${normalizedLookupKey}`);
    if (row) out.push(row);
  }
  return out;
}

export function expandMapsTo(mapsTo: RegionalName["maps_to"]): CanonicalId[] {
  if (typeof mapsTo === "string") return [mapsTo];
  return [...mapsTo];
}

function canonicalSetSignature(ids: CanonicalId[]): string {
  return [...new Set(ids)].sort().join("|");
}

export function mappingsHaveRegionalConflict(matches: RegionalName[]): boolean {
  if (matches.length < 2) return false;
  const sigs = new Set<string>();
  for (const m of matches) {
    sigs.add(canonicalSetSignature(expandMapsTo(m.maps_to)));
  }
  return sigs.size > 1;
}

export type CanonicalHit = { confidence: number; match_type?: MatchType; note?: string };

/**
 * Flatten regional rows into per-canonical hits with confidence.
 */
export function canonicalHitsFromMappings(
  matches: RegionalName[],
): Map<CanonicalId, CanonicalHit> {
  const map = new Map<CanonicalId, CanonicalHit>();
  for (const m of matches) {
    const ids = expandMapsTo(m.maps_to);
    const perIdConfidence = ids.length > 1 ? m.confidence * 0.92 : m.confidence;
    for (const id of ids) {
      const prev = map.get(id);
      const nextConf = Math.max(prev?.confidence ?? 0, perIdConfidence);
      const note = m.notes ?? prev?.note;
      map.set(id, { confidence: nextConf, match_type: m.match_type, note });
    }
  }
  return map;
}

/**
 * Flatten a RegionalCut's typed edges into per-canonical hits.
 */
export function canonicalHitsFromRegionalCut(
  cut: RegionalCut,
): Map<CanonicalId, CanonicalHit> {
  const map = new Map<CanonicalId, CanonicalHit>();
  for (const edge of cut.maps_to) {
    const prev = map.get(edge.canonical_id);
    if (!prev || edge.confidence > prev.confidence) {
      map.set(edge.canonical_id, {
        confidence: edge.confidence,
        match_type: edge.match_type,
        note: edge.note,
      });
    }
  }
  return map;
}

export function labelsForCanonical(
  canonicalId: CanonicalId,
  region: RegionSlug,
): string[] {
  const list = canonicalLabels[canonicalId]?.[region];
  return list ? [...list] : [canonicalId.replace(/_/g, " ")];
}

export function representativeInputName(
  region: RegionSlug,
  canonicalId: CanonicalId,
): string | null {
  for (const m of regionalNames) {
    if (m.region !== region) continue;
    const ids = expandMapsTo(m.maps_to);
    if (ids.includes(canonicalId)) return m.name;
  }
  return null;
}
