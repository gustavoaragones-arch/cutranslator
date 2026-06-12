import { listCanonicalCuts, isCanonicalId } from "@/lib/canonical";
import type { CanonicalCut, CanonicalId } from "@/lib/types";
import { offalRegionalNames } from "@/data/offal/regionalNames";

// ─── Offal canonicals ────────────────────────────────────────────────────────

export function listOffalCuts(): readonly CanonicalCut[] {
  return listCanonicalCuts().filter((c) => c.primal === "offal");
}

export function isOffalId(s: string): s is CanonicalId {
  if (!isCanonicalId(s)) return false;
  const cut = listCanonicalCuts().find((c) => c.id === s);
  return !!cut && cut.primal === "offal";
}

// ─── Offal regional names ─────────────────────────────────────────────────────

export type OffalRegionalName = {
  canonicalId: CanonicalId;
  /** ISO 3166-1 alpha-2 country code */
  country: string;
  /** Romanized primary local name */
  localName: string;
  /** Original script rendering (Hanzi, Hangul, etc.) */
  nativeScript?: string;
  /** Regional variants or alternative retail names */
  altNames?: readonly string[];
  /** Display-only note where veal or other species differs from beef */
  speciesNote?: string;
  /** Note on ambiguous or non-standardized terminology across sub-regions */
  terminologyNote?: string;
  confidence: "high" | "medium" | "low";
  /** Offal tradition IDs this name is associated with */
  traditionIds?: readonly string[];
};

/** ISO country code → display label for offal regional names. */
export const OFFAL_COUNTRY_LABELS: Readonly<Record<string, string>> = {
  MX: "Mexico",
  CN: "China",
  KR: "South Korea",
  FR: "France",
  IT: "Italy",
  ES: "Spain",
  NG: "Nigeria",
  PH: "Philippines",
  TR: "Turkey",
  ET: "Ethiopia",
  GB: "United Kingdom",
  VN: "Vietnam",
  MA: "Morocco",
  PE: "Peru",
  JP: "Japan",
  AR: "Argentina",
  CL: "Chile",
  UY: "Uruguay",
  DE: "Germany",
  HU: "Hungary",
  IN: "India",
  GR: "Greece",
  ID: "Indonesia",
  IR: "Iran",
  EG: "Egypt",
  BR: "Brazil",
  PK: "Pakistan",
  LB: "Lebanon / Levant",
  SA: "Saudi Arabia",
  CO: "Colombia",
  ZA: "South Africa",
  PL: "Poland",
  CZ: "Czech Republic",
  RU: "Russia",
  UA: "Ukraine",
  TH: "Thailand",
};

/** All offal regional name entries across all countries. */
export function listOffalRegionalNames(): readonly OffalRegionalName[] {
  return offalRegionalNames;
}

/** Regional name entries for a specific canonical ID, sorted by country label. */
export function getOffalRegionalNamesForCut(
  cutId: CanonicalId,
): readonly OffalRegionalName[] {
  return offalRegionalNames
    .filter((r) => r.canonicalId === cutId)
    .sort((a, b) => {
      const la = OFFAL_COUNTRY_LABELS[a.country] ?? a.country;
      const lb = OFFAL_COUNTRY_LABELS[b.country] ?? b.country;
      return la.localeCompare(lb, "en");
    });
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
  /** Display-only species note (e.g. "Traditionally veal, not beef") */
  speciesNote?: string;
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
    cuts: ["tripe", "kidney", "intestines", "sweetbreads", "testicles", "brain"],
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

  // ─── Mexico ─────────────────────────────────────────────────────────────────

  {
    id: "tacos-de-cabeza",
    name: "Tacos de Cabeza",
    region: "North America — Mexico",
    summary:
      "The Mexican tradition of slow-cooking the entire beef head and selling individual " +
      "anatomical parts as taco fillings. Vendors typically offer cachete, lengua, trompa, " +
      "labio, and often sesos — each to order.",
    culturalContext:
      "Tacos de cabeza are central to urban taquería culture across Mexico. The barbacoa de " +
      "cabeza tradition extends the practice to pit or steam cooking — the whole head wrapped " +
      "in maguey leaves and cooked underground overnight. What makes tacos de cabeza distinctive " +
      "is their granularity: customers specify exact anatomical cuts rather than ordering 'beef.' " +
      "Cachete (cheek), lengua (tongue), trompa (snout), labio (lip), and ojo (eye) are each " +
      "sold as discrete fillings with individual price points and distinct textures. " +
      "The tradition is strongest in Mexico City and the surrounding state, but extends " +
      "through the Bajío and northern cattle states in regional variants.",
    preparationNotes:
      "The head is slow-cooked in an earth pit lined with hot coals and maguey leaves " +
      "(barbacoa) or in large industrial steamers (taquería variant). Cooking time ranges " +
      "from eight to twelve hours. Parts are chopped to order on a wooden block and served " +
      "in soft corn tortillas with salsa verde or roja, raw white onion, fresh cilantro, " +
      "and lime. Broth collected from the cooking vessel is served alongside as consomé.",
    cuts: ["head_cheek", "tongue", "tendon"],
  },
  {
    id: "tacos-de-tripa",
    name: "Tacos de Tripa",
    region: "North America — Mexico",
    summary:
      "Beef intestines cleaned, boiled, and finished on a comal or in rendered fat. " +
      "Served soft or crispy. One of Mexico's most important offal taco categories, " +
      "with its own dedicated vendor culture.",
    culturalContext:
      "Tacos de tripa are strongest in northern cattle states — Sonora, Chihuahua, " +
      "Coahuila — where cattle processing tradition is deepest. The machitos variant, " +
      "found in Sonora and Sinaloa, involves intestines wrapped around other organ meats " +
      "(heart, lung) before grilling — a technique that gives structural integrity to " +
      "the filling. In taquería culture, customers specify doneness level: suaves (soft, " +
      "just-cooked) or doradas (crispy, rendered further on the comal). The distinction " +
      "matters — crispy tripa has a different texture profile and a more intense rendered-fat " +
      "flavour than the soft version.",
    preparationNotes:
      "Intestines are cleaned thoroughly through multiple washes, then parboiled in " +
      "salted water until tender. For taquería service, portions are finished on a flat " +
      "comal in their own rendered fat until the customer's preferred doneness. Suaves " +
      "(soft) leave the comal after light browning; doradas are pressed flat and " +
      "rendered until the exterior crisps. Served in corn tortillas with salsa and lime.",
    cuts: ["intestines"],
  },
  {
    id: "menudo",
    name: "Menudo / Pancita",
    region: "North America — Mexico",
    summary:
      "Mexico's most important tripe dish. A long-simmered broth served on weekends, " +
      "holidays, and as a hangover remedy. Northern versions use dried red chile; " +
      "central versions may be white (blanco).",
    culturalContext:
      "Menudo is one of the most socially embedded offal traditions in the Americas. " +
      "It is a communal weekend dish — prepared in large batches that take hours of " +
      "simmering, eaten at family tables on Sunday mornings, and strongly associated " +
      "with Christmas, New Year, and quinceañera celebrations. Its reputation as a " +
      "hangover cure (levantamuertos — 'raises the dead') is part of its cultural " +
      "identity. Regional variation is significant: northern menudo (rojo) uses dried " +
      "red chiles (ancho, guajillo) and hominy; central pancita may be white (blanco) " +
      "without chiles. The dish is also called menudo colorado, menudo blanco, and " +
      "pancita depending on region and preparation.",
    preparationNotes:
      "Honeycomb tripe is cleaned and cut into two-centimetre pieces. For rojo, dried " +
      "chiles are toasted, soaked, and blended with garlic and onion, then added to the " +
      "broth. Hominy (maíz cacahuazintle) is added and the pot simmered for four to six " +
      "hours until tripe is completely tender and broth is deeply flavoured. Served in " +
      "deep bowls with dried oregano, crushed dried chiles, chopped raw onion, lime " +
      "wedges, and stacked corn tortillas.",
    cuts: ["tripe"],
  },

  // ─── China ───────────────────────────────────────────────────────────────────

  {
    id: "niuza",
    name: "Niúzá — Cantonese Mixed Beef Offal",
    region: "Asia — China (Cantonese)",
    summary:
      "The defining beef offal tradition of southern China and Hong Kong. Multiple " +
      "organs braised together in master stock and served as a unified dish, soup, " +
      "or noodle topping.",
    culturalContext:
      "Niúzá (牛杂) is rooted in Cantonese whole-animal utilization — the practice of " +
      "extracting value from every part of the animal. In Hong Kong and Guangdong, " +
      "dedicated niúzá stalls operate in wet markets, dai pai dongs (outdoor eateries), " +
      "and noodle shops. The dish is consumed at all meal times and is associated with " +
      "working-class Cantonese eating culture. The defining feature is the braising " +
      "together of disparate organs in a shared master stock — the flavours unify over " +
      "hours of slow cooking. Each organ retains a different texture: tripe yielding " +
      "and chewy, tendon gelatinous, intestines tender with rendered fat.",
    preparationNotes:
      "Organs are cleaned and parboiled separately to remove impurities and set texture. " +
      "They are then unified in a master stock (lou soi) based on soy sauce, five-spice, " +
      "ginger, and rice wine and braised together for two to three hours. Served over " +
      "wide rice noodles (ho fun) with hoisin sauce and chili paste, or as a standalone " +
      "braised platter. The braising liquid is kept active across service — organs added " +
      "and removed continuously.",
    cuts: ["tripe", "intestines", "heart", "liver", "tendon"],
  },
  {
    id: "sichuan-hotpot-offal",
    name: "Sichuan–Chongqing Hot Pot Offal",
    region: "Asia — China (Sichuan/Chongqing)",
    summary:
      "One of the world's largest organized offal consumption traditions. Sichuan and " +
      "Chongqing hot pot culture treats tripe, intestines, and tongue as premium " +
      "ingredients cooked tableside in spicy broth.",
    culturalContext:
      "Sichuan and Chongqing hot pot restaurants specialize in offal cuts to an extent " +
      "rare in any other cuisine. Máodǔ (omasum/book tripe) is the prestige cut — " +
      "briefly dipped for seven to ten seconds in boiling málà broth (tallow-based, " +
      "chili and Sichuan peppercorn) before eating. The correct dip time is a mark of " +
      "expertise; overdipped tripe loses its texture. Chongqing hot pot is central to " +
      "urban dining culture — restaurants seat hundreds at a time, often running " +
      "twenty-four hours. The tradition has expanded nationally through chain restaurants " +
      "and is now one of the dominant food formats in Chinese cities.",
    preparationNotes:
      "Offal is paper-thin sliced and served raw alongside the table hot pot. Tripe " +
      "is dipped for seconds in boiling tallow-based broth; tongue is held longer for " +
      "two to three minutes; tendon is lowered in a wire basket and simmered five to " +
      "eight minutes until fully gelatinous. Bone marrow bones are added to the pot " +
      "to enrich the broth. Dipping sauce (sesame paste, oyster sauce, garlic, scallion) " +
      "accompanies all cuts.",
    cuts: ["tripe", "tongue", "intestines", "bone_marrow", "tendon"],
  },

  // ─── South Korea ─────────────────────────────────────────────────────────────

  {
    id: "gopchang-gui",
    name: "Gopchang-gui",
    region: "Asia — South Korea",
    summary:
      "South Korea's defining beef offal barbecue tradition. Entire restaurant " +
      "categories specialize in grilled intestines, tripe, and heart cooked over " +
      "charcoal at the table.",
    culturalContext:
      "Gopchang-gui is inseparable from Korean drinking culture and late-night dining. " +
      "In Seoul, dedicated gopchang restaurants cluster in Mapo-gu and Euljiro; Daegu " +
      "is the most important regional centre, especially for makchang (large intestine " +
      "end section, prized for its fat content). The meal is a social ritual: the grill " +
      "is managed tableside by staff, scissors are used to cut cooked pieces, and the " +
      "meal is accompanied by soju or makgeolli. The sequence of cuts matters — " +
      "gopchang (small intestine) first, then daechang (large intestine), then makchang " +
      "as the finale. Restaurants that specialize exclusively in gopchang are called " +
      "gopchangjip and maintain a distinct identity from general Korean barbecue.",
    preparationNotes:
      "Intestines are cleaned, fat content preserved, and grilled directly over charcoal " +
      "at high heat. As the fat renders, it creates a crisp exterior while the interior " +
      "remains tender. Scissors are used tableside to cut cooked pieces into bite-sized " +
      "sections. Eaten wrapped in perilla leaf with ssamjang (fermented bean and chili " +
      "paste), fresh garlic, and green onion. Kkakdugi (radish kimchi) is the canonical " +
      "accompaniment.",
    cuts: ["intestines", "tripe", "heart"],
  },

  // ─── France ──────────────────────────────────────────────────────────────────

  {
    id: "tripes-caen",
    name: "Tripes à la Mode de Caen",
    region: "Europe — France (Normandy)",
    summary:
      "France's most famous tripe dish. Multiple stomach chambers slow-cooked for " +
      "many hours with Normandy cider, Calvados, and aromatics in a sealed earthenware " +
      "vessel.",
    culturalContext:
      "Tripes à la Mode de Caen originated in Normandy and is now a recognized symbol " +
      "of French regional gastronomy. The dish is historically associated with working-class " +
      "Norman cooking — utilitarian, slow, and economical. A Confrérie de la Tripière d'Or " +
      "(Brotherhood of the Golden Tripière) was established to oversee tradition standards " +
      "and hold annual competitions. The sealed earthenware cooking vessel (tripière) is " +
      "central to the dish's identity — the seal traps steam and cider vapour, creating a " +
      "braising environment impossible to replicate in an open pan. The dish is eaten across " +
      "France but Caen-branded versions carry a distinct prestige.",
    preparationNotes:
      "Multiple stomach chambers (rumen, reticulum, omasum, abomasum) plus calf's foot " +
      "(for gelatin) are sealed in a tripière with Normandy cider, Calvados, carrots, " +
      "leeks, onion, cloves, and a bouquet garni. The vessel is sealed with a flour-and-water " +
      "paste and placed in a low oven for ten to twelve hours minimum. Served directly from " +
      "the tripière in deep bowls. The broth thickens to a glossy, heavily flavoured sauce " +
      "from the collagen released during cooking.",
    cuts: ["tripe"],
  },
  {
    id: "tete-de-veau",
    name: "Tête de Veau",
    region: "Europe — France",
    speciesNote: "Traditionally veal, not beef",
    summary:
      "One of France's most iconic bistro dishes. Calf head poached whole and served " +
      "with sauce gribiche or ravigote. Deep historical associations with French " +
      "republican tradition.",
    culturalContext:
      "Tête de veau is a fixture of traditional Parisian bistros and has been served " +
      "at republican political banquets since the French Revolution — a deliberate " +
      "symbolic consumption in contrast to royalist 'crown roast' traditions. The dish " +
      "is associated with the Left in French political culture and was famously eaten " +
      "at socialist party gatherings in the twentieth century. In contemporary Paris, " +
      "it marks a specific kind of traditional bistro identity — establishments that " +
      "maintain the dish signal continuity with French working-class culinary tradition " +
      "over modern restaurant fashion.",
    preparationNotes:
      "The calf head is cleaned, blanched, and poached whole in a court-bouillon of " +
      "white wine, vinegar, vegetables, and aromatics until completely tender. Served " +
      "with sliced tongue, facial meat, and historically with brain (now rarer due to " +
      "BSE regulations). Sauce gribiche — hard-boiled egg–based vinaigrette with " +
      "capers, cornichons, and herbs — is the canonical accompaniment. Sauce ravigote " +
      "(vinaigrette with shallots, herbs, capers) is the lighter alternative.",
    cuts: ["head_cheek", "tongue", "skin"],
  },

  // ─── Italy ────────────────────────────────────────────────────────────────────

  {
    id: "quinto-quarto",
    name: "Quinto Quarto Romano",
    region: "Europe — Italy (Rome)",
    summary:
      "Rome's historic whole-animal offal tradition. After prime cuts were distributed " +
      "to wealthy buyers, slaughterhouse workers claimed the remaining fifth quarter — " +
      "organs, offal, and extremities — as their own cuisine.",
    culturalContext:
      "The quinto quarto (fifth quarter) tradition is central to Roman working-class " +
      "identity. Rome's historic slaughterhouse (Mattatoio) operated in the Testaccio " +
      "neighborhood, and workers were paid partly in offal — the cuts the wealthy buyers " +
      "did not want. Testaccio remains the epicenter of quinto quarto cooking, with " +
      "trattorias maintaining active menus of rigatoni con pajata, trippa alla romana, " +
      "coratella, and other offal preparations. The tradition has been elevated in recent " +
      "decades by chefs who see it as both cultural preservation and nose-to-tail ethics. " +
      "Quinto quarto cooking is distinctively Roman rather than generally Italian — " +
      "Florence has its own separate tradition (lampredotto) and other regions their own.",
    preparationNotes:
      "Each organ has distinct preparations: trippa alla romana (honeycomb tripe simmered " +
      "in tomato sauce with fresh mint and pecorino), pajata (veal intestine still containing " +
      "milk curds, tied in loops and cooked in tomato sauce, served with rigatoni), " +
      "coratella (mixed organ sauté of heart, lung, and liver with onion and white wine), " +
      "and rigatoni con pajata. The cuisine is unified by Roman working-class identity, " +
      "the tomato-herb-pecorino flavour profile, and the Testaccio neighborhood.",
    cuts: ["tripe", "intestines", "sweetbreads", "liver", "head_cheek", "kidney"],
  },
  {
    id: "lampredotto",
    name: "Lampredotto",
    region: "Europe — Italy (Florence)",
    summary:
      "Florence's most important street food. The fourth stomach (abomasum) simmered " +
      "in aromatic broth, sliced, and served in bread soaked with cooking liquid. " +
      "Europe's most significant stomach-based street food tradition.",
    culturalContext:
      "Lampredotto is a Florentine identity marker with no real equivalent elsewhere in " +
      "Italian cuisine. Dedicated street vendors (lampredottai) operate from fixed carts " +
      "throughout Florence — the most celebrated outside the Mercato Centrale and at " +
      "Nerbone inside the market building. The bread (semelle or rosette) is dipped in " +
      "the cooking broth — bagnato (wet) is the traditional request; asciutto (dry) is " +
      "available but considered less authentic. The dish is consumed standing at the cart " +
      "in the Florentine street-food tradition. It is a lunch and mid-morning food, not " +
      "typically dinner. The name derives from the lamprey — the stomach's internal " +
      "texture was thought to resemble the fish.",
    preparationNotes:
      "The abomasum (fourth stomach) is simmered for several hours in an aromatic broth " +
      "of celery, carrot, onion, tomato, and herbs until completely tender. At the cart, " +
      "it is sliced thin to order, placed in a split roll, and the top half of the roll " +
      "is dipped in the cooking broth (bagnato). Topped with salsa verde (parsley, garlic, " +
      "capers, anchovy) and a spicy red sauce (salsa piccante). Eaten immediately.",
    cuts: ["tripe"],
  },

  // ── Spain ───────────────────────────────────────────────────────────────────

  {
    id: "callos-madrilenos",
    name: "Callos a la Madrileña",
    region: "Europe — Spain (Madrid)",
    summary:
      "Spain's most famous tripe dish. Beef tripe and tendon-rich tissues slow-braised " +
      "with chorizo, morcilla, paprika, and garlic in a rich gelatinous stew.",
    culturalContext:
      "Originating in Madrid, now consumed nationwide. A fixture of traditional taverns, " +
      "winter dining, and classic Spanish restaurants. The defining dish of casquería culture.",
    preparationNotes:
      "Tripe and tendon-rich tissues braised for many hours with chorizo, morcilla, jamón, " +
      "paprika, onion, garlic, and spices. Served in earthenware.",
    cuts: ["tripe", "tendon"],
  },
  {
    id: "rinones-al-jerez",
    name: "Riñones al Jerez",
    region: "Europe — Spain (Andalusia)",
    summary:
      "Kidneys quickly sautéed and finished with Jerez sherry. One of Spain's most iconic " +
      "offal tapas, especially associated with Andalusia and sherry-producing regions.",
    culturalContext:
      "A classic of tapas bar culture. Sherry production regions in Andalusia developed the " +
      "most celebrated versions. Frequently appears in traditional Spanish cookbooks.",
    preparationNotes:
      "Kidneys carefully cleaned, sliced, quickly sautéed in olive oil with garlic and " +
      "parsley, deglazed with fino or amontillado sherry.",
    cuts: ["kidney"],
  },

  // ── Nigeria ──────────────────────────────────────────────────────────────────

  {
    id: "orishirishi",
    name: "Orishirishi — Nigerian Assorted Meat",
    region: "Africa — Nigeria",
    summary:
      "The foundational Nigerian offal tradition. Multiple organs and connective tissues " +
      "combined into soups, stews, and pepper soups. Not a single dish but a cultural " +
      "system of whole-animal utilization.",
    culturalContext:
      "Consumed across all ethnic groups and economic classes. Appears in street food, " +
      "home cooking, and celebratory meals. Ponmo and shaki are its most commercially " +
      "important components.",
    preparationNotes:
      "Organs boiled separately until tender, then combined in heavily seasoned soups " +
      "with peppers, onions, stock cubes, and local spice blends.",
    cuts: ["tripe", "heart", "kidney", "liver", "intestines", "tongue", "head_cheek"],
  },
  {
    id: "ponmo",
    name: "Ponmo",
    region: "Africa — Nigeria",
    summary:
      "Nigeria's most commercially important cattle by-product. Beef skin singed, scraped, " +
      "boiled, and added to soups and stews for texture. Consumed across all social classes.",
    culturalContext:
      "Functions almost as its own food category. Demand is strong enough that ponmo is " +
      "traded as an independent commodity. Valued for chewy texture and collagen rather " +
      "than flavor.",
    preparationNotes:
      "Skin singed over flame, scraped clean, boiled until soft. Added to pepper soup, " +
      "stews, and rice dishes. Texture ranges from firm to soft depending on cooking time.",
    cuts: ["skin"],
  },

  // ── Philippines ──────────────────────────────────────────────────────────────

  {
    id: "kare-kare",
    name: "Kare-Kare",
    region: "Asia — Philippines",
    summary:
      "One of the Philippines' most important national dishes. Tripe and tendon simmered " +
      "in a rich peanut sauce, served with bagoong (fermented shrimp paste). A fiesta and " +
      "celebration staple.",
    culturalContext:
      "Particularly associated with Tagalog regions. Served at family celebrations, " +
      "fiestas, and special occasions. The peanut sauce and bagoong combination is a " +
      "defining Filipino flavor pairing.",
    preparationNotes:
      "Tripe and tendon simmered until very tender. Peanut sauce made from ground roasted " +
      "peanuts, annatto, and stock. Served with bagoong on the side.",
    cuts: ["tripe", "tendon"],
  },
  {
    id: "bulalo",
    name: "Bulalo",
    region: "Asia — Philippines (Batangas)",
    summary:
      "A rich bone marrow and beef shank soup. One of the Philippines' most beloved beef " +
      "dishes. Marrow is scooped directly from the bone at the table.",
    culturalContext:
      "Especially associated with Batangas and Tagaytay. A cold-weather comfort dish. " +
      "Roadside bulalo restaurants are a defining feature of the Tagaytay–Batangas corridor.",
    preparationNotes:
      "Marrow-rich bones and beef shank simmered for many hours with onion, peppercorns, " +
      "and fish sauce. Served with vegetables and rice. Marrow consumed directly from bone.",
    cuts: ["bone_marrow", "tendon"],
  },
  {
    id: "lengua-estofada",
    name: "Lengua Estofada",
    region: "Asia — Philippines",
    summary:
      "Braised beef tongue in mushroom cream sauce. A Spanish-derived festive dish that " +
      "became fully embedded in Filipino celebration cuisine.",
    culturalContext:
      "Served at fiestas, weddings, and holiday gatherings. Spanish colonial influence " +
      "preserved through Filipino adaptation. One of the most prestigious offal cuts in " +
      "Filipino festive cooking.",
    preparationNotes:
      "Tongue simmered until tender, skin removed, sliced and served in mushroom cream " +
      "sauce or tomato-based estofado braise.",
    cuts: ["tongue"],
  },
  {
    id: "goto",
    name: "Goto",
    region: "Asia — Philippines",
    summary:
      "Beef tripe rice porridge. One of Southeast Asia's most important tripe traditions " +
      "and a Filipino breakfast staple.",
    culturalContext:
      "Sold by street vendors, carinderias, and small restaurants throughout the Philippines. " +
      "A common breakfast and late-night dish. Particularly associated with urban Tagalog regions.",
    preparationNotes:
      "Tripe boiled until tender, added to rice porridge (lugaw) with ginger, garlic, fish " +
      "sauce. Topped with fried garlic, spring onion, hard-boiled egg, and calamansi.",
    cuts: ["tripe"],
  },

  // ── Turkey ───────────────────────────────────────────────────────────────────

  {
    id: "iskembe-corbasi",
    name: "İşkembe Çorbası",
    region: "Middle East — Turkey",
    summary:
      "Turkey's most famous tripe soup. Served around the clock in dedicated soup " +
      "restaurants, especially late at night and early morning. Associated with hangover " +
      "recovery and winter dining.",
    culturalContext:
      "Dedicated işkembe restaurants operate throughout Turkey. A late-night urban " +
      "institution. Strongly associated with Istanbul street food culture and traditional " +
      "soup houses.",
    preparationNotes:
      "Tripe cleaned extensively and simmered for many hours. Served as garlic-rich soup " +
      "with vinegar, lemon juice, and red pepper flakes on the side.",
    cuts: ["tripe"],
  },
  {
    id: "kokorec",
    name: "Kokoreç",
    region: "Middle East — Turkey",
    summary:
      "Turkey's defining intestine tradition. Cleaned intestines wrapped around sweetbreads " +
      "and fatty internal tissues, skewered and roasted over charcoal, then chopped and " +
      "served in bread.",
    culturalContext:
      "One of Turkey's most famous street foods. Found throughout the country, especially " +
      "in coastal cities and Istanbul. Inseparable from late-night urban food culture.",
    preparationNotes:
      "Intestines thoroughly cleaned, wrapped tightly around uykuluk and fatty tissues on " +
      "a horizontal spit. Roasted over charcoal, basted continuously. Chopped fine on the " +
      "spit, served in bread with oregano and chili.",
    cuts: ["intestines", "sweetbreads"],
  },
  {
    id: "kelle-paca",
    name: "Kelle-Paça",
    region: "Middle East — Turkey",
    summary:
      "A whole-head and trotter soup tradition. Head meat, skin, tongue, and marrow-rich " +
      "bones simmered for many hours. One of Turkey's most important offal soup traditions.",
    culturalContext:
      "Dedicated kelle-paça soup houses operate throughout Turkey. Particularly associated " +
      "with central Anatolia. A restorative winter dish.",
    preparationNotes:
      "Head boiled for many hours. Meat, skin, and connective tissues removed from bone. " +
      "Served as soup with garlic, vinegar, and red pepper flakes.",
    cuts: ["head_cheek", "skin", "tongue", "bone_marrow"],
  },

  // ── Ethiopia ──────────────────────────────────────────────────────────────────

  {
    id: "dulet",
    name: "Dulet",
    region: "Africa — Ethiopia",
    summary:
      "Ethiopia's most important offal dish. Finely minced liver, tripe, and stomach " +
      "tissues mixed with spices and clarified butter. Served raw, lightly warmed, or sautéed.",
    culturalContext:
      "A classic of Ethiopian butcher-shop dining. Strongly associated with freshness and " +
      "communal meat-eating. Consumed during holidays, celebrations, and communal slaughter events.",
    preparationNotes:
      "Liver, tripe, and stomach tissues finely minced or chopped. Mixed with niter kibbeh, " +
      "mitmita or berbere spice blend, and onion. Served immediately, raw or lightly cooked " +
      "to order.",
    cuts: ["liver", "tripe", "heart", "kidney", "sweetbreads"],
  },

  // ── United Kingdom ───────────────────────────────────────────────────────────

  {
    id: "pressed-tongue",
    name: "Pressed Ox Tongue",
    region: "Europe — United Kingdom",
    summary:
      "Beef tongue simmered until tender, peeled, and pressed into a terrine or loaf. " +
      "A classic British butcher tradition now associated with traditional cookery and " +
      "specialist food culture.",
    culturalContext:
      "Once a standard British household item, particularly in working-class and " +
      "middle-class kitchens. The nose-to-tail revival has restored some visibility. " +
      "Associated with cold supper tables and traditional sandwich culture.",
    preparationNotes:
      "Tongue simmered with vegetables and spices, peeled, shaped and pressed while " +
      "warm, chilled overnight. Sliced cold. Pickled variants also traditional.",
    cuts: ["tongue"],
  },
  {
    id: "steak-kidney-pie",
    name: "Steak and Kidney Pie",
    region: "Europe — United Kingdom",
    summary:
      "One of Britain's most famous savory pies. Kidney cooked with beef in rich gravy, " +
      "encased in shortcrust or suet pastry. A foundational dish of British pub and home cooking.",
    culturalContext:
      "Deeply embedded in British food culture. Associated with pubs, working-class tradition, " +
      "and national identity. Devilled kidneys as a standalone breakfast tradition is a related " +
      "Victorian-era preparation.",
    preparationNotes:
      "Kidney cleaned and cubed, cooked slowly with beef, onion, stock, Worcestershire sauce, " +
      "and mustard. Encased in pastry and baked.",
    cuts: ["kidney"],
  },
  {
    id: "bone-marrow-toast",
    name: "Bone Marrow on Toast",
    region: "Europe — United Kingdom",
    summary:
      "Roasted marrow bones served with toast, parsley salad, shallots, and sea salt. " +
      "The defining dish of the British nose-to-tail revival, associated with Fergus Henderson " +
      "and St. John restaurant.",
    culturalContext:
      "Transformed from working-class thrift food into a celebrated restaurant dish. " +
      "Launched a broader revival of British offal cookery. Now found in gastropubs and " +
      "restaurants throughout the UK.",
    preparationNotes:
      "Marrow bones roasted at high heat until marrow softens. Served immediately with " +
      "sourdough toast, flat-leaf parsley salad dressed with capers and shallots, and " +
      "coarse sea salt.",
    cuts: ["bone_marrow"],
  },

  // ── Vietnam ──────────────────────────────────────────────────────────────────

  {
    id: "pho-bo",
    name: "Phở Bò",
    region: "Asia — Vietnam",
    summary:
      "Vietnam's most important beef dish and one of the world's great soup traditions. " +
      "Broth built from marrow-rich bones and collagen-rich connective tissues, served " +
      "with rice noodles and fresh herbs.",
    culturalContext:
      "Consumed at all hours, particularly breakfast and late night. Phở shops are a " +
      "defining feature of Vietnamese urban life. Northern (Hanoi) and southern (Saigon) " +
      "versions differ in broth style and toppings. Tripe and tendon are standard " +
      "mixed-cut options.",
    preparationNotes:
      "Marrow bones charred and simmered with charred onion and ginger, star anise, " +
      "cassia, cloves, and fish sauce for many hours. Served with rice noodles, sliced " +
      "beef, tripe, tendon, fresh herbs, lime, and chili.",
    cuts: ["bone_marrow", "tripe", "tendon"],
  },
  {
    id: "bo-kho",
    name: "Bò Kho",
    region: "Asia — Vietnam",
    summary:
      "Vietnam's most famous beef stew. Tendon and marrow-enriched broth slow-cooked " +
      "with lemongrass, star anise, and annatto. Served with bread or noodles.",
    culturalContext:
      "Popular throughout Vietnam, especially in southern regions. A street food and " +
      "home-cooking staple. The tendon component is prized for its gelatinous texture " +
      "after long braising.",
    preparationNotes:
      "Beef and tendon marinated with lemongrass, fish sauce, and spices, then braised " +
      "with annatto oil, star anise, lemongrass, and tomato until deeply flavored. " +
      "Tendon cooked until gelatinous.",
    cuts: ["tendon", "bone_marrow"],
  },
  {
    id: "long-bo",
    name: "Lòng Bò Traditions",
    region: "Asia — Vietnam",
    summary:
      "Vietnam's broader beef-offal culture, organized around the concept of lòng (entrails). " +
      "Multiple organs served boiled, grilled, or in hot pots with herbs, fish sauce, and chili.",
    culturalContext:
      "Lòng is an organizing cultural category covering internal organs across Vietnamese " +
      "cuisine. Beef lòng traditions are especially strong in southern Vietnam and " +
      "drinking-food contexts.",
    preparationNotes:
      "Organs cleaned thoroughly, boiled until tender, sliced and served with mắm tôm " +
      "(fermented shrimp paste), lime, fresh herbs, and chili. Also served in hot pots " +
      "and rice porridge.",
    cuts: ["intestines", "tripe", "liver", "heart", "kidney"],
  },

  // ── Morocco ──────────────────────────────────────────────────────────────────

  {
    id: "boulfaf",
    name: "Boulfaf",
    region: "Africa — Morocco",
    summary:
      "Morocco's most iconic offal dish. Fresh liver wrapped in caul fat, skewered, " +
      "and grilled immediately after slaughter. A centerpiece of Eid al-Adha cooking.",
    culturalContext:
      "Among the first foods prepared and shared following Eid slaughter. Symbolizes " +
      "generosity and communal celebration. The caul fat wrapping bastes the liver during " +
      "grilling. Found at market grills year-round in urban areas.",
    preparationNotes:
      "Liver cubed and seasoned with cumin, paprika, salt, and herbs. Wrapped in caul fat " +
      "(épiploon), skewered, grilled over charcoal until caul fat renders and crisps. " +
      "Served immediately.",
    cuts: ["liver"],
  },
  {
    id: "douara",
    name: "Douara",
    region: "Africa — Morocco",
    summary:
      "A Moroccan offal stew combining intestines and stomach tissues, spiced with cumin, " +
      "saffron, ginger, paprika, and preserved lemon. Especially associated with Eid al-Adha.",
    culturalContext:
      "Prepared in homes across Morocco following slaughter. A complex dish requiring " +
      "extensive cleaning and long cooking. Regional variations exist across Fez, Marrakesh, " +
      "and Casablanca.",
    preparationNotes:
      "Intestines and stomach thoroughly cleaned, cut, and braised with cumin, saffron, " +
      "paprika, ginger, garlic, preserved lemon, and herbs. Cooked until tender and " +
      "deeply spiced.",
    cuts: ["intestines", "tripe"],
  },
  {
    id: "eid-organ-grill",
    name: "Eid al-Adha Organ Grills",
    region: "Africa — Morocco",
    summary:
      "The immediate post-slaughter grilling tradition of Eid al-Adha. Fresh organs " +
      "seasoned simply and grilled over charcoal within hours of slaughter.",
    culturalContext:
      "Practiced across Morocco and the broader Muslim world. The freshness and immediacy " +
      "is culturally central — organs are consumed the same day as slaughter. A family " +
      "and communal celebration.",
    preparationNotes:
      "Organs cleaned and cut, seasoned with cumin, paprika, salt, and sometimes chermoula. " +
      "Grilled quickly over charcoal. Liver is usually first; heart, kidneys, and sweetbreads follow.",
    cuts: ["liver", "heart", "kidney", "sweetbreads", "testicles"],
  },

  // ── Peru ─────────────────────────────────────────────────────────────────────

  {
    id: "anticuchos",
    name: "Anticuchos",
    region: "South America — Peru",
    summary:
      "Peru's most iconic street food and arguably the strongest single-organ culinary " +
      "tradition in the world. Beef heart marinated in ají panca, vinegar, garlic, and " +
      "cumin, skewered and grilled over charcoal.",
    culturalContext:
      "Originating in Afro-Peruvian communities, now a national symbol consumed across all " +
      "social classes. Dedicated vendors (anticucheras) are a defining feature of evening " +
      "street-food culture. Heart is the primary cut; intestines (choncholí) and sweetbreads " +
      "(mollejas) are standard variants.",
    preparationNotes:
      "Heart trimmed of fat and membrane, cubed, marinated overnight in ají panca paste, " +
      "red wine vinegar, garlic, cumin, and oregano. Skewered and grilled over charcoal. " +
      "Served with boiled potato, corn, and rocoto sauce.",
    cuts: ["heart", "intestines", "sweetbreads", "kidney"],
  },
  {
    id: "cau-cau",
    name: "Cau Cau",
    region: "South America — Peru",
    summary:
      "One of Lima's most important criollo dishes. Tripe diced and cooked with onions, " +
      "garlic, turmeric, potatoes, and mint. A cornerstone of Peruvian home cooking.",
    culturalContext:
      "Associated with Lima's criollo tradition and Afro-Peruvian culinary heritage. " +
      "Common in homes, markets, and traditional restaurants. The mint (hierbabuena) is " +
      "a defining flavor marker.",
    preparationNotes:
      "Tripe cleaned and boiled until tender, diced, then cooked with sofrito of onion, " +
      "garlic, turmeric, ají amarillo. Potatoes and hierbabuena added. Served with white rice.",
    cuts: ["tripe"],
  },

  // ── Japan ────────────────────────────────────────────────────────────────────

  {
    id: "horumon-yaki",
    name: "Horumon-Yaki",
    region: "Asia — Japan",
    summary:
      "Japan's defining offal grill tradition. Multiple organ cuts grilled over charcoal " +
      "at specialized restaurants. One of the world's most anatomically precise offal systems.",
    culturalContext:
      "Deeply embedded in Japanese drinking culture and yakiniku dining. Osaka is the " +
      "cultural center. Restaurants distinguish many sub-cuts — shimachō, mino, shibire, " +
      "hatsu — as separate menu items.",
    preparationNotes:
      "Organs cleaned and portioned to order. Grilled over charcoal with salt (shio) or " +
      "tare sauce. Intestines valued for rendered fat; sweetbreads for creamy texture; " +
      "heart for firm bite.",
    cuts: ["intestines", "tripe", "liver", "heart", "sweetbreads", "kidney"],
  },
  {
    id: "motsu-nabe",
    name: "Motsu-Nabe",
    region: "Asia — Japan (Fukuoka)",
    summary:
      "Fukuoka's most famous dish. Beef intestines and tripe simmered in miso or soy " +
      "broth with cabbage, garlic chives, garlic, and chili. One of Japan's most important " +
      "regional offal hot-pot traditions.",
    culturalContext:
      "Motsu-nabe became a Fukuoka cultural icon and spread nationally. Especially " +
      "associated with post-work drinking culture and cold-weather dining.",
    preparationNotes:
      "Intestines cleaned and blanched. Simmered in dashi-based broth with miso or soy, " +
      "nira (garlic chives), cabbage, garlic, and togarashi. Finished with champon noodles.",
    cuts: ["intestines", "tripe"],
  },
  {
    id: "gyutan-culture",
    name: "Gyūtan — Sendai Tongue Tradition",
    region: "Asia — Japan (Sendai)",
    summary:
      "Japan's most famous tongue tradition and one of the world's strongest single-organ " +
      "culinary traditions. Thick-sliced aged tongue grilled over charcoal, served with " +
      "barley rice and oxtail soup.",
    culturalContext:
      "Sendai is nationally synonymous with gyūtan. Specialized restaurants exist throughout " +
      "Japan. Unlike most countries where tongue remains niche, Japanese consumers treat " +
      "gyūtan as a mainstream and desirable cut.",
    preparationNotes:
      "Tongue aged and seasoned, sliced thick (shio-tan) or thin, grilled over charcoal " +
      "until lightly charred. Served with mugi gohan (barley rice), pickled vegetables, " +
      "and oxtail soup (tenziru).",
    cuts: ["tongue"],
  },
  {
    id: "gyusuji-traditions",
    name: "Gyūsuji Nikomi",
    region: "Asia — Japan (Kansai)",
    summary:
      "Kansai's beloved tendon stew. Beef tendon simmered for many hours in soy, miso, " +
      "sake, and mirin until gelatinous. A classic izakaya and home-cooking tradition.",
    culturalContext:
      "Tendon is sought out intentionally by Japanese diners rather than treated as a " +
      "secondary by-product. Gyūsuji nikomi is especially associated with Osaka izakaya " +
      "culture. Doteni is the Nagoya variant using hatcho miso.",
    preparationNotes:
      "Tendon blanched, then simmered for 2–3 hours with konnyaku, soy sauce, sake, " +
      "mirin, sugar, and ginger. Served in small portions as izakaya drinking food.",
    cuts: ["tendon"],
  },

  // ── Chile ────────────────────────────────────────────────────────────────────

  {
    id: "guatitas-chilenas",
    name: "Guatitas a la Chilena",
    region: "South America — Chile",
    summary:
      "Chile's most important offal dish. Tripe slow-cooked with onions, garlic, potatoes, " +
      "peas, paprika, and vegetables into a hearty stew. A cornerstone of traditional " +
      "Chilean home cooking.",
    culturalContext:
      "Found throughout Chile in homes, traditional restaurants, and markets. Comparable in " +
      "national importance to Peru's cau cau, Spain's callos, and Mexico's menudo. Strongly " +
      "associated with working-class and family cuisine.",
    preparationNotes:
      "Tripe cleaned and boiled until tender, then stewed with sofrito of onion, garlic, " +
      "carrots, potatoes, peas, paprika, and spices. Served with bread or rice.",
    cuts: ["tripe"],
  },
  {
    id: "chunchules-asados",
    name: "Chunchules Asados",
    region: "South America — Chile",
    summary:
      "Chile's most distinctive intestine tradition. Cleaned intestines grilled over charcoal " +
      "until crisp outside and tender inside. A defining feature of Chilean rural barbecue " +
      "and fonda culture.",
    culturalContext:
      "Especially associated with rural southern Chile and Fiestas Patrias celebrations. " +
      "Related to Argentine chinchulines but with its own Chilean identity. Common at " +
      "traditional markets and outdoor cookouts.",
    preparationNotes:
      "Intestines cleaned thoroughly, seasoned with salt, grilled over charcoal. " +
      "Served with lemon and pebre (Chilean herb sauce).",
    cuts: ["intestines"],
  },

  // ── Uruguay ──────────────────────────────────────────────────────────────────

  {
    id: "achuras-uruguayas",
    name: "Achuras Uruguayas",
    region: "South America — Uruguay",
    summary:
      "The offal framework of Uruguayan asado. Sweetbreads, chinchulines, and kidneys served " +
      "as the opening course of a parrilla. One of the world's elite offal cultures, organized " +
      "around collective prestige of multiple cuts rather than a single organ.",
    culturalContext:
      "Offal is not niche in Uruguay — it is a standard and celebrated part of barbecue culture " +
      "consumed at family gatherings, football events, holiday celebrations, and restaurant " +
      "parrillas. Mollejas are the prestige cut; chinchulines and riñones are the workhorses. " +
      "Arguably more achura-focused than Argentina.",
    preparationNotes:
      "All cuts grilled over wood embers or charcoal. Mollejas blanched first then grilled until " +
      "crisp. Chinchulines cleaned and grilled until golden. Riñones split and grilled simply " +
      "with salt. Served with lemon and chimichurri.",
    cuts: ["sweetbreads", "intestines", "kidney", "heart", "tongue"],
  },

  // ── Germany ──────────────────────────────────────────────────────────────────

  {
    id: "saure-kutteln",
    name: "Saure Kutteln",
    region: "Europe — Germany (Swabia)",
    summary:
      "Germany's most important tripe tradition. Tripe boiled until tender, sliced into strips, " +
      "and cooked in a tangy vinegar-based sauce with onions, wine, and herbs. A defining dish " +
      "of Swabian cuisine.",
    culturalContext:
      "Centered in Baden-Württemberg but recognized throughout Germany as the country's flagship " +
      "tripe preparation. Symbol of southern German butcher and tavern culture. Sometimes called " +
      "Flecke in regional variants.",
    preparationNotes:
      "Tripe cleaned and simmered until tender, sliced into strips. Cooked in roux-based or " +
      "vinegar-based sauce with onions, white wine, marjoram, and bay leaf. Served with bread " +
      "or Spätzle.",
    cuts: ["tripe"],
  },
  {
    id: "markklosschen",
    name: "Markklößchensuppe",
    region: "Europe — Germany",
    summary:
      "Germany's most distinctive marrow tradition. Bone marrow mixed into dumplings and simmered " +
      "in clear beef broth. A classic of traditional German and Austrian-influenced cooking.",
    culturalContext:
      "Found in traditional restaurants, home cooking, and Sunday lunch traditions throughout " +
      "Germany. Transforms marrow into a dumpling ingredient rather than serving it directly — " +
      "an approach unique in global marrow traditions.",
    preparationNotes:
      "Marrow extracted from bones, mixed with egg, breadcrumbs, parsley, salt, and nutmeg into " +
      "small dumplings. Poached in clear beef broth and served as soup course.",
    cuts: ["bone_marrow"],
  },

  // ── Hungary ──────────────────────────────────────────────────────────────────

  {
    id: "pacalporkolt",
    name: "Pacalpörkölt",
    region: "Europe — Hungary",
    summary:
      "Hungary's most important offal dish and one of Europe's premier tripe traditions. Tripe " +
      "slow-stewed with onions, lard, paprika, garlic, and peppers in the classic pörkölt style.",
    culturalContext:
      "Nationally recognized and found in homes, traditional csárda restaurants, and cooking " +
      "competitions throughout Hungary. Ranks alongside France's tripes à la mode de Caen, " +
      "Spain's callos, and Italy's trippa alla romana as a defining European tripe dish.",
    preparationNotes:
      "Tripe cleaned and boiled until tender. Onions sweated in lard until soft, sweet paprika " +
      "added off heat. Tripe added with garlic, peppers, and stock. Simmered slowly until sauce " +
      "thickens. Served with bread or potatoes.",
    cuts: ["tripe"],
  },
  {
    id: "hungarian-porkolt-offal",
    name: "Hungarian Pörkölt Offal Tradition",
    region: "Europe — Hungary",
    summary:
      "Hungary's broader offal framework. Multiple organs prepared in the paprika-based pörkölt " +
      "style — a uniquely Hungarian approach that transforms nearly any organ into a rich, " +
      "deeply spiced stew.",
    culturalContext:
      "Paprika is the defining flavor marker across all Hungarian offal preparations. The pörkölt " +
      "technique unifies diverse organs under a single culinary identity. Hungary maintains one " +
      "of Europe's broadest surviving multi-organ traditions.",
    preparationNotes:
      "Base of onions sweated in lard, paprika bloomed off heat, organ meat added with garlic " +
      "and peppers. Long slow simmer until tender. Each organ type has its own timing and " +
      "cleaning requirements.",
    cuts: ["tripe", "heart", "kidney", "liver", "testicles", "head_cheek"],
  },
  {
    id: "velős-csont",
    name: "Velős Csont",
    region: "Europe — Hungary",
    summary:
      "Hungary's most important marrow tradition. Marrow bones roasted or simmered and served " +
      "with toast, paprika, parsley, and onions. One of Central Europe's most celebrated " +
      "marrow dishes.",
    culturalContext:
      "Common in Budapest restaurants and traditional Hungarian homes. Marrow on toast with " +
      "paprika and raw onion is a distinctively Hungarian preparation that differs from the " +
      "French and British versions in its spicing.",
    preparationNotes:
      "Marrow bones roasted or poached in broth. Marrow served directly from bone or spread " +
      "on toast. Seasoned with coarse salt, sweet paprika, chopped raw onion, and parsley.",
    cuts: ["bone_marrow"],
  },
  {
    id: "bikahere-porkolt",
    name: "Bikahere Pörkölt",
    region: "Europe — Hungary",
    summary:
      "Hungary's bull testicle stew. One of Europe's most prominent surviving testicle traditions. " +
      "Prepared in the classic pörkölt style with paprika, onions, garlic, and lard.",
    culturalContext:
      "Well known in rural areas, hunting lodges, and traditional butcher culture throughout " +
      "Hungary. Unusually prominent by European standards — few countries maintain a nationally " +
      "recognizable testicle preparation. Associated with strength and traditional masculine foodways.",
    preparationNotes:
      "Testicles cleaned and membrane removed, cut into pieces. Sweated with onions and lard, " +
      "paprika added, then slow-simmered with garlic, peppers, and stock until tender. " +
      "Served with bread.",
    cuts: ["testicles"],
  },

  // ── India ────────────────────────────────────────────────────────────────────

  {
    id: "gurda-kaleji",
    name: "Gurda-Kaleji",
    region: "South Asia — India (North India / Mughlai)",
    summary:
      "North India's most important named offal tradition. Kidney and liver rapidly stir-fried " +
      "together with onions, ginger, garlic, tomatoes, green chilies, and garam masala. Found " +
      "in street markets, Muslim neighborhoods, and Eid celebrations throughout the Mughlai belt.",
    culturalContext:
      "Gurda-kaleji stalls are a defining feature of evening food culture in Delhi, Lucknow, " +
      "Aligarh, and other historic Mughlai centers. Arguably the strongest kidney-based tradition " +
      "in South Asia.",
    preparationNotes:
      "Both organs cleaned separately. Liver and kidney stir-fried rapidly in hot oil to preserve " +
      "tenderness. Onions, ginger-garlic paste, tomatoes, green chilies, coriander, and garam " +
      "masala added. Finished with fresh coriander and lemon.",
    cuts: ["kidney", "liver"],
  },
  {
    id: "siri-paya",
    name: "Siri-Paya",
    region: "South Asia — India / Pakistan",
    summary:
      "One of the most important collagen-rich traditions in the Muslim world. Head meat and " +
      "trotters simmered overnight with aromatic spices into a richly gelatinous broth. Consumed " +
      "as breakfast in traditional neighborhoods across North India, Hyderabad, and Kolkata.",
    culturalContext:
      "Associated with old-city Muslim neighborhoods, Ramadan culture, and communal feasting. " +
      "Specialist siri-paya vendors open before dawn. The dish is as important in Pakistan as " +
      "in India — a shared culinary heritage across the subcontinent.",
    preparationNotes:
      "Head meat and trotters cleaned and simmered overnight with onions, ginger, garlic, whole " +
      "spices, and aromatic masala. Broth becomes deeply gelatinous. Served with naan, fresh " +
      "ginger, green chili, and lemon.",
    cuts: ["head_cheek", "bone_marrow"],
  },
  {
    id: "ojhri-tradition",
    name: "Ojhri",
    region: "South Asia — India (North India / Mughlai)",
    summary:
      "North India's major digestive-organ tradition. Intestines and stomach tissues extensively " +
      "cleaned and slow-cooked in chili-rich masalas. Especially associated with Eid slaughter " +
      "and traditional Muslim eateries.",
    culturalContext:
      "Dedicated ojhri vendors exist in some cities. Particularly prominent during Eid al-Adha. " +
      "Remains an important community food despite declining mainstream visibility.",
    preparationNotes:
      "Extensive cleaning essential. Braised with onions, ginger, garlic, turmeric, coriander, " +
      "cumin, chili, and garam masala until tender.",
    cuts: ["intestines", "tripe"],
  },
  {
    id: "marag",
    name: "Marag",
    region: "South Asia — India (Hyderabad)",
    summary:
      "One of the most important marrow-rich soups in South Asia. Marrow bones simmered for " +
      "many hours with onions, spices, ginger, garlic, and sometimes cream or yogurt. A " +
      "Hyderabadi wedding staple.",
    culturalContext:
      "Traditionally served at Hyderabadi Muslim weddings and major celebrations. Rich, white, " +
      "fragrant broth. Considered a mark of culinary prestige. Classified globally alongside " +
      "nihari, bulalo, and gomtang as a premier marrow soup tradition.",
    preparationNotes:
      "Marrow-rich bones simmered many hours with onions, whole spices, green chilies, ginger, " +
      "garlic, and yogurt. Broth strained and finished with fried onions, fresh coriander, " +
      "and lemon.",
    cuts: ["bone_marrow"],
  },
  {
    id: "kapura-fry",
    name: "Kapura Fry",
    region: "South Asia — India (Hyderabad)",
    summary:
      "Hyderabad's most distinctive glandular offal tradition. In Hyderabadi restaurant culture, " +
      "kapura most commonly refers to testicles, parboiled and fried with onions, green chilies, " +
      "black pepper, and garam masala.",
    culturalContext:
      "One of India's strongest testicle traditions and unusually visible in a commercial " +
      "restaurant context. Hyderabad's kapura culture is more developed than almost anywhere " +
      "else in South Asia. Note: kapura terminology is not standardized across India — see " +
      "terminologyNote on IN testicles and sweetbreads entries.",
    preparationNotes:
      "Parboiled, membrane removed, sliced. Fried in oil with onions, ginger-garlic paste, " +
      "green chilies, black pepper, coriander, and garam masala. Finished with lemon.",
    cuts: ["testicles", "sweetbreads"],
  },
  {
    id: "botti-curry",
    name: "Botti Curry / Botti Roast",
    region: "South Asia — India (Kerala)",
    summary:
      "Kerala's most important tripe tradition and arguably the strongest tripe preparation in " +
      "India. Tripe pressure-cooked then simmered with black pepper, curry leaves, coconut oil, " +
      "and spices.",
    culturalContext:
      "Found throughout Kerala in homes, roadside restaurants, toddy shops, and Muslim eateries. " +
      "Unlike North Indian tripe traditions that favor slow gravies, Kerala's botti uses the " +
      "distinctive pepper-and-curry-leaf flavor profile of the region.",
    preparationNotes:
      "Tripe cleaned and pressure-cooked. Simmered with onions, ginger, garlic, black pepper, " +
      "chili, turmeric, coriander, curry leaves, and coconut oil. Dry-roast (ularthiyathu) " +
      "variant reduces gravy until coating.",
    cuts: ["tripe"],
  },
  {
    id: "chaal-roast",
    name: "Chaal Roast",
    region: "South Asia — India (Kerala / Malabar)",
    summary:
      "Kerala's defining intestine tradition and one of the strongest in South Asia. Beef " +
      "intestines pressure-cooked then roasted with black pepper, curry leaves, fennel, coconut " +
      "oil, and spices.",
    culturalContext:
      "Especially important in Malabar Muslim cuisine and toddy-shop culture. Chaal roast is a " +
      "recognized specialty rather than an everyday dish. Far more prominent in Kerala than " +
      "intestine dishes elsewhere in India.",
    preparationNotes:
      "Intestines cleaned extensively and pressure-cooked. Roasted with onions, ginger, garlic, " +
      "black pepper, chili, fennel, curry leaves, and coconut oil until dry and well-coated.",
    cuts: ["intestines"],
  },
  {
    id: "karal-fry",
    name: "Karal Fry",
    region: "South Asia — India (Kerala)",
    summary:
      "Kerala's most common liver preparation. Liver quickly stir-fried with onions, black " +
      "pepper, curry leaves, ginger, garlic, and coconut oil. Ubiquitous in restaurants, toddy " +
      "shops, and home cooking.",
    culturalContext:
      "One of the most everyday offal preparations in India. Karal fry appears across communities " +
      "— Christian, Muslim, and many Hindu households. The black pepper and curry leaf combination " +
      "is distinctively Keralite.",
    preparationNotes:
      "Liver sliced thin and marinated briefly with turmeric, chili, and pepper. Stir-fried " +
      "rapidly in hot coconut oil with onions, ginger, garlic, green chilies, curry leaves, " +
      "and black pepper. Finished with fresh coriander.",
    cuts: ["liver"],
  },
  {
    id: "naakku-roast",
    name: "Naakku Roast",
    region: "South Asia — India (Kerala)",
    summary:
      "Kerala's most important tongue tradition and one of India's strongest. Tongue pressure- " +
      "cooked, peeled, sliced, then roasted with onions, curry leaves, black pepper, and " +
      "coconut oil.",
    culturalContext:
      "Appears in Christian households, Muslim kitchens, and specialty restaurants. Tongue roast " +
      "is especially common during festive meals and family gatherings. Kerala treats tongue as " +
      "a prestige cut rather than an everyday ingredient.",
    preparationNotes:
      "Tongue pressure-cooked until tender, skin peeled, sliced. Roasted with onions, ginger, " +
      "garlic, black pepper, green chilies, curry leaves, coconut oil, and garam masala until " +
      "dry and well-coated.",
    cuts: ["tongue"],
  },
  {
    id: "thala-curry",
    name: "Thala Curry",
    region: "South Asia — India (Kerala)",
    summary:
      "Kerala's head-meat tradition. Head pressure-cooked then simmered with onions, black " +
      "pepper, curry leaves, and roasted spices. Widely consumed across Christian, Muslim, and " +
      "some Hindu communities.",
    culturalContext:
      "Head meat is particularly valued in Muslim and Syrian Christian communities. Thala curry " +
      "is a recognized specialty in many parts of Kerala rather than a generic preparation.",
    preparationNotes:
      "Head meat pressure-cooked with turmeric, salt, and water. Simmered with onions, ginger, " +
      "garlic, black pepper, coriander, curry leaves, coconut oil, and roasted coconut paste.",
    cuts: ["head_cheek"],
  },
  {
    id: "lingua-vindalho",
    name: "Lingua Vindalho",
    region: "South Asia — India (Goa)",
    summary:
      "Goa's most important tongue tradition and one of India's most distinctive. Tongue cooked " +
      "in vinegar-rich vindalho masala. A centerpiece of Goan Catholic feast cuisine.",
    culturalContext:
      "Served at Goan Catholic weddings, Christmas celebrations, and parish feasts. The vindalho " +
      "technique — deriving from Portuguese vinha d'alhos — transforms tongue into a festive " +
      "centerpiece. Many Goan cooks consider it a premium ingredient.",
    preparationNotes:
      "Tongue simmered until tender, peeled, sliced. Cooked in vindalho masala of vinegar, " +
      "garlic, dried red chilies, cumin, cinnamon, cloves, and ginger until sauce thickens " +
      "and coats the meat.",
    cuts: ["tongue"],
  },
  {
    id: "northeast-whole-animal",
    name: "Northeast India Whole-Animal Beef Tradition",
    region: "South Asia — India (Northeast)",
    summary:
      "One of Asia's most comprehensive surviving whole-animal bovine food systems. Across " +
      "Meghalaya, Nagaland, Mizoram, and hill regions of Assam, cattle are utilized with " +
      "minimal waste through boiling, smoking, roasting, and fermentation-adjacent cooking.",
    culturalContext:
      "The cultural unit is the slaughter event, not the individual recipe. Many preparations " +
      "are community-specific and do not have standardized names. Northeast India has India's " +
      "strongest intestine culture, strongest head-meat culture, and most complete whole-animal " +
      "utilization. Comparable in comprehensiveness to Ethiopian dulet culture and highland " +
      "Southeast Asian traditions.",
    preparationNotes:
      "Methods vary by community — boiling, smoking, grilling, roasting, and slow-stewing. " +
      "Black pepper, local herbs, fermented soybean products, and chilies are common flavor " +
      "markers. Smoked offal is especially important in Nagaland.",
    cuts: [
      "tongue", "tripe", "liver", "heart", "kidney",
      "intestines", "skin", "tendon", "head_cheek", "bone_marrow",
    ],
  },

  // ── Greece ───────────────────────────────────────────────────────────────────

  {
    id: "kokoretsi",
    name: "Kokoretsi",
    region: "Europe — Greece",
    speciesNote: "Traditionally lamb at Easter; beef and mixed versions documented. Culinary tradition applies to bovine offal.",
    summary:
      "Greece's most important offal tradition and one of the world's great whole-organ roasting " +
      "systems. Seasoned organs wrapped in cleaned intestines, skewered, and slowly roasted over " +
      "charcoal or open fire.",
    culturalContext:
      "A defining dish of Greek Orthodox Easter. Virtually every Greek is familiar with kokoretsi. " +
      "Associated with village feasts, family celebrations, and outdoor roasting. Structurally " +
      "similar to Turkish kokoreç — both traditions wrap organs in intestines for spit-roasting, " +
      "likely sharing Ottoman-era origins.",
    preparationNotes:
      "Organs seasoned with oregano, salt, pepper, and lemon. Wrapped tightly in intestines on a " +
      "horizontal spit. Roasted slowly over charcoal for 2–3 hours, basted with lemon and herbs. " +
      "Sliced and served immediately.",
    cuts: ["intestines", "sweetbreads", "liver", "heart", "kidney"],
  },
  {
    id: "patsas",
    name: "Patsás",
    region: "Europe — Greece",
    summary:
      "Greece's most important tripe tradition and one of the strongest in southeastern Europe. " +
      "Tripe boiled for many hours and served as a garlic-rich soup with vinegar, lemon, and paprika.",
    culturalContext:
      "Patsás shops historically operated throughout Greece and remain common in Athens and " +
      "Thessaloniki. Strongly associated with late-night dining, hangover recovery, and working- " +
      "class food culture. Structurally parallel to Turkish işkembe çorbası — both are late-night " +
      "tripe soups with garlic and vinegar.",
    preparationNotes:
      "Tripe cleaned extensively and simmered for many hours until tender. Served as soup with " +
      "garlic sauce, vinegar, lemon juice, and paprika. Often eaten very late at night or early morning.",
    cuts: ["tripe"],
  },
  {
    id: "greek-easter-offal",
    name: "Greek Easter Offal Tradition",
    region: "Europe — Greece",
    speciesNote: "Primarily lamb at Easter; beef versions consumed year-round.",
    summary:
      "The organizing framework for Greek offal culture. Multiple organs grilled, skewered, and " +
      "roasted during Orthodox Easter celebrations. Easter is the principal annual driver of organ " +
      "consumption in Greece.",
    culturalContext:
      "Orthodox Easter is the most important food event in the Greek calendar. Whole animals are " +
      "roasted on the spit. Organs are consumed separately — as kokoretsi, as mixed grills, or in " +
      "soups. Head, sweetbreads, testicles, and liver are all part of the Easter offal tradition.",
    preparationNotes:
      "Each organ grilled or roasted with olive oil, oregano, lemon, and salt. Kokoretsi is the " +
      "centerpiece. Liver and heart are often grilled first as the fire establishes. Sweetbreads " +
      "and testicles follow.",
    cuts: ["intestines", "sweetbreads", "liver", "kidney", "heart", "testicles", "head_cheek"],
  },

  // ── Indonesia ─────────────────────────────────────────────────────────────────

  {
    id: "soto-jeroan",
    name: "Soto Jeroan",
    region: "Asia — Indonesia",
    summary:
      "Indonesia's most important offal soup framework. Multiple organs simmered in spiced broth " +
      "and served with rice, vermicelli, fried shallots, and sambal.",
    culturalContext:
      "Soto is one of Indonesia's national dishes. The jeroan version incorporates multiple offal " +
      "cuts into the same bowl. Found nationwide in street stalls, warungs, and restaurants. Among " +
      "the world's most diverse single-bowl offal traditions.",
    preparationNotes:
      "Organs cleaned and blanched separately. Broth built from beef bones, lemongrass, galangal, " +
      "turmeric, ginger, garlic, and shallots. Organs added and simmered until tender. Served with " +
      "rice or vermicelli, fried shallots, lime, sambal, and kecap manis.",
    cuts: ["tripe", "intestines", "liver", "heart", "kidney", "skin", "tendon"],
  },
  {
    id: "padang-offal",
    name: "Padang Beef Offal",
    region: "Asia — Indonesia (West Sumatra)",
    summary:
      "West Sumatra's Minangkabau cuisine produces one of the world's most complete whole-animal " +
      "beef systems. Tripe, tendon, skin, and marrow are all cooked in rich coconut-milk curries " +
      "with complex spice pastes.",
    culturalContext:
      "Padang restaurants (Rumah Makan Padang) operate throughout Indonesia and internationally, " +
      "spreading Minangkabau offal traditions nationwide. The Padang system is unusual because it " +
      "treats connective tissues — skin, tendon — with the same culinary seriousness as organs.",
    preparationNotes:
      "Each cut cooked separately in rendang-adjacent or gulai-style coconut milk curry with " +
      "turmeric, galangal, lemongrass, chili, garlic, and shallots. Served at room temperature " +
      "in small dishes alongside rice.",
    cuts: ["tripe", "tendon", "skin", "bone_marrow", "head_cheek", "intestines"],
  },
  {
    id: "kikil",
    name: "Kikil",
    region: "Asia — Indonesia",
    summary:
      "Indonesia's most important cattle-skin tradition and one of the strongest in the world. " +
      "Beef skin boiled until gelatinous, then incorporated into soto, curries, and spicy stews.",
    culturalContext:
      "Kikil is a highly valued ingredient rather than a marginal by-product. Dedicated kikil soto " +
      "and kikil dishes are common in Surabaya and Java. The prized quality is the gelatinous, " +
      "chewy texture after long cooking. Globally comparable to Nigerian ponmo in cultural prominence.",
    preparationNotes:
      "Skin singed, scraped, and boiled until tender and gelatinous. Incorporated into soto broth, " +
      "gulai curry, or spicy sambal stews. Served with rice and condiments.",
    cuts: ["skin"],
  },
  {
    id: "sate-jeroan",
    name: "Sate Jeroan",
    region: "Asia — Indonesia",
    summary:
      "Indonesia's grilled offal satay tradition. Multiple organs skewered and grilled over charcoal, " +
      "served with peanut sauce or kecap manis.",
    culturalContext:
      "Sate vendors throughout Indonesia offer jeroan alongside muscle-meat satay. Intestines, heart, " +
      "liver, and kidney are standard offerings. A defining feature of Indonesian street-food culture.",
    preparationNotes:
      "Organs cleaned and cubed. Marinated briefly with garlic, shallots, coriander, and sweet soy " +
      "sauce. Skewered and grilled over charcoal. Served with peanut sauce, lontong (compressed rice), " +
      "and pickled vegetables.",
    cuts: ["intestines", "heart", "liver", "kidney"],
  },

  // ── Iran ──────────────────────────────────────────────────────────────────────

  {
    id: "kaleh-pacheh",
    name: "Kaleh Pacheh",
    region: "Middle East — Iran",
    summary:
      "One of the world's most important head-meat traditions. Head components and trotters " +
      "simmered overnight with turmeric, cinnamon, and onions. Traditionally served as breakfast " +
      "in dedicated tabbakhi restaurants.",
    culturalContext:
      "Diners may specifically order individual head components — cheek, tongue, eye, brain. " +
      "Strongly associated with winter dining, Ramadan, and traditional morning meals. Comparable " +
      "to Turkey's kelle-paça and India's siri-paya as one of the world's great head-and-collagen traditions.",
    preparationNotes:
      "Head and trotters cleaned and simmered overnight in water with turmeric, cinnamon, onions, " +
      "and salt. Served with flatbread, lemon, cinnamon, and sometimes dried mint. Each component " +
      "served separately or together per diner preference.",
    cuts: ["head_cheek", "tongue", "brain", "bone_marrow"],
  },
  {
    id: "jigaraki",
    name: "Jigaraki — Iranian Organ Grill",
    region: "Middle East — Iran",
    summary:
      "Iran's defining organ-grill tradition. Dedicated jigaraki restaurants specialize in " +
      "charcoal-grilled liver, heart, kidney, and specialty glandular organs. Late-night liver " +
      "grilling is especially prominent in urban areas.",
    culturalContext:
      "Jigaraki restaurants are a fixture of Iranian urban food culture. Liver (jegar) is the " +
      "anchor item; heart, kidney, and donbalān are ordered alongside. Served with flatbread, " +
      "grilled tomatoes, raw onion, sumac, and lemon. Structurally parallel to Turkey's offal " +
      "grill culture.",
    preparationNotes:
      "Organs cubed or sliced and skewered. Grilled over charcoal with minimal seasoning — salt, " +
      "lemon, sumac. Liver cooked quickly to preserve tenderness. Donbalān grilled whole or halved.",
    cuts: ["liver", "heart", "kidney", "sweetbreads", "testicles"],
  },
  {
    id: "sirabi-sheerdan",
    name: "Sirabi-o-Sheerdan",
    region: "Middle East — Iran",
    summary:
      "Iran's most important tripe and stomach tradition. Tripe meticulously cleaned and slowly " +
      "simmered for many hours, served in broth with bread, lemon, and spices. Associated with " +
      "breakfast culture and dedicated tripe restaurants.",
    culturalContext:
      "Dedicated sirabi restaurants operate in Iranian cities, especially during colder months. " +
      "Structurally parallel to Turkey's işkembe çorbası and Greece's patsás as a late-night / " +
      "early-morning tripe soup tradition.",
    preparationNotes:
      "Tripe and stomach tissues meticulously cleaned and simmered for many hours. Served in clear " +
      "broth with flatbread, lemon juice, dried mint, and spices.",
    cuts: ["tripe"],
  },

  // ── Egypt ─────────────────────────────────────────────────────────────────────

  {
    id: "kibda-iskandarani",
    name: "Kibda Iskandarani",
    region: "Middle East — Egypt (Alexandria)",
    summary:
      "Egypt's most famous organ dish and one of the Arab world's iconic street foods. Thinly " +
      "sliced liver rapidly sautéed with garlic, cumin, coriander, chili, and vinegar, served in bread.",
    culturalContext:
      "Liver sandwiches are ubiquitous in Alexandria and throughout Egypt. The dish is known " +
      "across the Arab world as a symbol of Alexandrian street food. Working-class and widely accessible.",
    preparationNotes:
      "Liver sliced thin. Sautéed rapidly in hot oil with garlic, green pepper, cumin, coriander, " +
      "chili, and a splash of vinegar. Served immediately in baladi bread with tahini or garlic sauce.",
    cuts: ["liver"],
  },
  {
    id: "mombar",
    name: "Mombar",
    region: "Middle East — Egypt",
    summary:
      "Egypt's most important intestine tradition. Cleaned intestines stuffed with seasoned rice, " +
      "herbs, and spices, then boiled and fried until crisp. A centerpiece of Eid and family cooking.",
    culturalContext:
      "Virtually every Egyptian is familiar with mombar. Especially prominent during Eid al-Adha. " +
      "One of the strongest stuffed-intestine traditions in the Arab world. Distinct in technique " +
      "from Turkish kokoreç or Korean gopchang — stuffing rather than wrapping.",
    preparationNotes:
      "Intestines cleaned thoroughly. Stuffed with rice mixed with onion, tomato, herbs, spices, " +
      "and sometimes meat. Tied at intervals. Boiled until cooked through, then pan-fried or baked " +
      "until skin crisps.",
    cuts: ["intestines"],
  },
  {
    id: "karsha-traditions",
    name: "Karsha",
    region: "Middle East — Egypt",
    summary:
      "Egypt's principal tripe tradition. Tripe stuffed with rice and spices (mahshi style) or " +
      "slow-braised in tomato sauce with garlic. Especially prominent during Eid al-Adha and " +
      "family celebrations.",
    culturalContext:
      "One of Egypt's most recognized offal preparations. The mahshi (stuffed) version is " +
      "distinctive in global tripe traditions — few countries stuff tripe with rice. Reflects " +
      "Egypt's broader mahshi culinary tradition.",
    preparationNotes:
      "Tripe cleaned extensively. Stuffed with rice, herbs, tomato, onion, and spices. Sewn " +
      "closed and simmered in tomato sauce or broth until cooked through. Alternatively braised " +
      "flat in garlic and spice-rich tomato sauce.",
    cuts: ["tripe"],
  },

  // ── Brazil ────────────────────────────────────────────────────────────────────

  {
    id: "dobradinha",
    name: "Dobradinha",
    region: "South America — Brazil",
    summary:
      "Brazil's most important offal dish and one of Latin America's major tripe traditions. " +
      "Tripe slow-cooked with white beans, sausage, garlic, tomatoes, and bay leaves.",
    culturalContext:
      "Especially associated with Minas Gerais and Rio de Janeiro. A staple of traditional bars, " +
      "working-class restaurants, and home cooking. Portuguese culinary influence visible in the " +
      "bean-and-tripe combination. Comparable in national importance to Spain's callos and " +
      "France's tripes à la mode de Caen.",
    preparationNotes:
      "Tripe cleaned and boiled until tender. Simmered with white beans, chouriço or linguiça, " +
      "garlic, onion, tomatoes, bay leaves, and paprika. Long slow cook until beans and tripe " +
      "are both fully tender.",
    cuts: ["tripe"],
  },
  {
    id: "tutano-tradition",
    name: "Tutano Assado",
    region: "South America — Brazil",
    summary:
      "Brazil's most important marrow tradition. Marrow bones roasted or grilled and served with " +
      "bread, chimichurri, or incorporated into traditional soups. Increasingly prominent in " +
      "modern churrascaria and restaurant culture.",
    culturalContext:
      "Roasted tutano appears in traditional churrascarias and has gained renewed visibility in " +
      "modern Brazilian gastronomy. Also foundational to traditional soups and stews. Structurally " +
      "parallel to Argentine tuétano a la parrilla.",
    preparationNotes:
      "Marrow bones split or left whole. Roasted in oven or grilled over charcoal. Marrow scooped " +
      "and spread on bread with coarse salt, parsley, and lemon. Also simmered in mocotó-style " +
      "soups for collagen extraction.",
    cuts: ["bone_marrow"],
  },
  {
    id: "churrasco-miudos",
    name: "Churrasco de Miúdos",
    region: "South America — Brazil",
    summary:
      "Brazil's mixed offal grill tradition. The miúdos equivalent of Argentine achuras — organs " +
      "grilled over charcoal at churrascarias and family barbecues, especially in southern Brazil.",
    culturalContext:
      "Less formalized than Argentine or Uruguayan achura culture but structurally parallel. " +
      "Strongest in Rio Grande do Sul near the Uruguayan and Argentine borders. The term miúdos " +
      "covers organs, entrails, and secondary cuts broadly.",
    preparationNotes:
      "Organs cleaned and grilled over charcoal with salt and occasionally chimichurri. Intestines " +
      "cleaned and grilled until crisp. Sweetbreads grilled until golden. Kidneys split and " +
      "grilled simply.",
    cuts: ["intestines", "kidney", "heart", "sweetbreads"],
  },

  // ── Pakistan ──────────────────────────────────────────────────────────────────

  {
    id: "nihari-pk",
    name: "Nihari",
    region: "South Asia — Pakistan",
    summary:
      "One of the world's great marrow traditions and Pakistan's most iconic slow-cooked dish. " +
      "Marrow bones, shank, and connective tissues simmered overnight with aromatic spices. " +
      "Historically a Mughal elite breakfast, now a national dish.",
    culturalContext:
      "Nihari restaurants open before dawn in Lahore and Karachi. The dish is consumed for " +
      "breakfast after overnight cooking. A shared culinary heritage with North India — the " +
      "nalli-nihari tradition in the dataset covers the Indian variant. Pakistani nihari tends " +
      "to be spicier and richer in tallow.",
    preparationNotes:
      "Marrow bones and beef shank simmered overnight with nihari masala, onions, ginger, " +
      "garlic, and ghee. Finished with fried onions, fresh ginger, green chili, lemon, and " +
      "coriander. Served with naan or kulcha.",
    cuts: ["bone_marrow", "tendon"],
  },
  {
    id: "siri-paya-pk",
    name: "Siri-Paya",
    region: "South Asia — Pakistan",
    summary:
      "One of South Asia's most important head-meat and collagen traditions. Head meat and " +
      "trotters simmered overnight. The Pakistani variant is particularly associated with " +
      "Lahore, Peshawar, and Karachi breakfast culture.",
    culturalContext:
      "Specialist siri-paya restaurants open before dawn. The dish is consumed as breakfast, " +
      "especially in winter. Deeply associated with Lahore's food identity. The IN siri-paya " +
      "entry in the dataset covers the shared subcontinent tradition — this entry captures " +
      "Pakistani-specific context.",
    preparationNotes:
      "Head and trotters cleaned and simmered overnight with ginger, garlic, onions, turmeric, " +
      "coriander, garam masala, and ghee. Served with naan, fresh ginger, green chili, and lemon.",
    cuts: ["head_cheek", "bone_marrow"],
  },
  {
    id: "gurda-kaleji-pk",
    name: "Gurda-Kaleji",
    region: "South Asia — Pakistan",
    summary:
      "Pakistan's flagship organ preparation. Kidney and liver rapidly griddle-cooked with " +
      "butter or ghee, onions, chilies, tomatoes, and spices. Street food, breakfast food, " +
      "Eid food — one of the most visible organ dishes anywhere in the world.",
    culturalContext:
      "Gurda-kaleji stalls operate across Pakistan from early morning. Especially prominent " +
      "during Eid al-Adha when fresh organs are immediately cooked after slaughter. The " +
      "Pakistani version tends toward higher heat and more butter than the North Indian equivalent.",
    preparationNotes:
      "Kidneys and liver cleaned and chopped. Cooked rapidly on hot tawa with butter or ghee, " +
      "onions, green chilies, ginger, garlic, tomatoes, coriander, and garam masala. Finished " +
      "with fresh coriander and lemon.",
    cuts: ["kidney", "liver"],
  },
  {
    id: "gurda-kapura",
    name: "Gurda-Kapura",
    region: "South Asia — Pakistan",
    summary:
      "One of Pakistan's most distinctive offal traditions. Kidney and kapura (testicles " +
      "and/or glandular tissues) rapidly griddle-fried together. Dedicated stalls operate " +
      "across major cities.",
    culturalContext:
      "Gurda-kapura stalls are a fixture of Karachi, Lahore, Rawalpindi, and Peshawar food " +
      "culture. One of the world's most commercially visible testicle traditions. Kapura " +
      "terminology varies across South Asia — in Pakistani usage it most commonly refers to testicles.",
    preparationNotes:
      "Kidneys and kapura cleaned and chopped. Cooked rapidly on hot tawa with butter or ghee, " +
      "green chilies, onions, ginger, garlic, and spices. Served immediately with naan and chutney.",
    cuts: ["kidney", "testicles", "sweetbreads"],
  },
  {
    id: "katakat",
    name: "Katakat",
    region: "South Asia — Pakistan (Karachi)",
    summary:
      "Pakistan's most distinctive mixed-organ cooking tradition. Multiple organs rapidly " +
      "chopped and cooked on a large iron griddle using metal spatulas that produce the " +
      "characteristic \"kata-kat\" sound.",
    culturalContext:
      "Especially associated with Karachi. The sound of the spatulas is as much a part of " +
      "the experience as the food. Multiple organs cooked simultaneously to order. One of " +
      "the world's most theatrical organ-cooking traditions. Structurally distinct from " +
      "Iranian jigaraki (skewer-grill) and Japanese horumon-yaki (individual cuts) — katakat " +
      "combines everything on one griddle simultaneously.",
    preparationNotes:
      "Multiple organs cleaned and chopped. Cooked together on a large flat iron tawa over " +
      "high heat with ghee, onions, tomatoes, green chilies, ginger, garlic, and spices. " +
      "Constantly chopped and mixed with metal spatulas. Served with naan.",
    cuts: ["kidney", "liver", "heart", "testicles", "brain", "intestines"],
  },
  {
    id: "ojhri-pk",
    name: "Ojhri",
    region: "South Asia — Pakistan",
    summary:
      "Pakistan's defining digestive-organ tradition. Tripe and intestines extensively " +
      "cleaned and slow-cooked in chili-rich masala. Especially prominent after " +
      "Eid al-Adha slaughter.",
    culturalContext:
      "One of South Asia's strongest tripe and intestine traditions. The IN ojhri-tradition " +
      "entry in the dataset covers the shared North Indian context — this entry captures the " +
      "Pakistani variant, which has particularly strong visibility in Karachi and Lahore.",
    preparationNotes:
      "Extensive cleaning essential. Braised with onions, ginger, garlic, turmeric, coriander, " +
      "cumin, chili, and garam masala until tender. Served with naan or rice.",
    cuts: ["tripe", "intestines"],
  },

  // ── Lebanon / Levant ──────────────────────────────────────────────────────────

  {
    id: "mashawi-levant",
    name: "Mashawi Mshakkaleh",
    region: "Middle East — Levant",
    summary:
      "The Levant's defining mixed-grill offal tradition. Liver, heart, kidney, sweetbreads, " +
      "and testicles grilled over charcoal and served with flatbread, garlic sauce, and lemon.",
    culturalContext:
      "A central feature of restaurant dining, butcher culture, and celebrations throughout " +
      "Lebanon, Syria, Jordan, and Palestine. Structurally parallel to Iranian jigaraki, " +
      "Japanese horumon-yaki, and Argentine achuras as a multi-organ grill tradition. Liver " +
      "is the anchor item; sweetbreads and testicles are the premium additions.",
    preparationNotes:
      "Organs cleaned and cubed or sliced. Grilled over charcoal with minimal seasoning — " +
      "salt, lemon, sumac, and cumin. Served with garlic sauce (toum), flatbread, pickles, " +
      "and raw onion.",
    cuts: ["liver", "heart", "kidney", "sweetbreads", "testicles"],
  },
  {
    id: "kibdeh-levant",
    name: "Kibdeh Meshwi",
    region: "Middle East — Levant",
    summary:
      "The Levant's most important liver tradition. Liver grilled over charcoal or sautéed " +
      "with pomegranate molasses, garlic, parsley, and cumin. A breakfast staple and mezze " +
      "standard throughout the region.",
    culturalContext:
      "One of the strongest liver traditions in the Arab world. Fresh liver is especially " +
      "prominent immediately after Eid slaughter. The pomegranate molasses version " +
      "(kibdeh bil-dibs) is distinctively Levantine.",
    preparationNotes:
      "Liver cleaned and sliced thin. Grilled over charcoal or sautéed in olive oil with " +
      "garlic, cumin, coriander, chili, and pomegranate molasses. Finished with fresh " +
      "parsley and lemon.",
    cuts: ["liver"],
  },

  // ── Ethiopia second pass ──────────────────────────────────────────────────────

  {
    id: "ethiopia-slaughter-day",
    name: "Ethiopian Slaughter-Day Tradition",
    region: "Africa — Ethiopia",
    summary:
      "The organizing framework for Ethiopian offal culture. Organs consumed immediately " +
      "after communal slaughter — raw, lightly cooked, or quickly sautéed. The cultural " +
      "unit is the slaughter event, not the individual recipe.",
    culturalContext:
      "Unlike most countries where offal appears in named restaurant dishes, Ethiopia " +
      "organizes offal consumption around the slaughter event itself. Freshness is the " +
      "central value. Comparable to Northeast India's whole-animal traditions and Peru's " +
      "anticucho origins in Afro-Peruvian communal cooking.",
    preparationNotes:
      "Methods vary by community and organ. Liver often eaten raw or lightly sautéed first. " +
      "Heart and kidney grilled quickly. Tripe and head meat boiled or slow-cooked. Berbere, " +
      "mitmita, and niter kibbeh are the principal flavor markers.",
    cuts: ["tongue", "tripe", "liver", "heart", "kidney", "intestines", "head_cheek", "bone_marrow"],
  },

  // ── Saudi Arabia ─────────────────────────────────────────────────────────────

  {
    id: "kabdah-jeddawiyah",
    name: "Kabdah Jeddawiyah",
    region: "Middle East — Saudi Arabia (Jeddah)",
    summary:
      "Saudi Arabia's most important organ dish. Fresh liver rapidly sautéed with garlic, " +
      "black pepper, cumin, and chili. A defining breakfast and street-food tradition of " +
      "western Saudi Arabia, especially Jeddah.",
    culturalContext:
      "Dedicated liver stalls operate throughout Jeddah, Mecca, and Riyadh. One of the " +
      "strongest liver street-food traditions in the Arab world. Comparable to Egypt's kibda " +
      "iskandarani in cultural prominence but with a distinctly Saudi spice profile.",
    preparationNotes:
      "Fresh liver sliced thin. Rapidly sautéed in oil with garlic, black pepper, cumin, " +
      "chili, and sometimes tomato. Served immediately with khubz flatbread.",
    cuts: ["liver"],
  },
  {
    id: "masarin-traditions",
    name: "Masarin",
    region: "Middle East — Saudi Arabia",
    summary:
      "Saudi Arabia's most important intestine tradition. Intestines stuffed with rice and " +
      "spices or grilled over charcoal. One of the Gulf's strongest intestine traditions.",
    culturalContext:
      "Especially prominent in Jeddah and western Saudi Arabia. Particularly associated with " +
      "Eid al-Adha and family slaughter events. The stuffed version (masarin mahshi) resembles " +
      "Egypt's mombar — both reflect a broader Arab tradition of stuffed intestines.",
    preparationNotes:
      "Intestines cleaned thoroughly. Stuffed with rice, onion, tomato, herbs, and spices " +
      "then simmered. Or cleaned and grilled directly over charcoal with salt and cumin.",
    cuts: ["intestines"],
  },

  // ── Colombia ──────────────────────────────────────────────────────────────────

  {
    id: "mondongo-colombiano",
    name: "Mondongo Colombiano",
    region: "South America — Colombia",
    summary:
      "Colombia's most important offal dish. Tripe slow-simmered in a hearty soup with " +
      "potatoes, yuca, plantain, cilantro, and cumin. Distinct from Argentine mondongo in " +
      "being soup-based and vegetable-heavy.",
    culturalContext:
      "A staple of Colombian home cooking, especially in Antioquia, Medellín, and the Eje " +
      "Cafetero. Weekend family dish comparable in cultural importance to Mexican menudo and " +
      "Spanish callos. Strongly associated with Antioquian identity.",
    preparationNotes:
      "Tripe cleaned and boiled until tender. Simmered in broth with potatoes, yuca, green " +
      "plantain, onion, tomato, cilantro, garlic, and cumin. Served with avocado, rice, " +
      "and hogao (tomato-onion sauce).",
    cuts: ["tripe"],
  },
  {
    id: "chunchullo-asado",
    name: "Chunchullo Asado",
    region: "South America — Colombia",
    summary:
      "Colombia's defining intestine tradition. Cleaned intestines salted and grilled over " +
      "charcoal until crisp outside and chewy inside. A centerpiece of Colombian mixed-grill culture.",
    culturalContext:
      "Especially associated with Antioquia, Valle del Cauca, and Bogotá fritanga culture. " +
      "Related to Argentine chinchulines and Chilean chunchules but with distinct Colombian " +
      "preparation and cultural context.",
    preparationNotes:
      "Intestines cleaned thoroughly and salted. Grilled over charcoal or wood until exterior " +
      "crisps. Served with ají (Colombian hot sauce), papa criolla, and arepa.",
    cuts: ["intestines"],
  },
  {
    id: "fritanga-colombiana",
    name: "Fritanga Colombiana",
    region: "South America — Colombia",
    summary:
      "Colombia's mixed-offal framework. Multiple organs fried or grilled together and served " +
      "as a shared platter. The Colombian equivalent of Argentine achuras or Iranian jigaraki.",
    culturalContext:
      "Common in Bogotá, Medellín, and Cali street-food and restaurant culture. Brings " +
      "together chunchullo, mollejas, hígado, riñones, and other organs in a single communal " +
      "dish. One of Latin America's most diverse multi-organ traditions.",
    preparationNotes:
      "Each organ cleaned and prepared separately. Fried or grilled with salt and spices. " +
      "Combined on a shared platter with papa criolla, arepa, ají, and chimichurri.",
    cuts: ["intestines", "sweetbreads", "liver", "kidney", "heart", "head_cheek", "brain"],
  },
  {
    id: "changua-tuetano",
    name: "Changua de Tuétano",
    region: "South America — Colombia (Andean)",
    summary:
      "A distinctive Andean marrow breakfast soup. Marrow-rich bones simmered in milk or " +
      "water with eggs, herbs, and bread. A cold-morning staple in the Colombian highlands.",
    culturalContext:
      "Especially associated with Bogotá and the Andean highlands. Changua is one of " +
      "Colombia's most distinctive breakfast traditions. The marrow variant adds richness " +
      "and body to the soup. Differs substantially from Argentine or British marrow traditions " +
      "in its milk-based and breakfast-oriented character.",
    preparationNotes:
      "Marrow bones simmered in water or milk with scallions, cilantro, and salt. Eggs " +
      "poached directly in the broth. Served with stale bread or calado soaked in the soup.",
    cuts: ["bone_marrow"],
  },

  // ── South Africa ──────────────────────────────────────────────────────────────

  {
    id: "skilpadjies",
    name: "Skilpadjies",
    region: "Africa — South Africa",
    summary:
      "South Africa's most distinctive offal preparation and one of the world's great liver " +
      "traditions. Liver cubes wrapped in caul fat and grilled over open flame. A braai centerpiece.",
    culturalContext:
      "Skilpadjies (Afrikaans for \"little tortoises\") are a defining feature of South African " +
      "braai culture. The caul fat wrapping bastes the liver during grilling. A direct parallel " +
      "to Morocco's boulfaf and Turkey's ciğer sarma — an example of convergent offal cookery " +
      "across cultures. Common at farm braais, family gatherings, and traditional celebrations.",
    preparationNotes:
      "Liver cubed and seasoned with salt, pepper, and sometimes coriander. Wrapped in caul " +
      "fat (omentum). Grilled over open coals until caul fat renders and crisps. Served immediately.",
    cuts: ["liver"],
  },
  {
    id: "mala-mogodu",
    name: "Mala Mogodu",
    region: "Africa — South Africa",
    summary:
      "South Africa's most important tripe tradition and one of Africa's strongest. Tripe " +
      "simmered for many hours with onions, tomatoes, and spices, served with pap (maize porridge).",
    culturalContext:
      "A staple of Black South African home cooking and township culture. Consumed across " +
      "ethnic groups including Zulu, Xhosa, Sotho, and Tswana communities. One of Africa's " +
      "most culturally embedded tripe traditions alongside Nigerian shaki and Ethiopian botti.",
    preparationNotes:
      "Tripe cleaned and boiled until tender. Simmered with onions, tomatoes, garlic, curry " +
      "powder, and mixed spices. Served with pap or rice. Cooking time is long — up to 4 hours.",
    cuts: ["tripe"],
  },
  {
    id: "cape-malay-offal",
    name: "Cape Malay Offal Curries",
    region: "Africa — South Africa (Cape Town)",
    summary:
      "A distinctive regional offal system unique to South Africa. Multiple organs curried " +
      "with turmeric, coriander, cinnamon, cloves, cardamom, and vinegar. Reflects the fusion " +
      "of Indonesian, Indian, and African influences in Cape Malay cuisine.",
    culturalContext:
      "Developed by the Cape Malay community in Cape Town, descended from enslaved and " +
      "indentured workers brought from Southeast Asia and South Asia by the Dutch East India " +
      "Company. One of the most culturally distinctive regional offal traditions in Africa. " +
      "No direct parallel exists elsewhere in the dataset.",
    preparationNotes:
      "Organs cleaned and marinated in vinegar, turmeric, and spices. Slow-cooked in curry " +
      "with onions, garlic, ginger, cardamom, cinnamon, cloves, and chili. Served with roti or rice.",
    cuts: ["liver", "kidney", "tripe", "heart"],
  },
  {
    id: "sa-braai-offal",
    name: "South African Braai Offal",
    region: "Africa — South Africa",
    summary:
      "The organizing framework for South African offal consumption. Multiple organs grilled " +
      "over open coals at a braai. South Africa's equivalent of Argentine achuras or Iranian jigaraki.",
    culturalContext:
      "The braai is South Africa's national cooking tradition. Offal is a standard part of " +
      "traditional braai culture across Afrikaner, Black African, and Coloured communities. " +
      "Skilpadjies is the most famous element but liver, heart, kidney, and sweetbreads all " +
      "appear regularly.",
    preparationNotes:
      "Each organ cleaned and seasoned with salt and spices. Grilled over hardwood coals. " +
      "Liver often wrapped in caul fat (skilpadjies). Intestines boiled first then finished " +
      "on the braai. Served with pap, chakalaka, and braai bread.",
    cuts: ["liver", "heart", "kidney", "sweetbreads", "intestines", "testicles"],
  },

  // ── Argentina (brain) ─────────────────────────────────────────────────────────

  {
    id: "sesos-parrilla",
    name: "Sesos a la Parrilla",
    region: "South America — Argentina",
    summary:
      "The traditional Argentine preparation of beef brain within the achuras system. Brain " +
      "soaked, cleaned, and lightly poached before grilling over wood embers as one of the " +
      "opening courses of an asado.",
    culturalContext:
      "Part of the broader Argentine nose-to-tail philosophy of the asado. Less common today " +
      "than mollejas or chinchulines but historically documented and still served in traditional " +
      "parrillas. Consumption has declined due to changing preferences and regulatory concerns " +
      "around brain tissue.",
    preparationNotes:
      "Brain soaked in cold water to remove blood. Lightly poached or parboiled. Grilled " +
      "over wood embers with salt and lemon. Sometimes breaded and fried as an alternative preparation.",
    cuts: ["brain"],
  },

  // ── Poland ────────────────────────────────────────────────────────────────────

  {
    id: "flaki",
    name: "Flaki",
    region: "Europe — Poland",
    summary:
      "Poland's national offal dish and one of Europe's great tripe soups. Tripe simmered " +
      "for many hours in rich broth with marjoram, nutmeg, black pepper, and root vegetables. " +
      "Documented since at least the medieval period.",
    culturalContext:
      "Virtually every Pole recognizes flaki. Historically served to nobility, soldiers, and " +
      "workers alike. One of the strongest tripe traditions in Europe alongside Hungarian " +
      "pacalpörkölt, Spanish callos, and Turkish işkembe.",
    preparationNotes:
      "Tripe cleaned and simmered for many hours. Broth built with root vegetables, marjoram, " +
      "nutmeg, black pepper, and allspice. Finished thick and aromatic. Served with bread or rolls.",
    cuts: ["tripe"],
  },
  {
    id: "ozor-w-chrzanie",
    name: "Ozór w Chrzanie",
    region: "Europe — Poland",
    summary:
      "Poland's flagship tongue preparation. Beef tongue simmered with root vegetables and " +
      "spices, sliced and served with horseradish sauce.",
    culturalContext:
      "A premium traditional dish served at holiday meals, weddings, and family celebrations. " +
      "Tongue is viewed as a prestige offal cut in Polish culture rather than poverty food. " +
      "Comparable to Russia's zalivnoy yazyk and Germany's rinderzunge in cultural standing.",
    preparationNotes:
      "Tongue simmered with carrots, onions, celery root, bay leaves, peppercorns, and " +
      "allspice until tender. Skin peeled while hot. Sliced and served with horseradish sauce or mustard.",
    cuts: ["tongue"],
  },
  {
    id: "watrobka-z-cebula",
    name: "Wątróbka z Cebulą",
    region: "Europe — Poland",
    summary:
      "Poland's most common liver preparation. Liver pan-fried with onions and served with " +
      "potatoes or bread. A staple of Polish home cooking and milk-bar culture.",
    culturalContext:
      "Milk bars (bar mleczny) — subsidized communist-era canteens that survived into modern " +
      "Poland — serve wątróbka z cebulą as a daily staple. One of Poland's most accessible " +
      "and widely recognized offal dishes.",
    preparationNotes:
      "Liver sliced, optionally soaked in milk to reduce bitterness. Pan-fried in butter or " +
      "oil with sliced onions until just cooked through. Served with boiled potatoes and pickle.",
    cuts: ["liver"],
  },
  {
    id: "mozdzek-z-jajkiem",
    name: "Móżdżek z Jajkiem",
    region: "Europe — Poland",
    summary:
      "Poland's classic brain preparation. Beef brain poached then scrambled with eggs, " +
      "onions, and parsley. One of Central Europe's most documented brain traditions.",
    culturalContext:
      "Historically common in Polish home cooking and restaurants. Older generations remain " +
      "especially familiar with the dish. Consumption declined after BSE-related concerns. Part " +
      "of a broader Central European brain-with-eggs pattern shared with Czech, Hungarian, and " +
      "Russian cuisines.",
    preparationNotes:
      "Brain soaked in cold salted water, membrane removed. Poached in salted water with vinegar. " +
      "Broken into pieces and scrambled with beaten eggs, butter, onion, and parsley. Served on " +
      "toast or with bread.",
    cuts: ["brain"],
  },
  {
    id: "rosol-ze-szpikiem",
    name: "Rosół ze Szpikiem",
    region: "Europe — Poland",
    summary:
      "Poland's marrow-enriched broth tradition. Marrow bones simmered in Poland's classic " +
      "clear beef soup, contributing richness and body. Marrow also served directly on bread.",
    culturalContext:
      "Rosół is Poland's most important soup. The marrow variant adds depth and nourishment. " +
      "Historically associated with Sunday family meals, recovery from illness, and winter warmth.",
    preparationNotes:
      "Marrow bones and beef simmered for many hours with carrots, celery root, parsley root, " +
      "onion, leek, and peppercorns. Broth strained clear. Marrow scooped from bones and spread " +
      "on toast as accompaniment.",
    cuts: ["bone_marrow"],
  },

  // ── Czech Republic ────────────────────────────────────────────────────────────

  {
    id: "drstkova-polevka",
    name: "Dršťková Polévka",
    region: "Europe — Czech Republic",
    summary:
      "The Czech Republic's most important offal tradition. Tripe cleaned, sliced, and simmered " +
      "with paprika, garlic, marjoram, and onion into a thick, strongly seasoned soup. A national " +
      "pub staple.",
    culturalContext:
      "Found in traditional pubs, village restaurants, and worker lunches throughout the Czech " +
      "Republic. One of Central Europe's most recognizable tripe soups alongside Poland's flaki " +
      "and Hungary's pacalpörkölt.",
    preparationNotes:
      "Tripe cleaned and boiled until tender, sliced into strips. Simmered with paprika, " +
      "marjoram, garlic, onion, and beef stock. Finished thick and aromatic. Served with bread.",
    cuts: ["tripe"],
  },
  {
    id: "mozecek-s-vejci",
    name: "Mozeček s Vejci",
    region: "Europe — Czech Republic",
    summary:
      "Czech brain scrambled with eggs — one of Central Europe's classic brain preparations. " +
      "Brain poached and mixed with eggs, butter, and parsley.",
    culturalContext:
      "Historically a pub and home-cooking staple in Czech tavern culture. Consumption declined " +
      "after BSE-related restrictions. Part of the same Central European brain-with-eggs pattern " +
      "as Poland's móżdżek z jajkiem and Hungary's equivalent preparations.",
    preparationNotes:
      "Brain soaked, membrane removed, poached. Broken into pieces and scrambled with eggs, " +
      "butter, onion, and parsley. Seasoned with salt, pepper, and nutmeg. Served with bread.",
    cuts: ["brain"],
  },
  {
    id: "hovezi-jazyk-kren",
    name: "Hovězí Jazyk s Křenem",
    region: "Europe — Czech Republic",
    summary:
      "Czech beef tongue with horseradish sauce. Tongue simmered with root vegetables and " +
      "spices, served sliced with horseradish cream or sauce and dumplings.",
    culturalContext:
      "A premium traditional dish served at holiday meals and family gatherings. Part of the " +
      "Central European tongue-with-horseradish tradition shared with Poland, Russia, and Ukraine.",
    preparationNotes:
      "Tongue simmered with root vegetables, bay leaves, and peppercorns until tender. Peeled " +
      "while hot, sliced. Served with horseradish cream sauce and bread dumplings.",
    cuts: ["tongue"],
  },
  {
    id: "hovezi-vyvar-morekem",
    name: "Hovězí Vývar s Morekem",
    region: "Europe — Czech Republic",
    summary:
      "Czech marrow broth tradition. Marrow bones simmered into clear beef broth, contributing " +
      "richness and depth. Marrow spread on bread as accompaniment.",
    culturalContext:
      "Traditional beef broth is one of Czech cuisine's most valued preparations. The marrow " +
      "contribution is considered essential for authentic depth of flavor.",
    preparationNotes:
      "Marrow bones and beef simmered for many hours with root vegetables and aromatics. Broth " +
      "strained clear. Marrow served on toast alongside.",
    cuts: ["bone_marrow"],
  },

  // ── Russia ────────────────────────────────────────────────────────────────────

  {
    id: "zalivnoy-yazyk",
    name: "Zalivnoy Yazyk",
    region: "Europe — Russia",
    summary:
      "Russia's most important tongue tradition. Beef tongue simmered, sliced, and set in " +
      "clear aspic — a classic holiday and banquet dish.",
    culturalContext:
      "A centerpiece of New Year and wedding tables in Russian tradition. Tongue in aspic " +
      "represents the prestige end of Russian offal culture. Part of the Eastern European " +
      "tongue tradition shared with Poland, Czech Republic, and Ukraine.",
    preparationNotes:
      "Tongue simmered with carrots, onions, bay leaves, and peppercorns. Peeled while hot, " +
      "sliced. Arranged in molds with clarified stock enriched with gelatin. Chilled until set. " +
      "Served with horseradish and mustard.",
    cuts: ["tongue"],
  },
  {
    id: "kholodets-ru",
    name: "Kholodets",
    region: "Europe — Russia",
    summary:
      "Russia's defining whole-animal cold dish. Head meat, tendons, and collagen-rich tissues " +
      "simmered for many hours until the broth sets solid when chilled. A centerpiece of winter " +
      "and holiday tables.",
    culturalContext:
      "Kholodets belongs alongside Mexico's cabeza, India's siri-paya, and Turkey's kelle-paça " +
      "as one of the world's great head-and-collagen traditions. The dish extracts maximum value " +
      "from collagen-rich cuts — head, tendon, skin — through overnight cooking. Identical " +
      "tradition exists in Ukraine under the same name.",
    preparationNotes:
      "Head, trotters, tendons, and bones simmered 12+ hours. Meat picked from bones and " +
      "arranged in molds. Natural gelatin broth poured over. Chilled overnight until firmly set. " +
      "Served with horseradish, mustard, and black bread.",
    cuts: ["head_cheek", "tendon", "skin", "bone_marrow"],
  },
  {
    id: "pochki-v-smetane",
    name: "Pochki v Smetane",
    region: "Europe — Russia",
    summary:
      "Russia's flagship kidney preparation. Kidneys braised in sour cream with onions, " +
      "mustard, and mushrooms. One of Eastern Europe's strongest kidney traditions.",
    culturalContext:
      "A classic of Imperial Russian cuisine that survived into Soviet home cooking. Sour cream " +
      "is the defining flavor marker — the same technique applies across Russian braised organ dishes.",
    preparationNotes:
      "Kidneys soaked and cleaned to remove odor. Sliced and braised with onions, mushrooms, " +
      "mustard, and sour cream. Finished with dill and parsley. Served with boiled potatoes or buckwheat.",
    cuts: ["kidney"],
  },
  {
    id: "mozgi-traditions",
    name: "Mozgi — Russian Brain Traditions",
    region: "Europe — Russia",
    summary:
      "Russia's historically documented brain tradition. Brain poached and fried, scrambled " +
      "with eggs, or incorporated into pâtés. Part of a broad Eastern European cluster of " +
      "brain-with-eggs preparations.",
    culturalContext:
      "Historically common in Russian home cooking and restaurants. Consumption declined after " +
      "BSE-related concerns. Russia belongs to the European cluster where brain consumption was " +
      "mainstream — alongside France, Spain, Italy, Poland, Czech Republic, and Hungary.",
    preparationNotes:
      "Brain soaked in cold salted water. Membrane removed. Poached in salted water with vinegar. " +
      "Breaded and fried, or broken into pieces and scrambled with eggs, butter, and herbs.",
    cuts: ["brain"],
  },
  {
    id: "russian-marrow-broth",
    name: "Russian Marrow Broth Tradition",
    region: "Europe — Russia",
    cuts: ["bone_marrow", "tendon"],
    summary:
      "Russia's marrow and collagen soup tradition. Marrow-rich bones and tendon-rich cuts " +
      "simmered for many hours into deeply nourishing broths. Associated with winter recovery " +
      "and traditional home cooking.",
    culturalContext:
      "Marrow broth is foundational to Russian soup culture. Unlike France's roasted marrow " +
      "or Britain's marrow on toast, Russian tradition emphasizes long extraction into broth " +
      "rather than direct consumption.",
    preparationNotes:
      "Marrow bones and tendon-rich cuts simmered for many hours with root vegetables and " +
      "aromatics. Broth skimmed and strained. Served as soup with bread or used as base for " +
      "other dishes.",
  },

  // ── Ukraine ───────────────────────────────────────────────────────────────────

  {
    id: "kholodets-ua",
    name: "Kholodets",
    region: "Europe — Ukraine",
    summary:
      "Ukraine's defining whole-animal cold dish. Head meat, tendons, and collagen-rich " +
      "tissues simmered overnight until the broth sets solid when chilled. A centerpiece " +
      "of Christmas, New Year, and wedding tables.",
    culturalContext:
      "Identical dish exists in Russia under the same name — shared East Slavic culinary " +
      "heritage. Ukrainian kholodets has a stronger association with village slaughter " +
      "traditions and Christmas celebrations. Greater influence of Polish and Central " +
      "European foodways in western Ukraine.",
    preparationNotes:
      "Head, trotters, tendons, and bones simmered 12+ hours. Meat picked from bones and " +
      "arranged in molds. Natural gelatin broth poured over. Chilled overnight until firmly " +
      "set. Served with horseradish, mustard, and black bread.",
    cuts: ["head_cheek", "tendon", "skin", "bone_marrow"],
  },
  {
    id: "yazyk-z-khronom",
    name: "Yazyk z Khronom",
    region: "Europe — Ukraine",
    summary:
      "Ukraine's flagship tongue preparation. Beef tongue simmered with root vegetables " +
      "and spices, served sliced with horseradish or mustard. A prestige dish for holiday " +
      "and celebration tables.",
    culturalContext:
      "Part of the Eastern European tongue-with-horseradish tradition shared with Poland, " +
      "Czech Republic, and Russia. Tongue is viewed as a premium offal cut in Ukrainian " +
      "culture rather than everyday food.",
    preparationNotes:
      "Tongue simmered with carrots, onions, celery root, bay leaves, and peppercorns until " +
      "tender. Peeled while hot, sliced. Served with horseradish sauce or cold in aspic.",
    cuts: ["tongue"],
  },
  {
    id: "mizky-z-yaitsem",
    name: "Mizky z Yaitsem",
    region: "Europe — Ukraine",
    summary:
      "Ukrainian brain scrambled with eggs — one of Eastern Europe's classic brain " +
      "preparations. Brain poached then mixed with eggs, butter, and parsley.",
    culturalContext:
      "Historically common in Ukrainian home cooking. Part of the Central and Eastern " +
      "European brain-with-eggs pattern shared with Poland's móżdżek z jajkiem, Czech " +
      "mozeček s vejci, and Russian mozgi preparations. Consumption declined after " +
      "BSE-related concerns.",
    preparationNotes:
      "Brain soaked in cold salted water, membrane removed. Poached in salted water with " +
      "vinegar. Broken into pieces and scrambled with beaten eggs, butter, onion, and parsley.",
    cuts: ["brain"],
  },
  {
    id: "ukrainian-marrow-broth",
    name: "Ukrainian Marrow Broth Tradition",
    region: "Europe — Ukraine",
    summary:
      "Ukraine's marrow and collagen soup tradition. Marrow-rich bones and tendon-rich cuts " +
      "simmered for many hours. Associated with winter nourishment and traditional home cooking.",
    culturalContext:
      "Foundational to Ukrainian soup culture. Marrow broth is associated with recovery, " +
      "winter warmth, and village cooking. Part of the broader Eastern European marrow-broth " +
      "tradition shared with Russia and Poland.",
    preparationNotes:
      "Marrow bones and tendon-rich cuts simmered with root vegetables and aromatics. Broth " +
      "skimmed and strained. Served as soup or used as base for other dishes.",
    cuts: ["bone_marrow", "tendon"],
  },

  // ── Thailand ──────────────────────────────────────────────────────────────────

  {
    id: "kuaitiao-nuea",
    name: "Kuaitiao Nuea",
    region: "Asia — Thailand",
    summary:
      "Thailand's most important bovine-offal tradition. Beef noodle soup combining multiple " +
      "offal cuts in aromatic broth with star anise, cinnamon, garlic, and cilantro root. " +
      "A national street-food staple.",
    culturalContext:
      "Thai beef noodle culture draws heavily from Chinese culinary traditions. Multiple " +
      "offal cuts coexist in a single bowl — tripe, tendon, and intestines are standard " +
      "offerings. Comparable to Vietnam's phở bò and Indonesia's soto jeroan as a " +
      "multi-organ soup tradition.",
    preparationNotes:
      "Rich broth built from marrow bones with star anise, cinnamon, garlic, cilantro root, " +
      "and white pepper. Offal cuts prepared separately and added to order. Served with rice " +
      "noodles, bean sprouts, herbs, lime, chili, and fish sauce.",
    cuts: ["tripe", "tendon", "intestines", "liver", "kidney", "bone_marrow"],
  },
  {
    id: "tom-saep-offal",
    name: "Tom Saep Offal",
    region: "Asia — Thailand (Isan)",
    summary:
      "Isan's defining spicy offal soup. Multiple organs simmered in intensely sour and " +
      "spicy broth with lime, chili, fish sauce, and toasted rice. Distinct from northern " +
      "Thai or Bangkok offal traditions.",
    culturalContext:
      "Tom saep is especially associated with northeastern Thailand (Isan). The sour-spicy " +
      "flavor profile is distinctively Isan rather than Chinese-influenced. One of Southeast " +
      "Asia's most distinctive offal-soup traditions.",
    preparationNotes:
      "Offal cuts boiled until tender. Broth seasoned with fish sauce, lime juice, dried " +
      "chili, lemongrass, galangal, and toasted rice powder. Finished with fresh herbs " +
      "and green onion.",
    cuts: ["tripe", "intestines", "tendon"],
  },
  {
    id: "northern-thai-larb",
    name: "Northern Thai Larb Offal",
    region: "Asia — Thailand (Chiang Mai)",
    summary:
      "Northern Thailand's distinctive organ-meat tradition. Multiple offal cuts finely " +
      "chopped and dressed with bile, dried spices, toasted rice, and herbs. Distinct from " +
      "Isan larb in its use of bile and complex dry-spice blends.",
    culturalContext:
      "Lanna (northern Thai) larb is one of the most distinctive offal traditions in " +
      "Southeast Asia. The use of bile as a seasoning element is unusual in global offal " +
      "traditions. Organ larb incorporates a wider variety of cuts than muscle-meat larb. " +
      "Especially associated with Chiang Mai and highland communities.",
    preparationNotes:
      "Organs finely chopped or minced. Dressed with bile, dried spices (makhwaen pepper, " +
      "long pepper), toasted rice powder, dried chili, shallots, garlic, and fresh herbs. " +
      "Served raw or lightly cooked depending on region and preference.",
    cuts: ["liver", "intestines", "heart", "tripe"],
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
