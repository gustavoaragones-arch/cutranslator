import { listCanonicalCuts, isCanonicalId } from "@/lib/canonical";
import type { CanonicalCut, CanonicalId } from "@/lib/types";

// ─── Offal canonicals ────────────────────────────────────────────────────────

export function listOffalCuts(): readonly CanonicalCut[] {
  return listCanonicalCuts().filter((c) => c.primal === "offal");
}

export function isOffalId(s: string): s is CanonicalId {
  if (!isCanonicalId(s)) return false;
  // Circular import safety: access primal via the canonical lookup we already have
  const cut = listCanonicalCuts().find((c) => c.id === s);
  return !!cut && cut.primal === "offal";
}

// ─── Traditions (PR 2 scope — empty at PR 1) ─────────────────────────────────

export type OffalTradition = {
  id: string;
  name: string;
  description: string;
  /** Canonical IDs this tradition references */
  cutIds: readonly CanonicalId[];
};

/** Returns all offal traditions. Empty until PR 2 populates the data. */
export function listOffalTraditions(): readonly OffalTradition[] {
  return [];
}

export function getOffalTraditionById(id: string): OffalTradition | undefined {
  return listOffalTraditions().find((t) => t.id === id);
}

/** Traditions that reference a given canonical ID. */
export function traditionsForCut(cutId: CanonicalId): readonly OffalTradition[] {
  return listOffalTraditions().filter((t) => t.cutIds.includes(cutId));
}
