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

  // ----- Ireland -----

  {
    id: "corned_beef_cut_ie",
    name: "Spiced Beef / Corned Beef",
    region: "ireland",
    maps_to: [
      { canonical_id: "outside_round", match_type: "cultural", confidence: 0.75, note: "Irish corned/spiced beef traditionally uses silverside (bottom round)" },
      { canonical_id: "brisket", match_type: "cultural", confidence: 0.70, note: "American corned beef uses brisket — different cut, same name" },
    ],
    synonyms: ["spiced beef", "corned beef"],
    description: "The most famous Irish beef export — but with a critical transatlantic difference. American corned beef uses brisket. Irish 'Spiced Beef' (the Christmas tradition) or salted beef typically uses Silverside (bottom round). If an American wants to make US-style corned beef in Ireland, they must specifically ask for brisket and cure it themselves. If they buy 'corned beef' from an Irish butcher, they'll get silverside.",
    notes: "Same name, different cut: US corned beef = brisket, Irish corned beef = silverside. Critical for expats.",
  },

  {
    id: "salmon_cut_ie",
    name: "Salmon Cut",
    region: "ireland",
    maps_to: [
      { canonical_id: "eye_of_round", match_type: "close", confidence: 0.85, note: "Anatomically the eye of round" },
    ],
    description: "A uniquely Irish term for the eye of round — named because the cross-section of the muscle resembles a salmon fillet in shape. No other English-speaking country uses this name. The salmon cut is lean and cylindrical, used for oven roasting and slicing thin. Part of Ireland's tradition of giving cuts evocative, descriptive names based on appearance rather than anatomy.",
    notes: "Unique Irish naming — not used in the UK, US, or any other English-speaking country.",
  },

  // ----- Switzerland -----

  {
    id: "entrecote_ch",
    name: "Entrecôte (Swiss)",
    region: "switzerland",
    maps_to: [
      { canonical_id: "striploin", match_type: "close", confidence: 0.85, note: "In Switzerland, entrecôte = striploin/NY strip" },
    ],
    description: "The biggest naming trap in Swiss butchery — and different from neighboring France. In France, Entrecôte = Ribeye. In Switzerland, Entrecôte = Striploin (NY Strip). An expat moving from Paris to Zurich who orders 'entrecôte' will get a completely different cut. To get an actual ribeye in Switzerland, ask for Hohrücken-Steak. This divergence exists because Swiss-German butchery mapped the French term to a different primal than French butchery did.",
    notes: "France Entrecôte = Ribeye. Switzerland Entrecôte = Striploin. Same word, different cut, neighboring countries. Maximum confusion potential.",
  },

  {
    id: "platzli_ch",
    name: "Plätzli",
    region: "switzerland",
    maps_to: [
      { canonical_id: "inside_round", match_type: "cultural", confidence: 0.75, note: "Usually from Eckstück (top round)" },
      { canonical_id: "top_round_steak", match_type: "close", confidence: 0.70, note: "Thin-sliced round steaks" },
    ],
    synonyms: ["platzli", "saftplätzli"],
    description: "Swiss thin-sliced steaks — 1cm thick cuts from the Eckstück (top round) meant for quick pan-frying. Ubiquitous in Swiss supermarkets (Coop, Migros). Not the same as a US 'steak' — much thinner. Saftplätzli ('juicy little slices') are the braised version, cooked in sauce. If an American wants a thick US-style steak, they must look for items specifically labeled 'Steak' or 'Hüftsteak' — Plätzli will always be thin.",
    notes: "Swiss retail format: thin slices for pan-frying, not thick steaks. Format-driven cut.",
  },

  // === EGYPT ===

  {
    id: "moza_eg",
    name: "Moza (Egyptian Prestige Shank)",
    region: "egypt",
    maps_to: [
      { canonical_id: "hind_shank", match_type: "close", confidence: 0.90, note: "Anatomically the hind shank" },
    ],
    synonyms: ["موزة"],
    description: "Literally 'banana' in Arabic — the Egyptian name for shank, but culturally the polar opposite of the American view. In the US, shank is a cheap, overlooked 'stew meat' cut. In Egypt, Moza is prestigious: being served a whole Moza at a meal is a sign of respect from the host. It is prized for its 'Gelateen' (gelatin), which makes the meat butter-soft after long cooking. The Moza is a cornerstone of Egyptian cuisine and shares this elevated status across Saudi Arabia, Qatar, and the UAE — an Arab-wide inversion of American shank valuation.",
    notes: "The Moza/shank prestige inversion is one of the strongest Arab-wide patterns in the database. Shared across Egypt, Saudi Arabia, Qatar, and UAE.",
  },

  {
    id: "bofteek_eg",
    name: "Bofteek",
    region: "egypt",
    maps_to: [
      { canonical_id: "inside_round", match_type: "cultural", confidence: 0.70, note: "Anatomically top round, but preparation is fundamentally different from US steak" },
    ],
    synonyms: ["بفتيك"],
    description: "The Egyptian 'false cognate' of the English word 'beefsteak' — but the cut is completely different in practice. Bofteek refers to top round specifically sliced extremely thin and pounded, intended for breading and pan-frying (similar to an Italian scaloppine or German Schnitzel). An American asking an Egyptian butcher for 'Bofteek' expecting a thick grilling steak will receive a paper-thin sheet of meat meant to be fried. If you want a US-style steak, ask for Erq Rosto (striploin) or Entrecote (ribeye) instead, and specify thickness.",
    notes: "Same word as 'beefsteak,' completely different product. Shared convention across Egypt, Morocco, Saudi Arabia, and Qatar — pattern of pounded-thin round cuts across Arab butchery.",
  },

  {
    id: "kabab_halla_cut_eg",
    name: "Laham Kabab Halla",
    region: "egypt",
    maps_to: [
      { canonical_id: "chuck_roll", match_type: "cultural", confidence: 0.80, note: "Sinn (neck/chuck) is required — intramuscular fat is mandatory for the dish's thick gravy" },
    ],
    synonyms: ["لحم كباب حلة"],
    description: "Dish-driven cut for Egypt's iconic Kabab Halla (caramelized onion beef stew). The recipe requires Sinn (neck/chuck) specifically because the intramuscular fat creates the thick, rich gravy. US 'stew meat' — typically trimmed lean from the round — will produce a dry, unsuccessful Kabab Halla. Egyptian butchers recognize 'Laham Kabab Halla' as a specific request for cubed chuck with fat retained.",
    notes: "Pattern example of Arab dish-driven cut naming — compare Moroccan Kefta, Uzbek Palovbop go'sht, Qatari Machboos meat.",
  },

  // === IRAN ===

  {
    id: "kebab_koobideh_cut_ir",
    name: "Gosht-e Kebab Koobideh",
    region: "iran",
    maps_to: [
      { canonical_id: "short_plate", match_type: "cultural", confidence: 0.85, note: "Gholveh-gah (flank/plate) is the only correct cut — US 'ground round' will fail" },
    ],
    synonyms: ["گوشت کباب کوبیده"],
    description: "The defining dish-driven cut of Iranian butchery. Kebab Koobideh (pounded kebab) is Iran's most iconic beef dish, and it requires ground Gholveh-gah (flank/plate) specifically. The cut's distinctive fat structure is what allows the meat to 'stick' to the wide metal skewer over hot coals — a property no other cut replicates. Americans buying 'premium' lean ground beef for koobideh will have the meat fall off the skewer mid-cooking. Iranian butchers categorize ground meat by origin cut, not by lean-to-fat percentage like US butchers do.",
    notes: "A landmark example of 'cut is dictated by cooking method, not by muscle prestige' — the fattier 'cheap' cut is the correct choice.",
  },

  {
    id: "kebab_barg_cut_ir",
    name: "Gosht-e Kebab Barg",
    region: "iran",
    maps_to: [
      { canonical_id: "tenderloin", match_type: "close", confidence: 0.90, note: "Fileh is traditional" },
      { canonical_id: "striploin", match_type: "close", confidence: 0.75, note: "Best-quality rasteh also acceptable" },
    ],
    synonyms: ["گوشت کباب برگ"],
    description: "The opposite of Koobideh in every way. Kebab Barg ('leaf kebab') requires meat to be beaten paper-thin without breaking — achievable only with Fileh (tenderloin) or the choicest portion of Rasteh (striploin). Any tougher cut will tear apart when pounded. When an American asks an Iranian butcher for 'steak meat,' they may receive a cut that works for Western grilling but is completely unsuited for Kebab Barg. Iranian butchers pre-cut and clean 'Barg-ready' Fileh.",
    notes: "The Koobideh/Barg dyad defines Iranian kebab butchery — two dishes, two opposite cuts, both dish-driven.",
  },

  {
    id: "mahicheh_ir",
    name: "Mahicheh (Iranian Luxury Shank)",
    region: "iran",
    maps_to: [
      { canonical_id: "hind_shank", match_type: "close", confidence: 0.95, note: "Anatomically the hind shank — but culturally luxury-grade" },
    ],
    synonyms: ["ماهیچه"],
    description: "Iran's version of the shank-as-luxury pattern seen across the Arab world (Moza in Egypt/Gulf, Mellaj in Morocco). Mahicheh is served whole at weddings and special occasions — a display of generosity and wealth. Iranian butchers trim it far more cleanly than US butchers, removing all silver skin to reveal the 'muscle ball.' The saffron-infused shank stew (Khoresht-e Mahicheh) is a centerpiece of Persian hospitality. Compared to US osso buco preparation, Iranian Mahicheh is treated with significantly more culinary reverence.",
    notes: "Part of the Arab/Persian shank-prestige pattern — same anatomical muscle, inverted cultural valuation vs US.",
  },

  // === MOROCCO ===

  {
    id: "mellaj_ma",
    name: "Al-Mellaj (Tajine Shank)",
    region: "morocco",
    maps_to: [
      { canonical_id: "hind_shank", match_type: "close", confidence: 0.90, note: "Mandatory for authentic tajine" },
    ],
    synonyms: ["الملج"],
    description: "The king of the Moroccan Tajine. Mellaj (shank) is non-negotiable for an authentic Marqa (tajine sauce) — the collagen creates the characteristic thick, syrupy texture. Using lean US 'stew meat' from the round will result in a dry tajine with thin, watery sauce. Mellaj is always bone-in (the bone is 'the salt of the meat' in Moroccan tradition). The cultural rule is absolute: an experienced Moroccan cook will reject any substitute. Continues the Arab-world shank prestige pattern alongside Egyptian Moza and Iranian Mahicheh.",
    notes: "The anti-lean-substitution principle is the strongest pattern across Morocco, Egypt, Iran, Saudi, Qatar, UAE: collagen-rich shank is mandatory for traditional slow-cooked dishes; leaner cuts fail.",
  },

  {
    id: "tajine_cut_ma",
    name: "Mish al-Tajine",
    region: "morocco",
    maps_to: [
      { canonical_id: "hind_shank", match_type: "cultural", confidence: 0.80, note: "Mellaj is the traditional base" },
      { canonical_id: "chuck_blade", match_type: "cultural", confidence: 0.75, note: "Al-Ketf (shoulder) for everyday tajines" },
      { canonical_id: "short_ribs", match_type: "cultural", confidence: 0.65, note: "Al-Adla' often included" },
    ],
    synonyms: ["لحم الطاجين"],
    description: "Dish-driven request for tajine meat. A Moroccan butcher asked for 'tajine meat' will automatically chop the carcass into small, bone-in chunks from the shank (Mellaj), shoulder (Al-Ketf), or ribs (Al-Adla') — whatever is available. This is the Moroccan default format: pre-chopped, bone-in, collagen-rich. If a user wants a US-style pot roast instead, they must explicitly specify 'Bla'dm' (without bone) AND that they want a whole piece, not chopped chunks — otherwise the butcher will chop it automatically.",
    notes: "The 'auto-chop' default is a travel-survival insight: foreigners ordering without specification will always receive pre-chopped bone-in chunks.",
  },

  {
    id: "kefta_ma",
    name: "Kefta",
    region: "morocco",
    maps_to: [
      { canonical_id: "chuck_blade", match_type: "cultural", confidence: 0.70, note: "Al-Ketf (shoulder) is the base meat" },
      { canonical_id: "chuck_roll", match_type: "cultural", confidence: 0.65, note: "Can also use Al-Ankra (neck)" },
    ],
    synonyms: ["كفتة"],
    description: "Moroccan ground beef — but never plain. Kefta is a specific preparation: shoulder beef mixed with kidney fat (S'hama) and pre-seasoned with cumin, paprika, coriander, and parsley at the butcher counter. An American asking for 'ground beef' for a burger will receive Kefta by default — already spiced for Moroccan tagines and brochettes. To get plain US-style ground beef, specifically ask the butcher to grind Al-Ketf (shoulder) WITHOUT adding any local spices. Part of the North African pattern where 'minced meat' is always a cultural preparation, not a raw product.",
    notes: "Compare: Turkish Kuşbaşı, Lebanese/Syrian Kibbeh meat, Iranian Koobideh — all 'ground meat' in name, but each with mandatory preparation standards specific to the cuisine.",
  },

  // === UZBEKISTAN ===

  {
    id: "plov_meat_uz",
    name: "Palovbop go'sht",
    region: "uzbekistan",
    maps_to: [
      { canonical_id: "brisket", match_type: "cultural", confidence: 0.85, note: "To'sh (brisket) is the traditional base — fat is mandatory for Plov" },
      { canonical_id: "chuck_blade", match_type: "cultural", confidence: 0.75, note: "Kurak (shoulder) with fat also used" },
    ],
    synonyms: ["паловбоп гўшт", "plov meat"],
    description: "Uzbekistan's defining dish-driven cut — literally 'meat for Plov.' A Qassob (butcher) in a traditional bozor (market) who is asked for Palovbop go'sht will assemble a mix of meat, bone, and fat from To'sh (brisket) and Kurak (shoulder), with the fat deliberately kept on. This violates every US convention: American 'stew meat' is trimmed lean, but Uzbek Plov requires the fat to render into the rice during high-heat cauldron cooking. Using lean beef produces a dry, flavorless Plov. Modern Tashkent supermarkets may sell a pre-cut 'Plov set,' but the traditional bozor version is richer and more authentic.",
    notes: "The Plov cut is the Central Asian counterpart to Arab Machboos/Kabsa meat, Moroccan tajine meat, and Iranian Koobideh meat — all 'rice dish' or 'stew' meats defined by their role, not by muscle.",
  },

  {
    id: "antrekot_uz",
    name: "Antrekot (Uzbek Thin Cut)",
    region: "uzbekistan",
    maps_to: [
      { canonical_id: "ribeye", match_type: "cultural", confidence: 0.70, note: "Anatomically the rib area, but always thin-cut and bone-in" },
    ],
    synonyms: ["антрекот"],
    description: "A Russian-derived term that creates expectations mismatch. In the US, Ribeye is a thick boneless or bone-in steak cut for high-heat grilling. In Uzbekistan, Antrekot typically refers to a THIN, bone-in rib chop — closer to a Korean-style LA galbi than an American steakhouse ribeye. If a user wants a thick US-style ribeye, they must ask the butcher to 'qalinroq qilib kesing' ('cut it thick'). This thin-cut default is a shared Central Asian/ex-Soviet convention that also affects Kazakhstan, Russia, and Ukraine.",
    notes: "Part of the ex-Soviet 'Antrekot = thin bone-in' pattern spanning Uzbekistan, Kazakhstan, Russia, Ukraine.",
  },

  // === KAZAKHSTAN ===

  {
    id: "zhilik_kz",
    name: "Zhilik (Kazakh Honor Marrow)",
    region: "kazakhstan",
    maps_to: [
      { canonical_id: "hind_shank", match_type: "cultural", confidence: 0.85, note: "Specifically shank with long marrow bone — format matters" },
    ],
    synonyms: ["жілік", "zhylyk"],
    description: "A cut with deep cultural ceremony attached. In traditional Kazakh hospitality, specific marrow bones (Zhilik) are served to guests based on their status, age, and relationship to the host — older and more honored guests receive specific bones. A Kazakh butcher at a bazaar (like Almaty's Green Bazaar) will often leave the bone deliberately long when cutting shank, to respect this tradition. Americans buying 'shank' in Kazakhstan should expect longer bones and more ceremonial cutting than a US supermarket shank. Connects nomadic tradition with the Soviet GOST system.",
    notes: "The only 'ceremonial cut' in the ontology where the cut format (bone length) itself carries cultural meaning — serves as reference for future guest-honor cut entries.",
  },

  {
    id: "besbarmak_cut_kz",
    name: "Besbarmaqqa arnalgan et",
    region: "kazakhstan",
    maps_to: [
      { canonical_id: "chuck_blade", match_type: "cultural", confidence: 0.80, note: "Zhauyryn (shoulder blade) with bone" },
      { canonical_id: "brisket", match_type: "cultural", confidence: 0.75, note: "Tos (brisket) often included" },
    ],
    synonyms: ["бесбармаққа арналған ет"],
    description: "Dish-driven cut for Kazakhstan's national dish Besbarmak ('five fingers' — eaten by hand). While Besbarmak is traditionally made with horse and lamb, beef is common. When a user asks for 'Besbarmak meat' at a Kazakh butcher, they receive large, flat pieces of bone-in meat from the Zhauyryn (shoulder blade) or Tos (brisket), intended for 2-3 hours of boiling. This is not 'stew meat' in the US sense — it's a specific boiling cut with bones left in. The cooked meat is served over wide noodles (Kespe) with broth (Sorpa).",
    notes: "Sister to Uzbek Plov meat and Kyrgyz Beshbarmak meat — the Central Asian nomadic-era tradition of 'large-format boiling meat with bone,' preserved across the post-Soviet Turkic belt.",
  },

  // === SAUDI ARABIA ===

  {
    id: "kabsa_cut_sa",
    name: "Laham Al-Kabsa",
    region: "saudi_arabia",
    maps_to: [
      { canonical_id: "hind_shank", match_type: "cultural", confidence: 0.90, note: "Moza (shank) is the defining cut" },
    ],
    synonyms: ["لحم الكبسة"],
    description: "Dish-driven cut for Saudi Arabia's national dish Kabsa. Moza (shank) is explicitly the 'best meat for rice' in Saudi butchery — the collagen breaks down during the long Kabsa cooking process to perfume the Basmati rice. When a user asks a Saudi butcher for 'the best meat for rice,' they will almost always receive Moza. Using leaner cuts (round, sirloin) results in tough, dry meat and under-flavored rice. The principle extends across Gulf 'mandi rice' dishes — Machboos (Qatar), Mandi (Yemen/Saudi), Majboos (Bahrain) all use Moza by default.",
    notes: "The Gulf rice-dish meat axis: Kabsa/Machboos/Mandi/Majboos — all share the Moza-as-default convention.",
  },

  {
    id: "hashi_vs_baqar_sa",
    name: "Hashi vs. Baqar (Camel vs. Beef)",
    region: "saudi_arabia",
    maps_to: [
      { canonical_id: "tenderloin", match_type: "cultural", confidence: 0.30, note: "Cross-species cut — Hashi is camel, not beef" },
    ],
    synonyms: ["حاشي مقابل بقر"],
    description: "A uniquely Gulf/Saudi confusion point that doesn't exist elsewhere. In local Saudi shops, Hashi (young camel) and Baqar (beef) are frequently sold side-by-side in similar-looking cuts, and the meats visually resemble each other. Hashi has a slightly sweeter, gamier flavor and different fat behavior. Expats accidentally buying Hashi thinking it's beef (or vice versa) is a common issue. Users should verify the sign: حاشي (Hashi) for camel vs بقر (Baqar) for beef. Critical for expats cooking Western recipes — camel does NOT substitute well for beef in US-style preparations.",
    notes: "Not a cut, but a species-identification entity. Only appears in Saudi Arabia and some Gulf states — a regional disambiguation entity, similar in spirit to the Israeli 'asado collision' entry.",
  },

  // === QATAR ===

  {
    id: "machboos_cut_qa",
    name: "Laham Al-Machboos",
    region: "qatar",
    maps_to: [
      { canonical_id: "hind_shank", match_type: "cultural", confidence: 0.90, note: "Moza is the defining cut" },
      { canonical_id: "chuck_blade", match_type: "cultural", confidence: 0.75, note: "Ketf (shoulder) acceptable alternative" },
    ],
    synonyms: ["لحم المكبوس"],
    description: "Dish-driven cut for Qatar's national dish Machboos. Like Saudi Kabsa, the cut must be collagen-rich to withstand the long rice-cooking time and to release gelatin that perfumes the rice. Moza (shank) or Ketf (shoulder) are the two correct cuts. US 'stew meat' from the round is too lean and will become tough and stringy. The Moza-for-rice principle is Gulf-wide: Kabsa, Machboos, Mandi, and Majboos all share this convention, setting the Arabian Peninsula apart from the rest of the Arab world.",
    notes: "Part of the Gulf rice-dish meat axis — shared cut rules across Saudi/Qatar/Bahrain/UAE/Oman.",
  },

  {
    id: "origin_pricing_gap_qa",
    name: "Origin Pricing Gap",
    region: "qatar",
    maps_to: [
      { canonical_id: "striploin", match_type: "cultural", confidence: 0.40, note: "Not a cut but a grade/origin classification that applies to all premium cuts" },
    ],
    synonyms: ["فجوة تسعير المصدر"],
    description: "A uniquely Gulf phenomenon affecting Qatar (and UAE, Saudi Arabia). In Qatari retailers, the same anatomical cut can have a 3-5x price range depending on origin: Indian/Pakistani beef is the cheapest (lean, grass-fed, tough — intended for curries and pressure-cooking), Brazilian is mid-range (lean, grass-fed), Australian is upper-mid (grass or grain-fed, marbled), and US Prime is premium (heavily marbled, grain-fed). Expats often see 'Pakistani ribeye' at half the price of 'Australian ribeye' and buy it for BBQ — then find the meat is too tough for grilling because it was bred for slow-cooking. The tool should warn users: origin-shop by intended cooking method, not by price.",
    notes: "The Gulf origin-price axis has no equivalent elsewhere in the ontology. Applies across UAE, Saudi, Qatar, Bahrain, Kuwait.",
  },

  {
    id: "mafroum_blend_qa",
    name: "Mafroum Qatari (Grind Specification)",
    region: "qatar",
    maps_to: [
      { canonical_id: "chuck_roll", match_type: "cultural", confidence: 0.70, note: "Default grind varies by intended use" },
    ],
    synonyms: ["مفروم"],
    description: "Qatari ground beef classification. When a user asks for 'Mafroum' without specification, the butcher's default depends on context — usually a fine grind for Kibbeh or Sambousek (filled pastries), which is far too fine for a US-style burger and typically too lean. For burgers, users must explicitly ask for a coarse grind with high fat — the standard request is to have the butcher grind Dosh (brisket) specifically to achieve the 80/20 fat ratio Americans expect. The 'Fine vs Coarse' distinction is universal in Gulf butchery.",
    notes: "Compare Saudi Mafroum Kandouz, Egyptian Lahma mafrouma, UAE Mafroum — same pattern across Arab ground beef culture.",
  },

  // === UAE ===

  {
    id: "sirloin_trap_uae",
    name: "The UAE Sirloin Trap",
    region: "uae",
    maps_to: [
      { canonical_id: "striploin", match_type: "cultural", confidence: 0.75, note: "UK-style 'Sirloin' = US Striploin" },
      { canonical_id: "top_sirloin", match_type: "cultural", confidence: 0.70, note: "US-style 'Sirloin' = US Top Sirloin" },
    ],
    synonyms: ["سيرلوين"],
    description: "The defining UAE naming confusion. In the UAE, the word 'Sirloin' refers to completely different cuts depending on the retailer's country-of-origin convention. In British-style shops (Waitrose, Spinneys with UK labels), 'Sirloin' = US Striploin (NY Strip). In US-style steakhouses or US-labeled butchers, 'Sirloin' = US Top Sirloin (Rump). The two cuts are anatomically distinct and have significantly different prices. Rule of thumb: in any given retailer, the more expensive 'Sirloin' is the Striploin. This trap exists nowhere else in the ontology with the same intensity because the UAE uniquely operates under both AUS/UK and US conventions simultaneously, side-by-side.",
    notes: "The killer feature of UAE butchery — every expat gets caught by this once. Critical for SEO ranking on 'best sirloin Dubai.'",
  },

  {
    id: "asado_uae",
    name: "Asado (UAE — Smokehouse Context)",
    region: "uae",
    maps_to: [
      { canonical_id: "short_ribs", match_type: "close", confidence: 0.80, note: "Same as US short ribs — NOT Argentine asado" },
    ],
    description: "The third use of the word 'Asado' in the Cutranslator ontology, and a significant cross-cultural trap. In Argentina/Uruguay, 'asado' refers to a whole rib plate or to the grilling method itself. In Israel, 'asado' collides with brisket-based preparations. In the UAE — driven by the large Latin American expat population and the booming Dubai/Abu Dhabi smokehouse scene — 'Asado' refers specifically to US-style short ribs, used for low-and-slow American BBQ. A South American expat in Dubai ordering 'asado' will get US short ribs, not a full Argentine-style parrilla rib plate.",
    notes: "The UAE completes the asado triangle: Argentina (method/full plate) → Israel (brisket collision) → UAE (US short ribs). Three different meanings, one word.",
  },

  {
    id: "halal_bacon_uae",
    name: "Halal Bacon (Beef Navel)",
    region: "uae",
    maps_to: [
      { canonical_id: "short_plate", match_type: "cultural", confidence: 0.70, note: "Beef navel from the plate — mimics pork belly texture" },
    ],
    description: "A uniquely UAE (and Gulf-wide) product category. Because pork is haram, UAE retailers manufacture 'Halal Bacon' and 'Beef Pepperoni' from beef navel (the plate/maculae region) cured and smoked to mimic pork belly. Same anatomy as the cut used for pastrami in Jewish butchery, but cured with beef-specific smoke profiles. Expats expecting actual pork bacon will find this product's texture convincing but flavor distinctly different — it's a reasonable substitute, not an identical match. Sold at Spinneys, Waitrose, and Carrefour. A good example of how religious dietary law drives cut innovation.",
    notes: "Analog to Israel's pastrami-from-navel tradition and Turkey's pastırma — the 'cured beef navel' axis spans Jewish, Muslim, and Ottoman food cultures.",
  },

  // === PANAMA ===

  {
    id: "entrana_pa",
    name: "Entraña (Panamanian Luxury Skirt)",
    region: "panama",
    maps_to: [
      { canonical_id: "skirt", match_type: "exact", confidence: 0.90, note: "Anatomically the skirt — but a luxury import item, not a butcher's cut" },
    ],
    description: "The sharpest valuation inversion in Panamanian butchery. In the US, skirt steak was historically a cheap 'butcher's cut' before fajita culture elevated it. In Panama, Entraña is a luxury item — often imported from the US as Certified Angus Beef, and frequently priced higher per pound than Filete (tenderloin). This inversion is driven by the Panama Canal expat community's demand for US-style steaks combined with the domestic grass-fed cattle industry's inability to produce the marbled skirts found in US grain-fed systems. Expat-facing butchers in Panama City stock imported Entraña as their premium cut.",
    notes: "The skirt-as-luxury pattern also appears in Costa Rica due to similar US expat economics. Not seen in the other Central American countries where skirt remains mid-tier.",
  },

  {
    id: "muchacho_pa",
    name: "Muchacho (Panama)",
    region: "panama",
    maps_to: [
      { canonical_id: "eye_of_round", match_type: "close", confidence: 0.85, note: "Anatomically the eye of round" },
    ],
    synonyms: ["boliche"],
    description: "Literally 'boy' — the Panamanian name for eye of round, and the defining source of expat confusion. Americans and Canadians in Panama routinely fail to recognize Muchacho as the same cut they buy as 'eye of round' back home. Part of a pan-regional pattern: Muchacho in Panama/Colombia/Venezuela (as Muchacho redondo), Bolován in Costa Rica, Bolovique in Guatemala, Salón in Nicaragua/Honduras, Mano de Piedra (eye of round) in El Salvador — five different names for the same cylindrical lean roast across 7 countries. The most fragmented naming of any single canonical cut in the database.",
    notes: "The 'cylindrical lean roast' is the most fragmented cut across Central America — 5 different names for the same muscle. Possible future super-entity.",
  },

  // === COSTA RICA ===

  {
    id: "cecina_cr",
    name: "Cecina (Costa Rican)",
    region: "costa_rica",
    maps_to: [
      { canonical_id: "brisket", match_type: "cultural", confidence: 0.75, note: "Costa Rican Cecina = brisket for shredding, not dried meat" },
      { canonical_id: "flank", match_type: "cultural", confidence: 0.65, note: "Sometimes also refers to the flank area" },
    ],
    description: "The defining cross-cultural trap of Costa Rican butchery. The word 'Cecina' means something completely different in Costa Rica than almost anywhere else in the Spanish-speaking world. In Mexico, Spain, and most of South America, Cecina is salted, dried, cured beef — a preserved product. In Costa Rica, Cecina is a fresh cut, specifically the brisket or flank used for making Carne Mechada (shredded beef). An American expat in San José asking for 'Cecina' expecting Mexican-style dried meat will receive fresh whole brisket. Conversely, if they want to smoke a Texas-style brisket, they should ask for 'Cecina' whole with the fat cap intact. This is the most dangerous single-word mismatch in the Central American vocabulary.",
    notes: "The Cecina axis: Mexico (dried cured) → Spain (dried cured, PDO Cecina de León) → South America (dried cured) → Costa Rica/Nicaragua/Honduras/El Salvador (fresh brisket or skirt, meaning inverted). The clearest example of same-word-different-meaning in Latin American butchery.",
  },

  {
    id: "olla_de_carne_cut_cr",
    name: "Carne para Olla de Carne",
    region: "costa_rica",
    maps_to: [
      { canonical_id: "hind_shank", match_type: "cultural", confidence: 0.85, note: "Jarret (shank) is the primary cut" },
      { canonical_id: "short_ribs", match_type: "cultural", confidence: 0.70, note: "Costilla often included" },
      { canonical_id: "chuck_roll", match_type: "cultural", confidence: 0.65, note: "Posta de Cuello (neck) sometimes added" },
    ],
    description: "Dish-driven cut for Olla de Carne, Costa Rica's national beef stew (meat in a pot with tubers, plantains, and corn). An authentic Olla de Carne requires collagen-rich cuts with bone and marrow — Jarret (shank) is the required base, often combined with Costilla (ribs) or Posta de Cuello (neck). Using US 'lean stew meat' from the round is considered a culinary error: the bone marrow and connective tissue are what give the broth its signature body. Costa Rican Carnicerías sell pre-assembled 'Olla de Carne mix' combining all required cuts.",
    notes: "Shares the 'collagen-rich mandatory' principle with Moroccan tajine meat, Uzbek Palovbop, and Saudi Kabsa — continents apart, same cooking logic.",
  },

  {
    id: "punta_de_solomo_cr",
    name: "Punta de Solomo",
    region: "costa_rica",
    maps_to: [
      { canonical_id: "sirloin_cap", match_type: "close", confidence: 0.90, note: "The Costa Rican picanha" },
    ],
    description: "Costa Rica's entry in the Central American 'Punta de X' picanha axis. Across Central America, the sirloin cap has 7 different local names (Punta de Solomo CR, Punta de Lomo NI/HN/SV, Punta de Puyaso GT, Punta trasera VE) — all referring to the same muscle that Brazilians call picanha. In Costa Rica specifically, Punta de Solomo is the flagship grilling cut, almost always cooked whole over charcoal with the fat cap intact. An American butcher may not recognize the name but will recognize the anatomy immediately.",
    notes: "Anchor entry for the Central American Picanha Axis. Cross-referenced from all 6 other Central American Punta entries.",
  },

  // === NICARAGUA ===

  {
    id: "indio_viejo_cut_ni",
    name: "Carne para Indio Viejo",
    region: "nicaragua",
    maps_to: [
      { canonical_id: "outside_round", match_type: "cultural", confidence: 0.80, note: "Mano de Piedra (bottom round) is traditional" },
      { canonical_id: "flank", match_type: "cultural", confidence: 0.75, note: "Falda also used" },
    ],
    description: "Dish-driven cut for Indio Viejo, Nicaragua's iconic pre-Columbian corn-thickened beef stew. The dish requires meat that shreds easily after long boiling — Mano de Piedra (bottom round) or Falda (flank) are traditional. The critical constraint: using a tender US cut like sirloin will result in meat that disintegrates too quickly and loses the stringy shredded texture that defines the dish. The cornmeal thickener requires the meat to hold its fibrous structure through the cooking process. One of the few cuts in the ontology where 'too tender' is a failure mode.",
    notes: "Pre-Columbian origin — Indio Viejo predates Spanish colonization, making this one of the oldest continuously-prepared beef dishes in the Americas.",
  },

  {
    id: "vaho_cut_ni",
    name: "Cecina para Vaho",
    region: "nicaragua",
    maps_to: [
      { canonical_id: "skirt", match_type: "cultural", confidence: 0.75, note: "Skirt is the traditional base" },
      { canonical_id: "brisket", match_type: "cultural", confidence: 0.65, note: "Pecho also used" },
    ],
    description: "Nicaragua's unique middle-ground Cecina tradition. Vaho is a steamed dish of beef and plantains wrapped in banana leaves. Unlike Mexican Cecina (fully dried and cured) or Costa Rican Cecina (fresh brisket), Nicaraguan Cecina for Vaho is partially salted and briefly sun-dried — a curing halfway point. This brief curing is what gives Vaho its distinct flavor and cannot be replicated with fresh supermarket beef. A Nicaraguan butcher selling 'Cecina para Vaho' is selling this specifically half-cured skirt or brisket, NOT fresh meat.",
    notes: "Completes the Cecina spectrum: fully dried (Mexico/Spain/Argentina) → briefly cured (Nicaragua) → fresh brisket (Costa Rica/Honduras/El Salvador). Three different curing states under one word.",
  },

  // === HONDURAS ===

  {
    id: "posta_system_hn",
    name: "Sistema Posta (Honduran Catch-all)",
    region: "honduras",
    maps_to: [
      { canonical_id: "inside_round", match_type: "cultural", confidence: 0.75, note: "Posta Negra = inside round" },
      { canonical_id: "top_sirloin", match_type: "cultural", confidence: 0.70, note: "Posta de Pupa = top sirloin" },
      { canonical_id: "outside_round", match_type: "cultural", confidence: 0.65, note: "Other Postas from bottom round" },
    ],
    description: "The Honduran 'Posta' system is the most elastic vocabulary in Central America. While all Central American countries use 'Posta' as a descriptor, Honduras extends it further — 'Posta' functions as a catch-all for any lean, boneless muscle from the leg or hindquarter, with the specific cut depending on the modifier (Posta Negra, Posta Blanca, Posta de Pupa, Posta de Pierna). This creates real quality inconsistency — two pieces labeled 'Posta' at different Honduran butchers may be anatomically different muscles. Expats buying 'Posta' blind can end up with significantly different products. The fix: always specify the modifier, and in supermarkets like La Colonia or Paiz, look at the USDA-style cut labels when available.",
    notes: "A systemic quirk rather than a specific cut — documents the 'vocabulary elasticity' that differentiates Honduras from more standardized Central American butchery systems.",
  },

  {
    id: "baleada_cecina_hn",
    name: "Cecina para Baleadas",
    region: "honduras",
    maps_to: [
      { canonical_id: "skirt", match_type: "cultural", confidence: 0.75, note: "Thin-cut skirt traditional" },
    ],
    description: "Honduras's Cecina tradition is specifically tied to the Baleada — the country's most iconic street food (wheat flour tortilla filled with beans, cheese, cream, and optional meat). For 'Baleadas con todo' (fully loaded), the meat is Cecina: thin, flavorful skirt meat that has been seasoned and quickly grilled. Unlike Mexican or Spanish Cecina, Honduran Cecina for Baleadas is NOT dried — it is a specific texture/preparation of fresh skirt. This places Honduras in the 'fresh Cecina' cluster with Costa Rica, Nicaragua, and El Salvador.",
    notes: "The Baleada is arguably Honduras's most recognized culinary export — this entry ties the national dish directly to a beef cut.",
  },

  // === EL SALVADOR ===

  {
    id: "mano_de_piedra_sv",
    name: "Mano de Piedra (Salvadoran)",
    region: "el_salvador",
    maps_to: [
      { canonical_id: "eye_of_round", match_type: "close", confidence: 0.80, note: "In El Salvador, Mano de Piedra = eye of round" },
    ],
    description: "A classic same-name-different-cut trap within Central America. In Nicaragua and Honduras, 'Mano de Piedra' (literally 'stone hand') refers to the bottom round. In El Salvador, the same phrase refers to the eye of round. The Salvadoran version is used specifically for the dish 'Mano de Piedra entomatada' — boiled eye of round sliced and served in tomato sauce. The cut is 'boil-only': attempting to grill it as a steak will produce tough, dry meat. A user buying Mano de Piedra in San Salvador expecting the Nicaraguan cut will receive a different anatomical muscle. This is the most important intra-Central-American naming divergence in the batch.",
    notes: "El Salvador vs Nicaragua/Honduras: Mano de Piedra = eye_of_round (SV) vs outside_round (NI/HN). Documented cross-border ambiguity.",
  },

  {
    id: "sopa_de_res_cut_sv",
    name: "Carne para Sopa de Res",
    region: "el_salvador",
    maps_to: [
      { canonical_id: "hind_shank", match_type: "cultural", confidence: 0.85, note: "Chamberete (shank) is required" },
      { canonical_id: "short_ribs", match_type: "cultural", confidence: 0.70, note: "Costilla often included" },
    ],
    description: "Dish-driven cut for Sopa de Res, El Salvador's national Sunday soup. Requires Chamberete (shank) — bone-in, with marrow intact — as the primary meat, often supplemented with Costilla (ribs). The 'gordito' (fat) and bone marrow are mandatory for the broth body. Using US 'chuck roast' is considered incorrect as it lacks the bone-broth character that defines the dish. Salvadoran butchers at Super Selectos sell pre-cut 'Sopa de Res mix' with shank, ribs, and marrow bones together. The shank-for-soup principle extends across all of Central America (Costa Rica Olla de Carne, Honduras Sopa de Res, Nicaragua Sopa de Res), making this one of the most consistent regional patterns.",
    notes: "The Central American Sunday-soup axis: Sopa de Res (SV/HN/GT/NI), Olla de Carne (CR), Sancocho de Res (PA) — all collagen-rich bone-in shank preparations.",
  },

  // === GUATEMALA ===

  {
    id: "puyaso_gt",
    name: "Punta de Puyaso (Guatemalan Flagship)",
    region: "guatemala",
    maps_to: [
      { canonical_id: "sirloin_cap", match_type: "close", confidence: 0.95, note: "Anatomically the sirloin cap — the Guatemalan picanha" },
    ],
    synonyms: ["puyaso"],
    description: "Arguably the most famous beef cut name in all of Central America — Guatemala's flagship grilling steak and the definitive example of the 'Punta de X' axis across 7 countries. Puyaso is the star of Churrasco Chapín (Guatemalan barbecue). The cut must have its thick fat cap intact — a Guatemalan butcher will refuse to trim it for traditional preparation. The name 'Puyaso' has no clear etymology in Spanish but is instantly recognized throughout Guatemala. If an expat or tourist asks 'what's the one Guatemalan meat I must try?', every Guatemalan will answer Puyaso. Anatomically identical to Brazilian picanha, Venezuelan Punta trasera, Nicaraguan/Honduran/Salvadoran Punta de Lomo, and Costa Rican Punta de Solomo — but culturally the most celebrated of the seven names.",
    notes: "Arguably the strongest single-word brand in Central American beef culture. Primary anchor for the 'Punta Picanha Axis' cross-country entity.",
  },

  {
    id: "viuda_gt",
    name: "Viuda",
    region: "guatemala",
    maps_to: [
      { canonical_id: "top_sirloin", match_type: "close", confidence: 0.85, note: "A top sirloin variant" },
    ],
    description: "Literally 'the widow' — a uniquely Guatemalan name with no parallel in other Spanish-speaking butcheries. Anatomically a top sirloin or rump steak, the Viuda earned its name because it is a 'lonely' lean cut — without surrounding fat, without bone, without the companion muscles that normally dress up a sirloin section. It's a practical everyday grilling steak: affordable, widely available at Paiz and La Torre, and flavorful despite its leanness. The evocative name ('widow') places it alongside other Central American descriptive-name cuts like Camote ('sweet potato'), Puyaso, Bolovique, and Muchacho.",
    notes: "Part of the Central American tradition of shape-and-story cut names — compare Panamanian Lagarto (lizard), Guatemalan Camote (sweet potato), Panamanian Muchacho (boy).",
  },

  {
    id: "hilachas_gt",
    name: "Carne para Hilachas",
    region: "guatemala",
    maps_to: [
      { canonical_id: "flank", match_type: "cultural", confidence: 0.85, note: "Falda is the traditional cut" },
      { canonical_id: "eye_of_round", match_type: "cultural", confidence: 0.70, note: "Bolovique sometimes substituted" },
    ],
    description: "Dish-driven cut for Hilachas, Guatemala's iconic shredded-beef stew with tomato and vegetables. The name 'Hilachas' literally means 'threads' or 'rags' — the meat must be boiled until it can be pulled into thin threads. Falda (flank) is the traditional and correct cut; Bolovique (eye of round) is a secondary option. Using tenderloin for this dish is considered a cultural waste — the fibrous structure of flank is required for the characteristic shredded texture. Guatemalan butchers recognize 'Carne para Hilachas' as a specific flank request, often pre-cut into boiling strips.",
    notes: "The Central American shredded-meat axis: Hilachas (GT), Carne Mechada/Pabellón (VE), Carne Deshilachada (SV), Carne Desmechada (HN/NI), all using flank — shared pre-Columbian-to-colonial cooking lineage.",
  },

  // === VENEZUELA ===

  {
    id: "muchacho_redondo_ve",
    name: "Muchacho Redondo (Asado Negro)",
    region: "venezuela",
    maps_to: [
      { canonical_id: "eye_of_round", match_type: "close", confidence: 0.90, note: "The cylindrical eye of round — required for Asado Negro" },
    ],
    description: "The required cut for Asado Negro — Venezuela's iconic 'black roast,' one of the country's most celebrated home-cooking dishes. Muchacho Redondo (literally 'round boy') is the cylindrical eye of round. The name's diminutive 'boy' refers to the muscle's compact, tube-like shape. Must be distinguished from Muchacho Cuadrado ('square boy' = bottom round). Asado Negro requires the Redondo specifically — its tight grain holds together during the long slow braise in caramelized sugar and wine. Using the Cuadrado will produce a stringier, less cohesive final dish. This distinction is the #1 expat confusion in Venezuelan butchery.",
    notes: "The Muchacho Redondo vs Cuadrado distinction is the single most important Venezuelan butchery insight for expats. Essential SEO content for 'asado negro recipe' searches.",
  },

  {
    id: "punta_trasera_ve",
    name: "Punta Trasera (Venezuelan Picanha)",
    region: "venezuela",
    maps_to: [
      { canonical_id: "sirloin_cap", match_type: "close", confidence: 0.95, note: "The Venezuelan picanha" },
    ],
    description: "Venezuela's entry in the pan-Latin Picanha Axis. Punta Trasera ('rear point') is a cultural icon in Venezuelan steakhouses (parrillas) — almost always grilled whole over charcoal, sliced at the table against the grain. If you ask any Venezuelan expat 'what's the one thing I should order at a Venezuelan parrilla?' the answer is Punta Trasera, not Lomito (tenderloin). The name differs from the other 6 Central American picanha terms — most use 'Punta de X' (point of something), while Venezuela uses 'Punta trasera' (rear point, referring to the anatomical location). Same muscle, slightly different naming logic.",
    notes: "Connects the Picanha Axis: Brazil (picanha), Uruguay/Argentina (picaña/tapa de cuadril), Costa Rica (punta de solomo), Nicaragua/Honduras/El Salvador (punta de lomo), Guatemala (punta de puyaso), Venezuela (punta trasera). Eight names, one muscle.",
  },

  {
    id: "pabellon_criollo_cut_ve",
    name: "Carne para Pabellón Criollo",
    region: "venezuela",
    maps_to: [
      { canonical_id: "flank", match_type: "cultural", confidence: 0.85, note: "Falda is traditional — required for stringy shred" },
      { canonical_id: "brisket", match_type: "cultural", confidence: 0.65, note: "Pecho occasionally substituted" },
    ],
    description: "Dish-driven cut for Pabellón Criollo — Venezuela's national dish (shredded beef with black beans, rice, and plantain). Falda (flank) is the traditional and correct cut for Carne Mechada (the shredded beef component). The authentic preparation requires the long, stringy texture that only flank's grain produces — substituting brisket will produce chunky rather than stringy meat, breaking the dish's defining texture. Venezuelan butchers recognize 'carne para mechar' or 'carne para pabellón' as a specific flank request. Contrasts with the chunky-shred US pulled-beef tradition.",
    notes: "Completes the Central American shredded-beef axis with Guatemalan Hilachas, Salvadoran Deshilachada, and Nicaraguan/Honduran Desmechada — all flank-based, all pre-Columbian in origin.",
  },

  // === LITHUANIA ===

  {
    id: "netikroji_ispjova_lt",
    name: "Netikroji išpjova",
    region: "lithuania",
    maps_to: [
      { canonical_id: "eye_of_round", match_type: "close", confidence: 0.80, note: "Primary — Lithuanian false tenderloin typically sold as eye of round" },
      { canonical_id: "petite_tender", match_type: "close", confidence: 0.70, note: "Sometimes chuck tender (teres major) — same visual trap" },
    ],
    description: "Literally 'False Tenderloin' — Lithuania's entry in the pan-European False Tenderloin axis spanning 13 countries. A cut from the shoulder or leg that is long, cylindrical, and lean — looking visually identical to a real Išpjova (tenderloin) on the butcher counter. Lithuanian supermarkets stock it prominently because of its aesthetic appeal, but if grilled like a real tenderloin, it will be extremely tough. Must be braised or slow-cooked. Lithuanian butchers typically label it clearly as 'netikroji' (false), but tourists and expats miss the distinction. Part of the remarkable cross-European pattern where Czech, Slovak, Hungarian, Slovenian, Romanian, Croatian, Bosnian, Montenegrin, Macedonian, Latvian, Estonian, Belarusian, and Israeli butcheries all use a 'false tenderloin' label for the same anatomical trap.",
    notes: "Part of the pan-European False Tenderloin axis — 13-country pattern completed with this batch.",
  },

  {
    id: "saltiena_cut_lt",
    name: "Mėsa šaltienai",
    region: "lithuania",
    maps_to: [
      { canonical_id: "hind_shank", match_type: "cultural", confidence: 0.85, note: "Karkas (shank) is mandatory for gelatin" },
      { canonical_id: "fore_shank", match_type: "cultural", confidence: 0.75, note: "Often includes feet and fore shank for extra gelatin" },
    ],
    description: "Dish-driven cut for Lithuanian Šaltiena — the traditional cold meat aspic served especially during holidays. Requires Karkas (hind shank) at minimum, often supplemented with feet and fore shank for maximum natural gelatin release. The broth must set naturally into aspic without added gelatin — only the collagen from bone-in shank can achieve this. US 'stew meat' from the round will never produce a traditional Šaltiena. Part of the Northern European aspic axis: Estonian Sült, Latvian Galerts, Belarusian Халадзец, Russian Холодец, Ukrainian Холодець — all require shank, all pre-modern dishes documenting centuries of regional continuity.",
    notes: "Completes the Baltic side of the Northern European aspic axis (6 countries total).",
  },

  // === LATVIA ===

  {
    id: "viltotais_filejs_lv",
    name: "Viltotais filejs",
    region: "latvia",
    maps_to: [
      { canonical_id: "eye_of_round", match_type: "close", confidence: 0.80, note: "Primary — Latvian false tenderloin, typically eye of round" },
      { canonical_id: "petite_tender", match_type: "close", confidence: 0.70, note: "Also sometimes chuck tender" },
    ],
    description: "Latvia's 'Fake Fillet' — part of the pan-European False Tenderloin axis. Sold prominently at Rīgas Centrāltirgus and in Latvian supermarkets because of its aesthetic similarity to the premium Iekšfileja (true tenderloin). An American expat who mistakes Viltotais filejs for tenderloin and tries to grill it will produce extremely tough steaks — the cut lacks the fat and tenderness needed for quick high-heat cooking. The Latvian butcher label 'viltotais' ('fake' or 'counterfeit') is a direct consumer warning, paralleled by German Falsches Filet, Czech falešná svíčková, Lithuanian Netikroji išpjova, Estonian Valesisefilee, and Belarusian Фальшывая выразка.",
    notes: "Latvia's False Tenderloin entry bridges the Central European (Czech/Slovak/Hungarian) and Baltic variants.",
  },

  {
    id: "galerts_cut_lv",
    name: "Gaļa galertam",
    region: "latvia",
    maps_to: [
      { canonical_id: "hind_shank", match_type: "cultural", confidence: 0.85, note: "Stilbs (shank) is mandatory" },
      { canonical_id: "fore_shank", match_type: "cultural", confidence: 0.75, note: "Feet and fore shank often included for gelatin" },
    ],
    description: "Dish-driven cut for Latvian Galerts — the traditional beef aspic served during Christmas, Easter, and family gatherings. A Latvian butcher at the Rīgas Centrāltirgus will recommend bone-in Stilbs (shank), often combined with feet, to ensure the broth sets into aspic without commercial gelatin. Using boneless US stew meat produces a soft broth that will never set. Part of the Northern European aspic axis that ties together Latvia, Lithuania, Estonia, Belarus, Russia, and Ukraine — six countries, one cultural pattern, one mandatory cut.",
    notes: "The Northern European aspic axis connects 6 countries through a single cut requirement — rare architectural clarity.",
  },

  // === ESTONIA ===

  {
    id: "valesisefilee_ee",
    name: "Valesisefilee",
    region: "estonia",
    maps_to: [
      { canonical_id: "eye_of_round", match_type: "close", confidence: 0.80, note: "Primary — Estonian false tenderloin" },
      { canonical_id: "petite_tender", match_type: "close", confidence: 0.70, note: "Sometimes chuck tender" },
    ],
    description: "Literally 'false inside fillet' — Estonia's entry in the pan-European False Tenderloin axis. The construction 'vale-' (false) + 'sisefilee' (inside fillet) directly mirrors the real Sisefilee (true tenderloin), making the label itself a warning. Modern Tallinn craft butcheries handle this transparently, but older Estonian retail sometimes presents Valesisefilee without clear labeling. Americans and expats looking for tenderloin must verify the prefix. Comes from the shoulder or leg, requires braising or slow-cooking — attempting to grill it produces tough, dry steaks.",
    notes: "Completes the Baltic side of the False Tenderloin axis alongside Lithuanian Netikroji išpjova and Latvian Viltotais filejs.",
  },

  {
    id: "sult_cut_ee",
    name: "Sülditükid",
    region: "estonia",
    maps_to: [
      { canonical_id: "hind_shank", match_type: "cultural", confidence: 0.85, note: "Koot (shank) is mandatory for gelatin" },
      { canonical_id: "fore_shank", match_type: "cultural", confidence: 0.75, note: "Front shank or feet often included" },
    ],
    description: "Dish-driven cut for Estonian Sült — a cornerstone of traditional Estonian cuisine, particularly during Christmas. Requires Koot (shank) as the primary cut, with feet or fore shank often added for extra gelatin. Without the natural collagen from bone-in shank, the aspic won't set. Modern Estonian butchers sell pre-assembled 'Sülditükid' (Sült pieces) specifically for this dish, typically including shank, feet, and skin. An American cook trying to make Sült with boneless 'stew meat' will produce a soup that never firms up.",
    notes: "The Estonian Sült tradition is part of the broader Finno-Ugric and Northern European aspic culture — parallels exist in Finnish cuisine (which is already in the DB).",
  },

  // === BELARUS ===

  {
    id: "edge_logic_by",
    name: "The Edge System (Край)",
    region: "belarus",
    maps_to: [
      { canonical_id: "ribeye", match_type: "close", confidence: 0.85, note: "Тоўсты край (Thick Edge) = Ribeye" },
      { canonical_id: "striploin", match_type: "close", confidence: 0.85, note: "Тонкі край (Thin Edge) = Striploin" },
    ],
    synonyms: ["тоўсты край", "тонкі край", "край"],
    description: "A naming system found only in the East Slavic butchery belt (Belarus, Russia, Ukraine) that replaces the Western 'Ribeye / Striploin' distinction with a single axis: 'Thick Edge' vs 'Thin Edge.' The logic is purely anatomical — as the backbone runs from front to back, the loin muscle (longissimus dorsi) gradually thins out. The 'thick' (fatter, more marbled) front portion is Ribeye; the 'thin' (leaner, more uniform) back portion is Striploin. This elegant anatomical framing is mostly absent from Western European butchery, which names the two cuts by their location rather than their shape. For expats in Minsk, the system is a blocker: asking for 'loin' in a traditional Belarusian shop will produce the question 'thick or thin edge?' Your tool should flag Thin Edge = US NY Strip as the primary clarification. The Edge system also appears in Russian (толстый край / тонкий край) and Ukrainian butchery, making it a pan-East-Slavic pattern.",
    notes: "The East Slavic Edge system is one of the few truly distinctive anatomical naming conventions in the database. Cross-reference with Russian and Ukrainian entries (which use the same logic under Russian-language labels).",
  },

  {
    id: "gost_grading_by",
    name: "GOST Grading (Belarusian Soviet Standard)",
    region: "belarus",
    maps_to: [
      { canonical_id: "tenderloin", match_type: "cultural", confidence: 0.40, note: "GOST Grade 1 = premium cuts incl. tenderloin" },
      { canonical_id: "ribeye", match_type: "cultural", confidence: 0.40, note: "GOST Grade 1 includes loin/rib cuts" },
    ],
    description: "Belarus retains the Soviet GOST (Государственный стандарт / State Standard) system alongside modern Western retail, creating a two-tier meat economy. GOST grades beef into three categories: Сорт 1 (Grade 1, most tender — loin, tenderloin, rib), Сорт 2 (Grade 2, mid-tier — rump, sirloin, some round cuts), and Сорт 3 (Grade 3, least tender — shank, neck, chest). Traditional Belarusian butchers and state-run shops still use GOST grading prominently on price tags, while modern Minsk retailers layer USDA-style cut names on top. For an American shopper, the GOST system is less useful than anatomical naming — a 'Сорт 1' label doesn't indicate WHICH premium cut, just that it's premium. The parallel system exists in Russia, Ukraine, and Kazakhstan (already in the DB), but Belarus preserves GOST most visibly of all four countries. Your tool should recommend users ignore the Сорт number and ask for the specific anatomical name (Выразка, Тоўсты край, etc.).",
    notes: "Soviet GOST grading: a structural classifier, not a cut. Only relevant in Belarus, Russia, Ukraine, and Kazakhstan — the four post-Soviet countries that preserved the system.",
  },

  {
    id: "kholodets_cut_by",
    name: "Мяса для халадца",
    region: "belarus",
    maps_to: [
      { canonical_id: "hind_shank", match_type: "cultural", confidence: 0.85, note: "Halyonka (shank) is the primary gelatin source" },
      { canonical_id: "fore_shank", match_type: "cultural", confidence: 0.75, note: "Feet and fore shank commonly added" },
    ],
    synonyms: ["мяса для халадца", "kholodets meat"],
    description: "Dish-driven cut for Belarusian Халадзец (Kholodets) — the East Slavic cold meat aspic that parallels the Baltic Šaltiena/Galerts/Sült tradition but with distinctive Belarusian seasoning (bay leaf, horseradish, mustard served alongside). Halyonka (hind shank) is the mandatory base, typically combined with feet for maximum collagen. Belarusian Kholodets differs from its Russian and Ukrainian counterparts in being typically less garlicky and more prominently herbed. The cut requirement is absolute: without the natural gelatin from bone-in shank, the aspic will never set. Belarusian butchers at a Крама (shop) or Рынак (market) sell pre-assembled 'Kholodets sets' combining shank, feet, and sometimes ears or skin for extra gelatin.",
    notes: "Completes the East Slavic + Baltic aspic axis: Estonian Sült, Latvian Galerts, Lithuanian Šaltiena, Belarusian Халадзец, Russian Холодец, Ukrainian Холодець — 6 countries unified around a single cut requirement.",
  },

  {
    id: "falshyvaya_vyrazka_by",
    name: "Фальшывая выразка",
    region: "belarus",
    maps_to: [
      { canonical_id: "eye_of_round", match_type: "close", confidence: 0.80, note: "Primary — same cut/logic as 12 other European countries" },
      { canonical_id: "petite_tender", match_type: "close", confidence: 0.70, note: "Sometimes chuck tender" },
    ],
    synonyms: ["фальшывая выразка", "falshyvaya vyrazka"],
    description: "Belarus completes the 13-country pan-European False Tenderloin axis. The Belarusian name Фальшывая выразка follows the same construction as every other variant: a word meaning 'false' or 'fake' + the local name for tenderloin (Выразка, shared with Russian вырезка). Part of the single most remarkable linguistic pattern in the Cutranslator ontology — every Central/Eastern/Baltic European country has independently developed the same consumer warning for the same anatomical trap, across completely unrelated language families (Germanic: Falsches Filet; Slavic: falešná svíčková, falošná sviečkovica, lažni file, lažni biftek, фальшывая выразка; Finno-Ugric: fehérpecsenye, Valesisefilee; Baltic: Netikroji išpjova, Viltotais filejs; Romance: falsul mușchi; Semitic: פילה מדומה). Thirteen countries, six language families, one identical cultural warning about the same muscle.",
    notes: "The architectural anchor of the False Tenderloin axis — Belarus's entry is the Slavic root from which the regional pattern spreads. Cross-references: all other 12 False Tenderloin entries across Czech/Slovak/German/Hungarian/Slovenian/Croatian/Bosnian/Montenegrin/Macedonian/Romanian/Israeli/Lithuanian/Latvian/Estonian.",
  },

  // PERU
  {
    id: "picanya_pe",
    name: "Picanya (Peruvian Etymological Root)",
    region: "peru",
    maps_to: [
      { canonical_id: "sirloin_cap", match_type: "close", confidence: 0.90, note: "The Peruvian picanha — etymological ancestor of the pan-Latin term" },
    ],
    synonyms: ["punta de picanya"],
    description: "Peru's entry in the pan-Latin Picanha Axis — and arguably its etymological origin. The word 'Picanya' has Quechua-adjacent roots predating the modern Brazilian popularization of 'Picanha.' Peruvian butchers and grillers have used this term for generations at parrilladas in Lima and across the Andean highlands. Anatomically identical to Brazilian Picanha, Uruguayan Picaña, Bolivian Picaña, and the 7 Central American 'Punta de X' variants. The Peruvian preparation emphasizes thin slicing across the grain after whole-cap grilling, similar to the Brazilian rodízio tradition. This single-muscle-across-13-countries pattern is the richest cross-country entity in the Cutranslator ontology.",
    notes: "Anchor entry for the pan-Latin Picanha Axis (13 countries). Etymologically the root term predating Brazilian 'Picanha' popularization.",
  },

  {
    id: "lomo_saltado_cut_pe",
    name: "Carne para Lomo Saltado",
    region: "peru",
    maps_to: [
      { canonical_id: "tenderloin", match_type: "cultural", confidence: 0.90, note: "Lomo Fino is the required premium cut" },
      { canonical_id: "top_sirloin", match_type: "cultural", confidence: 0.70, note: "Corazón de Cuadril (heart of rump) is the affordable alternative" },
    ],
    description: "Dish-driven cut for Lomo Saltado — Peru's most iconic beef dish and a cornerstone of Chifa (Chinese-Peruvian) fusion cuisine. The dish requires meat that remains tender after a 60-second sear at wok-level heat. Lomo Fino (tenderloin) is the 'correct' cut for authentic preparations — most Peruvian recipes insist on it. For budget-conscious home cooks, the Corazón de Cuadril ('heart of the rump') is the acknowledged substitute, using the tender core of the top sirloin. Using standard US-style stew meat or cheaper chuck cuts will produce tough, chewy results that fail the dish's defining texture. The Peruvian butcher convention of pre-slicing 'carne para saltado' into the exact wok-ready strip format is unique to this cuisine — ask for 'picado en tiras para saltado.'",
    notes: "One of the few dish-driven cuts where 'too tough' is a guaranteed failure mode — the high-heat sear doesn't give collagen time to break down.",
  },

  {
    id: "asado_peruvian_dish_pe",
    name: "Asado Peruano (Pot Roast Dish)",
    region: "peru",
    maps_to: [
      { canonical_id: "eye_of_round", match_type: "cultural", confidence: 0.80, note: "Peceto (eye of round) is primary" },
      { canonical_id: "chuck_blade", match_type: "cultural", confidence: 0.70, note: "Paleta (shoulder) is secondary" },
    ],
    description: "One of the most consequential semantic traps in Latin American beef vocabulary. In Peru, 'Asado' does NOT mean BBQ — it means a POT ROAST DISH, slowly braised for hours in red wine, onions, and spices. An American expat in Lima who asks for 'meat for Asado' expecting BBQ will receive Peceto (eye of round) or Paleta (shoulder) — completely wrong cuts for grilling. To get meat for actual BBQ/grilling, the Peruvian request is 'carne para parrilla.' This makes Peru the 4th documented meaning of the word 'Asado' in the Cutranslator ontology (after Argentina/Uruguay's BBQ method, Israel's brisket preparation, and UAE's US-style short ribs). The Ecuadorian variant adds a 5th layer. One word, five meanings across five countries — the clearest example of single-word divergence in the database.",
    notes: "Fourth documented meaning of 'Asado' — the word now spans BBQ method (AR/UY), brisket dish (IL), short ribs (UAE), pot roast (PE/EC). Cross-reference all five.",
  },

  // BOLIVIA
  {
    id: "silpancho_cut_bo",
    name: "Carne para Silpancho",
    region: "bolivia",
    maps_to: [
      { canonical_id: "inside_round", match_type: "cultural", confidence: 0.85, note: "Pulpa Negra is the traditional cut" },
      { canonical_id: "top_sirloin", match_type: "cultural", confidence: 0.70, note: "Cadera also used" },
    ],
    description: "Dish-driven cut for Silpancho — Cochabamba's iconic tortilla-thin breaded steak dish, served over rice with a fried egg on top. The meat must be pounded until it's as thin as a flour tortilla — often 15-20 cm in diameter from a single piece. Bolivian butchers recognize 'carne para Silpancho' as a specific request for Pulpa Negra (inside round) pounded aggressively thin. Using a US-style thick steak for this dish is impossible — the pounding process depends on starting with a relatively thin cut. This extends the pan-Latin-American 'Bistec as preparation, not cut' pattern to its extreme: not just thin-sliced, but literally pounded to tortilla thickness. The Silpancho tradition is unique to Bolivia — not found in neighboring Peru or Argentina despite shared vocabulary.",
    notes: "Extends the 'Bistec as preparation' Latin American pattern to its most extreme form (tortilla-thin). Compare with Egyptian/Moroccan Bofteek and Central American Bistec conventions.",
  },

  {
    id: "pique_macho_cut_bo",
    name: "Carne para Piqué Macho",
    region: "bolivia",
    maps_to: [
      { canonical_id: "tenderloin", match_type: "cultural", confidence: 0.85, note: "Lomo Fino in high-end restaurants" },
      { canonical_id: "top_sirloin", match_type: "cultural", confidence: 0.75, note: "Cadera in traditional home cooking" },
    ],
    description: "Dish-driven cut for Piqué Macho — Cochabamba's cultural rival to Silpancho: bite-sized flash-fried beef cubes served with sausages, onions, peppers, and French fries. The dish is a flash-fry application like Peruvian Lomo Saltado, requiring premium tenderness that holds up to 60-90 seconds of wok-level heat. High-end Bolivian restaurants use Lomo Fino (tenderloin); traditional home kitchens use Cadera (top sirloin). The critical constraint is identical to Lomo Saltado: US 'stew meat' or cheaper braising cuts will produce tough, chewy Piqué — the dish's flash-fry method doesn't give collagen time to render. Bolivian butchers pre-cut 'carne picada para Piqué' in 2-3cm cubes specifically for this dish.",
    notes: "Bolivian parallel to Peruvian Lomo Saltado — both flash-fry dishes sharing the same cut-tenderness requirement. Part of the Andean 'high-heat quick-cook' cuisine pattern.",
  },

  {
    id: "picana_bo",
    name: "Picaña Cruceña",
    region: "bolivia",
    maps_to: [
      { canonical_id: "sirloin_cap", match_type: "close", confidence: 0.95, note: "The Bolivian picanha — with thick fat cap mandatory" },
    ],
    description: "Bolivia's entry in the pan-Latin Picanha Axis — specifically anchored in Santa Cruz's Camba (lowland) Churrasco culture, which mirrors the Argentine parrilla tradition more than the Andean Colla (highland) style. Picaña is almost always grilled whole with a thick fat cap intact, sliced tableside across the grain. Santa Cruz butchers refuse to trim the fat cap for traditional preparation. The Bolivian pronunciation 'Picaña' (with ñ) is intermediate between the Peruvian 'Picanya' (Quechua-adjacent root) and the Brazilian 'Picanha' (the global popularized form) — marking Bolivia as the geographic and linguistic midpoint of the Picanha Axis in South America.",
    notes: "Bolivia sits at the center of the Picanha Axis geographically and linguistically. Cross-reference with Peruvian Picanya, Brazilian Picanha, and the 10 other members of the 13-country axis.",
  },

  // ECUADOR
  {
    id: "asado_lomo_vs_tira_ec",
    name: "Asado Ambiguity (Lomo de Asado vs Asado de Tira)",
    region: "ecuador",
    maps_to: [
      { canonical_id: "striploin", match_type: "cultural", confidence: 0.85, note: "'Lomo de Asado' = Striploin" },
      { canonical_id: "short_ribs", match_type: "cultural", confidence: 0.85, note: "'Asado de Tira' = Short ribs, crosscut" },
    ],
    synonyms: ["lomo de asado", "asado de tira"],
    description: "The richest single-word intra-country disambiguation in the entire Cutranslator ontology. Ecuador is the only country where the word 'Asado' refers to two completely different anatomical cuts depending on the modifying phrase — and both products are routinely sold side-by-side in the same butcher case. 'Lomo de Asado' = the STRIPLOIN (NY Strip equivalent, a lean cylindrical loin steak). 'Asado de Tira' = SHORT RIBS, cut crosswise Flanken-style (same anatomical cut as Argentine tira de asado). An expat asking for 'Asado' without qualification will prompt the butcher to ask 'lomo o tira?' — the question itself is a cultural disambiguation ritual. This extends the pan-Latin 'Asado' semantic field to 5 documented meanings globally: Argentine BBQ method, Israeli brisket dish, UAE short ribs, Peruvian pot roast, and the Ecuadorian dual-cut sold.",
    notes: "The only intra-country word-same-cut-different case in the database. Same word, same country, two completely different products based solely on the modifier.",
  },

  {
    id: "seco_de_res_cut_ec",
    name: "Carne para Seco de Res",
    region: "ecuador",
    maps_to: [
      { canonical_id: "chuck_blade", match_type: "cultural", confidence: 0.85, note: "Paleta (shoulder) is primary" },
      { canonical_id: "brisket", match_type: "cultural", confidence: 0.70, note: "Pecho (brisket) secondary" },
    ],
    description: "Dish-driven cut for Seco de Res — Ecuador's national beef stew (also prepared as Seco de Chivo with goat). 'Seco' literally means 'dry,' referring to the reduced-sauce finish rather than a dry cooking method. The dish requires cuts that withstand 2+ hours of slow braising: Paleta (shoulder, chuck blade) or Pecho (brisket) are correct. Using Cadera (top sirloin) — a common expat mistake — will produce tough, stringy meat because the lean muscle overcooks before the tough connective tissue breaks down. Ecuadorian butchers recognize 'carne para seco' as a specific request for shoulder or brisket, often pre-cut into 2-3cm cubes. Contrasts strongly with the flash-fry Peruvian Lomo Saltado tradition: same geographic belt, opposite cooking requirements.",
    notes: "Part of the 'collagen-rich for long braise' pattern that spans Moroccan tajine, Uzbek Plov, Saudi Kabsa, and Central American Olla de Carne.",
  },

  {
    id: "mano_de_piedra_ec",
    name: "Mano de Piedra (Ecuadorian — Eye of Round)",
    region: "ecuador",
    maps_to: [
      { canonical_id: "eye_of_round", match_type: "close", confidence: 0.80, note: "Matches the Salvadoran mapping" },
    ],
    synonyms: ["salón"],
    description: "Ecuador extends the three-country 'Mano de Piedra' pattern — but which cut it refers to is a cross-border coin flip. Ecuador's 'Mano de Piedra' maps to eye of round (matching El Salvador). Nicaragua and Honduras use 'Mano de Piedra' for bottom round. This creates a documented cross-border trap: an expat familiar with Nicaraguan Mano de Piedra will buy the wrong cut in Ecuador (and vice versa). The Ecuadorian version is used for long braises only — the eye of round's extreme leanness means quick cooking produces inedible results. The name itself (literally 'hand of stone') emphasizes this toughness. Also called Salón in Ecuadorian butchery, paralleling the Nicaraguan and Honduran Salón (which maps to eye of round in those countries too, creating an internal consistency).",
    notes: "Mano de Piedra now mapped across 4 countries: El Salvador (eye of round), Ecuador (eye of round), Nicaragua (bottom round), Honduras (bottom round). 50/50 canonical split.",
  },

  {
    id: "picanha_ec",
    name: "Picanha / Punta de Cadera (Ecuadorian Coastal)",
    region: "ecuador",
    maps_to: [
      { canonical_id: "sirloin_cap", match_type: "close", confidence: 0.90, note: "The Ecuadorian picanha" },
    ],
    synonyms: ["punta de cadera"],
    description: "Ecuador's entry in the pan-Latin Picanha Axis. Uniquely, Ecuador uses BOTH the Brazilian-style 'Picanha' (increasingly common in Guayaquil coastal steakhouses, reflecting Brazilian culinary influence via Amazon region trade) AND the local 'Punta de Cadera' (literally 'hip point,' following the Central American 'Punta de X' convention). This dual-naming makes Ecuador the architectural bridge between the Brazilian and Central American naming streams of the Picanha Axis. Costa/Sierra split: the coast uses 'Picanha'; the highlands still use 'Punta de Cadera' or simple 'Cadera.'",
    notes: "The bridging entry of the Picanha Axis — Ecuador connects the Brazilian 'Picanha' branch with the Central American 'Punta de X' branch using both terms simultaneously.",
  },

  // === THAILAND ===

  {
    id: "suea_rong_hai_th",
    name: "Suea Rong Hai (Crying Tiger)",
    region: "thailand",
    maps_to: [
      { canonical_id: "brisket_point", match_type: "cultural", confidence: 0.70, note: "Specifically the fatty plate/deckle area" },
      { canonical_id: "short_plate", match_type: "cultural", confidence: 0.65, note: "Also plate/navel area" },
    ],
    synonyms: ["เสือร้องไห้"],
    description: "One of Thailand's most iconic grilled beef dishes — named for the Thai idiom 'the meat so good it makes a tiger cry.' Critically, Suea Rong Hai refers to a SPECIFIC cut: the thin, fatty layer of the brisket/plate (what Western butchery calls the 'deckle' or navel end). This is NOT US-style whole brisket; it's a thinly-sliced, marinated, grilled preparation. A Thai butcher asked for 'Suea Rong Hai' will provide the specific thin fatty layer — if the thickness is wrong, the dish can't be executed. An American expat buying a thick 'Point Cut' brisket expecting to make Suea Rong Hai will find the cut physically too thick to grill in the traditional 2-3 minute method. The correct approach: specify 'thin slab from the fatty brisket edge' or use the Thai term directly with a butcher familiar with regional Isaan cuisine.",
    notes: "A cut-as-dish entry — the name only makes sense in the context of the grilling preparation. Similar in spirit to Korean Chadolbagi (cut defined by preparation method).",
  },

  {
    id: "nuea_pueay_th",
    name: "Nuea Pueay (The Tender Braise Functional Label)",
    region: "thailand",
    maps_to: [
      { canonical_id: "hind_shank", match_type: "cultural", confidence: 0.75, note: "Nong (shank) primary" },
      { canonical_id: "short_ribs", match_type: "cultural", confidence: 0.65, note: "See-krong (ribs) secondary" },
    ],
    synonyms: ["เนื้อเปื่อย"],
    description: "A dish-driven functional label (not a specific muscle) that defines Thai beef noodle soup culture. 'Nuea Pueay' literally means 'tender braised beef' — and the cuts that qualify MUST have high connective tissue content to produce the 'melt-in-your-mouth' texture. Thai butchers at a wet market (Talad) will typically provide Nong (shank) or See-krong (ribs) when asked for 'Nuea Pueay.' Critically, lean US 'stew meat' from the round fails this preparation — without connective tissue to break down, the meat stays dry and fibrous in the broth. The Thai convention of functional labeling (similar to Korean Gu-i-yong / Guk-gori) treats the cooking intent as a first-class filter at the retail level, an architectural pattern absent from US butchery.",
    notes: "Functional label, not muscle. Cross-reference Korean Gu-i-yong / Guk-gori (similar structural principle in different cuisine).",
  },

  {
    id: "thin_slice_convention_th",
    name: "The Thai Paper-Thin Slicing Convention",
    region: "thailand",
    maps_to: [
      { canonical_id: "ribeye", match_type: "cultural", confidence: 0.40, note: "Applied across multiple cuts, not specific" },
      { canonical_id: "striploin", match_type: "cultural", confidence: 0.40, note: "Same convention" },
    ],
    synonyms: ["เนื้อหั่นบาง", "หั่นบางๆ"],
    description: "Thai beef retail operates on the same paper-thin slicing default as Japan, Korea, and the broader East/Southeast Asian region. The cultural reason is specific: traditional Thai-Brahman cattle produce leaner, tougher meat than USDA grain-fed beef — paper-thin slicing enables the quick-cook stir-fry, shabu-shabu, and hot-soup preparations that Thai cuisine specializes in. An American expat asking for 'a steak' in Bangkok will receive 2-3mm slices by default unless they explicitly use the term 'Nuea Tad Na' (เนื้อตัดหนา, thick-cut beef) or specify thickness in centimeters. The inverse convention of US butchery (steak-thickness default) is culturally embedded in Thailand. Part of the pan-Asian paper-thin slicing axis: Japan (Usugiri), Korea (frozen-shaved Chadolbagi), China (hot pot slices), Vietnam (Thái mỏng), Malaysia/Singapore ('Shabu-shabu style'), and Thailand.",
    notes: "Cross-reference pan-Asian paper-thin slicing axis (10 countries after this batch).",
  },

  // === VIETNAM ===

  {
    id: "gau_vn",
    name: "Gầu (The Crunchy Brisket Fat)",
    region: "vietnam",
    maps_to: [
      { canonical_id: "brisket_point", match_type: "close", confidence: 0.90, note: "Specifically the fatty brisket point" },
    ],
    synonyms: ["gầu"],
    description: "The defining premium topping of Vietnamese Phở — and a genuine cultural inversion of American brisket preparation. Gầu is specifically the FATTY point of the brisket (not the flat), and critically, it contains a specific type of fat that DOESN'T melt during the 8-12 hour Phở broth simmer. This fat remains firm and 'crunchy' (Vietnamese: giòn) even after hours of boiling — the opposite of American expectations. In US brisket preparation, this fat would be trimmed and discarded. In Vietnam, Gầu is a delicacy commanding premium prices at specialized Phở houses. Vietnamese butchers trim Gầu with careful attention to preserving this specific fat layer. An American expat ordering 'brisket' at a Vietnamese Phở shop may receive Nạm (lean brisket flat) by default; to get Gầu, the specific term must be used. The lean-vs-fatty brisket split (Nạm vs Gầu) is one of the most culturally specific butchery distinctions in the database.",
    notes: "The Nạm/Gầu split: cross-reference Korean Yangji/Chadolbagi brisket split (same structural principle — one primal, two cuts with divergent uses).",
  },

  {
    id: "bap_hoa_premium_vn",
    name: "Bắp Hoa (Flower Shank Premium Inversion)",
    region: "vietnam",
    maps_to: [
      { canonical_id: "hind_shank", match_type: "close", confidence: 0.85, note: "Specifically the marbled portion of the shank with visible tendon" },
    ],
    synonyms: ["bắp hoa"],
    description: "Another cultural inversion from US butchery conventions. In American retail, shank is perceived as 'cheap soup meat' — a value cut. In Vietnam, Bắp Hoa (literally 'flower shank') is a PREMIUM delicacy. The name refers to the flower-like pattern created by the intersection of meat, fat, and transparent tendon when the shank is sliced cross-section. It's served sliced cold as a drinking snack (Mồi), alongside rice wine and beer. Bắp Hoa is significantly more expensive than regular stew meat at Hanoi and Saigon wet markets — the price inversion is cultural, not anatomical. Part of a broader pattern: East Asian and Southeast Asian butchery often elevates 'tough, flavorful, tendon-rich' cuts above 'lean, tender' ones, the opposite of USDA grading logic. Cross-references: Chinese Niú jiàn (shank for cold appetizer Lǔ wèi), Iranian Mahicheh (shank as wedding centerpiece), Egyptian/Saudi/UAE/Qatari Moza (shank as prestige cut for Kabsa/Mandi/Machboos rice dishes).",
    notes: "Part of the pan-Asian-and-Middle-Eastern 'shank-as-prestige' inversion. This now spans 7+ countries (VN + CN + IR + EG + SA + UAE + QA).",
  },

  {
    id: "pho_toppings_vn",
    name: "The Phở Topping System",
    region: "vietnam",
    maps_to: [
      { canonical_id: "eye_of_round", match_type: "cultural", confidence: 0.70, note: "Tái topping — raw, cooked by broth" },
      { canonical_id: "brisket_flat", match_type: "cultural", confidence: 0.70, note: "Nạm topping — pre-cooked flat" },
      { canonical_id: "brisket_point", match_type: "cultural", confidence: 0.70, note: "Gầu topping — pre-cooked fatty point" },
      { canonical_id: "hind_shank", match_type: "cultural", confidence: 0.70, note: "Bắp topping — pre-cooked shank" },
    ],
    synonyms: ["tái", "nạm", "gầu", "gân", "sách", "bắp"],
    description: "Vietnamese Phở operates on a cut-selection ritual unique to the region. Each topping type is both a specific cut AND a specific cooking state, listed explicitly on the menu: Tái (rare eye of round cooked by broth), Nạm (pre-cooked lean brisket), Gầu (pre-cooked fatty brisket), Bắp / Bắp hoa (pre-cooked shank / flower shank), Gân (pre-cooked tendon, offal), Sách (pre-cooked book tripe, offal), Đặc biệt ('special' — all toppings combined). A user ordering 'Phở bò' must specify toppings, often as a compound code: 'Tái Nạm Gầu Gân' is a common combination. Tendon (Gân) and tripe (Sách) are essential cultural components but fall outside the beef-cut canonical ontology — they're connective tissue and offal. This entity documents the topping vocabulary as cultural context rather than forcing them into incorrect canonical mappings. An American expat at a Phở shop can navigate by ordering 'Phở tái' (rare only) or 'Phở đặc biệt' (everything).",
    notes: "Documents the ontology gap for Vietnamese Gân (tendon) and Sách (tripe) — offal outside current canonical coverage. Flag as future ontology expansion candidate.",
  },

  {
    id: "bo_ne_cut_vn",
    name: "Bò Né (The Sizzling Steak Dish)",
    region: "vietnam",
    maps_to: [
      { canonical_id: "striploin", match_type: "cultural", confidence: 0.60, note: "Often cheaper striploin" },
      { canonical_id: "inside_round", match_type: "cultural", confidence: 0.55, note: "Or tenderized round" },
    ],
    synonyms: ["bò né"],
    description: "A dish-driven cut where the US expectation of 'better meat = better dish' actively fails. Bò Né is Vietnam's iconic sizzling skillet beef with egg — traditionally served for breakfast. The critical cultural nuance: authentic Bò Né uses thinner, leaner cuts that are mechanically tenderized or marinated in green papaya juice. Using a thick USDA Prime Ribeye produces a dish that's too greasy for the traditional lime-and-pepper dipping sauce. The lean-plus-tenderized approach is culturally correct; the premium-marbled Western approach is culturally wrong. This makes Bò Né another example of the East/Southeast-Asian pattern where cooking method dictates cut selection, not the other way around. Companion example: Bò Lúc Lắc (shaking beef) requires actual tenderloin because the flash-wok format needs pre-existing tenderness.",
    notes: "Another case where 'premium US cut' produces culturally-wrong results. Cross-reference Peruvian Lomo Saltado (opposite conclusion — requires premium tenderloin).",
  },

  // === PHILIPPINES ===

  {
    id: "bulalo_cut_ph",
    name: "Bulalo (Bone-In Shank Requirement)",
    region: "philippines",
    maps_to: [
      { canonical_id: "hind_shank", match_type: "close", confidence: 0.90, note: "Specifically bone-in with marrow" },
    ],
    synonyms: ["bulalo"],
    description: "One of the most culturally specific cut requirements in the Southeast Asian ontology. Bulalo refers to the BONE-IN leg shank SPECIFICALLY INCLUDING the marrow — not just the meat. An American butcher selling 'boneless shank' is technically selling the same muscle, but it CANNOT produce authentic Bulalo because the bone and marrow ARE the product. The Filipino soup depends on the marrow dissolving into the broth during the 2-3 hour simmer, producing a rich bone-broth unique to the dish. A Filipino butcher asked for 'Bulalo' will automatically provide cross-cut bone-in shank pieces with the marrow intact — there's no ambiguity. The parallel in other cuisines: Chinese Chaoshan 'drinking bone,' Vietnamese Bắp (shank) for Bún Bò Huế, Italian Osso Buco all share the bone-in requirement but Bulalo is the most explicit — the term specifically means 'bone+marrow+meat.' An expat attempting the dish with US boneless shank will produce a thin broth that local Filipinos would not recognize as Bulalo.",
    notes: "The cleanest 'bone is the product' requirement in the database. Cross-reference Osso Buco (Italy, existing), Chinese Chaoshan soup bones, Vietnamese Bắp.",
  },

  {
    id: "kamto_ph",
    name: "Kamto (Philippine Flank's Braising Identity)",
    region: "philippines",
    maps_to: [
      { canonical_id: "flank", match_type: "close", confidence: 0.85, note: "Anatomically the flank — but used culturally for braising, not grilling" },
    ],
    synonyms: ["kamto"],
    description: "An inversion of US flank steak conventions. In America, flank is almost exclusively grilled (London Broil) — sliced thin against the grain after high-heat cooking. In the Philippines, Kamto is almost always BRAISED, used as the base for Beef Caldereta (Filipino tomato-based stew). The Filipino Kamto contains more connective tissue layers than American-source flank, accumulated from locally-raised cattle — this connective tissue becomes tender and sticky during the long braise, producing Caldereta's characteristic richness. Using a very lean US 'London Broil' for a Filipino Caldereta will produce a dry, fibrous dish because the connective tissue needed for braising isn't present. The cultural takeaway: 'flank' as a cut is identical; 'flank preparation' diverges completely between American grilling and Filipino braising traditions.",
    notes: "Documents the cut-vs-preparation divergence. Similar to Korean Chadolbagi (preparation-specific shaved brisket) and Thai Suea Rong Hai (preparation-specific thin grilled brisket).",
  },

  {
    id: "kenchi_hierarchy_ph",
    name: "The Kenchi Naming Hierarchy",
    region: "philippines",
    maps_to: [
      { canonical_id: "hind_shank", match_type: "close", confidence: 0.85, note: "Kenchi = the modern/common term" },
    ],
    synonyms: ["kenchi", "binti"],
    description: "Philippine butchery operates on a mixed Spanish-colonial and indigenous Tagalog naming system, with 'Kenchi' (Tagalog) and 'Binti' (literally 'leg' in Tagalog) coexisting as names for shank. 'Kenchi' is the most common modern term at SM Supermarket, Robinsons, and Landmark retail. 'Binti' is more common at traditional Palengke wet markets. Bulalo (the dish/cut requirement) overrides both when requesting bone-in specifically. An expat navigating Philippine butchery needs to recognize all three terms refer to the same anatomical cut (hind_shank) with slightly different cultural registers: Kenchi = retail, Binti = traditional, Bulalo = dish-specific. This tri-naming for one cut is a Philippine-specific pattern — most other countries in the database use one or two terms for shank.",
    notes: "Three names for one cut with different cultural registers. Documents the bilingual Spanish-colonial + Tagalog butchery system.",
  },

  // === INDONESIA ===

  {
    id: "bakso_problem_id",
    name: "The Bakso Problem (Pan-SE-Asian Beef Ball Logic)",
    region: "indonesia",
    maps_to: [
      { canonical_id: "outside_round", match_type: "cultural", confidence: 0.80, note: "Gandik (bottom round) is primary" },
      { canonical_id: "inside_round", match_type: "cultural", confidence: 0.75, note: "Penutup (top round) secondary" },
    ],
    synonyms: ["bakso", "bebola", "beef ball"],
    description: "The defining cross-country butchery pattern of Southeast Asia — and a complete inversion of US ground beef conventions. Indonesian Bakso, Malaysian Bebola, Singaporean Beef Ball, and Vietnamese Bò viên all share the same requirement: the meat must be VERY LEAN with high protein binding properties. Indonesian butchers specifically use Gandik (bottom round) or Penutup (top round) for Bakso production. In the US, 80/20 ground beef (80% lean, 20% fat) is the standard for burgers because the fat produces juiciness — but this exact ratio will make Bakso FAIL. The high fat content prevents protein binding, causing the balls to fall apart during cooking and lose their characteristic 'springy' (kenyal) texture. The USDA 'ideal' becomes the Southeast Asian 'wrong.' This inverse pattern is one of the cleanest examples in the database of culture-specific cut logic that directly contradicts Western defaults. An American tourist buying 'ground beef' to make Bakso will produce a dish locals recognize as failed — the texture signals it immediately.",
    notes: "The Bakso logic spans Indonesia, Malaysia, Singapore, and Vietnam (Bò viên). Architecturally this is a 4-country pattern worth anchoring here in Indonesia (the cultural origin).",
  },

  {
    id: "sandung_lamur_id",
    name: "Sandung Lamur (Fatty Brisket Soup Requirement)",
    region: "indonesia",
    maps_to: [
      { canonical_id: "brisket_point", match_type: "close", confidence: 0.90, note: "Specifically the fatty point" },
    ],
    synonyms: ["sandung lamur"],
    description: "Indonesia's fatty-brisket tradition — the essential cut for Rawon (black soup) and Sup Iga. Sandung Lamur is specifically the FATTY brisket point (deckle area), not the lean flat. The fat content is what makes the broth rich and gives the soup its characteristic 'umami' mouthfeel. American-trimmed 'flat cut' brisket produces an Indonesian soup that local diners would recognize as lacking depth. An expat shopping at Jakarta wet market (Pasar Tradisional) asking for 'brisket' may receive either variant — specifying Sandung Lamur specifically produces the fatty cut. Pairs with the Vietnamese Gầu/Nạm split (same structural principle — brisket lean/fat split across cultures with different preferences) and the Korean Chadolbagi/Yangji split.",
    notes: "Part of the brisket-lean-vs-fatty axis: Vietnamese Nạm/Gầu, Korean Yangji/Chadolbagi, Indonesian Sandung Lamur preference, Singaporean 'Point End' Aus labeling.",
  },

  {
    id: "rendang_cut_id",
    name: "Carne para Rendang (The 4-Hour Logic)",
    region: "indonesia",
    maps_to: [
      { canonical_id: "hind_shank", match_type: "cultural", confidence: 0.80, note: "Sengkel primary" },
      { canonical_id: "outside_round", match_type: "cultural", confidence: 0.75, note: "Paha belakang (rear leg) secondary" },
    ],
    synonyms: ["daging rendang"],
    description: "Dish-driven cut for Rendang, one of Indonesia's most iconic dishes. Rendang requires meat that can WITHSTAND a 4-hour cook without disintegrating — the coconut milk reduces slowly until almost dry, and the meat must retain its shape through the entire process. Chuck-type cuts will fall apart (too much connective tissue to break down); premium tenderloin is a waste (the long cook destroys the tenderness premium). The correct cuts are Sengkel (shank, which retains shape) or Paha belakang (rear leg round, which takes on coconut milk flavor without disintegrating). An American attempting Rendang with US 'stew meat' (typically trimmed chuck) will find the meat falling apart by hour 2 — a cultural failure mode. This is the Southeast Asian counterpart to Moroccan Tajine meat, Saudi Kabsa Moza, and Uzbek Plov meat: all require specific cuts that survive multi-hour cooking.",
    notes: "The long-braise axis: Rendang (ID), Tajine (MA), Kabsa (SA), Plov (UZ), Pabellón (VE), Pho (VN) — all require collagen-rich cuts with specific durability characteristics.",
  },

  {
    id: "fresh_meat_axis_id",
    name: "The Fresh-vs-Import Meat Axis",
    region: "indonesia",
    maps_to: [
      { canonical_id: "inside_round", match_type: "cultural", confidence: 0.40, note: "Varies by retailer — cultural designation, not anatomical" },
    ],
    synonyms: ["daging segar", "daging lokal"],
    description: "A pan-Southeast-Asian cultural marker that distinguishes 'Daging Segar' (fresh-slaughter beef from wet markets) from 'Daging Impor' (chilled/frozen imported from Australia, New Zealand, Brazil, or India). Fresh-slaughter Indonesian beef comes from local Zebu-cross cattle — typically leaner, tougher, and more flavorful than imported grain-fed beef. The two beef types produce different culinary results: Daging Segar is ideal for slow-cooked dishes (Rendang, Soto) where toughness breaks down; Daging Impor is preferred for quick-cook grilling (Sate, Bistik). Indonesian Muslim butchery operations at Pasar Tradisional operate on same-day slaughter cycles — meat sold within hours of slaughter, never refrigerated. This extends the pan-Southeast-Asian fresh-meat tradition: Malaysia (Daging Segar), Thailand (wet market Talad freshness), Vietnam (Chợ morning market), Taiwan (Warm Beef — Wēn tǐ niú), Philippines (Palengke freshness culture). An American expat conditioned to USDA chilled aging will find the fresh-meat texture and flavor markedly different — the tool should validate the practice as culturally authentic rather than flag it as a concern.",
    notes: "The Fresh Meat axis now spans 6+ countries across Southeast and East Asia. Cross-reference Taiwan Wēn tǐ niú (Batch 10), Malaysia Daging Segar (this batch).",
  },

  // === MALAYSIA ===

  {
    id: "commonwealth_sirloin_trap_my",
    name: "The Commonwealth Sirloin Trap (Malaysia)",
    region: "malaysia",
    maps_to: [
      { canonical_id: "striploin", match_type: "cultural", confidence: 0.90, note: "Malaysian 'Sirloin' = US Striploin" },
      { canonical_id: "top_sirloin", match_type: "cultural", confidence: 0.85, note: "What Americans call 'Sirloin' (top sirloin), Malaysians call 'Rump'" },
    ],
    synonyms: ["sirloin", "rump"],
    description: "Malaysia's entry in the Commonwealth-Inheritance Sirloin trap — architecturally distinct from the East Asian Phonetic Sirloin trap. This is NOT a phonetic drift like Japanese Sāroin or Chinese Xī lěng; it's a British butchery inheritance where 'Sirloin' genuinely refers to the Striploin in the naming system. The Commonwealth convention: 'Sirloin' = US Striploin (NY Strip), 'Rump' = US Top Sirloin. The Malaysian variant follows this exactly due to British colonial history. A US expat in Kuala Lumpur ordering 'Sirloin' at a steakhouse or supermarket (Jaya Grocer, Village Grocer) will receive a premium, fatty NY Strip at a significantly higher price than the leaner US Top Sirloin they expected. To get the US Top Sirloin equivalent, the correct Malaysian request is 'Rump.' This trap spans the Commonwealth axis: UK (existing), Ireland (existing), UAE (existing, Waitrose context), Malaysia (NEW), Singapore (NEW). Unlike the East Asian phonetic trap where the word was borrowed semantically, the Commonwealth version is linguistically continuous with British retail.",
    notes: "Commonwealth Sirloin trap: UK, Ireland, UAE, Malaysia, Singapore (future Australia). Distinct architecture from East Asian Phonetic trap (Japan, Korea, China, Taiwan).",
  },

  {
    id: "daging_tetel_my",
    name: "Daging Tetel (Fatty Trimmings Culinary Role)",
    region: "malaysia",
    maps_to: [
      { canonical_id: "brisket", match_type: "approximate", confidence: 0.65, note: "Umbrella for brisket/plate/trimming fat" },
      { canonical_id: "short_plate", match_type: "cultural", confidence: 0.60, note: "Also plate/navel trimmings" },
    ],
    synonyms: ["tetel"],
    description: "Malaysia's 'Daging Tetel' is an umbrella term for fatty trimmings — specifically the brisket, plate, and associated fat/tendon (urat) trimmings that Western butchery typically cleans and discards. For traditional dishes like Asam Pedas Daging (sour-spicy beef) and Sup Utara (Northern Malaysian soup), Daging Tetel is essential: the mix of meat, fat, and connective tissue produces the 'oily richness' (lemak) that defines authentic Malaysian street food. Using clean, lean US brisket for these dishes produces a result local diners recognize as wrong — the essential mouthfeel is missing. Malaysian butchers at Pasar Chow Kit sell Daging Tetel as its own category, pre-assembled from multiple primal trimmings. The cultural convention treats 'meat quality' as inverse to US standards: more fat, more tendon, more connective tissue = better Tetel.",
    notes: "Parallels Chinese Niú nǎn (umbrella fatty-chest term), Vietnamese Gầu (fatty brisket premium), Indonesian Sandung Lamur — pan-SE-Asian pattern of fat-positive butchery inverted from USDA.",
  },

  // === SINGAPORE ===

  {
    id: "commonwealth_sirloin_trap_sg",
    name: "The Commonwealth Sirloin Trap (Singapore's Peak Density)",
    region: "singapore",
    maps_to: [
      { canonical_id: "striploin", match_type: "cultural", confidence: 0.90, note: "Singapore 'Sirloin' = US Striploin" },
      { canonical_id: "top_sirloin", match_type: "cultural", confidence: 0.85, note: "Singapore 'Rump' = US Top Sirloin" },
      { canonical_id: "ribeye", match_type: "cultural", confidence: 0.85, note: "Australian 'Scotch Fillet' = US Ribeye, widely used in Singapore" },
    ],
    synonyms: ["sirloin", "rump", "scotch fillet"],
    description: "Singapore is where the Commonwealth Sirloin trap reaches its maximum density — not because Singaporean usage is unusual, but because Singapore operates BOTH the British/Australian retail system AND the American USDA retail system SIMULTANEOUSLY in the same grocery stores (Cold Storage, NTUC FairPrice). A single meat case may label the same physical Striploin as 'Sirloin' (British), 'Striploin' (USDA), AND 'Porterhouse' (if cut with the tenderloin attached — Australian). An American expat shopping at FairPrice can see three different labels for one cut and no indication of which refers to the familiar US meaning. The key disambiguations: 'Sirloin' = Striploin (not US Top Sirloin), 'Rump' = US Top Sirloin (not US Rump Roast), 'Scotch Fillet' = Ribeye (Australian import labeling). This makes Singapore a pedagogical case study in the Commonwealth trap. To avoid confusion: if you want what Americans call 'Sirloin,' always say 'Rump Steak' explicitly in Singapore.",
    notes: "Peak density of Commonwealth Sirloin trap. Singapore is the architectural 'intersection' of the British and American retail systems coexisting in the same physical stores.",
  },

  {
    id: "beef_ball_meat_sg",
    name: "The Singapore Beef Ball Logic",
    region: "singapore",
    maps_to: [
      { canonical_id: "inside_round", match_type: "cultural", confidence: 0.75, note: "Topside is standard for beef balls" },
    ],
    synonyms: ["niu rou wan", "beef ball meat"],
    description: "Singapore's beef ball tradition (Niú ròu wán in Hokkien) follows the same pan-SE-Asian Bakso Problem logic: local butchers prioritize Topside (US Inside Round) for meatball production because of its low fat and high protein binding. 'Extra Lean' and 'Premium' designations at NTUC FairPrice minced beef sections reflect this preference. A US expat buying standard 80/20 ground beef for homemade beef balls will produce a texture locals recognize as wrong — the fat prevents the 'springy' bounce (Q-dan or kenyal) that defines authentic beef balls. Cross-reference the Indonesian Bakso Problem entity — Singapore's version is functionally identical but expressed through Commonwealth-retail labeling ('Topside,' 'Extra Lean') rather than local-language cut names. This is the clearest example in the database of identical culinary logic expressed through two different butchery vocabulary systems.",
    notes: "Cross-reference the Indonesian Bakso Problem entity. Same cultural logic, different vocabulary system.",
  },

  {
    id: "scotch_fillet_sg",
    name: "Scotch Fillet (The Australian Import Bridge)",
    region: "singapore",
    maps_to: [
      { canonical_id: "ribeye", match_type: "close", confidence: 0.90, note: "Australian 'Scotch Fillet' = US Ribeye" },
    ],
    synonyms: ["scotch fillet"],
    description: "A uniquely Singaporean high-frequency term that documents the broader Commonwealth-retail influence in Southeast Asia. 'Scotch Fillet' is the Australian AUS-MEAT terminology for Ribeye — anatomically identical to the US Ribeye, but labeled by AUS-MEAT export convention. Singapore imports approximately 60% of its premium beef from Australia, making 'Scotch Fillet' the dominant ribeye label at Cold Storage, FairPrice, and high-end butchers. US expats see 'Scotch Fillet' and assume it's an unfamiliar cut — it's not. This single-term cross-reference point exists throughout the Commonwealth sphere wherever Australian beef is imported: UAE (existing entry), Malaysia (existing in this batch), Singapore (this entity), and the broader Gulf/Asia-Pacific region. After Australia is added as its own region (future batch), all existing 'Scotch Fillet' references across 4+ countries will gain a proper etymological anchor.",
    notes: "Flags the future Australia batch as high-leverage — will retroactively strengthen existing Scotch Fillet entries in UAE, Saudi, Qatar, Malaysia, and Singapore.",
  },

  // === JAPAN ===

  {
    id: "sirloin_phonetic_trap_asia",
    name: "The Pan-East-Asian Sirloin Phonetic Trap",
    region: "japan",
    maps_to: [
      { canonical_id: "striploin", match_type: "cultural", confidence: 0.85, note: "Japan, Korea, China all use 'Sirloin' phonetic borrow for Striploin" },
      { canonical_id: "ribeye", match_type: "cultural", confidence: 0.70, note: "Taiwan alone uses the same phonetic borrow for Ribeye" },
    ],
    synonyms: ["サーロイン", "채끝", "沙朗", "西冷"],
    description: "The single most consequential naming trap in East Asian butchery. All four major East Asian beef cultures borrowed the English word 'Sirloin' phonetically — but none of them use the word to mean what Americans call 'Sirloin' (the leaner top_sirloin cut). Japan (Sāroin, サーロイン), Korea (Chaekkeut, 채끝), and China (Xī lěng, 西冷) all use the phonetic borrow to mean STRIPLOIN — the premium NY Strip. Taiwan (Shā lǎng, 沙朗) uses the same phonetic borrow to mean RIBEYE instead — a semantic drift unique among the four. For an American expat anywhere in East Asia, ordering 'Sirloin' at a steakhouse will produce a significantly more expensive cut than expected, and in Taiwan specifically, a completely different cut. The three-way trap (leaner-sirloin expected, striploin received in JP/KR/CN, ribeye received in TW) has no equivalent in any other region of the database. The West→East flow of the word 'Sirloin' landed in a region where the actual US cut (top_sirloin) didn't have cultural prestige, so the premium associations of the word attached to whatever the local luxury cut was.",
    notes: "Anchor entry for the pan-East-Asian phonetic trap. Cross-reference: Korean Chaekkeut, Taiwanese Shā lǎng, Chinese Xī lěng. All four entries should link back to this.",
  },

  {
    id: "zabuton_jp",
    name: "Zabuton (ザブトン, The Cushion)",
    region: "japan",
    maps_to: [
      { canonical_id: "chuck_eye_steak", match_type: "approximate", confidence: 0.70, note: "Closest canonical — but anatomically Zabuton is chuck flap top, not chuck eye" },
      { canonical_id: "chuck_roll", match_type: "approximate", confidence: 0.65, note: "Chuck roll sub-area" },
    ],
    synonyms: ["ザブトン"],
    description: "One of the 'holy grail' cuts of Japanese Yakiniku butchery — and a genuine gap in the US canonical ontology. Zabuton (literally 'the cushion,' named for its square shape and rich texture) is the top portion of the chuck roll, adjacent to but distinct from the chuck eye. In Japanese A5 Wagyu, this area achieves marbling density rivaling the ribeye at a fraction of the price. US butchery typically doesn't isolate this muscle — it's absorbed into the generic chuck primal. No single US canonical cut describes Zabuton precisely; chuck_eye_steak is the closest but anatomically imprecise. Japanese butchers trim Zabuton with specific attention to fat cap preservation, and Yakiniku restaurants feature it prominently in 'rare cuts' (kibo no bui) tasting menus. An American butcher asked for 'chuck eye' cannot replicate Zabuton quality without specialized training.",
    notes: "Documents a genuine limitation of the current US-centric canonical ontology. A future `chuck_flap_top` canonical would be a valuable addition.",
  },

  {
    id: "misuji_jp",
    name: "Misuji (ミスジ, The Three Sinews)",
    region: "japan",
    maps_to: [
      { canonical_id: "flat_iron", match_type: "close", confidence: 0.90, note: "Anatomically the top blade / flat iron" },
    ],
    synonyms: ["ミスジ"],
    description: "The rarest cut on the Japanese Yakiniku menu — each cow produces only about 2 kilograms of Misuji. Anatomically it's the top blade (flat iron), characterized by the central sinew that gives the cut its name ('three sinews' describes the muscle's internal structure). In Western butchery, the flat iron took off only after the late-1990s Nebraska research that identified it as a hidden gem. Japanese butchers have known this for generations. Misuji requires careful trimming — the central sinew must be removed without damaging the muscle fibers. Part of the pan-East-Asian flat iron trio: Japanese Misuji, Korean Buchaesal, Chinese Bǎn jiàn — same anatomical cut, three different names, all celebrated in their respective BBQ/grilling traditions while US butchery treats flat iron as a value cut.",
    notes: "Flat iron has higher cultural prestige in East Asia than in the US — a reverse of the usual US-centric value flow. Cross-reference with Korean Buchaesal and Chinese Bǎn jiàn.",
  },

  {
    id: "karubi_jp",
    name: "Karubi (カルビ) — The Umbrella Term",
    region: "japan",
    maps_to: [
      { canonical_id: "short_ribs", match_type: "cultural", confidence: 0.70, note: "Most commonly short ribs" },
      { canonical_id: "short_plate", match_type: "cultural", confidence: 0.60, note: "Also plate cuts" },
      { canonical_id: "chuck_roll", match_type: "cultural", confidence: 0.50, note: "Marbled chuck sometimes sold as Karubi" },
    ],
    synonyms: ["カルビ"],
    description: "Karubi is NOT a specific muscle — it's a Japanese umbrella term for 'marbled grill cuts from the rib and plate region.' Price varies wildly depending on which sub-cut you receive: Jō-Karubi (premium, closer to the short rib), Tokujō-Karubi (super-premium, often short plate), and regular Karubi can be 3-5x price differences at the same restaurant. The term originates from Korean 'Galbi' (갈비) but shifted semantically as it entered Japanese Yakiniku culture. An American expat seeing 'Karubi' on a Yakiniku menu cannot predict the exact cut or quality without asking — the category spans multiple US canonical cuts. This ambiguity is culturally accepted in Japan; restaurants competing on Karubi quality differentiate through sub-categorization (Tokujō, Jō, regular) rather than anatomical naming.",
    notes: "A rare example of a regional cut name that genuinely doesn't map to a single canonical. Multiple maps_to edges reflect the umbrella nature. Cross-reference Korean Galbi, which is more anatomically specific (short_ribs).",
  },

  // === SOUTH KOREA ===

  {
    id: "chadolbagi_kr",
    name: "Chadolbagi (차돌박이, Shaved Brisket Point)",
    region: "south_korea",
    maps_to: [
      { canonical_id: "brisket_point", match_type: "close", confidence: 0.90, note: "The fatty brisket point specifically — shaved, not sliced" },
    ],
    synonyms: ["차돌박이"],
    description: "One of the most distinctive Korean BBQ cuts — and a textbook case of how preparation method redefines the cut itself. Chadolbagi is specifically the fatty POINT of the brisket (not the flat), frozen solid and shaved on a meat slicer into translucent sheets 1-2mm thick. The shaved sheets curl into characteristic rolls when placed on the hot grill, cooking in approximately 10 seconds. Using an unsliced American-style brisket slab for Chadolbagi preparation is physically impossible — the cut depends on the frozen-shave format. Conversely, attempting to smoke Chadolbagi slices American-BBQ-style would turn them to leather in minutes. This is the single best example in the Korean ontology of the paper-thin slicing convention redefining Western cut assumptions. Pairs with Yangji (brisket flat) as the other half of the Korean brisket split — same primal, completely different cooking methods.",
    notes: "The Korean brisket split (Chadolbagi for grill / Yangji for soup) is one of the cleanest examples of 'cut name = cooking method + muscle' logic in the database.",
  },

  {
    id: "salchisal_kr",
    name: "Salchisal (살치살, Chuck Flap Tail)",
    region: "south_korea",
    maps_to: [
      { canonical_id: "chuck_roll", match_type: "approximate", confidence: 0.70, note: "Chuck roll area — but specifically the rib cap portion" },
    ],
    synonyms: ["살치살"],
    description: "Like Japanese Zabuton, Salchisal is a cut that highlights a genuine gap in the US canonical ontology. Anatomically Salchisal is the 'chuck flap tail' or 'rib cap' — the fat-laden extension of the chuck roll that runs alongside the upper ribs. In Korean BBQ tradition, Salchisal is one of the top three 'melt-in-your-mouth' cuts (alongside Chadolbagi and Galbi), prized for its intense marbling and buttery texture. US butchery absorbs this region into generic 'chuck eye' or 'chuck cap' without isolating it as a distinct retail cut. Korean butchers trim Salchisal with careful attention to the gristle lines and sell it specifically for high-heat grilling — a use case that would fail for a standard US chuck cut. The lack of an exact canonical match means the current `chuck_roll` mapping under-represents the cut's cultural status.",
    notes: "Another example of 'one cow, a hundred flavors' Korean butchery generating named muscles that US canonical ontology doesn't isolate.",
  },

  {
    id: "deungsim_range_kr",
    name: "The Deungsim Range (등심 sub-categorization)",
    region: "south_korea",
    maps_to: [
      { canonical_id: "ribeye", match_type: "cultural", confidence: 0.80, note: "Primary — most Deungsim is ribeye-area" },
      { canonical_id: "chuck_eye_steak", match_type: "cultural", confidence: 0.60, note: "Wit-deungsim is upper/chuck end" },
    ],
    synonyms: ["등심", "꽃등심", "윗등심", "아래등심"],
    description: "Deungsim (등심, 'back heart') is a broad Korean category that maps loosely to 'the rib section' — but Korean butchery subdivides it with extreme precision. A-re-deungsim (아래등심, 'lower') is closest to the American ribeye. Wit-deungsim (윗등심, 'upper') extends into the chuck eye territory. Kkot-deungsim (꽃등심, 'flower ribeye') is the most marbled center portion, analogous to the Spinalis dorsi rib cap — considered the finest cut in the entire Korean ontology. An American expat ordering simple 'Deungsim' at a Korean butcher will receive a variable product depending on the butcher's inventory; the expert move is to specify Kkot-deungsim for the premium center cut. This sub-categorization is typical of the 'one cow, a hundred flavors' Korean philosophy — where Americans see 'ribeye,' Koreans see three distinct retail cuts with different price points and cooking applications.",
    notes: "The Deungsim sub-categorization is a miniature version of the Karubi umbrella problem — same principle of cultural granularity beyond US canonical resolution.",
  },

  {
    id: "guiyong_vs_gukgori_kr",
    name: "Gu-i-yong vs Guk-gori (Grill Meat vs Soup Meat Labeling)",
    region: "south_korea",
    maps_to: [
      { canonical_id: "short_ribs", match_type: "cultural", confidence: 0.50, note: "Gu-i-yong often marks short ribs or other grill cuts" },
      { canonical_id: "hind_shank", match_type: "cultural", confidence: 0.50, note: "Guk-gori often marks shank or brisket for soup" },
    ],
    synonyms: ["구이용", "국거리"],
    description: "A uniquely Korean labeling system that operates at the butcher-counter level rather than the cut level. Gu-i-yong (구이용) means 'for grilling' and is applied as a label across multiple anatomical cuts — you'll see Gu-i-yong Galbi, Gu-i-yong Chadolbagi, Gu-i-yong Deungsim. Guk-gori (국거리) means 'for soup' and is similarly cross-cut — Guk-gori Yangji, Guk-gori Satae, Guk-gori Kkori. An American shopper buying 'beef' at E-Mart or Homeplus without checking these functional labels can easily buy soup-destined meat for a grill (producing tough, stringy results) or grill-destined meat for a soup (which overcooks and loses its intended BBQ texture). This labeling convention has no Western equivalent — US retail assumes the buyer knows the cut's cooking application. Korean retail treats cooking intent as a first-class filter.",
    notes: "Not a cut but a labeling system. Documents a structural difference between Korean and Western meat retail. Cross-reference with similar functional labels in Turkish (Kuşbaşı 'for cube') and Russian (meat grade labels).",
  },

  // === TAIWAN ===

  {
    id: "wen_ti_niu_tw",
    name: "Warm Beef (溫體牛, Wēn tǐ niú)",
    region: "taiwan",
    maps_to: [
      { canonical_id: "inside_round", match_type: "cultural", confidence: 0.40, note: "Often inside round area, but varies" },
      { canonical_id: "outside_round", match_type: "cultural", confidence: 0.40, note: "Also outside round" },
      { canonical_id: "top_sirloin", match_type: "cultural", confidence: 0.35, note: "Sometimes top sirloin sections" },
    ],
    synonyms: ["溫體牛"],
    description: "Not a cut but a SLAUGHTER METHOD — and a culturally critical Taiwanese concept that redefines what 'fresh beef' means. 'Warm Beef' (Wēn tǐ niú) is meat sold within hours of slaughter, never refrigerated or aged. The defining cultural use is Tainan's famous beef soup tradition: the beef is shaved from the just-slaughtered carcass across the hindquarter (typically the round area) paper-thin, served raw in a bowl, and cooked by the hot broth poured over it at the table. The 'bloom' and texture are completely different from chilled beef — Americans attempting to replicate Tainan Beef Soup with USDA-chilled meat will produce a recognizably inauthentic dish. The Wēn tǐ niú system exists only where slaughterhouse and retail are in tight geographic proximity (typically Tainan), making this one of the most location-specific cut/preparation combinations in the ontology. Modern Taipei beef culture (including imported USDA and Australian beef) operates on the opposite model of chilled, aged beef.",
    notes: "Slaughter method as cut identity — unique in the ontology. Documents why USDA-chilled beef cannot replicate Tainan Beef Soup authentically.",
  },

  {
    id: "niunan_tw",
    name: "Taiwan Niú nǎn (牛腩, Beef Noodle Soup Complex)",
    region: "taiwan",
    maps_to: [
      { canonical_id: "brisket", match_type: "approximate", confidence: 0.70, note: "Primary — the traditional interpretation" },
      { canonical_id: "flank", match_type: "cultural", confidence: 0.70, note: "Often includes flank" },
      { canonical_id: "short_plate", match_type: "cultural", confidence: 0.60, note: "Intercostal plate meat" },
    ],
    synonyms: ["牛腩"],
    description: "Taiwanese Niú nǎn is NOT US brisket — it's an umbrella term covering the entire 'lower front' meat region, including brisket + flank + intercostal meat (meat between the ribs). This multi-muscle grouping is the foundational cut for Taiwan's iconic Niú ròu miàn (Beef Noodle Soup). The culinary logic requires alternating layers of fat, meat, sinew, and gelatinous connective tissue — a texture profile a 'First Cut' US brisket cannot provide because it's a single lean muscle. A Taiwanese butcher selling 'Niú nǎn' for a Beef Noodle Soup will assemble a mix that includes the pectoral, the flank edge, and the intercostal meat together. American expats attempting to replicate the soup with a pure US brisket will produce a dish that locals recognize as inauthentic — the 'mouthfeel' (口感) is wrong. The same character set 牛腩 is used in mainland China but maps to a similarly umbrella concept there.",
    notes: "Umbrella cut across brisket/flank/plate — the foundational Taiwanese soup complex. Parallels Chinese Niú nǎn but with Taiwanese regional variations.",
  },

  {
    id: "shalang_tw",
    name: "Shā lǎng (沙朗, The Taiwan Sirloin-Ribeye Drift)",
    region: "taiwan",
    maps_to: [
      { canonical_id: "ribeye", match_type: "cultural", confidence: 0.75, note: "Semantically maps to Ribeye in Taiwanese usage" },
    ],
    synonyms: ["沙朗"],
    description: "Taiwan is the outlier of the pan-East-Asian Sirloin phonetic trap. Japan, Korea, and China all borrowed the English word 'Sirloin' phonetically and use their respective borrowings (Sāroin / Chaekkeut / Xī lěng) to mean STRIPLOIN. Taiwan alone took the same phonetic borrow (Shā lǎng, 沙朗) and shifted it semantically to mean RIBEYE instead. An American expat in Taipei who orders Shā lǎng at a traditional steakhouse will receive a Ribeye — not a US Sirloin, and not even the Striploin that the same phonetic borrow means elsewhere in Asia. The cultural theory for the drift: when Taiwan imported Western steakhouse culture in the 1970s-80s, the most prestigious cut on the menu was ribeye, and 'Sirloin' (a word associated with Western luxury) attached to the local ribeye rather than the striploin. Modern Taiwanese butchers use 紐約客 (Niǔ yuē kè, 'New Yorker') to specifically indicate Striploin when they need to disambiguate, and 肋眼 (Lèi yǎn) for ribeye when Shā lǎng confusion is likely.",
    notes: "The Taiwan outlier in the 4-country phonetic trap. Cross-reference the anchor entity sirloin_phonetic_trap_asia in Japan.",
  },

  // === CHINA ===

  {
    id: "xileng_cn",
    name: "Xī lěng (西冷, China's Striploin Phonetic Trap)",
    region: "china",
    maps_to: [
      { canonical_id: "striploin", match_type: "cultural", confidence: 0.85, note: "Semantically maps to Striploin — NOT US Top Sirloin" },
    ],
    synonyms: ["西冷", "西冷牛排"],
    description: "China's entry in the pan-East-Asian Sirloin phonetic trap. Xī lěng (西冷, phonetic approximation of 'Sirloin') sounds like the English word but refers to the STRIPLOIN (NY Strip) in Chinese usage — never the leaner US Top Sirloin. This follows the same pattern as Japanese Sāroin and Korean Chaekkeut. An American expat at a Shanghai or Beijing steakhouse ordering 'Sirloin' will receive a premium Striploin at premium pricing, significantly different from what they'd get at a US Outback. For the actual US Top Sirloin equivalent — the leaner, cheaper cut — the correct Chinese term is 上脑 (Shàng nǎo), which refers to the chuck/top-sirloin boundary area. Chinese modern supermarkets (Hema, Sam's Club, BHG) increasingly label with both the Chinese term and the English approximation, but smaller butcher shops and traditional restaurants use Xī lěng exclusively.",
    notes: "Part of the 4-country phonetic trap anchored in sirloin_phonetic_trap_asia (Japan).",
  },

  {
    id: "niunan_cn",
    name: "Chinese Niú nǎn (牛腩, Umbrella Term)",
    region: "china",
    maps_to: [
      { canonical_id: "brisket", match_type: "approximate", confidence: 0.65, note: "Part of the umbrella" },
      { canonical_id: "flank", match_type: "cultural", confidence: 0.65, note: "Often included" },
      { canonical_id: "short_plate", match_type: "cultural", confidence: 0.60, note: "Plate cuts also" },
    ],
    synonyms: ["牛腩"],
    description: "Chinese Niú nǎn is a 'catch-all' for any fatty, tough meat from the lower chest and belly — it routinely includes brisket, flank, plate, and intercostal meat in varying proportions. The term corresponds to a culinary concept (meat for red-braised stews, Hóng shāo niú ròu) rather than a specific anatomical muscle. A US expat wanting to smoke a Texas-style brisket in Beijing must specifically ask for 前胸肉 (Qiánxiōng ròu, 'front chest meat') to isolate the pectoral muscle — ordering 'Niú nǎn' will produce a mixed-muscle assembly unsuited for long smoking but perfect for Chinese red-braising. The umbrella pattern parallels Taiwanese Niú nǎn (same characters, regional variation) and extends the broader East Asian tendency to group cuts by intended cooking method rather than by anatomical specificity.",
    notes: "Umbrella cut paralleling Taiwanese Niú nǎn. Both traditions prioritize cooking-method grouping over US-style anatomical precision.",
  },

  {
    id: "bo_ren_cn",
    name: "Bó rén (脖仁, The Wagyu of Chinese Hot Pot)",
    region: "china",
    maps_to: [
      { canonical_id: "chuck_roll", match_type: "approximate", confidence: 0.70, note: "Chuck roll area — neck cap specifically" },
    ],
    synonyms: ["脖仁"],
    description: "A Chaoshan-style hot pot specialty cut with no exact Western canonical equivalent. Bó rén is the most marbled portion of the neck (chuck roll) — specifically the 'neck cap' that sits just behind the head. In Chaoshan hot pot tradition, Bó rén is called 'the Wagyu of hot pot' because its marbling density rivals premium Japanese beef. The cut is sliced paper-thin and dipped in simmering broth for a precisely timed 8-10 seconds — any longer and the fat renders fully, losing the characteristic buttery texture. US butchery doesn't isolate this muscle; it's absorbed into the generic 'chuck roll' or 'chuck eye' primal. Chinese butchers serving the Chaoshan hot pot market trim Bó rén with specialized knife work and charge premium prices — in high-end restaurants, Bó rén can cost more per kilogram than ribeye despite coming from a 'cheaper' primal. This inversion of US price hierarchies is the clearest illustration of the Chinese 'texture over marbling' philosophy.",
    notes: "Another genuine gap in US canonical ontology. Future `neck_cap` or `chuck_roll_top` canonical would help.",
  },

  {
    id: "chaoshan_texture_cn",
    name: "Chaoshan Texture-Over-Marbling Philosophy",
    region: "china",
    maps_to: [
      { canonical_id: "chuck_blade", match_type: "cultural", confidence: 0.50, note: "Shí bǐng (spoon handle) = shoulder segment priced over marbled cuts" },
      { canonical_id: "chuck_roll", match_type: "cultural", confidence: 0.50, note: "Bó rén and Diào lóng also follow the pattern" },
    ],
    synonyms: ["匙柄", "吊龙", "脖仁"],
    description: "The single most distinctive butchery philosophy in East Asia — unique to the Chaoshan (Chaozhou-Shantou) region of Guangdong Province and spreading into modern Chinese hot pot culture nationally. Chaoshan butchery ranks cuts primarily by TEXTURE ('snap,' 'crunch,' 'elasticity') rather than by marbling or tenderness. The defining example: 匙柄 (Shí bǐng, 'spoon handle,' a specific segment of the shoulder) can be MORE expensive than heavily marbled cuts from the rib or loin, because it produces a uniquely elastic texture when dipped in hot pot broth for exactly 8 seconds. USDA grading entirely fails to capture this dimension — a grade-wise 'inferior' cut commands premium prices because marbling is the wrong metric for the application. This texture-primary philosophy has no equivalent in Japanese, Korean, or Western butchery systems. An American restaurant importing Chaoshan hot pot traditions must purchase cuts that USDA labels 'value' because the premium marbled options would literally be the WRONG cut for the intended preparation.",
    notes: "The only documented case in the database of a regional system inverting USDA marbling-first logic. Uniquely Chinese — not even Japan's ultra-premium Wagyu culture operates this way (Japan is marbling-first; Chaoshan is texture-first).",
  },

  // ==================== OCEANIA ====================

  // 🇦🇺 AUSTRALIA

  {
    id: "porterhouse_trinity_au",
    name: "The Porterhouse Trinity (3-Country Same-Word Trap)",
    region: "australia",
    maps_to: [
      { canonical_id: "striploin", match_type: "cultural", confidence: 0.85, note: "Australia: Porterhouse = boneless Striploin" },
      { canonical_id: "t_bone", match_type: "cultural", confidence: 0.70, note: "USA: Porterhouse = giant T-bone with large fillet section" },
    ],
    synonyms: ["porterhouse"],
    description: "Arguably the hardest single naming collision in the entire Cutranslator ontology — three Anglosphere countries using the same word for completely different cuts. In the USA, 'Porterhouse' is a giant T-bone steak with a fillet section greater than 1.25 inches wide — a luxury bone-in cut meant for two people. In Australia (specifically Victoria and South Australia), 'Porterhouse' is a BONELESS Striploin (NY Strip equivalent), with no bone and no fillet section at all. In New Zealand, the term 'Porterhouse' is rarely used — Sirloin is the standard term — but when used, it follows the Australian convention. An American expat in Melbourne ordering 'Porterhouse' expects a giant bone-in steak with a large fillet, receives a clean boneless NY Strip, and is genuinely disappointed. Australian or NZ expat in NYC ordering 'Porterhouse' expects an NY Strip-equivalent, receives a 24-ounce bone-in monster meant to feed two people. The collision exceeds the Asado trinity (5 meanings across 5 countries) in confusion intensity because all three uses are within the same Anglo food culture, sharing English language and Western dining conventions.",
    notes: "Anchor entry for the Porterhouse 3-country trap. Cross-reference USA T-bone, Australia Sirloin/Porterhouse split, NZ Sirloin convention. Hardest single naming collision in the database.",
  },

  {
    id: "commonwealth_sirloin_anchor_au",
    name: "Commonwealth Sirloin Trap (Australia as Anchor)",
    region: "australia",
    maps_to: [
      { canonical_id: "striploin", match_type: "cultural", confidence: 0.90, note: "Australian 'Sirloin' = US Striploin" },
      { canonical_id: "top_sirloin", match_type: "cultural", confidence: 0.90, note: "Australian 'Rump' = US Top Sirloin" },
    ],
    synonyms: ["sirloin", "rump", "porterhouse"],
    description: "Australia is the architectural ANCHOR of the 7-country Commonwealth Sirloin trap that spans UK, Ireland, UAE, Malaysia, Singapore, Australia, and New Zealand. The AUS-MEAT (Meat Standards Australia) terminology system that defines this trap originates here. The convention: 'Sirloin' (or 'Porterhouse' in Victoria/SA) refers to the boneless Striploin — the US NY Strip equivalent. 'Rump' refers to what Americans call 'Top Sirloin' — the leaner cut. The two terms are paired swaps from US conventions: Aussie Sirloin = US Striploin; Aussie Rump = US Sirloin. This single distinction generates more expat confusion at Sydney/Melbourne supermarkets and butcher counters than any other naming convention. The Commonwealth Sirloin axis — UK → Ireland → UAE → Malaysia → Singapore → Australia → NZ — is one of the longest single-pattern threads in the database, all stemming from British colonial-era butchery conventions that the AUS-MEAT system codified and exported globally via Australian beef trade. Critically distinct from the East Asian Phonetic Sirloin trap (Japan/Korea/China/Taiwan), which is a borrowed-word semantic drift, not an inherited naming convention.",
    notes: "Cross-reference all 6 other Commonwealth Sirloin entries (UK existing, Ireland existing, UAE existing, Malaysia existing, Singapore existing, NZ this batch). Australia is the architectural ROOT.",
  },

  {
    id: "sirloin_porterhouse_state_split_au",
    name: "Australian Sirloin/Porterhouse State Split (Vic/SA vs NSW/QLD)",
    region: "australia",
    maps_to: [
      { canonical_id: "striploin", match_type: "cultural", confidence: 0.85, note: "Same cut, two state-specific names" },
    ],
    synonyms: ["sirloin", "porterhouse"],
    description: "A unique within-country naming variation — the only documented case in the entire Cutranslator ontology where the same cut has different names depending on which Australian state you're in. In Victoria and South Australia, the boneless striploin is called 'Porterhouse.' In New South Wales and Queensland, the same cut is called 'Sirloin.' Both terms refer to the identical cut with identical preparation, but the state of the butcher determines which label appears on the price tag. Tasmania, Western Australia, and the Northern Territory show variable usage. An American expat moving from Sydney to Melbourne (or vice versa) must adjust their butcher vocabulary — same Aussie steakhouse menu, two completely different terms. This split has no parallel in any other country in the database — most countries use consistent national terminology even in federal systems (USA, Brazil, Argentina, India). Worth noting as a future 'regional personalization' feature for the tool: detect Australian state from user IP and surface the correct local term first.",
    notes: "Unique in the database — only documented same-country state-by-state cut naming variation. Future 'invisible personalization' feature opportunity for the tool.",
  },

  {
    id: "msa_grading_au",
    name: "MSA — Meat Standards Australia (Non-USDA Grading)",
    region: "australia",
    maps_to: [
      { canonical_id: "ribeye", match_type: "cultural", confidence: 0.40, note: "Applies across all premium cuts, not specific" },
      { canonical_id: "striploin", match_type: "cultural", confidence: 0.40, note: "Same convention" },
    ],
    synonyms: ["msa", "msa graded"],
    description: "Australia's Meat Standards Australia (MSA) grading system differs fundamentally from USDA. While USDA's Select/Choice/Prime grading is driven primarily by intramuscular marbling, MSA scores beef on EATING QUALITY — tenderness, juiciness, and flavor — using a star system (3, 4, or 5 stars), with marbling tracked separately on a 0-9+ scale. The system was developed in response to consumer surveys showing that Australian beef shoppers prioritized eating quality over fat content. Combined with Australia's grass-fed dominance (most domestic beef is pasture-raised, leaner, with 'beefier' flavor and higher Omega-3 content than US grain-fed), the MSA framework produces a different product than USDA-equivalent grades suggest. An MSA 4-Star Australian Ribeye is NOT directly comparable to a USDA Choice Ribeye — different grading axis, different feeding profile, different cooking behavior. Australian Wagyu and premium Angus also use a separate Marbling Score (MS 4-5 = good, MS 7-9+ = exceptional), aligned with Japanese BMS but assessed independently. Cross-reference: this is the third documented non-USDA grading system in the database, alongside Russian/Belarusian GOST and Korean Hanwoo grading.",
    notes: "MSA is one of three major non-USDA grading systems documented (GOST in post-Soviet, Hanwoo in Korea, MSA in Australia). Important context for any user comparing imported AUS beef to USDA equivalents.",
  },

  // 🇳🇿 NEW ZEALAND

  {
    id: "schnitzel_nz",
    name: "Beef Schnitzel (NZ Specific Retail Cut)",
    region: "new_zealand",
    maps_to: [
      { canonical_id: "inside_round", match_type: "cultural", confidence: 0.75, note: "Topside primary; sometimes Knuckle" },
      { canonical_id: "sirloin_tip", match_type: "cultural", confidence: 0.65, note: "Knuckle (sirloin tip) sometimes used" },
    ],
    synonyms: ["beef schnitzel"],
    description: "In the US, 'Schnitzel' is a German-derived preparation method (pound thin, bread, fry) — not a specific cut. In New Zealand, 'Beef Schnitzel' is a SPECIFIC retail product: Topside (or Knuckle) that has been mechanically tenderized by being passed through a cuber machine, then sold in pre-cut portions intended for quick pan-frying. The mechanical tenderization breaks the muscle fibers visibly, leaving the characteristic 'pinhole' pattern. This is a weekday staple at every Pak'nSave, New World, and Countdown supermarket. The cut-as-product convention is unique to NZ retail — Australian butchers sell 'Minute Steak' for the same use case but without the formal Schnitzel labeling. An American visitor seeing 'Beef Schnitzel' in a NZ supermarket might assume it requires breading and frying like a Wienerschnitzel; in reality, the NZ product is unbreaded and ready to pan-sear.",
    notes: "Format-driven cut, similar in spirit to Korean Chadolbagi (preparation defines the product) and Bolivian Silpancho (tortilla-thin pounded steak). NZ retail innovation.",
  },

  {
    id: "corned_silverside_nz",
    name: "Corned Silverside (Anglo-Commonwealth Tradition)",
    region: "new_zealand",
    maps_to: [
      { canonical_id: "outside_round", match_type: "close", confidence: 0.90, note: "Specifically silverside, brined" },
    ],
    synonyms: ["corned silverside", "corned beef"],
    description: "The New Zealand version of 'Corned Beef' completes the Anglo-Commonwealth corned beef tradition — silverside (bottom round), not brisket. Brined with vinegar, brown sugar, and mustard seeds (the 'NZ trinity' of corned beef seasoning), then boiled with carrots and potatoes. The result is lean, ham-like in texture, fundamentally different from American corned beef brisket. This is the same convention used in Ireland (existing entry) and Australia (this batch's silverside entry) — three Anglo-Commonwealth regions sharing the silverside tradition vs the USA's brisket tradition. An American expat in Auckland buying 'Corned Beef' expecting the fatty Reuben-sandwich-style product will receive a lean, ham-like roast that doesn't slice the same way and won't produce the same sandwich texture. The cultural divergence is one of the cleanest US-vs-Commonwealth food vocabulary distinctions in the database. The NZ preparation tradition (vinegar + brown sugar + mustard seeds) is distinct from Irish (typically just salt-brined) and Australian (salt + bay leaves), giving each Commonwealth country its own corned silverside identity.",
    notes: "Cross-reference Irish corned_beef_cut_ie (existing) and Australian silverside entry. The 3-country Anglo-Commonwealth corned silverside tradition is fully documented after this batch.",
  },

  {
    id: "hangi_beef_nz",
    name: "Hāngī Beef (Māori Earth-Oven Tradition)",
    region: "new_zealand",
    maps_to: [
      { canonical_id: "chuck_roll", match_type: "cultural", confidence: 0.65, note: "Tougher chuck cuts handle long steam-cooking" },
      { canonical_id: "brisket", match_type: "cultural", confidence: 0.60, note: "Brisket also used" },
    ],
    synonyms: ["hāngī", "hangi beef"],
    description: "Hāngī is the traditional Māori method of steam-cooking food in an earth oven — heated stones placed in a pit, food layered above, covered with leaves and earth, cooked for several hours. Beef is sometimes included in Hāngī (alongside more traditional pork, chicken, lamb, kumara, and pumpkin). The cooking method requires cuts that benefit from long, low-temperature steam: tougher cuts with connective tissue (Chuck, Brisket, sometimes bone-in pieces). Premium tender cuts (eye fillet, sirloin) would be overcooked and dry. This is a culturally significant preparation for Māori communities and increasingly featured at New Zealand cultural events and tourism experiences. NZ butchers in areas with Māori communities (especially in Northland, East Cape, Bay of Plenty) often sell 'Hāngī Beef' as a pre-cut category — typically Chuck or Brisket cubed for layered steaming. Distinct from American BBQ in that the meat is steamed (not smoked), achieving a different texture and flavor profile.",
    notes: "Cultural cut category — similar in spirit to Filipino Bulalo (bone-in shank for soup), Vietnamese Phở toppings (cut defined by dish), Indonesian Rendang cut (4-hour cook requirement). Documents Indigenous food traditions in the ontology.",
  },

] as const;
