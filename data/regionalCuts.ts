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

] as const;
