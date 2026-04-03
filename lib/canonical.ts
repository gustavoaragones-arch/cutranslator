import { canonicalCuts } from "@/data/canonicalCuts";
import type { CanonicalCut, CanonicalId } from "@/lib/types";

const byId = new Map<CanonicalId, CanonicalCut>(
  canonicalCuts.map((c) => [c.id, c]),
);

const idSet = new Set<string>(canonicalCuts.map((c) => c.id));

export function getCanonicalById(id: CanonicalId): CanonicalCut | undefined {
  return byId.get(id);
}

export function listCanonicalCuts(): readonly CanonicalCut[] {
  return canonicalCuts;
}

export function isCanonicalId(s: string): s is CanonicalId {
  return idSet.has(s);
}
