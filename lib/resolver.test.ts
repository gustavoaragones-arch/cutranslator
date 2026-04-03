import { describe, expect, it } from "vitest";
import { mappingsHaveRegionalConflict } from "@/lib/mappings";
import { resolveCut } from "@/lib/resolver";
import type { RegionalNameEntry } from "@/lib/types";

describe("resolveCut (Phase 2)", () => {
  it('maps Argentina vacío → USA with multi_cut ambiguity and two canonical targets', () => {
    const r = resolveCut("vacío", "argentina", "usa");
    expect(r.primary).not.toBeNull();
    expect(r.ambiguity.exists).toBe(true);
    expect(r.ambiguity.type).toBe("multi_cut");
    expect(r.ambiguity.message).toContain("⚠️");
    const ids = new Set([
      r.primary!.canonicalId,
      ...r.alternatives.map((a) => a.canonicalId),
    ]);
    expect(ids.has("flank")).toBe(true);
    expect(ids.has("sirloin_flap")).toBe(true);
  });

  it("maps UK sirloin → USA as striploin (not US-style sirloin ambiguity)", () => {
    const r = resolveCut("sirloin", "uk", "usa");
    expect(r.primary?.canonicalId).toBe("striploin");
    expect(r.primary?.names.some((n) => /strip|Strip|York/i.test(n))).toBe(
      true,
    );
    expect(r.ambiguity.exists).toBe(false);
  });

  it("maps Mexico arrachera → USA as skirt", () => {
    const r = resolveCut("arrachera", "mexico", "usa");
    expect(r.primary?.canonicalId).toBe("skirt");
    expect(r.primary?.confidence).toBeGreaterThanOrEqual(0.8);
  });

  it("maps Brazil picanha → France as sirloin_cap with French retail labels", () => {
    const r = resolveCut("picanha", "brazil", "france");
    expect(r.primary?.canonicalId).toBe("sirloin_cap");
    expect(
      r.primary?.names.some((n) => /picanha|Picanha/i.test(n)),
    ).toBe(true);
  });

  it("US sirloin → target keeps ambiguity (multi canonical)", () => {
    const r = resolveCut("sirloin", "usa", "france");
    expect(r.ambiguity.type).toBe("multi_cut");
    expect(r.alternatives.length).toBeGreaterThanOrEqual(1);
  });
});

describe("mappingsHaveRegionalConflict", () => {
  it("returns false when rows agree on canonical sets", () => {
    const rows: RegionalNameEntry[] = [
      {
        name: "a",
        region: "chile",
        maps_to: ["flank", "sirloin_flap"],
        confidence: 0.5,
      },
      {
        name: "a",
        region: "chile",
        maps_to: ["sirloin_flap", "flank"],
        confidence: 0.4,
      },
    ];
    expect(mappingsHaveRegionalConflict(rows)).toBe(false);
  });

  it("returns true when rows expand to different canonical sets", () => {
    const rows: RegionalNameEntry[] = [
      {
        name: "x",
        region: "chile",
        maps_to: "ribeye",
        confidence: 0.9,
      },
      {
        name: "x",
        region: "chile",
        maps_to: "skirt",
        confidence: 0.5,
      },
    ];
    expect(mappingsHaveRegionalConflict(rows)).toBe(true);
  });
});
