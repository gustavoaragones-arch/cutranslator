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

  // EGYPT
  { canonicalId: "hind_shank", region: "egypt", phrase: "عاوز موزة طازة، بالعضم", notes: "'I want fresh Moza, with the bone' — the prestige request" },
  { canonicalId: "striploin", region: "egypt", phrase: "عاوز إيرق روستو مقطع ستيك", notes: "'I want Erq Rosto cut as steak' — clarifies you want thick, not thin" },
  { canonicalId: "chuck_roll", region: "egypt", phrase: "سن مكعبات لكباب حلة", notes: "'Sinn (neck) cubed for Kabab Halla' — dish-driven request" },
  { canonicalId: "ribeye", region: "egypt", phrase: "انتركوت سميك من فضلك", notes: "'Thick entrecote please' — specifies steakhouse thickness" },
  { canonicalId: "inside_round", region: "egypt", phrase: "بفتيك رفيع مضروب", notes: "'Thin pounded Bofteek' — the traditional pan-frying format" },

  // IRAN
  { canonicalId: "short_plate", region: "iran", phrase: "گوشت قلوه‌گاه برای کباب کوبیده", notes: "'Gholveh-gah meat for Kebab Koobideh' — the correct fatty cut" },
  { canonicalId: "tenderloin", region: "iran", phrase: "فیله تمیز برای کباب برگ", notes: "'Clean Fileh for Kebab Barg' — specifies silver-skin removal" },
  { canonicalId: "hind_shank", region: "iran", phrase: "ماهیچه کامل، پاک کرده", notes: "'Whole Mahicheh, trimmed clean' — the luxury-cut request" },
  { canonicalId: "striploin", region: "iran", phrase: "راسته برای استیک", notes: "'Rasteh for steak' — clarifies modern steakhouse use" },
  { canonicalId: "ribeye", region: "iran", phrase: "انترکوت ضخیم لطفاً", notes: "'Thick antrecote please' — modern Tehran steakhouse phrasing" },

  // MOROCCO
  { canonicalId: "hind_shank", region: "morocco", phrase: "الملج للطاجين، بالعضم", notes: "'Mellaj for tajine, with the bone' — the mandatory configuration" },
  { canonicalId: "chuck_blade", region: "morocco", phrase: "الكتف مفروم بلا بهارات", notes: "'Shoulder ground WITHOUT spices' — critical to avoid default Kefta spice blend" },
  { canonicalId: "inside_round", region: "morocco", phrase: "بفتيك رفيع للقلي", notes: "'Thin Bofteek for frying' — traditional format" },
  { canonicalId: "ribeye", region: "morocco", phrase: "أنتريكوط سميك للشواء", notes: "'Thick entrecôte for grilling' — clarifies BBQ intent" },

  // UZBEKISTAN
  { canonicalId: "brisket", region: "uzbekistan", phrase: "Palovbop To'sh, yog' bilan", notes: "'Brisket for Plov, with the fat' — fat retention is mandatory" },
  { canonicalId: "ribeye", region: "uzbekistan", phrase: "Antrekotni qalinroq qilib kesing", notes: "'Cut the Antrekot thick' — essential for US-style ribeye" },
  { canonicalId: "tenderloin", region: "uzbekistan", phrase: "Latta go'sht, steyk uchun", notes: "'Cloth-meat (tenderloin) for steak'" },
  { canonicalId: "chuck_blade", region: "uzbekistan", phrase: "Kurak, Shurpa uchun", notes: "'Shoulder for Shorpa (soup)'" },

  // KAZAKHSTAN
  { canonicalId: "hind_shank", region: "kazakhstan", phrase: "Zhilikti ūzynyraq qaldyrșy", notes: "'Leave the Zhilik bone longer' — respects the guest-honor tradition" },
  { canonicalId: "chuck_blade", region: "kazakhstan", phrase: "Zhauyryn, besbarmaqqa", notes: "'Shoulder blade, for Besbarmak' — the classic request" },
  { canonicalId: "brisket", region: "kazakhstan", phrase: "Tös, sorpağa", notes: "'Brisket, for soup' — fat kept on" },
  { canonicalId: "ribeye", region: "kazakhstan", phrase: "Antrekotti qalyń kesiǵiz", notes: "'Cut the Antrekot thick' — for modern steakhouse-style" },

  // SAUDI ARABIA
  { canonicalId: "hind_shank", region: "saudi_arabia", phrase: "أريد موزة للكبسة، لو سمحت", notes: "'I want Moza for Kabsa, please' — the definitive Saudi request" },
  { canonicalId: "ribeye", region: "saudi_arabia", phrase: "ريب آي سميك، ستيك", notes: "'Thick ribeye, steak' — modern mall steakhouse phrasing" },
  { canonicalId: "brisket", region: "saudi_arabia", phrase: "صدر للشوي البطيء، مع الدهن", notes: "'Brisket for slow smoking, with the fat' — essential for US-BBQ-style" },
  { canonicalId: "chuck_roll", region: "saudi_arabia", phrase: "مفروم كندوز مع دوش", notes: "'Ground Kandouz with Dosh (brisket fat)' — for US-style burger fat ratio" },

  // QATAR
  { canonicalId: "hind_shank", region: "qatar", phrase: "موزة للمكبوس", notes: "'Moza for Machboos' — dish-driven standard" },
  { canonicalId: "chuck_roll", region: "qatar", phrase: "مفروم خشن مع دوش", notes: "'Coarse ground with Dosh (brisket)' — for US-style burgers" },
  { canonicalId: "short_ribs", region: "qatar", phrase: "أضلاع قصيرة للشوي البطيء", notes: "'Short ribs for slow smoking' — Doha smokehouse scene" },
  { canonicalId: "ribeye", region: "qatar", phrase: "Ribeye, Australian or US Prime?", notes: "English-led — Doha butchers confirm origin explicitly due to the pricing gap" },

  // UAE
  { canonicalId: "striploin", region: "uae", phrase: "Is this Sirloin the Striploin or the Rump?", notes: "The essential disambiguation question — always ask to avoid the UAE Sirloin Trap" },
  { canonicalId: "ribeye", region: "uae", phrase: "Scotch fillet, grain-fed, well marbled", notes: "AUS terminology — most accurate request in Spinneys/Waitrose" },
  { canonicalId: "brisket", region: "uae", phrase: "Whole packer brisket, fat cap on", notes: "US BBQ specialty phrasing — widely understood in Dubai smokehouses" },
  { canonicalId: "top_sirloin", region: "uae", phrase: "Rump steak, not Sirloin", notes: "Explicit disambiguation — avoids getting striploin by accident" },

  // PANAMA
  { canonicalId: "skirt", region: "panama", phrase: "Me da la entraña, término medio", notes: "'I'll take the entraña, medium-rare' — the quintessential Panamanian steakhouse order" },
  { canonicalId: "eye_of_round", region: "panama", phrase: "Un muchacho para hornear, por favor", notes: "'An eye of round (muchacho) for roasting' — expat-critical phrasing" },
  { canonicalId: "striploin", region: "panama", phrase: "New York cortado grueso, en un solo trozo", notes: "'New York cut thick, in one piece' — specifies US-style thick steak" },
  { canonicalId: "inside_round", region: "panama", phrase: "Pulpa negra para bistec picado", notes: "'Top round for diced steak' — the everyday Panamanian request" },
  { canonicalId: "hind_shank", region: "panama", phrase: "Jarret para sancocho, con hueso", notes: "'Shank for sancocho, with bone' — dish-driven soup request" },

  // COSTA RICA
  { canonicalId: "sirloin_cap", region: "costa_rica", phrase: "Punta de solomo entera, con la capa de grasa", notes: "'Whole sirloin cap with the fat cap intact' — the picanha-style request" },
  { canonicalId: "brisket", region: "costa_rica", phrase: "Cecina entera para ahumar, con gordito", notes: "'Whole cecina (brisket) for smoking, with the fat' — for US-style BBQ" },
  { canonicalId: "inside_round", region: "costa_rica", phrase: "Posta negra cortada gruesa para la parrilla", notes: "'Top round cut thick for the grill' — overrides the default thin Bistec slicing" },
  { canonicalId: "hind_shank", region: "costa_rica", phrase: "Ossobuco para olla de carne", notes: "'Ossobuco for olla de carne' — dish-driven Sunday soup request" },

  // NICARAGUA
  { canonicalId: "sirloin_cap", region: "nicaragua", phrase: "Me regala la punta de lomo, término medio", notes: "'Give me the sirloin cap, medium-rare' — the Nicaraguan parrilla classic" },
  { canonicalId: "striploin", region: "nicaragua", phrase: "Lomo de centro de dos dedos de grueso", notes: "'Center loin two fingers thick' — Nicaraguan thickness measure" },
  { canonicalId: "outside_round", region: "nicaragua", phrase: "Mano de piedra para indio viejo", notes: "'Bottom round for Indio Viejo' — dish-driven request" },
  { canonicalId: "eye_of_round", region: "nicaragua", phrase: "Salón en salsa, entero", notes: "'Whole eye of round for Salón en salsa'" },

  // HONDURAS
  { canonicalId: "sirloin_cap", region: "honduras", phrase: "Punta de lomo para el anafre", notes: "'Sirloin cap for the anafre (grill)'" },
  { canonicalId: "skirt", region: "honduras", phrase: "Cecina fina para baleadas", notes: "'Thin skirt for baleadas' — dish-driven street food request" },
  { canonicalId: "hind_shank", region: "honduras", phrase: "Jarret para sopa de res, con tuétano", notes: "'Shank for beef soup, with marrow'" },
  { canonicalId: "top_sirloin", region: "honduras", phrase: "Posta de pupa cortada para bistec", notes: "'Top sirloin cut for Bistec' — the everyday Honduran request" },

  // EL SALVADOR
  { canonicalId: "sirloin_cap", region: "el_salvador", phrase: "Punta de lomo, término medio", notes: "The Salvadoran parrilla standard" },
  { canonicalId: "eye_of_round", region: "el_salvador", phrase: "Mano de piedra para entomatar", notes: "'Eye of round for tomato sauce' — traditional dish-driven request (CAREFUL: different cut than Nicaraguan Mano de Piedra)" },
  { canonicalId: "hind_shank", region: "el_salvador", phrase: "Chamberete para sopa de res, con hueso", notes: "'Shank for beef soup, with bone' — the Sunday classic" },
  { canonicalId: "striploin", region: "el_salvador", phrase: "Lomo de aguja cortado grueso", notes: "'Needle loin cut thick' — overrides default thin slicing" },

  // GUATEMALA
  { canonicalId: "sirloin_cap", region: "guatemala", phrase: "Puyaso con la capa de grasa entera", notes: "'Puyaso with the whole fat cap' — critical for authentic Churrasco Chapín" },
  { canonicalId: "top_sirloin", region: "guatemala", phrase: "Una viuda para la parrilla", notes: "'A Widow for the grill' — the everyday Guatemalan grilling request" },
  { canonicalId: "flank", region: "guatemala", phrase: "Falda para hilachas", notes: "'Flank for Hilachas' — dish-driven shredded beef request" },
  { canonicalId: "eye_of_round", region: "guatemala", phrase: "Bolovique entero para salsa", notes: "'Whole eye of round for sauce'" },
  { canonicalId: "hind_shank", region: "guatemala", phrase: "Camote con hueso, para sopa", notes: "'Camote (shank) with bone, for soup'" },

  // VENEZUELA
  { canonicalId: "sirloin_cap", region: "venezuela", phrase: "Una punta trasera entera para la parrilla", notes: "'A whole rear point for the grill' — the definitive Venezuelan steakhouse order" },
  { canonicalId: "eye_of_round", region: "venezuela", phrase: "Muchacho redondo para asado negro", notes: "'Round boy for black roast' — CRITICAL: specify redondo, not cuadrado" },
  { canonicalId: "flank", region: "venezuela", phrase: "Falda para carne mechada, para pabellón", notes: "'Flank for shredded beef, for Pabellón' — dish-driven national dish request" },
  { canonicalId: "striploin", region: "venezuela", phrase: "Solomo de cuerito cortado grueso", notes: "'Striploin with fat cap, cut thick'" },
  { canonicalId: "tenderloin", region: "venezuela", phrase: "Lomito, término medio", notes: "'Tenderloin, medium-rare' — the premium standard" },

  // LITHUANIA
  { canonicalId: "tenderloin", region: "lithuania", phrase: "Aš norėčiau išpjovos, vidutiniškai iškeptos", notes: "'I would like tenderloin, medium' — Vilnius steakhouse standard phrasing" },
  { canonicalId: "striploin", region: "lithuania", phrase: "Nugarinės steikui, storai supjaustytos", notes: "'Striploin for steak, sliced thick' — overrides the default thin slicing" },
  { canonicalId: "hind_shank", region: "lithuania", phrase: "Karkas šaltienai, su kaulu", notes: "'Shank for Šaltiena, with bone' — the traditional aspic request" },
  { canonicalId: "chuck_roll", region: "lithuania", phrase: "Sprandinė sumaltos mėsos, 100% jautiena", notes: "'Neck for ground meat, 100% beef' — avoids default beef+pork mix" },
  { canonicalId: "eye_of_round", region: "lithuania", phrase: "Netikroji išpjova troškinimui, ne grilio steikui", notes: "'False tenderloin for braising, NOT for grilling' — critical clarification to avoid tough grilled eye-of-round" },

  // LATVIA
  { canonicalId: "tenderloin", region: "latvia", phrase: "Es vēlētos iekšfileju, vidēji izceptu", notes: "'I'd like tenderloin, medium' — Rīga steakhouse phrasing" },
  { canonicalId: "striploin", region: "latvia", phrase: "Muguras fileju, biezi sagrieztu", notes: "'Back fillet, sliced thick' — for US-style NY Strip" },
  { canonicalId: "hind_shank", region: "latvia", phrase: "Stilbu galertam, ar kaulu", notes: "'Shank for Galerts, with bone' — the aspic standard" },
  { canonicalId: "chuck_roll", region: "latvia", phrase: "Liellopa malto gaļu, 100% liellopa", notes: "'Ground beef, 100% beef' — to avoid the default pork-beef mix" },
  { canonicalId: "eye_of_round", region: "latvia", phrase: "Viltotais filejs — tikai sautēšanai", notes: "'False fillet — for braising only' — confirms to butcher you know the trap" },

  // ESTONIA
  { canonicalId: "tenderloin", region: "estonia", phrase: "Ma sooviksin sisefileed, pooleldi küpsena", notes: "'I would like tenderloin, medium' — Tallinn steakhouse phrasing" },
  { canonicalId: "striploin", region: "estonia", phrase: "Välisfilee, paksult lõigatud", notes: "'Outside fillet, thickly cut' — for US-style steak thickness" },
  { canonicalId: "hind_shank", region: "estonia", phrase: "Koot süldi jaoks, kondiga", notes: "'Shank for Sült, with bone' — the traditional aspic request" },
  { canonicalId: "chuck_roll", region: "estonia", phrase: "Veisehakkliha 100% veis, ei mingit sealiha", notes: "'Beef ground meat 100% beef, no pork' — critical to override default beef+pork mix" },
  { canonicalId: "eye_of_round", region: "estonia", phrase: "Valesisefilee hautamiseks, mitte grillimiseks", notes: "'False tenderloin for braising, not for grilling' — avoids tough grilled eye-of-round" },

  // BELARUS
  { canonicalId: "ribeye", region: "belarus", phrase: "Тоўсты край, стейк, сярэдняй пражарки", notes: "'Thick edge, steak, medium-rare' — uses the distinctive Belarusian 'edge' logic" },
  { canonicalId: "striploin", region: "belarus", phrase: "Тонкі край, на стейк", notes: "'Thin edge, for steak' — the NY Strip request using Edge nomenclature" },
  { canonicalId: "tenderloin", region: "belarus", phrase: "Выразку, цалкам чыстую", notes: "'Tenderloin, completely clean' — specifying full silver-skin removal" },
  { canonicalId: "hind_shank", region: "belarus", phrase: "Галёнка для халадца, з касцяй", notes: "'Shank for Kholodets, with bone' — the traditional aspic request" },
  { canonicalId: "chuck_roll", region: "belarus", phrase: "Шыйка молатая, 100% ялавічына", notes: "'Neck ground, 100% beef' — overrides default pork-beef mix" },
  { canonicalId: "eye_of_round", region: "belarus", phrase: "Фальшывая выразка — толькі для тушэння", notes: "'False tenderloin — only for braising' — the pan-European warning in Belarusian" },
] as const;
