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
