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
    description: "The iconic Basque Country steak — a massive bone-in rib chop, often from retired dairy cows (vaca vieja) aged for 30-60 days. Grilled over oak charcoal, served rare, and sliced tableside. Txuletón (Basque spelling) is a pilgrimage dish for steak lovers visiting northern Spain. Cut from the lomo alto, sliced 4-5cm thick and brought to room temperature before searing, the preparation method (oak charcoal, served rare with coarse sea salt on earthenware) is as important as the cut itself.",
    notes: "The Basque tradition of using older, well-marbled dairy cattle produces a different flavor profile than grain-fed beef. At the butcher counter, ask for: \"un chuletón de lomo alto, grueso, con la grasa\" — specify thickness (grosor) in centimeters.",
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

  // ===== AFRICA =====

  // ----- South Africa (4 entities) -----

  {
    id: "commonwealth_sirloin_sa",
    name: "Commonwealth Sirloin Trap (South Africa, 8th Country)",
    region: "south_africa",
    maps_to: [
      { canonical_id: "striploin", match_type: "cultural", confidence: 0.90, note: "SA 'Sirloin' = US Striploin" },
      { canonical_id: "top_sirloin", match_type: "cultural", confidence: 0.90, note: "SA 'Rump' = US Top Sirloin" },
    ],
    synonyms: ["sirloin", "rump"],
    description: "South Africa is the African node of the 8-country Commonwealth Sirloin axis (UK, Ireland, UAE, Malaysia, Singapore, Australia, New Zealand, South Africa). The British colonial-era butchery convention codified by Australian AUS-MEAT export terminology reaches its African expression in the South African Class A/B/C grading system. The convention is identical: 'Sirloin' = US Striploin (NY Strip), 'Rump' = US Top Sirloin. An American expat ordering 'Sirloin' at a Cape Town or Johannesburg steakhouse will receive a premium NY Strip at premium pricing — significantly different from what they'd get at a US chain. The two-term swap (Sirloin↔Striploin, Rump↔Sirloin) is the same as in all 7 other Commonwealth Sirloin countries. South Africa adds one cultural detail unique among the 8: 'Rump' is the most popular Braai (BBQ) steak in SA, valued for its higher fat content and stronger beefy flavor — making it culturally MORE prestigious than what Americans assume from 'Top Sirloin' (a value cut).",
    notes: "Cross-reference architectural anchor `commonwealth_sirloin_anchor_au` (Australia) and the 6 other Commonwealth entries. South Africa completes the 8-country axis.",
  },

  {
    id: "biltong_cut_sa",
    name: "Biltong Cut (Format-Driven Cured Meat)",
    region: "south_africa",
    maps_to: [
      { canonical_id: "outside_round", match_type: "cultural", confidence: 0.75, note: "Silverside primary — the biltong standard" },
      { canonical_id: "top_sirloin", match_type: "cultural", confidence: 0.65, note: "Rump biltong is the premium variant" },
    ],
    synonyms: ["biltong", "biltong-cut silverside", "biltong-cut rump"],
    description: "Biltong is South Africa's iconic spiced air-dried meat, and the cut is FORMAT-DRIVEN rather than muscle-specific. The defining requirement: meat must be sliced WITH the grain (not against it, like jerky and most Western drying traditions) in long thick planks (typically 30-40cm long, 4-5cm thick). This with-the-grain slicing produces the characteristic Biltong chew that's softer than jerky despite similar moisture content. The two standard cuts are Silverside (lean, ham-like, the everyday standard) and Rump (richer, more flavorful, the premium choice). Both must be sourced from grass-fed cattle for authentic flavor — the lean profile is essential. The cut format applied to a different muscle (e.g., chuck) won't produce authentic Biltong texture. South African butchers pre-cut 'Biltong-cut Silverside' or 'Biltong-cut Rump' as a specific retail product category. An American attempting Biltong with USDA grain-fed beef will produce something closer to American jerky — different chew, different flavor profile. Companion to Boerewors Mince and Potjiekos Cut as the three iconic South African format-driven retail categories.",
    notes: "Format-driven cut — similar in spirit to Korean Chadolbagi (preparation defines the cut), Bolivian Silpancho (tortilla-thin pounded steak), Vietnamese Bò Né (sizzling skillet format). Sliced with the grain inverts the standard dried meat convention.",
  },

  {
    id: "yellow_fat_quality_sa",
    name: "Yellow Fat as Quality Marker (USDA Inversion)",
    region: "south_africa",
    maps_to: [
      { canonical_id: "ribeye", match_type: "cultural", confidence: 0.40, note: "Applies across premium grass-fed cuts" },
      { canonical_id: "top_sirloin", match_type: "cultural", confidence: 0.40, note: "Rump steak especially" },
    ],
    synonyms: ["geel vet", "yellow fat"],
    description: "USDA actively penalizes yellow fat — it's associated with older or grass-fed cattle and considered visually less appealing. South African Braai culture INVERTS this: 'Geel vet' (Afrikaans for 'yellow fat') is explicitly valued as a quality indicator, signaling grass-fed, older animal, and more developed flavor. Braai practitioners specifically request meat with visible yellow fat for the rendering experience over coals. The Class A/B/C SA grading system reflects this: Class A is grain-fed and young (white fat), Class B is intermediate, Class C is older (yellow fat). USDA conventions assume Class A is universally better; SA Braai conventions assume Class A2-A3 (some yellow fat) is OPTIMAL because the rendering fat is the flavor source. An American shopping at a Cape Town butcher seeing yellow-fat Rump may assume it's lower quality and reject it; the local clientele is doing the opposite — buying it specifically for the yellow fat. This is the third documented USDA preference inversion in the database, alongside Chinese Chaoshan texture-over-marbling and Vietnamese/Korean shank-as-prestige.",
    notes: "Third documented USDA-quality-inversion entry. Cross-reference Chinese Chaoshan (Batch 10), Vietnamese Bắp Hoa (Batch 11), Korean Yangji/Chadolbagi (Batch 10). South African yellow-fat preference is the most explicit — the fat color is the primary visual quality cue.",
  },

  {
    id: "potjiekos_cut_sa",
    name: "Potjiekos Cut (Bone-In Cast-Iron Stew)",
    region: "south_africa",
    maps_to: [
      { canonical_id: "hind_shank", match_type: "cultural", confidence: 0.80, note: "Shin (shank) primary" },
      { canonical_id: "oxtail", match_type: "cultural", confidence: 0.75, note: "Oxtail also standard" },
      { canonical_id: "short_ribs", match_type: "cultural", confidence: 0.65, note: "Short ribs and neck also work" },
    ],
    synonyms: ["potjie", "potjiekos", "potjiekos mix"],
    description: "Potjiekos is the traditional South African cast-iron pot stew — a 4-hour low-and-slow simmer over coals, layered with vegetables and meat in a three-legged 'potjie' pot. The cut requirement is absolute: BONE-IN chunks of Shin (shank), Neck, Oxtail, or Short Ribs. The bone marrow and connective tissue are essential to the dish's signature gelatinous body — boneless 'stew meat' from US convention will produce a thinner, less rich result that locals recognize as inauthentic. Some South African butchers sell pre-assembled 'Potjiekos Mix' specifically for the dish, combining shank pieces, oxtail, and small bone-in marrow chunks. Cross-references the broader Anglo-Commonwealth bone-in stew tradition: NZ Hāngī Beef (similar long-cook bone-in requirement), Filipino Bulalo (bone-in shank for soup), Italian Osso Buco (bone-in shank cross-cut). The Potjiekos tradition is older than European colonization — it adapts indigenous Khoisan and Bantu earth-cooking techniques to the iron pot brought by Dutch settlers, making it a genuinely Afro-European fusion dish.",
    notes: "Bone-in mandatory for authentic gelatinous body. Cross-reference Filipino Bulalo, NZ Hāngī, Italian Osso Buco — pan-cultural bone-in long-cook tradition.",
  },

  // ----- Kenya (3 entities) -----

  {
    id: "soft_hard_duality_ke",
    name: "Nyama Laini vs Nyama ya Mifupa (Soft/Hard Retail Duality)",
    region: "kenya",
    maps_to: [
      { canonical_id: "tenderloin", match_type: "cultural", confidence: 0.50, note: "Nyama Laini covers tender boneless cuts" },
      { canonical_id: "hind_shank", match_type: "cultural", confidence: 0.50, note: "Nyama ya Mifupa covers bone-in stew cuts" },
    ],
    synonyms: ["nyama laini", "nyama ya mifupa", "soft meat", "bone-in meat"],
    description: "Kenya operates on a 'Total Utility' retail model where meat is functionally categorized rather than precisely cut-named. The two primary categories at any Nairobi Bucha: Nyama Laini ('soft meat' — boneless, tender, primarily Fillet) and Nyama ya Mifupa ('bone-in meat' — Shank, Short Ribs, Neck, anything that requires long cooking). An American expat shopping for 'Sirloin' at a local Kenyan butchery will be redirected: the butcher will ask whether they want laini or mifupa, then provide an appropriate boneless or bone-in cut. The Mgongo (Back) cut conflates striploin and ribeye under one term, requiring specialist butchers (City Market) for precise cut requests. This functional categorization is structurally equivalent to: Korean Gu-i-yong/Guk-gori (grill meat / soup meat from Batch 10), Nigerian Eran-Egun/Eran-Didi (bone-in / boneless), and Ethiopian Le Tere Siga/Le Wot (raw-grade / stew-grade). All four cultures replace USDA cut precision with usage-driven retail categories — a structural pattern unique to grass-fed, hot-boned, traditional-market beef cultures.",
    notes: "Cross-reference Korean Gu-i-yong (Batch 10), Nigerian Eran-Egun (this batch), Ethiopian Le Tere Siga (this batch). Four-country pattern of functional retail categorization.",
  },

  {
    id: "nyama_choma_ke",
    name: "Nyama Choma (Charcoal-Roasted Cut Format)",
    region: "kenya",
    maps_to: [
      { canonical_id: "short_ribs", match_type: "cultural", confidence: 0.65, note: "Short Loin / Rib section primary" },
      { canonical_id: "ribeye", match_type: "cultural", confidence: 0.60, note: "Bone-in ribeye section commonly used" },
    ],
    synonyms: ["nyama choma"],
    description: "Nyama Choma (literally 'roasted meat' in Swahili) is Kenya's national dish and the centerpiece of social gatherings — large primal chunks of beef roasted whole over charcoal at outdoor 'choma joints' across Nairobi, Mombasa, and Kajiado. The cut format is a LARGE BONE-IN CHUNK (typically 2-4kg) with the FAT CAP LEFT INTACT — this is non-negotiable. Kenyan beef from grass-fed Zebu cattle is so lean that without the rendering fat cap, the meat dries out within 30 minutes over the coals. Common cuts: Short Loin section, bone-in Rib section, large primal pieces from Mgongo. The dish is served sliced thin against the grain, eaten with kachumbari (tomato-onion salad) and ugali (cornmeal). An American attempting Nyama Choma with trimmed USDA cuts will produce a dramatically different result — the trimmed fat is precisely what makes the Kenyan version work. Modern Nairobi 'choma joints' increasingly stock imported chilled cuts, but traditionalists insist on hot-boned same-day Kenyan beef for authentic flavor.",
    notes: "Format-driven cut requiring fat cap retention. The grass-fed Zebu lean profile makes the fat cap mandatory — inverse of USDA trimming defaults.",
  },

  {
    id: "kenya_lean_warning_ke",
    name: "Grass-Fed Zebu Cooking Adaptation (Kenya)",
    region: "kenya",
    maps_to: [
      { canonical_id: "striploin", match_type: "cultural", confidence: 0.40, note: "Even premium cuts require adaptation" },
      { canonical_id: "ribeye", match_type: "cultural", confidence: 0.40, note: "Same applies" },
    ],
    synonyms: ["zebu beef", "kenyan beef cooking"],
    description: "Most Kenyan beef comes from local Zebu cattle (Bos indicus) — grass-fed, work-hardened, and significantly leaner than USDA grain-fed beef. Critical practical implication for an American expat: standard USDA cooking methods (4-minute high-heat sear for a NY Strip, 6-minute medium-rare for a Ribeye) WILL FAIL with Kenyan equivalents. The meat will be tough and chewy because the muscle fibers haven't had grain-finishing to soften them. Required adaptations: (1) longer braising for stews, (2) pressure cooking for stewing cuts, (3) longer marination, (4) mechanical tenderization for grilling cuts. Kenyan butchers don't typically warn customers about this because local home cooks already know — but expats accustomed to USDA Choice/Prime tenderness will find their first attempts at Kenyan steak disappointing without adjusting technique. Even premium Mgongo (Back) for Nyama Choma works precisely BECAUSE it's a long-cook charcoal preparation; trying to flash-sear it will produce inedible toughness. Companion warnings for Nigeria (parboil before frying) and Ethiopia (use Niter Kibbeh for moisture) — the three African countries share the lean grass-fed Zebu adaptation requirement.",
    notes: "Anchored in the broader Pan-African Lean Beef Axis. Cross-reference `pan_african_lean_beef_ng` (Nigeria, the explicit 'parboil' tradition) and `niter_kibbeh_et` (Ethiopia, the butter-based moisture solution).",
  },

  // ----- Nigeria (3 entities) -----

  {
    id: "pan_african_lean_beef_ng",
    name: "The Pan-African Lean Beef Axis (Nigeria Anchor)",
    region: "nigeria",
    maps_to: [
      { canonical_id: "inside_round", match_type: "cultural", confidence: 0.50, note: "Lap (topside) is the universal Nigerian round cut" },
      { canonical_id: "chuck_roll", match_type: "cultural", confidence: 0.45, note: "Chuck cuts also subject to parboil requirement" },
    ],
    synonyms: ["zebu beef", "parboiled beef"],
    description: "The architectural anchor of a three-country pan-African insight: Nigerian, Kenyan, and Ethiopian beef all come from grass-fed Zebu cattle (Bos indicus), producing a fundamentally different product than USDA grain-fed beef. Nigeria documents the most explicit cooking adaptation: PARBOIL (pre-boil) the meat for 20-40 minutes BEFORE frying or stewing. Without this step, Nigerian Beef Stew becomes inedibly tough — the meat fibers haven't been pre-tenderized by the boiling phase. This is universal practice across Lagos, Ibadan, Kano, and Abuja — every Nigerian home cook does it; every expat learns it the hard way. Kenya implements the same insight differently (long-braising and pressure cooking for stews, mechanical tenderization for grilling cuts); Ethiopia bypasses the issue by serving raw (Tere Siga) or using clarified butter (Niter Kibbeh) for moisture in Wot stews. Together, these three countries form the 'lean Zebu adaptation' axis — a structural insight that contradicts USDA cooking convention and is essential context for any African beef preparation. The parallel insight: Nigerians actively SEEK 'Fatty Meat' (Chest/brisket area) for stews because the fat is precisely what's missing from the lean Zebu profile, providing flavor and moisture during long-cooks.",
    notes: "Anchor entry for the Pan-African Lean Beef Axis. Cross-reference Kenyan grass-fed warning, Ethiopian Niter Kibbeh tradition. Three countries, one universal cooking adaptation.",
  },

  {
    id: "orishirishi_ng",
    name: "Orishirishi (Nigerian Mixed Meat-and-Offal Cut Category)",
    region: "nigeria",
    maps_to: [
      { canonical_id: "chuck_roll", match_type: "cultural", confidence: 0.40, note: "Includes muscle but is umbrella for muscle+offal mix" },
    ],
    synonyms: ["orishirishi", "obstacle course"],
    description: "Orishirishi (literally 'various things' in Yoruba, jokingly nicknamed 'the obstacle course' in Lagos street food vernacular) is a uniquely Nigerian cut category that has no single canonical equivalent — because it deliberately combines beef muscle with multiple offal types in a single retail bundle. The standard Orishirishi mix includes: Shaki (tripe), Edo (liver), Fuku (lungs), Abodi (intestines), and Kanda/Ponmo (cow skin). When a Nigerian asks for 'Beef' at a market, the butcher may automatically include some Orishirishi components alongside muscle meat — particularly for stew preparations where the variety provides textural complexity. Cow skin (Ponmo/Kanda) is treated as a beef cut in Nigerian retail, processed by either boiling or smoking, valued for its chewy texture in stews. From the canonical ontology perspective, only the muscle component (typically Chuck-area meat) maps to a beef cut canonical; the offal and skin components are outside the current beef-cuts ontology, similar to how Vietnamese Gân (tendon) and Sách (tripe) are documented as Phở context but not given canonical beef-cut mappings. American expats expecting clean muscle-only retail will find Nigerian beef shopping requires explicit clarification — 'Cow Meat without Orishirishi' or 'just the muscle' to avoid the bundled offal-and-skin inclusion.",
    notes: "Documents an ontology gap — Nigerian Orishirishi includes products outside the beef-cuts canonical (offal, skin). Same handling pattern as Vietnamese Phở toppings (Gân/Sách from Batch 11). Future ontology expansion candidate for offal coverage.",
  },

  {
    id: "cow_vs_beef_terminology_ng",
    name: "The 'Cow Meat' vs 'Beef' Terminology Trap (Nigeria)",
    region: "nigeria",
    maps_to: [
      { canonical_id: "chuck_roll", match_type: "cultural", confidence: 0.50, note: "Functional category — fresh beef muscle" },
    ],
    synonyms: ["cow meat", "nama"],
    description: "One of the cleanest documented cases in the entire Cutranslator ontology where standard English food vocabulary actively misleads. In Nigeria, asking for 'Beef' at a market or butcher may be interpreted as a request for canned corned beef (a popular processed product imported from various countries) or another specific processed beef product — NOT fresh muscle meat. The correct request for fresh beef is 'Cow Meat' (English) or 'Nama' (Hausa, the dominant northern Nigerian language). Local Yoruba and Igbo speakers also use 'Cow Meat' or their respective indigenous terms. The semantic split exists because Nigeria's colonial-era introduction of 'Beef' as a vocabulary term primarily came through canned/preserved imports rather than fresh meat retail; fresh muscle meat retained its descriptive 'Cow Meat' nomenclature. An American tourist visiting Lagos who orders 'Beef stew ingredients' may receive canned corned beef and tomato paste; the same tourist asking for 'Cow Meat' receives the expected fresh muscle. This trap is unique to Nigeria — neighboring Ghana, Cameroon, and Benin don't share this specific semantic split despite shared colonial histories. The trap is consequential enough that Nigerian food blogs explicitly warn diaspora returnees and tourists about the distinction.",
    notes: "Unique Nigerian linguistic trap — 'Beef' = processed; 'Cow Meat' = fresh muscle. Documents the cleanest case in the database where standard English food vocabulary fails.",
  },

  // ----- Ethiopia (3 entities) -----

  {
    id: "tere_siga_et",
    name: "Tere Siga (Ethiopian Raw Beef Tradition)",
    region: "ethiopia",
    maps_to: [
      { canonical_id: "tenderloin", match_type: "cultural", confidence: 0.85, note: "Fisilo (tenderloin) is the premium Tere Siga cut" },
      { canonical_id: "top_sirloin", match_type: "cultural", confidence: 0.65, note: "Top Sirloin for Gored Gored variant" },
    ],
    synonyms: ["tere siga", "raw meat"],
    description: "Ethiopia is the only documented culture in the entire Cutranslator ontology where the cut's primary identity is its suitability for RAW CONSUMPTION. Tere Siga (long strips of fresh raw beef eaten with Mitmita spice powder and a small carving knife called Karra) and its companion preparations Kitfo (finely hand-minced raw beef with Niter Kibbeh clarified butter) and Gored Gored (raw beef cubes) collectively form a culinary tradition where beef is graded primarily by its suitability for raw eating, with cooked preparations being secondary applications. The defining requirement: HOT-BONED meat, sold and consumed within hours of slaughter. Aged or refrigerated beef is NEVER consumed raw — Ethiopian cultural conventions treat this as not just inferior but actively dangerous. The premium cut is Fisilo (tenderloin), carved long and served on a wooden platter for the diner to slice off pieces themselves. Other cultures have raw beef preparations (Korean Yukhoe, Japanese Yukke, Filipino Kilawin) but in all those traditions, raw is a SECONDARY application of beef quality. In Ethiopia, raw is the DEFAULT premium expression — cooked Tibs and Wot stews are everyday food; raw Tere Siga is the special-occasion delicacy. American expats encountering this for the first time should NEVER attempt Tere Siga with US supermarket beef (which is aged, refrigerated, and treated for raw consumption hazards differently than Ethiopian hot-boned beef). The freshness window is cultural and technical, not just preferential.",
    notes: "Marquee Tier 3 entry. Only documented culture in the database where raw is the premium default. Strict freshness-mandatory cultural rule. The ontology's most distinctive raw-beef tradition.",
  },

  {
    id: "niter_kibbeh_et",
    name: "Niter Kibbeh as Moisture Solution (Cooking Adaptation)",
    region: "ethiopia",
    maps_to: [
      { canonical_id: "striploin", match_type: "cultural", confidence: 0.40, note: "Yemigongo for Tibs" },
      { canonical_id: "chuck_roll", match_type: "cultural", confidence: 0.45, note: "Chuck for Wot stews" },
    ],
    synonyms: ["niter kibbeh", "spiced butter"],
    description: "Ethiopia's culinary adaptation to extremely lean grass-fed Zebu beef is fundamentally different from Nigeria's parboiling and Kenya's long-braising — it's the use of Niter Kibbeh, a clarified butter spiced with cardamom, fenugreek, cinnamon, and other warming spices, as the moisture vehicle. Where Nigerian beef stew uses parboiling to pre-tenderize the meat and Kenyan stews use long-cook collagen breakdown, Ethiopian preparations use Niter Kibbeh's high fat content to provide the moisture and richness that the lean meat lacks intrinsically. Tibs (sautéed beef cubes), Wot (spicy stews), and Kitfo (raw minced beef) all rely on Niter Kibbeh as the primary fat source. An American attempting Ethiopian Tibs with USDA fatty Ribeye produces a dish that locals describe as 'greasy' rather than 'buttery' — the marbling fat doesn't replicate the spiced clarified butter's flavor profile. The adaptation works in reverse: Ethiopian-trained cooks attempting US recipes find that Niter Kibbeh-based techniques applied to USDA marbled beef produce dishes that are simultaneously over-fatty (from the meat) and under-flavored (because the butter's spiced complexity is masked by the meat's own fat). Each cuisine's adaptation only works with its native beef profile.",
    notes: "Third national variation of the lean Zebu cooking adaptation. Cross-reference Nigerian parboil (`pan_african_lean_beef_ng`), Kenyan long-braise (`kenya_lean_warning_ke`). Three countries, three different solutions to the same lean-beef constraint.",
  },

  {
    id: "kitfo_et",
    name: "Kitfo (Hand-Minced Raw Beef)",
    region: "ethiopia",
    maps_to: [
      { canonical_id: "tenderloin", match_type: "cultural", confidence: 0.80, note: "Lean Tenderloin primary" },
      { canonical_id: "inside_round", match_type: "cultural", confidence: 0.65, note: "Lean Round secondary" },
    ],
    synonyms: ["kitfo"],
    description: "Kitfo is Ethiopia's finely hand-minced raw beef dish, mixed with Niter Kibbeh (spiced clarified butter), Mitmita (chili spice powder), and Korarima (Ethiopian cardamom). The critical technical distinction: machine-ground beef CANNOT be used. Kitfo requires HAND-mincing with a sharp blade until the meat reaches a consistent fine texture with absolutely no gristle, fat, or connective tissue remaining. The hand-mincing is what gives Kitfo its signature smooth-but-not-pasty texture; machine-grinding produces an unacceptably homogeneous result. The cut requirement: lean tenderloin or top round, exceptionally fresh (hot-boned). Three preparation styles exist: Leb-Leb (warm, lightly cooked), Yebesele (raw, room temperature), and the warm-leaning intermediate. The leb-leb variant is a concession to risk-averse modern diners; traditional Kitfo is room-temperature raw. American expats attempting Kitfo with USDA pre-ground beef produce a fundamentally different dish — the texture is wrong, and the food safety concerns of pre-aged ground meat make raw consumption inadvisable. Modern Addis Ababa restaurants often hand-mince to order in front of the customer, demonstrating both freshness and proper technique.",
    notes: "Format-driven raw cut requiring HAND-mincing (not machine grind). Pairs with Tere Siga as the two premium Ethiopian raw beef preparations. Both require hot-boned mandatory freshness.",
  },

  // ── AFRICA: BATCH 23 — BOTSWANA + NAMIBIA + TANZANIA + UGANDA ────────────

  // 🌍 CROSS-REGIONAL POLES (2 marquee anchors)

  {
    id: "southern_african_export_grade_af",
    name: "The Southern African Export-Premium Bloc: BMC/EU-Grade Grass-Fed Beef, Biltong, Yellow Fat, and the Sirloin Trap (Botswana + Namibia + South Africa)",
    region: "botswana",
    maps_to: [
      { canonical_id: "striploin", match_type: "cultural", confidence: 0.82, note: "Sirloin = striploin (Commonwealth trap)" },
      { canonical_id: "top_sirloin", match_type: "cultural", confidence: 0.80, note: "Rump = the US-Sirloin equivalent" },
      { canonical_id: "bottom_round_roast", match_type: "cultural", confidence: 0.78, note: "Silverside = the Biltong cut" },
      { canonical_id: "ribeye", match_type: "cultural", confidence: 0.72, note: "Scotch Fillet = boneless ribeye, braai favorite" },
    ],
    synonyms: ["southern african beef", "export grade", "bmc", "biltong", "yellow fat", "sirloin trap", "grass-fed premium", "scotch fillet", "kruisskyf", "mogolo"],
    description: "The Southern African Export-Premium Bloc is a MARQUEE cross-regional anchor documenting the shared structure of Botswana, Namibia, and the deployed South Africa (Batch 13) — among the most sophisticated, EU/China-export-oriented cattle industries on the planet (the Botswana Meat Commission's chilled-prime EU exports; Namibia's 100%-free-range, hormone-free, organic Bonsmara/Sanga/Brahman ranching). Five shared structural features define the bloc: (1) PRECISION SOUTH-AFRICAN/UK TERMINOLOGY — Fillet, Sirloin, Scotch Fillet, Rump, Silverside, Topside, Shin — carried with Afrikaans and (in Namibia) German loanwords (Beesfillet/Rinderfilet, Lende/Rumpfsteak, Borsstuk, Kruisskyf, Biltong-vleis, Binnboud, Skenkel/Hesse). (2) THE COMMONWEALTH SIRLOIN TRAP (extending the deployed 8-country trap, Batch 13): local 'Sirloin' (Mogolo / Lende) means the boneless STRIPLOIN with its fat cap, NOT the US Top Sirloin — a US user wanting the large grain-textured steak they call 'Sirloin' must ask for RUMP (Sera / Kruisskyf); the engine must route a Botswana/Namibia 'Sirloin' search to striploin. (3) THE BILTONG DRIED-MEAT TRADITION — a fat-attached salt-air node: Silverside (or Topside) sliced WITH the grain into long ~2-inch planks with a mandatory ~1/4-inch firm white outer fat layer left attached, then salt-and-air-cured. This extends the deployed South African Biltong tradition into a 3-country Southern African dried-meat bloc, and is architecturally DISTINCT from every other dried tradition in the database: it is salt-and-air-cured WITH FAT ATTACHED in plank form, vs the unsalted Himalayan air-dried strips (Sukuti/Sha-skam/Sukam, Batches 18-21), the frozen Mongolian Borts pounded to powder (Batch 22), the NE hearth-smoke tradition (Batch 18), and the salt-cured-then-shredded Burmese A-mae-shwar (Batch 22). (4) THE YELLOW-FAT GRASS-FED MARKER (extending the deployed SA Yellow-Fat USDA-Quality Inversion, Batch 13): faint yellow tinting on the fat cap is PRIZED — it indicates a purely grass-fed veld-pasture animal with high beta-carotene and a deep complex flavor; white fat indicates grain-finishing. Western shoppers misread yellow fat as old/poor; the bloc prizes it. (5) THE GRASS-FED-LEAN HIGH-HEAT-SEAR-AND-REST CORRECTION: these premium grass-fed cuts are exceptionally lean with low intramuscular water/fat, so they cook ~20% FASTER than US grain-fed beef and dry out if overcooked — the rule is sear to medium-rare at MAXIMUM heat then rest 5-8 minutes (the premium-cut variant of the universal lean-meat correction, contrasting the East African utility-parboil variant). For the platform, this bloc is the premium foothold in the global-export meat space — for European/American/SA expats, safari lodges, and international chefs.",
    notes: "MARQUEE cross-regional Southern African premium-bloc anchor (Botswana + Namibia + deployed South Africa Batch 13). Extends the deployed Commonwealth Sirloin Trap, Biltong tradition, and Yellow-Fat USDA-Quality Inversion (all Batch 13) into a 3-country bloc. The Biltong fat-attached-salt-air-plank node is distinct from the Himalayan air-dried (himalayan_sukuti_source_np Batch 21), Mongolian freeze-dried Borts (mongolian_borts_airdried_mn Batch 22), and Burmese salt-dried A-mae-shwar (Batch 22). The sear-and-rest correction is the premium variant of the lean-tough-bovine family (vs east_african_choma_parboil_af's parboil variant). Cow default — all grass-fed cattle.",
  },

  {
    id: "east_african_choma_parboil_af",
    name: "The East African Hot-Boned Utility Bloc: Nyama Choma, the Parboiling Correction, and the Bone-In Curry-Cut Default (Tanzania + Uganda + Kenya)",
    region: "tanzania",
    maps_to: [
      { canonical_id: "striploin", match_type: "cultural", confidence: 0.78, note: "Mgongo/Mugongo loin — Nyama Choma / Muchomo" },
      { canonical_id: "chuck_roll", match_type: "cultural", confidence: 0.74, note: "Bega/shoulder — bone-in Curry/Katogo cut" },
      { canonical_id: "tenderloin", match_type: "cultural", confidence: 0.72, note: "Nyama Laini/Engonvu — Mishkaki/Luwombo" },
      { canonical_id: "short_ribs", match_type: "cultural", confidence: 0.70, note: "Bone-in loin/rib Choma slab with fat cap" },
    ],
    synonyms: ["east african beef", "nyama choma", "muchomo", "parboil", "curry cut", "katogo", "mishkaki", "hot-boned africa", "mgongo", "supu", "swahili beef", "luganda beef"],
    description: "The East African Hot-Boned Utility Bloc is a MARQUEE cross-regional anchor documenting the shared structure of Tanzania, Uganda, and the deployed Kenya (Batch 13) — high-volume, Total-Utility, Hot-Boned markets where indigenous pasture cattle (Tanzania Shorthorn Zebu; Ugandan Ankole longhorn + Zebu) are slaughtered daily at dawn and sold fresh at neighborhood butcheries (mabucha / obubako), broken down by DENSITY and COOKING ENDURANCE rather than precise sub-primal steaks. Five shared features define the bloc: (1) DENSITY-BASED VERNACULAR VOCABULARY — Swahili (Tanzania) and Luganda (Uganda): Mgongo/Mugongo (back-meat/loin), Kidari/Kifuba (chest/brisket), Nshonsho/Kigere (shin/shank), Bega/Kifuba-ky'okubega (shoulder), Mapaja/Ekisambi (thigh/round), Mkia/Mukira (oxtail). (2) THE NYAMA CHOMA / MUCHOMO CHARCOAL-ROAST CULTURE — the social cornerstone: the butcher cuts a massive bone-in Loin/Rib slab (Mgongo/Mugongo) with the FULL FAT CAP intact, the fat acting as a natural basting shield to keep the lean Zebu/Ankole meat moist over glowing charcoal — NOT sliced into individual steaks. (3) THE MANDATORY PARBOILING CORRECTION — because these cattle walk miles daily, the muscle is intensely tight and dense, so local beef requires an initial PARBOILING step (pre-cooking in water with ginger/garlic/onion) before frying or stewing; cooking it directly like marbled US beef yields an incredibly tough result. This is the utility-pole variant of the universal lean-tough-bovine correction (contrasting the Southern African premium-sear-and-rest variant), and it joins the family alongside the Buffalo-Belt pressure-cook/papaya (Batch 17), Sri Lankan lime (Batch 20), Mongolian fully-cook/older-animal (Batch 22), and Myanmar fish-sauce/tamarind (Batch 22). For skewers (Mishkaki/Tanzania), papaya-paste marination chemically breaks down the fibers instead. (4) THE BONE-IN JAGGED CURRY/KATOGO CUT DEFAULT — 'Curry Cut' (Nyama ya Mchuzi, TZ) and 'Katogo Cut' (UG) are cleaver-hacked mixes of bone + meat + connective tissue, with the bone NON-NEGOTIABLE for imparting sweetness/depth to coconut-based coastal/Zanzibari curries (TZ) or the rich collagen gravy coating matooke bananas (UG Katogo breakfast stew). (5) THE 'STEAK = BONELESS' FALSE-FRIEND + SUPU-BONE PRESTIGE: in a neighborhood bucha/obubako, 'Steak' simply means BONELESS MEAT (a chunk of tough Top Round/Chuck, Mapaja/Ekisambi), NOT a searable Western steak — the engine must direct users wanting an actual steak to Fillet (or a cross-bone Mgongo slab); and Supu/Mulokoni bone soups (Shank, heel/hoof, spine) are PRIZED and deliberately priced for therapeutic marrow (hangover/joint cures), inverting the USDA cheap-trimmings categorization. For the platform, this bloc moves beyond a glossary into an intelligent cooking companion — mapping US Round/Chuck to Mapaja/Ekisambi/Bega while triggering the parboil-or-papaya note.",
    notes: "MARQUEE cross-regional East African utility-bloc anchor (Tanzania + Uganda + deployed Kenya Batch 13). The parboiling correction is the utility-pole variant of the lean-tough-bovine family (vs southern_african_export_grade_af's sear-and-rest variant); cross-references northern_buff_belt_in (Batch 17), and the Sri Lankan/Mongolian/Myanmar lean corrections (Batches 20-22). Documents the Nyama Choma/Muchomo fat-cap-shield slab, the bone-in Curry/Katogo cut, the 'Steak=boneless' false-friend, and the Supu/Mulokoni bone-prestige. Cow default.",
  },

  // 🇧🇼 BOTSWANA (2 entities)

  {
    id: "botswana_seswaa_pounded_af",
    name: "Botswana Seswaa: The Cooked-and-Shredded-Pounding Node and the Untrimmed-Bone-In Rule",
    region: "botswana",
    maps_to: [
      { canonical_id: "hind_shank", match_type: "cultural", confidence: 0.82, note: "Tlhako/Shin — the primary high-collagen Seswaa pillar" },
      { canonical_id: "chuck_roll", match_type: "cultural", confidence: 0.74, note: "Chuck/Neck — the Seswaa alternative" },
    ],
    synonyms: ["seswaa", "chotlho", "pounded beef botswana", "shredded beef", "wooden pole pounding", "tlhako", "molala", "bone-in pounded"],
    description: "Botswana Seswaa (also Chotlho) is the national dish and a pounded-beef tradition that adds a third mechanically-distinct node to the pounding family the database has built. Heavily-salted bone-in Shank (Tlhako), Neck (Molala), or Chuck is boiled for HOURS until falling off the bone, then POUNDED with large wooden poles into a shredded, fluffy texture. This is architecturally distinct from the two existing pounding nodes: the Kashmiri Wazwan RAW-pounding (raw meat hammered to an emulsified paste for Gushtaba/Rista, kashmiri_wazwan_pounded_mince_in, Batch 19) and the Kachin COOKED-pounding (boiled/grilled loin pounded to a textured chili-herb dish, Batch 22). Seswaa is the COOKED-AND-SHREDDED-pounding node: the goal is not a paste (Wazwan) or a textured chunk (Kachin) but a FLUFFY SHRED, achieved by pounding hours-boiled collagen-rich bone-in cuts. The CRITICAL BUTCHERY RULE: the butcher must NOT trim the fat or debone the Shank/Neck/Chuck — the bone marrow and connective tissue are exactly what prevent the heavily-salted, hours-boiled meat from turning to dry dust under the pounding poles. Without the collagen (from the bone joints and connective tissue), the long-boiled, salted meat becomes crumbly rather than fluffy. This imposes a hard negative constraint on the butcher: do NOT do what you would normally do for a Western order (debone, trim fat, portion). The pounding family now spans three mechanically-distinct nodes across three continents: raw-emulsified (Kashmiri Wazwan), cooked-textured (Kachin), and cooked-shredded (Botswana Seswaa). The Serobe dish (chopped tripe/lung/intestine, cooked Seswaa-style and sold at the same butcheries) is the offal parallel — same technique, different protein source.",
    notes: "Third node of the pounding family: Cooked-and-Shredded. Cross-references kashmiri_wazwan_pounded_mince_in (Batch 19, raw-emulsified node) and Kachin cooked-pounding (Batch 22, cooked-textured node). The Untrimmed-Bone-In rule is the hard butchery constraint — marrow/collagen prevent drying-to-dust. Cow default.",
  },

  {
    id: "botswana_bmc_export_bw",
    name: "Botswana BMC Export Grade: The Botswana Meat Commission Premium Tier and Grass-Fed Lean Cooking Correction",
    region: "botswana",
    maps_to: [
      { canonical_id: "top_sirloin", match_type: "cultural", confidence: 0.82, note: "Sera/Rump — the everyday premium grilling cut" },
      { canonical_id: "tenderloin", match_type: "cultural", confidence: 0.80, note: "Tjele/Fillet — the restaurant premium cut" },
      { canonical_id: "striploin", match_type: "cultural", confidence: 0.78, note: "Mogolo/Sirloin — Commonwealth striploin" },
    ],
    synonyms: ["bmc botswana", "botswana meat commission", "tswana beef", "brahman botswana", "grass-fed botswana", "export grade bw"],
    description: "The Botswana Meat Commission (BMC) is one of Africa's most sophisticated beef export operations, shipping chilled-prime EU-grade beef to the European Union and chilled-frozen to China. BMC beef comes from free-ranging Tswana cattle (the indigenous Sanga breed) and Brahman crossbreeds, finished entirely on natural veld pasture — producing a lean, dense, complexly-flavored muscle with essentially ZERO intramuscular marbling and a characteristic faint yellow fat tint (prized as a grass-fed quality signal, not penalized). The Botswana premium sector operates on South African/UK terminology (Fillet/Sirloin/Scotch Fillet/Rump) carrying the Commonwealth Sirloin Trap: local 'Sirloin' (Mogolo) = striploin, not US Top Sirloin; the US-Sirloin equivalent is Rump (Sera). The critical cooking note for all BMC premium grass-fed cuts: they cook ~20% FASTER than US grain-fed beef (less intramuscular water and fat to buffer heat) and dry out if overcooked — the rule is sear to medium-rare at MAXIMUM heat then rest 5-8 minutes. This is the 'premium-cut sear-and-rest correction' of the Southern African export bloc (vs the East African 'utility-parboil correction'). Botswana also has a large Biltong industry using the same Silverside (nama ya serope) sliced-with-grain fat-attached-plank tradition as South Africa and Namibia, extending the 3-country Southern African dried-meat axis. For safari lodge chefs and international buyers: BMC-graded Tswana/Brahman should be treated as premium grass-fed export beef, not developing-market utility protein.",
    notes: "Documents BMC export grading, Tswana/Brahman breed context, the grass-fed-lean sear-and-rest correction, the yellow-fat inversion, and the Biltong tradition extension. Cross-references southern_african_export_grade_af (the 3-country bloc anchor) and botswana_seswaa_pounded_af (the utility pole). Cow default.",
  },

  // 🇳🇦 NAMIBIA (2 entities)

  {
    id: "namibia_kapana_biltong_af",
    name: "Namibia Kapana and Biltong: The Katutura Township Flash-Grill Cube and the Fat-Attached Salt-Air Plank",
    region: "namibia",
    maps_to: [
      { canonical_id: "top_sirloin", match_type: "cultural", confidence: 0.80, note: "Rump (Kruisskyf) — primary Kapana source" },
      { canonical_id: "bottom_round_roast", match_type: "cultural", confidence: 0.80, note: "Silverside (Biltong-vleis) — the Biltong cut" },
      { canonical_id: "top_round_steak", match_type: "cultural", confidence: 0.70, note: "Binnboud/Topside — secondary Kapana/Biltong source" },
    ],
    synonyms: ["kapana", "katutura", "biltong namibia", "biltong-vleis", "droewors", "potjiekos namibia", "kruisskyf", "bonsmara"],
    description: "Namibia contributes two distinctive marquee format-cuts with no USDA counterpart: KAPANA and BILTONG. KAPANA (the Katutura township street food) is Rump or Topside fully DEBONED and hand-sliced by the butcher into tiny uniform ~1/2-inch cubes, then flash-cooked on a blazing flat-top steel grill over wild-wood charcoal, tossed in coarse salt, powdered chili, and local spice blends as they cook. Kapana is Windhoek's original street food, a working-class Katutura tradition that is now a Namibian national identity marker (tourists are taken to Katutura specifically for Kapana). The Kapana cut spec is defined by the tiny cube size (~1/2 inch) — larger pieces produce the wrong texture and cook rate on the ferocious flat-top. THE NAMIBIAN BILTONG TRADITION rivals South Africa in scale and quality — Namibia's 100%-free-range, hormone-free, certified-organic Bonsmara/Sanga/Brahman produces exceptional Biltong using the identical fat-attached salt-air-plank technique: Silverside (Biltong-vleis) or Topside (Binnboud) sliced WITH the grain into long ~2-inch planks with a mandatory ~1/4-inch firm white outer fat layer left attached, then salt-and-air-cured. This is the second node (after deployed South Africa, Batch 13) of the 3-country Southern African Biltong axis (completed by Botswana). Namibia also has Droewors — air-dried coarse sausage, the companion dried-meat tradition. And Potjiekos — the 4-hour wood-fire cast-iron stew using a calculated bone-in mix (Shin/Oxtail/Neck, never boneless) where marrow thickens the gravy. The Yellow-Fat inversion is identical to South Africa and Botswana: yellow tinting on the fat cap = prized grass-fed veld marker, not penalized. Namibia's unique German colonial heritage (Windhoek is the only German-named African capital) adds German loanwords: Rinderfilet (Fillet), Rumpfsteak (Sirloin/Striploin) — carried alongside Afrikaans.",
    notes: "Documents the Kapana flash-grill-cube cut (Rump/Topside deboned to ~1/2-inch cubes), the Biltong fat-attached-salt-air-plank (Biltong-vleis/Silverside), Droewors companion dried-sausage, Potjiekos bone-in stew mix, and the German/Afrikaans dual terminology. Cross-references southern_african_export_grade_af (the 3-country bloc anchor). The Biltong plank is the fat-attached salt-air node distinct from Himalayan unsalted air-dry and Mongolian freeze-dry. Cow default.",
  },

  {
    id: "namibia_export_bonsmara_na",
    name: "Namibia Export-Grade Bonsmara: 100% Free-Range Grass-Fed Organic Beef and the Yellow-Fat Premium",
    region: "namibia",
    maps_to: [
      { canonical_id: "tenderloin", match_type: "cultural", confidence: 0.82, note: "Fillet (Beesfillet/Rinderfilet) — carpaccio/high-end" },
      { canonical_id: "striploin", match_type: "cultural", confidence: 0.78, note: "Sirloin (Lende) — Commonwealth striploin" },
      { canonical_id: "ribeye", match_type: "cultural", confidence: 0.74, note: "Scotch Fillet — braai top pick" },
    ],
    synonyms: ["bonsmara namibia", "sanga namibia", "namibia organic beef", "free-range namibia", "grass-fed na", "windhoek beef", "food lovers market namibia"],
    description: "Namibia produces some of the world's most certified-premium beef: 100% free-range, hormone-free, and certified-organic Bonsmara (the South African-developed dual-purpose breed), Sanga (indigenous African Bos taurus/indicus hybrid), and Brahman crossbreeds, all finished on natural Namibian veld pasture with no feedlot supplementation. Namibia's geographic isolation and low cattle density per hectare (among the lowest in the world) means the animals cover vast distances of semi-arid savanna — producing exceptionally lean, dense, complexly-flavored muscle with zero intramuscular marbling. The Namibian premium retail sector (Food Lovers Market, Woermann Brock slaghuise/butcheries) operates on South African precision cut naming with Afrikaans and German loanwords: Beesfillet/Rinderfilet (tenderloin), Lende/Rumpfsteak (striploin), Kruisskyf (rump), Borsstuk (brisket), Biltong-vleis (silverside), Binnboud (topside), Skenkel/Hesse (shin). The COMMONWEALTH SIRLOIN TRAP applies fully: Namibian 'Sirloin' = boneless STRIPLOIN with fat cap (not US Top Sirloin); the US-Sirloin equivalent is Rump (Kruisskyf). THE YELLOW-FAT PREMIUM: faint yellow tinting on the fat cap is a QUALITY SIGNAL in Namibia (grass-fed beta-carotene, deep complex flavor), not a defect — a Western shopper reading yellow fat as old/poor will systematically avoid the best beef in the counter. THE GRASS-FED-LEAN SEAR-AND-REST CORRECTION: premium Namibian Fillet/Sirloin/Scotch Fillet cooks ~20% faster than US grain-fed beef and dries out if overcooked; sear to medium-rare at maximum heat, then rest 5-8 minutes.",
    notes: "Documents Bonsmara/Sanga/Brahman breed context, the Yellow-Fat Premium (inversion of USDA white-fat preference), and the grass-fed-lean sear-and-rest correction. Cross-references southern_african_export_grade_af (the 3-country bloc anchor) and namibia_kapana_biltong_af (the specialty cuts). Cow default.",
  },

  // 🇹🇿 TANZANIA (2 entities)

  {
    id: "tanzania_mishkaki_bucha_tz",
    name: "Tanzania Mishkaki and the Bucha Steak False-Friend: Papaya Skewers, the 'Steak=Boneless' Trap, and the Hot-Boned Zebu Market",
    region: "tanzania",
    maps_to: [
      { canonical_id: "tenderloin", match_type: "cultural", confidence: 0.80, note: "Nyama Laini — Mishkaki / quick-fry" },
      { canonical_id: "bottom_round_roast", match_type: "cultural", confidence: 0.72, note: "Nyama ya Mapaja — 'Steak' = boneless Round" },
      { canonical_id: "chuck_roll", match_type: "cultural", confidence: 0.70, note: "Bega/Nyama ya Mchuzi — bone-in Curry Cut" },
    ],
    synonyms: ["mishkaki", "bucha steak", "nyama ya mchuzi", "zanzibar curry", "zebu tanzania", "swahili butchery", "mabucha", "dar es salaam beef"],
    description: "Tanzania's beef market is a high-volume Hot-Boned utility system centered on neighborhood mabucha (butcheries) where Tanzania Shorthorn Zebu — intensely lean, hard-muscled pasture cattle slaughtered daily at dawn — are broken down by density and cooking endurance rather than Western sub-primal precision. Two interrelated traps define Tanzania: MISHKAKI (the skewer cut) and the BUCHA STEAK FALSE-FRIEND. MISHKAKI: Tanzania's iconic street skewer uses Fillet (Nyama Laini = 'soft meat') or exceptionally clean Rump cut into tiny uniform 1-inch cubes and HEAVILY papaya/garlic/ginger marinated for several hours before flash-grilling on a charcoal grill. The papaya is not optional — it provides the proteolytic enzyme (papain) that chemically breaks down the dense Zebu muscle fibers. Attempting Mishkaki without papaya marination on Tanzanian Zebu produces an inedibly tough result. THE BUCHA STEAK FALSE-FRIEND: in any mabucha across Tanzania, ordering a 'Steak' produces BONELESS MEAT — typically a chunk of tough Top Round (Nyama ya Mapaja, 'thigh meat') or Shoulder (Bega), NOT a searable Western steak. The word 'Steak' in Tanzanian butchery is a cut format (boneless muscle), not a cooking preparation. A user wanting an actual sear-able steak must ask specifically for Nyama Laini (Fillet) or request the Mgongo cut ACROSS the bone (a rare order in a standard mabucha). The complementary Curry Cut (Nyama ya Mchuzi) is the opposite: a bone-IN, jagged cleaver-hacked mix of bone + muscle + connective tissue, non-negotiable for sweetness in coconut-based Zanzibari curries. On the coast and in Zanzibar, the Indian Ocean spice trade heritage produces a distinct Mchuzi wa Nyama (beef curry with coconut milk, cloves, cardamom, cinnamon) where the bone marrow is explicitly valued for its sweetness and the curry fails without it.",
    notes: "Documents Mishkaki papaya-marination requirement (the East African papaya tenderizer, parallel to northern_buff_belt_in papaya, Batch 17), the Bucha Steak=Boneless false-friend, the Nyama ya Mchuzi bone-in Curry Cut, and the Zanzibari coastal curry context. Cross-references east_african_choma_parboil_af (the 3-country bloc anchor). Cow default.",
  },

  {
    id: "tanzania_nyama_choma_zebu_tz",
    name: "Tanzania Nyama Choma: The Bone-In Fat-Cap Charcoal Slab and the Mandatory Parboiling Correction",
    region: "tanzania",
    maps_to: [
      { canonical_id: "short_ribs", match_type: "cultural", confidence: 0.76, note: "The Choma slab — bone-in Loin/Rib with full fat cap" },
      { canonical_id: "striploin", match_type: "cultural", confidence: 0.72, note: "Mgongo back-meat — the premium Choma loin" },
      { canonical_id: "oxtail", match_type: "cultural", confidence: 0.70, note: "Mkia — prized for collagen-rich Supu broth" },
    ],
    synonyms: ["nyama choma", "mgongo", "supu", "mkia", "zebu cooking", "tanzania charcoal", "choma slab", "parboil"],
    description: "Nyama Choma ('roasted meat' in Swahili) is the social cornerstone of Tanzanian beef culture — the Saturday afternoon institution where groups gather at a choma joint, the butcher selects a large bone-in Short Loin/Rib slab (Mgongo) with the FULL FAT CAP intact, and the entire primal is placed bone-side down on a charcoal grill for slow roasting. The fat cap is non-negotiable: it acts as a natural basting shield, melting slowly over the lean Tanzania Shorthorn Zebu muscle and preventing the zero-marbling meat from drying out. The slab is NOT pre-sliced into individual steaks — it arrives at the table as a whole roasted primal that the group tears apart communally. The MANDATORY PARBOILING CORRECTION applies to all non-Choma Tanzanian beef preparation: because Zebu cattle walk miles daily on semi-arid pasture, the muscle is intensely tight and dense — cooking it directly like marbled US grain-fed beef produces an incredibly tough result. The standard correction is to PARBOIL first (simmer in water with ginger, garlic, and onion for 20-40 minutes to begin fiber breakdown) before frying or stewing. For Mishkaki skewers, papaya-paste marination substitutes for parboiling. The SUPU BONE PRESTIGE: Tanzania Shorthorn Zebu Shin (Nshonsho) and Oxtail (Mkia) are PRIZED for bone-marrow soups — Supu ya Mkia (oxtail broth) is a night-market institution, drunk hot in the early morning hours, traditionally priced as a therapeutic bone-marrow concentrate (hangover cure, joint remedy). These USDA 'cheap trimmings' are Tanzanian prestige items, deliberately sought and priced for their therapeutic marrow content.",
    notes: "Documents the Nyama Choma bone-in-fat-cap-slab cut format, the mandatory parboiling correction, the Supu bone-prestige (Shank/Oxtail as therapeutic prestige items). Cross-references east_african_choma_parboil_af (the 3-country bloc anchor) and tanzania_mishkaki_bucha_tz (the Mishkaki papaya variant). Cow default.",
  },

  // 🇺🇬 UGANDA (2 entities)

  {
    id: "uganda_katogo_luwombo_af",
    name: "Uganda Katogo and Luwombo: The Matooke Breakfast Stew and the Royal Banana-Leaf Steamed Beef",
    region: "uganda",
    maps_to: [
      { canonical_id: "chuck_roll", match_type: "cultural", confidence: 0.78, note: "Kifuba-ky'okubega/Shoulder — the Katogo bone-in stew cut" },
      { canonical_id: "tenderloin", match_type: "cultural", confidence: 0.76, note: "Nyama Engonvu/Fillet — the Luwombo clean cube" },
      { canonical_id: "hind_shank", match_type: "cultural", confidence: 0.72, note: "Kigere/Shin — Mulokoni heel/hoof soup" },
    ],
    synonyms: ["katogo", "luwombo", "matooke beef", "banana leaf", "mulokoni", "ankole beef", "obubako", "kampala butchery"],
    description: "Uganda contributes two marquee dishes that define the two poles of Ugandan beef culture — the everyday-utility Katogo and the high-status royal Luwombo. KATOGO (the bone-in breakfast stew): the defining Ugandan morning meal is Katogo — a stew of bone-in beef (Shoulder/Neck, Kifuba-ky'okubega) hacked into jagged cleaver chunks with bone, muscle, and heavy connective tissue all intact, simmered with matooke (green plantain bananas) into a thick, deeply-flavored porridge. The bone is NON-NEGOTIABLE: the melting collagen from the joint cartilage creates the thick gravy that coats the bananas, while marrow flavor infuses the stew base. A boneless version fails the texture signature — Katogo without bone produces a thinner, less-flavored result that locals recognize as wrong. The Katogo cut is analogous to the Tanzanian Nyama ya Mchuzi (Curry Cut) — both are jagged bone-in utility mixes, but Katogo is explicitly breakfast-format, eaten with bananas rather than coconut-curry starch. LUWOMBO (the royal banana-leaf steamed beef): Luwombo is Uganda's high-status royal dish — premium Fillet (Nyama Engonvu) or clean Rump cubes are briefly seared, then sealed in smoked banana leaves with a rich peanut sauce (Ebinyebwa) and aromatic vegetables, and steamed for 1-2 hours. The smoked banana-leaf seals in moisture and imparts a distinctive vegetal smokiness that is the flavor signature — it cannot be replicated with aluminum foil or other wrappers. Luwombo was historically served at the Buganda Kingdom's royal feasts and remains the prestige dish for weddings, funerals, and high-status celebrations. The cut requirement for Luwombo is ultra-clean boneless Fillet or premium Rump — no gristle, no connective tissue — because the long banana-leaf steam softens the meat gently and any toughness becomes apparent. The MULOKONI heel/hoof soup (Kigere/Shin) completes the picture: like Tanzania's Supu, Mulokoni (literally 'cow leg') is Uganda's therapeutic bone-marrow broth, drunk for hangovers and joint pain.",
    notes: "Documents Katogo (bone-in Chuck/Shoulder for matooke stew, Kifuba-ky'okubega) and Luwombo (clean Fillet/Rump cubes for royal banana-leaf steamed beef with peanut sauce). Cross-references east_african_choma_parboil_af (the 3-country bloc anchor) and uganda_muchomo_ankole_af. The Katogo cut parallels Tanzania Nyama ya Mchuzi (both jagged bone-in). Cow default — Ankole longhorn + Zebu.",
  },

  {
    id: "uganda_muchomo_ankole_af",
    name: "Uganda Muchomo and Ankole Beef: The Charcoal-Roast Culture and the Parboiling Correction for Ankole Longhorn",
    region: "uganda",
    maps_to: [
      { canonical_id: "short_ribs", match_type: "cultural", confidence: 0.76, note: "Bone-in Mugongo loin/rib slab — the Muchomo primal" },
      { canonical_id: "striploin", match_type: "cultural", confidence: 0.72, note: "Mugongo back-meat — the lean charcoal loin" },
      { canonical_id: "bottom_round_roast", match_type: "cultural", confidence: 0.68, note: "Ekisambi/Round — 'Steak' = boneless (the Ugandan false-friend)" },
    ],
    synonyms: ["muchomo", "ankole beef", "ekisambi", "steak uganda", "nyama ya ente", "obubako", "mugongo", "muchomo slab"],
    description: "Muchomo ('roasted meat' in Luganda) is Uganda's parallel to Tanzania's Nyama Choma — the social charcoal-grill institution that defines weekend Ugandan beef culture. Like Nyama Choma, Muchomo uses a large bone-in Loin/Rib slab (Mugongo, 'back meat') with the FULL FAT CAP intact, placed over a fierce charcoal grill for slow roasting. The fat cap acts as a natural basting shield over the lean Ankole beef — critical because Ankole longhorn cattle (the iconic long-horned breed of Western Uganda, also found in Rwanda and Burundi) are entirely grass-fed, free-ranging, and produce exceptionally lean, dense muscle with zero intramuscular marbling. The MANDATORY PARBOILING CORRECTION applies equally to Uganda as Tanzania: Ankole longhorn and crossbred Zebu walk miles of semi-arid and savanna terrain daily, producing intensely tight, dense muscle that requires a PARBOIL step (water + ginger/garlic/onion, 20-40 minutes) before frying or stewing — or alternatively, the Luwombo banana-leaf slow-steam for premium cuts. The 'STEAK = BONELESS' FALSE-FRIEND applies in Ugandan obubako (neighborhood butcheries) exactly as in Tanzania: ordering 'Steak' produces boneless Round or Chuck (Ekisambi = 'thigh/buttock meat') rather than a sear-able steak. Users wanting an actual steak must request Fillet (Nyama Engonvu) or the Mugongo cross-bone loin. MULOKONI: Uganda's therapeutic bone-marrow soup uses the cow heel/hoof and Shin (Kigere), prized as a hangover cure and joint remedy — the Ugandan parallel to Tanzania's Supu ya Mkia and Kenya's bone-broth traditions. The Ankole longhorn breed is now an internationally recognized heritage breed (prized for A2 milk and lean beef), making Ugandan grass-fed Ankole beef increasingly sought by international buyers and safari lodge chefs.",
    notes: "Documents Muchomo charcoal-roast (bone-in Mugongo slab with fat cap), the Ankole longhorn breed context and parboiling correction, the Steak=Boneless false-friend (Ekisambi), and Mulokoni therapeutic marrow soup. Cross-references east_african_choma_parboil_af (the 3-country bloc anchor) and uganda_katogo_luwombo_af. The Ankole heritage breed note is relevant for international safari lodge and premium buyers. Cow default.",
  },

  // ── AFRICA: SOUTHERN AFRICA — ZIMBABWE (Batch 24) ────────────────────────

  // 🇿🇼 ZIMBABWE (4 entities — cow default, grass-fed Mashona/Brahman/Simmentaler)

  {
    id: "zimbabwe_braai_pack_zw",
    name: "The Zimbabwe Braai Pack: A Mixed Bone-In Retail Bundle as a Flash-Grill Translation Unit",
    region: "zimbabwe",
    maps_to: [
      { canonical_id: "top_sirloin", match_type: "cultural", confidence: 0.78, note: "Rump — the steak component of the bundle" },
      { canonical_id: "short_ribs", match_type: "cultural", confidence: 0.74, note: "Short Ribs — the bone-in moisture component" },
      { canonical_id: "t_bone", match_type: "cultural", confidence: 0.74, note: "T-Bone — the spinal loin component" },
    ],
    synonyms: ["braai pack", "bhureyi pack", "gocha pack", "mixed braai cut", "flash-grill bundle", "zimbabwe braai", "mopane braai"],
    description: "The Zimbabwe Braai Pack is the MARQUEE architectural anchor of Batch 24 and the most distinctive Zimbabwe data point: a major retail utility node with no counterpart in the other three Southern African bloc members (South Africa, Botswana, Namibia) or anywhere else in the database. A standard 'Braai Pack' is a rough-cut MIXED assortment — Rump (top_sirloin) + Short Ribs (short_ribs) + T-Bone (t_bone) — sliced relatively thin (approximately 1 inch or less) and sold as a single bone-in package for the braai (the Zimbabwean open-fire grill over hot wood coals, often native Mopane hardwood). This is not an anatomical cut but a PACKAGING-AND-FORMAT concept: the answer to 'what do I buy for a Zimbabwean braai?' is not a single steak but this curated mixed bundle, engineered specifically around the lean grass-fed profile. Because local Veld-reared beef is tight, dense, and exceptionally lean, the Braai Pack is deliberately cut THIN and kept BONE-IN — thin slices flash-grill over high wood-fire heat before the lean meat can toughen, while the retained bone preserves moisture during the fast cook. The Braai Pack maps to multiple canonicals simultaneously (top_sirloin + short_ribs + t_bone), making it the African retail-BUNDLE parallel to the various single-cut format-driven entries elsewhere in the database (the Ceylon Curry Cut, the Mongolian Borts, the Namibian Kapana) — but uniquely a MULTI-CUT bundle rather than a single processed format. It also embodies the Veld-Beef Cooking Constraint that defines all Zimbabwean grilling: local steaks cook significantly faster than US grain-fed beef and turn tough if seared past medium, so they require a generous post-grilling rest. For the platform, the Braai Pack is the highest-value Zimbabwe utility entry — a US user planning a cookout in Harare should be told that the Braai Pack is the default braai purchase, that it is a thin-cut bone-in mixed bundle for flash-grilling, and that the cook-fast-rest-generously constraint applies.",
    notes: "MARQUEE Tier 3 entry of Batch 24. A mixed bone-in retail bundle (Rump + Short Ribs + T-Bone) — a packaging-and-format concept, not a single cut, mapping to multiple canonicals. The African retail-bundle parallel to the single-cut format entries (Ceylon Curry Cut, Mongolian Borts, Namibian Kapana). Documents the Veld-Beef Cooking Constraint (cook fast, rest generously). Cross-references southern_african_export_grade_af (the bloc anchor) and zimbabwe_tbone_porterhouse_zw (the T-Bone component). Cow default.",
  },

  {
    id: "zimbabwe_grading_braai_culture_zw",
    name: "Zimbabwe Super/Choice/Commercial Grading and the High-Density Stewing-Beef Default",
    region: "zimbabwe",
    maps_to: [
      { canonical_id: "chuck_roll", match_type: "cultural", confidence: 0.72, note: "Shoulder/Neck — bone-in High-Density Stewing Beef" },
      { canonical_id: "hind_shank", match_type: "cultural", confidence: 0.70, note: "Shin — bone-in collagen for Sadza neNyama" },
    ],
    synonyms: ["super choice commercial", "zimbabwe grading", "high density stewing beef", "nyama yemagandanga", "sadza nenyama", "veld beef constraint", "grading system africa"],
    description: "Zimbabwe Super/Choice/Commercial Grading documents Zimbabwe's distinctive inherited grading vocabulary and the bone-in stewing default that defines daily cooking. Zimbabwe inherited a sophisticated mid-20th-century export-standard beef-grading system that classifies meat as SUPER, then CHOICE, then COMMERCIAL (descending quality) — the ONLY formal national consumer-level beef-grading vocabulary documented anywhere in the African dataset (South Africa, Botswana, Namibia, Kenya, Tanzania, Uganda, Nigeria, Ethiopia are all characterized by grass-fed quality markers, export-grade sectors, or utility breakdowns, NOT a formal consumer grading scale). This grading system carries a FALSE-FRIEND risk the platform must flag: Zimbabwean 'Choice' is NOT USDA 'Choice' — they are unrelated systems with different criteria (the Zimbabwean tier is a local mid-century export standard; USDA Choice is the second-tier US marbling grade). Critically, Zimbabwean beef is grass-fed and lean REGARDLESS of grade, so a 'Choice' or even 'Super' label does not imply USDA-style marbling — the grade reflects the local export classification, not intramuscular fat. The grading layer sits atop Zimbabwe's DUAL culinary identity: a sophisticated commercial-export classification on one hand, and a rugged open-fire Braai + utility-stew culture on the other. The everyday expression of the latter is the HIGH-DENSITY STEWING BEEF default: for Sadza neNyama (the national staple — thick maize porridge with a rich slow-simmered beef stew), Zimbabweans deliberately AVOID lean boneless cubes; the butcher leaves the heavy connective tissue, external fat, and bones intact on Shoulder (Chuck), Neck, or Shin, because the melting collagen acts as a natural thickener for the tomato-and-onion gravy. Supermarkets formalize this as a labeled product — 'High-Density Stewing Beef' (locally Nyama yeMagandanga) — affordable bone-in cuts packed with marrow and collagen, designed for pressure cookers or multi-hour braises. This bone-in stewing default mirrors the Botswana bone-in stewing default and the East African bone-in Curry/Katogo cut (Batch 23), confirming the bone-in-stewing preference as a pan-African cultural pattern (flavor and gravy-thickening), here uniquely formalized into a supermarket label. Together with the Veld-Beef Cooking Constraint (lean grass-fed steaks cook faster and toughen past medium, needing a generous rest), these define Zimbabwe's everyday beef logic.",
    notes: "Documents the inherited Super/Choice/Commercial grading (the only formal African consumer grading vocabulary; 'Choice' is a USDA false-friend) and the High-Density Stewing Beef bone-in default for Sadza neNyama. Cross-references the Botswana bone-in stewing default (botswana_bmc_grassfed_af, Batch 23) and the East African Curry/Katogo cut (east_african_choma_parboil_af, Batch 23) as the pan-African bone-in-stewing pattern. Documents the Veld-Beef Cooking Constraint. Cow default.",
  },

  {
    id: "zimbabwe_tbone_porterhouse_zw",
    name: "Zimbabwe T-Bone/Porterhouse Interchangeability: The African T-Bone-Dominant Meaning",
    region: "zimbabwe",
    maps_to: [
      { canonical_id: "t_bone", match_type: "exact", confidence: 0.82, note: "Any spinal bone-in striploin+tenderloin cut = T-Bone regardless of fillet width" },
      { canonical_id: "striploin", match_type: "cultural", confidence: 0.68, note: "The striploin side of the T-Bone" },
      { canonical_id: "tenderloin", match_type: "cultural", confidence: 0.66, note: "The tenderloin side of the T-Bone" },
    ],
    synonyms: ["t-bone zimbabwe", "porterhouse zimbabwe", "spinal bone-in", "loin bone-in", "tbone porterhouse", "t-bone dominant"],
    description: "Zimbabwe T-Bone/Porterhouse Interchangeability adds the first African T-Bone naming-collision to the database. In Zimbabwean butchery, ANY spinal bone-in cut containing both the striploin and the tenderloin is labeled a T-BONE, regardless of the tenderloin (fillet) width — directly contrasting the strict USDA system, which separates Porterhouse (large fillet, conventionally a tenderloin of at least ~1.25 inches) from T-Bone (smaller fillet) by precise width. In Zimbabwe, 'Porterhouse' appears occasionally among high-end butchers but is used INTERCHANGEABLY with a large T-Bone, not as a distinct width-defined cut — so the practical reality is T-Bone-dominant, with Porterhouse as a loose upmarket synonym. This connects to the deployed Porterhouse Trinity pattern (the database's documented 3-meaning Porterhouse collision across regions) and adds the Southern African meaning to it: the African node where T-Bone is the umbrella term and Porterhouse collapses into it. For the platform, a Zimbabwe 'T-Bone' search should map to the t_bone canonical (noting it may carry a Porterhouse-sized fillet), and a Zimbabwe 'Porterhouse' search should resolve to the SAME bone-in striploin+tenderloin cut rather than enforcing the USDA width distinction — preventing a US user from wrongly assuming a Zimbabwean 'T-Bone' has a smaller fillet than a 'Porterhouse' when the two terms are locally interchangeable. The T-Bone is also a core component of the Braai Pack (zimbabwe_braai_pack_zw), where it is sliced thin and bone-in for flash-grilling.",
    notes: "The first African T-Bone naming-collision. Any spinal bone-in striploin+tenderloin cut = T-Bone regardless of fillet width; Porterhouse used interchangeably (not width-defined). Connects to the deployed Porterhouse Trinity pattern (Batch abstract). Cross-references zimbabwe_braai_pack_zw (T-Bone as a bundle component). Cow default.",
  },

  {
    id: "zimbabwe_shona_ndebele_vocab_zw",
    name: "Zimbabwe Trilingual Cut Vocabulary: English/Shona/Ndebele Across Unrelated Bantu Languages",
    region: "zimbabwe",
    maps_to: [
      { canonical_id: "tenderloin", match_type: "exact", confidence: 0.82, note: "Fillet / Vhiri-Nyama Nhete / Inyama Ethambilejo" },
      { canonical_id: "striploin", match_type: "exact", confidence: 0.80, note: "Sirloin / Musana / Umhlubulo" },
      { canonical_id: "top_sirloin", match_type: "exact", confidence: 0.78, note: "Rump / Chidya / Isidumbu" },
      { canonical_id: "brisket", match_type: "exact", confidence: 0.76, note: "Brisket / Chipfuva / Isifuba" },
      { canonical_id: "bottom_round_roast", match_type: "exact", confidence: 0.74, note: "Silverside / Gura-Chitandari / Umutsha" },
    ],
    synonyms: ["shona cuts", "ndebele cuts", "vhiri", "musana", "chidya", "chipfuva", "gura", "umhlubulo", "isidumbu", "isifuba", "trilingual zimbabwe"],
    description: "Zimbabwe Trilingual Cut Vocabulary anchors Zimbabwe's three-vocabulary single-market naming layer, a strong validation of the canonical-anatomy thesis across unrelated Bantu languages. In Zimbabwean supermarkets (OK, TM Pick n Pay, Spar) and local butcheries across Harare and Bulawayo, terminology shifts fluidly across THREE vocabularies: standard UK/South African English retail names, Shona, and Ndebele. The same anatomical muscle carries three names: Tenderloin = Fillet (English) / Vhiri or Nyama Nhete (Shona) / Inyama Ethambilejo (Ndebele); Sirloin/striploin = Sirloin / Musana / Umhlubulo; Rump/top_sirloin = Rump / Chidya / Isidumbu; Scotch Fillet/ribeye = Scotch Fillet / Mbiru / Inyama yezimbambo; Brisket = Brisket / Chipfuva / Isifuba; Silverside/bottom_round = Silverside / Gura-Chitandari / Umutsha; Shin/hind_shank = Shin / Gumbo-Tsoka / Unwabu. Architecturally important: Shona and Ndebele are UNRELATED Bantu languages — Shona belongs to the Zezuru/Karanga cluster (Shona group), while Ndebele is an Nguni language closely related to Zulu (the Ndebele migrated from the Zulu kingdom in the 19th century). So this is a same-anatomy-across-unrelated-Bantu-languages validation, the African counterpart to the cross-linguistic validations documented elsewhere: the Himalayan Indo-Aryan-vs-Tibeto-Burman layer (Nepali vs Dzongkha, Batch 21), the South Indian Dravidian-vs-Indo-Aryan layer, the Namibian English/Afrikaans/German layer (Batch 23), and the Sri Lankan Sinhalese/Tamil/English layer (Batch 20). Zimbabwe is the trilingual node where the three vocabularies span two unrelated Bantu families plus colonial English — and a Shona-speaking or Ndebele-speaking shopper can search any of the three and resolve to the same canonical cut. The Commonwealth Sirloin Trap is correctly disambiguated across all three (Musana/Umhlubulo/Sirloin = striploin; Chidya/Isidumbu/Rump = the US-Sirloin equivalent).",
    notes: "Anchors the Zimbabwe English/Shona/Ndebele trilingual vocabulary. Shona (Zezuru/Karanga cluster) and Ndebele (Nguni, Zulu-related) are unrelated Bantu languages — a same-anatomy-across-unrelated-Bantu-languages validation, the African parallel to the Namibian (Batch 23), Sri Lankan (Batch 20), and Himalayan (Batch 21) tri-lingual layers. Cross-references southern_african_export_grade_af (the Commonwealth Sirloin Trap disambiguation). Cow default.",
  },

  // ── INDIA: SOUTH + WEST (Batch 14b) ──────────────────────────────────────

  // 🇮🇳 MAHARASHTRA (3 entities — pan-Indian anchors)

  {
    id: "india_cow_buff_legal_map",
    name: "The Cow vs Buffalo Legal Map of India (Pan-Indian Anchor)",
    region: "maharashtra",
    maps_to: [
      { canonical_id: "tenderloin", match_type: "cultural", confidence: 0.40, note: "Applies across all cuts" },
      { canonical_id: "striploin", match_type: "cultural", confidence: 0.40, note: "Same convention" },
    ],
    synonyms: ["cow vs buffalo", "buff", "gomansa"],
    description: "India's beef ontology cannot be understood without the Cow vs Buffalo legal-cultural axis — the most consequential cultural marker in any country in the Cutranslator database. Under Article 48 of the Indian Constitution and various state laws, COW slaughter is legally restricted in 21 of 28 Indian states. In those states, 'Beef' refers exclusively to Water Buffalo (Bos bubalis), known regionally as 'Bada' (Hindi/Urdu), 'Bade ka Maans,' 'Bade ka Gosht,' or 'Buff.' The cow (Bos taurus) is a sacred animal in Hindu tradition, and asking for 'cow meat' in restricted states can cause genuine cultural offense — a tourist or expat unaware of this distinction risks both legal and social consequences. After Batch 19, the Indian Cow-Legal Map covers 13 regions — forming a 'South + Northeast Arc + Islands + Ladakh' pattern: SOUTH (3 isolated regions): Kerala, Goa (consumer-permissive), West Bengal. NORTHEAST (8 clustered regions): Meghalaya, Nagaland, Manipur, Mizoram, Arunachal Pradesh, Tripura, Assam, Sikkim. ISLANDS (2 isolated regions): Andaman & Nicobar (pan-Indian settler crossroads, cow-permissive, documented in `andaman_crossroads_in`), Lakshadweep (100% Muslim territory, cow-permissive, documented in `lakshadweep_island_isolation_in`). HIMALAYAN (1 cow-permissive): Ladakh (Buddhist-majority, cow-permissive AND Yak-dominant in winter — the only region in the map that is cow-permissive but NOT cow-dominant, documented in `yak_in_ladakh_in`). This expands the cow-legal map from 11 (Batch 18, South + Northeast Arc) to 13 regions. The Himalayan regions of this batch (J&K, Himachal Pradesh, Uttarakhand) are BUFFALO-ONLY — the cow-permissive expansion comes only from the islands and Ladakh. All 8 Northeast states are cow-permissive — they form a contiguous cow-legal cluster, documented in `meghalaya_beef_paradise_in` (Batch 18). In Maharashtra, Telangana, Tamil Nadu, Karnataka, UP, Bihar, MP, Gujarat, Punjab, Haryana, Rajasthan, Chhattisgarh, Jharkhand, Odisha, J&K, Himachal Pradesh, and Uttarakhand — the meat sold as 'beef' is ALWAYS Water Buffalo. Buffalo is leaner, darker, more fibrous, and significantly tougher than USDA cow beef. It requires 30-40% longer cooking, mandatory pressure-cooking or extensive marination (often with raw papaya or yogurt), and almost universally needs separately-purchased Charbi (fat) added for richness. An American expat using USDA recipes with Indian Buffalo without these adaptations produces 'rubbery' or 'livery' results that locals recognize as failed cooking. This entity is the architectural anchor for every Indian regional name with species: 'buffalo' — cross-referenced from every Buffalo-state Tier 3 entry.",
    notes: "PAN-INDIAN ANCHOR — UPDATED in Batch 19 to expand the cow-legal map from 11 to 13 regions (adding Andaman & Nicobar, Lakshadweep, and Ladakh). The single most important Tier 3 entry in the Indian dataset. Cross-reference from every Indian state's regional entries. Documents both the legal axis and the cooking-adaptation requirement. Cross-references `meghalaya_beef_paradise_in` (Batch 18, the NE cow-legal cluster anchor) and `smoked_beef_northeast_axis_in` (Batch 18, the 8-state NE smoked-beef axis). Cross-references `andaman_crossroads_in`, `lakshadweep_island_isolation_in`, and `yak_in_ladakh_in` as the three Batch 19 cow-permissive additions.",
  },

  {
    id: "pan_indian_hindi_urdu_in",
    name: "The Pan-Indian Hindi/Urdu Butchery Vocabulary",
    region: "maharashtra",
    maps_to: [
      { canonical_id: "tenderloin", match_type: "cultural", confidence: 0.45, note: "Naram Maans/Pasanda — universal soft-meat term" },
      { canonical_id: "hind_shank", match_type: "cultural", confidence: 0.45, note: "Machhli/Nalli — universal shank/marrow" },
      { canonical_id: "brisket", match_type: "cultural", confidence: 0.40, note: "Seena — universal brisket/chest" },
    ],
    synonyms: ["naram maans", "pasanda", "seena", "machhli", "nalli", "charbi"],
    description: "Across nearly every Indian state — from Mumbai to Lucknow to Hyderabad to Patna to Chandigarh — a recurring set of Hindi/Urdu butchery terms appear, derived from the historical reach of Mughlai-Awadhi cuisine and the lingua-franca status of Hindi/Urdu in North and Central India. The universal vocabulary: NARAM MAANS or NARAM MANSA (literally 'soft meat,' refers to tenderloin/loin — recognized in 20+ states); PASANDA or PUT (the undercut, used for premium kebabs and steaks); SEENA (brisket/chest, prized for fat); MACHHLI (literally 'fish' — refers to the fish-shape of the calf muscle/shank, mandatory for Nihari and Haleem); NALLI (marrow bone, requested as a separate add-on for gravies); CHARBI (fat, sold separately to compensate for lean Buffalo). This pan-Indian vocabulary parallels the pan-Hispanic 'picanha/picaña/picanya' axis (13 countries, sirloin cap pattern) but operates within a single country across 20+ states. An American expat learning these 6 terms can navigate butchery in any Indian city, regardless of local language — the Hindi/Urdu vocabulary functions as the technical lingua franca of the trade. Regional languages (Tamil, Malayalam, Telugu, Bengali, Marathi) add their own terms for specific cuts, but these 6 Hindi/Urdu terms are universally understood by butchers nationwide.",
    notes: "Architectural anchor for cross-state Indian vocabulary. Comparable to Picanha Axis (Batch 9, 13 countries) but within-country. Cross-reference from every Indian state's regional entries.",
  },

  {
    id: "mumbai_two_tier_butchery_in",
    name: "Mumbai's Two-Tier Butchery System",
    region: "maharashtra",
    maps_to: [
      { canonical_id: "tenderloin", match_type: "cultural", confidence: 0.50, note: "Cross-cuts the Western/Traditional divide" },
    ],
    synonyms: ["nature's basket", "luscious", "crawford market"],
    description: "Mumbai is unique among Indian beef markets in operating two parallel butchery systems in the same city. The 'Western Tier' at supermarkets (Nature's Basket, Foodhall) and specialty butchers (Luscious in Bandra) uses USDA-style English vocabulary — Tenderloin, Sirloin, Topside, Rib Roast — and provides cuts to Western specifications including thick steaks for grilling. The 'Traditional Tier' at wet markets (Crawford Market, Mohammed Ali Road, Kurla) uses Hindi/Urdu vocabulary — Pasanda, Seena, Dasti, Machhli — and defaults to Curry Cut (1-inch bone-in chunks for pressure-cooking). Both tiers sell exclusively Water Buffalo (per Maharashtra cow-slaughter restrictions), but the consumer experience is radically different. An expat moving from New York to Bandra finds Western Tier comforting initially; learning to navigate the Traditional Tier unlocks deeper cuisine and significantly lower prices (often 40-60% cheaper). Mumbai is the cleanest single-city example in the entire database of dual-system retail — most Indian cities have predominantly one tier or the other, but Mumbai's cosmopolitan affluence sustains both parallel tracks at scale.",
    notes: "Unique architectural pattern — only city in the database with documented dual-tier butchery. Cross-reference future Bangalore/Karnataka batch (similar tech-expat-driven Western tier).",
  },

  // 🇮🇳 TELANGANA (4 entities — the Hyderabad anchor)

  {
    id: "hyderabad_precision_butchery_in",
    name: "Hyderabad: India's Precision Butchery Anchor (the 'Beef Capital')",
    region: "telangana",
    maps_to: [
      { canonical_id: "tenderloin", match_type: "cultural", confidence: 0.85, note: "Pasanda/Parcha/Rawa textures all derive from tenderloin" },
      { canonical_id: "hind_shank", match_type: "cultural", confidence: 0.85, note: "Machhli/Haleem-cut for shredding" },
      { canonical_id: "chuck_roll", match_type: "cultural", confidence: 0.70, note: "Hath-ka-Keema vs Machine-Keema distinction" },
    ],
    synonyms: ["hyderabadi", "awadhi", "pasanda", "parcha", "rawa", "haleem", "nihari"],
    description: "Hyderabad is the architectural anchor for Indian beef butchery in the Cutranslator ontology — documented as 'the Beef Capital of India' in source research. The city's butchery tradition derives from the Nawabs of Awadh (modern Lucknow) who were exiled to Hyderabad after the 1857 Indian Rebellion, bringing with them the Awadhi-Mughlai cuisine and its surgical butchery requirements. Hyderabad's butchers — concentrated at Murgi Chowk, Nampally, and Musheerabad markets — are multi-generational specialists who can deconstruct a Water Buffalo carcass into specific muscle/fiber preparations that don't exist in any other butchery tradition documented in the database. Five precision techniques define the Hyderabadi system: PASANDA (the soft undercut, hand-pounded into thin sheets for Hyderabadi Pasanda steaks); PARCHA (paper-thin translucent sheets sliced from Pasanda — they cook in seconds in pan-fry preparations); RAWA (a finely-CHOPPED, NOT minced texture preserving 'grainy juiciness' for Tala Hua Gosht); HATH-KA-KEEMA (hand-chopped mince essential for Hyderabadi Lukmi savory pastries — distinct from machine-keema); and the HALEEM-CUT MACHHLI (the fish-shaped shank cut so it 'threads' or shreds perfectly after 12-hour pounding for Haleem). Each technique is a specific cooking-driven specification — the same Buffalo carcass yields different cuts based on the dish requirement, where the dish drives the cut, not the reverse. An American expat ordering generic 'tenderloin' in Hyderabad gets a default cut; ordering 'Pasanda for kebabs' or 'Rawa for fry' triggers specific techniques. This is the highest level of cooking-driven butchery precision documented in the entire database — surpassing even the Korean Wagyu grading system or Australian MSA in technique-specificity. Hyderabad is the single most architecturally important Indian region.",
    notes: "MARQUEE TIER 3 ENTRY. The Indian beef ontology's Master Class anchor. Cross-references future Lucknow Awadhi entry (Batch 15) which is the spiritual predecessor. The 5 techniques (Pasanda, Parcha, Rawa, Hath-ka-Keema, Haleem-cut Machhli) are uniquely documented across Indian butchery.",
  },

  {
    id: "hyderabadi_haleem_in",
    name: "Hyderabadi Haleem — The 12-Hour Pounded Stew",
    region: "telangana",
    maps_to: [
      { canonical_id: "hind_shank", match_type: "cultural", confidence: 0.90, note: "Machhli (shank) is non-negotiable" },
    ],
    synonyms: ["haleem"],
    description: "Haleem is Hyderabad's iconic Ramadan dish — a meat-and-grain porridge slow-cooked for 12+ hours, then pounded with a wooden mallet (Ghotni) until the meat fibers shred into the grain mixture, creating a uniform paste-like texture. The cut requirement is absolute: ONLY the Machhli (shank) works, and specifically the Haleem-cut variant where the butcher slices it along the fiber direction so the long muscle fibers can break down and 'thread' (shred) after pounding. Using any other cut — including premium Pasanda or expensive ribeye — produces a Haleem that fails the texture test, where the meat stays in chunks rather than threading. American expats attempting Haleem with US Chuck or Brisket find the texture wrong; Hyderabadi cooks recognize the dish as failed within minutes of tasting. The 12-hour cook time is non-negotiable — there's no shortcut to the threading process. Modern Hyderabadi Haleem houses (Pista House, Sarvi, Shadab) operate Haleem-only kitchens during Ramadan, processing hundreds of kilos of Machhli daily. This is the cleanest example in the database of a dish that defines a cut — the Machhli is shaped, sliced, and prepared FOR Haleem before the dish even begins.",
    notes: "Cut-defining-dish pattern. Cross-reference Indonesian Rendang cut, NZ Hāngī Beef, Filipino Bulalo — pan-cultural pattern of dishes that mandate specific cut formats.",
  },

  {
    id: "hath_ka_keema_in",
    name: "Hath-ka-Keema: Hand-Chopped Mince as Premium Texture",
    region: "telangana",
    maps_to: [
      { canonical_id: "chuck_roll", match_type: "cultural", confidence: 0.75, note: "Source meat from chuck/round" },
      { canonical_id: "tenderloin", match_type: "cultural", confidence: 0.65, note: "Premium versions use Pasanda" },
    ],
    synonyms: ["hath ka keema", "hand-chopped keema"],
    description: "Hath-ka-Keema (literally 'hand-mince') is the Hyderabadi distinction between hand-chopped and machine-ground beef — and it's not aesthetic, it's structural. Machine grinders shear muscle fibers, producing a homogeneous paste that cooks quickly but loses textural integrity in long-simmered dishes. Hand-chopping with a heavy cleaver produces irregular fragments that retain their fiber structure, allowing them to absorb spices without disintegrating during the 30-60 minute slow-cook required for Hyderabadi Lukmi (savory pastry filling) and authentic Seekh Kebabs. Hath-ka-Keema is ALWAYS more expensive than machine-keema (50-100% markup at Murgi Chowk), and Hyderabadi butchers maintain it as a separate retail category with its own pricing. American expats accustomed to USDA pre-ground beef find this premium baffling; one bite of properly-prepared Hyderabadi Seekh Kebab made with hand-keema vs the same recipe made with machine-keema demonstrates the distinction immediately. The Machine-Keema vs Hath-ka-Keema split is a cleaner version of similar distinctions documented elsewhere — Mumbai's Rawa-vs-Machine, Lucknow's Hath-ka vs Galouti-machine — but Hyderabad's articulation is the most precise.",
    notes: "Texture-driven cut category. Cross-reference Mumbai Rawa-vs-Machine Keema, Korean Wagyu-cut precision, Vietnamese Bò Né meat-grade specification.",
  },

  {
    id: "rawa_juicy_texture_in",
    name: "Rawa: The Grainy-Juicy Hand-Chopped Texture (Cross-Regional India)",
    region: "telangana",
    maps_to: [
      { canonical_id: "chuck_roll", match_type: "cultural", confidence: 0.65, note: "Source meat is typically chuck or round — the texture, not the muscle, is the spec" },
      { canonical_id: "inside_round", match_type: "cultural", confidence: 0.60, note: "Topside/round in lean Rawa versions" },
    ],
    synonyms: ["rawa", "rawa cut", "grainy texture", "juicy mince", "rawa keema"],
    description: "Rawa is the pan-North-and-Central-Indian designation for a finely hand-chopped texture that is distinct from both whole-cut cookery and machine-ground mince. The word itself denotes a granular, sand-like coarseness — the same word used for semolina (rawa/suji) captures the visual idea: each fragment retains its own identity in the larger mass. Machine grinding shears fibers into a homogeneous paste; Rawa hand-chopping leaves irregular fragments with their cellular walls partially intact, producing a 'grainy juiciness' where each bite has both surface browning and an interior that releases moisture under chewing. Documented in five distinct regional expressions: (1) TELANGANA — 'Rawa cut' is the specification for Tala Hua Gosht, where the grainy texture allows deep Maillard browning on each fragment individually; (2) BIHAR — 'Rawa Bihar' is the hand-chopped mince for Litti-Chokha accompaniment mince, coarser than Lucknawi double-mince; (3) BHOPAL — hand-chop tradition parallel to Lucknawi precision, used for stuffed paratha and kebab fillings; (4) MUMBAI — 'Rawa Keema' is the distinction from machine Keema at Crawford Market, used for Keema Pav where the coarser texture absorbs the Pav bread's structure rather than soaking through it; (5) CHANDIGARH/PUNJAB — coarser still, 'hath-chopped motta-motta' (coarsely-hand-chopped), the Dhaba version. The unifying principle across all five: texture is the specification, not the muscle. A butcher 'making Rawa' is performing a skilled technique, not selecting a body part. This Tier 3 entry is the architectural partner to `hath_ka_keema_in` (Hyderabadi Hath-ka-Keema), which documents the SAME hand-chopping premium from Hyderabad's vantage. The difference: Hath-ka-Keema is a category at Hyderabad's market counters (with pricing), while Rawa is the texture-word used across North India to specify the result. Both oppose the same enemy: machine-ground paste that loses textural identity.",
    notes: "Cross-regional texture node. Partner to `hath_ka_keema_in` (Hyderabadi market-counter version of the same principle). Five-state documentation: Telangana, Bihar, Bhopal, Mumbai, Punjab. Cross-reference `kashmiri_wazwan_pounded_mince_in` (the paste extreme of the same spectrum — hand-pounded into pure paste for Gushtaba/Rista).",
  },

  {
    id: "hyderabadi_nihari_in",
    name: "Hyderabadi Nihari (vs Lucknawi Nihari)",
    region: "telangana",
    maps_to: [
      { canonical_id: "hind_shank", match_type: "cultural", confidence: 0.90, note: "Machhli is the only valid cut" },
    ],
    synonyms: ["nihari", "nalli nihari"],
    description: "Nihari is the slow-cooked overnight stew that anchors Hyderabadi Muslim breakfast culture — a 12-hour-simmered shank-and-marrow stew thickened by collagen rather than starch, finished with whole-spice tempering. The cut requirement: Machhli (Buffalo shank) PLUS Nalli (marrow bone) — both non-negotiable. The signature 'sticky' texture of Nihari gravy comes from collagen breakdown during the long cook, not from flour or roux. Using boneless US 'stew meat' produces a stew that's recognizably wrong to local palates within seconds. Hyderabadi Nihari is structurally similar to Lucknawi Nihari (the Awadhi predecessor — to be documented in Batch 15) but with subtle distinctions: Hyderabadi versions tend toward darker spice profiles (more black pepper, less rose water), and the meat is cut into larger chunks that diners pull apart at the table. The shared ancestor is the Awadhi tradition; the Hyderabadi expression is its own distinct lineage. Both require Machhli + Nalli; both reject any substitute cut.",
    notes: "Cross-reference future Lucknow Nihari entry (Batch 15). Same dish, two regional traditions, same cut requirement. Document the shared ancestor pattern.",
  },

  // 🇮🇳 TAMIL NADU (2 entities)

  {
    id: "boil_then_fry_south_in",
    name: "The South Indian Boil-then-Fry Convention",
    region: "tamil_nadu",
    maps_to: [
      { canonical_id: "inside_round", match_type: "cultural", confidence: 0.65, note: "Topside is the standard target" },
      { canonical_id: "chuck_roll", match_type: "cultural", confidence: 0.60, note: "Chuck also commonly used" },
    ],
    synonyms: ["boil-then-fry", "pressure-cook-then-fry", "chukka technique"],
    description: "Across Tamil Nadu, Andhra Pradesh, Kerala, and Telangana — and extending into the entire South Indian beef-cooking tradition — meat is FIRST pressure-cooked or boiled to break down toughness, THEN pan-fried for crisping and spicing. This contradicts the universal USDA convention of direct high-heat searing. The reason is anatomical: South Indian beef is either Water Buffalo (Tamil Nadu, Andhra, Telangana — all cow-restricted states) or grass-fed local cattle (Kerala, where cow is legal but cattle are pasture-raised, lean, and tougher than USDA grain-fed). Direct pan-searing produces tough, rubbery results that locals describe as 'akin to chewing rope.' The boil-then-fry technique allows the iconic dishes — Beef Chukka (Tamil Nadu), Beef Ularthiyathu (Kerala), Tala Hua Gosht (Telangana), and various Andhra Pulusu preparations — to achieve their characteristic deep, crusted exterior with tender interior. American attempts at these dishes with USDA Choice cuts using direct-fry methods produce visibly different results; the local technique is non-negotiable for authentic outcomes. This is the inverse of the East Asian 'flash-fry of premium pre-tender cuts' pattern (Japanese yakiniku, Vietnamese Bò Lúc Lắc, Korean bulgogi) — South Indian cuisine assumes meat starts tough and tenderness must be MANUFACTURED through the boiling phase, then crisped in the frying phase. A two-step process for one dish.",
    notes: "Pan-South-Indian cooking technique anchor. Cross-reference Kerala Beef Ularthiyathu, Telangana Tala Hua Gosht, Andhra Vepudu, Tamil Beef Chukka. Inverse of East Asian flash-fry convention.",
  },

  {
    id: "kothu_parotta_in",
    name: "Kothu (Beaten) Beef for Kothu Parotta",
    region: "tamil_nadu",
    maps_to: [
      { canonical_id: "chuck_roll", match_type: "cultural", confidence: 0.65, note: "Chuck-area meat hand-beaten on a tawa" },
    ],
    synonyms: ["kothu", "kothu parotta", "beaten beef"],
    description: "Kothu (literally 'beaten' in Tamil) is a preparation technique unique to Chennai street food — beef is hand-chopped, then continuously CHOPPED on a hot griddle (tawa) with two metal chopping blades, simultaneously cooking and shredding the meat into irregular fragments. Combined with Kothu Parotta (chopped flatbread), egg, onion, and chili paste, this produces Chennai's iconic late-night street food dish. The cut requirement: Buffalo chuck/round area, NOT machine-minced. The hand-chopping followed by tawa-beating produces a distinctive texture that machine grinding cannot replicate — the irregular fragments retain enough integrity to bite through, while the high-heat tawa contact creates Maillard browning on every surface. Tamil Nadu Buffalo's leanness suits this technique perfectly; high-marbled US beef would render too much fat onto the tawa, creating a greasy rather than caramelized result. The Kothu Parotta vendors at Chennai's T.Nagar, Mylapore, and Adyar street stalls are demonstration kitchens — the chopping rhythm itself is the entertainment, with experienced cooks producing 30-40 chops per second.",
    notes: "Format-driven cut. Cross-reference Korean Chadolbagi (preparation defines the cut), Lebanese Shawarma (hand-cutting precision). Chennai street-food signature.",
  },

  // 🇮🇳 KERALA (2 entities — cow-legal context)

  {
    id: "kerala_cow_legal_in",
    name: "Kerala: Cow Beef Legal (One of the Few Indian Exceptions)",
    region: "kerala",
    maps_to: [
      { canonical_id: "tenderloin", match_type: "cultural", confidence: 0.50, note: "Applies across all cuts" },
    ],
    synonyms: ["pashu", "cow beef", "potirachi"],
    description: "Kerala is one of the small set of Indian states where COW slaughter is legal — alongside Goa, West Bengal, the 8 Northeastern states, Lakshadweep, and Andaman & Nicobar. This makes Kerala fundamentally different from the Buffalo-only majority of India. Local Malayalam usage distinguishes 'Pashu' (cow) from 'Poti' (Buffalo), and both are sold openly at Connemara/Palayam and Chalai markets in Thiruvananthapuram. Pashu is preferred for delicate curries (lighter color, more tender); Poti is preferred for deep fries and longer-cooked preparations (darker, more flavorful, more durable). Kerala's grass-fed local cattle produce beef that's leaner than USDA grain-fed but still significantly more tender than Buffalo — making Kerala the closest Indian equivalent to Western beef in cooking behavior. The state's Christian and Muslim communities (significant minorities at ~25% combined) have made beef central to Kerala cuisine; the iconic dishes Beef Ularthiyathu (slow-roasted dry fry) and Beef Curry are pan-state staples. Cross-reference the Cow vs Buffalo Legal Map of India (anchored in Maharashtra) for the broader legal context.",
    notes: "First documented Indian region where cow is legal. Cross-reference future Goa entry (also cow legal), future West Bengal entry (cow legal), future Northeast batch (8 cow-legal states).",
  },

  {
    id: "ularthiyathu_in",
    name: "Beef Ularthiyathu — Kerala's Coconut-Oil Dry Fry",
    region: "kerala",
    maps_to: [
      { canonical_id: "inside_round", match_type: "cultural", confidence: 0.75, note: "Topside is the standard" },
      { canonical_id: "top_sirloin", match_type: "cultural", confidence: 0.65, note: "Rump as alternative" },
    ],
    synonyms: ["ularthiyathu", "beef ularthu"],
    description: "Beef Ularthiyathu is the Kerala beef-fry archetype — small uniform cubes of Topside (Round) slow-roasted with fresh coconut chunks, curry leaves, black pepper, and copious coconut oil until the exterior caramelizes to dark mahogany. The dish embodies the 'Boil-then-Fry' technique (Tier 3 entity in Tamil Nadu) but adds Kerala's signature coconut layer: coconut oil is both the cooking medium AND a flavor component, while diced fresh coconut chunks (Thenga Kothu) are added in the final phase to crisp alongside the meat. The cut requirement: small clean cubes (Beef Fry Cut) of lean Topside. Using Brisket or Chuck creates a result that's too fatty; using Buffalo creates a tougher dish that requires longer cooking and loses the signature crispy-edged-tender-interior profile. Kerala's grass-fed cow Topside is the canonical match. American attempts using USDA Choice Round cubes work better than most Indian recipes adapted to USDA, because Kerala beef is closer to USDA in cooking behavior than Buffalo is. Modern Kerala home cooks may use Beef Coconut Fry (a slight variation with more coconut and less pepper) as a faster weekday version; traditional Ularthiyathu can take 90 minutes to achieve the proper caramelization.",
    notes: "Pairs with the Boil-then-Fry South Indian convention. Cross-reference Tamil Beef Chukka (similar technique, less coconut). Kerala Christian-Muslim community staple.",
  },

  // 🇮🇳 ANDHRA PRADESH (1 entity)

  {
    id: "nalli_emuka_prestige_in",
    name: "Nalli Emuka — The Marrow-Bone Prestige Inversion (Andhra)",
    region: "andhra_pradesh",
    maps_to: [
      { canonical_id: "hind_shank", match_type: "cultural", confidence: 0.85, note: "The marrow-bone portion specifically" },
    ],
    synonyms: ["nalli emuka", "marrow bone"],
    description: "In Andhra Pradesh's Telugu beef culture, Nalli Emuka (literally 'marrow bone' in Telugu) is treated not as a value-add to a curry but as the STAR of the dish — a major delicacy commanding premium pricing at Amaravati and Guntur markets. Diners scoop the rich, fatty marrow directly from the bone with their fingers or specialized spoons, eating it alongside steamed rice. This is part of the broader pan-South-Asian 'shank-as-prestige' inversion: Andhra Nalli Emuka, Vietnamese Bắp Hoa, Iranian Mahicheh, Egyptian/Saudi/UAE Moza, Italian Osso Buco — all elevated cuts from the leg/shank that USDA convention treats as cheap soup meat. The Andhra version is distinctive because the marrow itself is the main attraction, not the surrounding meat — Telugu households often buy marrow-bone-only portions for medicinal preparations during illness or postpartum recovery. The fiery Andhra spice profile (Guntur chili, intense black pepper) pairs with the marrow's richness in the same way that bone marrow on toast at Western haute-cuisine restaurants pairs with sea salt and parsley — opulent fat balanced against intense flavor.",
    notes: "Part of the pan-cultural shank-as-prestige inversion documented across 8+ countries. Cross-reference Vietnamese Bắp Hoa (Batch 11), Iranian Mahicheh (Batch 6), Italian Osso Buco (existing).",
  },

  // 🇮🇳 GOA (2 entities)

  {
    id: "goa_portuguese_bridge_in",
    name: "Goa as the Portuguese-Colonial Bridge",
    region: "goa",
    maps_to: [
      { canonical_id: "tenderloin", match_type: "cultural", confidence: 0.80, note: "Lomo / Undercut Portuguese-derived" },
      { canonical_id: "brisket", match_type: "cultural", confidence: 0.75, note: "Salt Meat tradition" },
    ],
    synonyms: ["lomo", "bistek", "salt meat", "lingua", "gado", "panaji"],
    description: "Goa is the Portuguese-colonial bridge in the Indian beef ontology — alongside Pondicherry (French) and Daman (Portuguese) as the three Indo-European butchery hybrid regions. After 450 years of Portuguese rule (1510-1961), Goan beef butchery retains a vocabulary and technique inheritance that no other Indian state possesses. Lomo (the Portuguese-derived term for tenderloin/undercut) coexists with Hindi 'Naram' and English 'Undercut' at Panjim Municipal Market. Bistek refers specifically to thin pan-fried steaks (vinegar-marinated, spice-rubbed, finished with onions) — the Goan version of Portuguese 'bife' adapted to Indian spice expectations. Salt Meat is the Anglo-Goan corned beef tradition: brisket or rump brined with rock salt and saltpetre, typically prepared at home by buying fresh meat and salting it overnight, though some Panjim butchers sell pre-salted chunks. Língua (pickled tongue) is a Goan delicacy paired with Portuguese-style breadstuff (Pão). The state's significant Catholic population (~25%) maintains beef as a dietary staple; cow slaughter is legal in Goa, distinguishing it from Buffalo-only majority states. The vinegar-based marinade tradition (Goan Vindaloo and Beef Roast) is uniquely Portuguese — using local cashew feni vinegar or imported wine vinegar to chemically tenderize the meat, a technique imported from Iberian cuisine.",
    notes: "Three-region Indo-European bridge: Goa (Portuguese, this entry), Daman (Portuguese, future), Pondicherry (French, future). Cross-reference all three for shared colonial vocabulary axis.",
  },

  {
    id: "goa_salt_meat_in",
    name: "Goan Salt Meat (Anglo-Goan Corned Beef)",
    region: "goa",
    maps_to: [
      { canonical_id: "brisket", match_type: "close", confidence: 0.85, note: "Brisket primary; rump as alternative" },
      { canonical_id: "outside_round", match_type: "cultural", confidence: 0.65, note: "Silverside/round less common but used" },
    ],
    synonyms: ["salt meat", "salt beef", "pickled beef"],
    description: "Salt Meat is the Goan-Catholic corned beef tradition — brisket or rump brined with rock salt and saltpetre (potassium nitrate) for 5-7 days, then slow-cooked with spices for the iconic Goan Beef Roast. Distinct from American corned beef (which uses brisket exclusively and typically less aggressive curing) and Anglo-Commonwealth Silverside (Ireland, Australia, New Zealand — uses outside round). The Goan version sits between traditions: typically uses brisket (American convention) but with longer brining (Anglo-Commonwealth convention) and finished with Indian spice profiles (turmeric, cumin, coriander) that distinguish it from both predecessors. Many Panjim Municipal Market butchers sell 'pre-salted' chunks for customers who don't want to brine at home; others sell fresh brisket with explicit instruction on home-curing. The 'Is this salted or fresh?' disambiguation question is a standard part of Goan butcher-counter dialogue. Cross-references the broader Anglo-Commonwealth Corned Beef Trinity (USA brisket / Ireland-AU-NZ silverside) — Goa is the Indian variant adding spice complexity.",
    notes: "Cross-reference USA brisket-corned-beef (existing), Irish silverside-corned-beef (existing), Australian silverside (Batch 12), NZ corned silverside (Batch 12). Goa is the 5th and Indian variant of the Anglo-Commonwealth corned beef tradition.",
  },

  // 🇮🇳 KARNATAKA (4 entities)

  {
    id: "bengaluru_dual_tier_butchery_in",
    name: "Bengaluru's Dual-Tier Butchery (Karnataka's Tech-Hub Pattern)",
    region: "karnataka",
    maps_to: [
      { canonical_id: "tenderloin", match_type: "cultural", confidence: 0.50, note: "Cross-cuts the Western/Traditional divide" },
    ],
    synonyms: ["bengaluru", "bangalore", "russell market", "johnson market"],
    description: "Bengaluru is the second documented Indian city operating a dual-tier butchery system, alongside Mumbai (Batch 14b). The 'Western Tier' at supermarkets (Nature's Basket Bangalore, Hypermart, Foodhall) and specialty shops uses USDA-style English vocabulary — Tenderloin, Topside, Sirloin, Rib Roast — driven by Bengaluru's tech-expat population (300,000+ tech professionals, many from US/UK/Australia working at Infosys, Wipro, and the city's large multinational offices). The 'Traditional Tier' at colonial-era markets (Russell Market in Shivaji Nagar, Johnson Market) uses Hindi/Dakhni Urdu/Kannada vocabulary — Pasanda, Naram Maunsa, Dasti, Machhli — with default Curry Cut (1-inch bone-in chunks). Both tiers sell exclusively Water Buffalo per Karnataka's cow-slaughter restrictions. Like Mumbai, Bengaluru is a city where consumer experience varies dramatically based on which tier you shop. The Russell Market butchers (operational since 1927, British colonial inheritance) speak excellent English alongside multiple Indian languages — they're often the most accessible Indian butchers for first-time expats. The dual-tier pattern in Bengaluru is structurally identical to Mumbai's but with a stronger tech-driven Western tier presence and a stronger English-language fluency at the Traditional Tier. Cross-references future Hyderabad expat butchery patterns (HITEC City) and Pondicherry's French-trained butchery (future batch).",
    notes: "Second documented Indian city with dual-tier butchery. Cross-reference `mumbai_two_tier_butchery_in` (Batch 14b). Tech-expat-driven pattern unique to Mumbai and Bengaluru in the current dataset.",
  },

  {
    id: "donne_biryani_cut_in",
    name: "Donne Biryani Cut (Karnataka's Bone-In Bowl Tradition)",
    region: "karnataka",
    maps_to: [
      { canonical_id: "short_ribs", match_type: "cultural", confidence: 0.70, note: "Bone-in rib chunks primary" },
      { canonical_id: "chuck_blade", match_type: "cultural", confidence: 0.65, note: "Shoulder bone-in alternative" },
    ],
    synonyms: ["donne biryani", "donne"],
    description: "Donne Biryani is Karnataka's signature rustic biryani — served in 'donne' (palm-leaf bowls), distinguished from Hyderabadi Dum Biryani by its short-grain Seeraga Samba rice and herb-forward green coloring (mint, coriander, green chili). The cut requirement: small 1-inch BONE-IN chunks, typically from the Shoulder (Chuck) or Ribs of Buffalo. The bone marrow is expected to leech into the short-grain rice during the slow-simmer phase, producing the distinctive richness that defines authentic Donne Biryani. Using boneless USDA stew meat produces a biryani that locals immediately recognize as inauthentic — the rice tastes 'flat' without the marrow contribution. Bengaluru's Donne Biryani houses (Hotel Empire across multiple locations, Donne Biryani House on Mysore Road, Shivaji Military Hotel) maintain bone-in cut standards rigorously. The dish has spread from its Bengaluru-Mysuru origin to other Karnataka cities and increasingly to South Indian diaspora restaurants in the Gulf and Southeast Asia. Cross-references the broader pan-cultural bone-in-stew/rice tradition: Filipino Bulalo (Batch 11), Italian Osso Buco (existing), South African Potjiekos (Batch 13), New Zealand Hāngī Beef (Batch 12). The Donne Biryani version is distinctive in being a rice dish rather than a stew, but the bone-in mandate is identical — and the marrow-into-grain principle is unique to Donne Biryani in the current database.",
    notes: "Bone-in cut requirement. Cross-reference Filipino Bulalo, NZ Hāngī, Italian Osso Buco, SA Potjiekos. The marrow-into-rice principle is unique among documented bone-in traditions.",
  },

  {
    id: "mangalorean_bafat_roast_in",
    name: "Mangalorean Bafat Roast (Karnataka's Coastal Goan-Portuguese Bridge)",
    region: "karnataka",
    maps_to: [
      { canonical_id: "inside_round", match_type: "cultural", confidence: 0.75, note: "Topside primary" },
      { canonical_id: "outside_round", match_type: "cultural", confidence: 0.70, note: "Silverside as alternative" },
    ],
    synonyms: ["bafat", "mangalorean roast", "mangalore beef"],
    description: "Mangalore (coastal Karnataka) operates a beef butchery tradition distinct from Bengaluru's tech-hub system. The Mangalorean Catholic community — descendants of converts from Portuguese-era Goa who migrated south to Mangalore in the 17th century during a series of Goan Inquisition displacements — maintains a Bafat Roast tradition that bridges Goan-Portuguese heritage and South Indian coastal cooking. The cut: large flat slabs of Topside (or Silverside), hand-pounded with a wooden mallet or the back of a heavy knife to mechanically tenderize the Buffalo, then marinated overnight in Bafat masala — a Mangalorean spice paste of Kashmiri chili (for color and mild heat), cumin, coriander, cinnamon, cloves, peppercorns, and toddy vinegar. The vinegar component is the explicit Goan-Portuguese inheritance — cross-references Goa Vindaloo's vinegar marinade (Batch 14b). The hand-pounding is the Mangalorean adaptation: Buffalo's leanness combined with the slow roasting requires mechanical tenderization that Goan beef (cow) doesn't strictly need. The result is a sliced cold-cut-style preparation served at Mangalorean Catholic feasts and major social events (weddings, baptisms, Christmas). Bengaluru-Mangalore cultural-heritage migration has brought Bafat Roast to high-end Bengaluru restaurants (Karavalli at the Taj West End, Coastal Cuisine on Lavelle Road) but the authentic version requires Mangalorean spices, hand-pounding, and overnight marination. Mangalore is the second Indian region documenting European-colonial butchery influence after Goa itself (Batch 14b), with future Pondicherry (French-colonial) being the third documented bridge.",
    notes: "Cross-reference `goa_portuguese_bridge_in` (Batch 14b — vinegar marinade ancestor). Three Indian regions with European-colonial butchery influence: Goa (Portuguese), Mangalore-Karnataka (Goan-Portuguese-derived), future Pondicherry (French). Hand-pounding is the Mangalorean Buffalo adaptation of the Goan cow tradition.",
  },

  {
    id: "uppu_saaru_cut_in",
    name: "Uppu Saaru Cut (Karnataka Joins the Boil-then-Fry South Indian Convention)",
    region: "karnataka",
    maps_to: [
      { canonical_id: "inside_round", match_type: "cultural", confidence: 0.75, note: "Topside primary" },
    ],
    synonyms: ["uppu saaru", "salt and chili beef"],
    description: "Uppu Saaru (literally 'salt water' in Kannada) is Karnataka's contribution to the South Indian Boil-then-Fry tradition (anchored in Tamil Nadu's `boil_then_fry_south_in`, Batch 14b). The cut requirement: very small uniform half-inch cubes from the Round/Rump. The dish progresses through three phases: (1) pressure-cook the cubes in salt water to break down Buffalo toughness, (2) drain and reserve the broth, (3) high-heat fry the boiled cubes with curry leaves, dried chilies, mustard seeds, and asafoetida in coconut oil. The final dish features the cubes simultaneously crispy-edged and tender-internal, served alongside steamed rice and the reserved broth as an accompanying soup. American attempts at Uppu Saaru using direct-fry of USDA Choice Round produces tough rubbery cubes — the boil phase is mandatory for Buffalo. Karnataka's Uppu Saaru is structurally identical to Tamil Beef Chukka (Batch 14b) but with smaller cubes and more aromatic frying spices. Both belong to the pan-South-Indian Boil-then-Fry convention, which now spans 5 documented states: Kerala (Beef Ularthiyathu), Tamil Nadu (Beef Chukka), Telangana (Tala Hua Gosht), Andhra Pradesh (Vepudu), Karnataka (Uppu Saaru). Five state implementations of one underlying technique — the most widely-distributed cooking convention in any single sub-region of the database. The Boil-then-Fry pattern is genuinely a pan-South-Indian inheritance, not just a single-state quirk.",
    notes: "Cross-reference `boil_then_fry_south_in` (Tamil Nadu, Batch 14b). Karnataka's Uppu Saaru extends the pan-South-India technique to a 5th state (Kerala/TN/Telangana/Andhra now Karnataka). Most widely-distributed cooking convention in any sub-region of the database.",
  },

  // === PAKISTAN (Batch 16) ===

  {
    id: "bachhiya_bhains_duality_pk",
    name: "Bachhiya vs Bhains: Pakistan's Dual-Species Retail (Architecturally Novel Pattern)",
    region: "pakistan",
    maps_to: [
      { canonical_id: "tenderloin", match_type: "cultural", confidence: 0.50, note: "Both species applied to all cuts" },
      { canonical_id: "striploin", match_type: "cultural", confidence: 0.50, note: "Both species" },
      { canonical_id: "brisket", match_type: "cultural", confidence: 0.50, note: "Both species" },
    ],
    synonyms: ["bachhiya", "bhains", "young cow", "water buffalo"],
    description: "Pakistan operates the only documented dual-species retail beef system in the entire Cutranslator database. At every Karachi Empress Market, Lahore Akbari Mandi, and Islamabad Aabpara Market butcher counter, customers must choose between two distinct bovine species before specifying any cut: BACHHIYA (young cow heifer, Bos taurus) or BHAINS (water buffalo, Bos bubalis). The choice is a routine consumer decision, not a legal-cultural axis like in India (where 21 of 28 states legally restrict cow slaughter). Both species are mainstream and legally available throughout Pakistan, sold side-by-side at the same shop. Bachhiya is more expensive (typically 10-20% premium), lighter in color, more tender, and preferred for premium preparations: Karachi steakhouses, Bihari Kebab, Pasande, and high-end Tala Hua Gosht. Bhains is the workhorse — leaner, darker, tougher, but more flavor-dense for long-cooked Mughlai preparations: standard Nihari, Karahi Gosht, Biryani, and most home cooking. The 30-40% additional cooking time required for Bhains is universal practice — Pakistani home cooks add 20-30 minutes to every recipe when using Bhains vs Bachhiya. American expats unfamiliar with the distinction often unintentionally purchase Bhains and produce undercooked rubbery results following USDA timing assumptions. Karachi is the documented 'Beef Hub' of Pakistan with the most refined dual-species butchery — Saddar district butchers can identify which species a cut came from by sight (color, grain pattern, fat distribution). Lahore butchers tend to favor Bachhiya for the city's iconic kebab culture. Islamabad has the highest concentration of Western-friendly butcheries that label species clearly in English. The three-country South Asian beef-species pattern axis: India (legal-axis split via cow protection laws) / Pakistan (consumer-choice dual at every counter) / Bangladesh (cow-only continuity) — three distinct solutions to the same regional question.",
    notes: "ARCHITECTURAL ANCHOR — only documented dual-species retail in the database. Cross-reference `india_cow_buff_legal_map` (Maharashtra, Batch 14b — different pattern: legal axis) and `bangladesh_cow_dominant_bd` (this batch — different pattern: cow continuity). Three-country axis: legal split / consumer dual / cow-only.",
  },

  {
    id: "nihari_regional_traditions_sa",
    name: "The Four Nihari Regional Traditions (South Asian Architectural Anchor)",
    region: "pakistan",
    maps_to: [
      { canonical_id: "hind_shank", match_type: "cultural", confidence: 0.90, note: "Machhli (shank) is universal across all four traditions" },
    ],
    synonyms: ["nihari", "nalli nihari", "karachi nihari", "lucknawi nihari", "hyderabadi nihari", "dhaka nihari"],
    description: "Nihari — the slow-cooked overnight stew that anchors South Asian Muslim breakfast culture — has four documented regional traditions in the Cutranslator database, all sharing the same Awadhi-Mughlai ancestor but with distinct expressions. The original tradition: LUCKNAWI NIHARI from Awadh (modern Uttar Pradesh, India), the Mughal-era court cuisine that defines the technique — rose water, white pepper, lighter spice profile, smaller meat chunks (future Batch 17 anchor). HYDERABADI NIHARI (Telangana, India — Batch 14b) adapted the Lucknawi tradition after the 1857 exile of the Nawabs of Awadh — darker spice, larger meat chunks, more aggressive black pepper. KARACHI PAKISTANI NIHARI is arguably the most 'cult-favorite' tradition, with dedicated Nihari-only shops (Javed Nihari, Sabri Nihari) operating since the 1947 Partition migrations from Delhi/Lucknow brought Awadhi traditions to Pakistan — defining Pakistani 'Nihari' as a distinct national breakfast institution. Karachi Nihari's distinctive features: lemon juice + ginger juliennes + green chili garnish, served as a complete breakfast plate, longer cooking duration (16-18 hours common at dedicated shops). DHAKA BENGALI NIHARI (Bangladesh, this batch) further adapted the tradition with mustard-oil garnish and Boti-curved-blade processing of the Machhli shank — distinctly Bengali-Muslim expression. ALL FOUR TRADITIONS share two non-negotiable cut requirements: MACHHLI (Buffalo or cow shank — the 'fish muscle' that 'threads' or shreds during the 12-18 hour cook) AND NALLI (marrow bone, providing the characteristic gelatinous body of the gravy). The variations are in: spice profile (lightest in Lucknawi, darker in Hyderabadi, warmer in Karachi, mustard-oiled in Dhaka), cooking duration (12-18 hours range), garnish (Pakistani uses lemon + ginger + green chili; Bangladeshi uses mustard oil; Hyderabadi uses cilantro), and serving format (Pakistani as a complete breakfast plate; Hyderabadi as a centerpiece dish). This is one of the cleanest 'one ancestor, many traditions' patterns in the entire database — comparable to the Asado Quintet (Batch 9) in semantic divergence but unified by a single cut requirement (Machhli + Nalli) rather than divergent. Karachi is anchored as the canonical Pakistani Nihari city — the 1947 Partition migrations created a Pakistani Nihari identity distinct from but derived from the Lucknawi original.",
    notes: "MARQUEE TIER 3 ENTRY of Batch 16. The South Asian Nihari Axis Anchor. Cross-reference `hyderabadi_nihari_in` (Batch 14b, Telangana), future `lucknawi_nihari_in` (Batch 17 anchor — the Awadhi ancestor), and Bangladeshi mustard-oil-tradition (this batch). Four documented regional traditions of one ancestral dish.",
  },

  {
    id: "hunter_beef_pk",
    name: "Hunter Beef (Pakistani 5th Regional Corned Beef Tradition)",
    region: "pakistan",
    maps_to: [
      { canonical_id: "top_sirloin", match_type: "close", confidence: 0.80, note: "Rump primary" },
      { canonical_id: "outside_round", match_type: "cultural", confidence: 0.70, note: "Round as alternative base" },
    ],
    synonyms: ["hunter beef", "pakistani pastrami", "pakistani corned beef"],
    description: "Hunter Beef is Pakistan's distinctive corned beef tradition — the 5th documented regional variant in the Cutranslator database, joining USA Brisket-corned-beef, Anglo-Commonwealth Silverside (Ireland/Australia/NZ), Goan Salt Meat (Batch 14b), and South African Brisket Corned Beef. Hunter Beef uses Rump (Top Sirloin) or Round (outside_round), cured for 7-10 days with a distinctive saltpeter + cinnamon + cloves brine — the warming-spice profile is what distinguishes Hunter Beef from Anglo-Commonwealth salt-only curing or American spice blends. The two-stage cooking (BOIL FIRST then ROAST) produces a firmer texture than wet-cured Anglo corned beef, with deeper spice penetration than American corned beef brisket. Pakistani delicatessens — particularly in Karachi's Saddar district at long-established institutions like Karachi Bakery, Pakistan Sweets & Bakery, and various 'cold cuts' specialists — sell Hunter Beef pre-prepared as a sandwich-meat, sliced thin like deli pastrami. Cultural origins: Hunter Beef likely emerged from British colonial-era Anglo-Indian deli traditions adapted to Pakistani Mughlai-Persian spice expectations during the 19th-20th centuries. The name 'Hunter' may reference the British colonial sportsman tradition (cured cuts for hunting expeditions). Pakistani breakfast and tea-time traditions — especially Karachi's middle-class Sunday breakfast — feature Hunter Beef sandwiches alongside Halwa Puri and chai, a uniquely Pakistani cultural expression of the global corned beef tradition. The cut choice (rump rather than brisket or silverside) is itself distinctive — no other documented corned beef tradition uses Top Sirloin as primary base.",
    notes: "5th regional corned beef tradition. Cross-reference USA brisket-corned-beef (existing), Anglo-Commonwealth silverside (Ireland existing + Batch 12 AU/NZ + Batch 13 SA), Goan Salt Meat (Batch 14b). Pakistani-Mughlai variant with unique rump base + cinnamon-cloves cure profile.",
  },

  {
    id: "pan_south_asian_hindi_urdu_sa",
    name: "Pan-South-Asian Hindi/Urdu Vocabulary (Cross-Border Continuity Anchor)",
    region: "pakistan",
    maps_to: [
      { canonical_id: "tenderloin", match_type: "cultural", confidence: 0.50, note: "Pasanda/Naram universal" },
      { canonical_id: "hind_shank", match_type: "cultural", confidence: 0.50, note: "Machhli/Nalli universal" },
      { canonical_id: "brisket", match_type: "cultural", confidence: 0.45, note: "Seena universal" },
    ],
    synonyms: ["pasanda", "seena", "machhli", "nalli", "charbi", "naram", "bhains", "bachhiya"],
    description: "The 6 universal Indian Hindi/Urdu butchery terms documented in `pan_indian_hindi_urdu_in` (Maharashtra, Batch 14b) extend with full continuity across Pakistan and Bangladesh — making this a Pan-South-Asian vocabulary axis spanning approximately 1.7 billion people across three sovereign nations. NARAM MAANS (soft meat / tenderloin), PASANDA / PUT (undercut), SEENA (chest / brisket), MACHHLI / NALLI (shank / marrow bone), CHARBI (fat) — all six terms are recognized at every Karachi/Lahore/Dhaka butcher counter, derived from the historical reach of Mughlai-Persian cuisine across the pre-Partition Indian subcontinent. Pakistan adds two species terms (BACHHIYA = young cow, BHAINS = water buffalo) reflecting its dual-species retail. Bangladesh adds Bengali-specific terms (SIRA/PIT for back, PA-ER for leg/trotter, KAAND for shoulder, LEZ for tail) but maintains full Hindi/Urdu vocabulary continuity for the 6 universal terms. This pan-South-Asian axis is comparable to the pan-Hispanic Picanha Axis (Batch 9, 13 countries unified by sirloin cap) but operates within a much smaller geographic area with much higher population density. An American expat learning these 6 terms can navigate butchery in any major city across India, Pakistan, or Bangladesh — the Hindi/Urdu vocabulary functions as the technical lingua franca of South Asian beef trade despite the political-cultural divisions between the three nations. This continuity is itself a documented historical phenomenon — the 1947 Partition divided territory but did not divide butchery vocabulary, which had spread under the unified Mughal Empire (1526-1857) and remained continuous through subsequent centuries despite political-cultural divisions. ARCHITECTURAL NOTE: this entity is PARALLEL to `pan_indian_hindi_urdu_in` (Maharashtra), NOT a replacement. Two anchors documenting the same underlying linguistic continuity at different scopes (India-specific anchored in Maharashtra vs cross-border anchored in Pakistan). Both anchors remain in the database; they cross-reference each other.",
    notes: "Pan-South-Asian vocabulary anchor. Cross-references `pan_indian_hindi_urdu_in` (Maharashtra, Batch 14b — India-specific anchor at smaller scope). Two anchors documenting the same linguistic continuity at different scopes — DO NOT consolidate.",
  },

  {
    id: "karachi_nihari_pk",
    name: "Karachi Nihari (the Pakistani National Breakfast Tradition)",
    region: "pakistan",
    maps_to: [
      { canonical_id: "hind_shank", match_type: "cultural", confidence: 0.90, note: "Machhli is non-negotiable" },
    ],
    synonyms: ["karachi nihari", "javed nihari", "sabri nihari"],
    description: "Karachi Nihari is the Pakistani national breakfast tradition — the most 'cult-favorite' of the four documented Nihari Regional Traditions (cross-reference `nihari_regional_traditions_sa`). Dedicated Nihari-only shops in Karachi — Javed Nihari (founded 1969, Burns Road original location), Sabri Nihari (Saddar), Malik Nihari (Burns Road) — operate as Nihari-exclusive institutions, opening at 5am for breakfast crowds and selling out by 11am daily. The Karachi Nihari distinctive features: 16-18 hour cooking duration (longer than Lucknawi and Hyderabadi versions), warmer spice profile (more black pepper, ginger, and ground cardamom), and the signature garnish trio of FRESH LEMON JUICE + GINGER JULIENNES + GREEN CHILI served alongside the bowl for diner self-customization. Karachi Nihari emerged from the 1947 Partition migrations when Muslim populations from Delhi, Lucknow, and Uttar Pradesh resettled in Karachi, bringing Awadhi cooking traditions that were then adapted to Pakistani palates and developed into a distinct Pakistani-Karachi expression. The cut requirement is identical to all four Nihari traditions: Machhli (Buffalo shank, more common in Pakistani usage; Bachhiya cow shank also valid for premium versions) PLUS Nalli (marrow bone). The 16-18 hour cook is what produces the signature 'Resha' (thread) texture — the long muscle fibers of the shank break down and shred into the gravy, creating a stew where the meat is functionally inseparable from the gelatinous broth. American expats who have only encountered Indian Nihari (Hyderabadi or Lucknawi) often find Karachi Nihari more aggressively spiced and longer-cooked — the Pakistani version is genuinely a distinct lineage, not a copy of the Indian original. Cross-references the Four Nihari Regional Traditions anchor and Hyderabadi Nihari (Batch 14b) for the Indian comparison points.",
    notes: "Pakistani Nihari documentation. Cross-reference `nihari_regional_traditions_sa` (this batch, the four-tradition anchor) and `hyderabadi_nihari_in` (Batch 14b, Indian comparison point). Karachi as the cult-favorite Nihari city.",
  },

  // === BANGLADESH (Batch 16) ===

  {
    id: "bangladesh_cow_dominant_bd",
    name: "Bangladesh: The Cow-Dominant Anomaly of South Asia",
    region: "bangladesh",
    maps_to: [
      { canonical_id: "tenderloin", match_type: "cultural", confidence: 0.50, note: "Cow-default applies across all cuts" },
    ],
    synonyms: ["gorur mangsho", "cow beef bd"],
    description: "Bangladesh stands out among large mainland South Asian populations as the only country where COW is the unambiguous national 'beef' — no Buffalo competition (vs Pakistan's dual-species), no legal restriction on cow slaughter (vs India's 21-of-28-states restriction), no qualifications. The Bengali term 'গরুর মাংস' (Gorur Mangsho) translates directly to 'cow meat' and refers exclusively to cow without ambiguity. Bangladesh's small Hindu minority (~8% of 170M total population) is concentrated in regions that don't dominate butchery, and the Bangladeshi state has not adopted India-style cow protection laws (despite being a Muslim-majority country, ironically — religious demographics don't predict beef policy in the way Western observers might assume). The cultural-political logic: Bangladesh's 1971 separation from Pakistan was Bengali-linguistic-nationalist, not religious-conservative — the resulting nation-state has maintained relatively secular beef policy. This makes Bangladesh structurally similar to Western beef countries (USA, EU, AU, NZ, South Africa) in single-species clarity, but distinct in butchery technique (hot-boned, hand-cut with the Boti curved blade, cooking-driven) and culinary culture (heavy emphasis on Bhuna slow-braising, mustard oil cooking medium, Mezban fat-as-flavor extreme). For a North American expat moving from Mumbai (where 'beef' is buffalo and cow is restricted) to Dhaka (where 'beef' is straightforwardly cow), the species clarity is immediately welcoming — no need to specify Bachhiya vs Bhains, no need to navigate state-level legal restrictions. Bangladesh completes the three-country South Asian beef-species pattern: India (legal-axis split) / Pakistan (consumer-choice dual) / Bangladesh (cow-only continuity). Three sovereign neighbors, three structurally different solutions to the same regional question of how cow and buffalo coexist in beef culture.",
    notes: "Cow-dominant anomaly anchor. Cross-references `india_cow_buff_legal_map` (Batch 14b, Maharashtra) and `bachhiya_bhains_duality_pk` (this batch). Three South Asian patterns: legal split / consumer dual / cow continuity.",
  },

  {
    id: "mezban_chittagong_bd",
    name: "Mezban (Chittagong's USDA Quality-Inversion APEX)",
    region: "bangladesh",
    maps_to: [
      { canonical_id: "brisket", match_type: "cultural", confidence: 0.65, note: "Brisket primary; Mix-cut also includes shoulder/short ribs" },
      { canonical_id: "chuck_blade", match_type: "cultural", confidence: 0.60, note: "Shoulder secondary" },
    ],
    synonyms: ["mezban", "mezbani", "chittagong beef"],
    description: "Mezban is Chittagong's (Bangladesh's southeastern coastal city) iconic festive beef tradition and the most explicit USDA-quality inversion documented anywhere in the Cutranslator database. The defining cultural rule: a Mezban curry that ISN'T 'swimming in rendered beef fat' is considered a complete failure. American expats attempting Mezban with USDA 'Lean Beef' produce a result Bangladeshis describe as 'broth, not Mezban' — the leaner USDA cuts simply cannot generate the rendered-fat richness that DEFINES the dish. The cut requirement: a 'Mix Cut' combining lean meat + bone-in chunks + explicitly added Charbi (extra fat) in roughly 5:3:2 ratio. Chittagong butchers prepare Mezban Cut as a standard retail category at Reazuddin Bazar (Chittagong's central market), pre-assembled to specification. The 8-12 hour slow-cook reduces the Charbi to liquid form, creating a thick orange-red oil layer that signature Mezban dishes are submerged in — the meat is functionally CONFIT in beef fat. This pushes 'fat is flavor' to its absolute extreme, surpassing the previously-documented USDA-quality inversions in the database: South African Yellow Fat preference (Batch 13 — yellow fat as quality marker), Chinese Chaoshan texture-over-marbling (Batch 10 — specific cut texture preferred), Vietnamese/Korean shank-as-prestige (Batches 10-11 — value cut elevated), Korean Yangji/Chadolbagi (Batch 10 — preparation-defined cut). In Mezban, fat isn't a flavor enhancer — it's the SUBSTANCE of the dish. The meat in a Mezban serves as a structural element that delivers fat to the eater; in the most traditional Chittagong preparations, the rice-fat ratio is roughly 1:1 by volume. Cultural origins: Mezban was historically a Bengali Muslim community feast served at religious gatherings, weddings, and funerals — the fat-richness reflected pre-modern caloric need (fat = winter survival energy) and prestige (only wealthy hosts could afford the volume of beef and fat required). Modern Chittagong restaurants (Mezbaan, Hotel Saikat, Boatman Restaurant) maintain the tradition rigorously. The Chittagong diaspora has spread Mezban to Dhaka, the UK (Tower Hamlets, East London), and US Bangladeshi communities (New York, Detroit) — but authentic versions require Chittagong-origin butchers who understand the Mix Cut ratio.",
    notes: "USDA-Quality-Inversion APEX. Joins documented inversions: SA Yellow Fat (Batch 13), Chinese Chaoshan (Batch 10), Vietnamese/Korean shank-as-prestige (Batches 10-11), Korean Yangji/Chadolbagi (Batch 10). Mezban is the most explicit — fat IS the dish, not a flavor component. Five total documented USDA-quality inversions after this batch.",
  },

  {
    id: "kalo_bhuna_bd",
    name: "Kalo Bhuna (Blackened Beef — Bengali Slow-Braise Signature)",
    region: "bangladesh",
    maps_to: [
      { canonical_id: "chuck_blade", match_type: "cultural", confidence: 0.75, note: "Shoulder primary" },
      { canonical_id: "top_sirloin", match_type: "cultural", confidence: 0.65, note: "Rump as alternative" },
    ],
    synonyms: ["kalo bhuna", "blackened beef", "gorur kalo bhuna"],
    description: "Kalo Bhuna (literally 'black bhuna' in Bengali) is one of Bangladesh's most iconic beef preparations — slow-cooked Shoulder or Rump caramelized to deep mahogany-black color through a 4-6 hour reduction with whole spices (cinnamon, cardamom, cloves), onions, ginger-garlic paste, and minimal water. The 'black' color comes from progressive Maillard browning of the meat surface and onion-spice mixture as moisture evaporates. The cut requirement: chunks of Shoulder (Kaand) or Rump (Top Sirloin) with a bit of connective tissue intact — the connective tissue provides the gelatinous body that holds the dish together as it caramelizes. Lean USDA cuts (e.g. Sirloin Tip, Eye of Round) would dry into threads and disintegrate during the long reduction. Bengali home cooks prefer Kaand (shoulder) for its ideal connective-tissue-to-meat ratio. The dish is structurally similar to Indian Bhuna (slow-fry) but with a longer reduction phase and explicit color goal — the 'kalo' (black) outcome is the visual quality test. A properly executed Kalo Bhuna will have meat that pulls apart effortlessly while retaining structural integrity, with a glossy black-brown sauce that clings tightly. Cross-reference Korean galbi-jjim (similarly slow-braised with sweet-soy reduction) and Indonesian Rendang (similar technique with coconut-milk reduction): three Asian cuisines independently arrived at long-cook caramelization techniques requiring connective-tissue-rich shoulder cuts, but each developed distinctive sauce/spice profiles (Korean sweet-soy, Bangladeshi spice-onion, Indonesian coconut-spice). American attempts at Kalo Bhuna with USDA Choice Chuck work better than most Indian recipes adapted to USDA — Choice Chuck has comparable connective-tissue content to Bangladeshi cow Shoulder.",
    notes: "Bengali signature dish requiring connective-tissue-rich shoulder. Cross-reference Korean galbi-jjim (slow-braise structural similarity), Indonesian Rendang (Batch 11 — coconut-spice variant), pan-Asian slow-braise tradition.",
  },

  {
    id: "boti_hand_cutting_bd",
    name: "The Boti (Bengali Curved-Blade Hand-Cutting Tradition)",
    region: "bangladesh",
    maps_to: [
      { canonical_id: "chuck_roll", match_type: "cultural", confidence: 0.75, note: "Source meat for hand-cut keema" },
      { canonical_id: "tenderloin", match_type: "cultural", confidence: 0.65, note: "Premium hand-cut for Boti Kabab" },
    ],
    synonyms: ["boti", "hath e kata", "hand-cut keema", "boti kabab"],
    description: "The Boti is a traditional curved blade unique to Bengali culinary tradition — mounted on a wooden block, the cook (or butcher) holds vegetables/meat against the blade rather than wielding the blade like a knife. The Boti operator sits cross-legged on the floor, securing the wooden base under one foot and using both hands to push food against the upturned curved blade. Bengali butchers and home cooks are masters of Boti technique, using it to produce hand-cut keema (mince) that retains chunky irregular fragments rather than the homogeneous paste of machine grinding. Hath-e-kata (literally 'hand-cut') keema produced via Boti is dramatically different from machine-ground keema — the irregular fragments retain their muscle fiber structure, allowing them to absorb spices without losing texture during the slow Bhuna cooking phase. Bengali Mezban, Kalo Bhuna, and Beef Tehari all benefit from Boti hand-cut technique — the cooking methods are designed around the Boti texture and produce different results with machine grind. American expats accustomed to USDA pre-ground beef find authentic Bengali Hath-e-kata Keema texturally distinctive immediately — chunkier, more 'beefy' bite, less pasty. Modern Dhaka supermarkets (Unimart, Meena Bazaar) increasingly offer machine-ground keema, but traditional Kaptan Bazar butchers maintain Boti hand-cutting as a premium service (typically 30-50% markup over machine grind). The Boti technique parallels Hyderabadi Hath-ka-Keema (Batch 14b) — both cultures explicitly distinguish hand-chopped from machine-ground, both pricing hand-chopped at premium, but Bengali Boti uses a fundamentally different blade geometry (curved-and-mounted vs Hyderabadi heavy-cleaver-on-board). Cross-references the broader pan-Asian hand-vs-machine processing pattern: Bengali Boti (this entry), Hyderabadi Hath-ka-Keema (Batch 14b), Korean hand-chopped tartare for Yukhoe (Batch 10), Vietnamese paper-thin hand-slicing for Phở (Batch 11), Ethiopian hand-mincing for Kitfo (Batch 13). Five Asian/African cultures independently arrived at the conviction that machine processing destroys textural integrity that hand-work preserves.",
    notes: "Cross-reference `hath_ka_keema_in` (Telangana, Batch 14b — Hyderabadi parallel). Pan-Asian-African hand-vs-machine processing pattern: Bengali Boti, Hyderabadi Hath-ka-Keema, Korean Yukhoe, Vietnamese Phở slicing, Ethiopian Kitfo (Batch 13). Five-culture convergence on hand-processing premium.",
  },

  // ==================== BATCH 17: NORTH/EAST/CENTRAL INDIA ====================

  // ----- UTTAR PRADESH (3 entities) -----
  {
    id: "lucknow_awadhi_summit_in",
    name: "Lucknow's Awadhi Summit (Marquee Architectural Anchor of Indian Beef Ontology)",
    region: "uttar_pradesh",
    maps_to: [
      { canonical_id: "tenderloin", match_type: "cultural", confidence: 0.90, note: "Pasanda/Parcha/Galouti mince all derive from tenderloin" },
      { canonical_id: "chuck_roll", match_type: "cultural", confidence: 0.75, note: "Hath-ka-Keema and double-minced Kofte" },
      { canonical_id: "hind_shank", match_type: "cultural", confidence: 0.80, note: "Machhli for Lucknawi Nihari" },
    ],
    synonyms: ["lucknawi", "awadhi", "pasanda", "parcha", "galouti", "kidney fat", "raw papaya", "garam gosht"],
    description: "Lucknow is the architectural ANCESTOR of Indian beef butchery — the historical origin from which Hyderabadi precision butchery (Batch 14b — post-1857 exile of the Nawabs of Awadh), Karachi Pakistani Nihari tradition (Batch 16 — 1947 Partition migrations), and Dhaka Bengali Nihari (Batch 16 — Bengali Muslim adaptation) all derive. The Awadhi cuisine developed at the Lucknow Mughal court (1722-1857) as the most refined expression of Mughal-Persian-Indian fusion cooking — patronized by the Nawabs of Awadh whose obsession with culinary refinement led to multi-generational butcher specialists capable of techniques no other documented tradition matches. FIVE distinct precision techniques define the Lucknawi system, more than Hyderabad's already-elite five: PASANDA (the soft undercut, hand-pounded thin sheets — same technique as Hyderabadi but Lucknow is the origin); PARCHA (translucent strips so thin they cook in seconds — thinner than Hyderabadi version); HATH-KA-KEEMA (hand-chopped mince with explicit KIDNEY FAT blend — more precise fat-specification than Hyderabadi's generic Charbi); KOFTE KA KEEMA (DOUBLE-MINCED — passed through machine TWICE for melt-in-mouth Koftas that stay perfectly round and soft without breadcrumb binding — UNIQUE to Lucknow); and the legendary GALOUTI MINCE (Pasanda + Kidney Fat + RAW PAPAYA tenderizer producing machine-soft texture for the Galouti Kebab — UNIQUE to Lucknow, no other documented tradition uses this specific Kidney Fat + papaya enzyme blend). Plus the cultural standard of GARAM GOSHT (warm/fresh meat) — refrigerated meat is believed to compromise spice absorption, so meat must be hot-boned and cooked the same day. The Old Lucknow markets — Akbari Gate, Chowk, Maulviganj — operate multi-generational butcher establishments where the LUCKNAWI TEHZEEB (etiquette) at the meat counter is itself a cultural performance — butchers and customers exchange formal Urdu greetings before any business is conducted. Lucknow is the architectural PEAK paired with Hyderabad's Master Class as the two summits of South Asian beef ontology. The two cities relate as ancestor-and-descendant: Hyderabadi precision is the post-1857 Awadhi-derived expression, Karachi Pakistani is the post-1947 Awadhi-derived expression, Dhaka Bengali is the further-derived Bengali Muslim expression. All four traditions share the same architectural foundation: precision butchery driven by specific dish requirements, where the dish defines the cut rather than the reverse.",
    notes: "MARQUEE TIER 3 ENTRY of Batch 17. Paired with `hyderabad_precision_butchery_in` (Telangana, Batch 14b) as the two architectural peaks of South Asian beef ontology. Cross-references all four Nihari Regional Traditions (Lucknawi anchor in this batch, Hyderabadi Batch 14b, Karachi Pakistani Batch 16, Dhaka Bengali Batch 16). Lucknow is the historical ancestor; the others are derivations.",
  },

  {
    id: "lucknawi_nihari_in",
    name: "Lucknawi Nihari (the Awadhi Ancestor — Closes the Four Nihari Regional Traditions Arc)",
    region: "uttar_pradesh",
    maps_to: [
      { canonical_id: "hind_shank", match_type: "cultural", confidence: 0.90, note: "Machhli is universal across all four Nihari traditions" },
    ],
    synonyms: ["lucknawi nihari", "awadhi nihari", "nawabi nihari"],
    description: "Lucknawi Nihari is the Mughal-court ANCESTOR of all four documented Nihari Regional Traditions in the Cutranslator database — the original 18th-century Awadhi expression from which Hyderabadi (Batch 14b — post-1857 exile derivation), Karachi Pakistani (Batch 16 — 1947 Partition derivation), and Dhaka Bengali (Batch 16 — Bengali Muslim derivation) all descend. The Lucknawi version is distinctively LIGHTER than its derivatives: ROSE WATER finishing, WHITE PEPPER as the dominant spice (vs the black pepper of Hyderabadi/Karachi), SMALLER MEAT CHUNKS (the Awadhi aesthetic preferred refined small portions over the larger rustic chunks of Hyderabad), and a 12-hour cook (vs Karachi's 16-18-hour cult-favorite extension). The cut requirement is identical across all four traditions: MACHHLI (Buffalo shank, the 'fish muscle' that 'threads'/shreds during the long cook) PLUS NALLI (marrow bone). The signature 'Resha' (thread) texture comes from the long muscle fibers of the shank breaking down and shredding into the gravy during the 12-hour cook, creating a stew where the meat is functionally inseparable from the gelatinous broth. Modern Old Lucknow Nihari shops (Tundey Kababi's Nihari department, Idris Biryani's morning Nihari service, Wahid Biryani) maintain the lighter Awadhi profile that Lucknow purists insist is the 'true' Nihari — though Karachi's cult-favorite version arguably has more global recognition. The historical chain: Mughal court at Lucknow → 1857 Indian Rebellion ends Awadhi rule → exiled Nawabs settle in Hyderabad bringing Awadhi cooks → Hyderabadi Nizams patronize them → 1947 Partition brings Awadhi-Hyderabadi cooks to Karachi → Karachi develops cult-favorite Nihari shops → Bengali Muslim communities (Dhaka) further adapt with mustard oil garnish. Four traditions, one ancestor. This entity CLOSES the Four Nihari Regional Traditions architectural arc opened by `nihari_regional_traditions_sa` (Pakistan, Batch 16).",
    notes: "CLOSES the Four Nihari Regional Traditions arc. Cross-reference `nihari_regional_traditions_sa` (Pakistan, Batch 16 anchor), `hyderabadi_nihari_in` (Telangana, Batch 14b), `karachi_nihari_pk` (Pakistan, Batch 16). Lucknawi is the ancestor; the others are derivations. After this entity ships, the architectural arc is complete: 4 traditions, 1 documented ancestor, full historical chain.",
  },

  {
    id: "northern_buff_belt_in",
    name: "The Northern Buff Belt (Geographic Anchor for Buffalo-Only Hindi/Urdu States)",
    region: "uttar_pradesh",
    maps_to: [
      { canonical_id: "tenderloin", match_type: "cultural", confidence: 0.50, note: "Pan-state Pasanda continuity" },
      { canonical_id: "hind_shank", match_type: "cultural", confidence: 0.50, note: "Pan-state Machhli/Nalli continuity" },
    ],
    synonyms: ["northern buff belt", "buffalo belt", "gangetic plain beef"],
    description: "The Northern Buff Belt is the GEOGRAPHIC anchor for the 8 contiguous Hindi/Urdu-speaking Buffalo-only states forming a continuous belt across the Indian Gangetic plain: Uttar Pradesh (anchor), Bihar, Punjab, Haryana, Rajasthan, Madhya Pradesh, Jharkhand, Chhattisgarh — plus shoulder regions Gujarat (Gujarati-language overlay) and Odisha (Oriya-language overlay). All 8 states share five architectural patterns: BUFFALO-ONLY legal status (cow restricted under Article 48 + state laws); pan-Indian HINDI/URDU VOCABULARY (Pasanda, Seena, Machhli, Nalli, Charbi — universal across the belt); MUGHLAI-AWADHI culinary inheritance (Nihari, Bhuna, Pasande, Keema all derive from Lucknow's Mughal court tradition); UNIVERSAL CURRY CUT default (1-inch bone-in 70/30 chunks at any wet market); PRESSURE-COOKING as default cooking method to handle Buffalo's lean toughness; and the 'ADD CHARBI SEPARATELY' pattern compensating for lean Buffalo with explicitly purchased fat. This Northern Buff Belt is the GEOGRAPHIC anchor that complements the linguistic anchor (`pan_indian_hindi_urdu_in`, Maharashtra Batch 14b) and the legal anchor (`india_cow_buff_legal_map`, Maharashtra Batch 14b) — three architectural axes describing the same underlying phenomenon at different scopes. After this batch, the Indian beef ontology has its complete three-axis architectural foundation: legal (where cow is restricted), linguistic (the 6 universal Hindi/Urdu terms), and geographic (the 8-state Gangetic-plain Buffalo Belt). The architectural triangulation makes the Indian beef ontology genuinely defensible — no other beef-cuts resource on the internet has this depth of regional-cultural mapping.",
    notes: "GEOGRAPHIC anchor completing the three-axis Indian Buffalo Belt architecture. Cross-reference `pan_indian_hindi_urdu_in` (linguistic, Maharashtra Batch 14b) and `india_cow_buff_legal_map` (legal, Maharashtra Batch 14b). Three axes, one underlying phenomenon, full architectural triangulation.",
  },

  // ----- PUNJAB (1 entity) -----
  {
    id: "punjabi_dhaba_culture_in",
    name: "Punjabi Dhaba Culture (Robust Cuts for High-Heat Highway Cooking)",
    region: "punjab",
    maps_to: [
      { canonical_id: "chuck_roll", match_type: "cultural", confidence: 0.65, note: "Gol-Boti, Khula Gosht generic" },
      { canonical_id: "chuck_blade", match_type: "cultural", confidence: 0.60, note: "Dasti for Karahi Gosht" },
    ],
    synonyms: ["dhaba", "punjabi dhaba", "amritsari", "ludhiana beef"],
    description: "Punjab's beef culture (concentrated in Amritsar, Ludhiana, Mohali, and the joint Chandigarh territory) is shaped by the iconic DHABA tradition — highway roadside restaurants serving robust home-style cooking to truckers, travelers, and locals at high turnover. Dhaba beef must satisfy three constraints simultaneously: ROBUST enough for the heavy spice loads (Punjabi cuisine uses the most aggressive whole-spice tempering in any Indian regional tradition), QUICK-PRESSURE-COOKABLE (Dhaba turnover demands meat ready in 20-30 minutes from raw), and HEARTY portions ('Khula' — generous and plentiful, befitting Punjabi cultural emphasis on hospitality through abundance). These constraints produce Punjabi-specific cut conventions distinct from the more refined Awadhi-Mughlai precision of Lucknow: GOL-BOTI (uniform 1.5-inch cubes — slightly LARGER than other Indian regions' 1-inch standard, designed to stay structurally intact during high-pressure Dhaba cooking); HATH-CHOPPED KEEMA (COARSER than Lucknawi/Hyderabadi versions — prized for retaining 'snap' against heavy Punjabi spices rather than the melt-in-mouth refinement Awadhi tradition values); and SEENA-CHARBI (explicit chest-fat portion request — the Dhaba Tarka tempering relies on rendered Charbi as the primary cooking medium, more so than other regional traditions). The Punjab + Chandigarh + Haryana joint territory shares butchery patterns despite the political division, with Sector 45 Chandigarh, Mani Majra, and Mohali markets all operating identical conventions. Punjab is the AWADHI-INFLUENCED but NOT AWADHI-DERIVED neighbor: the Mughal court's reach extended to Punjab but the Dhaba tradition is its own distinct identity, less precision-focused, more abundance-focused.",
    notes: "Punjabi Dhaba culinary identity anchor. Cross-references Lucknow Awadhi Summit (this batch) — Punjab is Awadhi-influenced but distinct, more rustic-abundance than refined-precision. Joint Punjab+Chandigarh+Haryana territory in single region.",
  },

  // ----- RAJASTHAN (1 entity) -----
  {
    id: "jaipur_kachri_tenderizer_in",
    name: "Jaipur's Kachri Tenderizer (Desert-Adaptive Food Science)",
    region: "rajasthan",
    maps_to: [
      { canonical_id: "tenderloin", match_type: "cultural", confidence: 0.70, note: "Sula and Pasanda use Kachri marination" },
    ],
    synonyms: ["kachri", "jaipur sula", "rajasthani tenderizer", "wild desert melon"],
    description: "Rajasthan's beef cuisine — concentrated in Jaipur's Old City pockets (Ramganj, Ghat Gate, Sanganer) — operates a distinctive desert-adaptive food-science tradition: KACHRI (Mukia maderaspatana, a wild desert melon) as the natural protease tenderizer of choice for Rajasthani Buffalo. Kachri grows wild across the Thar Desert and contains protease enzymes similar to papain (raw papaya) and bromelain (pineapple) but milder and with a distinctive smoky-sour flavor that complements Rajasthani spice profiles (Lal Maas's Mathania chili, Safed Maans's almond-cardamom, Sula's whole-spice charcoal). The use of Kachri rather than raw papaya is region-specific food-science adaptation: Lucknawi Galouti tradition uses raw papaya (Kachi Papita); Hyderabadi Pasande tradition uses raw papaya; Bihari Kabab tradition uses raw papaya. Jaipur uses KACHRI specifically because raw papaya isn't traditionally available in the desert (papaya is a humid-climate fruit), while Kachri grows wild on Thar dunes. The choice is genuine pre-modern adaptation, not arbitrary regional preference. SULA is the iconic Rajput Kachri-marinated cut — Pasanda strips marinated overnight in Kachri paste + ginger + garlic + yogurt + Mathania chili, then charcoal-grilled (originally a Rajput hunting tradition adapted from game meat to Buffalo). SAFED MAANS (white meat) is the cream-and-almond-based variant requiring Naram (tenderloin) to preserve the pale color. Cross-references the broader pan-cultural enzyme-tenderizer pattern: Vietnamese papaya marinade for Bò Né (Batch 11), Filipino calamansi for Kilawin, Korean pear in bulgogi marinade (Batch 10), Lucknawi raw papaya for Galouti (this batch). Each culture identifies and uses the locally-available enzyme tenderizer; Jaipur's Kachri is the desert-specific expression.",
    notes: "Desert-adaptive food science anchor. Cross-references pan-cultural enzyme-tenderizer pattern (Vietnamese papaya, Korean pear, Filipino calamansi). Region-specific selection of locally-available enzyme tenderizer.",
  },

  // ----- WEST BENGAL (2 entities) -----
  {
    id: "kolkata_biryani_potato_in",
    name: "Kolkata Beef Biryani (the Potato Tradition)",
    region: "west_bengal",
    maps_to: [
      { canonical_id: "chuck_blade", match_type: "cultural", confidence: 0.75, note: "Bone-in shoulder chunks primary" },
      { canonical_id: "brisket", match_type: "cultural", confidence: 0.70, note: "Brisket alternative for fat content" },
    ],
    synonyms: ["kolkata biryani", "calcutta biryani", "potato biryani", "wajid ali shah biryani"],
    description: "Kolkata Beef Biryani is uniquely Bengali — the only major Indian biryani tradition that includes POTATO. The historical origin is direct and well-documented: Wajid Ali Shah (last Nawab of Awadh, exiled by the British in 1856) settled in Metiabruz, a southern suburb of Kolkata, bringing his Awadhi cooks and culinary traditions. Faced with a reduced royal stipend that limited meat purchases, the cooks adapted by adding potato (an Indian newcomer at the time, recently introduced by colonial traders) to extend the meat content. The tradition stuck, became Bengali identity-defining, and now no Kolkata Biryani is considered authentic without potato. The cut requirement: 2-INCH BONE-IN chunks of Shoulder (Chuck) or Brisket with FAT (Charbi) attached — the bone marrow and rendered fat together provide the distinctive Kolkata Biryani richness. Using lean USDA-style stew meat produces a biryani Bengalis recognize as inauthentic — the rice tastes 'flat' and the dish loses its signature richness. West Bengal's COW-LEGAL status (one of the few mainland Indian states alongside Kerala and Goa) means Kolkata Biryani is traditionally cow-based, distinct from Hyderabadi/Karachi/Lucknawi Buffalo biryani traditions. New Market (Hogg Market), Park Circus, and Rajabazar are the historical Biryani-producing markets; Royal Indian Hotel (founded 1905), Aminia, and Arsalan are the iconic Biryani houses maintaining the tradition. Cross-references Pakistani Karachi Nalli Biryani (Batch 16, the cult-favorite marrow-bone variant) for the broader South Asian Biryani axis: Kolkata adds POTATO; Karachi adds NALLI (marrow bones); Hyderabadi adds DUM (sealed steaming); Lucknawi maintains the Awadhi original (smaller meat chunks, lighter spices). Four regional Biryani expressions, one Mughal-court ancestor.",
    notes: "Marquee Kolkata Tier 3 entry. Cross-references Karachi Nalli Biryani (Pakistan, Batch 16) for the South Asian Biryani axis. Documents the unique historical origin (Wajid Ali Shah exile) of the Bengali potato addition.",
  },

  {
    id: "kolkata_beef_chaap_in",
    name: "Kolkata Beef Chaap (Slow-Cooked Pounded Thigh)",
    region: "west_bengal",
    maps_to: [
      { canonical_id: "inside_round", match_type: "cultural", confidence: 0.75, note: "Thigh primary" },
      { canonical_id: "top_sirloin", match_type: "cultural", confidence: 0.70, note: "Rump as alternative" },
    ],
    synonyms: ["beef chaap", "kolkata chaap"],
    description: "Beef Chaap is Kolkata's iconic slow-cooked Mughlai-derived dish — flat wide hand-pounded slices of Cow Thigh or Rump, marinated overnight in yogurt + ginger-garlic + spices, then cooked low-and-slow on a flat tawa (cast-iron skillet) until the meat is fork-tender and bathed in a thick nutty almond/cashew gravy. The cut requirement: hand-pounded flat slices roughly 1cm thick — the pounding mechanically tenderizes the lean cuts (Inside Round or Top Sirloin) before the slow tawa cooking. Cooking time: 45-90 minutes on tawa, with the gravy reducing to a thick paste-like consistency that clings to the meat. Bengali Muslim restaurants (Sufia in New Market, Shiraz Golden Restaurant, Aliah) are the iconic Beef Chaap producers, with multi-generational Chaap-makers operating dedicated tawas. Cross-references Mughlai Pasanda traditions (Hyderabadi, Lucknawi, Bihari Kabab) — Beef Chaap is the Bengali Mughlai variant emphasizing the wide-flat pounded format and slow tawa cooking, distinct from the kebab-grilling format of other regional Pasanda traditions. The dish derives from the same Awadhi-Mughlai inheritance that brought Beef Biryani-with-Potato to Kolkata via the Wajid Ali Shah exile — both dishes are Bengali adaptations of Awadhi originals.",
    notes: "Bengali Mughlai variant of pan-Indian Pasanda traditions. Cross-references Hyderabadi Pasanda (Batch 14b), Lucknawi Pasanda (this batch), Bihari Kabab (this batch). Wide-flat pounded format distinct from kebab-grilling traditions.",
  },

  // ----- INDIA CENTRAL (2 entities) -----
  {
    id: "bihari_kabab_cut_in",
    name: "Bihari Kabab Cut (Third Pasanda Precision Tradition)",
    region: "india_central",
    maps_to: [
      { canonical_id: "tenderloin", match_type: "cultural", confidence: 0.85, note: "Pasanda sliced with-the-grain" },
    ],
    synonyms: ["bihari kabab", "patna kabab", "with-the-grain ribbons"],
    description: "Bihari Kabab is Bihar's iconic Pasanda variant — the THIRD distinct precision tradition using the soft undercut, complementing Hyderabadi (hand-pounded thin sheets, Batch 14b) and Lucknawi (translucent strips, this batch). The Bihari distinctive technique: Pasanda sliced WITH THE GRAIN (opposite of US convention which always slices across the grain) into long thin RIBBONS, marinated overnight with raw papaya (papain enzyme tenderizer) + ginger-garlic + mustard oil + Bihari black pepper. The with-the-grain slicing requires the raw papaya tenderization to make the meat chewable — without papaya, with-the-grain ribbons would be tough. The marinated ribbons are then cooked on direct charcoal at high heat for 5-8 minutes, producing the distinctive Bihari Kabab texture: long fibers that tear apart along the grain (the eating experience) but that have been pre-tenderized by the papaya enzymatic action. This is the architectural TRIANGULATION entry: three regional Pasanda traditions all using `tenderloin` canonical, all derived from one Awadhi origin, all expressing the precision butchery requirement differently. Hyderabadi: hand-pounded into thin sheets that cook in seconds at high heat. Lucknawi: sliced into translucent strips for delicate pan-fry. Bihari: sliced with-the-grain into ribbons for direct charcoal-grilling. Three traditions, one cut, three formats — the cleanest documented Pasanda precision triangulation. Patna's Sabzibagh and Phulwari Sharif markets maintain the multi-generational Bihari Kabab butcher tradition, with specific butchers known for the with-the-grain slicing technique that takes years to master.",
    notes: "Architectural triangulation entry. Cross-references Hyderabadi Pasanda (Batch 14b), Lucknawi Parcha (this batch). Three precision Pasanda traditions from one Awadhi origin.",
  },

  {
    id: "bhopali_pasanda_variant_in",
    name: "Bhopali Pasanda (Wide Rectangular Sheets — Fourth Regional Pasanda Expression)",
    region: "india_central",
    maps_to: [
      { canonical_id: "tenderloin", match_type: "cultural", confidence: 0.80, note: "Wide sheets cut from undercut" },
    ],
    synonyms: ["bhopali pasanda", "bhopali parcha", "nawabi sheets"],
    description: "Bhopali Pasanda is Madhya Pradesh's Nawabi heritage Pasanda variant — the FOURTH documented regional expression (after Hyderabadi hand-pounded sheets, Lucknawi translucent strips, and Bihari with-the-grain ribbons). The Bhopali distinctive: WIDE RECTANGULAR SHEETS (typically 8-12cm wide, 1-2cm thick), distinct from the narrow Hyderabadi sheets and the long thin Lucknawi/Bihari strips. The shape is intentional: Bhopal's iconic dish 'Bhopali Pasande' (note plural) is built around wrapping/folding these wide sheets around stuffings or layering them in flat dishes — the rectangular geometry serves the dish format. Bhopali butchers in the Old City markets (Ibrahimpura, Budhwara) maintain the wider-sheet tradition as a precision specification: a Bhopali Pasande recipe specifies the exact rectangular dimensions, and butchers cut accordingly. The historical origin is Nawabi: Bhopal was a princely state ruled by the Begums of Bhopal (multiple female rulers, 1819-1926) who patronized refined court cuisine paralleling but distinct from Awadhi Lucknow. The Bhopali Nawabi tradition developed its own Pasanda format alongside the Lucknow original. Modern Bhopal Pasanda houses (Hakeem's, Filfora) maintain the wide-rectangular specification, and the 'shape' of the cut is a documented quality test — narrower sheets would produce a different dish, not authentic Bhopali Pasande.",
    notes: "Fourth regional Pasanda expression. Cross-references Hyderabadi (Batch 14b), Lucknawi (this batch), Bihari (this batch). Bhopal's Nawabi heritage paralleled but distinct from Awadhi Lucknow.",
  },

  // ----- NORTHEAST INDIA — NAGALAND (3 entities) -----

  {
    id: "smoked_beef_northeast_axis_in",
    name: "The Smoked Beef Northeast Axis (8 States, 8 Names, One Technique, One Inversion of the Pan-Asian Hot-Boned Convention)",
    region: "nagaland",
    maps_to: [
      { canonical_id: "brisket", match_type: "cultural", confidence: 0.85, note: "Primary smoked-beef canonical across all 8 NE states" },
      { canonical_id: "chuck_roll", match_type: "cultural", confidence: 0.70, note: "Secondary — smoked shoulder and chuck portions" },
      { canonical_id: "striploin", match_type: "cultural", confidence: 0.65, note: "Tertiary — smoked back-meat sections (Doh Sniang variants)" },
    ],
    synonyms: ["smoked beef northeast", "vitho keshu", "sa-rep", "doh masi thang", "suka mansa", "shan-sa meihouba", "dhua-khua mangxo", "mos-sa meihouba", "sukuti smoked", "hearth-smoked beef", "northeast preservation"],
    description: "The Smoked Beef Northeast Axis is the MARQUEE architectural anchor of Batch 18 — the documented EXCEPTION to the pan-Asian Hot-Boned Fresh Meat Convention (`hot_boned_fresh_meat_convention_sa`, Batch 16) covering most of South Asia, East Asia, Southeast Asia, and parts of Africa. Where Lucknow's Garam Gosht (warm meat) standard, Karachi's same-day hot-boned slaughter convention, and pan-East-Asian fresh-market traditions all converge on the architectural principle that 'fresh equals quality,' the Northeast Indian states systematically PRESERVE beef through hearth-smoking and air-drying. The cause is environmental and infrastructural: (a) humid monsoon climates that prevent reliable fresh-meat distribution in tropical NE conditions; (b) historical isolation from cold-chain refrigeration infrastructure; (c) terrain (the hill states are difficult to supply from lowland slaughter centers); (d) cultural traditions developed over centuries of necessity that now constitute regional identity. The axis covers 8 states with 8 distinct local names for what is functionally one technique (hearth-smoking over the family kitchen fire for days to weeks): VITHO KESHU (Naga Angami — Thukhu hearth, weeks-long smoking, the MARQUEE version) — DOH MASI THANG (Khasi/Meghalaya — Dpei hearth) — SA-REP (Mizo — Tap-chhak hearth, intensely dry) — SHAN-SA MEIHOUBA (Meiteilon/Manipur — kitchen hearth) — SUKA MANSA (Arunachal — Haphu hearth) — SUKUTI smoked variant (Sikkim — air-drying plus optional hearth smoke) — DHUA-KHUA MANGXO (Assamese — brought from hill markets to Guwahati) — MOS-SA MEIHOUBA (Tripura tribal — hearth-smoked, used sparingly as flavor enhancer). Beyond the 8-state linguistic continuity, the Smoked NE Axis documents three architectural sub-patterns: THE HOT-BONED INVERSION — smoked > fresh in market preference, exactly opposite the pan-Asian convention. THE USDA-QUALITY INVERSION — smoked beef is often MORE EXPENSIVE than fresh beef in Shillong (Iewduh market), Kohima (Kezie market), and Aizawl (Bara Bazar) markets — a sixth documented USDA-quality inversion extending the pattern of Chinese Chaoshan, Vietnamese/Korean shank, South African yellow fat, Korean Yangji, and Bangladesh Mezban. THE COOKING-METHOD INVERSION — smoked NE beef CANNOT be seared like a US steak; it must be REHYDRATED (boiled or simmered in water/broth) and then BOILED IN STEWS — bamboo shoots (Basti in Arunachal, Khorisa in Assam), Axone (fermented soybean in Nagaland), Berma (fermented fish in Manipur), Mizo Bai (oil-free vegetable stew), Khasi Syrwa. Attempting to grill, sear, or pan-fry smoked NE beef produces a leathery, inedible result — the preservation method DEFINES the cooking method. The Smoked NE Axis is the structural mirror of the Awadhi Summit (Batch 17) — where Lucknow documents the architectural peak of precision butchery driven by dish requirements, Smoked NE documents the architectural exception driven by environmental necessity. Together they bracket the South Asian beef ontology's range: at one end, the most refined Mughal-court precision; at the other, the most ancient tribal preservation. Both are essential to understanding the full architectural foundation of the Indian beef tradition.",
    notes: "MARQUEE TIER 3 ENTRY of Batch 18 — the second cross-regional architectural anchor of the South Asian ontology (paired with `hot_boned_fresh_meat_convention_sa` Batch 16 as the documented exception). Cross-references the 5 documented USDA-quality inversion entries (Chinese Chaoshan, Vietnamese/Korean shank, South African Yellow Fat, Korean Yangji, and the Bangladesh Mezban APEX in `mezhban_chittagong_bd` Batch 16) as the sixth documented case. Cross-references the Lucknow Awadhi Summit (Batch 17) as the structural mirror — both anchors bracket the South Asian beef ontology's range from refined precision (Lucknow) to ancient preservation (Smoked NE). 8 states explicitly enumerated in description. The smoked-meat axis is FULLY CLOSED within this batch.",
  },

  {
    id: "mithun_prestige_meat_in",
    name: "Mithun (Bos frontalis): The Third Bovine Species of South Asia",
    region: "nagaland",
    maps_to: [
      { canonical_id: "striploin", match_type: "cultural", confidence: 0.75, note: "Primary Mithun cut equivalent — back/loin" },
      { canonical_id: "ribeye", match_type: "cultural", confidence: 0.70, note: "Mithun ribeye section — leaner than USDA equivalent" },
      { canonical_id: "tenderloin", match_type: "cultural", confidence: 0.65, note: "Mithun tenderloin — softer cuts for premium preparations" },
    ],
    synonyms: ["mithun", "cuo", "bishon", "sial", "naga mithun", "mizo mithun", "manipur mithun", "arunachal mithun", "meghalaya mithun", "feasts of merit", "hornbill mithun", "bos frontalis"],
    description: "Mithun (Bos frontalis) is the THIRD bovine species documented in the Cutranslator South Asian ontology, joining cow (universal) and water buffalo (Buffalo Belt + sovereign South Asia). A semi-domesticated bovine endemic to Northeast India and parts of Bhutan, Bangladesh, and Myanmar, Mithun has no USDA equivalent and no analog in the European, Latin American, or African beef ontologies — making it one of only THREE documented Non-USDA Bovines in the Cutranslator database (alongside the Pakistani Bachhiya/Bhains duality from Batch 16 and Ladakhi Yak coming in Batch 19). Mithun is documented across 5 NE states under 4 distinct local names: CUO and BISHON (Naga Angami/Sema — Nagaland is the marquee Mithun region) — SIAL (Mizo — Mizoram, where Sial is the highest-prestige meat reserved for Christian celebratory meals and tribal festivals) — MITHUN (Arunachal Pradesh, Manipur, and Meghalaya — adopted as the English/Hindi loanword across these states). The Mithun TEXTURE PROFILE is distinctive and consistent across all 5 states: significantly leaner than cow beef with ZERO intramuscular marbling (no fat flecks within the muscle, unlike USDA Prime); DENSER muscle that doesn't shrink as much as cow during cooking; a 'wilder' or 'gamier' flavor profile that locals describe as 'sweeter' than cow; and approximately 30% LONGER COOK TIME than equivalent cow cuts. The Mithun COOKING-METHOD MANDATE — Mithun MUST be slow-braised, never grilled or seared like a US Ribeye. The dense, lean musculature produces texture failure under high-heat dry cooking: Mithun grilled to US Medium-Rare becomes leathery and tough, the same failure mode as Buffalo grilled to USDA standards (documented in `northern_buff_belt_in`, Batch 17). The correct cooking method is slow-braising with regional chilies and acidic agents: Bhoot Jolokia (Ghost Pepper) in Naga preparations; fermented bamboo shoots in Arunachal preparations; vinegar/tomato in Manipuri preparations; cashew/almond gravies in Meghalaya. Mithun is approximately 2-3x more expensive than regular beef across all 5 states — a documented PRESTIGE MEAT TIER reserved for festivals, ceremonies, and celebratory occasions rather than daily consumption. The Non-USDA Bovine Axis is partially closed by this batch: Mithun (this batch) + Bachhiya/Bhains duality (Batch 16) document 2 of 3 Non-USDA Bovines. Batch 19's Yak entry for Ladakh completes the axis to 3.",
    notes: "Mithun species ACTIVATION ENTRY — this Tier 3 anchors the `species: \"mithun\"` field's first production deployment. 5 Mithun regional name entries ship in this batch (Cuo Nagaland, Bishon Nagaland, Mithun Arunachal/Manipur/Meghalaya, Sial Mizoram, plus format-specific Mithun cuts). Cross-references `bachhiya_bhains_duality_pk` (Pakistan, Batch 16) as the other Non-USDA Bovine documented to date. Cross-references `northern_buff_belt_in` (UP, Batch 17) as the parallel texture-failure mode for Buffalo. Yak (Batch 19, Ladakh) completes the Non-USDA Bovine axis to 3 species.",
  },

  {
    id: "naga_feasts_of_merit_in",
    name: "Naga Feasts of Merit: Mithun as Social Currency",
    region: "nagaland",
    maps_to: [
      { canonical_id: "striploin", match_type: "cultural", confidence: 0.60, note: "Ceremonial Mithun selection — back/loin for distribution" },
      { canonical_id: "ribeye", match_type: "cultural", confidence: 0.55, note: "Ceremonial Mithun prime cuts" },
    ],
    synonyms: ["feasts of merit", "lasue", "zhotho", "naga ceremonial mithun", "hornbill mithun", "angami feasts", "sema feasts", "ao feasts"],
    description: "The Naga Feasts of Merit is the most documented social institution surrounding Mithun consumption in Northeast India — a ceremonial feasting tradition where the sponsor's family slaughters Mithun (Bos frontalis) for community-wide consumption and earns prestige and ceremonial standing in the tribal hierarchy. The institution spans multiple Naga sub-tribes — Angami (Lasue feasts), Sema (Zhotho feasts), Ao, and others — with each sub-tribe maintaining its own ceremonial protocols, but sharing the central architecture: the sponsor's family commits to slaughtering a specific number of Mithun (typically 1-3 animals per feast), preparing the meat in traditional methods (smoked over the Thukhu hearth, slow-braised with Bhoot Jolokia and Axone), and distributing to the entire community across multiple days of feasting. The sponsor's family earns titles, ceremonial garments, and the right to display specific symbols (carved house posts, ceremonial shawls) marking their elevated social standing. The institution predates Christianization (which arrived in Nagaland in the mid-19th century) and has been adapted post-conversion into Christian-festival contexts while retaining the architectural pattern: Mithun as social currency, communal feasting as the redistribution mechanism, prestige earned through provisioning. The modern HORNBILL FESTIVAL (annual, December, Kohima — Nagaland's largest cultural festival, established 2000) is the most visible contemporary Mithun ceremonial consumption, drawing international tourists and serving as the public face of Naga tribal traditions including ceremonial Mithun feasting. The Naga Feasts of Merit is the cultural-prestige half of the Mithun architectural axis — `mithun_prestige_meat_in` documents the culinary tier; this entity documents the social institution.",
    notes: "Cultural-prestige anchor paired with `mithun_prestige_meat_in` as the culinary anchor. Together they form the complete Mithun architectural axis: culinary tier + social institution. Cross-references Hornbill Festival as the modern ceremonial context.",
  },

  // ----- NORTHEAST INDIA — MEGHALAYA (2 entities) -----

  {
    id: "meghalaya_beef_paradise_in",
    name: "Meghalaya: The Indian Beef Paradise (Cow-Legal Map Expansion + Khasi Total-Utility Butchery)",
    region: "meghalaya",
    maps_to: [
      { canonical_id: "chuck_roll", match_type: "cultural", confidence: 0.75, note: "Standard Doh Masi curry cut" },
      { canonical_id: "brisket", match_type: "cultural", confidence: 0.85, note: "Doh Khlein for Jadoh and standard fatty preparations" },
      { canonical_id: "striploin", match_type: "cultural", confidence: 0.70, note: "Doh Sniang for smoking and roasting" },
    ],
    synonyms: ["meghalaya beef", "shillong beef", "khasi beef", "iewduh", "bara bazar", "police bazar", "doh masi", "khasi butchery", "northeast cow-legal"],
    description: "Meghalaya is the Indian state where beef consumption is most culturally normalized — cow is fully legal, widely consumed across the Khasi, Garo, and Jaintia tribal communities, and sold openly at major Shillong markets (Iewduh/Bara Bazar and Police Bazar are the iconic hubs). Meghalaya joins Kerala (Batch 14b), Goa (Batch 14b), and West Bengal (Batch 17) as cow-permissive Indian states — but unlike those three isolated regions, Meghalaya is part of an ENTIRE 8-STATE NORTHEAST COW-LEGAL CLUSTER (all 8 NE states are cow-permissive, documented in this batch). After Batch 18, the Indian Cow-Legal Map covers 11 regions — 3 isolated (Kerala, Goa, West Bengal) + 8 clustered (the NE arc) — a dramatic re-positioning from 'scattered exceptions' to 'South + Northeast Arc.' The existing `india_cow_buff_legal_map` anchor (Maharashtra, Batch 14b) is updated by this batch to reflect the expanded cow-legal map. Meghalaya itself is distinctive even within the cow-legal cluster — the Khasi tribal tradition of TOTAL-UTILITY BUTCHERY uses every part of the animal: bone-in cuts for daily curries (Doh Masi), fatty brisket for Jadoh (the rice-meat-blood dish, requiring Doh Khlein specifically — documented in `khasi_jadoh_cut_in`), shank for Syrwa soups, smoked variants over the Dpei hearth (Doh Masi Thang — member of the Smoked NE Axis with documented USDA-quality inversion: smoked often MORE EXPENSIVE than fresh at Iewduh), dried meat (Doh Tyrkhong), beef intestines for Khasi Dohjem preparations, dried beef skin (Doh Khwu) reconstituted into stews, and blood for Jadoh's signature dark color. Meghalaya is also the only NE state where COW AND MITHUN ARE BOTH WIDELY AVAILABLE — most NE states are predominantly cow OR predominantly Mithun-prestige, but Shillong markets sell both in significant quantities, with Mithun positioned as the premium prestige tier above cow. The Iewduh market is one of the largest traditional markets in Northeast India and the most documented beef market — multi-generational Khasi butchers operate alongside Bengali and Assamese vendors, creating a unique cross-cultural beef trading environment.",
    notes: "Marquee Meghalaya Tier 3 entry. Cross-references `india_cow_buff_legal_map` (Maharashtra, Batch 14b) — this batch UPDATES that anchor's description to expand the cow-legal map from 3 to 11 Indian regions. Cross-references `khasi_jadoh_cut_in` for the Jadoh fat-mandate detail. Cross-references `smoked_beef_northeast_axis_in` for the Doh Masi Thang smoked variant. Cross-references `mithun_prestige_meat_in` for Meghalaya as one of 5 Mithun-prestige states.",
  },

  {
    id: "khasi_jadoh_cut_in",
    name: "Khasi Jadoh: The Fat-Mandate Rice-Meat Dish",
    region: "meghalaya",
    maps_to: [
      { canonical_id: "brisket", match_type: "cultural", confidence: 0.90, note: "Doh Khlein fatty brisket is mandatory" },
      { canonical_id: "short_plate", match_type: "cultural", confidence: 0.70, note: "Short plate as alternative fatty cut" },
    ],
    synonyms: ["khasi jadoh", "jadoh rice", "doh khlein jadoh", "blood rice meat", "khasi rice-meat", "meghalaya rice dish"],
    description: "Jadoh is Meghalaya's iconic Khasi rice-and-meat dish — rice cooked with beef and traditionally with blood, producing a deep mahogany-colored one-pot preparation that defines Khasi celebratory cuisine. The CUT REQUIREMENT is non-negotiable: Doh Khlein (fatty brisket) MUST be used — the fat RENDERS INTO THE RICE during cooking, providing the signature mouthfeel and depth. Lean USDA-style stew meat, lean Mithun (zero marbling), or any low-fat cut PRODUCES FAILED JADOH — dry, broken rice and stringy meat with none of the characteristic richness. This is the same architectural pattern as Kolkata Beef Biryani's potato-tradition and fatty-cut requirement (`kolkata_biryani_potato_in`, Batch 17) — different dish (rice-with-meat-mixed vs layered-biryani-with-meat-and-potato), same fat-as-flavor-vehicle architectural mandate. The dish preparation: bone-in fatty Doh Khlein chunks (1.5-2 inch cubes with bone retained for marrow contribution) are sautéed with ginger, onions, turmeric, and Khasi black sesame paste; rice is added directly into the pot along with water or stock; blood (optional but traditional) is stirred in for color and depth; the pot is sealed and slow-simmered until rice absorbs all liquid and the fat renders fully into the rice. The result is a moist, rich, deep-brown rice-meat one-pot with fall-apart-tender beef chunks. Iewduh market in Shillong is the iconic Doh Khlein source for traditional Jadoh — multi-generational Khasi butchers specifically cut and sell Doh Khlein with the appropriate fat-to-meat ratio (typically 30-40% fat by weight) for Jadoh customers.",
    notes: "Cross-references `kolkata_biryani_potato_in` (Batch 17) as the parallel rice-meat fat-mandate from Bengal. Both dishes embody the architectural pattern: fatty brisket renders into rice as flavor vehicle, lean cuts produce failed result. Cross-references `meghalaya_beef_paradise_in` for the broader Khasi total-utility butchery context.",
  },

  // ----- NORTHEAST INDIA — MANIPUR (1 entity) -----

  {
    id: "manipuri_berma_beef_pairing_in",
    name: "Manipuri Berma + Fatty Brisket: The Fermentation-Fat Axis (Pan-NE Pattern)",
    region: "manipur",
    maps_to: [
      { canonical_id: "brisket", match_type: "cultural", confidence: 0.85, note: "Tha-sa fatty brisket is mandatory for Berma pairing" },
      { canonical_id: "short_plate", match_type: "cultural", confidence: 0.70, note: "Short plate as alternative fatty cut" },
    ],
    synonyms: ["manipuri berma", "berma cut", "fermented fish beef", "tha-sa berma", "shan-sa ngari thongba", "meitei fermentation", "northeast fermentation-fat axis"],
    description: "Manipuri Berma pairing is the most documented expression of a previously-unnamed pan-Northeast architectural axis: Northeast Indian cuisine systematically pairs FERMENTED UMAMI SOURCES with FATTY BEEF BRISKET cuts. The fat is required to MELLOW the pungent fermented flavor into a creamy, savory result — lean cuts produce bitter, one-dimensional failures. Berma (Manipuri Meitei fermented fish) is the most pungent and distinctive of the fermented agents; cooking Berma with lean meat produces an aggressive umami that overwhelms the palate, while cooking it with fatty Tha-sa (Manipuri brisket) yields a balanced, creamy, intensely savory preparation that is foundational to Manipuri/Meitei cuisine. The signature dish is Shan-sa Ngari Thongba — beef cooked with Berma fermented fish — which Imphal home cooks and restaurant kitchens prepare across multiple generations as the definitive Manipuri beef preparation. The Fermentation-Fat Axis extends beyond Manipur to TWO other documented NE patterns: NAGA AXONE — Nagaland's fermented soybean (Axone) similarly requires fatty Vitho Kezhu brisket for the same architectural reason (`naga_axone_fatty_beef_in`); TRIPURA TRIBAL CHAKHWI — Tripura's tribal stew with bamboo shoots and alkali baking soda requires fatty Buk-er brisket as the cooking-oil substitute in zero-oil tribal preparations (Buk-er regional name in `northeast_other`). Three states, three fermented agents (fish, soybean, bamboo-shoot+alkali), one architectural pattern: fermented umami + fatty brisket = the NE flavor signature. This axis has NO PRECEDENT IN DEPLOYED DATA — it is the first documented systematic fermentation-fat coupling in the Cutranslator database. The Fermentation-Fat Axis is FULLY CLOSED WITHIN BATCH 18 — the three documented states cover the architectural range.",
    notes: "Cross-references `naga_axone_fatty_beef_in` as the paired Nagaland anchor. Together they document the Fermentation-Fat Axis (fully closed in Batch 18). Cross-references the Tripura tribal Chakhwi cut (within `northeast_other` regional names) as the third state in the axis. This is one of TWO new architectural axes seeded by Batch 18 (the other is the Smoked NE Axis).",
  },

  // ----- NORTHEAST INDIA — NAGALAND (1 additional entity — Axone pairing) -----

  {
    id: "naga_axone_fatty_beef_in",
    name: "Naga Axone + Vitho Kezhu: The Fermentation-Fat Axis (Paired with Manipuri Berma)",
    region: "nagaland",
    maps_to: [
      { canonical_id: "brisket", match_type: "cultural", confidence: 0.85, note: "Vitho Kezhu fatty brisket is mandatory for Axone pairing" },
      { canonical_id: "short_plate", match_type: "cultural", confidence: 0.70, note: "Short plate as alternative fatty cut" },
    ],
    synonyms: ["naga axone", "axone beef", "fermented soybean beef", "vitho kezhu axone", "naga fermentation", "fatty brisket axone"],
    description: "Naga Axone pairing is the Nagaland half of the pan-Northeast Fermentation-Fat Axis (the Manipuri Berma pairing is the other half — see `manipuri_berma_beef_pairing_in`). Axone (Naga fermented soybean — also spelled 'Akhuni' in some sub-tribes) is the pungent umami foundation of Naga cuisine, and cooking Axone with beef requires FATTY BRISKET (Vitho Kezhu) specifically. The architectural reason is identical to the Manipuri Berma pattern: the fat MELLOWS the pungent fermented flavor into a creamy, savory result; lean cuts produce bitter, one-dimensional failures. Vitho Kezhu (the Angami Naga term for fatty meat) is sold specifically at Kohima's Kezie Market as the Axone-grade cut — multi-generational butchers know which fatty sections best suit the Axone preparation. The signature dish is BEEF WITH AXONE — slow-braised Vitho Kezhu chunks with Axone paste, Bhoot Jolokia (Ghost Pepper), tomato, and ginger, simmered until the fat has rendered into a thick, creamy sauce coating tender beef chunks. The dish is the most iconic Naga beef preparation and the most international-recognizable Naga dish (Hornbill Festival vendors prepare it as the showcase dish for international tourists). Alternative Axone preparations include AXONE WITH SMOKED BEEF — combining the Fermentation-Fat Axis with the Smoked NE Axis, using Vitho Keshu (smoked, also documented in this batch) alongside Vitho Kezhu (fatty) for an intensified flavor profile that is the highest expression of Naga beef cooking. The Fermentation-Fat Axis closes within Batch 18: Manipuri Berma + Naga Axone + Tripura tribal Chakhwi document the three known fermentation-fat couplings in NE Indian cuisine.",
    notes: "Paired with `manipuri_berma_beef_pairing_in` as the other half of the Fermentation-Fat Axis. Cross-references `smoked_beef_northeast_axis_in` for the Axone+Smoked combination as the highest Naga preparation. Cross-references `mithun_prestige_meat_in` — note that Axone preparations use Vitho Kezhu (fatty COW brisket), not Mithun, because Mithun's zero marbling makes it unsuitable for the fat-mellowing function.",
  },

  // ----- HIMALAYAN INDIA — LADAKH (3 entities) -----

  {
    id: "yak_in_ladakh_in",
    name: "Yak (Bos grunniens): The Third Non-USDA Bovine — Ladakh Species Activation",
    region: "ladakh",
    maps_to: [
      { canonical_id: "chuck_roll", match_type: "cultural", confidence: 0.75, note: "Yag-sha (generic Yak beef) — the primary winter beef in Leh" },
      { canonical_id: "striploin", match_type: "cultural", confidence: 0.65, note: "Yak back meat (Yak Dhak-sha)" },
      { canonical_id: "brisket", match_type: "cultural", confidence: 0.65, note: "Yak fatty/chest (Yak Tsa-sha / Yak Boso)" },
    ],
    synonyms: ["yak", "yag-sha", "bos grunniens", "ladakhi yak", "winter yak", "yak beef", "yak meat", "tibetan yak", "bhoti yak", "non-usda bovine", "third bovine"],
    description: "Yak (Bos grunniens, domesticated; locally 'Yag-sha' in Ladakhi/Bhoti/Tibetan) is the THIRD and FINAL bovine species to activate in the Cutranslator South Asian ontology, completing the Non-USDA Bovine axis alongside Water Buffalo (Batch 16) and Mithun (Batch 18). With this activation, all four species in the Species union ('cow' | 'buffalo' | 'mithun' | 'yak') are live in production. Yak is the primary 'beef' in Leh (Ladakh) during winter months — Ladakh is Buddhist-majority and legally cow-permissive (no cow-protective laws), but Yak dominates the winter market because Yak herds are driven down from the high pastures in the pre-winter months, providing abundant fresh meat when Leh's altitude makes any supply chain difficult. The Yak TEXTURE AND COOKING PROFILE (consistent across Ladakh and Sikkim): (1) Color — much darker than cow beef, deep burgundy-red even when raw; (2) Flavor — more intense, slightly gamier, with an earthy richness absent from grain-fed cow beef; (3) Fat — ZERO intramuscular marbling; all fat is external (the Boso fat layer on the outside of the cut); (4) Cooking time — approximately 30% LONGER than equivalent cow cuts, compounded by altitude where water boils at ~88°C (see `ladakh_altitude_cooking_in`); (5) Grill failure mode — grilling Yak like a US Ribeye produces 'as tough as leather' results because the zero-marbling lean muscle tightens under direct heat; (6) Optimal method — slow braising or pressure cooking is mandatory, not optional. The Boso (external fat) layer is essential — a 'good cut' of Yak has a healthy white fat layer on the outside that provides the juiciness the zero-marbling interior cannot supply. The Non-USDA Bovine axis is now COMPLETE: Water Buffalo's Bachhiya/Bhains duality (Pakistan, Batch 16), Mithun's Bos frontalis prestige tier (5 NE states, Batch 18), and Yak's Bos grunniens Himalayan winter profile (Ladakh primary + Sikkim retroactive activation, Batch 19).",
    notes: "MARQUEE BATCH 19 TIER 3 ENTRY. Activates the fourth and final species in the Species union. Cross-references `mithun_prestige_meat_in` (Batch 18) and `bachhiya_bhains_duality_pk` (Batch 16) as the other two Non-USDA Bovines completing the axis. Cross-references `ladakh_altitude_cooking_in` for the physics constraint that compounds Yak's already long cooking requirement. Cross-references `yak_ko_masu` in Sikkim (retroactively activated in Batch 19) as the second documented Yak region. Cross-references `ladakh_sha_skam_in` for the Yak-specific Sha-skam winter dried-beef production.",
  },

  {
    id: "ladakh_sha_skam_in",
    name: "Ladakh Sha-skam: Closes the Himalayan Dried-Beef Axis (paired with Sikkim Sukuti)",
    region: "ladakh",
    maps_to: [
      { canonical_id: "bottom_round_roast", match_type: "cultural", confidence: 0.75, note: "Primary Sha-skam source — round/rump for long strips" },
      { canonical_id: "outside_round", match_type: "cultural", confidence: 0.70, note: "Outside round as alternative Sha-skam source" },
    ],
    synonyms: ["sha-skam", "ladakhi dried beef", "air-dried beef", "himalayan dried beef", "ladakhi jerky", "yak sha-skam", "bhoti dried beef"],
    description: "Ladakh Sha-skam is the Himalayan Dried-Beef Axis closure — the Ladakhi/Bhoti version of the same food-preservation technique that Batch 18 documented in Sikkim as Sukuti. Large strips of beef (cow or Yak, depending on season) are air-dried in the cold, dry Himalayan wind at Leh's altitude (~3,500m). The Sha-skam shares every architectural property with Sikkim Sukuti: UNSALTED AND UNFLAVORED (unlike US jerky or Lakshadweep Ularthu, which are salted); a COOKING INGREDIENT not a snack (inedible until further processed — pounded or slow-simmered for hours); a SEMI-FINISHED INPUT to multiple preparations rather than a complete ready-to-eat product. Differences from Sukuti: the Ladakhi air-drying process is slightly drier (the ultra-low humidity at ~3,500m Leh accelerates drying compared to Gangtok's Himalayan valley), the beef strips tend to be larger, and the processing typically favors long simmering over Sukuti's typical pound-then-fry method (though pounding is also used). The Yak-Sha-skam variant (winter production) is even harder and leaner than cow Sha-skam — the Yak's zero marbling produces an extremely dense dried product. The architectural lesson both Sukuti and Sha-skam embody: PRESERVATION METHOD ≠ FINAL PREPARATION. The two regions were separated by ~1,500km of Himalaya and different languages (Sikkim Nepali vs Ladakhi Bhoti) but converged on identical solutions to identical problems (no refrigeration, brutal winters, need for portable concentrated protein). The Himalayan Dried-Beef Axis is FULLY CLOSED — no further documentation is needed.",
    notes: "CLOSES the Himalayan Dried-Beef Axis seeded by `sikkim_sukuti_cooking_ingredient_in` (Batch 18). Cross-references `yak_in_ladakh_in` for the Yak-Sha-skam variant. Cross-references `lakshadweep_island_isolation_in` for contrast — Lakshadweep Ularthu is SALTED (salt-preservation) vs Sha-skam's UNSALTED (air-drying), a critical distinction for the drying-vs-salting axis in Indian preservation traditions.",
  },

  {
    id: "ladakh_altitude_cooking_in",
    name: "The Altitude-Cooking Correction: A Physics Mandate at Himalayan Elevation",
    region: "ladakh",
    maps_to: [
      { canonical_id: "chuck_roll", match_type: "cultural", confidence: 0.50, note: "Applies across all braised/slow-cooked cuts" },
      { canonical_id: "brisket", match_type: "cultural", confidence: 0.50, note: "Brisket braise is the canonical example: 3hr Delhi → 5hr+ Leh" },
    ],
    synonyms: ["altitude cooking", "high altitude beef", "leh cooking", "shimla cooking", "boiling point drop", "pressure cooker altitude", "himalayan cooking"],
    description: "Two Batch 19 regions (Ladakh at ~3,500m+ and Himachal Pradesh at ~2,200m) sit at elevations where water's boiling point drops materially, producing cooking outcomes that CANNOT be corrected by simply following a lowland recipe. At Leh (Ladakh): water boils at ~88°C vs 100°C at sea level. At Shimla (Himachal Pradesh): water boils at ~93°C. The consequences are architectural, not marginal: a braised brisket that requires 3 hours in Delhi requires 5+ hours in Leh because the maximum achievable simmer temperature is 12°C lower. A pot roast that 'should' be tender at 2 hours in Mumbai requires significantly longer in Shimla. This effect is COMPOUNDED by the lean, dense musculature of the primary local meats — Yak (zero marbling, 30% longer cook time than cow even at sea level) and Buffalo (lean, 30-40% longer than cow) — creating a multiplicative cooking time challenge unique to these regions. The architectural implication: PRESSURE COOKING SHIFTS FROM RECOMMENDED TO MANDATORY at altitude. A US or lowland-Indian braising recipe will SYSTEMATICALLY UNDER-COOK at Himalayan elevation regardless of the cook's skill or intent — it is a physics constraint, not a technique failure. This is the FIRST physics-driven (rather than culture- or legal-driven) cooking constraint documented in the entire Cutranslator ontology. All prior corrections (Buffalo's pressure-cooking requirement, the Jaipur Kachri tenderizing, the Pondicherry wine-vinegar marination) are culturally adaptive. The altitude correction is thermodynamically imposed. The archetype: a Leh home cook pressure-cooking Sha-skam + Yag-sha for 45 minutes achieves a result that would require 3+ hours of low-simmering in a conventional pot due to the combined effect of altitude boiling-point reduction and lean-meat density.",
    notes: "FIRST physics-driven cooking constraint in the database. Cross-references `yak_in_ladakh_in` for the Yak lean-meat component of the multiplicative cooking challenge. Cross-references `northern_buff_belt_in` (Batch 17) for the Buffalo lean-meat pressure-cooking requirement that compounds at altitude. The Himachal Pradesh altitude effect (~2200m, boiling at ~93°C) is documented in `bade ka mansa himachal` regional name notes.",
  },

  // ----- HIMALAYAN INDIA — JAMMU & KASHMIR (1 entity) -----

  {
    id: "kashmiri_wazwan_pounded_mince_in",
    name: "Kashmiri Wazwan Pounded Mince: The Third Manual-Mince Tradition (POUND, not Chop or Grind)",
    region: "jammu_kashmir",
    maps_to: [
      { canonical_id: "bottom_round_roast", match_type: "cultural", confidence: 0.80, note: "Primary Wazwan mince source — lean rump for paste-emulsification" },
      { canonical_id: "top_round_steak", match_type: "cultural", confidence: 0.70, note: "Top round as alternative pounding-grade source" },
    ],
    synonyms: ["wazwan mince", "gosh-par mince", "pounded mince", "gushtaba mince", "rista mince", "kashmiri meatball", "waza butchery", "wazwan"],
    description: "Srinagar's Waza (master-chef) culture produces a butchery technique with no machine equivalent and no close parallel in the global database: Wazwan Mince is meat (from the leg or rump — Buffalo only in J&K) placed on a stone plinth and POUNDED with wooden mallets (Gosh-par, literally 'meat-beater') until it reaches a paste-like, emulsified consistency. This paste is used for Gushtaba and Rista — the two signature Wazwan meatball dishes. The pounding technique is architecturally distinct from both machine grinding AND hand-chopping (the Awadhi/Hyderabadi Hath-ka-Keema): machine grinding homogenizes into uniform fine particles; hand-chopping (Hath-ka-Keema) produces a textured, grainy irregular mince; Wazwan pounding EMULSIFIES the lean Buffalo meat with its own fat into a smooth, cohesive paste that holds as large, soft meatballs without binders (no egg, no bread, no filler). The key technical insight: pounding breaks down the muscle fibers into a near-colloidal state, releasing intracellular proteins that act as their own binding agent when heat-set. A machine-ground version of Gushtaba — even with identical ingredients — produces grainy, crumbling meatballs that cannot replicate the smooth, bouncy, dense texture of properly pounded Wazwan Mince. The Wazwan's social context: a multi-course feast of 30+ dishes prepared by a team of Waza chefs, anchored by the Gushtaba (served last as the ceremonial finale) and the Rista (served earlier in the sequence). The Waza is a hereditary profession — Srinagar's Waza families trace their lineage back to Mughal-era court chefs and maintain their pounding techniques through apprenticeship. This entry extends the Precision Butchery axis (Hyderabad peel/parcha/rawa + Lucknow Awadhi pounding traditions) with a third regional manual technique: Hyderabad CHOPS, Lucknow SEPARATES muscles, Kashmir POUNDS.",
    notes: "Third manual-mince tradition in the database. Cross-references `hyderabad_precision_butchery_in` (Batch 14b — Hath-ka-Keema hand-CHOP) and `lucknow_awadhi_summit_in` (Batch 17 — Awadhi muscle-separation precision) as the related-but-distinct precision mince/cut traditions. J&K beef is BUFFALO ONLY — cow is legally protected under J&K's cow-slaughter laws.",
  },

  // ----- COASTAL-COLONIAL INDIA (3 entities) -----

  {
    id: "pondicherry_french_bridge_in",
    name: "Pondicherry French Primal Vocabulary: The Full French Primal Bridge",
    region: "india_coastal_colonial",
    maps_to: [
      { canonical_id: "tenderloin", match_type: "cultural", confidence: 0.85, note: "Filet / Faux-filet — the French primal vocabulary anchor" },
      { canonical_id: "striploin", match_type: "cultural", confidence: 0.80, note: "Contre-filet — the back-loin distinction preserved in French" },
      { canonical_id: "brisket", match_type: "cultural", confidence: 0.80, note: "Poitrine — the chest/brisket with the French term" },
    ],
    synonyms: ["pondicherry french", "puducherry french", "filet pondy", "contre-filet", "poitrine pondy", "jarret pondy", "queue de boeuf", "boeuf bourguignon", "french butchery india", "colonial french beef"],
    description: "Pondicherry (Puducherry) is the most documented Indo-French culinary bridge in India — the former French colonial enclave (1674–1954) preserves a living French primal vocabulary at Goubert Market and White Town butchers that is functionally unknown in the surrounding Tamil Nadu. The key architectural insight: French vocabulary operates ALONGSIDE Tamil vocabulary in the SAME MARKET for the SAME MUSCLES. 'Filet' and 'Naram'/'Undercut' refer to the same tenderloin; 'Poitrine' and 'Nenju'/'Kozhuppu' are the same brisket; 'Jarret' and 'Nalli'/'Kaal' are the same shank. This is the most direct validation of Cutranslator's core thesis (canonical anatomy as the unifying layer beneath divergent regional names) anywhere in the database — the divergence is happening WITHIN a single market, not across countries. The French bridge preserves the FULL FRENCH PRIMAL VOCABULARY: Filet (tenderloin), Faux-filet (striploin/contre-filet), Contre-filet (back loin), Poitrine (brisket), Jarret (shank), Queue de bœuf (oxtail) — a precision that distinguishes between Filet sub-sections that the Portuguese bridges (Goa, Daman) do not maintain. CRITICAL COOKING ADAPTATION: Pondicherry's French cooking traditions require the Buffalo-Lean Vinegar Correction — lean Buffalo has zero marbling, so French braises (Bœuf Bourguignon) require DOUBLE marination in red wine + vinegar compared to a French recipe for European beef. The acid breaks down the tough Buffalo fibers that the missing intramuscular fat would normally tenderize. This is the same pattern as Goa's Vindaloo ('vin' = vinegar from Portuguese 'vinho e alhos') and Daman's vinegar-roast tradition — all three colonial bridges independently arrived at acid-as-Buffalo-tenderizer because all three were adapting European cooking to lean Indian Buffalo.",
    notes: "French primal bridge anchor. Cross-references `indo_european_colonial_bridges_in` as the pan-axis entity covering all three colonial bridges. Cross-references `daman_portuguese_bridge_in` as the Daman parallel. Cross-references the deployed Goa data (Batch 14b) as the Portuguese bridge partner. The critical distinction: French bridge = PRIMAL vocabulary (Filet/Contre-filet/Poitrine/Jarret); Portuguese bridges = PREPARATION vocabulary (Salt Meat, Bistek, Vindaloo).",
  },

  {
    id: "daman_portuguese_bridge_in",
    name: "Daman Portuguese Preparation Vocabulary: The Salt Meat and Bistek Bridge",
    region: "india_coastal_colonial",
    maps_to: [
      { canonical_id: "brisket", match_type: "cultural", confidence: 0.80, note: "Salt Meat (carne salgada) — Portuguese brine-pickled brisket" },
      { canonical_id: "bottom_round_roast", match_type: "cultural", confidence: 0.70, note: "Damanese Beef Roast — whole round with vinegar-tenderizing" },
      { canonical_id: "tenderloin", match_type: "cultural", confidence: 0.75, note: "Bistek (bife) — thin-sliced tenderloin" },
    ],
    synonyms: ["daman portuguese", "salt meat daman", "bistek daman", "rabo daman", "damanese roast", "toddy vinegar beef", "portuguese beef india", "carne salgada"],
    description: "Daman is the second Indo-Portuguese culinary bridge in the Coastal-Colonial axis — a former Portuguese colony (1531–1961) that preserves Portuguese PREPARATION vocabulary at Moti Daman butchers. Where Pondicherry preserves French PRIMAL vocabulary (Filet, Contre-filet, Poitrine), Daman preserves Portuguese PREPARATION vocabulary (Salt Meat, Bistek, Rabo). The signature preparations: SALT MEAT (carne salgada) — Buffalo brisket pickled in brine with vinegar and spices, a direct inheritance from the Age-of-Sail Portuguese practice of salt-preserving beef for long voyages. The Damanese Catholic community maintained this tradition long after refrigeration made it unnecessary, because the salt-cure flavor became a cultural marker. BISTEK (bife) — thin-sliced tenderloin cooked as a simple pan-fry, the Portuguese equivalent of a steak. DAMANESE BEEF ROAST — whole round or rump roasted with mandatory toddy vinegar (or cider vinegar) and added lard; the vinegar is both a tenderizer for lean Buffalo and a flavor-preservation technique from colonial-era cooking. RABO (rabo de boi, oxtail) — slow-simmered oxtail stew in the Portuguese tradition. The critical distinction from Pondicherry: Daman's Portuguese vocabulary is PREPARATION-FOCUSED (method names, dish names) rather than primal-focused (muscle names). A Daman Catholic butcher will know 'Salt Meat' but may use Hindi 'Seena' for the cut itself — the Portuguese overlay is on the dish, not the anatomy. Both Daman and Goa were Portuguese colonies and share the Salt Meat / Bistek vocabulary, while Pondicherry's French bridge uses the full primal-anatomy vocabulary system.",
    notes: "Portuguese preparation bridge anchor. Cross-references `indo_european_colonial_bridges_in` as the pan-axis entity. Cross-references `pondicherry_french_bridge_in` for the parallel but distinct French primal bridge. Cross-references Goa data (Batch 14b) as the other deployed Portuguese bridge — Goa and Daman share the Salt Meat/Bistek vocabulary. The distinction between Daman and Goa: Daman's Catholic community is smaller and the colonial food culture is less internationally known, but the same Portuguese preparation vocabulary survives.",
  },

  {
    id: "indo_european_colonial_bridges_in",
    name: "The Indo-European Colonial Bridges: Three European Cut Vocabularies on Indian Buffalo",
    region: "india_coastal_colonial",
    maps_to: [
      { canonical_id: "tenderloin", match_type: "cultural", confidence: 0.60, note: "Filet (Pondicherry) / Bistek (Daman) / Undercut (Goa) — three European names for the same tenderloin" },
      { canonical_id: "brisket", match_type: "cultural", confidence: 0.60, note: "Poitrine (Pondicherry) / Salt Meat (Daman/Goa) / Peito — the brisket in three colonial traditions" },
    ],
    synonyms: ["colonial bridges", "indo-european beef", "portuguese beef india", "french beef india", "colonial cut vocabulary", "european beef names india", "goa daman pondicherry"],
    description: "The Indo-European Colonial Bridges axis documents three surviving European cut vocabularies layered onto Indian Water Buffalo — the most direct architectural evidence of Cutranslator's core thesis (canonical anatomy as universal unifying layer) in the database. Three European colonial powers established beef-butchery traditions in India that survived decolonization as living cultural practices: GOA (Portuguese, Batch 14b) — the first and most internationally known bridge: Undercut/Lomo, Bistek, Salt Meat, Língua (tongue). DAMAN (Portuguese, this batch) — the sister Portuguese bridge to Goa, sharing Salt Meat / Bistek / Rabo vocabulary with a smaller but parallel Catholic community. PONDICHERRY (French, this batch) — the structurally distinct French primal bridge: Filet/Faux-filet, Contre-filet, Poitrine, Jarret, Queue de bœuf — preserving the full French anatomical vocabulary rather than preparation terms. The cross-regional insight: the SAME ANATOMICAL MUSCLE carries a European name AND an Indian name in the same market — Tenderloin is 'Filet' to a Pondicherry Francophone and 'Naram' to a local Tamil; Brisket is 'Poitrine' to one customer and 'Nenju/Seena' to another. This coexistence of vocabularies within a single market is the clearest demonstration in the database that canonical beef anatomy functions as the universal unifying layer beneath divergent regional naming traditions. An important architectural distinction separates the two colonial bridge types: the FRENCH BRIDGE (Pondicherry) preserves the PRIMAL ANATOMY vocabulary (Filet/Contre-filet distinguish muscle sub-sections), while the PORTUGUESE BRIDGES (Goa, Daman) preserve PREPARATION vocabulary (Salt Meat, Bistek) more than primal anatomy. The Buffalo-Lean Vinegar/Wine Correction applies across all three bridges: acid marination (wine, vinegar, toddy-vinegar) is the shared adaptation for using European cooking techniques on lean Indian Buffalo — replacing fat-based tenderizing with acid-based tenderizing. The Indo-European Colonial Bridges axis is FULLY CLOSED in Batch 19 — all three documented colonial bridges are deployed.",
    notes: "PAN-AXIS ANCHOR for all three colonial bridges. Cross-references `pondicherry_french_bridge_in` (Batch 19) and `daman_portuguese_bridge_in` (Batch 19) as the new bridges. Cross-references Goa data (Batch 14b) as the deployed anchor. The axis is FULLY CLOSED — the three colonial bridges document the complete range of European-Indian beef vocabulary overlap.",
  },

  // ----- INDIAN ISLANDS (2 entities) -----

  {
    id: "lakshadweep_island_isolation_in",
    name: "Lakshadweep: Island Isolation, Coconut-Oil Correction, and Ularthu Salt-Preservation",
    region: "india_islands",
    maps_to: [
      { canonical_id: "bottom_round_roast", match_type: "cultural", confidence: 0.75, note: "Ularthu (salted dried beef) — round/rump cuts for drying" },
      { canonical_id: "brisket", match_type: "cultural", confidence: 0.70, note: "Nenju (brisket) prized for fat to compensate lean island cattle" },
    ],
    synonyms: ["lakshadweep beef", "kavaratti beef", "ularthu", "island dried beef", "coconut beef", "island isolation", "kothu lakshadweep"],
    description: "Lakshadweep (Kavaratti island group) is the most isolated region in the entire Indian beef dataset — a 100% Muslim island territory in the Arabian Sea where cow is the standard beef and supply-chain isolation has produced a distinctive preservation-and-correction culture with no mainland parallel. Three architectural patterns define Lakshadweep's beef ontology: THE COCONUT-OIL CORRECTION — island cattle are exceptionally lean (small, grass-fed, no grain supplementation); to compensate for zero marbling, Lakshadweep cuisine uses extraordinary quantities of coconut oil as the juiciness vehicle. A US 'low-fat' cooking method produces dry, stringy results. This parallels Kerala's grass-fed-lean coconut-oil pattern (Batch 14b) but at a more extreme isolation — Kavaratti has no mainland access for much of the monsoon season, so the oil-correction is not a preference but a necessity. ULARTHU (salted sun-dried beef) — salted strips of beef sun-dried on the beaches or over hearths; a survival staple for long sea voyages (inter-island transport, mainland supply runs) and monsoon-season supply gaps. Architecturally distinct from the Himalayan dried-beef axis: Ularthu IS SALTED (salt-preservation, closer to salt-cod preservation logic), while Sikkim Sukuti and Ladakh Sha-skam are UNSALTED (pure air-drying for cooking-ingredient uses). KOTHU (beaten mince) — hand-beaten with a heavy knife into irregular bits (not machine-ground) to absorb coconut-oil marinades; the same hand-mince tradition seen in Hyderabad/Lucknow (Hath-ka-Keema) but driven by different logic (marinade absorption rather than kebab texture). Lakshadweep joins the cow-permissive expansion of the India Cow-Legal Map (13 regions total after Batch 19 — see `india_cow_buff_legal_map`).",
    notes: "Cross-references `india_cow_buff_legal_map` (cow-permissive expansion, 11 → 13 regions in Batch 19). Cross-references `ladakh_sha_skam_in` and `sikkim_sukuti_cooking_ingredient_in` for contrast — Ularthu is SALTED, Sha-skam and Sukuti are UNSALTED; important architectural distinction within the Indian dried-beef traditions. Cross-references the Kerala coconut-oil-lean pattern (Batch 14b) as the mainland parallel.",
  },

  {
    id: "andaman_crossroads_in",
    name: "Andaman & Nicobar: The Pan-Indian Settler Crossroads and Fresh vs Frozen Distinction",
    region: "india_islands",
    maps_to: [
      { canonical_id: "chuck_roll", match_type: "cultural", confidence: 0.70, note: "Both fresh local and frozen mainland chuck cuts" },
      { canonical_id: "brisket", match_type: "cultural", confidence: 0.65, note: "Island cattle brisket — lean, grass-fed" },
    ],
    synonyms: ["andaman beef", "port blair beef", "aberdeen bazar beef", "fresh island beef", "frozen mainland beef", "andaman crossroads", "junglighat market"],
    description: "Andaman & Nicobar (Port Blair) occupies a unique structural position in the Indian beef ontology — a cow-permissive island territory populated by pan-Indian settlers (Bengali, Tamil, Hindi-speaking, Odia, Malayali communities) with no single dominant regional cuisine. The most architecturally significant pattern is the FRESH VS FROZEN DISTINCTION: Port Blair's Aberdeen Bazar and Junglighat market operate two parallel tiers of beef availability: FRESH LOCAL BEEF — island cattle slaughtered on-island, more expensive, small/lean/grass-fed, intensely flavored, with a specific 'island character' that local long-term settlers prize. FROZEN MAINLAND IMPORTS — block-frozen beef shipped from Chennai or Kolkata, cheaper, larger cuts (from mainland industrial cattle), lower quality relative to local fresh. The Fresh vs Frozen tension mirrors the global 'fresh local vs industrial frozen' debate but in a particularly visible form — the price premium for fresh island beef is significant and explicitly acknowledged at the point of sale. The multi-ethnic settler character of Andaman means Aberdeen Bazar butchers must service multiple regional-vocabulary traditions simultaneously: a Bengali customer asks for 'Mangsho' conventions; a Tamil customer uses 'Erachi' vocabulary; a Hindi-speaking customer uses 'Gosht/Maans' terms. This makes Andaman butchers among the most linguistically flexible in the Indian dataset — they operate across at least four concurrent regional vocabularies. Andaman joins the cow-permissive expansion of the India Cow-Legal Map (13 regions total after Batch 19 — see `india_cow_buff_legal_map`).",
    notes: "Cross-references `india_cow_buff_legal_map` (cow-permissive expansion, 11 → 13 regions in Batch 19 with the addition of Andaman & Nicobar + Lakshadweep). The Fresh vs Frozen distinction is a NEW architectural pattern — prior regions in the database document local naming conventions but not dual-tier fresh/frozen retail as a structural feature. Cross-references `lakshadweep_island_isolation_in` as the companion island entry with a contrasting isolation profile.",
  },

  // ----- MONGOLIA + MYANMAR (8 entities — Batch 22) -----

  {
    id: "mongolian_borts_airdried_mn",
    name: "Mongolian Borts (Air-Dried Beef)",
    region: "mongolia",
    maps_to: [
      { canonical_id: "bottom_round_roast", match_type: "close", confidence: 0.75, note: "Round/rump preferred for lean-strip drying" },
      { canonical_id: "hind_shank", match_type: "approximate", confidence: 0.55, note: "Shank strips also used for borts when round is scarce" },
    ],
    synonyms: ["borts", "борц", "air-dried mongolia", "steppe jerky", "borts makh", "winter borts"],
    description: "Mongolian Borts is the architectural FLAGSHIP of the Mongolian beef dataset — the most extreme meat-preservation technology in the database, exceeding even the Himalayan Sukuti axis in severity. Borts is NOT merely air-dried like Bhutan's Sukam or Ladakh's Sha-skam: the Mongolian steppe tradition subjects lean beef strips (from Round or Shank) to a MULTI-STAGE EXTREME DEHYDRATION that ultimately reduces a full cattle carcass to a quantity of dried meat that fits inside a single cow stomach used as the storage vessel — the canonical Mongolian borts batch is the entire winter beef supply for a nomadic family, compressed into one stomach-sized package. The physics are extraordinary: 30kg of fresh beef yields approximately 3–4 kg of borts through a combination of (1) initial air-drying on the ger (yurt) poles in sub-zero Mongolian winter wind, (2) optional hearth-smoke finishing over dried dung fuel, and (3) final pulverization — borts is often crumbled to dust before storage, then rehydrated by dropping a handful of the powder into boiling water (instantaneous reconstitution). This compression-to-dust and reconstitution-from-powder is architecturally UNIQUE in the database — no other regional dried-beef tradition pulverizes the final product to powder. The standard use in modern Mongolian cooking is as a flavor-bomb soup base: a tablespoon of borts powder in boiling water gives immediate beef broth, deployed in tsuivan (fried noodle base), guriltai shul (noodle soup), or khorkhog broth. Borts maps primarily to Bottom Round (Guya) because the lean, low-fat rump profile is optimal for extreme dehydration — intramuscular fat causes rancidity in long-duration air-drying without refrigeration. The 'borts grade' in Mongolian markets refers to cut cleanliness: surface fat trimmed to zero, all connective tissue strings removed, pure lean. The Borts tradition also documents the WINTER CATTLE SLAUGHTER LOGIC: Mongolian pastoralists slaughter in late autumn (October-November) when animals are at peak weight after summer pasture, then preserve the entire winter supply as borts + frozen meat. The slaughter-and-preserve cycle is the most compressed of any culture in the database — the Mongolian nomadic year structures itself around this single preservation event.",
    notes: "MARQUEE TIER 3 ENTRY of Batch 22 for Mongolia. The powder-pulverization technique is architecturally unique — no other entry in the database documents final-state powder as the storage form. Cross-references the Himalayan Dried-Beef Axis (Nepal Sukuti, Sikkim Sukuti, Ladakh Sha-skam, Bhutan Sukam) as the related tradition but notes the Mongolia-specific extreme compression differentiator. The single-stomach storage volume is cited as the folklore metric of excellence in Mongolian borts traditions.",
  },

  {
    id: "mongolian_fat_premium_inversion_mn",
    name: "Mongolian Fat Premium Inversion",
    region: "mongolia",
    maps_to: [
      { canonical_id: "short_plate", match_type: "cultural", confidence: 0.70, note: "Belly/plate fat is the prized premium; normally USDA discards this" },
      { canonical_id: "brisket", match_type: "approximate", confidence: 0.55, note: "Brisket fat cap treated as bonus, not trimmed" },
    ],
    synonyms: ["mongolian fat tail", "ookh", "өөх", "sarlak ookh", "fat premium", "steppe fat inversion", "tsuiv"],
    description: "The Mongolian Fat Premium Inversion is the steppe equivalent of the Yak Fat Inversion documented in Bhutan (`bhutan_datshi_chili_butchery_bt`, Batch 21), but operating at the full-cattle level and driven by caloric necessity rather than flavor philosophy. In Mongolian nomadic cuisine, FAT IS THE PREMIUM CUT — not tenderloin, not striploin. The logic is direct and ecological: on the Mongolian steppe, winters reach -40°C and the human body requires extreme caloric density to maintain body temperature during work. Animal fat, which yields ~9 kcal/gram versus ~4 kcal/gram for lean protein, is not merely preferred but physiologically critical. The consequence for platform users is a direct inversion of USDA value hierarchies: (1) The belly/plate fat (Ookh) that US processing trims and discards as 'waste' is the most prized portion at the Mongolian market stall — a vendor offering a cut with abundant attached fat is offering a PREMIUM PRODUCT, not a lower-grade one. (2) The tail fat (from fat-tailed sheep and occasionally from Mongolian cattle) is reserved for honored guests at Tsagaan Sar (Mongolian New Year) — a direct parallel to the UK's prized kidney suet or the French preference for duck fat. (3) Khorkhog (the hot-stone stew) is intentionally made with the FATTIEST cuts available — the cooking fat from the meat bastes the hot stones and is drunk as a warming tonic. (4) Yak fat (Sarlak Ookh) commands an additional premium over cattle fat due to its perceived medicinal warmth properties in Tibetan-Mongolian folk medicine. This Fat Premium Inversion means any Western recipe substitution from Mongolia into USDA context must account for the caloric and flavor role of fat that was explicitly included — a Mongolian khorkhog recipe that specifies 'fatty belly cuts' will produce a severely different result if made with USDA-trimmed IMPS #193 short plate from which the fat cap has been removed.",
    notes: "Documents the ecological-caloric basis for Mongolian fat preference — an inversion of USDA fat-trim conventions identical in direction to the Yak Fat Inversion (Bhutan, Batch 21) but in the full-cattle register. Cross-references `mongolian_borts_airdried_mn` for the winter-supply logic that makes fat an annual survival resource. Cross-references `bhutan_datshi_chili_butchery_bt` (Batch 21) as the yak-specific fat-inversion parallel.",
  },

  {
    id: "mongolian_buuz_handchopped_mn",
    name: "Mongolian Buuz Hand-Chopped Mince",
    region: "mongolia",
    maps_to: [
      { canonical_id: "chuck_roll", match_type: "close", confidence: 0.80, note: "Chuck/neck is the preferred cut for buuz mince" },
      { canonical_id: "hind_shank", match_type: "approximate", confidence: 0.55, note: "Shank trim blended in for collagen/binding" },
    ],
    synonyms: ["buuz mince", "бууз", "khuushuur mince", "хуушуур", "hand-chopped beef", "tatamal buuz", "mongolian dumpling mince"],
    description: "Mongolian Buuz Hand-Chopped Mince documents the most significant MINCE PHILOSOPHY in the Asia-Pacific dataset: Mongolian dumpling culture (Buuz = steamed; Khuushuur = fried) holds as an absolute principle that the mince MUST be hand-chopped, never machine-ground. The architectural significance is a new data point in the precision-mince family that the platform has documented across South Asia — Kashmiri Wazwan pounding (stone-mallet emulsification, Batch 19), Lucknow-Hyderabad hand-chopping (Batch 17), Newari Kachila raw-mince (Batch 21) — but the Mongolian tradition is the TEXTURE-CRITICAL node: machine-ground mince creates a paste where proteins are too finely disrupted, producing a dense, paste-like filling that steams into a gummy mass. Hand-chopped mince retains ROUGH-CUT TEXTURE — irregular 3–5mm pieces that steam into a looser, juicier filling where the meat 'breaks' when bitten rather than compressing. The specific Mongolian vocabulary signals this distinction: Tatamal Makh ('rolled/hand-processed meat') implicitly means hand-chopped; asking for 'machine mince' (mashintai makh) at a traditional Mongolian butcher is a mild but real cultural insult. The fat ratio is also strictly controlled: authentic buuz mince requires roughly 20–25% fat-to-lean ratio, which in practice means the butcher blends Chuck (lean) with a reserved piece of fat-trim from the belly (Ookh) — the fat is hand-chopped separately and folded in, not ground together. This 'fold-in-fat' technique is the Mongolian equivalent of the French farce tradition where fat is always handled separately from lean to preserve texture independence. For platform users sourcing beef in Mongolia, the practical implication: the pre-packaged 'mince' at Ulaanbaatar supermarkets (Khuchit Shonhor, Nomin) is machine-ground and will NOT produce authentic buuz texture — the correct procedure is to buy Chuck (Tatamal Makh) and a piece of belly fat (Ookh) separately, then hand-chop at home.",
    notes: "Documents the hand-chop vs. machine-ground distinction as a texture-critical mince philosophy. Cross-references the South Asian precision-mince family (Kashmiri Wazwan, Lucknow Awadhi, Newari Kachila) as related but distinct mince philosophies. The fold-in-fat technique and the Mongolian fat premium context cross-reference `mongolian_fat_premium_inversion_mn`.",
  },

  {
    id: "mongolian_steppe_yak_extension_mn",
    name: "Mongolian Steppe Yak (Khovsgol Extension)",
    region: "mongolia",
    maps_to: [
      { canonical_id: "striploin", match_type: "close", confidence: 0.80, note: "Yak loin — leaner and darker than cattle striploin" },
      { canonical_id: "tenderloin", match_type: "close", confidence: 0.80, note: "Yak tenderloin — rare, prized for festival occasions" },
      { canonical_id: "hind_shank", match_type: "exact", confidence: 0.90, note: "Yak shank — identical preparation to cattle shank" },
    ],
    synonyms: ["sarlagiin makh", "сарлагийн мах", "sarlak", "khovsgol yak", "mongolia yak", "steppe yak", "yak sha mongolia"],
    description: "The Mongolian Steppe Yak (Khovsgol Extension) places Mongolia as the FOURTH NODE of the Yak-Dominance Himalayan Axis documented in Batch 21 — extending the axis northward from its three Himalayan-altitude anchors (Ladakh, Nepal, Bhutan) into the Mongolian steppe plateau at the Khovsgol Nuur (Lake Khovsgol, ~1,645m elevation) region in northern Mongolia. The architectural significance is a geographic EXTENSION beyond the Himalayan arc: where the three Batch 21 nodes are connected by Himalayan altitude (3,000–5,000m) and Buddhist culture, Mongolia's Khovsgol Yak represents a distinct ecological node — the STEPPE PLATEAU ecosystem rather than the mountain ecosystem, at a lower but still cold-sufficient altitude. Mongolia's Sarlag (Yak — Mongolian vocabulary vs. Tibetan 'Yak') are herded by the Tsaatan (reindeer herder) and Darkhad communities of Khovsgol, who have maintained separate Yak herding traditions from the predominantly cattle-and-sheep Mongolian heartland. The Khovsgol Yak profile shares the core Himalayan axis characteristics — lean, dark, gamey, dense — but adds a STEPPE SEASONALITY dimension: Khovsgol Yak is primarily available in autumn (September-October) after summer plateau grazing when animals are at maximum weight, and is rarely found in Ulaanbaatar markets outside this seasonal window. For platform users: Sarlagiin Makh (Yak Meat) at a Khovsgol region market stall (e.g., Moron town market) is the genuine article; 'Yak beef' at urban Ulaanbaatar restaurants may be cattle beef with a premium label. The Mongolian Yak extension closes the northern arc: the Yak species now documented from Nepal (Himalayan core), Bhutan (Himalayan east), Ladakh (Himalayan west-India), and Mongolia (Steppe plateau north) — a complete four-node geographic cross of Yak's range as a documented beef species in the platform.",
    notes: "Places Mongolia as the 4th node of the Yak-Dominance Himalayan Axis (now extended to a Yak Geographic Cross: Ladakh W, Nepal center, Bhutan E, Mongolia N). The steppe plateau distinction (Khovsgol, ~1,645m) vs. Himalayan altitude (3,000–5,000m) is noted — same species, different ecosystem. Cross-references yak_dominance_himalayan_axis_sa (Batch 21, the original 3-node axis) and yak_in_ladakh_in (Batch 19, the seed activation). Species: yak; region: mongolia.",
  },

  {
    id: "burmese_sibyan_oil_returned_my",
    name: "Burmese Si-byan (Oil-Returns Curry Technique)",
    region: "myanmar",
    maps_to: [
      { canonical_id: "chuck_blade", match_type: "close", confidence: 0.80, note: "Blade/shoulder — collagen-rich; ideal for the long si-byan simmer" },
      { canonical_id: "brisket", match_type: "close", confidence: 0.75, note: "Brisket belly fat and collagen render cleanly in the si-byan finish" },
      { canonical_id: "chuck_roll", match_type: "approximate", confidence: 0.65, note: "Chuck roll used when blade not available" },
    ],
    synonyms: ["si byan", "ဆိပ်ရံ", "sibyan", "oil returns", "a-mae si byan", "burmese beef curry", "amae si byan", "oil-return finish"],
    description: "Si-byan (literally 'the oil returns') is the defining and architecturally MARQUEE cooking technique of the Myanmar beef dataset — the Burmese answer to 'when is beef curry done?' The term names not a cut but a DONENESS SIGNAL: the curry is finished when the cooking oil that was incorporated during frying the onion-garlic-ginger-spice base visibly SEPARATES BACK OUT from the curry sauce and pools on the surface as a shimmering layer. The oil-return moment is the functional equivalent of the French cuisson (the moment butter foams and subsides) — a visual indicator that all water has been driven off, that the Maillard-reaction sugars in the onion base have fully caramelized, and that the collagen from the beef has rendered into the sauce and hit its gel point. The cut selection in Burmese kitchen tradition is therefore determined by which cut provides the OPTIMAL COLLAGEN-TO-LEAN RATIO for the si-byan finish: too little collagen (lean round/tenderloin) and the sauce never gels — the oil separates but the gravy is thin; too much fat (belly/plate) and the sauce is greasy — the oil separates but the texture is slick. The optimal cut for si-byan is the Chuck Blade (Sibyan Curry Cut in the platform) or the Brisket Lower Chest — both provide sufficient collagen for gel-point without excess surface fat. The structural parallel is the Keralan Coconut-Oil Finish, the Hyderabad Dum-Bake Seal, and the Kashmiri Wazwan Rog-Josh Fat-Separation technique — all South and Southeast Asian curry traditions that use oil behavior as a precision doneness signal. The si-byan technique is also the reason Burmese beef curry is typically MADE IN ADVANCE and served after cooling: the set gravy (from the cooled collagen gel) is considered superior to the fresh hot version. For platform users: requesting 'sibyan cut' at a Yangon market stall specifically calls for the blade/shoulder preparation, not a tenderloin order.",
    notes: "MARQUEE TIER 3 ENTRY of Batch 22 for Myanmar. The si-byan oil-return signal is the most architecturally significant cooking-technique entry in the Southeast Asia dataset — a precision doneness indicator as sophisticated as any in the database. Cross-references the South Asian collagen-based curry-finish family (Keralan, Hyderabad, Kashmiri). Documents why specific cuts (blade, brisket) are culturally mandated for the si-byan finish: collagen-to-lean ratio optimization.",
  },

  {
    id: "burmese_regional_pounded_beef_my",
    name: "Burmese Kachin/Shan Pounded Beef Traditions",
    region: "myanmar",
    maps_to: [
      { canonical_id: "tenderloin", match_type: "close", confidence: 0.85, note: "Inner loin is the preferred pounding cut in highland traditions" },
      { canonical_id: "bottom_round_roast", match_type: "approximate", confidence: 0.60, note: "Round also used for thoke (salad) pounding when tenderloin unavailable" },
    ],
    synonyms: ["kachin pounded beef", "shan beef", "ကချင်သားလုပ်", "highland beef myanmar", "beef lap", "lap beef", "thoke pounded"],
    description: "Burmese Kachin/Shan Pounded Beef documents the HIGHLAND RAW-MEAT NODE of Myanmar's beef dataset — a tradition architecturally parallel to the Newari Kachila (raw pounded tenderloin, Nepal, Batch 21) but representing the Chin-Tibeto-Burman highland communities of Kachin State and Shan Plateau rather than the Newar valley tradition. The Kachin tradition (Amae Thar Hlyar pounded) involves inner loin POUNDED THIN and marinated raw or barely-seared with garlic, chilli, ginger, and fermented fish sauce (Ngapi) — consumed at room temperature as a 'lap'-style dish (sharing the lap-family vocabulary with Lao/Thai raw beef preparations across the border). The Shan tradition (Shan Beef Thoke) is the market-stall variant: round or rump sliced paper-thin, tossed with lime, onion, and Shan spices, and served cold as a 'salad' — the primary counterpart to Thai Nam Tok Neua (waterfall beef) and Lao Lap Neua (raw beef lap). The architectural significance is a CROSS-BORDER RAW-BEEF CONTINUUM connecting Myanmar's highland traditions to the broader Mekong-corridor raw-beef family documented in Vietnam (Tai Chanh), Laos (Lap Suk), and Thailand (Lab Neua) — the same lime-acid 'cook' and the same pounding technique create a contiguous geographic tradition across the highland belt from Yunnan south through Shan State and into the Thai-Lao lowlands. For platform users: this means a traveler crossing from Chiang Rai (Thailand) to Taunggyi (Shan State) will encounter the SAME raw-pounded-beef salad tradition under different names — Nam Tok / Lab in Thailand, Thoke in Myanmar Shan vocabulary. The tenderloin (inner loin) is the PREFERRED pounding cut in both traditions: it provides the most tender pounded texture and the cleanest flavor for raw or barely-marinated consumption. CRITICAL safety note: the raw-meat traditions here are ancient, and local practitioners have developed selection and hygiene standards for the specific local cattle/zebu stock — these standards do NOT directly translate to USDA commercial beef without additional pathogen mitigation (searing or acid treatment at minimum).",
    notes: "Documents the Myanmar node of the cross-border Mekong highland raw-beef continuum (connecting Kachin/Shan traditions to Thai Nam Tok and Lao Lap). Cross-references Nepal Kachila (`newari_precision_butchery_np`, Batch 21) as the South Asian raw-pounded parallel — same technique, different cultural tradition and flavor profile. The raw-meat safety note is standard per the platform's raw-meat documentation protocol.",
  },

  {
    id: "burmese_zebu_lean_correction_my",
    name: "Burmese Zebu Lean Correction",
    region: "myanmar",
    maps_to: [
      { canonical_id: "chuck_roll", match_type: "cultural", confidence: 0.70, note: "Working zebu chuck is significantly leaner than USDA chuck — different result expected" },
      { canonical_id: "striploin", match_type: "cultural", confidence: 0.65, note: "Zebu loin strip has minimal marbling — USDA Select or below" },
      { canonical_id: "brisket", match_type: "close", confidence: 0.75, note: "Zebu brisket is the closest USDA-comparable cut — similar collagen even if leaner" },
    ],
    synonyms: ["zebu myanmar", "working cattle myanmar", "brahman beef", "amae thar zebu", "todo thar", "myanmar cattle cut", "hnget kyaw beef"],
    description: "The Burmese Zebu Lean Correction is the structural CALIBRATION ENTRY for the Myanmar beef dataset — equivalent in function to the Sri Lankan Zebu Correction (Batch 20) and the Indian Buffalo Correction entries across the South Asian Batches. Myanmar's cattle population is predominantly Zebu (Bos indicus) — specifically the Burmese Zebu or local Shan/Kachin crossbreeds — which are WORKING ANIMALS used for ploughing rice paddies and hauling loads. The direct consequences for beef quality: (1) LEANNESS: Working Zebu have minimal intramuscular fat — even prime adult animals grade below USDA Select on marbling. A 'striploin' from a Myanmar Zebu market animal cannot be seared rare in the Western manner — it will cook dry and tough. (2) MUSCULATURE: Heavily exercised working animals have highly developed cross-grain muscle fibers in the shoulder, loin, and round — cuts that would be moderately tender in USDA feedlot cattle are noticeably tougher from Myanmar working zebu. (3) AGE: Myanmar cattle are typically slaughtered older (4–7 years) after working life, not at 18–30 months — older beef is darker, more intensely flavored, and requires longer cooking. (4) SIZE: Myanmar Zebu are smaller than European beef breeds — the entire carcass may weigh only 150–200kg dressed, versus 300–450kg for US beef cattle. The practical implications for platform users: any USDA cut substitution reference using Myanmar regional names should apply a LEAN CORRECTION factor — add approximately 20% more cooking time for braised/stewed cuts, do NOT attempt quick-sear preparations for loin/round cuts without tenderizing acid marinade (lime, vinegar, tamarind), and expect intensely beefy (gamey) flavor from older animals. The Todo-Thar (dry-fry) Burmese preparation tradition has organically adapted to Zebu toughness: the thin-slice + high-heat technique maximizes Maillard reaction while minimizing the chewy distance from outer crust to center.",
    notes: "Documents the Myanmar-specific Zebu correction for USDA substitution accuracy. Parallels the Sri Lankan Zebu Lean Correction (Batch 20) and the Indian working-buffalo corrections (Batches 14b-19). The four-factor Zebu profile (leanness, musculature, age, size) provides a complete calibration matrix for the Myanmar dataset. Cross-references `burmese_sibyan_oil_returned_my` — the si-byan technique is also an organic adaptation to Zebu collagen profiles.",
  },

  {
    id: "burmese_beef_thoke_raw_market_my",
    name: "Burmese Beef Thoke (Raw-Marinated Market Tradition)",
    region: "myanmar",
    maps_to: [
      { canonical_id: "tenderloin", match_type: "close", confidence: 0.80, note: "Inner loin for high-end thoke at tea-house restaurants" },
      { canonical_id: "bottom_round_roast", match_type: "approximate", confidence: 0.65, note: "Round for market-stall thoke — acid-tenderized via lime" },
      { canonical_id: "inside_round", match_type: "approximate", confidence: 0.60, note: "Thin-sliced inside round also used in volume thoke preparations" },
    ],
    synonyms: ["beef thoke", "amae thoke", "အမဲသားသုပ်", "thoke", "raw beef salad myanmar", "yangon tea house beef", "shan thoke", "beef lahpet thoke"],
    description: "Burmese Beef Thoke (raw-marinated beef salad) is the RAW-BEEF NODE of the Yangon urban food scene and the tea-house-culture cut that connects Myanmar's urban beef market to the broader Southeast Asian raw-beef salad continuum. Thoke (သုပ်) is the Burmese category for any tossed raw or barely-cooked salad — Lahpet Thoke (fermented tea leaf salad) is the most internationally famous, but Amae Thoke (beef thoke) is the meat-market-adjacent tradition. The preparation is structurally parallel to Vietnamese Bò Tái Chanh (lime-cured raw beef) and Thai Yum Neua (raw/rare beef salad): thin-sliced inner loin or round, dressed with lime juice that 'cooks' the surface protein via acid denaturation, onion, chilli, toasted rice powder (Htamin-gyaw), roasted peanuts, and a Ngapi (fermented shrimp paste) umami base. The CUT SELECTION divides by market tier: (1) TEA-HOUSE QUALITY (tourist-visible Yangon): Inner Loin / Tenderloin, sliced thin against the grain, dressed minimally — the cut's natural tenderness substitutes for tenderizing acid time. (2) MARKET-STALL QUALITY (neighborhood access): Inside Round or Rump, sliced as thin as possible, requires longer lime-acid dressing to tenderize. (3) FESTIVAL/SHAN VERSION: Chuck/shoulder hand-pounded with pestle (the Kachin/Shan tradition), which creates a different texture (shredded rather than sliced). The architectural significance: Beef Thoke closes the RAW-BEEF TRIANGLE of the Indochina-Myanmar region — connecting Vietnam's Tái (lime-cured), Thailand/Laos Lap Neua (pounded raw), and Myanmar Thoke (tossed-dressed) as three methodologically distinct raw-beef traditions that share the same lime-acid 'cook' philosophy but differ in cut selection and texture outcome. The Theingyi Zei (Yangon's main market) is the hub where all three texture tiers converge at different stalls within meters of each other.",
    notes: "Documents Myanmar's Beef Thoke as the raw-beef node connecting to the broader Southeast Asian lime-acid raw-beef continuum. Cross-references `burmese_regional_pounded_beef_my` (the Kachin/Shan highland pounding tradition as the festival/Shan Thoke variant). The three-tier cut-selection (tea-house loin, market-stall round, festival chuck-pounded) documents the market-tier architecture. Cross-references Vietnam, Thailand/Laos raw-beef entries in the Asia regional dataset as the continuum nodes.",
  },

  // ----- NEPAL + BHUTAN (9 entities — Batch 21) -----

  {
    id: "yak_dominance_himalayan_axis_sa",
    name: "The Yak-Dominance Himalayan Axis: Yak as the Pan-Himalayan High-Altitude Bovine (Ladakh + Nepal + Bhutan)",
    region: "nepal",
    maps_to: [
      { canonical_id: "striploin", match_type: "cultural", confidence: 0.80, note: "Primary yak back-meat across all three high-altitude regions" },
      { canonical_id: "chuck_roll", match_type: "cultural", confidence: 0.72, note: "Yak mince / stewing meat" },
      { canonical_id: "tenderloin", match_type: "cultural", confidence: 0.70, note: "Yak loin — softest, still requires extended cooking" },
      { canonical_id: "short_plate", match_type: "cultural", confidence: 0.60, note: "Yak hard fat (Tsillu/Boso) as a prized standalone ingredient" },
    ],
    synonyms: ["yak dominance", "himalayan yak axis", "yak nak", "yak sha", "yak masu", "yak tsillu", "high altitude bovine", "bos grunniens", "pan-himalayan yak"],
    description: "The Yak-Dominance Himalayan Axis is the MARQUEE architectural anchor of Batch 21 — the elevation of Yak (Bos grunniens) from a single-region winter-secondary prestige meat (Ladakh, `yak_in_ladakh_in`, Batch 19) to a documented PAN-HIMALAYAN DOMINANCE AXIS spanning three contiguous high-altitude regions: Ladakh (India, above ~3,500m), Nepal high-Himalaya (above ~3,000m, the Everest and Annapurna trekking regions — Yak male / Nak female), and Bhutan's high mountain valleys (Thimphu, Paro, Bumthang — Yak-sha). Where Batch 19 introduced Yak as one region's cold-season specialty behind a cow default, this axis documents Yak as the PRIMARY bovine across the entire high-Himalayan altitude band — the same structural status as the Picanha Axis (13 countries → sirloin_cap) and the False-Tenderloin Axis (13 countries → eye_of_round), but defined by ALTITUDE rather than by name-collision or anatomy. The shared Yak profile across all three regions is consistent and architecturally distinctive: exceptionally LEAN with effectively zero intramuscular marbling; DENSE (does not shrink much when cooked); DARK RED with high myoglobin; intensely GAMEY/complex in flavor; and requiring roughly 30% LONGER cooking than cow — a requirement COMPOUNDED by the altitude-boiling-point physics (the Yak braise in Nepal's high regions takes nearly twice as long as a sea-level cow stew; Bhutan's Thimphu at ~2,300m boils water at ~92°C). Critically, Yak CANNOT be seared like a US steak — attempting a quick high-heat sear yields a tough, leathery result; Yak must be pressure-cooked or thin-sliced against the grain. The axis also documents the YAK FAT INVERSION: Yak hard fat (Yak Tsillu in Bhutan, the Boso-equivalent in Nepal) is a PRIZED STANDALONE INGREDIENT — sliced into cubes and melted into chili stews (Bhutan, where it also buffers pepper heat) or mixed into Momo/dumpling mince (Nepal, for moisture) — directly inverting the USDA trim-and-discard fat convention. The Yak-Dominance Axis completes the THREE NON-USDA BOVINE species story of the South Asian ontology: Bachhiya/Bhains buffalo duality (`bachhiya_bhains_duality_pk`, Batch 16), Mithun (`mithun_prestige_meat_in`, Batch 18), and now Yak elevated to a full pan-regional axis. All four `Species` union values (cow, buffalo, mithun, yak) are live, and Yak is no longer a single-region curiosity but the documented dominant species of an entire altitude band.",
    notes: "MARQUEE TIER 3 ENTRY of Batch 21 and the cross-regional Yak axis anchor (region tagged nepal as the central node, but spans Ladakh + Nepal + Bhutan). Cross-references yak_in_ladakh_in (Batch 19, the seed activation), mithun_prestige_meat_in (Batch 18), and bachhiya_bhains_duality_pk (Batch 16) as the three Non-USDA bovine species. Cross-references ladakh_altitude_cooking_in (Batch 19) for the compounding altitude physics. Yak fat inversion cross-references bhutan_datshi_chili_butchery_bt and nepal_momo_mince_boso_np. No new species activation — Yak was activated in Batch 19; this entry elevates it to axis status.",
  },

  {
    id: "nepal_strict_cow_illegality_np",
    name: "Nepal Strict Cow Illegality: The First Legally-Cow-Absent Region in the Ontology",
    region: "nepal",
    maps_to: [
      { canonical_id: "chuck_roll", match_type: "cultural", confidence: 0.70, note: "Generic buff — the valley substitute for all cow beef" },
      { canonical_id: "striploin", match_type: "cultural", confidence: 0.68, note: "Buff back-meat — what a Nepali 'steak' actually is" },
    ],
    synonyms: ["cow illegal nepal", "buff only", "bhaisi", "no cow nepal", "buffalo dominant nepal", "nepal beef substitute"],
    description: "Nepal Strict Cow Illegality documents the strictest pole of the cow-legality spectrum the ontology has mapped, and the FIRST region in the entire database where cow is LEGALLY ABSENT rather than merely non-default. Across the Indian Buffalo Belt (Batches 14b-19), cow slaughter is RESTRICTED but the dataset's default-species convention still treats cow as the notional baseline ('cow unless marked buffalo'). Nepal breaks this entirely: cow slaughter is STRICTLY ILLEGAL and carries SEVERE penalties, so cow beef functionally does not exist in the local lexicon — 'Beef' as Westerners understand it (cow) is simply not a market category. The valley markets of Kathmandu and Pokhara are entirely Water Buffalo (Buff / Bhaisi); the high Himalaya above ~3,000m is Yak/Nak. Consequently Nepal is the ONLY region in the database with ZERO cow entries — every Nepali regional-name entry carries an explicit species (buffalo in the valleys, yak at altitude), and there is no cow default. This positions Nepal at the extreme end of a spectrum the ontology now documents in full: cow-DOMINANT (West Bengal, Kerala, the Christian NE states, Sri Lanka, Bhutan-via-import) → cow-RESTRICTED-but-notionally-default (the Indian Buffalo Belt: UP, Punjab, Rajasthan, Maharashtra, etc.) → cow-LEGALLY-ABSENT (Nepal). For the platform, the translation rule is unambiguous: US Beef (cow) maps to Nepal Buff (Bhaisi, in the valleys) or Yak/Nak (at altitude), with NO cow option. The 'Buff Reality Check' is the key tourist-facing insight: even a Thamel menu reading 'Steak' is a Buff steak — leaner, darker, thicker-fibered than USDA cow, tough under a quick high-heat sear, requiring acidic marinade or heavy pounding.",
    notes: "Documents Nepal as the first legally-cow-absent region (zero cow entries). Establishes the full cow-legality spectrum from cow-dominant through cow-restricted-but-default to cow-legally-absent. Cross-references the india_cow_buff_legal_map (Batch 14b) as the India-internal restriction map (Nepal is a separate sovereign pole beyond it) and northern_buff_belt_in (Batch 17) for the buffalo-lean texture correction. All Nepal entries are buffalo (valley) or yak (altitude).",
  },

  {
    id: "nepal_momo_mince_boso_np",
    name: "Nepal Momo Mince: The Boso Fat-Addition Correction for Exceptionally Lean Buff",
    region: "nepal",
    maps_to: [
      { canonical_id: "chuck_roll", match_type: "cultural", confidence: 0.80, note: "Hand-chopped lean buff base for Momo mince" },
      { canonical_id: "brisket", match_type: "cultural", confidence: 0.68, note: "Chhati / Boso — the hard yellow fat added back" },
    ],
    synonyms: ["momo keema", "boso", "momo fat", "keema boso", "buff momo", "fat addition nepal", "80/20 buff"],
    description: "Nepal Momo Mince documents the Boso fat-addition correction — the Himalayan member of the lean-bovine fat-addition family. Buff Momo is the undisputed king of Nepali fast food, and because water buffalo is EXCEPTIONALLY LEAN, a Nepali butcher knows that 'Momo Keema' cannot be lean muscle alone: to replicate the moisture of US 80/20 ground beef, the butcher actively mixes HAND-CHOPPED lean meat with distinct chunks of hard buffalo fat (Boso, the yellow fat from the Chhati/brisket area), typically 20-30% by volume. Without this added fat, the momos are dry and choke-inducing. This is a clean member of the fat-addition correction family the ontology documents across lean-bovine regions: the Buffalo-Belt Charbi addition (Batches 14b-19), the Ladakh Boso for Momo (Batch 19), the NE Doh Khlein for Jadoh (Batch 18) — all cases where the exceptionally-lean buff/yak/zebu requires hard fat to be deliberately added back. The Nepali specificity is the HAND-CHOPPING (local shops rarely machine-grind) and the precise Momo-grade ratio. The Boso fat-addition is the structural mirror of Bhutan's Yak Tsillu (bhutan_datshi_chili_butchery_bt) — both Himalayan Buddhist cuisines treat hard bovine fat as a deliberately-added prized ingredient, but Nepal adds it for MOISTURE (dumpling filling) and Bhutan adds it for CALORIES + CHILI-HEAT-BUFFERING. For the platform: when a US recipe calls for ground beef, the Nepal translation is Momo Keema = hand-chopped buff + 20-30% Boso, NOT lean buff mince alone.",
    notes: "Documents the Boso (hard buffalo fat) addition to Momo mince as the Nepali member of the lean-bovine fat-addition correction family. Cross-references the Ladakh Boso (Batch 19), the Buffalo-Belt Charbi addition (Batches 14b-19), the NE Doh Khlein (Batch 18), and bhutan_datshi_chili_butchery_bt (the Bhutanese structural mirror). Hand-chopping cross-references newari_precision_butchery_np. Buffalo (and yak at altitude).",
  },

  {
    id: "newari_precision_butchery_np",
    name: "Newari Precision Butchery: Kachila Raw-Mince, Choila, and the Total-Utility Tradition",
    region: "nepal",
    maps_to: [
      { canonical_id: "tenderloin", match_type: "cultural", confidence: 0.78, note: "Kachila — the freshest gristle-free Tenderloin for raw mince" },
      { canonical_id: "chuck_roll", match_type: "cultural", confidence: 0.65, note: "Hand-chopped mince base" },
      { canonical_id: "striploin", match_type: "cultural", confidence: 0.65, note: "Choila — grilled/roasted meat served cold" },
    ],
    synonyms: ["newari", "kachila", "choila", "raw mince", "newari tartare", "hand-minced", "total utility", "bhutan dish"],
    description: "Newari Precision Butchery documents the Kathmandu Valley Newari culinary tradition — which utilizes every part of the animal with precision — and its distinctive RAW-MINCE node. KACHILA is the Newari version of steak tartare: it demands the absolute freshest, cleanest Tenderloin (Naram Masu), meticulously HAND-minced to remove ALL gristle, then dressed raw with mustard oil, fenugreek, and garlic. Kachila joins the precision-mince family of the South Asian ontology alongside the Kashmiri Wazwan POUNDING (`kashmiri_wazwan_pounded_mince_in`, Batch 19, stone-and-mallet emulsified paste) and the Lucknow/Hyderabad hand-CHOPPING (`lucknow_awadhi_summit_in` Batch 17, Hyderabad Hath-ka-Keema Batch 14b) — but Kachila is the RAW node, where the others are cooked. This makes Kachila the most FRESHNESS-CRITICAL mince in the database: raw consumption of hot-boned buffalo requires same-day slaughter and absolutely zero gristle, a precision demand exceeding even the cooked precision-mince peaks. The broader Newari tradition includes CHOILA (spiced grilled or roasted meat served cold, best from Naram Masu/Tenderloin or Striploin so it stays chewable), and the dish confusingly called BHUTAN (no relation to the country — the Newari dish of fried tripe and intestines, a staple bar snack with the local rice wine Raksi; the tripe is offal, documented in prose only, not given a regional-name entry per the locked rule). Together these document the Newari total-utility philosophy: from the most precious raw Tenderloin (Kachila) to the humblest fried intestine (Bhutan-the-dish), every part is used with a specific, named, precision-cut purpose.",
    notes: "Documents the Newari precision tradition: Kachila (raw hand-minced Tenderloin — the RAW node of the precision-mince family), Choila (cold spiced grilled meat), and the Newari dish 'Bhutan' (fried tripe — NOT the country; offal, prose only, no regional-name entry per the locked rule). Cross-references kashmiri_wazwan_pounded_mince_in (Batch 19) and lucknow_awadhi_summit_in (Batch 17) as the cooked precision-mince peaks. Buffalo (cow legally absent in Nepal).",
  },

  {
    id: "himalayan_sukuti_source_np",
    name: "Himalayan Sukuti Source: Nepal as the Origin Node of the Dried-Beef Axis",
    region: "nepal",
    maps_to: [
      { canonical_id: "bottom_round_roast", match_type: "cultural", confidence: 0.80, note: "Round/thigh — the lean strip cut for drying" },
      { canonical_id: "outside_round", match_type: "cultural", confidence: 0.68, note: "Outer round as an alternative drying strip" },
    ],
    synonyms: ["sukuti", "nepali jerky", "dried buff", "sukuti sandheko", "himalayan dried beef", "sukuti source"],
    description: "Himalayan Sukuti Source documents Nepal as the ORIGIN NODE of the Himalayan Dried-Beef Axis. Sukuti is the Nepali dried-meat tradition: the butcher cuts long, thin strips of lean meat (typically from the Round/Thigh) specifically to be hung above a wood fire or air-dried — the Himalayan equivalent of jerky, but functionally a COOKING INGREDIENT rather than a snack (it is rehydrated in spicy tomato curries or made into Sukuti Sandheko, a spicy dried-meat salad). This is architecturally significant because Nepal is the SOURCE of the Sukuti vocabulary that the ontology already documented in Sikkim (`sikkim_sukuti_cooking_ingredient_in`, Batch 18) — Sikkim's Nepali-speaking population uses the Nepali term Sukuti, so Nepal proper CLOSES that linguistic loop, confirming the Sikkim entry's noted Nepali derivation. The Himalayan Dried-Beef Axis now spans FOUR contiguous regions as a pan-Himalayan dried-meat continuum: Nepal Sukuti (the source/origin) → Sikkim Sukuti (Batch 18, Nepali-vocabulary, the Indian extension) → Ladakh Sha-skam (Batch 19, the Tibetan-Buddhist variant) → Bhutan Sukam/Sikam (Batch 21, the Dzongkha variant with fat fully attached). All four share the defining features: lean strips, cold-dry-air or hearth preservation (NOT salt-cured, distinguishing them from Lakshadweep Ularthu, Goa/Daman Salt Meat, and Srinagar winter salt-dried traditions), and cooking-ingredient (not snack) usage requiring rehydration/long-simmering. The axis is distinct from the NE hearth-SMOKE axis (`smoked_beef_northeast_axis_in`, Batch 18) — Sukuti/Sha-skam/Sukam are primarily AIR-dried in cold mountain wind (optionally hearth-finished), where the NE smoked tradition is hearth-SMOKE-defined in humid lowland-hill conditions.",
    notes: "Documents Nepal as the SOURCE/origin node of the Himalayan Dried-Beef Axis, closing the linguistic loop with the Nepali-vocabulary Sikkim Sukuti (Batch 18). Extends the axis to 4 contiguous regions: Nepal (source) + Sikkim + Ladakh + Bhutan. Cross-references sikkim_sukuti_cooking_ingredient_in (Batch 18), ladakh_sha_skam_in (Batch 19), and the Bhutan Sukam in bhutan_import_paradox_bt. Distinguished from the salt-cured traditions and the NE hearth-smoke axis (smoked_beef_northeast_axis_in, Batch 18). Buffalo.",
  },

  {
    id: "bhutan_import_paradox_bt",
    name: "The Bhutan Import Paradox: Passionate Meat-Eaters, Slaughter Taboo, Cow-Permissive-via-Import",
    region: "bhutan",
    maps_to: [
      { canonical_id: "chuck_roll", match_type: "cultural", confidence: 0.68, note: "Generic Sha — imported Indian cow/buff" },
      { canonical_id: "bottom_round_roast", match_type: "cultural", confidence: 0.72, note: "Sukam — the dried form, historical default" },
      { canonical_id: "striploin", match_type: "cultural", confidence: 0.65, note: "Phu-sha — imported or mountain-yak back meat" },
    ],
    synonyms: ["bhutan import", "slaughter taboo", "sha", "imported beef", "natural death meat", "cow via import", "buddhist meat paradox"],
    description: "The Bhutan Import Paradox documents a legality category found NOWHERE ELSE in the dataset: a deeply Buddhist nation where the active killing of animals is culturally taboo and commercial domestic slaughter is highly restricted — YET whose people are passionate meat-eaters, with beef and pork central to the national cuisine (Shakam Datshi, Shakam Paa, Phaksha). Bhutan resolves this paradox two ways: (1) meat is IMPORTED from India — mostly processed in the plains and trucked up into the mountains — so fresh 'beef' (Sha) in Bhutan is Indian buffalo or cow; (2) animals that die of natural causes or accidents may LEGALLY be consumed. This makes Bhutan cow-PERMISSIVE-VIA-IMPORT — a genuinely new node distinct from every other point on the ontology's cow-legality spectrum: it is neither cow-dominant-via-domestic-slaughter (West Bengal, Kerala, Sri Lanka) nor cow-restricted (Indian Buffalo Belt) nor cow-legally-absent (Nepal, `nepal_strict_cow_illegality_np`) — it is cow-PRESENT-but-only-via-import-and-natural-death. The texture consequence is the key sourcing intelligence: Bhutanese fresh beef is EITHER tough lean grass-fed Indian buffalo/cow (trucked from the plains, apply the buffalo-lean correction) OR high-altitude mountain Yak (apply the Yak + altitude corrections) — never the tender consistently-marbled USDA profile. Crucially, because fresh meat historically could not be kept in the mountains, the DRIED form (Sukam/Sikam) is the historical default: thick long strips with the fat fully attached, hung to air-dry in the cold windy valley air, incredibly tough, requiring extensive boiling before use — the Bhutanese member of the Himalayan Dried-Beef Axis (himalayan_sukuti_source_np). The bone-in default also applies: in national dishes like Shakam Datshi the meat is chopped bone-in into jagged chunks because the bone marrow enriches the pungent cheese broth.",
    notes: "Documents Bhutan's unique cow-permissive-via-import legality category (slaughter taboo + import reliance + legal natural-death consumption). Completes the cow-legality spectrum alongside nepal_strict_cow_illegality_np (the legally-absent pole). Cross-references the Himalayan Dried-Beef Axis (himalayan_sukuti_source_np), yak_dominance_himalayan_axis_sa (the mountain-yak option), and northern_buff_belt_in (Batch 17) for the imported-buffalo-lean correction. Cow default (imported) + yak (high valleys).",
  },

  {
    id: "bhutan_datshi_chili_butchery_bt",
    name: "Bhutan Datshi-Chili Butchery: Hard Fat as Standalone Heat-Buffering Ingredient + Bone-In Cheese-Broth Logic",
    region: "bhutan",
    maps_to: [
      { canonical_id: "short_plate", match_type: "cultural", confidence: 0.72, note: "Tsillu / Yak Tsillu — hard fat sliced into cubes as a standalone ingredient" },
      { canonical_id: "short_ribs", match_type: "cultural", confidence: 0.70, note: "Ra-sha — bone-in for the cheese-broth marrow" },
      { canonical_id: "bottom_round_roast", match_type: "cultural", confidence: 0.68, note: "Sukam for the Datshi dishes" },
    ],
    synonyms: ["datshi", "ema datshi", "shakam datshi", "tsillu", "yak tsillu", "chili stew fat", "cheese broth", "heat buffering fat"],
    description: "Bhutan Datshi-Chili Butchery documents how the Datshi (cheese) and chili foundation of Bhutanese cuisine completely dictates meat cutting and use, producing two distinctive patterns not documented elsewhere in the ontology. (1) HARD FAT AS A STANDALONE HEAT-BUFFERING INGREDIENT — Tsillu (hard cow/buffalo fat) and Yak Tsillu (hard yak fat) are sliced into cubes and melted DIRECTLY into chili stews, serving two functions: providing calories for the cold high-altitude climate, and BUFFERING/blocking the intense heat of the peppers. Bhutanese chilies are treated as a vegetable, not a seasoning — in Ema Datshi (the national dish: whole chilies in cheese sauce), the fat cubes coat the tongue and reduce chili bite. This chili-heat-buffering role for fat is a culinary function found nowhere else in the database; the fat is bought as its own 'cut,' inverting the USDA trim-and-discard convention just as Nepal's Boso does, but for a categorically different functional reason (heat-buffering vs. moisture). (2) BONE-IN DEFAULT FOR CHEESE-BROTH DISHES — In Shakam Datshi and similar dishes, meat is chopped bone-in into jagged chunks with a heavy cleaver because the bone marrow is considered crucial to enriching the pungent cheese broth — the marrow fat seeps into the sauce, mellowing the sharpness of the Datshi cheese. This bone-in default is driven not by tradition alone but by the specific functional chemistry of the Datshi sauce; a boneless cut yields a thinner, less rich cheese broth. Together these two patterns make Bhutanese butchery the most fat-function-conscious in the dataset: fat is used as both a standalone ingredient (Tsillu cubes) and a distributed enrichment source (marrow in the cheese broth), while all other South Asian fat traditions use fat primarily for cooking medium (tempering oil) or moisture correction (Boso/Charbi in mince).",
    notes: "Documents the Tsillu (hard fat as standalone heat-buffering ingredient) and the bone-in cheese-broth marrow logic. The Tsillu heat-buffering function cross-references nepal_momo_mince_boso_np (the structural mirror — both add hard fat back to lean bovine, but for different functions: Nepal for moisture, Bhutan for heat-buffering). Cross-references yak_dominance_himalayan_axis_sa for Yak Tsillu specifically. The bone-in default cross-references the pan-Indian bone-in default documented across the Buffalo Belt. Cow default (imported) + yak (high valleys).",
  },

  {
    id: "bhutan_altitude_cooking_bt",
    name: "Bhutan Altitude Cooking: The Physics-Correction at Thimphu (~2,300m) and High Valley Kitchens",
    region: "bhutan",
    maps_to: [
      { canonical_id: "hind_shank", match_type: "cultural", confidence: 0.72, note: "Kangling / Sha-ru — long-braise shank most affected by altitude physics" },
      { canonical_id: "bottom_round_roast", match_type: "cultural", confidence: 0.68, note: "Sukam — dried-meat rehydration takes ~40% longer at altitude" },
      { canonical_id: "chuck_roll", match_type: "cultural", confidence: 0.65, note: "Generic Sha stew — slow-cook time extended by ~20-30%" },
    ],
    synonyms: ["bhutan altitude", "thimphu cooking", "high altitude bhutan", "boiling point bhutan", "mountain cooking"],
    description: "Bhutan Altitude Cooking documents the physics-driven cooking correction for Bhutan's high mountain kitchens — the second node (after Ladakh, `ladakh_altitude_cooking_in`, Batch 19) in the Altitude-Cooking-Correction axis. Thimphu, the capital, sits at approximately 2,300m elevation, where water boils at approximately 92°C — 8°C below sea-level (100°C). This seemingly small difference has substantial consequences for meat cookery: braised dishes take 20-30% longer to cook through than at sea level; the Sukam (dried beef) rehydration and cooking time extends by approximately 40% compared to sea-level preparation; and the Yak, which already requires ~30% longer cooking than cow (due to its dense lean profile), needs nearly 60% more total cooking time at Bhutan's highest valley kitchens. Bumthang and Paro, both at higher elevations than Thimphu, experience more pronounced effects. The altitude correction compounds with the import-paradox sourcing reality: because Bhutanese beef arrives as tough lean imported Indian buffalo/cow OR dense lean mountain Yak — both of which already require extended cooking — and the altitude further slows cooking, Bhutanese home cooks learn empirically that a dish that takes 45 minutes at sea level in India takes 75-90 minutes in Thimphu. The pressure cooker, where available, is the practical solution; traditional clay-pot cooking compensates by starting much earlier in the day. This makes Bhutan the second fully-documented altitude-physics node alongside Ladakh, extending the Altitude-Cooking-Correction axis from a single extreme (Leh ~3,500m, ~88°C) to a multi-altitude multi-region documented pattern: Leh (~3,500m, ~88°C) + Nepal high passes (~4,000-5,000m trekking kitchens, ~82-86°C) + Bhutan high valleys (~2,300-3,000m, ~91-93°C).",
    notes: "Documents Bhutan as the second fully-documented node in the Altitude-Cooking-Correction axis. Cross-references ladakh_altitude_cooking_in (Batch 19, the first and most extreme node). Cross-references bhutan_import_paradox_bt (the already-tough sourcing reality compounded by altitude) and yak_dominance_himalayan_axis_sa (the Yak's ~30% baseline overcooking requirement further compounded at altitude). Extends the axis from Ladakh alone to a multi-region documented pattern. Cow default (imported) + yak (high valleys).",
  },

  {
    id: "bhutan_sukam_dried_axis_bt",
    name: "Bhutan Sukam: The Dzongkha Node of the Himalayan Dried-Beef Axis",
    region: "bhutan",
    maps_to: [
      { canonical_id: "bottom_round_roast", match_type: "cultural", confidence: 0.82, note: "Round — the lean primary strip cut for Sukam drying" },
      { canonical_id: "striploin", match_type: "cultural", confidence: 0.65, note: "Back muscle strips with fat layer attached" },
    ],
    synonyms: ["sukam", "sikam", "shakam", "dried beef bhutan", "bhutanese jerky", "mountain dried beef"],
    description: "Bhutan Sukam documents the Dzongkha node of the Himalayan Dried-Beef Axis — the fourth and final member of the contiguous mountain-dried-beef continuum. Sukam (also Sikam, Shakam) is the Bhutanese dried beef: thick long strips with the fat layer FULLY ATTACHED, hung in the cold, windy mountain air of the valleys to air-dry. The Bhutanese version is architecturally distinct from its Himalayan neighbors in three ways: (1) FAT FULLY ATTACHED — unlike Nepali Sukuti and Ladakhi Sha-skam (which are typically lean strips), Bhutanese Sukam keeps the fat layer on, because in the Datshi-cheese tradition that fat serves as a flavor contributor and heat-buffer in the final dish; (2) THICK CUT — Sukam strips are thicker than Sukuti/Sha-skam (designed for the long bone-in braise in Shakam Datshi rather than a salad), producing an incredibly tough product requiring extensive boiling; (3) HISTORICAL NECESSITY → CULTURAL STAPLE — because fresh meat historically could not be kept in Bhutan's mountain altitude (no refrigeration), Sukam was the ONLY way to have meat out-of-season; it has evolved from survival necessity into the iconic national-dish ingredient (Shakam Datshi, Shakam Paa). The Himalayan Dried-Beef Axis is now complete at four contiguous regions: Nepal Sukuti (the source origin, lean strips, wood-fire dried, cooking ingredient rehydrated in curry) → Sikkim Sukuti (Batch 18, Nepali-vocabulary extension, same technique) → Ladakh Sha-skam (Batch 19, Tibetan-Buddhist variant, air-dried cold-wind, also lean, pounded before use) → Bhutan Sukam (fat-on thick strips, cold-wind valley-dried, boiled before use in cheese-broth dishes). All four are AIR-DRIED (not salt-cured) COOKING INGREDIENTS (not snacks), distinguishing the axis from the salt-cured traditions of Goa, Daman, and Lakshadweep.",
    notes: "Documents Bhutan Sukam as the fourth and final node of the Himalayan Dried-Beef Axis, completing it alongside himalayan_sukuti_source_np (Nepal), sikkim_sukuti_cooking_ingredient_in (Batch 18, Sikkim), and ladakh_sha_skam_in (Batch 19, Ladakh). Key Bhutanese distinctives: fat-on thick strips, boiled for cheese-broth dishes. Cross-references bhutan_import_paradox_bt (Sukam is the historical default of the import-paradox context) and bhutan_datshi_chili_butchery_bt (the Datshi dishes that use Sukam). Cow default (imported).",
  },

  // ----- SRI LANKA (4 entities — Batch 20) -----

  {
    id: "ceylon_curry_cut_lk",
    name: "The Ceylon Curry Cut: A Cutting-Style as the Translation Unit for US Stew Meat",
    region: "sri_lanka",
    maps_to: [
      { canonical_id: "chuck_roll", match_type: "cultural", confidence: 0.80, note: "Primary Ceylon Curry Cut source — mixed muscle micro-cubes" },
      { canonical_id: "bottom_round_roast", match_type: "cultural", confidence: 0.70, note: "Round/rump as a boneless Curry Cut source" },
      { canonical_id: "chuck_blade", match_type: "cultural", confidence: 0.65, note: "Shoulder for the bone-in Black Curry variant" },
    ],
    synonyms: ["ceylon curry cut", "curry cut sri lanka", "kalu kudu cut", "micro-cube", "mix cut", "haraka mas", "madu iraitchi", "black curry cut"],
    description: "The Ceylon Curry Cut is the MARQUEE architectural anchor of Batch 20 and the single most distinctive Sri Lankan data point: the answer to 'what is the Sri Lankan equivalent of US Stew Meat?' is not an anatomical cut but a CUTTING STYLE. Sri Lankan butchers (in Colombo's Pettah Central Market, Kandy, and village stalls) hack meat — bone-in or boneless — into uniform cubes of 1/2 inch to 3/4 inch, measurably SMALLER than a standard US stew cut (typically 1 to 1.5 inch). The reason is functional and spice-driven: Sri Lankan roasted curry powders, especially Kalu Kudu (the deeply-roasted 'black powder' behind the iconic Beef Black Curry), require maximum meat surface area to penetrate fully. A US-sized stew chunk left whole would have an under-seasoned interior in the Sri Lankan flavor system, where the spice must reach the center. This is the INVERSE of Western precision-steak logic: where the Western tradition preserves a larger intact muscle to maintain a cut's anatomical identity and texture, the Ceylon Curry Cut SACRIFICES anatomical identity for spice contact — the dish is defined by the powder, not the cut. The Ceylon Curry Cut is the smallest and most spice-driven of the South Asian micro-cube traditions, paralleling but exceeding the Chennai Chukka Cut (small lean cubes for high-heat dry-roasting, Batch 14b) and the various Indian Gol-Boti / 1-inch Curry Cut standards across the Buffalo Belt and South Indian regions (Batches 14b-19). The entirely HOT-BONED market context reinforces this: meat is slaughtered and sold fresh daily, so the micro-cube is cut to order at the stall, not pre-packaged. The market also documents the TRI-LINGUAL naming layer — in a single stall the generic-beef request is 'Haraka Mas' (Sinhalese) or 'Madu Iraitchi' (Tamil), and the Ceylon Curry Cut is the default delivery for either request. For the platform's users — expats, solopreneurs, and home cooks sourcing beef in Sri Lanka — the high-value insight is that asking for 'curry cut' yields these micro-cubes, and that a Western recipe calling for stew meat should specify a larger cube ('loku' / big) if a chunkier texture is wanted.",
    notes: "MARQUEE TIER 3 ENTRY of Batch 20. Cross-references the Chennai Chukka Cut and the Indian Gol-Boti / Curry Cut micro-cube traditions (Batches 14b-19) as the related-but-larger micro-cube standards — the Ceylon Curry Cut is the smallest and most spice-driven. Documents the tri-lingual single-market naming layer (Sinhalese/Tamil/English-legacy). Sri Lanka is cow-default; the buffalo Curry Cut variant carries species: \"buffalo\". The hot-boned fresh-daily market cross-references hot_boned_fresh_meat_convention_sa (Batch 16).",
  },

  {
    id: "dutch_burgher_beef_smore_lk",
    name: "The Dutch-Burgher Bridge: Beef Smore and the Fourth Colonial Cut-Vocabulary on South Asian Beef",
    region: "sri_lanka",
    maps_to: [
      { canonical_id: "bottom_round_roast", match_type: "cultural", confidence: 0.78, note: "Primary Smore joint — whole tied Topside" },
      { canonical_id: "top_round_steak", match_type: "cultural", confidence: 0.70, note: "Rump as the alternative Smore joint" },
    ],
    synonyms: ["beef smore", "smore", "dutch burgher", "burgher roast", "ceylon pot-roast", "smoor", "voc legacy", "dutch bridge"],
    description: "The Dutch-Burgher Bridge extends the Indo-European Colonial Bridges Axis (Batch 19) with a FOURTH European colonial vocabulary on South Asian beef — the DUTCH. Where the axis previously documented Portuguese (Goa Batch 14b, Daman Batch 19 — preservation/preparation vocabulary: Salt Meat, Bistek) and French (Pondicherry Batch 19 — primal vocabulary: Filet, Contre-filet, Jarret), Sri Lanka's Dutch-Burgher community (descendants of the Dutch East India Company / VOC colonial period, 1640-1796) preserves a Dutch BRAISE-PREPARATION vocabulary, of which the signature survival is BEEF SMORE. The name derives directly from the Dutch 'smoor' (to braise/stew), and the dish is a pot-roast of a whole Topside or Rump joint, tied tightly with string and braised slowly in a dark, spiced gravy — unmistakably descended from Dutch braising tradition and preserved as a Burgher (and now broadly Sri Lankan) festive dish. This is architecturally significant on two axes: (1) it adds a THIRD European cuisine to the colonial-bridge pattern, completing a Portuguese-preparation / French-primal / Dutch-braise triad of European culinary-vocabulary survivals on lean South Asian Buffalo and zebu; (2) it occurs in a SOVEREIGN nation (Sri Lanka), not an Indian territory — so where Batch 19 declared the Indo-European Colonial Bridges Axis 'fully closed' for INDIA's three internal bridges (Goa, Daman, Pondicherry), this entry REOPENS-AND-EXTENDS the axis at the broader SOUTH-ASIAN level to four colonial powers across the region: Portuguese (Goa, Daman), French (Pondicherry), Dutch (Sri Lanka). Like all the colonial bridges, Beef Smore carries the BUFFALO-LEAN / LEAN-ZEBU CORRECTION: because Sri Lankan beef is exceptionally lean (grass-fed zebu or buffalo, zero marbling) AND Sri Lankan butchers default to TRIMMING fat, the Smore joint must be deliberately larded and slow-braised — the customer must request 'Thel ekka' (with fat) or the pot-roast dries out. The acidic-tenderizer correction also applies (lime/green papaya marinade for the lean joint), paralleling the Pondicherry wine/vinegar and Daman toddy/cider-vinegar corrections (Batch 19). Beef Smore proves, alongside Goa, Daman, and Pondicherry, that the European colonial cut/preparation vocabulary survives as a layer over South Asian beef anatomy — and specifically that the Dutch survival is braise-preparation-centric (Smore), distinct from the Portuguese preservation-centric (Salt Meat) and French primal-centric (Filet) survivals.",
    notes: "Extends the Indo-European Colonial Bridges Axis to a 4th colonial power (Dutch). Cross-references indo_european_colonial_bridges_in (Batch 19, the cross-regional anchor), pondicherry_french_bridge_in and daman_portuguese_bridge_in (Batch 19), and the deployed Goa data (Batch 14b). IMPORTANT framing: the Batch 19 'fully closed' declaration was India-internal (3 bridges); this entry extends the axis at the South-Asian sovereign-nation level (4 colonial powers). Documents the Buffalo-Lean / Lean-Zebu acidic + larding correction as a sub-pattern of northern_buff_belt_in (Batch 17). Sri Lanka is cow-default for Smore.",
  },

  {
    id: "sri_lankan_devilled_beef_lk",
    name: "Sri Lankan Devilled Beef and Hand-Beaten Mince: The Stir-Fry-Strip and Cutlet Formats",
    region: "sri_lanka",
    maps_to: [
      { canonical_id: "tenderloin", match_type: "cultural", confidence: 0.75, note: "Undercut strips for Devilled Beef rapid wok-tossing" },
      { canonical_id: "bottom_round_roast", match_type: "cultural", confidence: 0.65, note: "Rump strips as the chewier Devilled variant" },
      { canonical_id: "chuck_roll", match_type: "cultural", confidence: 0.65, note: "Hand-beaten mince for Moor cutlets" },
    ],
    synonyms: ["devilled beef", "devil beef", "beef devilled", "ceylon stir-fry strips", "hand-beaten mince", "moor cutlet", "cutlet mince", "log-chopped mince"],
    description: "Sri Lankan street and home cooking produces two distinctive prepared-cut formats that translate poorly to USDA anatomical thinking. DEVILLED BEEF — the fiery, sweet-and-sour stir-fry that is one of Sri Lanka's most iconic beef dishes — requires thin, elongated rectangular strips hand-sliced from the Undercut (Tenderloin) or Rump, designed for high-heat wok-tossing with banana peppers, onions, and chili pieces. The strip format prioritizes rapid cooking and maximum surface contact with the wok and aromatics; the Undercut is preferred for tenderness in the brief cook, with Rump as a chewier alternative. Critically, the local-menu term 'BEEF STEAK' in Sri Lankan restaurants does NOT mean a thick-cut Western ribeye — it refers to a thin, highly-spiced sheet of meat pan-fried with a mountain of red onions and green chilies, behaving more like a stir-fry than a Western steak (a classic false-friend menu translation the platform should flag). HAND-BEATEN MINCE — found in traditional Muslim (Moor) butcheries for making Cutlets (spiced beef croquettes) — is meat repeatedly chopped on a heavy wooden log to form a coarse texture that holds its shape without turning mushy. This is a hand-mince tradition (parallel to the Indian Hath-ka-Keema hand-chopping of Hyderabad/Lucknow, Batch 14b/17, and the Lakshadweep Kothu beaten-mince, Batch 19) but motivated specifically by cutlet structure — the coarse hand-beaten texture binds into a croquette that does not collapse, where a fine machine-grind would. Both formats reflect the broader Sri Lankan pattern of cutting/processing meat for spice-and-texture outcomes rather than preserving anatomical cut identity, the same logic that drives the Ceylon Curry Cut (ceylon_curry_cut_lk). The Moor (Sri Lankan Muslim) butcheries are also the source of the tripe-curry tradition (Babath), processed separately but sold at the same counters.",
    notes: "Documents the Devilled Beef stir-fry-strip format and the Moor hand-beaten cutlet-mince format. Cross-references ceylon_curry_cut_lk (the shared 'cut-for-spice-and-texture' logic) and the Indian/Lakshadweep hand-mince traditions (Hath-ka-Keema Batch 14b/17, Kothu Batch 19). Flags the 'Beef Steak' false-friend menu term. Babath (tripe) is offal — Tier 3 prose only, no regional-name entry, per the locked rule. Cow default.",
  },

  {
    id: "sri_lankan_lean_zebu_correction_lk",
    name: "The Sri Lankan Lean-Zebu Correction: Lime/Acid Tenderization and the Fat-Trimming Inversion",
    region: "sri_lanka",
    maps_to: [
      { canonical_id: "striploin", match_type: "cultural", confidence: 0.70, note: "Pita Mas — the lean back-meat that fails when grilled untreated" },
      { canonical_id: "bottom_round_roast", match_type: "cultural", confidence: 0.68, note: "Lean round requiring acid marinade or slow braise" },
      { canonical_id: "short_plate", match_type: "cultural", confidence: 0.60, note: "The fat that must be explicitly requested ('Thel ekka')" },
    ],
    synonyms: ["lean zebu correction", "lime tenderization", "acid correction sri lanka", "green papaya marinade", "thel ekka", "fat trimming inversion", "grass-fed lean"],
    description: "The Sri Lankan Lean-Zebu Correction documents two related sourcing-and-cooking caveats that arise because Sri Lankan beef is exceptionally lean — grass-fed zebu (humped Bos indicus) or water buffalo, with effectively ZERO intramuscular marbling. (1) THE LIME/ACID TENDERIZATION CORRECTION: a Sri Lankan lean cut (e.g. Pita Mas / striploin) thrown on a high-heat grill without treatment ends up 'like leather.' Local practice requires either long slow braising OR an overnight marinade with an acid — characteristically LIME JUICE or GREEN PAPAYA (a protease tenderizer). This places Sri Lanka in the same architectural family as the Buffalo Texture Failure pattern (northern_buff_belt_in, Batch 17, where the correction is pressure-cooking or raw-papaya) and the Colonial-Bridge acidic corrections (Pondicherry red-wine/vinegar, Daman toddy/cider-vinegar, Goa Vindaloo vinegar — Batch 19); the Sri Lankan variant is specifically CITRUS (lime) plus green papaya, the island's grass-fed-lean correction. (2) THE FAT-TRIMMING INVERSION: Sri Lankan butchers DEFAULT TO TRIMMING fat off the meat unless explicitly told otherwise — the OPPOSITE of the Buffalo-Belt and NE Indian conventions, where fat (Charbi, Doh Khlein, Boso) is prized and frequently ADDED to lean meat. For traditional dishes that need fat to stay moist — especially Beef Smore (the Dutch-Burgher pot-roast) — a lean trimmed piece becomes dry, so the customer must explicitly request 'Thel ekka' (Sinhalese, 'with fat'). Most of the South Asian ontology documents fat-ADDITION cultures (lean Buffalo supplemented with separately-bought suet/Charbi/Boso); Sri Lanka uniquely documents a fat-TRIMMING default that must be countermanded. Together these two caveats are the essential Sri Lankan sourcing intelligence: the meat is lean by nature AND trimmed leaner by convention, so the user must both acid-tenderize (lime/papaya) and request the fat back (Thel ekka) to hit the intended Sri Lankan textures.",
    notes: "Documents the Lime/Acid tenderization correction (citrus + green papaya) as the Sri Lankan member of the Buffalo-Lean / Texture-Failure correction family (cross-references northern_buff_belt_in Batch 17 and the Colonial-Bridge acidic corrections in pondicherry_french_bridge_in / daman_portuguese_bridge_in Batch 19). Documents the Fat-Trimming Inversion ('Thel ekka' must be requested) as a convention-inversion against the Buffalo-Belt/NE fat-addition cultures. Cross-references dutch_burgher_beef_smore_lk (Smore needs the fat back) and ceylon_curry_cut_lk. Cow default; applies equally to the buffalo option.",
  },

  // ----- NORTHEAST INDIA — SIKKIM (1 entity) -----

  {
    id: "sikkim_sukuti_cooking_ingredient_in",
    name: "Sikkim Sukuti: The Cooking-Ingredient Distinction (Not US-Style Jerky)",
    region: "sikkim",
    maps_to: [
      { canonical_id: "bottom_round_roast", match_type: "cultural", confidence: 0.75, note: "Primary Sukuti source — round/rump cuts" },
      { canonical_id: "outside_round", match_type: "cultural", confidence: 0.70, note: "Outside round as alternative Sukuti source" },
    ],
    synonyms: ["sikkim sukuti", "air-dried beef", "sukuti sadheko", "nepali dried beef", "himalayan dried beef", "sikkim cooking ingredient"],
    description: "Sikkim Sukuti is the iconic Sikkimese dried beef — sliced thin and air-dried (often in the dry Himalayan winter air, sometimes smoked over the kitchen hearth for an intensified variant). Sukuti is widely confused by international visitors and food writers with US-style jerky, but the two preparations occupy fundamentally different culinary categories. THE DISTINCTION MATTERS BOTH CULINARILY AND COMMERCIALLY: US JERKY is seasoned (heavily flavored with salt, sugar, soy, smoke, spices) and smoked, intended as a READY-TO-EAT SNACK consumed directly from the package — a complete preparation. SIKKIM SUKUTI is unseasoned (low or zero salt, no added flavorings) and air-dried only (with optional hearth smoke), intended as a COOKING INGREDIENT consumed only after further preparation. Eating Sukuti directly from the bag — as a tourist would eat jerky — produces an inedible result: tough, dry, and flavorless. The dish-completion happens in the kitchen, not at the dryer. The canonical Sikkim preparation is SUKUTI SADHEKO — pounded Sukuti pieces (a wooden mallet or stone is used to break down the dried fibers) dry-fried with chilies, mustard oil, lime juice, garlic, ginger, and chopped onions. The result is a spicy, intensely savory side dish that pairs with rice or chura (beaten rice). Other Sukuti preparations: SUKUTI KO ACHAR (Sukuti pickle — Sadheko-style with added tamarind/lime for tartness); SUKUTI THUKPA (Sukuti added to noodle soup as flavor concentrate); SUKUTI BHUTUWA (Sukuti dry-fried with spices, similar to Sadheko but with more spice complexity). The architectural lesson: preservation method does not equal final preparation. Sukuti is the SEMI-FINISHED INPUT to multiple dish preparations, requiring further processing for completion. This architectural pattern will recur in Batch 19 with LADAKH SHA-SKAM — Ladakhi dried beef using essentially identical air-drying technique with a different language (Bhoti/Ladakhi vs Sikkim Nepali) and slightly different processing. After Batch 19 deploys, the Sikkim Sukuti and Ladakh Sha-skam will form a paired Himalayan Dried-Beef Axis — same technique, two languages, parallel cooking-ingredient cultural pattern.",
    notes: "UPDATED in Batch 19 to close the Himalayan Dried-Beef Axis. Cross-references `ladakh_sha_skam_in` (Batch 19) as the structural parallel — same air-drying preservation, different language (Bhoti/Ladakhi vs Sikkim Nepali), same cooking-ingredient distinction from US-style jerky. The Axis is FULLY CLOSED. Cross-references `smoked_beef_northeast_axis_in` for the smoked variant of Sukuti (when Sukuti is hearth-smoked in addition to air-drying). Cross-references `lakshadweep_island_isolation_in` for contrast — Lakshadweep Ularthu is SALTED, while Sukuti and Sha-skam are UNSALTED.",
  },

  // ----- Nigeria — Batch 26 (2 entities) -----

  {
    id: "suya_paper_thin_shave_af",
    name: "Suya Paper-Thin Shave (Nigerian Grill Format)",
    region: "nigeria",
    maps_to: [
      { canonical_id: "inside_round", match_type: "cultural", confidence: 0.85, note: "Lap/Topside (inside round) is the traditional Suya source" },
      { canonical_id: "tenderloin", match_type: "cultural", confidence: 0.75, note: "Tenderloin used in upscale Lagos Suya houses" },
    ],
    synonyms: ["suya", "mai suya cut", "paper-thin shave", "suya lap"],
    description: "The Mai Suya hand-shave format: completely lean Lap (Topside/Inside Round) or Fillet, paper-thin ribbons cut ACROSS THE GRAIN while the meat is fresh (not chilled), crusted with Yaji (a dry spice blend: ground kuli-kuli peanut cake + cayenne + ginger + garlic salt), flash-grilled over hardwood charcoal. The defining technical signature is the shave direction and thickness — paper-thin cross-grain cuts maximise surface area for Yaji adhesion and ensure the meat cooks through in seconds over fierce charcoal. USDA translation: Flank or Top Round (inside_round), partially frozen for 20-30 min to firm the muscle for thin slicing, cut at 45° angle paper-thin. Distinct from Brochette format (ribbon vs chunk) and from Kilishi (grilled-fresh vs sun-dried sheet). The 'Suya cut' is not a muscle: it is a preparation specification tied to the leanest available round or loin muscle. The parboiling prerequisite does NOT apply here — Suya is the one Nigerian beef preparation where the meat is not pre-boiled. The Yaji crust and the quick charcoal flash compensate for Zebu leanness.",
    notes: "Marquee Nigeria Tier 3 entry. USDA replication rule: partially freeze Inside Round 20-30 min, shave paper-thin at 45° against the grain. Cross-references pan_african_lean_beef_ng (parboiling prerequisite does NOT apply to Suya). Cross-references sahelian_parboiling_prerequisite_af for the contrast. Forward-ref: B27 Senegalese Dibi and Niger Brochettes are distinct but related Sahel grill formats.",
  },

  {
    id: "kilishi_sheet_dry_af",
    name: "Kilishi Sheet-Dry (Hausa Beef Preservation)",
    region: "nigeria",
    maps_to: [
      { canonical_id: "inside_round", match_type: "cultural", confidence: 0.80, note: "Topside/inside round sliced into continuous translucent sheets" },
      { canonical_id: "top_sirloin", match_type: "cultural", confidence: 0.65, note: "Rump also used for premium Kilishi in Kano" },
    ],
    synonyms: ["kilishi", "hausa jerky", "northern beef", "kano kilishi", "madaoua kilishi"],
    description: "The Hausa beef-preservation tradition of Northern Nigeria and the Sahel: lean round or rump muscle sliced into CONTINUOUS TRANSLUCENT SHEETS (not strips), sun-dried to stiff boards, coated in wet kuli-kuli peanut cake paste mixed with cayenne, ginger, and garlic, then fire-flashed (briefly re-charred) to cook the paste coating. Kilishi occupies a distinct position in the global dried-beef preservation taxonomy: (1) Sheet-format not strip — the continuous sheet maximises surface for paste adhesion; (2) Peanut-paste coat not soy-cure — the kuli-kuli paste is the flavour carrier, not a brine or soy-ferment cure; (3) Fire-finished not oven-only — the final fire flash chars the paste and re-moistens the meat surface. This is architecturally distinct from: US Jerky (strip-cut, soy-smoke cure, oven-dried, ready-to-eat snack); Himalayan Sukuti (unseasoned sheet air-dried, cooking ingredient — cross-ref himalayan_sukuti_source_np); Mongolian Borts (freeze-dried-then-pounded into powder, extreme long-term preservation — cross-ref mongolian_borts_airdried_mn); Northeast India smoked beef (hearth-smoked, fresh-seasoned, cooking ingredient — cross-ref smoked_beef_northeast_axis_in). Kilishi's closest structural relative is Biltong (fat-attached salt-air planks) in the sheet/plank dimension, but Kilishi is lean-only, paste-coated, and fire-finished — completely different mechanism and product. The Kano Kilishi market (particularly Sabo Gari and Kurmi markets) is the global production centre; the heartland moves northward to Madaoua (Niger) in Batch 27.",
    notes: "Extends the dried-beef preservation taxonomy to a fourth distinct mechanism. Cross-references: himalayan_sukuti_source_np (Himalayan air-dry), mongolian_borts_airdried_mn (freeze-dry-pound), smoked_beef_northeast_axis_in (hearth-smoke). Forward-ref: B27 Niger's Madaoua deepens the Kilishi heartland axis.",
  },

  // ----- Mali — Batch 26 (3 entities) -----

  {
    id: "sahel_brochette_ribbon_format_af",
    name: "Sahel Brochette Ribbon Format (Transhumance Grill Solution)",
    region: "mali",
    maps_to: [
      { canonical_id: "inside_round", match_type: "cultural", confidence: 0.82, note: "Bolo sogo (inside round) is the primary ribbon source" },
      { canonical_id: "tenderloin", match_type: "cultural", confidence: 0.70, note: "Tenderloin ribbons for premium brochettes" },
    ],
    synonyms: ["malian brochette", "brochette sahel", "fat-bead skewer", "bolo sogo strip", "brochette ribbon"],
    description: "The pan-Sahel solution to lean-Zebu-on-skewer: hand-sliced razor-thin ribbons of inside round (Bolo sogo) threaded with ALTERNATING BEADS OF HUMP FAT (Zebu ngoun) or brisket fat. The fat beads self-baste the lean ribbon during charcoal grilling, compensating for the near-zero intramuscular fat of Sahel Zebu. The fat-bead alternation is the architectural signature — it is not decorative but functional. Without fat beads, lean Zebu ribbon dries to cardboard in seconds over charcoal. DISTINCT FROM SUYA (Nigeria): Suya ribbons are grilled directly with a Yaji spice-crust; no fat beads, the spice crust is the flavour carrier. DISTINCT FROM DIBI (Senegal, B27): Dibi is cleaver-hacked bone-in chunks with fat attached — a different lean-Zebu solution that uses attached fat rather than threaded beads. These three formats — Brochette ribbon-with-beads (Mali/Niger/Chad), Suya paper-thin shave (Nigeria), and Dibi cleaver-chunk (Senegal) — collectively form the Sahel Grill Format taxonomy, each adapted to the same lean-Zebu constraint via a different technique. USDA translation for the Brochette: use inside round or flank, slice paper-thin ribbons, alternate with cubes of beef fat (suet from brisket point) on the skewer.",
    notes: "Pan-Sahel axis entry established with Mali as anchor. Forward-ref: B27 Senegal (Dibi format), Niger (Brochette heartland), B28 Chad and Burkina extending the ribbon format. Cross-references suya_paper_thin_shave_af for the Suya contrast. Cross-references zebu_hump_fat_axis_af for the fat-bead source.",
  },

  {
    id: "tiguadege_collagen_matrix_ml",
    name: "Tiguadege Collagen Matrix (Mali Maafe Cut Logic)",
    region: "mali",
    maps_to: [
      { canonical_id: "chuck_roll", match_type: "cultural", confidence: 0.80, note: "Chuck is the primary bone-in chunk source" },
      { canonical_id: "fore_shank", match_type: "cultural", confidence: 0.75, note: "Fore shank provides high-collagen bone-in pieces" },
      { canonical_id: "hind_shank", match_type: "cultural", confidence: 0.70, note: "Hind shank for maximum marrow and collagen yield" },
    ],
    synonyms: ["tiguadege", "maafe cut", "peanut stew cut", "collagen matrix cut"],
    description: "Mali's Maafe (Tiguadege na — 'peanut stew') requires bone-in JAGGED 1-INCH CHUNKS with connective tissue and marrow intact, from the chuck, neck, or shank area. The engineering constraint is chemical, not aesthetic: the melting collagen from bone, cartilage, and connective tissue during the multi-hour braise is WHAT PREVENTS PEANUT-FAT SEPARATION. Malian peanut stew is an oil-rich preparation (ground peanut paste + tomato + stock) that naturally wants to split into oil and water phases. The gelatine extracted from bone-in jagged cuts during the braise acts as the emulsifier — binding the peanut oil into a stable, creamy, unified sauce. A clean-trimmed boneless chuck cut produces a split, greasy sauce; the same cut bone-in and jagged-edged produces the characteristic velvety Tiguadege texture. This is the peanut-stew-specific architectural rule. USDA translation: English-style braising beef, bone-in, never trimmed, sawn or chopped into 1-inch irregular pieces rather than clean cubes. Cross-regional: Senegalese Maafe (B27), Burkinabè Sauce Tiga (B28), Chadian Daraba (B28) all share the same collagen-emulsification logic, making Tiguadege the pan-West-African peanut-stew anchor.",
    notes: "Marquee Mali Tier 3 entry. The collagen-as-emulsifier mechanism distinguishes this from general braising-beef entries. Forward-ref: B27 Senegal Maafe, B28 Burkina Sauce Tiga and Chad Daraba all extend this axis. Cross-references sahelian_parboiling_prerequisite_af (Tiguadege follows the braise-first rule).",
  },

  // ----- Pan-Sahel — Batch 26 (2 architectural axes) -----

  {
    id: "zebu_hump_fat_axis_af",
    name: "Zebu Hump Fat Axis (Pan-Sahel Off-Chart Premium Fat)",
    region: "nigeria",
    maps_to: [
      { canonical_id: "brisket", match_type: "cultural", confidence: 0.30, note: "Nearest fat-bearing canonical; the hump is anatomically distinct — maps here as proxy only" },
    ],
    synonyms: ["zebu hump", "kaba nigeria", "zebu ngoun mali", "hump fat sahel", "azawak hump", "bunaji hump", "peul zebu hump"],
    description: "The Zebu hump (thoracic hump muscle + high-melt-point intramuscular fat) is the recurring OFF-CHART PREMIUM FAT MODIFIER of the entire Sahel. It has NO USDA anatomical equivalent: the hump is a distinct muscular-fatty structure specific to Bos indicus cattle (Zebu), formed by hypertrophied thoracic vertebrae processes and surrounded by a composite of very hard fat and highly flavourful muscle. This batch establishes the axis with two-country evidence: Nigeria `kaba` (Azawak/Bunaji Zebu hump — Northern Nigerian market premium) and Mali `zebu ngoun` (Zebu Peul hump — Malian market luxury). KEY PROPERTIES: high-melt-point fat (40-50°C, compared to USDA brisket fat at 30-35°C); intense flavour from the heavy-use muscle fibres; used primarily as the fat-bead threading material in Sahel Brochettes (threading alternating with lean ribbon prevents the fat from over-rendering before the ribbon cooks through); sold separately as a luxury item in Sahelian markets. CANONICAL MAPPING: mapped to `brisket` as the nearest fat-bearing canonical, but the mapping is explicitly approximate — the hump is not brisket anatomy, it is hump anatomy. Future canonical promotion to a dedicated `zebu_hump` canonical would require its own isolated batch with SVG diagram treatment showing the hump position on the Zebu silhouette. That promotion is not this batch. B27 extends: Senegal and Niger hump terms; B28 extends: Chad `al-sanam`, Burkina `toggo`.",
    notes: "Pan-Sahel axis established with 2-country evidence (Nigeria + Mali). brisket mapping is proxy only — explicitly noted. Forward-ref to B27 (SN/NE hump terms) and B28 (TD al-sanam, BF toggo). Canonical promotion to zebu_hump is a future deliberate batch. Cross-references sahel_brochette_ribbon_format_af (hump fat as the fat-bead threading source).",
  },

  {
    id: "sahelian_parboiling_prerequisite_af",
    name: "Sahelian Parboiling Prerequisite (Braise-First Rule)",
    region: "nigeria",
    maps_to: [],
    synonyms: ["sahel parboil", "braise-first", "pre-boil sahel", "zebu parboil", "sahel tenderising"],
    description: "All Sahel-Zebu skeletal muscle — except tenderloin — MUST be pre-boiled with onions and salt until the water evaporates before any frying, grilling, stewing, or further cooking. Without this prerequisite, Sahel Zebu beef is 'completely unchewable' (the research's exact characterisation). This rule is DISTINCT from the East African parboiling correction documented in `east_african_choma_parboil_af` (B23), despite using the same pre-boiling technique. THE MECHANISM DIFFERS: East Africa parboils to enter the Choma grill format — Nyama Choma requires par-tenderised meat for the charcoal method to work without drying out; the parboil is method-specific, and not all East African beef preparations require it (Kenyan stews slow-braise without pre-boil). The SAHEL rule is unconditional and method-INDEPENDENT: Sahel-Zebu is uniformly tough from transhumance (constant walking cattle are pure muscle, near-zero intramuscular fat), and every preparation except tenderloin requires the pre-boil regardless of whether the end dish is fried (Beef Stew), stewed (Tiguadege), or grilled (Suya from Lap — though premium Suya from Fillet skips it). This batch establishes the axis with 2-country evidence: Nigeria (explicit pan_african_lean_beef_ng Tier 3) and Mali (parboil before Tiguadege and all domestic stews). B27 and B28 extend to Senegal, Niger, Chad, and Burkina Faso.",
    notes: "Pan-Sahel architecture axis. CRITICAL DISTINCTION from east_african_choma_parboil_af: same technique, different mechanism — Sahel rule is universal and method-independent; East Africa rule is method-specific to Choma. 2-country evidence base (NG + ML); forward-ref to B27/B28 for 6-country evidence. Cross-references pan_african_lean_beef_ng (Nigeria anchor), tiguadege_collagen_matrix_ml (Mali parboil application).",
  },

  // ----- Mali — Batch 26 (1 cultural-lineage entity) -----

  {
    id: "mali_dairy_retired_zebu_ml",
    name: "Mali Dairy-Retired Zebu (Pastoral Economy → Market Beef)",
    region: "mali",
    maps_to: [],
    synonyms: ["dairy retired zebu", "fulani cattle mali", "peul zebu market", "eid cattle", "old cow mali", "mature zebu beef"],
    description: "Malian market beef is frequently sourced from Zebu cattle slaughtered only after the animal is no longer productive in the pastoral economy — no longer producing milk or calves, or specifically slaughtered for Eid al-Adha and other religious festivals. This is a structural consequence of the Fulani/Peul pastoral economy: cattle are CAPITAL ASSETS in a transhumance system, not production animals raised for beef. They earn their keep through milk, calves, and draft power; only retirement or religious obligation produces slaughter animals. IMPLICATIONS: (1) MATURITY — Malian market Zebu is frequently 4-8+ years old at slaughter, meaning darker, more intensely flavoured, iron-rich beef with well-developed musculature but substantially tougher than any USDA reference point; (2) EXTENDED BRAISE WINDOWS — even the parboiling prerequisite takes longer for mature animals (the parboil that tenderises a 2-year-old Zebu in 20 minutes may need 45-60 minutes for an 8-year-old dairy cow); (3) SUPERIOR FLAVOUR DEPTH — older animals produce more complex, mineral-rich beef, particularly in stews and bone-based preparations; (4) SEASONAL VARIATION — Eid concentration of slaughter creates quality peaks and troughs in market availability. This is the clearest 'producer rules the market' node in the entire Cutranslator dataset — the pastoral-economic system upstream of the butcher completely determines the product characteristics downstream. No other documented region ties beef-butchery logic this directly to a dairy/pastoral economic system. Contrast: Ethiopian Tere Siga requires hot-boned young animals (freshness-driven); Nigerian Suya selects from the lean-young Zebu profile; Malian beef starts from the dairy-retirement endpoint of the same pastoral system.",
    notes: "First dataset node explicitly tying beef-butchery logic to a dairy/pastoral economic system. The mature-animal context deepens the sahelian_parboiling_prerequisite_af — longer parboil windows required for older animals. Cross-references mali_dairy_retired_zebu_ml is self; forward-ref to B27/B28 for Fulani transhumance continuity across the Sahel.",
  },

  // ----- Senegal — Batch 27 (3 entities) -----

  {
    id: "dibi_cleaver_chunk_format_sn",
    name: "Dibi Cleaver-Chunk Format (Senegalese Grill Mechanic)",
    region: "senegal",
    maps_to: [
      { canonical_id: "chuck_roll", match_type: "cultural", confidence: 0.75, note: "Shoulder/Chuck is the primary Dibi source; bone-in chunks deliver marrow basting" },
      { canonical_id: "short_ribs", match_type: "cultural", confidence: 0.72, note: "Rib sections cleaver-hacked bone-in; marrow renders over wood-fire smoke" },
      { canonical_id: "striploin", match_type: "cultural", confidence: 0.65, note: "Short Loin sections used in upscale Dibiteries; bone-in strip for premium version" },
    ],
    synonyms: ["dibi", "dibiterie cut", "senegal grill", "dakar bbq", "bone-in grill senegal", "cleaver chunk"],
    description: "Dibi is the third distinct Sahel grill mechanic, completing the documented three-way distinction: Suya (paper-thin cross-grain shave, no bone, Nigerian), Brochette (thin ribbon with hump-fat beads, skewered, Malian/pan-Sahel), and Dibi (bone-in cleaver-chunk, Senegalese). Unlike Suya or Brochette, Dibi takes the primal cut — Short Loin, Ribs, or Shoulder — and cleaver-hacks it bone-in into rough 1 to 1.5 inch chunks, bones and cartilage intact. The bone marrow renders over wood-fire smoke, naturally basting the lean Zebu without the need for added fat or threading technique. Served wrapped in brown paper with raw onions and sharp Dijon mustard — the Dijon is itself a French-colonial signature (paralleling the French-vocabulary butchery at Boucheries, documented in francophone_wolof_butchery_bridge_sn). USDA translation: Whole Bone-In Chuck Roast, Short Ribs, or Bone-In Strip, cleaver-chopped across the bone into rough 1.5-inch chunks — do not trim the cartilage, it basts. CRITICAL NOTE on the parboiling prerequisite: Dibi may bypass the Sahelian parboiling prerequisite (sahelian_parboiling_prerequisite_af) because the bone marrow rendering during charcoal grill provides natural basting that compensates for Zebu leanness — the marrow does the work the parboil normally does. This makes Dibi structurally analogous to Suya (which also skips parboil via Yaji-crust protection) rather than to Tiguadege or Thieboudienne (which rely on parboil-first). The three Sahel grill mechanics are now documented: USDA replication rules differ for each.",
    notes: "Marquee Senegal Tier 3 entry. Third Sahel grill mechanic alongside suya_paper_thin_shave_af (Nigeria, B26) and sahel_brochette_ribbon_format_af (Mali, B26). USDA rule: bone-in Chuck or Short Ribs cleaver-chopped across the bone. Cross-references francophone_wolof_butchery_bridge_sn (Dijon mustard as French-colonial signature), thieboudienne_collagen_matrix_sn (the other major Senegalese bone-in preparation), and sahelian_parboiling_prerequisite_af (Dibi may bypass via marrow basting). Cow default.",
  },

  {
    id: "thieboudienne_collagen_matrix_sn",
    name: "Thieboudienne Collagen Matrix (Senegalese National Dish Bone-In Requirement)",
    region: "senegal",
    maps_to: [
      { canonical_id: "hind_shank", match_type: "approximate", confidence: 0.80, note: "Bone-in Jarret (shank) is the primary Thieboudienne source; marrow emulsifies the rice base" },
      { canonical_id: "brisket", match_type: "approximate", confidence: 0.75, note: "Bone-in Poitrine provides the fat layer and collagen for oil emulsification" },
      { canonical_id: "chuck_roll", match_type: "approximate", confidence: 0.65, note: "Shoulder used when Jarret is not available; bone-in is mandatory regardless" },
    ],
    synonyms: ["thieboudienne", "thiebou yapp", "ceebu yapp", "rice beef senegal", "national dish senegal"],
    description: "Thieboudienne (ceebu yapp, or thiebou yapp in the meat variant) is the Senegalese national dish: broken rice slow-cooked in a meat-and-tomato base with vegetables. The collagen requirement is the critical butchery insight: the dish requires bone-in Jarret (shank) or Poitrine (brisket) — the bones must stay in during initial boiling to emulsify the oil base into the broken-rice grains. Lean trimmed US stew meat produces dry rice missing the signature glossy mouthfeel. The mechanism is the same as Mali's Tiguadege na peanut stew (tiguadege_collagen_matrix_ml, B26): lean Zebu + bone-in + slow braise + collagen emulsification — but the stew family is different: Thieboudienne is rice-based (tomato-onion-oil); Tiguadege na is peanut-butter-based. Two parallel collagen-emulsification logics in the same Sahel region type (West African stew), different stew vehicle. The rice-dish parallel also extends to Niger's Zebu-context and forward-references the Burkina Riz Gras (B28 projection), where the same collagen-emulsification logic operates in a fattier Mossi mechanic. USDA translation: Bone-In Hind Shank or Bone-In Brisket Point — do not bone out; the marrow and connective tissue must be in contact with the cooking liquid.",
    notes: "Parallel to tiguadege_collagen_matrix_ml (Mali, B26): same bone-in collagen-emulsification logic, different stew family (rice-based vs peanut-based). Cross-references sahelian_parboiling_prerequisite_af — the parboil also applies to Thieboudienne preparation, extending the prerequisite to 4-country evidence (NG + ML + SN + NE). Forward-ref to B28 Burkina Riz Gras as the Mossi parallel. Cow default.",
  },

  {
    id: "francophone_wolof_butchery_bridge_sn",
    name: "Francophone-Wolof Butchery Bridge (Senegalese Colonial Vocabulary Dual-Channel)",
    region: "senegal",
    maps_to: [],
    synonyms: ["wolof french bridge", "dakar butchery bridge", "senegal french colonial", "boucherie dakar", "wolof french primal"],
    description: "Senegal's Boucherie stalls and Dibiteries operate in DUAL VOCABULARY: Wolof anatomical terms (sox la/tenderloin, guinar gu/back meat, poitrin mi/brisket, jarret bi/shank, sikh bi/oxtail) coexist with French primal loanwords (filet, faux-filet, poitrine, jarret, queue de boeuf) in the same market stall. The same anatomical muscle is named in two languages by two communities at the same butcher block. This is the West African instance of the Indo-European Colonial Bridges pattern (indo_european_colonial_bridges_in, B19), which documented French-into-Tamil at Pondicherry and Portuguese-into-Konkan at Daman/Goa. The structural parallel is exact: one colonial power (France), one colonized language (Wolof), one muscle, two names, one stall. The bridge is uniquely bidirectional in Senegal: UPSCALE direction — Marche Kermel, hotel Boucheries, and restaurant butcheries use French primal vocabulary with Wolof-speaking customers who understand both; NEIGHBORHOOD direction — Dibiteries and street markets use Wolof anatomical terms with French speakers who also switch registers. The Dijon mustard served with Dibi is the culinary trace of the same French-colonial encounter that produced the dual vocabulary. No other West African country in the current dataset operates with this level of integrated dual-primal-vocabulary at the street level.",
    notes: "Extends the indo_european_colonial_bridges_in family (B19) from South Asia to West Africa — same colonial-bridge structural pattern (one muscle, two languages, two communities, one stall), different colonial power node. Cross-references pondicherry_french_bridge_in (B19) as the structural parallel — French-into-Tamil vs French-into-Wolof. Cross-references dibi_cleaver_chunk_format_sn (Dijon mustard as the culinary trace of the French-colonial encounter). Pairs with sahel_hausa_trade_language_af (this batch) as two distinct linguistic-axis types in a single batch. No canonical mapping — linguistic bridge node. Cow default.",
  },

  // ----- Niger — Batch 27 (2 entities) -----

  {
    id: "taba_nany_pounded_dried_ne",
    name: "Taba-Nany Pounded-Dried (Tuareg Nomadic Preservation — Fifth Dried-Beef Mechanism)",
    region: "niger",
    maps_to: [
      { canonical_id: "chuck_roll", match_type: "cultural", confidence: 0.68, note: "Lean Shoulder boiled heavily, then dried and pounded to fibrous powder" },
      { canonical_id: "inside_round", match_type: "cultural", confidence: 0.72, note: "Lean Round also used; the leanest available muscle is preferred for maximum fibre-separation" },
    ],
    synonyms: ["taba nany", "tuareg beef powder", "tuareg preserved beef", "saharan dried beef", "nomadic beef niger"],
    description: "Taba-Nany is the Tuareg nomadic preservation technique from Niger's desert regions: lean Shoulder or Round is HEAVILY BOILED first (rendering the muscle fully cooked), then sun-dried on desert mats until completely desiccated, then POUNDED WITH MORTAR AND PESTLE until it forms a fine fibrous shelf-stable powder — used as a flavour base for travel broths, rehydrated into soups, or eaten dry as a portable protein source. This establishes the FIFTH DISTINCT DRIED-BEEF MECHANISM in the dataset, distinct from all prior documented methods: (1) Himalayan/Sukuti — AIR-DRY uncooked strips, cooking ingredient (himalayan_sukuti_source_np, Nepal, B21); (2) Mongolian Borts — FREEZE-DRY-THEN-POUND from raw, extreme long-term preservation (mongolian_borts_airdried_mn, B22); (3) Northeast India hearth-SMOKE-dry, fresh-seasoned cooking ingredient (smoked_beef_northeast_axis_in, B18); (4) Kilishi — sheet-dry-paste-fire-flash, snack/street food (kilishi_sheet_dry_af, B26). Taba-Nany's defining sequence is BOIL-DRY-POUND — the cooked-then-preserved logic. It shares the pound-to-powder endpoint with Mongolian Borts but differs fundamentally in the pre-drying step: Borts freeze-dries raw (the freezing does the cellular disruption); Taba-Nany boils first (cooking breaks the collagen into separable fibres). The structural lineage most closely parallels Burmese A-mae-shwar's cooked-pounding logic (B22) — both cook before drying. The desert-mat sun-drying and nomadic-portability context make Taba-Nany the most ecologically specific entry in the dried-beef taxonomy: it is an answer to the specific problem of preserving beef for weeks-long trans-Saharan caravan crossings where fire fuel is scarce and cooling is impossible.",
    notes: "Fifth distinct dried-beef mechanism. Sequence: boil-dry-pound. Distinguished from: himalayan_sukuti_source_np (air-dry uncooked), mongolian_borts_airdried_mn (freeze-dry-pound from raw), smoked_beef_northeast_axis_in (hearth-smoke), kilishi_sheet_dry_af (sheet-dry-paste-flash). Most structurally parallel to Mongolian Borts at the pound-to-powder endpoint but differs at the pre-drying step (boil vs freeze). Forward-ref: niger_kilishi_heartland_ne (the other Niger Tier 3 entry). Cross-references sahelian_parboiling_prerequisite_af (the boil-first step is a structural analog of the Sahel parboil, but here for preservation not tenderizing). Cow default.",
  },

  {
    id: "niger_kilishi_heartland_ne",
    name: "Niger Kilishi Heartland (Madaoua Origin Node — Deepening the Kilishi Axis)",
    region: "niger",
    maps_to: [
      { canonical_id: "inside_round", match_type: "cultural", confidence: 0.85, note: "Inside Round is the canonical Madaoua Kilishi source: the widest continuous flat muscle for maximum sheet size" },
      { canonical_id: "tenderloin", match_type: "cultural", confidence: 0.70, note: "Tenderloin used for premium Madaoua Kilishi — the finest grain for the thinnest translucent sheets" },
    ],
    synonyms: ["madaoua kilishi", "niger kilishi", "kilishi heartland", "kilishi ne", "hausa jerky niger"],
    description: "Madaoua (Niger) is the documented heartland of Kilishi production — the geographic origin node of the format that the kilishi_sheet_dry_af axis (B26) established at the Nigerian level. The Niger version is distinguished by: (1) WIDER CONTINUOUS SHEETS — Madaoua butchers slice Inside Round into the widest possible continuous translucent sheets rather than strips, maximising the paste-adhesion surface; (2) SPECIFIC PASTE RATIO — the Madaoua peanut-paste formula uses a higher proportion of kuli-kuli to cayenne, with more ginger than garlic, producing a nuttier and less fiery profile than Kano Kilishi; (3) PRODUCTION SCALE — Madaoua's dry-season production is a regional export industry, with product traded south into Nigeria (completing the cultural loop with kilishi_sheet_dry_af) and north toward the Saharan trade routes. This entry is a DEEPENING NODE, not a replacement: kilishi_sheet_dry_af remains the parent axis establishing the format generically; niger_kilishi_heartland_ne provides the geographic anchor at the format's acknowledged origin. The Hausa vocabulary at Madaoua (siriri for thin, yanka for cut, kilishi for the finished product) is identical to Kano Hausa — confirming sahel_hausa_trade_language_af's trans-national vocabulary claim with a culinary-production data point. USDA translation: same as kilishi_sheet_dry_af — partially frozen Inside Round sliced paper-thin, but here specifically the widest possible continuous sheet rather than the thicker Nigerian strips.",
    notes: "Deepening node for kilishi_sheet_dry_af (B26, Nigeria) — geographic anchor at the format's origin. Does not replace or supersede the parent axis. The Madaoua vocabulary cross-confirms sahel_hausa_trade_language_af (same Hausa terms across the border). USDA rule: widest possible continuous translucent sheet from partially-frozen Inside Round. Cross-references taba_nany_pounded_dried_ne (the other Niger Tier 3 entry). Cow default.",
  },

  // ----- Pan-Sahel — Batch 27 (1 linguistic-axis entity) -----

  {
    id: "sahel_hausa_trade_language_af",
    name: "Sahel Hausa Trade-Language Axis (Trans-National Butchery Vocabulary)",
    region: "niger",
    maps_to: [],
    synonyms: ["hausa trade language", "sahel lingua franca beef", "hausa butchery axis", "trans-sahel hausa", "hausa vocabulary niger nigeria"],
    description: "Hausa functions as the SAHEL LINGUA FRANCA across at least three countries — Nigeria (Kano, Sabon Gari), Niger (Niamey, Maradi, Zinder, Madaoua), and Chad (forward-ref B28) — making the Hausa term-set a TRANS-NATIONAL BUTCHERY VOCABULARY rather than a Nigeria-specific one. This batch establishes the axis with TWO-COUNTRY EVIDENCE: the same Hausa anatomical terms recur across the Niger/Nigeria border with identical form and meaning: kafa (inside_round/topside), kirji (brisket/chest), kwauri (hind_shank), kaba (zebu hump fat), nama na baya (back meat/striploin+ribeye), nama yau ne (is it today's kill?), and yanka shi siriri (cut it thin). The same butcher-market phrases work identically in Kano and in Niamey. This is the first explicitly LINGUISTIC-AXIS Tier 3 entry in the dataset — prior cross-regional axes have been CULINARY-TECHNIQUE-based (sahelian_parboiling_prerequisite_af, zebu_hump_fat_axis_af, sahel_brochette_ribbon_format_af) or CULTURAL-PRACTICE-based (east_african_choma_parboil_af). The Hausa axis is distinct: it documents that a single VOCABULARY set spans national borders, not just a technique or cut. The dataset parallel is the Francophone-Wolof Bridge in this same batch (francophone_wolof_butchery_bridge_sn), which documents WITHIN-COUNTRY dual-language coexistence. The Hausa axis is ACROSS-COUNTRY single-language continuity. Structural parallel to the Spanish-across-Latin-America family (if one exists in this dataset) or the Arabic-across-MENA pattern. IMPORTANT CAVEAT: this axis is established with 2-country evidence (NG + NE) and FORWARD-REFERENCES Chad as the third confirming node in B28 — claiming Sahel-wide coverage from NG+NE alone would be premature.",
    notes: "First linguistic-axis Tier 3 in the dataset. Two-country evidence (Nigeria B26 + Niger B27); forward-ref to B28 Chad as third node. Cross-references: sahel_brochette_ribbon_format_af (the Hausa vocabulary node most tied to this technique), kilishi_sheet_dry_af and niger_kilishi_heartland_ne (Kilishi as the most documented Hausa-vocabulary culinary object), sahelian_parboiling_prerequisite_af (the parboil axis where Hausa terms are the dominant vocabulary). Pairs with francophone_wolof_butchery_bridge_sn (this batch) as two distinct linguistic-axis types: across-country single-language (Hausa) vs within-country dual-language (Wolof/French). No canonical mapping — linguistic bridge node. Cow default.",
  },

  // ----- Chad — Batch 28 (2 entities) -----

  {
    id: "charmout_sundried_strip_td",
    name: "Charmout Sun-Dried Strip (Chad — Sixth Dried-Beef Preservation Mechanism)",
    region: "chad",
    maps_to: [
      { canonical_id: "inside_round", match_type: "cultural", confidence: 0.75, note: "Inside Round is the primary Charmout source — widest lean muscle for maximum strip surface" },
      { canonical_id: "chuck_roll", match_type: "cultural", confidence: 0.65, note: "Shoulder also used when Round is not available; same lean-strip requirement" },
    ],
    synonyms: ["charmout", "charmout strip", "sun-dried beef chad", "salt-dried strip chad", "sauce charmout source"],
    description: "Charmout is the Chadian sun-dried strip preservation tradition: ultra-lean Inside Round or Shoulder strips are salted, hung on ropes in the Sahelian sun until completely desiccated, then pounded in a mortar to a fibrous shelf-stable powder — used as the base ingredient for Sauce Charmout, a dried-meat sauce served over millet or sorghum porridge and consumed at communal meals across N'Djamena, Sarh, and Moundou. This establishes the SIXTH DISTINCT DRIED-BEEF MECHANISM in the dataset. The five prior documented mechanisms are: (1) Himalayan Sukuti — air-dry uncooked strips, cold-mountain-wind, cooking ingredient (himalayan_sukuti_source_np, B21); (2) Mongolian Borts — freeze-dry-then-pound from raw, entire-carcass winter-supply compression (mongolian_borts_airdried_mn, B22); (3) Northeast India — hearth-smoke-dry, humid-lowland-hill conditions, cooking ingredient (smoked_beef_northeast_axis_in, B18); (4) Kilishi — sheet-dry-peanut-paste-fire-flash, snack/street food (kilishi_sheet_dry_af, B26); (5) Taba-Nany — boil-first-then-dry-and-pound, Tuareg nomadic, desert-mat sun-drying (taba_nany_pounded_dried_ne, B27). Charmout's defining sequence is SALT-STRIP-SUN-DRY-POUND — the salt-cure-and-pulverise logic. It is distinct from Taba-Nany (which boils first before drying; Charmout salts raw then dries) and from Kilishi (which uses peanut-paste coating and fire-flash finishing; Charmout is salt-only and sun-only). The Sahel alone contributes three of the six global dried-beef mechanisms: Kilishi (Nigeria/Niger, the paste-fire sequence), Taba-Nany (Niger, the boil-dry-pound sequence), and Charmout (Chad, the salt-dry-pound sequence). USDA translation: partially-frozen Inside Round sliced into long thin strips, salted heavily, air-dried until brittle, then pounded with a mortar and pestle to coarse fibrous powder.",
    notes: "Sixth distinct dried-beef mechanism in the dataset. Sequence: salt-strip-sun-dry-pound. Distinguished from: himalayan_sukuti_source_np (unsalted air-dry), mongolian_borts_airdried_mn (freeze-dry-pound from raw), smoked_beef_northeast_axis_in (hearth-smoke), kilishi_sheet_dry_af (peanut-paste fire-flash), taba_nany_pounded_dried_ne (boil-first then dry-pound). The Sahel contributes three of the six global mechanisms — Kilishi, Taba-Nany, Charmout. Cross-references sahelian_parboiling_prerequisite_af (Charmout bypasses the parboil entirely — preservation replaces the tenderizing step). Cow default.",
  },

  {
    id: "daraba_okra_collagen_matrix_td",
    name: "Daraba Okra-Collagen Matrix (Chad — Bone-In Stew Architecture)",
    region: "chad",
    maps_to: [
      { canonical_id: "chuck_roll", match_type: "cultural", confidence: 0.78, note: "Shoulder/Chuck is the primary Daraba source; bone-in chunks deliver marrow and connective-tissue emulsification" },
      { canonical_id: "fore_shank", match_type: "cultural", confidence: 0.72, note: "Fore Shank provides high-collagen bone-in pieces for maximum okra-mucilage binding" },
    ],
    synonyms: ["daraba", "daraba stew", "okra peanut stew chad", "daraba cut"],
    description: "Daraba is Chad's iconic stew of okra + peanut paste + greens (sorrel, moringa) + meat, which requires bone-in jagged chunks of Shoulder or Fore Shank with cleaver-hacked irregularity — the marrow and connective tissue emulsify with the natural okra mucilage to produce the signature sticky-thick texture. The mechanics are the same as Mali's Tiguadege na (tiguadege_collagen_matrix_ml, B26) and Senegal's Thieboudienne (thieboudienne_collagen_matrix_sn, B27): bone-in + collagen + slow braise = emulsification with the dominant stew binder. But the three documented stew families differ in their binder and vehicle: Mali Tiguadege uses peanut-butter binder over millet base; Senegal Thieboudienne uses tomato-oil binder over broken rice; Chad Daraba uses okra-mucilage + peanut-paste dual binder over millet/sorghum porridge. Daraba's okra-mucilage dual-binder mechanism is the most structurally complex of the three: the okra provides natural polysaccharide thickening while the peanut paste provides fat-emulsification, and the bone-in marrow bridges the two — trimmed boneless shoulder produces a thin, separated sauce rather than the correct sticky-thick matrix. The pattern of bone-in collagen emulsification in West African stews now has three documented variations across the Sahel: peanut (Mali), rice (Senegal), and okra-peanut (Chad). USDA translation: bone-in Chuck Roast or Bone-In Fore Shank, cleaver-chopped across the bone into rough 1.5–2 inch chunks — do not trim cartilage or remove marrow bones.",
    notes: "Third node of the West African bone-in collagen-emulsification stew pattern. Parallels tiguadege_collagen_matrix_ml (Mali, peanut) and thieboudienne_collagen_matrix_sn (Senegal, rice) — same architectural logic (bone-in + slow braise + collagen emulsification), three different stew families. Cross-references sahelian_parboiling_prerequisite_af — Daraba also follows the braise-first rule, extending the parboiling axis to Chad (5th country). Cow default.",
  },

  // ----- Burkina Faso — Batch 28 (1 entity) -----

  {
    id: "riz_gras_transit_matrix_bf",
    name: "Riz Gras Transit Matrix (Burkina Faso — National Fatty-Rice Bone-In Requirement)",
    region: "burkina_faso",
    maps_to: [
      { canonical_id: "chuck_roll", match_type: "cultural", confidence: 0.78, note: "Shoulder/Chuck is the primary Riz Gras source; bone-in chunks deliver collagen for oil-rice emulsification" },
      { canonical_id: "short_ribs", match_type: "cultural", confidence: 0.73, note: "Short Ribs with bones intact; marrow and intercostal fat render into the tomato-oil base" },
      { canonical_id: "fore_shank", match_type: "cultural", confidence: 0.68, note: "Fore Shank used when Chuck/Ribs are scarce; collagen function preserved regardless of specific cut" },
    ],
    synonyms: ["riz gras", "fatty rice burkina", "riz gras cut", "burkinabe rice stew"],
    description: "Riz Gras ('Fatty Rice') is Burkina Faso's defining national one-pot dish, geographically positioned at the transit corridor between northern Sahel cattle producers (the transhumance pastoral belt) and southern coastal consumer markets. The dish requires cleaver-hacked Shoulder, Short Ribs, or Fore Shank with bones and external fat FULLY INTACT — the rendering collagen and fat emulsify with tomato paste and vegetable oil to coat the rice grains, producing the signature glossy mouthfeel and golden colour. Trimmed boneless shoulder produces dry rice without the characteristic oil-sheen: the emulsification is mechanically dependent on the marrow in contact with the cooking liquid during the initial long simmer. Riz Gras is the ARCHITECTURAL SIBLING of Senegalese Thieboudienne (thieboudienne_collagen_matrix_sn, B27): both are rice-and-beef one-pot dishes requiring bone-in collagen for oil-rice emulsification. The structural differences: (1) Riz Gras is tomato-paste-driven and uses fattier cuts (Chuck/Ribs/Shank rather than Jarret/Poitrine); (2) Thieboudienne uses broken rice and a more savory, less oil-forward base; (3) Riz Gras is the TRANSIT MARKET dish — the transit-corridor geography means it uses whatever bone-in fatty cut arrived with the cattle drive, while Thieboudienne uses the specifically requested Jarret or Poitrine. The Senegal-Burkina rice-stew sibling pair is now documented as a distinct West African rice-architectural pattern, parallel to the Mali-Senegal-Burkina-Chad peanut-stew family. USDA translation: Bone-In Chuck Roast or Bone-In Short Ribs, cleaver-chopped into rough 2-inch chunks — do not trim external fat; the oil-emulsification depends on the rendered fat.",
    notes: "Architectural sibling of thieboudienne_collagen_matrix_sn (Senegal, B27) — same bone-in collagen-emulsification mechanism, different stew vehicle (tomato-forward vs savory base, fattier cuts vs Jarret/Poitrine). Cross-references sahelian_parboiling_prerequisite_af — Riz Gras follows the braise-first rule, extending the parboiling axis to Burkina Faso (6th country). Cross-references zebu_hump_fat_axis_af — Burkina's toggo hump is the premier fat modifier for premium Riz Gras. The Senegal-Burkina rice-stew pair joins the Mali-Senegal-Burkina-Chad peanut-stew family as a documented West African stew-architectural pattern. Cow default.",
  },

  // ----- Pan-Sahel — Batch 28 (1 linguistic/structural-axis entity) -----

  {
    id: "francophone_west_africa_bridge_af",
    name: "Francophone West Africa Bridge (4-Country Colonial Vocabulary Parent Axis)",
    region: "burkina_faso",
    maps_to: [],
    synonyms: ["francophone sahel bridge", "french west africa butchery", "french colonial bridge africa", "moore french bridge", "bambara french bridge"],
    description: "The dual-vocabulary mechanic — local language and French coexisting at the same butcher block — is confirmed across four West African Sahel countries: Senegal (Wolof + French, the deepest-evidence node, francophone_wolof_butchery_bridge_sn, B27), Burkina Faso (Moore + French, established this batch), Mali (Bambara + French, present as French-loanword adoption in the B26 dataset but not formalised as a bridge node), and Niger (Hausa + French, present as a French-alternate register in the B27 phrase set). This parent axis documents the cross-country pattern without overwriting the country-specific nodes. The Senegalese Wolof node remains the deepest-evidence country, with the most fully integrated dual-vocabulary at the street level (francophone_wolof_butchery_bridge_sn). The Burkinabe Moore/French coexistence is established here as the second formal bridge node; Mali and Niger operate French as an upscale-stall alternate rather than a full bidirectional dual-vocabulary. The Burkina bridge differs structurally from Senegal's: Burkina's Moore + French coexistence is primarily REGISTER-SPLIT (Moore at neighborhood Boucheries and market stalls; French at upscale Rood-Woko Grand Marche and hotel butcheries), whereas Senegal's Wolof + French is BIDIRECTIONAL at the same stall regardless of register. This parent axis pairs with the Sahel Hausa Trade-Language Axis (sahel_hausa_trade_language_af, B27) as the two documented linguistic-axis types in the Sahel: WITHIN-COUNTRY dual-language (francophone bridges) vs ACROSS-COUNTRY single-language (Hausa). Structural parallel to the Indo-European Colonial Bridges family (indo_european_colonial_bridges_in, B19), which documented French-into-Tamil at Pondicherry and Portuguese-into-Konkan at Daman/Goa — the same colonial-bridge logic, with France as the common colonial power. The colonial-bridge family now has three-continent coverage: South Asia (French/Portuguese, B19), West Africa (French, B27/B28), and Latin America (Spanish, implicit in deployed regions).",
    notes: "Parent axis above francophone_wolof_butchery_bridge_sn (B27, Senegal — deepest-evidence country node). Does not replace or subsume the Wolof-specific node. Four-country coverage: SN (formal, deepest), BF (formal, this batch), ML/NE (implicit, French-loanword register). Cross-references: francophone_wolof_butchery_bridge_sn (the deepest country-specific evidence node), sahel_hausa_trade_language_af (the other linguistic axis — across-country vs within-country), indo_european_colonial_bridges_in (structural parallel, same colonial power, South Asian instance). No canonical mapping — linguistic bridge parent axis. Cow default.",
  },

] as const;
