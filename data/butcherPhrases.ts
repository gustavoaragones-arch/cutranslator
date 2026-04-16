export type ButcherPhrase = {
  readonly canonicalId: string;
  readonly region: string;
  readonly phrase: string;
  readonly notes?: string;
};

export const butcherPhrases: readonly ButcherPhrase[] = [
  // FRANCE
  { canonicalId: "striploin", region: "france", phrase: "Contre-filet, cuisson saignante", notes: "Saignant is the default preferred doneness in France" },
  { canonicalId: "ribeye", region: "france", phrase: "Entrecôte, cuisson à point" },
  { canonicalId: "tenderloin", region: "france", phrase: "Filet de boeuf, cuisson saignante" },
  { canonicalId: "skirt", region: "france", phrase: "Onglet, cuisson saignante", notes: "Onglet is a bistro classic — ask for it saignant" },
  { canonicalId: "flank", region: "france", phrase: "Bavette, cuisson saignante" },
  { canonicalId: "hanger", region: "france", phrase: "Onglet, saignant s'il vous plaît", notes: "Only one onglet per animal — not always available" },
  { canonicalId: "prime_rib", region: "france", phrase: "Côte de boeuf pour deux, saignante", notes: "Côte de boeuf is typically shared — specify number of diners" },
  { canonicalId: "sirloin_cap", region: "france", phrase: "Aiguillette de rumsteck ou bavette d'aloyau" },

  // SPAIN
  { canonicalId: "striploin", region: "spain", phrase: "Lomo bajo, al punto" },
  { canonicalId: "ribeye", region: "spain", phrase: "Chuletón, poco hecho", notes: "In Basque Country, ask for txuletón" },
  { canonicalId: "tenderloin", region: "spain", phrase: "Solomillo, al punto" },
  { canonicalId: "prime_rib", region: "spain", phrase: "Chuletón de buey, poco hecho", notes: "Specify vaca vieja (old cow) for aged, well-marbled meat" },

  // ARGENTINA
  { canonicalId: "ribeye", region: "argentina", phrase: "Ojo de bife, a punto", notes: "Ojo de bife is the boneless center eye" },
  { canonicalId: "striploin", region: "argentina", phrase: "Bife de chorizo, a punto", notes: "Nothing to do with sausage — chorizo refers to the elongated shape" },
  { canonicalId: "tenderloin", region: "argentina", phrase: "Lomo, a punto o jugoso" },
  { canonicalId: "flank", region: "argentina", phrase: "Vacío, vuelta y vuelta", notes: "Vuelta y vuelta means seared briefly on each side" },
  { canonicalId: "short_ribs", region: "argentina", phrase: "Asado de tira, bien cocido", notes: "Ribs are typically cooked longer in Argentine asado" },
  { canonicalId: "sirloin_cap", region: "argentina", phrase: "Tapa de cuadril, a punto" },

  // MEXICO
  { canonicalId: "skirt", region: "mexico", phrase: "Arrachera bien marinada, término medio", notes: "Arrachera is always marinated — ask for it in tacos or as a plato" },
  { canonicalId: "striploin", region: "mexico", phrase: "New York, término medio" },
  { canonicalId: "ribeye", region: "mexico", phrase: "Rib eye, término medio" },

  // BRAZIL
  { canonicalId: "sirloin_cap", region: "brazil", phrase: "Picanha, mal passada ou ao ponto", notes: "In a churrascaria, the waiter carves tableside — say 'mal passada' for rare" },
  { canonicalId: "striploin", region: "brazil", phrase: "Contra filé, ao ponto" },
  { canonicalId: "tenderloin", region: "brazil", phrase: "Filé mignon, ao ponto para mal" },
  { canonicalId: "flank", region: "brazil", phrase: "Fraldinha, ao ponto" },
  { canonicalId: "tri_tip", region: "brazil", phrase: "Maminha, ao ponto", notes: "Often grilled whole on the skewer and sliced" },

  // UK
  { canonicalId: "ribeye", region: "uk", phrase: "Rib-eye steak, medium rare please" },
  { canonicalId: "striploin", region: "uk", phrase: "Sirloin steak, medium rare", notes: "UK 'sirloin' = US 'striploin' — not the same as US sirloin" },
  { canonicalId: "tenderloin", region: "uk", phrase: "Fillet steak, rare to medium rare" },
  { canonicalId: "prime_rib", region: "uk", phrase: "Fore rib, medium rare", notes: "Ask for 'on the bone' if you want it bone-in" },

  // COLOMBIA
  { canonicalId: "striploin", region: "colombia", phrase: "Churrasco, término medio", notes: "In Colombia, churrasco means striploin steak — not a cooking method" },
  { canonicalId: "sirloin_cap", region: "colombia", phrase: "Punta de anca, término medio" },

  // URUGUAY
  { canonicalId: "striploin", region: "uruguay", phrase: "Bife angosto, a punto" },
  { canonicalId: "flank", region: "uruguay", phrase: "Vacío, a punto o bien cocido" },
  { canonicalId: "short_ribs", region: "uruguay", phrase: "Asado de tira, bien cocido", notes: "Same preparation as Argentine asado — long, slow cooking" },

  // CHILE
  { canonicalId: "striploin", region: "chile", phrase: "Lomo liso, a punto" },
  { canonicalId: "short_ribs", region: "chile", phrase: "Asado de tira, bien cocido" },

  // GERMANY
  { canonicalId: "ribeye", region: "germany", phrase: "Ein Entrecôte bitte, medium rosa", notes: "Rosa (pink) is the German equivalent of medium rare" },
  { canonicalId: "striploin", region: "germany", phrase: "Ein Rumpsteak bitte, rosa gebraten", notes: "German Rumpsteak = US NY Strip, not rump" },
  { canonicalId: "tenderloin", region: "germany", phrase: "Rinderfilet, medium bitte" },
  { canonicalId: "sirloin_cap", region: "germany", phrase: "Tafelspitz, bitte", notes: "Tafelspitz is traditionally boiled, not grilled — specify if you want it as steak" },

  // ITALY
  { canonicalId: "ribeye", region: "italy", phrase: "Una costata, cottura al sangue", notes: "Al sangue = rare; Italian steakhouses default to rare" },
  { canonicalId: "t_bone", region: "italy", phrase: "Una Fiorentina, al sangue per favore", notes: "Fiorentina is always served very rare — ordering well-done is considered a faux pas" },
  { canonicalId: "tenderloin", region: "italy", phrase: "Un filetto, cottura media" },
  { canonicalId: "striploin", region: "italy", phrase: "Un controfiletto, al punto" },

  // PORTUGAL
  { canonicalId: "sirloin_cap", region: "portugal", phrase: "Picanha, mal passada por favor" },
  { canonicalId: "tenderloin", region: "portugal", phrase: "Lombinho, mal passado" },

  // NETHERLANDS
  { canonicalId: "striploin", region: "netherlands", phrase: "Entrecôte, half doorbakken alstublieft", notes: "In Dutch restaurants, entrecôte refers to striploin steaks" },
  { canonicalId: "tenderloin", region: "netherlands", phrase: "Ossenhaas, rood alstublieft", notes: "Rood (red) = rare" },
  { canonicalId: "sirloin_cap", region: "netherlands", phrase: "Staartstuk als steak, half doorbakken" },

  // DENMARK
  { canonicalId: "ribeye", region: "denmark", phrase: "En entrecôte, medium tak", notes: "Danish steakhouses use French terminology for premium cuts" },
  { canonicalId: "tenderloin", region: "denmark", phrase: "Mørbrad, medium tak" },

  // NORWAY
  { canonicalId: "ribeye", region: "norway", phrase: "Jeg vil ha en entrecôte, medium stekt", notes: "Very natural Norwegian phrasing" },
  { canonicalId: "striploin", region: "norway", phrase: "Kan jeg få ytrefilet i skiver?", notes: "Typical butcher phrasing — asking for slices" },
  { canonicalId: "tenderloin", region: "norway", phrase: "Har du indrefilet av storfe?", notes: "'Do you have beef tenderloin?'" },
  { canonicalId: "flank", region: "norway", phrase: "Har dere flankstek?", notes: "English loanword commonly used" },

  // SWEDEN
  { canonicalId: "ribeye", region: "sweden", phrase: "Jag vill ha en entrecôte, medium", notes: "Very natural Swedish" },
  { canonicalId: "striploin", region: "sweden", phrase: "Kan jag få ryggbiff i skivor?", notes: "Common butcher phrasing" },
  { canonicalId: "tenderloin", region: "sweden", phrase: "Har ni oxfilé?", notes: "Standard" },
  { canonicalId: "sirloin_cap", region: "sweden", phrase: "Har ni picanha eller rostbiff med fettkappa?", notes: "Important: traditional Swedish butchery removes fat cap; specify you want it kept" },
  { canonicalId: "flank", region: "sweden", phrase: "Har ni flankstek?", notes: "English term commonly used" },

  // FINLAND
  { canonicalId: "ribeye", region: "finland", phrase: "Haluaisin entrecôten, medium", notes: "Restaurant phrasing" },
  { canonicalId: "striploin", region: "finland", phrase: "Onko teillä ulkofileetä?", notes: "'Do you have outside fillet?'" },
  { canonicalId: "tenderloin", region: "finland", phrase: "Haluaisin sisäfileetä", notes: "Standard" },
  { canonicalId: "flank", region: "finland", phrase: "Onko teillä flank steakia tai kylkeä?", notes: "Hybrid phrasing — English + Finnish" },
  { canonicalId: "top_sirloin", region: "finland", phrase: "Haluaisin paahtopaistin", notes: "Extremely natural — asking for a roast, not a steak" },

  // RUSSIA
  { canonicalId: "ribeye", region: "russia", phrase: "Дайте рибай стейк, средней прожарки", notes: "Modern Russian uses 'ribay' transliteration; 'средней прожарки' = medium" },
  { canonicalId: "tenderloin", region: "russia", phrase: "У вас есть вырезка?", notes: "'Do you have tenderloin?' — standard request" },
  { canonicalId: "striploin", region: "russia", phrase: "Дайте стейк из тонкого края", notes: "'Steak from the thin edge' — Russian striploin" },
  { canonicalId: "brisket", region: "russia", phrase: "Мне нужна грудинка для тушения", notes: "'Brisket for braising' — common phrasing" },
  { canonicalId: "hind_shank", region: "russia", phrase: "Дайте голяшку для супа", notes: "Shank is explicitly requested for soup" },

  // UKRAINE
  { canonicalId: "ribeye", region: "ukraine", phrase: "Дайте рібай стейк, medium rare", notes: "Ukrainian restaurants commonly mix English doneness terms" },
  { canonicalId: "tenderloin", region: "ukraine", phrase: "Чи є у вас вирізка?", notes: "'Do you have tenderloin?' in Ukrainian" },
  { canonicalId: "striploin", region: "ukraine", phrase: "Дайте стейк із тонкого краю" },
  { canonicalId: "brisket", region: "ukraine", phrase: "Мені потрібна грудинка для тушкування" },
  { canonicalId: "hind_shank", region: "ukraine", phrase: "Дайте гомілку для супу", notes: "Using Ukrainian гомілка rather than Russian голяшка" },

  // BELGIUM
  { canonicalId: "ribeye", region: "belgium", phrase: "Un entrecôte, saignant s'il vous plaît", notes: "Belgian-French phrasing mirrors France" },
  { canonicalId: "tenderloin", region: "belgium", phrase: "Un filet de bœuf, à point", notes: "Same as French" },
  { canonicalId: "sirloin_cap", region: "belgium", phrase: "De la poire de bœuf, saignant", notes: "Poire = sirloin cap in Belgian butchery" },
  { canonicalId: "chuck_roll", region: "belgium", phrase: "De la viande à carbonade, environ un kilo", notes: "Request for Belgian national dish" },

  // POLAND
  { canonicalId: "ribeye", region: "poland", phrase: "Poproszę antrykot, średnio wysmażony", notes: "Polish 'antrykot' = ribeye; średnio wysmażony = medium" },
  { canonicalId: "tenderloin", region: "poland", phrase: "Czy mają państwo polędwicę wołową?", notes: "Formal Polish: 'Do you have beef tenderloin?'" },
  { canonicalId: "striploin", region: "poland", phrase: "Poproszę rostbef", notes: "Careful: Polish rostbef = striploin, NOT US-style roast beef preparation" },
  { canonicalId: "short_ribs", region: "poland", phrase: "Poproszę szponder w długich kawałkach", notes: "'Szponder in long pieces' — clarifies you want BBQ-style, not soup-cut" },
  { canonicalId: "inside_round", region: "poland", phrase: "Poproszę zrazową górną na zrazy", notes: "Explicit cultural reference: top round for Polish beef rolls" },
] as const;
