/**
 * Offal Tier 3 axis nodes — sub-canonical identities that map to a parent
 * CanonicalId without warranting a full canonical promotion.
 *
 * Architecture decision: ADR-006 (c1cb321)
 * Pattern precedent: zebu_hump_fat_axis_af in the main dataset
 */
import type { CanonicalId } from "@/lib/types";

export type OffalAxisNode = {
  id: string;
  maps_to: CanonicalId[];
  country: string;
  localName: string;
  nativeScript?: string;
  note: string;
};

const OFFAL_AXIS_NODES: readonly OffalAxisNode[] = [
  {
    id: "maodu_axis_cn",
    maps_to: ["tripe"],
    country: "CN",
    localName: "máodǔ",
    nativeScript: "毛肚",
    note:
      "Omasum. Premium Sichuan hot pot ingredient. " +
      "Dipped briefly in boiling málà broth. " +
      "Distinct from generic niúdǔ in both " +
      "preparation and market status.",
  },
  {
    id: "mino_axis_jp",
    maps_to: ["tripe"],
    country: "JP",
    localName: "mino",
    nativeScript: "ミノ",
    note:
      "Rumen. Standard yakiniku cut. " +
      "Grilled over charcoal. One of three stomach " +
      "chambers treated as distinct menu items " +
      "in Japanese horumon culture alongside " +
      "hachinosu (reticulum) and senmai (omasum).",
  },
  {
    id: "makchang_axis_kr",
    maps_to: ["tripe"],
    country: "KR",
    localName: "makchang",
    nativeScript: "막창",
    note:
      "Fourth stomach (abomasum). " +
      "Especially associated with Daegu beef culture. " +
      "Distinct from yang (rumen/generic tripe) " +
      "in Korean gopchang restaurant ordering.",
  },
];

// ─── Public API ───────────────────────────────────────────────────────────────

export function listOffalAxisNodes(): readonly OffalAxisNode[] {
  return OFFAL_AXIS_NODES;
}

export function getAxisNodesForCanonical(
  id: CanonicalId
): readonly OffalAxisNode[] {
  return OFFAL_AXIS_NODES.filter((node) => node.maps_to.includes(id));
}
