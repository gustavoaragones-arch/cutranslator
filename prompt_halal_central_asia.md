# Prompt — Halal & Central Asian Expansion: Egypt, Iran, Morocco, Uzbekistan, Kazakhstan, Saudi Arabia, Qatar, UAE

## Context

Cutranslator has 41 regions. This is the largest single batch so far — 8 countries forming one coherent cultural/structural axis: the Arab-Muslim and Central Asian halal world. The 8 countries are grouped together because they share a unified substrate (halal butchery), overlapping Arabic vocabulary (Moza, Dosh, Bofteek, Entrecote, Terbiandko appear across most Arab markets with shared or divergent meanings), and parallel dish-driven cut conventions (Kabsa meat, Plov meat, Tajine cuts, Kebab Barg meat, Besbarmak meat). Splitting this batch would duplicate the Arabic+Cyrillic normalization rules and fragment the halal framing.

**Key insight**: The Arabic word **Moza** (literally "banana") is the most culturally consistent cross-border cut in the database. It maps to `hind_shank` in Egypt, Saudi Arabia, Qatar, and UAE — and in all four, it is a **prestige** cut (the "best meat for rice"), the exact opposite of its US status as a budget shank. This is arguably the most valuable single insight in the entire batch.

**Secondary insight**: The "origin-based pricing ladder" (Brazilian ≈ cheapest grass-fed / Indian-Pakistani ≈ lean tough / Australian ≈ mid-range / US Prime ≈ luxury) is a uniquely Gulf phenomenon that affects UAE, Saudi Arabia, and Qatar — it's a practical expat trap that has no equivalent in the rest of the ontology.

**Scripts**: Arabic-script countries (Egypt, Iran, Morocco, Saudi, Qatar, UAE) use dual labeling with romanized `synonyms` (same pattern as Bulgaria's Cyrillic+Latin). Iran uses Persian (Farsi) script. Central Asian countries (Uzbekistan, Kazakhstan) use Latin-Cyrillic dual labeling following post-Soviet romanization — same pattern as existing Russian/Ukrainian entries.

---

## STEP 1 — Add 8 new regions

### 1.1 — `RegionSlug` type (`lib/types.ts`)
```ts
| "egypt" | "iran" | "morocco" | "uzbekistan" | "kazakhstan" | "saudi_arabia" | "qatar" | "uae"
```

### 1.2 — Region records (`data/regions.ts`)
```ts
{ slug: "egypt", label: "Egypt", h1Place: "Egypt", flag: "🇪🇬" },
{ slug: "iran", label: "Iran", h1Place: "Iran", flag: "🇮🇷" },
{ slug: "morocco", label: "Morocco", h1Place: "Morocco", flag: "🇲🇦" },
{ slug: "uzbekistan", label: "Uzbekistan", h1Place: "Uzbekistan", flag: "🇺🇿" },
{ slug: "kazakhstan", label: "Kazakhstan", h1Place: "Kazakhstan", flag: "🇰🇿" },
{ slug: "saudi_arabia", label: "Saudi Arabia", h1Place: "Saudi Arabia", flag: "🇸🇦" },
{ slug: "qatar", label: "Qatar", h1Place: "Qatar", flag: "🇶🇦" },
{ slug: "uae", label: "UAE", h1Place: "the UAE", flag: "🇦🇪" },
```

### 1.3 — Update exhaustiveness checks in `lib/entities.ts`

---

## STEP 2 — Regional name entries (`data/regionalNames.ts`)

### 🇪🇬 EGYPT (13 entries)

```ts
// Direct matches — dual Arabic/Latin labeling via synonyms
{ name: "erq filletu", region: "egypt", maps_to: "tenderloin", confidence: 0.95, synonyms: ["عرق فلتو", "filletu"] as const, notes: "Literally 'vein of fillet' — the most tender and expensive Egyptian cut" },
{ name: "erq rosto", region: "egypt", maps_to: "striploin", confidence: 0.85, synonyms: ["عرق روستو", "sintah", "سنتا"] as const, notes: "Striploin — often roasted whole or cut into steaks. Also called Sintah." },
{ name: "entrecote", region: "egypt", maps_to: "ribeye", confidence: 0.90, synonyms: ["انتركوت"] as const, notes: "Adopted French term — used for premium grilling steaks in modern Cairo" },
{ name: "dosh", region: "egypt", maps_to: "brisket", confidence: 0.80, synonyms: ["دوش"] as const, notes: "Fatty chest cut — used almost exclusively for mincing or slow-stewing, rarely smoked" },
{ name: "moza", region: "egypt", maps_to: "hind_shank", confidence: 0.90, synonyms: ["موزة"] as const, notes: "Literally 'banana' — the prize cut for stews and slow-roasting. A sign of respect when served whole." },
{ name: "akkawi", region: "egypt", maps_to: "oxtail", confidence: 0.95, synonyms: ["عكاوي"] as const, notes: "Major delicacy — used for rich gelatinous clay-pot stews (tajine)" },

// Premium / round
{ name: "wesh el-fakhda", region: "egypt", maps_to: "top_sirloin", confidence: 0.85, synonyms: ["وش الفخدة"] as const, notes: "'Face of the leg' — large, lean, and versatile" },
{ name: "bofteek", region: "egypt", maps_to: "top_round", confidence: 0.75, synonyms: ["بفتيك"] as const, notes: "CRITICAL: Bofteek is NOT a US-style steak. Always sliced extremely thin and pounded, for pan-frying only." },
{ name: "terbiandko", region: "egypt", maps_to: "eye_of_round", confidence: 0.80, synonyms: ["التربيانكو"] as const, notes: "Used for Laham Barda (cold meat) roasts" },
{ name: "sammanah", region: "egypt", maps_to: "sirloin_tip", confidence: 0.80, synonyms: ["سمانة"] as const, notes: "Literally 'the calf' — a lean round muscle for roasting" },
{ name: "sinn", region: "egypt", maps_to: "chuck_roll", confidence: 0.75, synonyms: ["سن"] as const, notes: "Hump/neck area — high fat; the required cut for Kabab Halla" },
{ name: "kandouz", region: "egypt", maps_to: "chuck_roll", confidence: 0.60, synonyms: ["كندوز"] as const, notes: "General term for mature beef (not a specific cut) — used for most everyday dishes. Grade marker more than anatomical term." },

// Short ribs
{ name: "dala' qasira", region: "egypt", maps_to: "short_ribs", confidence: 0.70, synonyms: ["أضلاع قصيرة"] as const, notes: "Short ribs — traditionally for soup, modernly appearing in BBQ" },
```

### 🇮🇷 IRAN (13 entries)

```ts
{ name: "fileh", region: "iran", maps_to: "tenderloin", confidence: 0.95, synonyms: ["فیله"] as const, notes: "The most prized cut — used exclusively for Kebab Barg" },
{ name: "rasteh", region: "iran", maps_to: "striploin", confidence: 0.90, synonyms: ["راسته"] as const, notes: "The standard loin — for steaks or high-end stews" },
{ name: "antrecote", region: "iran", maps_to: "ribeye", confidence: 0.85, synonyms: ["انترکوت"] as const, notes: "Adopted French term — used in Western-style Tehran restaurants" },
{ name: "gholveh-gah", region: "iran", maps_to: "plate", confidence: 0.85, synonyms: ["قلوه‌گاه", "gholvehgah"] as const, notes: "CRITICAL: The flank/plate area — the ONLY correct cut for ground meat for Kebab Koobideh. Its specific fat structure makes the meat stick to the wide metal skewer." },
{ name: "mahicheh", region: "iran", maps_to: "hind_shank", confidence: 0.95, synonyms: ["ماهیچه"] as const, notes: "A luxury cut — served whole at weddings and special occasions. Iranian butchers trim silver skin cleanly to reveal the 'muscle ball'." },
{ name: "gardan", region: "iran", maps_to: "chuck_roll", confidence: 0.80, synonyms: ["گردن"] as const, notes: "Valued for tenderness in slow-cooked 'Neck Rice' dishes" },
{ name: "dom", region: "iran", maps_to: "oxtail", confidence: 0.95, synonyms: ["دم"] as const, notes: "Literally 'tail' — for rich traditional bone broths" },

// Hindquarter / Raan subdivisions
{ name: "coulotte", region: "iran", maps_to: "sirloin_cap", confidence: 0.75, synonyms: ["کولوت"] as const, notes: "Gaining popularity in modern Tehran steakhouses — the picanha equivalent" },
{ name: "sar-sineh", region: "iran", maps_to: "top_round", confidence: 0.80, synonyms: ["سرسینه"] as const, notes: "Lean meat often used for Khoresht-e Ghormeh Sabzi" },
{ name: "maghz-e raan", region: "iran", maps_to: "eye_of_round", confidence: 0.75, synonyms: ["مغز ران", "maghz raan"] as const, notes: "'Brain of the leg' — the standard lean roast" },
{ name: "gol-gah", region: "iran", maps_to: "top_sirloin", confidence: 0.75, synonyms: ["گل‌گاه", "golgah"] as const, notes: "Often sold as a specialty cut for grilling" },

// Chuck / other
{ name: "sar-dast", region: "iran", maps_to: "chuck_blade", confidence: 0.70, synonyms: ["سردست", "sardast"] as const, notes: "Shoulder area — for stews and Khoresht" },
{ name: "dande", region: "iran", maps_to: "short_ribs", confidence: 0.70, synonyms: ["دنده"] as const, notes: "Rib section — for traditional broths and occasional grilling" },
```

### 🇲🇦 MOROCCO (12 entries)

```ts
{ name: "filet", region: "morocco", maps_to: "tenderloin", confidence: 0.95, synonyms: ["فيلي"] as const, notes: "Tenderloin — often used for Brochettes (skewers). French-adopted term." },
{ name: "faux-filet", region: "morocco", maps_to: "striploin", confidence: 0.90, synonyms: ["فو فيلي"] as const, notes: "'False fillet' — the standard for grilling or roasting. French-Moroccan convention." },
{ name: "entrecôte", region: "morocco", maps_to: "ribeye", confidence: 0.90, synonyms: ["أنتريكوط", "entrecote"] as const, notes: "Adopted French term — used for premium steaks" },
{ name: "al-mellaj", region: "morocco", maps_to: "hind_shank", confidence: 0.90, synonyms: ["الملج", "mellaj"] as const, notes: "King of the Tajine — prized for marrow and softness. Mandatory for authentic tajine sauce thickness." },
{ name: "al-ankra", region: "morocco", maps_to: "chuck_roll", confidence: 0.80, synonyms: ["العنكرة", "ankra"] as const, notes: "Neck — very popular for slow-cooking and couscous" },
{ name: "kora'in", region: "morocco", maps_to: "oxtail", confidence: 0.85, synonyms: ["الكرعين", "korain"] as const, notes: "Trotters and tail — used in chickpea stews" },

// Round / leg
{ name: "coulotte", region: "morocco", maps_to: "sirloin_cap", confidence: 0.75, synonyms: ["كولوت"] as const, notes: "Gaining popularity in city butcher shops" },
{ name: "bofteek", region: "morocco", maps_to: "top_round", confidence: 0.75, synonyms: ["بفتيك"] as const, notes: "Sliced thin for pan-frying — not a US-style steak" },
{ name: "rosto", region: "morocco", maps_to: "eye_of_round", confidence: 0.75, synonyms: ["روستو"] as const, notes: "Used for holiday pot roasts" },

// Other
{ name: "al-adla", region: "morocco", maps_to: "short_ribs", confidence: 0.70, synonyms: ["الأضلاع", "adla"] as const, notes: "Almost always included in stews, rarely BBQ'd" },
{ name: "al-ketf", region: "morocco", maps_to: "chuck_blade", confidence: 0.80, synonyms: ["الكتف", "ketf"] as const, notes: "Shoulder — the standard for everyday tajines" },
{ name: "kefta", region: "morocco", maps_to: "chuck_roll", confidence: 0.60, synonyms: ["كفتة"] as const, notes: "Ground meat preparation — typically a beef+kidney fat (s'hama) mix pre-spiced with cumin and paprika at the butcher. Not plain ground beef." },
```

### 🇺🇿 UZBEKISTAN (13 entries)

```ts
// Uzbek uses Latin script post-1993; Cyrillic still widely seen. Dual labeling via synonyms.
{ name: "latta go'sht", region: "uzbekistan", maps_to: "tenderloin", confidence: 0.95, synonyms: ["file go'sht", "латта гўшт", "filet"] as const, notes: "Literally 'cloth meat' because it's so soft — the premium cut" },
{ name: "sirt", region: "uzbekistan", maps_to: "striploin", confidence: 0.85, synonyms: ["bel", "сирт", "бел"] as const, notes: "The 'back' area — used for high-quality roasts and kebabs. Covers striploin/loin region." },
{ name: "antrekot", region: "uzbekistan", maps_to: "ribeye", confidence: 0.80, synonyms: ["антрекот"] as const, notes: "CRITICAL: Uzbek Antrekot often refers to a thin bone-in rib chop — NOT a thick US ribeye. Ask 'qalinroq qilib kesing' ('cut it thick') for a steakhouse-style cut." },
{ name: "to'sh", region: "uzbekistan", maps_to: "brisket", confidence: 0.90, synonyms: ["тўш", "tosh"] as const, notes: "Literally 'chest' — essential for adding fat to soups and authentic Plov. Leave the fat on." },
{ name: "oshiq", region: "uzbekistan", maps_to: "hind_shank", confidence: 0.85, synonyms: ["belak", "ошиқ", "беляк"] as const, notes: "Shank — used for slow-cooked bone broths and Shorpa" },
{ name: "bo'yin", region: "uzbekistan", maps_to: "chuck_roll", confidence: 0.80, synonyms: ["бўйин", "boyin"] as const, notes: "Neck — tough but flavorful; almost always used for mincing" },

// Premium / round
{ name: "lattach", region: "uzbekistan", maps_to: "top_sirloin", confidence: 0.80, synonyms: ["латтач"] as const, notes: "The boneless loin section — highly prized for Shashlik (skewers)" },
{ name: "son ichki", region: "uzbekistan", maps_to: "top_round", confidence: 0.80, synonyms: ["сон ички", "son (ichki)"] as const, notes: "'Inside of the leg' — the main source of lean meat for frying" },
{ name: "goulashbop", region: "uzbekistan", maps_to: "eye_of_round", confidence: 0.75, synonyms: ["гулашбоп"] as const, notes: "Literally 'meat for goulash' — lean and cylindrical. A dish-driven cut name." },
{ name: "yongoqcha", region: "uzbekistan", maps_to: "sirloin_tip", confidence: 0.80, synonyms: ["ёнғоқча", "yongoqcha"] as const, notes: "Literally 'little walnut' — a lean round muscle from the leg" },
{ name: "kurak", region: "uzbekistan", maps_to: "chuck_blade", confidence: 0.80, synonyms: ["курак"] as const, notes: "Shoulder blade — the standard choice for everyday stews and Plov" },

// Oxtail / other
{ name: "dum", region: "uzbekistan", maps_to: "oxtail", confidence: 0.85, synonyms: ["дум"] as const, notes: "Tail — for traditional bone broths" },
{ name: "qovurg'a", region: "uzbekistan", maps_to: "short_ribs", confidence: 0.70, synonyms: ["қовурға", "qovurga"] as const, notes: "Rib section — for Shorpa and stews" },
```

### 🇰🇿 KAZAKHSTAN (12 entries)

```ts
// Kazakh uses Cyrillic officially (transition to Latin ongoing); dual labeling via synonyms.
{ name: "sübe", region: "kazakhstan", maps_to: "tenderloin", confidence: 0.95, synonyms: ["file", "сүбе", "subye"] as const, notes: "The tender 'inner' muscle — the highest quality cut" },
{ name: "zhalyn", region: "kazakhstan", maps_to: "striploin", confidence: 0.85, synonyms: ["beldeme (loin)", "жалын", "žalyn"] as const, notes: "Literally 'flame' or 'loin' — the standard for roasting" },
{ name: "antrekot", region: "kazakhstan", maps_to: "ribeye", confidence: 0.80, synonyms: ["антрекот"] as const, notes: "Standard rib section — used for steaks in modern Almaty/Astana cafes" },
{ name: "tos", region: "kazakhstan", maps_to: "brisket", confidence: 0.90, synonyms: ["tös", "төс"] as const, notes: "Literally 'chest' — essential for fatty, rich soups like Shorpa and for Besbarmak" },
{ name: "zhilik", region: "kazakhstan", maps_to: "hind_shank", confidence: 0.90, synonyms: ["sira", "жилік", "жилик"] as const, notes: "Marrow bones — culturally significant. Different bones are served to guests by status." },
{ name: "moyyn", region: "kazakhstan", maps_to: "chuck_roll", confidence: 0.80, synonyms: ["мойын"] as const, notes: "Neck — for mincing or long-braised stews. Recommended cut for US-style burgers (grind twice)." },

// Hindquarter / Sannyn eti
{ name: "beldeme", region: "kazakhstan", maps_to: "top_sirloin", confidence: 0.80, synonyms: ["бельдеме"] as const, notes: "The loin/rump area — very high quality for Shashlyk" },
{ name: "san eti ishki", region: "kazakhstan", maps_to: "top_round", confidence: 0.80, synonyms: ["сан еті ішкі", "san eti (iski)"] as const, notes: "'Inner thigh meat' — lean, used for thin frying" },
{ name: "käse et", region: "kazakhstan", maps_to: "eye_of_round", confidence: 0.75, synonyms: ["кәсе ет", "kase et"] as const, notes: "Often sold as a cylindrical lean roast for slicing" },
{ name: "zhambas", region: "kazakhstan", maps_to: "sirloin_tip", confidence: 0.75, synonyms: ["žambas", "жамбас"] as const, notes: "The hip/knuckle area — a very common bone-in retail cut" },
{ name: "zhauyryn", region: "kazakhstan", maps_to: "chuck_blade", confidence: 0.80, synonyms: ["žauyryn", "жауырын"] as const, notes: "'Shoulder blade' — the mainstay for everyday meals and Besbarmak" },

// Oxtail
{ name: "quyryq", region: "kazakhstan", maps_to: "oxtail", confidence: 0.85, synonyms: ["құйрық", "quiryq"] as const, notes: "Tail — for traditional bone broths" },
```

### 🇸🇦 SAUDI ARABIA (12 entries)

```ts
{ name: "filet", region: "saudi_arabia", maps_to: "tenderloin", confidence: 0.95, synonyms: ["filletu", "فيليه", "الفلتو"] as const, notes: "The premium 'clean' muscle — often sold under English name in supermarkets" },
{ name: "sirloin", region: "saudi_arabia", maps_to: "striploin", confidence: 0.85, synonyms: ["saina", "سيرلوين", "سينا"] as const, notes: "TRAP: In Saudi import-heavy supermarkets (Tamimi, Manuel) following AUS-MEAT/UK labels, 'Sirloin' = US striploin. Different from US sirloin." },
{ name: "ribeye", region: "saudi_arabia", maps_to: "ribeye", confidence: 0.95, synonyms: ["ريب آي", "ريبان"] as const, notes: "Often sold under the English name — USDA and AUS-MEAT labels dominant in Riyadh/Jeddah" },
{ name: "sadr", region: "saudi_arabia", maps_to: "brisket", confidence: 0.85, synonyms: ["dosh", "صدر", "دوش"] as const, notes: "Chest/brisket — used for slow-cooking or high-fat mincing" },
{ name: "moza", region: "saudi_arabia", maps_to: "hind_shank", confidence: 0.95, synonyms: ["موزة"] as const, notes: "Literally 'banana' — HIGHLY prized for Kabsa. If you ask for 'best meat for rice', a Saudi butcher will give you Moza. Prestige cut, not budget." },
{ name: "raqaba", region: "saudi_arabia", maps_to: "chuck_roll", confidence: 0.80, synonyms: ["رقبة"] as const, notes: "Neck — used for stews or grinding for Sambousek" },

// Premium / round
{ name: "wesh al-fakhda", region: "saudi_arabia", maps_to: "top_sirloin", confidence: 0.85, synonyms: ["وجه الفخدة"] as const, notes: "'Face of the leg' — used for high-quality roasts" },
{ name: "bofteek sa", region: "saudi_arabia", maps_to: "top_round", confidence: 0.75, synonyms: ["bofteek", "بفتيك"] as const, notes: "Sliced thin for pan-frying or 'Escalope' — not a US-style steak" },
{ name: "terbiandko", region: "saudi_arabia", maps_to: "eye_of_round", confidence: 0.80, synonyms: ["تربيانكو"] as const, notes: "The standard 'cold meat' roast" },
{ name: "adla qasira", region: "saudi_arabia", maps_to: "short_ribs", confidence: 0.80, synonyms: ["أضلاع قصيرة"] as const, notes: "Very popular in the booming Saudi BBQ/smokehouse scene" },
{ name: "ketf", region: "saudi_arabia", maps_to: "chuck_blade", confidence: 0.80, synonyms: ["كتف"] as const, notes: "Shoulder — the go-to for daily stews and vegetable dishes" },

// Oxtail
{ name: "akkawi sa", region: "saudi_arabia", maps_to: "oxtail", confidence: 0.90, synonyms: ["akkawi", "عكاوي"] as const, notes: "Oxtail — for rich gelatinous stews" },
```

### 🇶🇦 QATAR (13 entries)

```ts
{ name: "filet qa", region: "qatar", maps_to: "tenderloin", confidence: 0.95, synonyms: ["filet", "فيليه"] as const, notes: "The most expensive cut — usually Australian or US Angus in Doha retailers" },
{ name: "sirloin", region: "qatar", maps_to: "striploin", confidence: 0.85, synonyms: ["سيرلوين"] as const, notes: "Standard term for 'New York Strip' equivalents in Lulu/Carrefour/Monoprix" },
{ name: "entrecote qa", region: "qatar", maps_to: "ribeye", confidence: 0.90, synonyms: ["ribeye", "انتركوت", "ريب آي"] as const, notes: "Very popular in Doha's brunch and steakhouse scene — both terms used interchangeably" },
{ name: "sadr qa", region: "qatar", maps_to: "brisket", confidence: 0.85, synonyms: ["sadr", "dosh", "صدر", "دوش"] as const, notes: "'Dosh' is the local term for the fatty breast area" },
{ name: "moza", region: "qatar", maps_to: "hind_shank", confidence: 0.95, synonyms: ["موزة"] as const, notes: "'Banana' cut — highly prized for Machboos (Qatar's national dish). Collagen-rich, won't dry during long rice cooking." },
{ name: "akkawi qa", region: "qatar", maps_to: "oxtail", confidence: 0.90, synonyms: ["akkawi", "عكاوي"] as const, notes: "Essential for Egyptian-style stews (Tajine) popular with the large Egyptian expat community" },

// Premium / round
{ name: "wesh el-fakhda qa", region: "qatar", maps_to: "top_sirloin", confidence: 0.85, synonyms: ["وجه الفخدة"] as const, notes: "'Face of the leg' — used for high-quality roasts" },
{ name: "escalope", region: "qatar", maps_to: "top_round", confidence: 0.75, synonyms: ["bofteek", "اسكالوب", "بفتيك"] as const, notes: "Pounded thin for pan-frying — French/Egyptian-influenced naming" },
{ name: "terbiandko qa", region: "qatar", maps_to: "eye_of_round", confidence: 0.80, synonyms: ["terbiandko", "تربيانكو"] as const, notes: "The standard for 'Cold Roast' style meat" },
{ name: "adla qasira qa", region: "qatar", maps_to: "short_ribs", confidence: 0.80, synonyms: ["adla qasira", "أضلاع قصيرة"] as const, notes: "Staple in Qatar's many smokehouse restaurants" },
{ name: "ketf qa", region: "qatar", maps_to: "chuck_blade", confidence: 0.80, synonyms: ["ketf", "كتف"] as const, notes: "Shoulder — the go-to for daily stews and Thareed (bread/meat stew)" },

// Neck
{ name: "raqaba qa", region: "qatar", maps_to: "chuck_roll", confidence: 0.75, synonyms: ["raqaba", "رقبة"] as const, notes: "Neck — for ground meat and stews" },

// Mafroum — blended ground
{ name: "mafroum", region: "qatar", maps_to: "chuck_roll", confidence: 0.55, synonyms: ["لحم مفروم"] as const, notes: "General term for minced beef — sold as 'Fine' or 'Coarse'. Default is fine/lean (for Kibbeh/Sambousek). For US-style burger, ask butcher to grind Dosh (brisket) for fat content." },
```

### 🇦🇪 UAE (14 entries)

```ts
// The most anglicized system — English labels dominate due to expat population
{ name: "beef tenderloin", region: "uae", maps_to: "tenderloin", confidence: 0.95, synonyms: ["fillet", "filet", "فيليه"] as const, notes: "Usually Australian Wagyu or US Prime — English dominates supermarket labels (Spinneys, Waitrose, Lulu)" },
{ name: "striploin", region: "uae", maps_to: "striploin", confidence: 0.85, synonyms: ["sirloin", "new york strip", "سيرلوين"] as const, notes: "CRITICAL — THE SIRLOIN TRAP: In British-style shops (Waitrose), 'Sirloin' = US Striploin. In US-style steakhouses, 'Sirloin' = Rump (Top Sirloin). Check the price: the more expensive is usually Striploin." },
{ name: "scotch fillet", region: "uae", maps_to: "ribeye", confidence: 0.85, synonyms: ["ribeye", "ريب آي"] as const, notes: "Australian imports often use 'Scotch Fillet' — it's boneless ribeye, same as US ribeye. UAE retailers label both." },
{ name: "dosh uae", region: "uae", maps_to: "brisket", confidence: 0.90, synonyms: ["brisket", "دوش", "صدر"] as const, notes: "Highly popular in UAE's booming 'low and slow' BBQ scene" },
{ name: "moza", region: "uae", maps_to: "hind_shank", confidence: 0.95, synonyms: ["shank", "موزة"] as const, notes: "'Banana' cut — prized for Arabic lamb/beef stews" },
{ name: "akkawi uae", region: "uae", maps_to: "oxtail", confidence: 0.90, synonyms: ["oxtail", "عكاوي"] as const, notes: "Essential for Egyptian and Levantine stews — large Arab expat population drives demand" },

// UK/AUS terminology for round/leg
{ name: "rump steak", region: "uae", maps_to: "top_sirloin", confidence: 0.85, synonyms: ["rump"] as const, notes: "UK/AUS term 'Rump' = US Top Sirloin. Completes the Sirloin confusion — UK Sirloin is Striploin, UK Rump is Sirloin." },
{ name: "topside", region: "uae", maps_to: "top_round", confidence: 0.85, notes: "Standard UK/AUS term for the large lean muscle of the leg" },
{ name: "silverside", region: "uae", maps_to: "outside_round", confidence: 0.85, notes: "UK/AUS term — often used for salt beef or lean roasting joints" },

// Short ribs — with Latin influence
{ name: "short ribs uae", region: "uae", maps_to: "short_ribs", confidence: 0.85, synonyms: ["asado"] as const, notes: "Large Latin/smokehouse culture in Dubai — 'Asado' is common (US short ribs, not Argentine asado)" },

// Chuck — bilingual
{ name: "chuck uae", region: "uae", maps_to: "chuck_blade", confidence: 0.80, synonyms: ["shoulder", "stewing beef"] as const, notes: "Usually sold in cubes for 'stewing beef'" },

// Other
{ name: "beef cheek", region: "uae", maps_to: "chuck_roll", confidence: 0.65, notes: "Popular in Dubai's Western fine-dining scene" },
{ name: "eye round", region: "uae", maps_to: "eye_of_round", confidence: 0.80, notes: "US terminology used in import-heavy retailers" },
{ name: "flank steak", region: "uae", maps_to: "flank", confidence: 0.80, notes: "US-style imported terminology — popular for fajita/stir-fry" },
```

---

## STEP 3 — Tier 3 entities (`data/regionalCuts.ts`)

### 🇪🇬 EGYPT (3 entities)

```ts
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
    { canonical_id: "top_round", match_type: "cultural", confidence: 0.70, note: "Anatomically top round, but preparation is fundamentally different from US steak" },
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
```

### 🇮🇷 IRAN (3 entities)

```ts
{
  id: "kebab_koobideh_cut_ir",
  name: "Gosht-e Kebab Koobideh",
  region: "iran",
  maps_to: [
    { canonical_id: "plate", match_type: "cultural", confidence: 0.85, note: "Gholveh-gah (flank/plate) is the only correct cut — US 'ground round' will fail" },
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
```

### 🇲🇦 MOROCCO (3 entities)

```ts
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
```

### 🇺🇿 UZBEKISTAN (2 entities)

```ts
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
```

### 🇰🇿 KAZAKHSTAN (2 entities)

```ts
{
  id: "zhilik_kz",
  name: "Zhilik (Kazakh Honor Marrow)",
  region: "kazakhstan",
  maps_to: [
    { canonical_id: "hind_shank", match_type: "cultural", confidence: 0.85, note: "Specifically shank with long marrow bone — format matters" },
  ],
  synonyms: ["жилік", "zhylyk"],
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
```

### 🇸🇦 SAUDI ARABIA (2 entities)

```ts
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
  description: "A uniquely Gulf/Saudi confusion point that doesn't exist elsewhere. In local Saudi shops, Hashi (young camel) and Baqar (beef) are frequently sold side-by-side in similar-looking cuts, and the meats visually resemble each other. Hashi has a slightly sweeter, gamier flavor and different fat behavior. Expats accidentally buying Hashi thinking it's beef (or vice versa) is a common issue. Users should verify the sign: ‫( حاشي‬Hashi) for camel vs ‫( بقر‬Baqar) for beef. Critical for expats cooking Western recipes — camel does NOT substitute well for beef in US-style preparations.",
  notes: "Not a cut, but a species-identification entity. Only appears in Saudi Arabia and some Gulf states — a regional disambiguation entity, similar in spirit to the Israeli 'asado collision' entry.",
},
```

### 🇶🇦 QATAR (3 entities)

```ts
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
```

### 🇦🇪 UAE (3 entities)

```ts
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
    { canonical_id: "plate", match_type: "cultural", confidence: 0.70, note: "Beef navel from the plate — mimics pork belly texture" },
  ],
  description: "A uniquely UAE (and Gulf-wide) product category. Because pork is haram, UAE retailers manufacture 'Halal Bacon' and 'Beef Pepperoni' from beef navel (the plate/maculae region) cured and smoked to mimic pork belly. Same anatomy as the cut used for pastrami in Jewish butchery, but cured with beef-specific smoke profiles. Expats expecting actual pork bacon will find this product's texture convincing but flavor distinctly different — it's a reasonable substitute, not an identical match. Sold at Spinneys, Waitrose, and Carrefour. A good example of how religious dietary law drives cut innovation.",
  notes: "Analog to Israel's pastrami-from-navel tradition and Turkey's pastırma — the 'cured beef navel' axis spans Jewish, Muslim, and Ottoman food cultures.",
},
```

---

## STEP 4 — Doneness labels (`data/doneness.ts`)

```ts
// rare
egypt: "Nay fe nay",              // ني في ني
iran: "Kham",                      // خام
morocco: "Saigant",                // French-adopted
uzbekistan: "Xomroq",
kazakhstan: "Shala pyskhan",
saudi_arabia: "Nay",               // ني
qatar: "Nay",                      // ني
uae: "Rare",                       // English standard

// medium_rare (none of these cultures traditionally have a native 'medium rare' term; use the nearest local equivalent or adopted English)
egypt: "Nص istiwah khafif",        // نص استواء خفيف — 'light half-cooked'
iran: "Kam-pokhteh",               // کم پخته — 'slightly cooked'
morocco: "Saignant",               // French standard
uzbekistan: "Kam pishgan",
kazakhstan: "Ortasha pyskhan (az)",
saudi_arabia: "Medium rare",       // English adopted in Riyadh/Jeddah steakhouses
qatar: "Medium rare",              // English standard in Doha hotels
uae: "Medium rare",                // The Dubai/Abu Dhabi steakhouse standard

// medium
egypt: "Mestewy noss noss",        // مستوي نص نص — 'half-cooked'
iran: "Madiyom",                   // مدیوم — adopted international term
morocco: "Moyennement",            // French
uzbekistan: "O'rtacha",
kazakhstan: "Ortasha pyskhan",
saudi_arabia: "Noss istiwah",      // نص استواء
qatar: "Noss istiwah",             // نص استواء
uae: "Medium",                     // English

// well_done
egypt: "Mestewy awy",              // مستوي أوي — 'very cooked', the cultural standard
iran: "Kamelan Pokhteh",           // کاملاً پخته — 'completely cooked'
morocco: "Tayeb Bezzaf",           // طايب بزاف — 'cooked a lot'
uzbekistan: "Yaxshi pishgan",      // the standard for all meat dishes
kazakhstan: "Ja'sy pyskhan",       // the golden standard
saudi_arabia: "Matboukh jayidan",  // مطبوخ جيدًا
qatar: "Nadij tamaman",            // ناضج تمامًا — 'completely ripe/cooked'
uae: "Well done",                  // English; commonly requested in traditional Arabic dining
```

Add `notes` (on `well_done`):
```ts
egypt: "Traditional Egyptian preference is Mestewy awy (well done). Medium rare is a modern Cairo steakhouse phenomenon, uncommon in home cooking.",
iran: "Iranian cuisine strongly favors thoroughly cooked meat. Rare is essentially never served — Kham is more a theoretical label than a home order.",
morocco: "Moroccan taste is firmly Well Done due to the dominance of slow-cooked tajines. Saigant (rare) is French-influenced and rarely ordered outside Casablanca/Marrakech tourist restaurants.",
uzbekistan: "Uzbek cuisine is built on well-cooked, tender meats. Xomroq (rare) is almost never eaten by locals; Yaxshi pishgan (well done) is the default.",
kazakhstan: "Kazakh culture emphasizes well-cooked meat for safety and tenderness in traditional boiled dishes. Rare is very rare to find outside Astana/Almaty international steakhouses.",
saudi_arabia: "High-end Riyadh and Jeddah steakhouses use English doneness terms and serve medium-rare as standard. Traditional Saudi palate remains Matboukh jayidan (well done).",
qatar: "Doha's hotels use English doneness exclusively. Traditional Qatari preference is Nadij tamaman (well done). The expat steakhouse scene drives the medium-rare standard.",
uae: "The UAE's high-end dining scene in Dubai and Abu Dhabi uses international English doneness, with medium-rare as the 'gold standard.' Traditional Arabic dining contexts still favor well done.",
```

---

## STEP 5 — Butcher phrases (`data/butcherPhrases.ts`)

```ts
// 🇪🇬 EGYPT
{ canonicalId: "hind_shank", region: "egypt", phrase: "عاوز موزة طازة، بالعضم", notes: "'I want fresh Moza, with the bone' — the prestige request" },
{ canonicalId: "striploin", region: "egypt", phrase: "عاوز إيرق روستو مقطع ستيك", notes: "'I want Erq Rosto cut as steak' — clarifies you want thick, not thin" },
{ canonicalId: "chuck_roll", region: "egypt", phrase: "سن مكعبات لكباب حلة", notes: "'Sinn (neck) cubed for Kabab Halla' — dish-driven request" },
{ canonicalId: "ribeye", region: "egypt", phrase: "انتركوت سميك من فضلك", notes: "'Thick entrecote please' — specifies steakhouse thickness" },
{ canonicalId: "top_round", region: "egypt", phrase: "بفتيك رفيع مضروب", notes: "'Thin pounded Bofteek' — the traditional pan-frying format" },

// 🇮🇷 IRAN
{ canonicalId: "plate", region: "iran", phrase: "گوشت قلوه‌گاه برای کباب کوبیده", notes: "'Gholveh-gah meat for Kebab Koobideh' — the correct fatty cut" },
{ canonicalId: "tenderloin", region: "iran", phrase: "فیله تمیز برای کباب برگ", notes: "'Clean Fileh for Kebab Barg' — specifies silver-skin removal" },
{ canonicalId: "hind_shank", region: "iran", phrase: "ماهیچه کامل، پاک کرده", notes: "'Whole Mahicheh, trimmed clean' — the luxury-cut request" },
{ canonicalId: "striploin", region: "iran", phrase: "راسته برای استیک", notes: "'Rasteh for steak' — clarifies modern steakhouse use" },
{ canonicalId: "ribeye", region: "iran", phrase: "انترکوت ضخیم لطفاً", notes: "'Thick antrecote please' — modern Tehran steakhouse phrasing" },

// 🇲🇦 MOROCCO
{ canonicalId: "hind_shank", region: "morocco", phrase: "الملج للطاجين، بالعضم", notes: "'Mellaj for tajine, with the bone' — the mandatory configuration" },
{ canonicalId: "chuck_blade", region: "morocco", phrase: "الكتف مفروم بلا بهارات", notes: "'Shoulder ground WITHOUT spices' — critical to avoid default Kefta spice blend" },
{ canonicalId: "top_round", region: "morocco", phrase: "بفتيك رفيع للقلي", notes: "'Thin Bofteek for frying' — traditional format" },
{ canonicalId: "ribeye", region: "morocco", phrase: "أنتريكوط سميك للشواء", notes: "'Thick entrecôte for grilling' — clarifies BBQ intent" },

// 🇺🇿 UZBEKISTAN
{ canonicalId: "brisket", region: "uzbekistan", phrase: "Palovbop To'sh, yog' bilan", notes: "'Brisket for Plov, with the fat' — fat retention is mandatory" },
{ canonicalId: "ribeye", region: "uzbekistan", phrase: "Antrekotni qalinroq qilib kesing", notes: "'Cut the Antrekot thick' — essential for US-style ribeye" },
{ canonicalId: "tenderloin", region: "uzbekistan", phrase: "Latta go'sht, steyk uchun", notes: "'Cloth-meat (tenderloin) for steak'" },
{ canonicalId: "chuck_blade", region: "uzbekistan", phrase: "Kurak, Shurpa uchun", notes: "'Shoulder for Shorpa (soup)'" },

// 🇰🇿 KAZAKHSTAN
{ canonicalId: "hind_shank", region: "kazakhstan", phrase: "Zhilikti ūzynyraq qaldyrșy", notes: "'Leave the Zhilik bone longer' — respects the guest-honor tradition" },
{ canonicalId: "chuck_blade", region: "kazakhstan", phrase: "Zhauyryn, besbarmaqqa", notes: "'Shoulder blade, for Besbarmak' — the classic request" },
{ canonicalId: "brisket", region: "kazakhstan", phrase: "Tös, sorpağa", notes: "'Brisket, for soup' — fat kept on" },
{ canonicalId: "ribeye", region: "kazakhstan", phrase: "Antrekotti qalyń kesiǵiz", notes: "'Cut the Antrekot thick' — for modern steakhouse-style" },

// 🇸🇦 SAUDI ARABIA
{ canonicalId: "hind_shank", region: "saudi_arabia", phrase: "أريد موزة للكبسة، لو سمحت", notes: "'I want Moza for Kabsa, please' — the definitive Saudi request" },
{ canonicalId: "ribeye", region: "saudi_arabia", phrase: "ريب آي سميك، ستيك", notes: "'Thick ribeye, steak' — modern mall steakhouse phrasing" },
{ canonicalId: "brisket", region: "saudi_arabia", phrase: "صدر للشوي البطيء، مع الدهن", notes: "'Brisket for slow smoking, with the fat' — essential for US-BBQ-style" },
{ canonicalId: "chuck_roll", region: "saudi_arabia", phrase: "مفروم كندوز مع دوش", notes: "'Ground Kandouz with Dosh (brisket fat)' — for US-style burger fat ratio" },

// 🇶🇦 QATAR
{ canonicalId: "hind_shank", region: "qatar", phrase: "موزة للمكبوس", notes: "'Moza for Machboos' — dish-driven standard" },
{ canonicalId: "chuck_roll", region: "qatar", phrase: "مفروم خشن مع دوش", notes: "'Coarse ground with Dosh (brisket)' — for US-style burgers" },
{ canonicalId: "short_ribs", region: "qatar", phrase: "أضلاع قصيرة للشوي البطيء", notes: "'Short ribs for slow smoking' — Doha smokehouse scene" },
{ canonicalId: "ribeye", region: "qatar", phrase: "Ribeye, Australian or US Prime?", notes: "English-led — Doha butchers confirm origin explicitly due to the pricing gap" },

// 🇦🇪 UAE
{ canonicalId: "striploin", region: "uae", phrase: "Is this Sirloin the Striploin or the Rump?", notes: "The essential disambiguation question — always ask to avoid the UAE Sirloin Trap" },
{ canonicalId: "ribeye", region: "uae", phrase: "Scotch fillet, grain-fed, well marbled", notes: "AUS terminology — most accurate request in Spinneys/Waitrose" },
{ canonicalId: "brisket", region: "uae", phrase: "Whole packer brisket, fat cap on", notes: "US BBQ specialty phrasing — widely understood in Dubai smokehouses" },
{ canonicalId: "top_sirloin", region: "uae", phrase: "Rump steak, not Sirloin", notes: "Explicit disambiguation — avoids getting striploin by accident" },
```

---

## STEP 6 — Update exhaustiveness checks

Add `egypt`, `iran`, `morocco`, `uzbekistan`, `kazakhstan`, `saudi_arabia`, `qatar`, `uae` to all `Record<RegionSlug, ...>` patterns in `lib/entities.ts`.

---

## VERIFICATION

```bash
npx tsc --noEmit
npx tsx scripts/validateDataset.ts
npm run build 2>&1 | tail -20

echo "Regions: $(grep -c 'slug:' data/regions.ts)"
echo "Regional names: $(grep -c 'maps_to' data/regionalNames.ts)"
echo "Tier 3 entities: $(grep -c 'id:' data/regionalCuts.ts)"
echo "Butcher phrases: $(grep -c 'canonicalId:' data/butcherPhrases.ts)"
echo "Doneness regions: $(grep -c 'egypt\|iran\|morocco\|uzbekistan\|kazakhstan\|saudi_arabia\|qatar\|uae' data/doneness.ts)"
npm run build 2>&1 | grep "static pages"
```

**Report targets**:
- Regions: 49 (was 41)
- Regional names added: ~102 (13+13+12+13+12+12+13+14)
- Tier 3 entities: 123 (was 102, adding 21: 3+3+3+2+2+2+3+3)
- Butcher phrases added: ~36
- Doneness: 8 countries × 4 levels + 8 cultural notes

---

## RULES

- Follow existing code style exactly
- Do NOT modify existing entries — only ADD new ones
- Arabic-script entries (Egypt, Morocco, Saudi, Qatar, UAE) use Latin primary `name` with Arabic in `synonyms` (right-to-left characters break TypeScript identifiers; keep Arabic in string values only)
- Iran uses Persian (Farsi) — similar handling: Latin primary, Persian in synonyms
- Central Asian entries (Uzbekistan, Kazakhstan) use Latin primary with Cyrillic in synonyms — same pattern as existing Russian/Ukrainian/Bulgarian entries
- Some names appear in multiple countries (Moza, Bofteek, Entrecote, Terbiandko, Coulotte, Akkawi). Disambiguate by appending a country suffix to the `name` field where collisions exist (e.g., `moza` stays as `moza` in Egypt but `moza` must not collide as a key across regions — if the existing resolver keys on `name+region`, this is fine; verify existing pattern in `regionalNames.ts` before starting)
- Use proper Arabic/Persian/Cyrillic Unicode characters — do NOT use approximations
- The Moza shank-prestige pattern links 4 countries (Egypt, Saudi, Qatar, UAE) — make sure each country's Moza entry references this as a notes theme
- The Gulf "origin pricing gap" is unique to UAE, Saudi, Qatar — only add as a Tier 3 entity to Qatar (to avoid triplicating)
- The Hashi (camel) disambiguation is Saudi-only in this batch — other Gulf countries sell camel less commonly
- Do NOT modify resolver or page logic
- The site must build and deploy successfully on Cloudflare Workers — after the Fix A+B changes, the page count limit (top 1000 pre-rendered) will absorb the new regions via ISR with 24h cache
- Test that at least one new country (e.g., /usa-to-saudi_arabia/moza and /brazil-to-egypt/picanha) renders correctly on both pre-rendered and on-demand paths after deploy
