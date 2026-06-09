import { listCanonicalCuts, isCanonicalId } from "@/lib/canonical";
import type { CanonicalCut, CanonicalId } from "@/lib/types";

// ─── Offal canonicals ────────────────────────────────────────────────────────

export function listOffalCuts(): readonly CanonicalCut[] {
  return listCanonicalCuts().filter((c) => c.primal === "offal");
}

export function isOffalId(s: string): s is CanonicalId {
  if (!isCanonicalId(s)) return false;
  const cut = listCanonicalCuts().find((c) => c.id === s);
  return !!cut && cut.primal === "offal";
}

// ─── Traditions ───────────────────────────────────────────────────────────────

export type OffalTradition = {
  /** Kebab-case, URL-safe identifier */
  id: string;
  /** Display name */
  name: string;
  /** Geographic region label */
  region: string;
  /** 2–3 sentence editorial summary */
  summary: string;
  /** Paragraph on cultural significance */
  culturalContext: string;
  /** How cuts are typically prepared */
  preparationNotes: string;
  /**
   * Canonical IDs for cuts central to this tradition.
   * All values must exist in the CanonicalId union at commit time.
   * May be empty or partial when a relevant canonical is not yet promoted.
   */
  cuts: readonly CanonicalId[];
  /** Optional secondary canonical references */
  relatedCuts?: readonly CanonicalId[];
  /** Optional attribution / research notes */
  sources?: readonly string[];
};

// ─── Tradition data ───────────────────────────────────────────────────────────
//
// Cut mapping notes:
//   argentine-achuras: mondongo → tripe | rinones → kidney | chinchulines → intestines
//     mollejas → sweetbreads (canonical added Batch 26) | testicles (canonical added Batch 26)
//     morcilla is a preparation (blood sausage), not a cut — tradition-only, no canonical planned.
//   rocky-mountain-oysters: testicles canonical added Batch 26; cuts[] updated.
//   nalli-nihari: "shank" generic not in union; using fore_shank + hind_shank (nihari
//     uses the full shank bone with marrow).

const traditions: readonly OffalTradition[] = [
  {
    id: "argentine-achuras",
    name: "Argentine Achuras",
    region: "South America — Argentina",
    summary:
      "The collective term for offal cuts cooked on the Argentine parrilla. " +
      "Achuras are not a side note — they open the asado, arriving at the table " +
      "before the main beef cuts, grilled over hardwood embers while the larger " +
      "cuts are still rendering down.",
    culturalContext:
      "In Argentine asado culture the parrillero sequences the cook deliberately: " +
      "achuras go on first because they require less time and reward the waiting guests " +
      "with something immediate and intensely flavoured. Chinchulines, mollejas, and " +
      "morcilla are staples at every serious parrilla; mondongo appears more often in " +
      "home kitchens as a slow stew (puchero) rather than on the grill. There is " +
      "regional variation — Buenos Aires parrillas favour mollejas and morcilla as the " +
      "centrepiece; interior provinces like Córdoba and Mendoza lean toward chinchulines " +
      "and rinones. The parrillero's skill in managing different cooking times for each " +
      "cut is considered a mark of mastery.",
    preparationNotes:
      "All achuras cook directly over hardwood or charcoal at medium heat. Intestines " +
      "(chinchulines) are cleaned thoroughly, then braided to hold their shape on the " +
      "grill and turned frequently until crisp. Kidney (rinones) is halved, fat trimmed, " +
      "and grilled quickly at high heat to avoid toughening. Tripe (mondongo) is more " +
      "commonly slow-simmered for hours with vegetables and chickpeas than grilled, " +
      "though thin-cut strips do appear on the parrilla. Blood sausage (morcilla) is " +
      "grilled whole until the skin blisters and just begins to split. All achuras " +
      "are eaten simply — salt, lemon, and chimichurri only.",
    // mondongo → tripe | rinones → kidney | chinchulines → intestines
    // mollejas → sweetbreads | testicles (both canonicals added Batch 26)
    // morcilla is a preparation (blood sausage), not a cut — tradition-only, no canonical planned
    cuts: ["tripe", "kidney", "intestines", "sweetbreads", "testicles"],
    sources: [
      "Francis Mallmann, Seven Fires: Grilling the Argentine Way (2009)",
      "Patricio Tapia, Argentine asado traditions (field notes)",
    ],
  },
  {
    id: "mexican-lengua",
    name: "Mexican Lengua",
    region: "North America — Mexico",
    summary:
      "Beef tongue braised until completely tender, then sliced or shredded for tacos, " +
      "tortas, and guisados. One of the most valued taqueria cuts in Mexican cooking, " +
      "lengua rewards the long braise with a texture and richness that few other cuts " +
      "can match.",
    culturalContext:
      "Lengua occupies a central place in Mexican taqueria tradition as a marker of " +
      "serious nose-to-tail cooking. In Mexico City the taco de lengua is a benchmark " +
      "dish — a taqueria that does it well earns a different kind of respect than one " +
      "that sticks to carne asada and al pastor. The preparation is straightforward but " +
      "unforgiving: underbraised tongue is rubbery and unpleasant; done right it is " +
      "silky and deeply beefy. Northern preparations (Sonora, Chihuahua) tend toward " +
      "stewed lengua in tomato-based sauces served over rice; central Mexico (DF, " +
      "Puebla) prefers sliced thin for tacos with salsa verde or roja and raw onion. " +
      "Lengua also appears in tortas de lengua in the Estado de México and in caldo " +
      "de res across the republic.",
    preparationNotes:
      "Tongue is braised whole in well-salted water with aromatics — onion, garlic, " +
      "bay leaf, and peppercorns — for two to three hours until a knife slides in " +
      "without resistance. The skin is peeled while still warm; this step is easier " +
      "immediately after cooking and becomes harder as the tongue cools. Once peeled " +
      "and rested, the tongue is sliced thin against the grain for tacos, or pulled " +
      "and finished in a salsa for guisados. Some taquerias sear the slices on the " +
      "comal after slicing for colour and a slight crust.",
    cuts: ["tongue"],
  },
  {
    id: "rocky-mountain-oysters",
    name: "Rocky Mountain Oysters",
    region: "North America — Western USA & Canada",
    summary:
      "Bull testicles, typically battered and deep-fried, served at ranch festivals " +
      "and steakhouses across the American and Canadian west. Known by many regional " +
      "names — Prairie Oysters in Canada, Cowboy Caviar, Swinging Beef — the dish " +
      "occupies a distinct place in ranching culture as both genuine food and " +
      "festival spectacle.",
    culturalContext:
      "Rocky Mountain Oysters emerge from the practical reality of cattle ranching: " +
      "bull calves are castrated early in life for management and meat quality, and " +
      "the harvest represents genuine nose-to-tail use of the animal. Festival culture " +
      "amplified the practice — the annual Testicle Festival in Clinton, Montana draws " +
      "thousands of visitors and has been running since 1982. In Canada, the Prairie " +
      "Oyster carries the same dual identity: real ranch food and a rite of passage " +
      "for guests unfamiliar with the cut. Dedicated steakhouses in Wyoming, Colorado, " +
      "and Alberta keep the dish on regular menus rather than as a seasonal novelty. " +
      "The name itself is part of the tradition — 'oyster' as a euphemism for organ " +
      "meat appears in multiple cultures (the 'oyster' of a chicken is its prized back " +
      "muscle), and the Rocky Mountain variant deploys it as both politeness and joke.",
    preparationNotes:
      "Testicles are peeled of their outer membrane, sliced into rounds roughly half " +
      "an inch thick, and soaked briefly in salted water or buttermilk. The standard " +
      "preparation is beer batter — flour, egg, beer, salt, pepper — fried in hot oil " +
      "until golden. Seasoning varies by establishment: some apply only salt and hot " +
      "sauce, others use a spiced flour dredge before battering. The finished result " +
      "has a mild, slightly gamey flavour closer to sweetbreads than to muscle meat, " +
      "with a creamy interior and crisp exterior when fresh from the fryer. Served " +
      "immediately with dipping sauce — ranch, cocktail, or hot sauce depending on " +
      "the house.",
    cuts: ["testicles"],
    sources: [
      "Clinton, Montana Testicle Festival historical records",
      "USDA offal processing guidelines",
    ],
  },
  {
    id: "nalli-nihari",
    name: "Nalli Nihari",
    region: "South Asia — India, Pakistan",
    summary:
      "A slow-cooked shank and bone marrow stew, spiced with a complex nihari masala. " +
      "Originally a dish of the Mughal royal court, nihari is now a breakfast staple " +
      "in Delhi, Lucknow, and Karachi — ladled over naan with fresh ginger, green " +
      "chilli, fried onion, and lemon.",
    culturalContext:
      "Nihari's origin is traced to the kitchens of the Mughal emperors in Old Delhi, " +
      "where it was cooked overnight — 'nihar' meaning morning in Arabic — to be ready " +
      "at dawn for the court after the Fajr prayer. When Mughal rule declined, the " +
      "royal cooks moved their trade to the streets around Jama Masjid, where nihari " +
      "became the defining breakfast dish of Shahjahanabad. The dish migrated with " +
      "partition in 1947, taking deep root in Karachi and Lahore, where Pakistani " +
      "nihari developed its own distinct masala character — spicier and often with " +
      "more whole spices than the Delhi version. Today the two traditions exist in " +
      "parallel: Delhi nihari (most famously from Karim's and Al-Jawahar near Jama " +
      "Masjid) and Karachi nihari (associated with named masala houses that sell " +
      "their proprietary spice blends). Both share the fundamental technique: " +
      "overnight cooking, bone marrow as flavour foundation, and nalli (the marrow " +
      "bone itself) as the prized garnish.",
    preparationNotes:
      "Shank pieces are browned in ghee with whole spices (cardamom, cloves, bay " +
      "leaf, cinnamon), then a nihari masala — typically including coriander, cumin, " +
      "fennel, nutmeg, mace, dried ginger, and red chilli — is added and cooked into " +
      "the meat. Water is added and the pot is sealed and cooked on the lowest possible " +
      "heat for eight to twelve hours, traditionally overnight in a sealed deg (heavy " +
      "pot). The bone marrow renders into the broth during this time, giving nihari " +
      "its characteristic silky body. Wheat flour or rice flour slurry is sometimes " +
      "stirred in to thicken. Served in the morning with naan or kulcha, garnished " +
      "with fine-cut raw ginger, sliced green chilli, fresh coriander, fried onion, " +
      "and a squeeze of lemon. The nalli (marrow bone) is served alongside so the " +
      "diner can extract the remaining marrow with bread.",
    // "shank" generic not in union; using fore_shank + hind_shank.
    // Nihari uses both — the whole shank with the marrow bone intact.
    cuts: ["bone_marrow", "fore_shank", "hind_shank"],
    sources: [
      "Colleen Taylor Sen, Feasts and Fasts: A History of Food in India (2015)",
      "Karim's Restaurant, Old Delhi — menu and historical notes",
    ],
  },
];

// ─── Public API ───────────────────────────────────────────────────────────────

export function listOffalTraditions(): readonly OffalTradition[] {
  return traditions;
}

export function getOffalTraditionById(id: string): OffalTradition | undefined {
  return traditions.find((t) => t.id === id);
}

/** Traditions that reference a given canonical ID in their cuts[] array. */
export function traditionsForCut(cutId: CanonicalId): readonly OffalTradition[] {
  return traditions.filter((t) => t.cuts.includes(cutId));
}
