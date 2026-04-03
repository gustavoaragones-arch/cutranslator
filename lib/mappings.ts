import { canonicalLabels, regionalNames } from "@/data/regionalNames";
import type { CanonicalId, RegionSlug, RegionalNameEntry } from "@/lib/types";
import { normalizeForLookup } from "@/utils/normalize";

const normalizedIndex: { key: string; mapping: RegionalNameEntry }[] =
  regionalNames.map((m) => ({
    key: `${m.region}:${normalizeForLookup(m.name)}`,
    mapping: m,
  }));

export function findRegionalMappings(
  inputRegion: RegionSlug,
  normalizedLookupKey: string,
): RegionalNameEntry[] {
  const fullKey = `${inputRegion}:${normalizedLookupKey}`;
  return normalizedIndex
    .filter((e) => e.key === fullKey)
    .map((e) => e.mapping);
}

/** All dataset rows whose normalized name matches the URL slug key (any region). */
export function findRegionalEntriesByNormalizedKey(
  normalizedLookupKey: string,
): RegionalNameEntry[] {
  return regionalNames.filter(
    (m) => normalizeForLookup(m.name) === normalizedLookupKey,
  );
}

export function expandMapsTo(
  mapsTo: RegionalNameEntry["maps_to"],
): CanonicalId[] {
  if (typeof mapsTo === "string") return [mapsTo];
  return [...mapsTo];
}

function canonicalSetSignature(ids: CanonicalId[]): string {
  return [...new Set(ids)].sort().join("|");
}

export function mappingsHaveRegionalConflict(matches: RegionalNameEntry[]): boolean {
  if (matches.length < 2) return false;
  const sigs = new Set<string>();
  for (const m of matches) {
    sigs.add(canonicalSetSignature(expandMapsTo(m.maps_to)));
  }
  return sigs.size > 1;
}

/**
 * Flatten regional rows into per-canonical hits with confidence.
 */
export function canonicalHitsFromMappings(
  matches: RegionalNameEntry[],
): Map<CanonicalId, { confidence: number; note?: string }> {
  const map = new Map<CanonicalId, { confidence: number; note?: string }>();
  for (const m of matches) {
    const ids = expandMapsTo(m.maps_to);
    const perIdConfidence = ids.length > 1 ? m.confidence * 0.92 : m.confidence;
    for (const id of ids) {
      const prev = map.get(id);
      const nextConf = Math.max(prev?.confidence ?? 0, perIdConfidence);
      const note = m.notes ?? prev?.note;
      map.set(id, { confidence: nextConf, note });
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
