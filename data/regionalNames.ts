import type { CanonicalId, RegionSlug, RegionalNameEntry } from "@/lib/types";

/**
 * Regional surface names → canonical (import-only, scalable).
 * Use `maps_to` as a single id or a list when one label spans multiple primals.
 */
export const regionalNames: readonly RegionalNameEntry[] = [
  // ——— USA ———
  { name: "ribeye", region: "usa", maps_to: "ribeye", confidence: 0.99, type: "clear" },
  { name: "rib eye", region: "usa", maps_to: "ribeye", confidence: 0.98, type: "clear" },
  {
    name: "new york strip",
    region: "usa",
    maps_to: "striploin",
    confidence: 0.97,
    type: "clear",
  },
  {
    name: "sirloin",
    region: "usa",
    maps_to: ["striploin", "sirloin_cap"],
    confidence: 0.55,
    type: "ambiguous",
    notes:
      "In the US, “sirloin” often means strip-like steaks; it can also mean coulotte-adjacent cuts—verify the subprimal.",
  },
  {
    name: "top sirloin cap",
    region: "usa",
    maps_to: "sirloin_cap",
    confidence: 0.96,
    type: "clear",
  },
  { name: "coulotte", region: "usa", maps_to: "sirloin_cap", confidence: 0.94, type: "clear" },
  { name: "flank steak", region: "usa", maps_to: "flank", confidence: 0.96, type: "clear" },
  { name: "skirt steak", region: "usa", maps_to: "skirt", confidence: 0.95, type: "clear" },
  {
    name: "sirloin flap",
    region: "usa",
    maps_to: "sirloin_flap",
    confidence: 0.9,
    type: "clear",
  },
  {
    name: "filet mignon",
    region: "usa",
    maps_to: "tenderloin",
    confidence: 0.9,
    type: "clear",
    notes: "Often tenderloin center cuts.",
  },

  // ——— Brazil ———
  {
    name: "picanha",
    region: "brazil",
    maps_to: "sirloin_cap",
    confidence: 0.95,
    type: "clear",
  },
  {
    name: "contrafilé",
    region: "brazil",
    maps_to: "striploin",
    confidence: 0.93,
    type: "clear",
  },
  { name: "fraldinha", region: "brazil", maps_to: "flank", confidence: 0.9, type: "clear" },
  {
    name: "bife de chorizo",
    region: "brazil",
    maps_to: "striploin",
    confidence: 0.88,
    type: "clear",
    notes: "Brazilian retail naming; strip-like loin steaks.",
  },

  // ——— France ———
  {
    name: "entrecôte",
    region: "france",
    maps_to: "ribeye",
    confidence: 0.92,
    type: "clear",
    notes: "Usually rib context; bone-in vs boneless nuance.",
  },
  {
    name: "rumsteck",
    region: "france",
    maps_to: "sirloin_cap",
    confidence: 0.78,
    type: "ambiguous",
    notes: "French rumsteck varies by butcher; often sirloin family.",
  },
  { name: "bavette", region: "france", maps_to: "flank", confidence: 0.91, type: "clear" },
  { name: "onglet", region: "france", maps_to: "skirt", confidence: 0.85, type: "clear" },
  {
    name: "contre-filet",
    region: "france",
    maps_to: "striploin",
    confidence: 0.9,
    type: "clear",
  },
  {
    name: "filet",
    region: "france",
    maps_to: "tenderloin",
    confidence: 0.88,
    type: "clear",
  },

  // ——— Argentina (Phase 2 test: vacío) ———
  {
    name: "vacío",
    region: "argentina",
    maps_to: ["flank", "sirloin_flap"],
    confidence: 0.6,
    type: "ambiguous",
    notes: "Large abdominal / flap region overlapping flank and sirloin flap in many breakdowns.",
  },

  // ——— UK (Phase 2: sirloin ≠ US) ———
  {
    name: "ribeye",
    region: "uk",
    maps_to: "ribeye",
    confidence: 0.97,
    type: "clear",
  },
  {
    name: "sirloin",
    region: "uk",
    maps_to: "striploin",
    confidence: 0.88,
    type: "clear",
    notes: "UK “sirloin” commonly maps to strip/shortloin context—not the same as US “sirloin” ambiguity.",
  },
  {
    name: "rump steak",
    region: "uk",
    maps_to: "sirloin_cap",
    confidence: 0.72,
    type: "ambiguous",
    notes: "Retail “rump” can vary; often cap/rump family—confirm with your butcher.",
  },

  // ——— Mexico (Phase 2: arrachera) ———
  {
    name: "arrachera",
    region: "mexico",
    maps_to: "skirt",
    confidence: 0.82,
    type: "clear",
    notes: "Northern Mexico retail term; often outside skirt—some regions use it loosely.",
  },

  // ——— Spain / Chile (seed coverage) ———
  {
    name: "solomillo",
    region: "spain",
    maps_to: "tenderloin",
    confidence: 0.9,
    type: "clear",
  },
  {
    name: "lomo vetado",
    region: "chile",
    maps_to: "striploin",
    confidence: 0.86,
    type: "clear",
  },
];

/** Preferred consumer labels per canonical in each region (output layer). */
export const canonicalLabels: Record<
  CanonicalId,
  Partial<Record<RegionSlug, readonly string[]>>
> = {
  ribeye: {
    usa: ["Ribeye steak", "Rib eye"],
    france: ["Entrecôte"],
    brazil: ["Bife de ancho", "Costela ripa (varies)"],
    uk: ["Ribeye", "Fore rib steak (context-dependent)"],
    argentina: ["Bife de chorizo (rib context—verify)", "Ojo de bife"],
    mexico: ["Rib eye", "Ojo de bife (regional)"],
    chile: ["Lomo liso / rib context (verify)"],
    spain: ["Chuletón", "Entrecot"],
  },
  striploin: {
    usa: ["New York strip", "Strip steak"],
    france: ["Contre-filet"],
    brazil: ["Contrafilé", "Bife de chorizo"],
    uk: ["Sirloin steak (UK)", "Strip sirloin"],
    argentina: ["Bife de chorizo (strip)", "Lomo"],
    mexico: ["New York", "Strip steak"],
    chile: ["Lomo vetado", "Lomo liso"],
    spain: ["Entrecot (boneless strip context)", "Solomillo de strip (less common)"],
  },
  tenderloin: {
    usa: ["Beef tenderloin", "Filet mignon (center cuts)"],
    france: ["Filet"],
    brazil: ["Filé mignon"],
    uk: ["Fillet steak"],
    argentina: ["Lomo", "Filet"],
    mexico: ["Filete", "Lomo"],
    chile: ["Lomo fino"],
    spain: ["Solomillo"],
  },
  sirloin_cap: {
    usa: ["Coulotte", "Top sirloin cap"],
    france: ["Picanha (import)", "Coulotte (rare)"],
    brazil: ["Picanha"],
    uk: ["Picanha (import)", "Rump cap (verify)"],
    argentina: ["Tapa de cuadril", "Picanha (import)"],
    mexico: ["Picaña", "Tapa de sirloin"],
    chile: ["Punta de lomo", "Tapa (verify)"],
    spain: ["Tapa de aguayón (approx.)"],
  },
  sirloin_flap: {
    usa: ["Sirloin flap", "Flap meat"],
    france: ["Bavette de flanchet (approx.)"],
    brazil: ["Fraldinha (overlap—verify)"],
    uk: ["Bavette (approx.)", "Flap"],
    argentina: ["Vacío overlap", "Flap"],
    mexico: ["Arrachera (sometimes flap—verify)", "Flap"],
    chile: ["Flap", "Sobre costilla (approx.)"],
    spain: ["Falda / flap (approx.)"],
  },
  flank: {
    usa: ["Flank steak"],
    france: ["Bavette (d’aloyau)", "Bavette"],
    brazil: ["Fraldinha"],
    uk: ["Bavette", "Flank"],
    argentina: ["Vacío overlap", "Flank"],
    mexico: ["Arrachera (sometimes)", "Flank"],
    chile: ["Asado de tira", "Flank"],
    spain: ["Falda"],
  },
  skirt: {
    usa: ["Skirt steak", "Outside skirt"],
    france: ["Onglet"],
    brazil: ["Diafragma", "Fraldinha (confused—verify)"],
    uk: ["Skirt", "Thin skirt"],
    argentina: ["Entraña"],
    mexico: ["Arrachera", "Entraña"],
    chile: ["Entraña"],
    spain: ["Entraña", "Diafragma"],
  },
};
