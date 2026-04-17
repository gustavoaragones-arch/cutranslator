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

  {
    id: "matambre_ar",
    name: "Matambre",
    region: "argentina",
    maps_to: [
      { canonical_id: "flank", match_type: "cultural", confidence: 0.50, note: "Matambre is between the hide and the ribs — no USDA equivalent. Flank is the nearest region." },
      { canonical_id: "short_plate", match_type: "cultural", confidence: 0.45, note: "Also overlaps with the plate area" },
    ],
    synonyms: ["matambre de res", "matambre de novillo"],
    description: "A thin muscle layer between the hide and the ribs, unique to South American butchery. The name comes from 'mata hambre' (kills hunger). Rolled and stuffed (matambre relleno), grilled flat, or braised. No equivalent exists in US, French, or British butchery — the muscle is typically left on the carcass or discarded.",
    notes: "Only exists in Argentine, Uruguayan, and Brazilian butchery. One of the most culturally distinctive cuts in the dataset.",
  },

  {
    id: "bife_de_chorizo_ar",
    name: "Bife de Chorizo",
    region: "argentina",
    maps_to: [
      { canonical_id: "striploin", match_type: "exact", confidence: 0.95, note: "Bife de chorizo is the Argentine striploin steak, cut thick" },
    ],
    synonyms: ["bife angosto", "chorizo steak"],
    description: "Argentina's most popular restaurant steak. Despite the name, it has nothing to do with chorizo sausage — 'chorizo' refers to the elongated shape. Cut thicker than a typical US New York strip (usually 3-4 cm). The defining steak of Argentine parrilla culture.",
  },

  {
    id: "colita_de_cuadril_ar",
    name: "Colita de Cuadril",
    region: "argentina",
    maps_to: [
      { canonical_id: "tri_tip", match_type: "exact", confidence: 0.90, note: "Colita de cuadril is the Argentine tri-tip" },
    ],
    synonyms: ["colita"],
    description: "The triangular 'tail' of the cuadril (rump). Equivalent to US tri-tip. A popular asado cut — lean, flavorful, and relatively affordable compared to premium steaks.",
  },

  {
    id: "tapa_de_cuadril_ar",
    name: "Tapa de Cuadril",
    region: "argentina",
    maps_to: [
      { canonical_id: "sirloin_cap", match_type: "exact", confidence: 0.95, note: "Tapa de cuadril is the Argentine name for sirloin cap (picanha)" },
    ],
    synonyms: ["tapa de nalga"],
    description: "The cap of the rump — the same cut Brazilians call picanha. A thin, flat muscle with a fat cap on one side. In Argentina it's grilled as part of asado, often without the dramatic skewering presentation used in Brazilian churrasco.",
  },

  {
    id: "costillar_ar",
    name: "Costillar",
    region: "argentina",
    maps_to: [
      { canonical_id: "short_ribs", match_type: "close", confidence: 0.75, note: "Costillar is the full rib section, larger than USDA short ribs" },
      { canonical_id: "back_ribs", match_type: "approximate", confidence: 0.55, note: "Includes the back rib area as well" },
    ],
    synonyms: ["costillas", "asado de costilla"],
    description: "The entire rib cage section used for asado. Larger than US short ribs — includes both the short rib and back rib areas as a single piece. Cooked whole over wood fire for hours. The centerpiece of a traditional Argentine asado.",
    notes: "Not the same as asado de tira (which is cross-cut flanken style). Costillar is the full rack.",
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

  {
    id: "maminha_br",
    name: "Maminha",
    region: "brazil",
    maps_to: [
      { canonical_id: "tri_tip", match_type: "exact", confidence: 0.90, note: "Maminha is the Brazilian tri-tip" },
    ],
    synonyms: ["maminha de alcatra"],
    description: "The bottom sirloin triangle — Brazil's tri-tip. Sits just below the picanha on the alcatra complex. Lean, tender, and one of the most popular churrasco cuts after picanha. Often grilled whole and sliced against the grain.",
  },

  {
    id: "alcatra_br",
    name: "Alcatra",
    region: "brazil",
    maps_to: [
      { canonical_id: "top_sirloin", match_type: "close", confidence: 0.75, note: "Alcatra is a broader zone than US top sirloin" },
      { canonical_id: "sirloin_cap", match_type: "composite", confidence: 0.60, note: "The picanha is cut from within the alcatra" },
      { canonical_id: "tri_tip", match_type: "composite", confidence: 0.55, note: "The maminha is also part of the alcatra complex" },
    ],
    synonyms: ["alcatra completa", "alcatra inteira"],
    description: "A large sirloin zone in Brazilian butchery that encompasses the entire rump area. When sold whole, the alcatra includes sub-cuts: picanha (sirloin cap), maminha (tri-tip), and the main body (top sirloin). No single US cut corresponds to the whole alcatra — it's a composite zone.",
    notes: "This is the classic example of why composite match_type exists. Alcatra is not wrong — it's genuinely a different way of dividing the animal.",
  },

  {
    id: "contra_file_br",
    name: "Contra Filé",
    region: "brazil",
    maps_to: [
      { canonical_id: "striploin", match_type: "exact", confidence: 0.90, note: "Contra filé is the Brazilian striploin" },
    ],
    synonyms: ["contrafilé", "contra-filé", "contrafile"],
    description: "The 'counter-fillet' — named because it sits on the opposite side of the vertebra from the filé mignon (tenderloin). Brazil's striploin steak. A churrascaria standard, typically served in thick slices carved tableside.",
  },

  {
    id: "costela_br",
    name: "Costela",
    region: "brazil",
    maps_to: [
      { canonical_id: "short_ribs", match_type: "close", confidence: 0.75, note: "Costela covers the rib section broadly" },
      { canonical_id: "short_plate", match_type: "approximate", confidence: 0.55, note: "Ponta de agulha (part of costela) is from the plate area" },
    ],
    synonyms: ["costela de boi", "costelão", "costela ripa", "ponta de agulha"],
    description: "Brazilian beef ribs for churrasco. A broad term covering several rib sub-cuts. Costela de ripa is individual ribs; costelão is the whole rack; ponta de agulha (needle point) is the plate short rib section, the most prized for slow-cooked churrasco.",
    notes: "Costela slow-cooked for 6+ hours over low coals is one of the defining dishes of gaúcho churrasco culture.",
  },

  {
    id: "acem_br",
    name: "Acém",
    region: "brazil",
    maps_to: [
      { canonical_id: "chuck_roll", match_type: "close", confidence: 0.70, note: "Acém covers the central chuck area" },
      { canonical_id: "chuck_blade", match_type: "approximate", confidence: 0.55, note: "May extend into the blade region" },
    ],
    synonyms: ["acem de boi", "acém bovino"],
    description: "The Brazilian chuck. A large, affordable shoulder cut used primarily for braising, stews (cozido), and ground beef. The boundaries are broader than USDA chuck roll — Brazilian butchers divide the shoulder differently.",
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

  {
    id: "diezmillo_mx",
    name: "Diezmillo",
    region: "mexico",
    maps_to: [
      { canonical_id: "chuck_roll", match_type: "close", confidence: 0.70, note: "Diezmillo spans the chuck roll area" },
      { canonical_id: "chuck_blade", match_type: "approximate", confidence: 0.60, note: "May extend into the blade region" },
    ],
    synonyms: ["diezmillo de res"],
    description: "The Mexican chuck — a large, affordable shoulder cut used for bistec (thin-sliced steaks), carne guisada (stew), and barbacoa. The boundaries of diezmillo are broader than any single USDA chuck sub-primal, spanning both the roll and blade areas.",
  },

  {
    id: "chambarete_mx",
    name: "Chambarete",
    region: "mexico",
    maps_to: [
      { canonical_id: "hind_shank", match_type: "close", confidence: 0.85, note: "Chambarete de pata is rear shank" },
      { canonical_id: "fore_shank", match_type: "close", confidence: 0.85, note: "Chambarete de mano is front shank" },
    ],
    synonyms: ["chambarete de res", "chambarete de pata", "chambarete de mano"],
    description: "The Mexican shank — cross-cut bone-in rounds used for caldo de res (beef soup), the definitive Mexican comfort food. 'Chambarete de pata' is the rear leg, 'chambarete de mano' is the front. The marrow-rich bone and collagen-heavy meat produce a deeply flavored broth.",
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

  {
    id: "punta_de_anca_co",
    name: "Punta de Anca",
    region: "colombia",
    maps_to: [
      { canonical_id: "sirloin_cap", match_type: "close", confidence: 0.85, note: "Colombian rump cap, similar to picanha" },
    ],
    synonyms: ["punta de anca de res"],
    description: "Colombia's version of the sirloin cap / rump cap. Similar to Brazilian picanha but typically prepared differently — grilled as steaks rather than skewered. A premium cut in Colombian parrilla restaurants.",
  },

  {
    id: "churrasco_co",
    name: "Churrasco",
    region: "colombia",
    maps_to: [
      { canonical_id: "striploin", match_type: "close", confidence: 0.80, note: "In Colombia, churrasco specifically means striploin steak" },
    ],
    synonyms: ["churrasco de res"],
    description: "In Colombia, 'churrasco' refers specifically to a striploin steak — unlike Brazil where churrasco means the cooking method (barbecue). A thin-cut striploin, typically butterflied and grilled, served with chimichurri. This name difference causes frequent confusion for travelers.",
    notes: "This is a key example of why same-name-different-cut disambiguation matters. Brazilian churrasco ≠ Colombian churrasco.",
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

  {
    id: "onglet_fr",
    name: "Onglet",
    region: "france",
    maps_to: [
      { canonical_id: "hanger", match_type: "exact", confidence: 0.95, note: "Onglet is the French hanger steak — one per animal" },
    ],
    synonyms: ["onglet de boeuf"],
    description: "The French bistro classic. A thick, V-shaped muscle that hangs from the diaphragm — there is only one per animal. Rich, intensely beefy flavor with a coarse, open grain. Traditionally served rare (saignant) with shallot sauce. Called 'the butcher's cut' because butchers historically kept it for themselves.",
  },

  {
    id: "cote_de_boeuf_fr",
    name: "Côte de Boeuf",
    region: "france",
    maps_to: [
      { canonical_id: "prime_rib", match_type: "close", confidence: 0.90, note: "Côte de boeuf is a single bone-in rib steak; prime rib is the full roast" },
      { canonical_id: "ribeye", match_type: "close", confidence: 0.75, note: "The eye of the côte de boeuf is the ribeye" },
    ],
    synonyms: ["côte de bœuf", "cote de boeuf"],
    description: "A thick, bone-in rib steak meant to be shared — typically 800g-1.2kg for two people. The French counterpart to prime rib, though côte de boeuf is a single steak while prime rib is a multi-rib roast. Dry-aged for flavor, seared and finished in the oven. The defining steak of French brasserie dining.",
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

  {
    id: "matambre_uy",
    name: "Matambre",
    region: "uruguay",
    maps_to: [
      { canonical_id: "flank", match_type: "cultural", confidence: 0.50, note: "Same cut as Argentine matambre — between hide and ribs, no US equivalent" },
      { canonical_id: "short_plate", match_type: "cultural", confidence: 0.45 },
    ],
    synonyms: ["matambre de res"],
    description: "Identical cut to Argentine matambre — the thin muscle between the hide and the ribs. Prepared the same way: rolled with fillings (matambre relleno) or grilled flat. Shared River Plate culinary tradition.",
  },

  {
    id: "asado_de_tira_uy",
    name: "Asado de Tira",
    region: "uruguay",
    maps_to: [
      { canonical_id: "short_ribs", match_type: "close", confidence: 0.80, note: "Cross-cut flanken ribs, same as Argentine and Chilean preparation" },
    ],
    synonyms: ["tira de asado"],
    description: "Cross-cut short ribs for Uruguayan asado. Same cut and preparation as Argentine asado de tira. A fundamental part of the River Plate asado tradition.",
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

  {
    id: "chuleton_es",
    name: "Chuletón",
    region: "spain",
    maps_to: [
      { canonical_id: "prime_rib", match_type: "close", confidence: 0.85, note: "Chuletón is a thick bone-in rib steak, similar to côte de boeuf" },
      { canonical_id: "ribeye", match_type: "close", confidence: 0.70, note: "The boneless portion is essentially a ribeye" },
    ],
    synonyms: ["chuleta de buey", "chuletón de buey", "txuletón"],
    description: "The iconic Basque Country steak — a massive bone-in rib chop, often from retired dairy cows (vaca vieja) aged for 30-60 days. Grilled over oak charcoal, served rare, and sliced tableside. Txuletón (Basque spelling) is a pilgrimage dish for steak lovers visiting northern Spain.",
    notes: "The Basque tradition of using older, well-marbled dairy cattle produces a different flavor profile than grain-fed beef.",
  },

  // === CHILE ===
  {
    id: "asado_de_tira_cl",
    name: "Asado de Tira",
    region: "chile",
    maps_to: [
      { canonical_id: "short_ribs", match_type: "close", confidence: 0.80, note: "Flanken-style cross-cut ribs" },
    ],
    synonyms: ["tira de asado"],
    description: "Cross-cut (flanken-style) beef short ribs — sliced across the bones into thin strips. A staple of Chilean asado. Grilled quickly over high heat and served with pebre (Chilean salsa). Similar to Korean galbi in cutting technique.",
  },

  {
    id: "osobuco_cl",
    name: "Osobuco",
    region: "chile",
    maps_to: [
      { canonical_id: "hind_shank", match_type: "close", confidence: 0.85, note: "Osobuco is cross-cut shank, can be from fore or hind leg" },
      { canonical_id: "fore_shank", match_type: "close", confidence: 0.80, note: "Front leg osobuco also common" },
    ],
    synonyms: ["osobuco de pierna", "osobuco de mano"],
    description: "The Chilean adaptation of Italian osso buco — cross-cut shank rounds revealing the marrow bone at the center. 'Osobuco de pierna' is from the rear leg, 'osobuco de mano' from the front. A cold-weather braise essential in Chilean home cooking.",
  },

  // === UK ===
  {
    id: "silverside_uk",
    name: "Silverside",
    region: "uk",
    maps_to: [
      { canonical_id: "outside_round", match_type: "close", confidence: 0.85, note: "Silverside corresponds closely to US outside/bottom round" },
    ],
    synonyms: ["silverside of beef"],
    description: "A lean joint from the hindquarter, named for the silver-colored connective tissue on one side. The classic Sunday roast joint — pot-roasted or braised, never grilled (too lean). Also the traditional cut for salt beef (corned beef) in the UK.",
  },

  {
    id: "topside_uk",
    name: "Topside",
    region: "uk",
    maps_to: [
      { canonical_id: "inside_round", match_type: "close", confidence: 0.85, note: "Topside corresponds to US top/inside round" },
    ],
    synonyms: ["topside of beef", "top rump"],
    description: "A lean, boneless joint from the inner thigh. One of the most popular and affordable British roasting cuts. Sliced thin for sandwiches and served with gravy, horseradish, and Yorkshire pudding. Drier than silverside — benefits from basting.",
  },

  {
    id: "rump_steak_uk",
    name: "Rump Steak",
    region: "uk",
    maps_to: [
      { canonical_id: "top_sirloin", match_type: "close", confidence: 0.75, note: "UK rump is broader than US top sirloin" },
      { canonical_id: "sirloin_cap", match_type: "approximate", confidence: 0.60, note: "Overlaps with the sirloin cap area" },
    ],
    synonyms: ["rump of beef"],
    description: "British rump steak spans a broader area than any single US sirloin cut — it covers roughly the top sirloin and part of the sirloin cap. Full-flavored and firmer than sirloin, it's the value steak of the British steak house. Note: UK 'sirloin' is the striploin, and UK 'rump' is the sirloin — the terminology is effectively swapped versus US usage.",
    notes: "This UK-US terminology swap (UK sirloin = US striploin, UK rump = US sirloin) is one of the most common sources of confusion in beef cut translation.",
  },

  {
    id: "fore_rib_uk",
    name: "Fore Rib",
    region: "uk",
    maps_to: [
      { canonical_id: "prime_rib", match_type: "close", confidence: 0.90, note: "Fore rib is the British prime rib equivalent" },
      { canonical_id: "ribeye", match_type: "close", confidence: 0.75, note: "When boned, it becomes a rolled rib or rib-eye" },
    ],
    synonyms: ["fore rib of beef", "standing rib", "wing rib"],
    description: "The British equivalent of prime rib — a bone-in rib roast from the fore (front) section of the rib primal. The premium British roasting joint. When boned and rolled it becomes a 'rolled rib'; when the bone is left in it's the 'standing rib'. The rib-eye steak is cut from this joint.",
  },

  // === GERMANY ===

  {
    id: "tafelspitz_de",
    name: "Tafelspitz",
    region: "germany",
    maps_to: [
      { canonical_id: "sirloin_cap", match_type: "cultural", confidence: 0.75, note: "Anatomically the same as picanha/sirloin cap, but culturally opposite — boiled, not grilled" },
    ],
    synonyms: ["tafelspitz vom rind"],
    description: "Anatomically identical to Brazilian picanha (sirloin cap), but culturally the opposite. In Germany and Austria, Tafelspitz is the national boiled beef dish — simmered for hours in broth and served with apple-horseradish sauce. The fat cap is essential for flavor, but the cooking method produces a completely different product than a grilled picanha.",
    notes: "This is a key example of why 'cultural' match_type exists. Same muscle, radically different preparation and expectations.",
  },

  {
    id: "schaufelstuck_de",
    name: "Schaufelstück",
    region: "germany",
    maps_to: [
      { canonical_id: "flat_iron", match_type: "close", confidence: 0.75, note: "Same anatomical area (top blade/infraspinatus), but German preparation typically keeps the connective tissue" },
    ],
    synonyms: ["schaufelstueck"],
    description: "The German flat iron area — the top blade of the shoulder. Unlike the US flat iron steak (where the central connective tissue is removed to make a tender steak), German butchers traditionally leave this tissue in for braising. Modern German craft butchers are starting to offer 'Flat Iron Steak' using the American technique.",
  },

  {
    id: "falsches_filet_de",
    name: "Falsches Filet",
    region: "germany",
    maps_to: [
      { canonical_id: "petite_tender", match_type: "close", confidence: 0.70, note: "The 'fake filet' — looks like tenderloin but is from the chuck, much tougher" },
    ],
    description: "Literally 'fake filet' — a chuck tender muscle that resembles the tenderloin in shape but is significantly tougher. In Germany, this is exclusively a braising cut, never served as steak. American diners expecting tenderloin quality will be disappointed. The name itself is a warning.",
    notes: "The German name is brilliantly descriptive — it literally tells you this is NOT the real thing.",
  },

  {
    id: "flanke_de",
    name: "Flanke",
    region: "germany",
    maps_to: [
      { canonical_id: "flank", match_type: "cultural", confidence: 0.65, note: "Historically considered 'dog meat' in German butchery; now gaining acceptance as a steak cut" },
    ],
    synonyms: ["Dünnung"],
    description: "The German flank — historically one of the least respected cuts in German butchery, traditionally used for sausage trim or soup meat. The modern 'Flank Steak' trend from the US is slowly changing this, and craft butchers now sell it as a premium grilling cut. Old-school German butchers may not recognize 'Flank Steak' as a request — ask for Dünnung or Bavette instead.",
  },

  // === ITALY ===

  {
    id: "fiorentina_it",
    name: "Bistecca alla Fiorentina",
    region: "italy",
    maps_to: [
      { canonical_id: "t_bone", match_type: "close", confidence: 0.85, note: "A thick T-bone or porterhouse from Chianina cattle, grilled over wood" },
      { canonical_id: "prime_rib", match_type: "approximate", confidence: 0.55, note: "The costata version includes more rib" },
    ],
    synonyms: ["fiorentina", "bistecca fiorentina", "costata alla fiorentina"],
    description: "Tuscany's iconic steak — a massive T-bone (or porterhouse) cut at least 5cm thick, traditionally from Chianina cattle. Grilled over oak or olive wood charcoal, seasoned only with salt and olive oil after cooking, served very rare (al sangue). A pilgrimage dish for steak lovers visiting Florence. The costata version comes from further forward on the rib and may be boneless.",
    notes: "The most culturally significant beef cut in Italian cuisine. Chianina is the traditional breed, but Maremmana and other breeds are also used.",
  },

  {
    id: "pancia_it",
    name: "Pancia",
    region: "italy",
    maps_to: [
      { canonical_id: "flank", match_type: "approximate", confidence: 0.65, note: "Broad belly term — covers flank, plate, and skirt areas" },
      { canonical_id: "short_plate", match_type: "approximate", confidence: 0.55, note: "May include plate area" },
      { canonical_id: "skirt", match_type: "approximate", confidence: 0.50, note: "Skirt is within the pancia zone" },
    ],
    description: "The Italian 'belly' — a broad term covering the flank, plate, and skirt area. Unlike the precise USDA primal divisions, Italian pancia is a catch-all for belly cuts. Used for bollito (boiled meat), braciole (rolled and braised), or minced for ragù. The exact USDA equivalent depends on which part of the pancia the butcher separates.",
  },

  // === PORTUGAL ===

  {
    id: "vazia_pt",
    name: "Vazia",
    region: "portugal",
    maps_to: [
      { canonical_id: "flank", match_type: "approximate", confidence: 0.60, note: "Vazia is the least stable label across Portuguese butchers" },
      { canonical_id: "sirloin_flap", match_type: "approximate", confidence: 0.50, note: "May extend into sirloin area" },
    ],
    description: "The most ambiguous cut name in Portuguese butchery. Vazia can refer to the flank, sirloin flap, or a broader belly zone depending on the region and butcher. When ordering, ask the butcher to point to the exact muscle rather than relying on the label alone.",
    notes: "Low confidence mapping — this is genuinely unstable across Portuguese butchers.",
  },

  {
    id: "alcatra_pt",
    name: "Alcatra",
    region: "portugal",
    maps_to: [
      { canonical_id: "top_sirloin", match_type: "close", confidence: 0.70, note: "Portuguese alcatra covers the rump/sirloin area" },
      { canonical_id: "sirloin_cap", match_type: "approximate", confidence: 0.55, note: "May include the cap area" },
    ],
    synonyms: ["alcatra de vaca"],
    description: "Portuguese alcatra — similar ambiguity to Brazilian alcatra. Covers the top round/rump/sirloin region broadly. In the Azores, Alcatra refers to a specific clay-pot braised beef dish, adding another layer of meaning beyond the cut itself.",
    notes: "Regional meaning shifts significantly — mainland Portugal vs Azores use this term differently.",
  },

  // === NETHERLANDS ===

  {
    id: "sukadelapje_nl",
    name: "Sukadelapje",
    region: "netherlands",
    maps_to: [
      { canonical_id: "flat_iron", match_type: "cultural", confidence: 0.65, note: "Same anatomical area as flat iron, but Dutch preparation traditionally braises it with connective tissue intact" },
    ],
    synonyms: ["sukade"],
    description: "The Dutch equivalent of the flat iron area — but treated completely differently. In the Netherlands, sukadelapje is traditionally braised with the internal connective tissue (silver skin) left in, which turns to gelatin during slow cooking. In the US, the flat iron steak is specifically cut to remove that tissue for grilling. Same muscle, opposite culinary philosophy.",
    notes: "A perfect example of how butchering technique, not just anatomy, defines a cut.",
  },

  {
    id: "biefstuk_nl",
    name: "Biefstuk",
    region: "netherlands",
    maps_to: [
      { canonical_id: "inside_round", match_type: "cultural", confidence: 0.60, note: "Standard Dutch biefstuk comes from the top round — lean and firm" },
      { canonical_id: "top_sirloin", match_type: "approximate", confidence: 0.50, note: "Higher-quality biefstuk may come from the sirloin" },
    ],
    description: "The generic Dutch word for 'steak' — but unlike the US where 'steak' always has a qualifier (ribeye, strip, etc.), standard Dutch biefstuk usually comes from the top round (Bovenbil). To an American, this would feel like a very lean, somewhat tough cut rather than a premium steak. For premium steaks, Dutch menus specify the cut (Entrecôte, Ossenhaas, etc.).",
    notes: "Flag as low-confidence for US users expecting premium steak quality from the generic term 'biefstuk'.",
  },

  // === NORWAY ===

  {
    id: "hoyrygg_no",
    name: "Høyrygg",
    region: "norway",
    maps_to: [
      { canonical_id: "chuck_roll", match_type: "composite", confidence: 0.70, note: "Includes chuck roll area" },
      { canonical_id: "chuck_blade", match_type: "composite", confidence: 0.65, note: "Includes blade portions" },
      { canonical_id: "chuck_eye_steak", match_type: "composite", confidence: 0.55, note: "Chuck eye is within høyrygg but never isolated" },
    ],
    synonyms: ["høgrygg"],
    description: "The core Norwegian beef cut — a large, undivided chuck section that includes what Americans would separate into chuck roll, blade, chuck eye, and parts of the neck. One of the most important Norwegian beef cuts, used primarily for slow-cooked stews and soups. Norwegian butchers do not fragment this into steaks the way US butchers do.",
    notes: "This is a defining example of how Nordic butchery groups where US butchery fragments. Denver steak and flat iron are anatomically within høyrygg but are not isolated as separate cuts in Norway.",
  },

  {
    id: "bankekjott_no",
    name: "Bankekjøtt",
    region: "norway",
    maps_to: [
      { canonical_id: "inside_round", match_type: "cultural", confidence: 0.65, note: "Usually from the top round, but defined by preparation method" },
      { canonical_id: "outside_round", match_type: "cultural", confidence: 0.55, note: "May also come from bottom round" },
    ],
    synonyms: ["bankekjøt"],
    description: "Literally 'pounded meat' — thin slices of beef from the round that are tenderized by pounding and then braised slowly. Similar in concept to Swiss steak. Defined by the preparation method rather than a specific anatomical location. A traditional Norwegian comfort food.",
    notes: "A preparation-defined cut rather than an anatomical one — this is characteristic of Nordic butchery traditions.",
  },

  // === SWEDEN ===

  {
    id: "rostbiff_se",
    name: "Rostbiff",
    region: "sweden",
    maps_to: [
      { canonical_id: "inside_round", match_type: "cultural", confidence: 0.70, note: "Usually cut from innanlår (top round)" },
      { canonical_id: "top_sirloin", match_type: "approximate", confidence: 0.55, note: "May also come from the sirloin area" },
    ],
    description: "In Sweden, Rostbiff is both a cut name AND a preparation. Unlike in the US where 'roast beef' is a cooking method, Swedish Rostbiff is a specific retail product — a boneless roast from the round or sirloin, oven-roasted and served cold in thin slices. The dual identity (cut + dish) makes it a classic Tier 3 entity.",
    notes: "Dual identity: anatomical cut AND culinary preparation. This pattern is common in Nordic butchery.",
  },

  {
    id: "hogrev_se",
    name: "Högrev",
    region: "sweden",
    maps_to: [
      { canonical_id: "chuck_roll", match_type: "composite", confidence: 0.70, note: "Core of the högrev" },
      { canonical_id: "chuck_blade", match_type: "composite", confidence: 0.65, note: "Blade area included" },
      { canonical_id: "chuck_eye_steak", match_type: "composite", confidence: 0.50, note: "Chuck eye within but not isolated" },
    ],
    synonyms: ["högrygg"],
    description: "Sweden's primary chuck cut — a large shoulder section encompassing what Americans would call chuck roll, blade, and chuck eye. Traditionally the 'king of stews' but increasingly used for premium 'Högrevsburgare' (chuck burgers). The Swedish equivalent of Norwegian høyrygg. Modern Swedish butchers are beginning to extract US-style steaks (flat iron, denver) from within the högrev.",
  },

  {
    id: "fransyska_se",
    name: "Fransyska",
    region: "sweden",
    maps_to: [
      { canonical_id: "sirloin_tip", match_type: "close", confidence: 0.80, note: "Anatomically the knuckle/sirloin tip" },
    ],
    description: "One of Sweden's most important everyday beef cuts — anatomically the sirloin tip (knuckle), but culturally far more significant than its US equivalent. In the US, knuckle is often ground or sold as budget 'sirloin tip steaks.' In Sweden, Fransyska is a premium roasting joint used for the traditional 'Slottstek' (castle roast) — one of Sweden's most iconic beef dishes. Same muscle, completely different status.",
    notes: "A perfect example of cultural value divergence: low status in the US, high status in Sweden.",
  },

  // === FINLAND ===

  {
    id: "paahtopaisti_fi",
    name: "Paahtopaisti",
    region: "finland",
    maps_to: [
      { canonical_id: "top_sirloin", match_type: "cultural", confidence: 0.65, note: "Often from the top sirloin area, but defined by cooking function" },
      { canonical_id: "inside_round", match_type: "cultural", confidence: 0.60, note: "May also come from inside round" },
    ],
    description: "Literally 'roasting roast' — Finland's core roast beef cut, defined by its intended cooking use rather than a specific muscle. Sold as a whole 1-2kg piece for oven roasting. A Finn may not know 'top sirloin steak' but absolutely knows paahtopaisti. This is the defining example of Finland's function-first butchery system — cuts are named for what you do with them, not what muscle they are.",
    notes: "Function-defined cut — characteristic of Finnish butchery philosophy. The name tells you the cooking method, not the anatomy.",
  },

  {
    id: "etuselka_fi",
    name: "Etuselkä",
    region: "finland",
    maps_to: [
      { canonical_id: "chuck_roll", match_type: "composite", confidence: 0.65, note: "Front-back shoulder area" },
      { canonical_id: "chuck_blade", match_type: "composite", confidence: 0.60, note: "Includes blade portions" },
    ],
    description: "Literally 'front back' — Finland's primary chuck/shoulder cut. The quintessential meat for Karjalanpaisti (Karelian stew), one of Finland's most iconic traditional dishes. Almost never sold as steaks. In Finland, if you want beef for a stew, you ask for etuselkä. The Karelian stew tradition is so strong that it shapes which cuts are popular — and etuselkä is at the center.",
    notes: "The cultural importance of Karjalanpaisti (Karelian stew) drives demand for this cut and reduces incentive to isolate individual steak cuts from the chuck.",
  },

  {
    id: "pihvi_fi",
    name: "Pihvi",
    region: "finland",
    maps_to: [
      { canonical_id: "inside_round", match_type: "cultural", confidence: 0.55, note: "Generic pihvi usually comes from the round" },
      { canonical_id: "top_sirloin", match_type: "approximate", confidence: 0.45, note: "Higher-quality pihvi from sirloin" },
    ],
    description: "The generic Finnish word for 'steak' — but unlike English where steak always has a qualifier (ribeye, strip, etc.), plain 'naudan pihvi' (beef steak) usually means a lean cut from the round. Similar to the Dutch 'biefstuk' ambiguity. For premium steaks, Finns specify the cut (entrecôte, sisäfilee, ulkofilee). Ordering just 'pihvi' at a restaurant will get you something very different from what an American expects from 'steak.'",
    notes: "Generic term — flag for US users who expect premium steak quality from the unqualified word 'pihvi'.",
  },

  // === DENMARK ===

  {
    id: "tyksteg_dk",
    name: "Tyksteg",
    region: "denmark",
    maps_to: [
      { canonical_id: "top_sirloin", match_type: "close", confidence: 0.75, note: "Tyksteg ('thick roast') maps to the sirloin/rump area" },
    ],
    synonyms: ["tykstegsbøf"],
    description: "Literally 'thick roast' — a Danish cut from the sirloin/rump area. While Americans cut this into individual sirloin steaks, Danes traditionally sell it as a whole roast. For a US-style sirloin steak, ask for Tykstegsbøf (thick roast steak). The cut quality falls between premium steaks and everyday roasting joints.",
  },


  // === RUSSIA ===
  {
    id: "kategoriya_1_ru",
    name: "Мясо 1 категории",
    region: "russia",
    maps_to: [
      { canonical_id: "tenderloin", match_type: "cultural", confidence: 0.70, note: "Category 1 includes tenderloin as the premium cut" },
      { canonical_id: "striploin", match_type: "cultural", confidence: 0.65, note: "Also includes the loin region" },
      { canonical_id: "ribeye", match_type: "cultural", confidence: 0.60, note: "Rib region falls within Category 1" },
    ],
    synonyms: ["mjaso pervoj kategorii", "первая категория"],
    description: "Category 1 meat in the GOST classification system — the premium cuts including tenderloin, loin, and rib sections. Unlike US USDA grading (Prime/Choice/Select) which grades the whole carcass, Russian GOST categories classify by anatomical location. A Russian shopper looking for premium beef asks for 'first category' meat rather than a specific cut name.",
    notes: "GOST category system is a fundamentally different organizing principle from USDA — by location, not by marbling/grade.",
  },

  {
    id: "bef_stroganov_cut_ru",
    name: "Мясо для бефстроганов",
    region: "russia",
    maps_to: [
      { canonical_id: "tenderloin", match_type: "close", confidence: 0.80, note: "Traditional choice for authentic beef stroganoff" },
      { canonical_id: "striploin", match_type: "approximate", confidence: 0.65, note: "Also acceptable — thinly sliced" },
    ],
    synonyms: ["stroganoff beef", "бефстроганов мясо"],
    description: "In Russia, butchers and recipes refer to a specific cut preparation for Beef Stroganoff — traditionally tenderloin (вырезка) cut into thin strips across the grain. The cut choice is so culturally tied to the dish that butchers will often pre-slice it when you ask for 'мясо для бефстроганов'. A format-driven cut category, not a specific muscle.",
    notes: "Format-driven: the cut is defined by slicing method, not anatomy.",
  },

  {
    id: "kholodets_cut_ru",
    name: "Мясо для холодца",
    region: "russia",
    maps_to: [
      { canonical_id: "fore_shank", match_type: "close", confidence: 0.85, note: "Front shank is the classic choice for maximum gelatin" },
      { canonical_id: "hind_shank", match_type: "close", confidence: 0.80, note: "Hind shank also used" },
    ],
    synonyms: ["студень", "holodets", "studen"],
    description: "The cut selection for Kholodets (beef aspic) — a traditional Russian dish requiring maximum gelatin extraction. Butchers recognize 'мясо для холодца' as a specific request for shanks with bones, joints, and connective tissue. The US shank sold as osso buco is not interchangeable — kholodets requires specific pieces with higher collagen content.",
    notes: "The cultural dish drives which specific cut is selected — a common pattern in Russian butchery.",
  },

  // === UKRAINE ===
  {
    id: "borscht_cut_ua",
    name: "М'ясо для борщу",
    region: "ukraine",
    maps_to: [
      { canonical_id: "brisket", match_type: "close", confidence: 0.75, note: "Traditional choice for rich borscht" },
      { canonical_id: "hind_shank", match_type: "close", confidence: 0.75, note: "Bone-in shank for depth" },
      { canonical_id: "short_ribs", match_type: "approximate", confidence: 0.60, note: "Also used for flavor and collagen" },
    ],
    synonyms: ["борщове м'ясо", "myaso dlya borshchu"],
    description: "Ukrainian borscht is not just a dish but a defining cultural institution — and the cut of beef used is critical. Traditional Ukrainian butchers recognize 'м'ясо для борщу' (meat for borscht) as a specific request: bone-in, brisket or shank with good fat and collagen content. The cut selection is functional (for stock depth) rather than anatomical. UNESCO recognized Ukrainian borscht as intangible cultural heritage in 2022.",
    notes: "Culturally significant — borscht is a defining element of Ukrainian cuisine.",
  },

  {
    id: "kholodets_cut_ua",
    name: "М'ясо для холодцю",
    region: "ukraine",
    maps_to: [
      { canonical_id: "fore_shank", match_type: "close", confidence: 0.85 },
      { canonical_id: "hind_shank", match_type: "close", confidence: 0.80 },
    ],
    synonyms: ["холодець", "studynets", "студенець"],
    description: "The Ukrainian version of aspic — kholodets (холодець) or studynets (студенець). Same functional cut category as the Russian version, but Ukrainian butchery is increasingly using Ukrainian-language terminology (холодець/студенець) rather than Russian-origin terms. The cut preference is identical: shanks with maximum bone, joint, and collagen.",
    notes: "Post-2022 Ukrainian butchery is actively shifting to Ukrainian-language terminology — important to capture the distinction from Russian usage.",
  },

  // === BELGIUM ===
  {
    id: "plat_de_cotes_be",
    name: "Plat de côtes",
    region: "belgium",
    maps_to: [
      { canonical_id: "short_ribs", match_type: "approximate", confidence: 0.65, note: "Plate/rib side cut" },
      { canonical_id: "flank", match_type: "approximate", confidence: 0.55, note: "Can also refer to flank area depending on butcher" },
    ],
    description: "A Belgian butchery term with significant regional variation — 'plat de côtes' can refer to the short rib plate area OR the flank, depending on the specific butcher and region within Belgium. Used primarily for slow-braised dishes like carbonade flamande (Belgian beef stew). Flag this as requiring butcher clarification.",
    notes: "Regional ambiguity within Belgium — one of the more unstable cut names in Belgian butchery.",
  },

  {
    id: "carbonade_cut_be",
    name: "Viande à carbonade",
    region: "belgium",
    maps_to: [
      { canonical_id: "chuck_roll", match_type: "close", confidence: 0.75, note: "Traditional choice for carbonade flamande" },
      { canonical_id: "shoulder_clod", match_type: "approximate", confidence: 0.65, note: "Also acceptable" },
    ],
    synonyms: ["vlees voor carbonade", "carbonade beef"],
    description: "The cut used for Belgium's national dish, carbonade flamande (Flemish beef and beer stew). Belgian butchers recognize this as a specific request — chunks of chuck or shoulder, well-marbled, suitable for 2-3 hours of braising in Belgian brown ale. Like many cultural cuts, the selection is defined by the dish, not by precise anatomy.",
    notes: "Belgium's national beef dish drives demand for this specific cut category.",
  },

  // === POLAND ===
  {
    id: "zrazowa_pl",
    name: "Zrazowa",
    region: "poland",
    maps_to: [
      { canonical_id: "inside_round", match_type: "close", confidence: 0.80, note: "Zrazowa górna — top round for premium zrazy" },
      { canonical_id: "outside_round", match_type: "close", confidence: 0.75, note: "Zrazowa dolna — bottom round for stewing" },
    ],
    synonyms: ["zrazy beef", "mięso na zrazy"],
    description: "A foundational Polish beef category — lean round cuts specifically prepared for Zrazy zawijane (stuffed beef rolls), one of Poland's most iconic traditional dishes. Polish butchers carefully separate Zrazowa górna (top, more tender) and Zrazowa dolna (bottom, tougher). While US round cuts are often seen as cheap burger meat, Polish round cuts are prized for this culinary tradition and carefully trimmed.",
    notes: "The Zrazy tradition elevates the status of round cuts in Polish butchery — a clear example of cultural value divergence.",
  },

  {
    id: "szponder_pl",
    name: "Szponder",
    region: "poland",
    maps_to: [
      { canonical_id: "short_ribs", match_type: "cultural", confidence: 0.70, note: "Anatomically equivalent to US short ribs, but culturally treated as soup meat" },
    ],
    description: "Polish short ribs — but culturally worlds apart from the American BBQ tradition. In Poland, szponder is historically 'soup meat' for rosół (Polish beef broth), sold cut into small chunks rather than as long meaty slabs. An American asking for 'short ribs' at a traditional Polish butcher will likely receive szponder prepared for soup rather than BBQ. Modern Polish BBQ enthusiasts are starting to request szponder 'w długich kawałkach' (in long pieces).",
    notes: "Same anatomical cut, completely different cultural expectations — similar to German Tafelspitz.",
  },

  {
    id: "ligawa_pl",
    name: "Ligawa",
    region: "poland",
    maps_to: [
      { canonical_id: "eye_of_round", match_type: "close", confidence: 0.85, note: "Anatomically the eye of round; often called 'false tenderloin' in Polish" },
    ],
    description: "Polish eye of round — often called 'fałszywa polędwica' (false tenderloin) because of its resemblance in shape to tenderloin. Ligawa is lean, clean, and cylindrical but requires slow cooking to avoid toughness. Used for traditional Polish roast beef dishes, thin-sliced cold cuts, and rolled roasts. The 'false tenderloin' nickname is a warning: looks premium, cooks nothing like one.",
    notes: "Like German 'Falsches Filet' — the name itself warns that this is not the real tenderloin.",
  },

  // === CZECH REPUBLIC ===
  {
    id: "svickova_dish_cz",
    name: "Svíčková na smetaně",
    region: "czechia",
    maps_to: [
      { canonical_id: "tenderloin", match_type: "cultural", confidence: 0.70, note: "Named after tenderloin, but the dish usually uses different cuts" },
      { canonical_id: "inside_round", match_type: "close", confidence: 0.75, note: "Vrchní šál (top round) is most commonly used for the actual dish" },
      { canonical_id: "petite_tender", match_type: "close", confidence: 0.70, note: "Falešná svíčková (chuck tender) also widely used" },
    ],
    description: "Czech Republic's national dish — but with a naming paradox. 'Svíčková' means tenderloin, yet most Czechs use cheaper cuts like Vrchní šál (top round) or Falešná svíčková (chuck tender) because they braise better in the cream sauce. True tenderloin is too lean and expensive for this dish. The name refers to the original luxury version, while the everyday version uses different muscles entirely.",
    notes: "A naming paradox: the dish is named after a cut it rarely uses. Critical for user understanding.",
  },

  {
    id: "veverka_cz",
    name: "Veverka",
    region: "czechia",
    maps_to: [
      { canonical_id: "hanger", match_type: "exact", confidence: 0.90, note: "Anatomically identical to hanger steak" },
    ],
    description: "Literally 'the squirrel' — the Czech name for hanger steak. A traditional butcher's cut that was kept by the butcher for personal use because of its intense flavor. Only one per animal. The whimsical name is shared across Central European butchery (Slovak and Slovenian both use similar animal-inspired names for this cut). Increasingly sought after by Czech steak enthusiasts.",
    notes: "Central European 'butcher's secret' cut — shared naming tradition across Czech/Slovak/Slovenian butchery.",
  },

  {
    id: "zebra_soup_cz",
    name: "Žebra na polévku",
    region: "czechia",
    maps_to: [
      { canonical_id: "short_ribs", match_type: "cultural", confidence: 0.65, note: "Anatomically short ribs, but culturally soup bones — trimmed thin, not meaty" },
    ],
    description: "Czech 'soup ribs' — anatomically equivalent to US short ribs, but culturally a completely different product. Czech butchers trim žebra very thin and sell them specifically for soup broth. An American expecting thick, meaty BBQ-style short ribs will find Czech žebra disappointingly bony. For BBQ-style ribs, ask for 'masitá žebra' (meaty ribs) or 'vysoký bok' (high side).",
  },

  // === AUSTRIA ===
  {
    id: "tafelspitz_at",
    name: "Tafelspitz",
    region: "austria",
    maps_to: [
      { canonical_id: "sirloin_cap", match_type: "cultural", confidence: 0.80, note: "Anatomically the sirloin cap (picanha) — but boiled, not grilled" },
    ],
    description: "Austria's national dish — and the defining example of cultural cut divergence in the entire Cutranslator ontology. Anatomically identical to Brazilian picanha (sirloin cap), but the preparation is the polar opposite: Tafelspitz is simmered slowly in broth for hours and served with apple-horseradish sauce. The fat cap is essential for flavor during boiling. If you want to grill it, ask the butcher NOT to trim the fat cap — they typically trim it lean for the traditional boiled preparation.",
    notes: "The Tafelspitz-Picanha connection is arguably the most valuable 'same cut, different world' insight in the database.",
  },

  {
    id: "gulasch_cut_at",
    name: "Gulaschfleisch",
    region: "austria",
    maps_to: [
      { canonical_id: "hind_shank", match_type: "close", confidence: 0.85, note: "Wadschinken is the ONLY acceptable cut for authentic Wiener Saftgulasch" },
    ],
    description: "In Austria, authentic Gulasch has a strict rule: Wadschinken (shank) is the only acceptable meat. Using chuck is considered a culinary error because the collagen from the shank creates the sauce's characteristic thickness. Austrian butchers sell 'Gulaschfleisch' specifically pre-cut from the shank. This is not 'stew meat' in the American sense — it's a precise cut for a precise dish.",
    notes: "The Gulasch rule extends to Czech and Hungarian cuisine — shank is king for Central European stews.",
  },

  {
    id: "wiener_schnitzel_cut_at",
    name: "Schnitzelfleisch",
    region: "austria",
    maps_to: [
      { canonical_id: "sirloin_tip", match_type: "close", confidence: 0.80, note: "Nuss/Kugel is the prime Schnitzel cut" },
      { canonical_id: "inside_round", match_type: "close", confidence: 0.75, note: "Schale also used for Schnitzel" },
    ],
    description: "The cut for Wiener Schnitzel (when made with beef instead of veal). Austrian butchers recognize 'Schnitzelfleisch' as a request for thin, lean slices from the Nuss (knuckle/sirloin tip) or Schale (inside round). These are pounded thin, breaded, and fried. The US equivalent would be top round or sirloin tip steaks, but Austrian preparation demands much thinner slicing.",
  },

  // === SLOVAKIA ===
  {
    id: "falosna_svieckovica_sk",
    name: "Falošná sviečkovica",
    region: "slovakia",
    maps_to: [
      { canonical_id: "eye_of_round", match_type: "close", confidence: 0.75, note: "Often the eye of round" },
      { canonical_id: "petite_tender", match_type: "close", confidence: 0.70, note: "Can also be chuck tender" },
    ],
    description: "The Slovak 'false tenderloin' — a cut that looks exactly like tenderloin but is actually the eye of round or chuck tender. If grilled like a steak, it will be extremely tough. Slovak butchers sell it clearly labeled as 'falošná' (false) as a warning, but tourists often miss the distinction. A budget-friendly braising cut, NOT a steak substitute.",
    notes: "The 'false tenderloin' concept is shared across Czech, Slovak, Hungarian, and Slovenian butchery — each country has its own name for the same trap.",
  },

  {
    id: "gulash_cut_sk",
    name: "Mäso na guláš",
    region: "slovakia",
    maps_to: [
      { canonical_id: "hind_shank", match_type: "close", confidence: 0.85, note: "Glejovka (shank) is required for authentic kotlíkový guláš" },
    ],
    description: "Slovak goulash meat — specifically from the Glejovka (shank). The same Central European rule applies: shank is mandatory for authentic goulash because its collagen creates the thick, sticky sauce. In Slovakia, Kotlíkový guláš (kettle goulash) cooked over an open fire is a deeply ingrained cultural tradition, and the cut choice is non-negotiable.",
  },

  // === HUNGARY ===
  {
    id: "hegyesfarto_hu",
    name: "Hegyesfartő",
    region: "hungary",
    maps_to: [
      { canonical_id: "sirloin_cap", match_type: "close", confidence: 0.80, note: "The Hungarian picanha — 'pointed rump'" },
    ],
    description: "Literally 'pointed rump' — Hungary's sirloin cap. Like Austrian Tafelspitz and Brazilian picanha, this is anatomically the same muscle but traditionally prepared very differently. Hungarian butchery values it as a premium roasting cut, typically oven-roasted as a whole joint rather than grilled as steaks or skewered as in Brazilian churrasco.",
  },

  {
    id: "porkolt_cut_hu",
    name: "Pörkölt hús",
    region: "hungary",
    maps_to: [
      { canonical_id: "hind_shank", match_type: "close", confidence: 0.90, note: "Lábszár is the only acceptable cut for authentic Pörkölt" },
    ],
    description: "The cut for Hungary's iconic Pörkölt (paprika stew — NOT goulash, which is a soup in Hungary). Lábszár (shank) is the required cut. The high collagen content creates the dish's characteristic thick, paprika-red sauce. Using lean round or chuck is considered a fundamental error. Hungarian butchers sell pre-cut 'pörkölt hús' specifically from the shank.",
    notes: "Important distinction: in Hungary, Gulyás is a SOUP. Pörkölt is the STEW. Most of the world confuses them.",
  },

  {
    id: "feherpecsenye_hu",
    name: "Fehérpecsenye",
    region: "hungary",
    maps_to: [
      { canonical_id: "eye_of_round", match_type: "close", confidence: 0.80, note: "The Hungarian 'white roast' — looks like tenderloin but is tough" },
    ],
    description: "Literally 'white roast' — the Hungarian version of the 'false tenderloin' that appears across Central Europe. A very lean eye of round that resembles tenderloin in shape but requires completely different cooking. Used for traditional Hungarian thin steaks (szelet) that are pounded, breaded, and fried — never grilled rare like an actual tenderloin steak.",
  },

  // ----- CROATIA -----
  {
    id: "pasticada_cut_hr",
    name: "Meso za pašticadu",
    region: "croatia",
    maps_to: [
      { canonical_id: "inside_round", match_type: "close", confidence: 0.80, note: "Frikando (top round) is the traditional choice" },
      { canonical_id: "sirloin_tip", match_type: "close", confidence: 0.70, note: "Orah (knuckle) also used" },
    ],
    description: "The cut for Pašticada — Dalmatia's most famous beef dish, a slow-braised pot roast in a sweet-and-sour wine sauce. Unlike American pot roast (typically chuck), Pašticada requires lean cuts from the round: Frikando (top round) or Orah (knuckle). Croatian tradition considers chuck too fatty for proper Pašticada — the opposite of American logic.",
    notes: "Using chuck for Pašticada is considered a mistake in Dalmatian cooking — cultural value inversion vs US pot roast.",
  },

  {
    id: "cevapi_blend_hr",
    name: "Meso za ćevape",
    region: "croatia",
    maps_to: [
      { canonical_id: "chuck_roll", match_type: "close", confidence: 0.75, note: "Vrat (neck) is the primary beef cut" },
      { canonical_id: "chuck_blade", match_type: "approximate", confidence: 0.65, note: "Shoulder also used in the blend" },
    ],
    synonyms: ["mljeveno za ćevape"],
    description: "The meat blend for Croatian Ćevapi — skinless grilled minced meat fingers. In Croatia (unlike Bosnia), the blend is typically beef + pork (miješano). The beef portion comes from Vrat (neck/chuck) for its fat content. Important: in Croatia, ground meat in shops is often 50/50 beef-pork by default. For 100% beef, specify '100% govedina'.",
    notes: "Croatian ćevapi = beef+pork blend. Bosnian ćevapi = 100% beef. This distinction matters.",
  },

  {
    id: "americki_rez_hr",
    name: "Američki rez rebra",
    region: "croatia",
    maps_to: [
      { canonical_id: "short_ribs", match_type: "cultural", confidence: 0.70, note: "Same cut as US short ribs, but you must ask for 'American cut' to get thick pieces" },
    ],
    description: "Croatian short ribs are traditionally trimmed very thin and sold for soup broth. To get the thick, meaty BBQ-style short ribs that Americans expect, you must specifically request 'američki rez' (American cut). Without this specification, you'll receive thin bony strips intended for boiling. Modern Croatian BBQ culture is growing, so butchers increasingly understand the request.",
  },

  // ----- SLOVENIA -----
  {
    id: "veverica_si",
    name: "Veverica",
    region: "slovenia",
    maps_to: [
      { canonical_id: "hanger", match_type: "exact", confidence: 0.90, note: "Anatomically identical to hanger steak" },
    ],
    description: "Literally 'the squirrel' — the Slovenian hanger steak. Part of the Central European tradition where the hanger steak receives animal-inspired names (Czech: veverka, also 'squirrel'). Only one per animal, traditionally kept by the butcher for personal consumption due to its intense beefy flavor. Increasingly available in Slovenian steakhouses and specialty butchers.",
    notes: "Same 'squirrel' naming convention as Czech veverka — a shared Central European butcher's tradition.",
  },

  {
    id: "golaz_cut_si",
    name: "Meso za golaž",
    region: "slovenia",
    maps_to: [
      { canonical_id: "hind_shank", match_type: "close", confidence: 0.85, note: "Boge/Goleno (shank) is required for authentic Slovenian golaž" },
    ],
    description: "Slovenian goulash meat — from the Boge (shank). The same Central European rule applies across Slovenia, Austria, Czech Republic, Slovakia, and Hungary: shank is mandatory because its collagen creates the sauce's thickness. Using lean round or chuck is a fundamental cooking error in this tradition. Slovenian butchers sell pre-cut golaž meat specifically from the shank.",
  },

  // ----- BOSNIA -----
  {
    id: "cevapi_cut_ba",
    name: "Meso za ćevape",
    region: "bosnia",
    maps_to: [
      { canonical_id: "chuck_roll", match_type: "close", confidence: 0.80, note: "Vrat (neck) is the primary cut — must be double-ground" },
      { canonical_id: "chuck_blade", match_type: "close", confidence: 0.70, note: "Lopatka (shoulder) added for fat balance" },
    ],
    synonyms: ["mljeveno za ćevape", "ćevapi meso"],
    description: "The sacred meat for Bosnian Ćevapi — the heart of Balkan food culture. In Bosnia (unlike Croatia), Ćevapi are ALWAYS 100% beef (no pork), reflecting the country's Muslim majority. The meat must come from Vrat (neck) and Lopatka (shoulder), ground twice (dva puta mljeveno) for the right texture. The fat ratio and grind texture are considered as important as the spicing. If an American wants to replicate authentic Bosnian Ćevapi at home, they should ask their butcher to grind chuck neck twice.",
    notes: "100% beef in Bosnia — this is the fundamental difference from Croatian ćevapi (beef+pork blend).",
  },

  {
    id: "bosanski_lonac_cut_ba",
    name: "Meso za bosanski lonac",
    region: "bosnia",
    maps_to: [
      { canonical_id: "brisket", match_type: "close", confidence: 0.75, note: "Grudi (brisket) for fat and depth" },
      { canonical_id: "chuck_roll", match_type: "close", confidence: 0.70, note: "Vrat (neck) with bones for stock" },
    ],
    description: "The meat selection for Bosanski Lonac (Bosnian Pot) — the national slow-cooked stew. Requires a mix of fatty, bone-in cuts: Grudi (brisket) and Vrat (neck) with bones included. Using lean 'stew meat' (as Americans might) is considered wrong — the bones and fat give the broth its signature depth. Cooked in clay pots for 4+ hours with layered vegetables.",
  },

  // ----- MONTENEGRO -----
  // ----- TURKEY -----
  {
    id: "dos_tr",
    name: "Döş",
    region: "turkey",
    maps_to: [
      { canonical_id: "brisket", match_type: "cultural", confidence: 0.70, note: "Anatomically brisket/plate area, but culturally ground for kebabs" },
      { canonical_id: "short_plate", match_type: "approximate", confidence: 0.60, note: "Overlaps with plate area" },
    ],
    description: "The 'King of Minced Meat' in Turkish butchery — anatomically the brisket/plate area but with a completely different cultural destiny. While Americans smoke whole briskets for BBQ, Turkish butchers typically grind Döş for premium kebabs and köfte because of its ideal fat-to-lean ratio. An American looking for whole brisket to smoke may find it's already been ground before they can buy it. Döş kıyma (ground brisket) is considered the highest quality ground beef in Turkey.",
    notes: "Same anatomy, opposite fate: US = whole for smoking, Turkey = ground for kebabs. A defining cultural divergence.",
  },

  {
    id: "kusbasi_tr",
    name: "Kuşbaşı",
    region: "turkey",
    maps_to: [
      { canonical_id: "chuck_roll", match_type: "cultural", confidence: 0.60, note: "Default kuşbaşı comes from chuck" },
      { canonical_id: "ribeye", match_type: "cultural", confidence: 0.55, note: "Premium kuşbaşı specifies Antrikot" },
    ],
    synonyms: ["kusbasi", "kuş başı"],
    description: "Literally 'bird's head size' — Turkish stew meat cubed to a specific, standardized size. Unlike American 'stew meat' (random scraps from various primals), Turkish Kuşbaşı is a precise product. Quality varies by source: generic kuşbaşı comes from chuck, but premium versions specify the primal (Antrikot Kuşbaşı = ribeye cubes, Bonfile Kuşbaşı = tenderloin cubes). Always ask which cut your kuşbaşı comes from.",
    notes: "Standardized cube cut — Turkish butchery specifies origin primal for quality grading, unlike US 'stew meat'.",
  },

  {
    id: "nu_tr",
    name: "Nu",
    region: "turkey",
    maps_to: [
      { canonical_id: "eye_of_round", match_type: "cultural", confidence: 0.80, note: "Anatomically eye of round — budget in US, premium deli cut in Turkey" },
    ],
    description: "The Turkish eye of round — anatomically identical to the US eye of round, but with reversed cultural status. In the US, this is a budget cut for jerky or slow-roasting. In Turkey, Nu is highly valued as an extremely lean, 'clean' meat for Rozbif (deli-style cold cuts) — thinly sliced and served as a premium appetizer. Same muscle, completely different price point and cultural status.",
    notes: "Cultural status inversion: budget cut in US, premium deli cut in Turkey.",
  },

  // ----- GREECE -----
  {
    id: "brizola_gr",
    name: "Μπριζόλα",
    region: "greece",
    maps_to: [
      { canonical_id: "ribeye", match_type: "approximate", confidence: 0.65, note: "Could be a rib steak (σπαλομπριζόλα)" },
      { canonical_id: "striploin", match_type: "approximate", confidence: 0.60, note: "Could be a strip/T-bone (κόντρα μπριζόλα)" },
      { canonical_id: "t_bone", match_type: "approximate", confidence: 0.55, note: "Could be a T-bone" },
    ],
    synonyms: ["brizola", "mprizola"],
    description: "The most ambiguous steak term in Greek butchery — μπριζόλα (brizola) is a GENERIC term for any bone-in steak. It could be a rib steak (σπαλομπριζόλα), a T-bone/strip (κόντρα μπριζόλα), or even a bone-in sirloin. If you order 'brizola' at a Greek taverna, you won't know which cut you're getting unless you specify. For ribeye specifically, ask for σπαλομπριζόλα. For strip, ask for κόντρα μπριζόλα.",
    notes: "Generic term — similar to Dutch biefstuk and Finnish pihvi. Must specify sub-type to know what you're getting.",
  },

  {
    id: "pontiki_gr",
    name: "Ποντίκι",
    region: "greece",
    maps_to: [
      { canonical_id: "hind_shank", match_type: "cultural", confidence: 0.85, note: "Anatomically shank — but culturally elevated" },
    ],
    synonyms: ["pontiki"],
    description: "Literally 'the mouse' — named for the shank's tapered shape. In Greek culture, Ποντίκι has a much higher status than American shank. It is considered one of the healthiest, most nutritious parts of the animal — traditionally given to children and the elderly for its gelatinous, mineral-rich properties. In the US, shank is often overlooked or sold only as osso buco. In Greece, it commands respect and a higher relative price.",
    notes: "Cultural elevation: niche/budget in US, health food for families in Greece.",
  },

  // ----- ISRAEL -----
  {
    id: "asado_il",
    name: "אסאדו",
    region: "israel",
    maps_to: [
      { canonical_id: "short_ribs", match_type: "close", confidence: 0.85, note: "Number 9 — short ribs, bone-in" },
    ],
    synonyms: ["asado"],
    description: "In Israel, 'Asado' is a CUT NAME (Number 9 = short ribs), NOT a cooking method. This is the opposite of South America, where 'asado' means BBQ/grilling. An Israeli menu listing 'asado' means you're getting slow-cooked or grilled short ribs. This cross-linguistic trap is one of the most confusing beef term collisions in the global ontology — same word, completely different meaning depending on the country.",
    notes: "Same word, different meaning: Israel = a cut (short ribs), South America = a cooking method (BBQ). Critical disambiguation.",
  },

  {
    id: "cholent_cut_il",
    name: "בשר לחמין",
    region: "israel",
    maps_to: [
      { canonical_id: "fore_shank", match_type: "close", confidence: 0.80, note: "Number 18 — shank with bone for Shabbat Cholent/Hamin" },
      { canonical_id: "brisket", match_type: "close", confidence: 0.75, note: "Brisket also used" },
    ],
    synonyms: ["basar l'chamin", "cholent meat", "hamin meat"],
    description: "The cut for Hamin/Cholent — the traditional Jewish Sabbath slow-cooked stew that cooks from Friday afternoon through Saturday lunch (12+ hours). Requires bone-in cuts with maximum collagen: Shrir (shank, Number 18) or Chaze (brisket). The extreme cooking time means only the most collagen-rich cuts survive without drying out. Israeli butchers recognize 'בשר לחמין' as a specific cut request, not just generic stew meat.",
    notes: "12+ hour cooking demands extreme collagen content. Unique to Jewish culinary tradition.",
  },

  {
    id: "file_medumah_il",
    name: "פילה מדומה",
    region: "israel",
    maps_to: [
      { canonical_id: "eye_of_round", match_type: "close", confidence: 0.80, note: "Number 6 — the Israeli 'false filet'" },
    ],
    synonyms: ["file medumah", "false filet"],
    description: "Literally 'imaginary filet' or 'false filet' — Number 6 in the Israeli system. Looks identical to tenderloin (Number 3) but is actually the eye of round from the leg. Much cheaper than true filet, but if grilled like a steak it will be extremely tough. Israeli butchers sell it clearly labeled, but tourists and new immigrants often buy it thinking they're getting a bargain tenderloin. FOR BRAISING ONLY.",
    notes: "Part of the global 'false tenderloin' family — Czech falešná svíčková, German falsches Filet, Hungarian fehérpecsenye, and now Israeli פילה מדומה. Every country has this trap.",
  },

  // ----- ROMANIA -----
  {
    id: "mici_cut_ro",
    name: "Carne pentru mici",
    region: "romania",
    maps_to: [
      { canonical_id: "chuck_roll", match_type: "close", confidence: 0.75, note: "Ceafă (neck) provides the fat content needed" },
      { canonical_id: "chuck_blade", match_type: "approximate", confidence: 0.65, note: "Shoulder also used in the blend" },
    ],
    synonyms: ["mici", "mititei", "carne de mici"],
    description: "The meat for Romania's most famous grilled dish — Mici (or Mititei), skinless grilled meat rolls. Traditional Mici are a blend of beef and lamb (sometimes pork), with the beef portion from the Ceafă (neck) for its fat content. Heavily spiced with garlic, cumin, and baking soda (which gives the characteristic puffiness). An American making Mici at home should use chuck with higher fat content and specify 100% beef (100% vită) if they don't want pork mixed in.",
    notes: "Like Bosnian ćevapi but with different spicing. Mici use baking soda; ćevapi do not.",
  },

  {
    id: "ciorba_cut_ro",
    name: "Carne pentru ciorbă",
    region: "romania",
    maps_to: [
      { canonical_id: "hind_shank", match_type: "close", confidence: 0.85, note: "Rasol (shank) is the primary choice for depth and gelatin" },
      { canonical_id: "brisket", match_type: "close", confidence: 0.75, note: "Piept (brisket) also used for fat content" },
    ],
    description: "The cut for Ciorbă de văcuță (Romanian beef sour soup) — one of Romania's most beloved dishes. Requires bone-in cuts with high collagen: Rasol (shank) or Piept (brisket). The bone and connective tissue are essential for the broth's depth. Americans using lean 'stew meat' from the round will not achieve the authentic texture. Note: 'Rasol' is both the cut name AND a dish name (boiled beef with vegetables).",
    notes: "Rasol = both the shank cut and the boiled beef dish. Dual identity, similar to Swedish Rostbiff.",
  },

  // ----- BULGARIA -----
  {
    id: "kyufte_cut_bg",
    name: "Месо за кюфте",
    region: "bulgaria",
    maps_to: [
      { canonical_id: "chuck_roll", match_type: "close", confidence: 0.75, note: "Врат (neck) is the primary beef portion" },
    ],
    synonyms: ["kyufte meso", "кюфте месо", "kebapche meso"],
    description: "The ground meat for Bulgaria's iconic Kyufte (flat patties) and Kebapche (elongated rolls) — the Bulgarian equivalents of ćevapi and pljeskavica. Most ground meat sold in Bulgaria is a blend (typically 60% pork / 40% beef). For 100% beef, look for labels stating '100% говеждо' (govezhdo) or 'юнешко' (yuneshko). The beef portion comes from Врат (neck) for its fat-to-lean ratio.",
    notes: "Default Bulgarian ground meat = pork-beef blend. Must specify 100% beef explicitly.",
  },

  {
    id: "dzholan_bg",
    name: "Джолан",
    region: "bulgaria",
    maps_to: [
      { canonical_id: "hind_shank", match_type: "cultural", confidence: 0.85, note: "Anatomically identical to US shank, but culturally elevated" },
    ],
    synonyms: ["dzholan"],
    description: "Bulgarian shank — anatomically the same as US shank, but culturally a centerpiece cut rather than a budget afterthought. In Bulgaria, Джолан is often roasted whole with herbs as a primary oven-baked meal, or slow-cooked for rich collagen-heavy soups. In the US, shank is typically hidden away or sold only as osso buco. This cultural status difference means Bulgarian butchers treat shank with more care and trim it differently.",
    notes: "Cultural elevation: budget cut in the US, centerpiece cut in Bulgaria.",
  },

  // ----- ALBANIA -----
  {
    id: "qofte_cut_al",
    name: "Mish për qofte",
    region: "albania",
    maps_to: [
      { canonical_id: "chuck_roll", match_type: "close", confidence: 0.75, note: "Qafë (neck) is the primary cut" },
      { canonical_id: "chuck_blade", match_type: "approximate", confidence: 0.65, note: "Shpatull (shoulder) also used" },
    ],
    synonyms: ["mish i grirë për qofte"],
    description: "The ground meat for Albanian Qofte — the national soul food. Albanian butchers grind Qafë (neck) or Shpatull (shoulder) fresh, twice (mish i grirë i freskët), to get the right texture. Unlike pre-packaged American ground beef, Albanian qofte meat is always ground to order at the butcher shop. The fat content and freshness are considered critical — using pre-packaged ground beef is seen as a significant quality compromise.",
    notes: "Ground-to-order tradition — freshness is non-negotiable in Albanian butchery.",
  },

  // ----- NORTH MACEDONIA -----
  {
    id: "gjuvech_cut_mk",
    name: "Месо за ѓувеч",
    region: "north_macedonia",
    maps_to: [
      { canonical_id: "brisket", match_type: "close", confidence: 0.75, note: "Гради (brisket) provides fat and depth" },
      { canonical_id: "chuck_roll", match_type: "close", confidence: 0.70, note: "Врат (neck) for collagen-rich stewing" },
    ],
    synonyms: ["gjuvech meso", "ѓувеч месо"],
    description: "The cut for North Macedonia's Ѓувеч (Gjuveč) — a baked meat and vegetable stew popular across the Balkans. Requires fatty, bone-in cuts: Гради (brisket) or Врат (neck). Using lean US-style 'stew meat' fails because Gjuveč needs fat to meld with the roasted vegetables during the long baking process. Cooked in clay pots in a traditional oven.",
  },

  {
    id: "sac_cut_me",
    name: "Meso ispod sača",
    region: "montenegro",
    maps_to: [
      { canonical_id: "chuck_roll", match_type: "close", confidence: 0.70, note: "Vrat (neck) provides the fat needed" },
      { canonical_id: "short_ribs", match_type: "close", confidence: 0.70, note: "Rebra (ribs) for bone and flavor" },
    ],
    synonyms: ["sač meso", "ispod sača"],
    description: "The cut selection for Montenegro's signature cooking method — Ispod sača (under the bell), where meat cooks under a metal dome covered in hot coals. This requires fatty, bone-in cuts: Vrat (neck) or Rebra (ribs). Lean 'US-style' steaks will dry out under the sač. The slow, indirect heat transforms tough, collagen-rich cuts into fall-apart tender meat. This is Montenegro's equivalent of American low-and-slow BBQ, but with a medieval cooking apparatus.",
    notes: "Sač cooking requires fatty, bone-in cuts — the opposite of premium steakhouse cuts.",
  },

] as const;
