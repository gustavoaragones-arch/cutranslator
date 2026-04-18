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

  // CZECH REPUBLIC
  { canonicalId: "ribeye", region: "czechia", phrase: "Prosil bych vysoký roštěnec, středně krvavý", notes: "'High roast, medium bloody' — Czech steak phrasing" },
  { canonicalId: "tenderloin", region: "czechia", phrase: "Prosil bych svíčkovou na steaky", notes: "Specifying 'for steaks' — otherwise may assume for the cream sauce dish" },
  { canonicalId: "striploin", region: "czechia", phrase: "Nízký roštěnec, nakrájet na steaky", notes: "'Low roast, cut into steaks'" },
  { canonicalId: "hind_shank", region: "czechia", phrase: "Kližku na guláš, prosím", notes: "'Shank for goulash please'" },
  { canonicalId: "sirloin_cap", region: "czechia", phrase: "Květovou špičku s tukovým krytím", notes: "'Flower tip with fat cap' — essential if you want picanha-style" },

  // AUSTRIA
  { canonicalId: "ribeye", region: "austria", phrase: "Ich hätte gerne einen Rostbraten, rosa bitte", notes: "'I'd like a rostbraten, pink please'" },
  { canonicalId: "striploin", region: "austria", phrase: "Beiried, bitte, als Steaks geschnitten", notes: "'Beiried, cut as steaks please'" },
  { canonicalId: "tenderloin", region: "austria", phrase: "Haben Sie Lungenbraten?", notes: "'Do you have tenderloin?'" },
  { canonicalId: "sirloin_cap", region: "austria", phrase: "Tafelspitz, bitte — mit Fettdeckel", notes: "Specify fat cap if you want to grill it rather than boil it" },
  { canonicalId: "hind_shank", region: "austria", phrase: "Wadschinken zum Siedefleisch", notes: "'Shank for boiled beef' — classic Austrian request" },

  // SLOVAKIA
  { canonicalId: "ribeye", region: "slovakia", phrase: "Prosím si vysoký roštenec, stredne krvavý", notes: "Mirrors Czech phrasing with Slovak pronunciation" },
  { canonicalId: "tenderloin", region: "slovakia", phrase: "Máte sviečkovicu?", notes: "'Do you have tenderloin?'" },
  { canonicalId: "hind_shank", region: "slovakia", phrase: "Glejovku na guláš, prosím", notes: "'Shank for goulash'" },

  // HUNGARY
  { canonicalId: "ribeye", region: "hungary", phrase: "Kérek egy rostélyost, közepesen átsütve", notes: "'I'd like a ribeye, medium'" },
  { canonicalId: "tenderloin", region: "hungary", phrase: "Kérek bélszínt", notes: "'I'd like tenderloin'" },
  { canonicalId: "striploin", region: "hungary", phrase: "Hátszín szelet, kérem", notes: "'Striploin slice, please'" },
  { canonicalId: "hind_shank", region: "hungary", phrase: "Lábszárt kérek pörközthöz", notes: "'Shank for pörkölt' — specifying the dish communicates the exact cut needed" },

  // CROATIA
  { canonicalId: "tenderloin", region: "croatia", phrase: "Želio bih biftek, srednje pečen", notes: "In Croatia, biftek = tenderloin specifically" },
  { canonicalId: "striploin", region: "croatia", phrase: "Ramstek za roštilj, molim", notes: "'Striploin for the grill, please'" },
  { canonicalId: "ribeye", region: "croatia", phrase: "Pržol, na kosti ako imate", notes: "'Ribeye, bone-in if you have it'" },
  { canonicalId: "inside_round", region: "croatia", phrase: "Frikando za pašticadu", notes: "Specifying the dish communicates the exact cut and prep needed" },
  { canonicalId: "short_ribs", region: "croatia", phrase: "Rebra u američkom rezu, za roštilj", notes: "'Ribs in American cut, for grilling' — essential to avoid thin soup ribs" },

  // SLOVENIA
  { canonicalId: "tenderloin", region: "slovenia", phrase: "Prosil bi pljučno pečenko", notes: "'I'd like lung roast (tenderloin)'" },
  { canonicalId: "striploin", region: "slovenia", phrase: "Nizek hrbet za steake, prosim", notes: "'Low back for steaks, please'" },
  { canonicalId: "hind_shank", region: "slovenia", phrase: "Boge za golaž, prosim", notes: "'Shank for goulash'" },
  { canonicalId: "hanger", region: "slovenia", phrase: "Imate veverico?", notes: "'Do you have squirrel (hanger steak)?' — butcher will understand" },

  // BOSNIA
  { canonicalId: "tenderloin", region: "bosnia", phrase: "Molim vas biftek, srednje pečen", notes: "Standard tender cut request" },
  { canonicalId: "chuck_roll", region: "bosnia", phrase: "Vrat, dva puta mljeveno, za ćevape", notes: "'Neck, double ground, for ćevapi' — the authentic specification" },
  { canonicalId: "brisket", region: "bosnia", phrase: "Grudi s kosti za bosanski lonac", notes: "'Brisket with bone for Bosnian pot'" },

  // MONTENEGRO
  { canonicalId: "tenderloin", region: "montenegro", phrase: "Molim Vas biftek, debela šnita", notes: "'Tenderloin, thick slice' — for Njegoški odrezak" },
  { canonicalId: "chuck_roll", region: "montenegro", phrase: "Vrat s kosti, za ispod sača", notes: "'Neck with bone, for under the sač'" },
  { canonicalId: "striploin", region: "montenegro", phrase: "Ramstek za roštilj", notes: "'Striploin for the grill'" },

  // ROMANIA
  { canonicalId: "tenderloin", region: "romania", phrase: "Aș dori mușchiuleț de vită, mediu", notes: "'I'd like beef tenderloin, medium'" },
  { canonicalId: "ribeye", region: "romania", phrase: "Antricot la grătar, mediu spre rar", notes: "'Ribeye for grilling, medium rare'" },
  { canonicalId: "striploin", region: "romania", phrase: "Vrabioară, tăiată în felii pentru steak", notes: "'Striploin, sliced for steak'" },
  { canonicalId: "hind_shank", region: "romania", phrase: "Rasol cu os, pentru ciorbă", notes: "'Shank with bone, for sour soup' — the dish defines the cut" },

  // BULGARIA
  { canonicalId: "tenderloin", region: "bulgaria", phrase: "Може ли бонфиле, средно изпечено", notes: "'May I have tenderloin, medium'" },
  { canonicalId: "ribeye", region: "bulgaria", phrase: "Антрикот за скара, алангле", notes: "'Ribeye for grill, rare' — using the French-origin Bulgarian term" },
  { canonicalId: "hind_shank", region: "bulgaria", phrase: "Джолан за печене, цял", notes: "'Shank for roasting, whole' — Bulgarian shank is a centerpiece roast" },
  { canonicalId: "striploin", region: "bulgaria", phrase: "Контрафиле, средно изпечено", notes: "'Striploin, medium'" },

  // ALBANIA
  { canonicalId: "tenderloin", region: "albania", phrase: "Do të doja fileto, mesatar", notes: "'I'd like tenderloin, medium'" },
  { canonicalId: "ribeye", region: "albania", phrase: "Antrikotë për skarë", notes: "'Ribeye for grill'" },
  { canonicalId: "chuck_roll", region: "albania", phrase: "Qafë, dy herë e grirë, për qofte", notes: "'Neck, ground twice, for qofte' — the authentic specification" },

  // NORTH MACEDONIA
  { canonicalId: "tenderloin", region: "north_macedonia", phrase: "Ве молам бифтек, средно печено", notes: "'Please, biftek, medium'" },
  { canonicalId: "ribeye", region: "north_macedonia", phrase: "Антрикот за скара", notes: "'Ribeye for grill'" },
  { canonicalId: "chuck_roll", region: "north_macedonia", phrase: "Врат, двапати мелено, за ќебапи", notes: "'Neck, double ground, for kebapi'" },

  // TURKEY
  { canonicalId: "ribeye", region: "turkey", phrase: "Antrikot istiyorum, orta pişmiş", notes: "'I want ribeye, medium'" },
  { canonicalId: "tenderloin", region: "turkey", phrase: "Bonfile var mı?", notes: "'Do you have tenderloin?'" },
  { canonicalId: "striploin", region: "turkey", phrase: "Kontrafile, biftek olarak", notes: "'Striploin, as steak'" },
  { canonicalId: "brisket", region: "turkey", phrase: "Döş istiyorum, bütün — kıyma yapmayın", notes: "'I want brisket, whole — don't grind it.' Essential — otherwise they may grind it for kebabs." },
  { canonicalId: "hind_shank", region: "turkey", phrase: "İncik, haşlama için", notes: "'Shank, for haşlama (stew)'" },

  // GREECE
  { canonicalId: "ribeye", region: "greece", phrase: "Θα ήθελα σπαλομπριζόλα, μισοψημένη", notes: "'I'd like a rib steak, medium' — specify σπαλομπριζόλα, NOT generic μπριζόλα" },
  { canonicalId: "tenderloin", region: "greece", phrase: "Έχετε φιλέτο;", notes: "'Do you have tenderloin?'" },
  { canonicalId: "striploin", region: "greece", phrase: "Κόντρα φιλέτο, για σχάρα", notes: "'Counter-filet, for the grill'" },
  { canonicalId: "hind_shank", region: "greece", phrase: "Ποντίκι, για σούπα", notes: "'Mouse (shank), for soup'" },
  { canonicalId: "chuck_roll", region: "greece", phrase: "Ελιά, για φούρνο με πατάτες", notes: "'Olive (chuck), for oven with potatoes' — specifying the classic Greek preparation" },

  // ISRAEL
  { canonicalId: "ribeye", region: "israel", phrase: "אני רוצה אנטריקוט, מדיום", notes: "'I want antricot (Number 1), medium' — Hebrew transliteration of English doneness" },
  { canonicalId: "tenderloin", region: "israel", phrase: "יש פילה בקר?", notes: "'Do you have beef filet (Number 3)?'" },
  { canonicalId: "striploin", region: "israel", phrase: "סינטה לגריל", notes: "'Sinta (Number 2) for grill'" },
  { canonicalId: "short_ribs", region: "israel", phrase: "אסאדו לבישול ארוך", notes: "'Asado (Number 9) for slow cooking' — remember: asado = the cut, not the method" },
  { canonicalId: "fore_shank", region: "israel", phrase: "שריר לחמין", notes: "'Shrir (shank, Number 18) for Hamin/Cholent'" },

  // IRELAND
  { canonicalId: "striploin", region: "ireland", phrase: "A sirloin steak, medium rare please", notes: "Remember: Irish 'sirloin' = US striploin/NY strip" },
  { canonicalId: "tenderloin", region: "ireland", phrase: "Have you a nice fillet steak?", notes: "Natural Irish phrasing" },
  { canonicalId: "ribeye", region: "ireland", phrase: "A rib steak, on the bone if you have it", notes: "'Rib steak' = bone-in; 'ribeye' = boneless in Ireland" },
  { canonicalId: "hind_shank", region: "ireland", phrase: "Some shin for a stew, please", notes: "Shin = shank in Irish/UK butchery" },
  { canonicalId: "brisket", region: "ireland", phrase: "A piece of brisket for corning", notes: "Specify brisket if you want US-style — otherwise you'll get silverside" },

  // SWITZERLAND
  { canonicalId: "striploin", region: "switzerland", phrase: "Ich hät gärn es Entrecôte, saignant", notes: "'I'd like an entrecôte (striploin), medium rare' — using French doneness even in German" },
  { canonicalId: "ribeye", region: "switzerland", phrase: "Haben Sie Hohrücken-Steak?", notes: "'Do you have ribeye?' — must use Hohrücken, NOT entrecôte" },
  { canonicalId: "tenderloin", region: "switzerland", phrase: "Es Filet, bitte, am Stück", notes: "'A fillet, please, in one piece'" },
  { canonicalId: "brisket", region: "switzerland", phrase: "Federstück am Stück, mit Fettdeckel bitte", notes: "'Brisket whole, with fat cap please' — essential if you want to smoke it American-style" },
  { canonicalId: "sirloin_cap", region: "switzerland", phrase: "Tafelspitz — für den Grill, nicht zum Sieden", notes: "'Tafelspitz — for grilling, not for boiling' — specifying modern use vs traditional" },
] as const;
