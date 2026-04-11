import type { RegionalCut } from "@/lib/types";

export const regionalCuts: readonly RegionalCut[] = [

  // === ARGENTINA ===
  {
    id: "vacio_ar",
    name: "Vacío",
    region: "argentina",
    maps_to: [
      { canonical_id: "flank", match_type: "composite", confidence: 0.65, note: "Vacío spans the flank and lower plate area" },
      { canonical_id: "sirloin_flap", match_type: "composite", confidence: 0.55, note: "Extends into sirloin flap territory" },
    ],
    synonyms: ["vacio"],
    description: "Argentina's iconic asado cut. A large, thin, curved cut from the belly/flank area with a distinctive fat layer. Larger than US flank steak — spans multiple USDA primals. No exact US equivalent exists.",
    notes: "Vacío is larger than US flank; includes parts of flank and plate. The fat side faces the fire during asado.",
  },

  {
    id: "entrana_ar",
    name: "Entraña",
    region: "argentina",
    maps_to: [
      { canonical_id: "skirt", match_type: "close", confidence: 0.85, note: "Entraña fina = outside skirt; entraña gruesa = closer to hanger" },
    ],
    synonyms: ["entraña fina", "entranha"],
    description: "The diaphragm muscle, a staple of Argentine parrilla. Entraña fina (thin) is the outside skirt; entraña gruesa (thick) overlaps with hanger steak.",
  },

  {
    id: "asado_de_tira_ar",
    name: "Asado de Tira",
    region: "argentina",
    maps_to: [
      { canonical_id: "short_ribs", match_type: "close", confidence: 0.80, note: "Flanken-style cross-cut ribs, the defining cut of Argentine asado" },
    ],
    synonyms: ["tira de asado", "costillar"],
    description: "Cross-cut (flanken-style) beef ribs, sliced across the bones into thin strips. The quintessential Argentine asado cut. Similar to Korean galbi in technique but thicker.",
  },

  // === BRAZIL ===
  {
    id: "picanha_br",
    name: "Picanha",
    region: "brazil",
    maps_to: [
      { canonical_id: "sirloin_cap", match_type: "exact", confidence: 0.95, note: "Picanha IS the sirloin cap / coulotte with fat cap intact" },
    ],
    synonyms: ["picanha bovina"],
    description: "Brazil's most celebrated cut. The sirloin cap (coulotte) with its signature fat cap, skewered and grilled over charcoal. Defined by the fat cap — without it, it's just coulotte.",
  },

  {
    id: "fraldinha_br",
    name: "Fraldinha",
    region: "brazil",
    maps_to: [
      { canonical_id: "flank", match_type: "close", confidence: 0.80, note: "Bottom portion of the flank; slightly different boundaries than USDA flank steak" },
    ],
    synonyms: ["fraldão"],
    description: "A popular Brazilian churrasco cut from the lower flank area. Similar to but not identical to US flank steak — the Brazilian cut may extend further into the plate area.",
  },

  // === MEXICO ===
  {
    id: "arrachera_mx",
    name: "Arrachera",
    region: "mexico",
    maps_to: [
      { canonical_id: "skirt", match_type: "exact", confidence: 0.95, note: "Arrachera = outside skirt steak in Mexican butchery" },
    ],
    synonyms: ["arrachera de res"],
    description: "Mexico's most popular cut for tacos and fajitas. The outside skirt steak, marinated and grilled over high heat. Central to norteño cuisine.",
  },

  // === COLOMBIA ===
  {
    id: "sobrebarriga_co",
    name: "Sobrebarriga",
    region: "colombia",
    maps_to: [
      { canonical_id: "flank", match_type: "approximate", confidence: 0.70, note: "From the belly/flank area but a tougher, thicker cut than USDA flank steak" },
    ],
    synonyms: ["sobrebarriga delgada", "sobrebarriga gruesa"],
    description: "Colombia's most traditional cut. 'Over the belly' — a tough, flavorful cut from the flank area, traditionally braised (sudada) or rolled and stuffed. Thicker and tougher than US flank steak.",
  },

  // === FRANCE ===
  {
    id: "bavette_fr",
    name: "Bavette",
    region: "france",
    maps_to: [
      { canonical_id: "sirloin_flap", match_type: "close", confidence: 0.80, note: "Bavette d'aloyau = sirloin flap" },
      { canonical_id: "flank", match_type: "approximate", confidence: 0.65, note: "Bavette de flanchet = flank" },
    ],
    synonyms: ["bavette d'aloyau", "bavette de flanchet"],
    description: "In France, 'bavette' refers to two distinct cuts: bavette d'aloyau (sirloin flap, the more prized) and bavette de flanchet (flank). Context and butcher tradition determine which one.",
    notes: "Two different French cuts share this name. Bavette d'aloyau is the primary meaning in most French butcher shops.",
  },

  {
    id: "entrecote_fr",
    name: "Entrecôte",
    region: "france",
    maps_to: [
      { canonical_id: "ribeye", match_type: "close", confidence: 0.90, note: "Boneless rib steak; may span slightly into short loin in some French specs" },
    ],
    synonyms: ["entrecote", "entrecôte de boeuf"],
    description: "The classic French boneless rib steak. Essentially a ribeye, though French butchering may extend the cut slightly further along the loin than US specifications.",
  },

  // === URUGUAY ===
  {
    id: "vacio_uy",
    name: "Vacío",
    region: "uruguay",
    maps_to: [
      { canonical_id: "flank", match_type: "composite", confidence: 0.70, note: "Same as Argentine vacío — spans flank and plate" },
      { canonical_id: "sirloin_flap", match_type: "composite", confidence: 0.55 },
    ],
    synonyms: ["vacio"],
    description: "Same cut as Argentine vacío. A large belly/flank cut central to Uruguayan asado tradition.",
  },

  // === SPAIN ===
  {
    id: "vacio_es",
    name: "Vacío",
    region: "spain",
    maps_to: [
      { canonical_id: "flank", match_type: "close", confidence: 0.80, note: "Spanish vacío is closer to USDA flank than the Argentine version" },
    ],
    description: "Spanish vacío corresponds more closely to the flank area than the Argentine/Uruguayan version, though butchering varies by region.",
  },

] as const;
