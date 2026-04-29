# Prompt — Batch 14b: India Expansion Part 1 (South India + West + Goa)

## Context

Cutranslator has 79 regions. After Batch 14a's schema migration, the codebase is ready to import India regions with the `species` field properly modeling Buffalo, Mithun, and Yak alongside the implicit cow default. This batch imports **6 regions** representing South India and the West/Goa cluster — the highest-leverage starting point for India because it contains:

1. **Telangana (Hyderabad)** — the documented "Beef Capital of India," home of Awadhi-derived precision butchery (Pasanda, Parcha, Rawa, Hath-ka-Keema, Haleem-cut Machhli). Marquee Tier 3 anchor.
2. **Kerala and Goa** — the two Indian states where COW BEEF IS LEGAL, distinct from Buffalo-only majority states. Documents the cow-vs-buff legal axis.
3. **Maharashtra (Mumbai)** — the cosmopolitan bridge where USDA-style butchery and traditional Buff Curry Cut coexist in the same city.
4. **Tamil Nadu (Chennai)** and **Andhra Pradesh (Amaravati)** — the South Indian "Boil-then-Fry" cooking convention that contradicts US searing logic.

After deploy: 85 regions, ~245 Tier 3 entities. The `south_asia` group activates for the first time.

---

## ARCHITECTURAL DECISIONS (locked from prior conversation)

1. **Hybrid state representation**: 6 major states get their own RegionSlugs in this batch. Future Indian batches will add 6-8 more (North India, Northeast, Himalayan, Islands, Central India). Total India coverage at the end will be ~14 regions, not all 28 states individually.

2. **Buffalo as `species: "buffalo"`**: Each Indian regional name explicitly sets the species when the cut is from water buffalo. Telangana, Maharashtra, and Andhra Pradesh entries are all Buffalo. Kerala and Goa are mostly Cow. Tamil Nadu is Buffalo.

3. **Cow vs Buff legality is documented**: A pan-Indian Tier 3 anchor entity (`india_cow_buff_legal_map`) appears in the Maharashtra entry — Maharashtra is the most populous of the buffalo-only states and the natural anchor. Every state's individual Tier 3 cross-references this anchor.

---

## KEY INSIGHTS (multi-region patterns)

### Insight 1: The Cow vs Buffalo Legal Map of India

For 21 of 28 Indian states, **cow slaughter is constitutionally restricted** under Article 48 of the Indian Constitution and various state laws. The exceptions form a specific geographic pattern:

**Cow legal**: Kerala, Goa, West Bengal, all 8 Northeastern states (Assam, Meghalaya, Manipur, Mizoram, Nagaland, Arunachal, Tripura, Sikkim), Lakshadweep, Andaman & Nicobar
**Buffalo only**: Maharashtra, Telangana, Andhra Pradesh, Tamil Nadu, Karnataka, UP, Bihar, MP, Gujarat, Punjab, Haryana, Rajasthan, Chhattisgarh, Jharkhand, Odisha, J&K (varies), Himachal, Uttarakhand, Daman, Pondicherry (varies)

This is the most consequential cultural-legal axis in any country in the database. An American expat or tourist who walks into a Hyderabad market asking for "cow meat" can cause genuine cultural offense (cow is a sacred animal in Hindu tradition). The same request in Kochi or Panaji is ordinary commerce. The tool must surface this distinction prominently.

Anchored as `india_cow_buff_legal_map` Tier 3 entity in Maharashtra (the most populous Buffalo-only state, the natural anchor for the legal axis).

### Insight 2: Hyderabad is India's Precision Butchery Anchor

Per the source PDF: *"Hyderabad is arguably the 'Beef Capital' of India, where butchery isn't just about selling meat—it's about understanding the specific chemistry required for legendary dishes like Haleem, Nihari, and Tala Hua Gosht."*

Hyderabad documents techniques absent from any prior region in the database:
- **Pasanda**: pre-flattened, hand-pounded thin steaks from the undercut
- **Parcha**: paper-thin translucent sheets sliced for layered preparations
- **Rawa**: a finely-chopped (not minced) texture preserving "grainy juiciness"
- **Hath-ka-Keema** (hand-chopped) vs **Machine-Keema** distinction
- **Haleem-cut Machhli**: shank cut specifically so it "threads" (shreds) after 12-hour pounding

Marquee Tier 3 entry: `hyderabad_precision_butchery_in`. Cross-references future Lucknow Awadhi entry (Batch 15) which is the spiritual sibling — Hyderabad's tradition derives from the Nawabs of Awadh who patronized Hyderabad's Nizams.

### Insight 3: The South Indian "Boil-then-Fry" Convention

Tamil Nadu, Andhra Pradesh, Kerala, and Telangana all share a counter-USDA cooking technique: beef is **pressure-cooked or boiled FIRST**, then pan-fried for crisping. This is documented across all four South Indian PDF entries. The reason: Buffalo (in 3 of 4 states) and grass-fed local cattle (Kerala) are too tough for direct US-style searing; pre-boiling tenderizes the meat before the high-heat finish.

An American attempting Beef Chukka (Chennai) or Beef Ularthiyathu (Kerala) using direct pan-searing produces tough, rubbery results. The local technique is non-negotiable for authentic results.

Anchored as `boil_then_fry_south_in` Tier 3 entity in Tamil Nadu.

### Insight 4: Goa as the Portuguese-Colonial Bridge

Per the source PDF: *"In Goa, beef butchery is perhaps the most 'Western-friendly' in all of India."* Goa offers terms unique to ex-Portuguese colonies: **Lomo** (Tenderloin), **Bistek** (thin pan-fried), **Salt Meat** (brined corned beef), **Língua** (pickled tongue). Pairs with Pondicherry (Batch 16) and Daman as Indo-European bridge regions.

Tier 3 entry: `goa_portuguese_bridge_in`. Cross-references the future Pondicherry French-colonial bridge.

### Insight 5: The Pan-Indian Hindi/Urdu Vocabulary

Across nearly every Indian state, common terms recur — derived from the historical reach of Mughlai-Awadhi cuisine and the Hindi/Urdu lingua franca:

- **Naram Maans / Naram Mansa** = soft meat (tenderloin/loin) — universal across 15+ states
- **Pasanda / Put** = undercut / loin — Hindi/Urdu universal
- **Seena** = brisket / chest — Hindi/Urdu universal
- **Machhli / Nalli** = shank / leg bone — Hindi/Urdu universal (Machhli literally means "fish" — refers to the shank's fish-shape)
- **Charbi** = fat — universally requested as a separate "cut" to compensate for lean Buffalo

This is comparable to the pan-Hispanic *"picanha/picaña/picanya"* axis that anchored Batch 9 (13-country Sirloin Cap pattern) but operates within a single country across 20+ states. Documented in the `pan_indian_hindi_urdu_in` Tier 3 entity in Maharashtra.

---

## CANONICAL ID VERIFICATION

All canonical IDs verified against `lib/types.ts`. Mapping table for Indian-specific terms:

| PDF/Indian term | Canonical ID | Notes |
|-----------------|-------------|-------|
| Naram Maans / Naram Mansa / Mettati Mamsam | `tenderloin` | The soft cut universal across India |
| Pasanda / Put / Undercut | `tenderloin` | Same cut, different colloquial registers |
| Lomo (Goa) | `tenderloin` | Portuguese-derived |
| Sirloin / Loin / Variyellu / Sira / Mishrama Mamsam | `striploin` | Conflated with ribeye in many Indian regions |
| Scotch Fillet (Goa, English-influenced) | `ribeye` | Not common in this batch but valid |
| Seena / Sati / Chhaati / Charbi-wala / Buker / Nenju | `brisket` | "Chest" — universally fatty |
| Kozhuppu (Kerala) | `brisket` | "Fatty meat" |
| Machhli / Nalli / Kaal | `hind_shank` | Critical for Nihari/Haleem |
| Dum / Poonch / Dum / Vaal / Mei-sa | `oxtail` | "Tail" — universal |
| Dasti / Bega / Bhujam Mamsam / Gola | `chuck_blade` for steaks, `chuck_roll` for braising | Shoulder area |
| Lap / Pirudu Mamsam / Topside | `inside_round` | Top round |
| Silverside / Heel | `outside_round` | Bottom round |
| Knuckle / "Kelapa" equivalent | `sirloin_tip` | If used |
| Rump (Goa, Anglo-influenced) | `top_sirloin` | Commonwealth-style |
| Tongue / Língua (Goa) | NOT in canonical | Skip — offal, document in Tier 3 only |
| Tripe (Bhuri) | NOT in canonical | Skip — offal, document in Tier 3 only |
| Marrow Bone (Nalli, isolated) | `hind_shank` | Same canonical as shank, just specifying the bone portion |

**Skipped — outside ontology:**
- Tongue (Língua / Goan delicacy)
- Tripe (Bhuri / Assamese)
- Skin-as-product (mostly Northeast — covered in Batch 16)

---

## STEP 1 — Add 6 new regions

### 1.1 — `RegionSlug` type (`lib/types.ts`)
```ts
| "kerala" | "tamil_nadu" | "telangana" | "andhra_pradesh" | "maharashtra" | "goa"
```

### 1.2 — Region records (`data/regions.ts`)
```ts
{ slug: "kerala", label: "Kerala", h1Place: "Kerala", flag: "🇮🇳", group: "south_asia", subregion: "South India" },
{ slug: "tamil_nadu", label: "Tamil Nadu", h1Place: "Tamil Nadu", flag: "🇮🇳", group: "south_asia", subregion: "South India" },
{ slug: "telangana", label: "Telangana", h1Place: "Telangana", flag: "🇮🇳", group: "south_asia", subregion: "South India" },
{ slug: "andhra_pradesh", label: "Andhra Pradesh", h1Place: "Andhra Pradesh", flag: "🇮🇳", group: "south_asia", subregion: "South India" },
{ slug: "maharashtra", label: "Maharashtra", h1Place: "Maharashtra", flag: "🇮🇳", group: "south_asia", subregion: "West India" },
{ slug: "goa", label: "Goa", h1Place: "Goa", flag: "🇮🇳", group: "south_asia", subregion: "West India" },
```

**Note on `subregion` field**: this is a NEW field on the region record. It's optional and used for the country selector to show "India: South India" and "India: West India" sub-groupings within the South Asia group. If your existing code doesn't have this field, add it as optional or skip and group only by `group: "south_asia"`. Preserve flexibility.

**Group activation note**: the `south_asia` group was reserved in the country-selector redesign but has been empty until now. This batch activates it. After deploy, the country selector dropdown will show "South Asia (6)" as a new group section with sub-groupings for "South India" (4) and "West India" (2).

### 1.3 — Region entity records (`lib/entities.ts` — `REGION_ENTITY`)
```ts
kerala: { id: "kerala", formalName: "Kerala", shortName: "Kerala" },
tamil_nadu: { id: "tamil_nadu", formalName: "Tamil Nadu", shortName: "Tamil Nadu" },
telangana: { id: "telangana", formalName: "Telangana", shortName: "Telangana" },
andhra_pradesh: { id: "andhra_pradesh", formalName: "Andhra Pradesh", shortName: "AP" },
maharashtra: { id: "maharashtra", formalName: "Maharashtra", shortName: "Maharashtra" },
goa: { id: "goa", formalName: "Goa", shortName: "Goa" },
```

### 1.4 — Update exhaustiveness checks in `lib/entities.ts`

### 1.5 — Search aliases
```ts
kerala: aliases: ["kochi", "trivandrum", "thiruvananthapuram", "malayali"]
tamil_nadu: aliases: ["chennai", "madras", "tn", "tamil"]
telangana: aliases: ["hyderabad", "tg"]
andhra_pradesh: aliases: ["amaravati", "ap", "telugu"]
maharashtra: aliases: ["mumbai", "pune", "bombay", "marathi"]
goa: aliases: ["panjim", "panaji", "goan"]
```

---

## STEP 2 — Regional name entries (`data/regionalNames.ts`)

**CRITICAL**: every regional name from a Buffalo state explicitly sets `species: "buffalo"`. Kerala and Goa entries default to cow (no species field needed, per the schema's default). Mark Cow vs Buff state correctly.

### 🇮🇳 KERALA — COW LEGAL (14 entries, mostly cow)

```ts
// Direct matches — Malayalam terminology, primarily cow (Pashu)
{ name: "undercut kl", region: "kerala", maps_to: "tenderloin", confidence: 0.95, synonyms: ["undercut", "naram"] as const, notes: "The softest cut. Used for high-end 'Beef Steak' or premium roasts. Often cow (Pashu) in Kerala — one of few Indian states where cow beef is legal." },
{ name: "naram", region: "kerala", maps_to: "tenderloin", confidence: 0.90, synonyms: ["naram rachi"] as const, notes: "Generic 'soft meat' term, Hindi-derived. Cross-reference pan-Indian Hindi/Urdu vocabulary." },

{ name: "variyellu", region: "kerala", maps_to: "striploin", confidence: 0.85, synonyms: ["loin", "rib-side"] as const, notes: "Literally 'rib-side' — the standard for high-quality Kerala 'Beef Steak'" },

{ name: "nenju rachi", region: "kerala", maps_to: "brisket", confidence: 0.85, synonyms: ["nenju"] as const, notes: "'Chest meat' — prized for the fat layer. Essential for rich Nadan (traditional) curry." },
{ name: "kozhuppu rachi", region: "kerala", maps_to: "brisket", confidence: 0.80, synonyms: ["kozhuppu"] as const, notes: "'Fatty meat' — alternative term for brisket area. Marker of quality in Kerala butchery." },

{ name: "kaal kl", region: "kerala", maps_to: "hind_shank", confidence: 0.85, synonyms: ["nalli", "muscle"] as const, notes: "The leg/shank. Used for Paya (gelatinous bone broth) and slow-cooked soups." },
{ name: "vaalan", region: "kerala", maps_to: "oxtail", confidence: 0.95, notes: "Literally 'tail.' Used for spicy, slow-cooked stews." },

// Specialized
{ name: "beef fry cut", region: "kerala", maps_to: "inside_round", confidence: 0.70, synonyms: ["boti"] as const, notes: "NOT a specific muscle — small 1/2-inch cubes of lean meat (typically Topside) for Beef Ularthiyathu. The format-driven cut. Tier 3 entity explains." },
{ name: "topside kl", region: "kerala", maps_to: "inside_round", confidence: 0.85, synonyms: ["round"] as const, notes: "Lean — used for Beef Fry preparations" },

// Buffalo also available in Kerala (less common but distinct species)
{ name: "poti rachi", region: "kerala", maps_to: "tenderloin", confidence: 0.80, synonyms: ["poti", "buffalo"] as const, species: "buffalo", notes: "'Poti' = Buffalo in Malayalam. Distinct from cow (Pashu) — darker, leaner, stronger flavor. Preferred for deep fries." },
{ name: "poti loin", region: "kerala", maps_to: "striploin", confidence: 0.75, synonyms: ["buffalo loin"] as const, species: "buffalo", notes: "Buffalo striploin — leaner than cow Variyellu, requires pressure cooking." },

// Functional
{ name: "kootu beef", region: "kerala", maps_to: "hind_shank", confidence: 0.65, synonyms: ["kootu"] as const, notes: "NOT a specific muscle — bone-in mixed cut for breakfast Appam pairings. Bone marrow enriches the gravy." },
{ name: "urat", region: "kerala", maps_to: "hind_shank", confidence: 0.50, synonyms: ["tendon"] as const, notes: "Tendon/gristle inclusion — Kerala butchers intentionally include for chewy texture in curries. Note: this is connective tissue, not standard muscle. Documented in Tier 3 as preparation context." },

// Cutlet
{ name: "beef cutlet meat kl", region: "kerala", maps_to: "chuck_roll", confidence: 0.55, synonyms: ["machine keema kl"] as const, notes: "Fine machine mince for Anglo-Indian-style Beef Cutlets — a Kerala Christian community tradition" },
```

### 🇮🇳 TAMIL NADU — BUFFALO ONLY (12 entries, all buffalo)

```ts
{ name: "undercut tn", region: "tamil_nadu", maps_to: "tenderloin", confidence: 0.90, synonyms: ["naram"] as const, species: "buffalo", notes: "The softest part. Buffalo (Buff) in Tamil Nadu — cow slaughter is restricted statewide. Marketed as 'Undercut' in urban Chennai butcheries; 'Naram' (soft) at traditional markets." },
{ name: "loin tn", region: "tamil_nadu", maps_to: "striploin", confidence: 0.85, synonyms: ["variyellu", "rib-meat"] as const, species: "buffalo", notes: "'Rib-meat' or loin — Buffalo. The go-to for the local 'Beef Steak' (thin, spiced cutlet style)." },

{ name: "kozhuppu rachi tn", region: "tamil_nadu", maps_to: "brisket", confidence: 0.85, synonyms: ["kozhuppu"] as const, species: "buffalo", notes: "Literally 'fatty meat' — Buffalo. Essential for rich Kuruva (curry)." },

{ name: "kaal tn", region: "tamil_nadu", maps_to: "hind_shank", confidence: 0.90, synonyms: ["nalli"] as const, species: "buffalo", notes: "Leg/shank — Buffalo. The ONLY cut for the iconic Paya (gelatinous bone soup)." },
{ name: "vaal tn", region: "tamil_nadu", maps_to: "oxtail", confidence: 0.95, species: "buffalo", notes: "Tail — Buffalo. For spicy, medicinal bone broths." },

// Format-driven cuts
{ name: "chukka cut", region: "tamil_nadu", maps_to: "inside_round", confidence: 0.75, synonyms: ["chukka"] as const, species: "buffalo", notes: "NOT a specific muscle — small uniform 1/2-inch cubes of lean Topside for the iconic Beef Chukka (dry-roasted with pepper). Tier 3 entity explains the 'Boil-then-Fry' technique." },
{ name: "elumbu kari", region: "tamil_nadu", maps_to: "hind_shank", confidence: 0.65, synonyms: ["bone-in mix"] as const, species: "buffalo", notes: "NOT a specific muscle — the standard 70/30 meat-to-bone Curry Cut. Default if 'beef' is requested without specification." },

// Mince
{ name: "kothu beef", region: "tamil_nadu", maps_to: "chuck_roll", confidence: 0.60, synonyms: ["kothu", "hand-minced beef"] as const, species: "buffalo", notes: "Hand-minced or beaten — for Kothu Parotta (the iconic Chennai street food). Distinct from machine mince used for cutlets." },
{ name: "machine keema tn", region: "tamil_nadu", maps_to: "chuck_roll", confidence: 0.55, synonyms: ["minced beef"] as const, species: "buffalo", notes: "Machine-ground for Beef Cutlets — distinct from Kothu (hand-chopped)" },

// Naram (universal Hindi-derived)
{ name: "naram tn", region: "tamil_nadu", maps_to: "tenderloin", confidence: 0.85, synonyms: ["soft meat"] as const, species: "buffalo", notes: "Generic Hindi-derived 'soft meat' term — Buffalo. Pan-Indian vocabulary spanning 15+ states." },

// Topside specifically
{ name: "topside tn", region: "tamil_nadu", maps_to: "inside_round", confidence: 0.80, species: "buffalo", notes: "Lean — used for Chukka Cut and Beef Fry. Buffalo." },

// Charbi (universal)
{ name: "charbi tn", region: "tamil_nadu", maps_to: "brisket", confidence: 0.50, synonyms: ["fat"] as const, species: "buffalo", notes: "NOT a specific cut — fat sold separately as a 'cut.' Compensates for lean Buffalo. Universally requested across Indian markets." },
```

### 🇮🇳 TELANGANA (HYDERABAD) — BUFFALO ONLY (16 entries, the marquee region)

```ts
// The Awadhi-derived precision butchery — Hyderabad's signature
{ name: "pasanda", region: "telangana", maps_to: "tenderloin", confidence: 0.95, synonyms: ["put", "undercut"] as const, species: "buffalo", notes: "CRITICAL: The flagship Hyderabadi cut. Soft undercut, hand-pounded into thin sheets. Buffalo. Used for legendary Hyderabadi Pasanda steaks and premium kebabs. The most prestigious cut in the city's beef culture." },
{ name: "put", region: "telangana", maps_to: "tenderloin", confidence: 0.90, synonyms: ["pasanda"] as const, species: "buffalo", notes: "Alternative term for Pasanda — used at traditional Murgi Chowk butcher shops" },

{ name: "dasti", region: "telangana", maps_to: "chuck_blade", confidence: 0.85, synonyms: ["gola", "shoulder"] as const, species: "buffalo", notes: "Shoulder/blade area. Buffalo. Standard for everyday 'Boti' fry. The workhorse cut of Hyderabadi home cooking." },
{ name: "gola tg", region: "telangana", maps_to: "striploin", confidence: 0.80, synonyms: ["loin"] as const, species: "buffalo", notes: "Prime back-meat — Buffalo. Used for high-quality home preparations." },

{ name: "seena tg", region: "telangana", maps_to: "brisket", confidence: 0.90, synonyms: ["seena", "chest"] as const, species: "buffalo", notes: "'Chest' — Buffalo. High-fat content essential for Chakna (offal-and-brisket stew) and rich Salans." },

{ name: "machhli tg", region: "telangana", maps_to: "hind_shank", confidence: 0.95, synonyms: ["machhli", "shank"] as const, species: "buffalo", notes: "CRITICAL: The 'Fish' muscle — literally named for the calf's fish-shape. Mandatory for Hyderabadi Nihari and Haleem (the meat 'threads'/shreds after 12-hour pounding). Buffalo. The single most culturally important cut in Hyderabad." },
{ name: "nalli tg", region: "telangana", maps_to: "hind_shank", confidence: 0.90, synonyms: ["nalli bone", "marrow bone"] as const, species: "buffalo", notes: "Marrow bone specifically — requested as an extra to thicken Salan. Universal Indian vocabulary." },

{ name: "dum tg", region: "telangana", maps_to: "oxtail", confidence: 0.85, synonyms: ["dum"] as const, species: "buffalo", notes: "Tail — Buffalo. Specialty for slow-cooked medicinal soups." },

// Format-driven precision cuts (Awadhi-derived)
{ name: "parcha", region: "telangana", maps_to: "tenderloin", confidence: 0.85, synonyms: ["thin sheets"] as const, species: "buffalo", notes: "CRITICAL: Hand-sliced THIN translucent sheets from Pasanda. Cooks in seconds. Used for traditional pan-fried steaks. Format-driven cut — same muscle, distinct slicing technique. Tier 3 entity explains." },
{ name: "rawa tg", region: "telangana", maps_to: "tenderloin", confidence: 0.80, synonyms: ["rawa", "grainy texture"] as const, species: "buffalo", notes: "CRITICAL: A specific texture — meat finely CHOPPED (not minced) to retain a 'grainy' juiciness. Essential for the best Tala Hua Gosht. Texture-driven cut." },
{ name: "haleem cut", region: "telangana", maps_to: "hind_shank", confidence: 0.85, synonyms: ["haleem-cut machhli"] as const, species: "buffalo", notes: "NOT a specific muscle but a specific PREPARATION of Machhli — fibrous shank meat that 'threads' (shreds) perfectly after 12-hour pounding for Haleem. Without this, Haleem fails." },

// Keema variants
{ name: "hath ka keema", region: "telangana", maps_to: "chuck_roll", confidence: 0.75, synonyms: ["hand-chopped keema"] as const, species: "buffalo", notes: "Hand-chopped (not machine-ground) mince. Essential for Hyderabadi Lukmi (savory pastry) and authentic Seekh Kebabs. More expensive than machine-keema; prized for texture. Tier 3 entity explains." },
{ name: "machine keema tg", region: "telangana", maps_to: "chuck_roll", confidence: 0.55, synonyms: ["machine-ground keema"] as const, species: "buffalo", notes: "Fine machine-ground — for Kofta (meatballs). Distinct from Hath-ka-Keema." },

// Boti
{ name: "boti tg", region: "telangana", maps_to: "chuck_roll", confidence: 0.65, species: "buffalo", notes: "Generic 'cubed beef' — small bone-in or boneless chunks for daily Salan" },

// Charbi (universal)
{ name: "charbi tg", region: "telangana", maps_to: "brisket", confidence: 0.50, synonyms: ["fat"] as const, species: "buffalo", notes: "Fat sold separately. Pan-Indian vocabulary." },

// Naram (universal)
{ name: "naram tg", region: "telangana", maps_to: "tenderloin", confidence: 0.85, synonyms: ["soft meat"] as const, species: "buffalo", notes: "Hindi-derived universal 'soft meat' term." },
```

### 🇮🇳 ANDHRA PRADESH — BUFFALO ONLY (10 entries)

```ts
{ name: "mettati mamsam", region: "andhra_pradesh", maps_to: "tenderloin", confidence: 0.95, synonyms: ["soft meat"] as const, species: "buffalo", notes: "Telugu 'soft meat.' Buffalo — used for high-end fry dishes." },
{ name: "mishrama mamsam", region: "andhra_pradesh", maps_to: "striploin", confidence: 0.75, synonyms: ["mixed loin"] as const, species: "buffalo", notes: "Mixed loin meat — striploin/ribeye conflated in Andhra retail. Buffalo. Steaks rare; usually sold as chunks." },

{ name: "rommu mukkalu", region: "andhra_pradesh", maps_to: "brisket", confidence: 0.80, synonyms: ["chest pieces"] as const, species: "buffalo", notes: "Telugu 'chest pieces.' Prized for fat in Andhra stews — counters extreme Guntur chili heat." },

{ name: "nalukaya", region: "andhra_pradesh", maps_to: "hind_shank", confidence: 0.85, synonyms: ["shank"] as const, species: "buffalo", notes: "Telugu shank/leg. Essential for bone-marrow dishes (Nalli Emuka)." },
{ name: "thoka", region: "andhra_pradesh", maps_to: "oxtail", confidence: 0.95, synonyms: ["tail"] as const, species: "buffalo", notes: "Tail — for rich gelatinous medicinal soups." },
{ name: "nalli emuka", region: "andhra_pradesh", maps_to: "hind_shank", confidence: 0.85, synonyms: ["bone marrow"] as const, species: "buffalo", notes: "Marrow bone delicacy — often the STAR of the dish. Tier 3 entity explains the prestige inversion." },

{ name: "bhujam mamsam", region: "andhra_pradesh", maps_to: "chuck_blade", confidence: 0.80, synonyms: ["shoulder"] as const, species: "buffalo", notes: "Telugu shoulder. Standard for daily curry." },
{ name: "pirudu mamsam", region: "andhra_pradesh", maps_to: "inside_round", confidence: 0.80, synonyms: ["hip", "rump"] as const, species: "buffalo", notes: "Hip/Topside. Used for 'Boti' or dry fries." },

{ name: "kovvu", region: "andhra_pradesh", maps_to: "brisket", confidence: 0.50, synonyms: ["fat"] as const, species: "buffalo", notes: "Telugu fat — added separately to lean Buffalo cuts for flavor. Universal pan-Indian Charbi pattern." },
{ name: "keema ap", region: "andhra_pradesh", maps_to: "chuck_roll", confidence: 0.65, synonyms: ["minced meat"] as const, species: "buffalo", notes: "Minced — common for breakfast dishes. Buffalo." },
```

### 🇮🇳 MAHARASHTRA (MUMBAI) — BUFFALO ONLY (14 entries, the cosmopolitan bridge)

```ts
// English-friendly retail (Crawford Market, Bandra, Kurla)
{ name: "undercut mh", region: "maharashtra", maps_to: "tenderloin", confidence: 0.95, synonyms: ["pasanda", "fillet"] as const, species: "buffalo", notes: "CRITICAL: The most sought-after cut in Mumbai. Buffalo. Mumbai butchers are the most Western-literate in India — they recognize 'Undercut,' 'Fillet,' 'Tenderloin' interchangeably. Used for high-end steaks at Bandra/South Mumbai restaurants." },
{ name: "pasanda mh", region: "maharashtra", maps_to: "tenderloin", confidence: 0.90, species: "buffalo", notes: "Hindi/Urdu term — same cut as Undercut. Used at traditional markets like Mohammed Ali Road." },

{ name: "loin mh", region: "maharashtra", maps_to: "striploin", confidence: 0.85, synonyms: ["gola"] as const, species: "buffalo", notes: "Standard prime lean muscle. Buffalo." },

{ name: "seena mh", region: "maharashtra", maps_to: "brisket", confidence: 0.85, synonyms: ["seena", "chest"] as const, species: "buffalo", notes: "Chest — Buffalo. Essential for Beef Stew preparations." },

{ name: "machhli mh", region: "maharashtra", maps_to: "hind_shank", confidence: 0.95, synonyms: ["nalli", "shank"] as const, species: "buffalo", notes: "Calf muscle — Buffalo. Essential for Mumbai's famous Nalli Nihari." },

{ name: "dum mh", region: "maharashtra", maps_to: "oxtail", confidence: 0.85, synonyms: ["dum"] as const, species: "buffalo", notes: "Specialty cut for rich slow-cooked soups" },

// Topside (Mumbai's Western awareness)
{ name: "topside mh", region: "maharashtra", maps_to: "inside_round", confidence: 0.85, synonyms: ["round"] as const, species: "buffalo", notes: "Mumbai is one of few Indian cities where 'Topside' is widely recognized — used for Beef Roast and Bistek. English retail influence." },
{ name: "silver side mh", region: "maharashtra", maps_to: "outside_round", confidence: 0.75, synonyms: ["silverside"] as const, species: "buffalo", notes: "Used by Mumbai's East Indian and Catholic communities for Salt Beef (corned beef). Anglo-Indian heritage." },

// Keema variants
{ name: "rawa keema", region: "maharashtra", maps_to: "chuck_roll", confidence: 0.70, synonyms: ["coarse keema"] as const, species: "buffalo", notes: "Hand-chopped/coarse — for the iconic Keema Pav breakfast. Distinct from Machine Keema (fine, for kebabs)." },
{ name: "machine keema mh", region: "maharashtra", maps_to: "chuck_roll", confidence: 0.55, synonyms: ["fine keema"] as const, species: "buffalo", notes: "Fine machine mince — for kebabs and meatballs" },

// Curry Cut (universal)
{ name: "curry cut mh", region: "maharashtra", maps_to: "chuck_roll", confidence: 0.55, synonyms: ["bone-in mix"] as const, species: "buffalo", notes: "Default at wet markets — bone-in 70/30 mix. Must specify 'Boneless cubes' for US-style stew meat." },

// Naram, Charbi (universal pan-Indian)
{ name: "naram mh", region: "maharashtra", maps_to: "tenderloin", confidence: 0.85, synonyms: ["soft meat"] as const, species: "buffalo", notes: "Universal Hindi 'soft meat' term" },
{ name: "charbi mh", region: "maharashtra", maps_to: "brisket", confidence: 0.50, synonyms: ["fat"] as const, species: "buffalo", notes: "Separately-sold fat. Universal Indian vocabulary." },
```

### 🇮🇳 GOA — COW LEGAL (12 entries, mostly cow, Portuguese-bridged)

```ts
// Portuguese-derived terminology — predominantly cow (Gado)
{ name: "undercut goa", region: "goa", maps_to: "tenderloin", confidence: 0.95, synonyms: ["lomo"] as const, notes: "The gold standard. Cow (Gado) — Goa is one of few Indian states where cow beef is legal. 'Lomo' is the Portuguese-derived alternative. Used for Beef Roast and Goan-style steaks." },
{ name: "lomo", region: "goa", maps_to: "tenderloin", confidence: 0.90, synonyms: ["undercut"] as const, notes: "Portuguese-colonial term — pairs with Pondicherry's Filet (French) and Daman's Filet (Portuguese). Indo-European bridge vocabulary." },

{ name: "sirloin goa", region: "goa", maps_to: "striploin", confidence: 0.90, synonyms: ["loin", "bistek"] as const, notes: "Standard for the famous Goan Bistek (thin pan-fried steak)" },
{ name: "rib goa", region: "goa", maps_to: "ribeye", confidence: 0.80, synonyms: ["rib-meat"] as const, notes: "Rib — usually sold bone-in for high-end roasts" },

{ name: "brisket goa", region: "goa", maps_to: "brisket", confidence: 0.85, synonyms: ["chest"] as const, notes: "Essential for Salt Beef (brined corned beef) — a Goan Catholic tradition" },

{ name: "shin goa", region: "goa", maps_to: "hind_shank", confidence: 0.85, synonyms: ["shank"] as const, notes: "Go-to for Beef Soup or Nilaga-style broths" },
{ name: "tail goa", region: "goa", maps_to: "oxtail", confidence: 0.95, notes: "Prized for traditional rich Goan stews" },

// Specialized Portuguese-influenced
{ name: "salt meat", region: "goa", maps_to: "brisket", confidence: 0.70, synonyms: ["pickled beef", "corned beef"] as const, notes: "CRITICAL: Brined brisket or round — essential for Goan Beef Roast. Tier 3 entity explains the salt-cure tradition." },
{ name: "topside goa", region: "goa", maps_to: "inside_round", confidence: 0.80, synonyms: ["topside"] as const, notes: "Standard lean cut for Beef Stir-fry or Ambot Tik (sour-spicy curry)" },
{ name: "rump goa", region: "goa", maps_to: "top_sirloin", confidence: 0.85, synonyms: ["rump"] as const, notes: "Anglo-Commonwealth term used in Goan English retail. = US Top Sirloin." },

// Mince
{ name: "kheema goa", region: "goa", maps_to: "chuck_roll", confidence: 0.65, synonyms: ["minced beef"] as const, notes: "For Goan Beef Croquettes and Beef Patties" },

// Tongue (skipped from regional names but mentioned in description) — actually NOT adding as regional name, it's offal
```

---

## STEP 3 — Tier 3 entities (`data/regionalCuts.ts`)

### 🇮🇳 MAHARASHTRA (3 entities — including the pan-Indian anchor)

```ts
{
  id: "india_cow_buff_legal_map",
  name: "The Cow vs Buffalo Legal Map of India (Pan-Indian Anchor)",
  region: "maharashtra",
  maps_to: [
    { canonical_id: "tenderloin", match_type: "cultural", confidence: 0.40, note: "Applies across all cuts" },
    { canonical_id: "striploin", match_type: "cultural", confidence: 0.40, note: "Same convention" },
  ],
  synonyms: ["cow vs buffalo", "buff", "gomansa"],
  description: "India's beef ontology cannot be understood without the Cow vs Buffalo legal-cultural axis — the most consequential cultural marker in any country in the Cutranslator database. Under Article 48 of the Indian Constitution and various state laws, COW slaughter is legally restricted in 21 of 28 Indian states. In those states, 'Beef' refers exclusively to Water Buffalo (Bos bubalis), known regionally as 'Bada' (Hindi/Urdu), 'Bade ka Maans,' 'Bade ka Gosht,' or 'Buff.' The cow (Bos taurus) is a sacred animal in Hindu tradition, and asking for 'cow meat' in restricted states can cause genuine cultural offense — a tourist or expat unaware of this distinction risks both legal and social consequences. The exceptions form a specific geographic pattern: COW IS LEGAL in Kerala, Goa, West Bengal, all 8 Northeastern states (Assam, Meghalaya, Manipur, Mizoram, Nagaland, Arunachal Pradesh, Tripura, Sikkim), Lakshadweep, and Andaman & Nicobar Islands. In Maharashtra, Telangana, Tamil Nadu, Karnataka, UP, Bihar, MP, Gujarat, Punjab, Haryana, Rajasthan, Chhattisgarh, Jharkhand, Odisha, J&K (varies by region), Himachal Pradesh, and Uttarakhand — the meat sold as 'beef' is ALWAYS Water Buffalo. Buffalo is leaner, darker, more fibrous, and significantly tougher than USDA cow beef. It requires 30-40% longer cooking, mandatory pressure-cooking or extensive marination (often with raw papaya or yogurt), and almost universally needs separately-purchased Charbi (fat) added for richness. An American expat using USDA recipes with Indian Buffalo without these adaptations produces 'rubbery' or 'livery' results that locals recognize as failed cooking. This entity is the architectural anchor for every Indian regional name with `species: 'buffalo'` — cross-referenced from every Buffalo-state Tier 3 entry.",
  notes: "PAN-INDIAN ANCHOR. The single most important Tier 3 entry in the Indian dataset. Cross-reference from every Indian state's regional entries. Documents both the legal axis and the cooking-adaptation requirement.",
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
```

### 🇮🇳 TELANGANA (4 entities — the Hyderabad anchor)

```ts
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
```

### 🇮🇳 TAMIL NADU (2 entities)

```ts
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
```

### 🇮🇳 KERALA (2 entities — cow-legal context)

```ts
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
```

### 🇮🇳 ANDHRA PRADESH (1 entity)

```ts
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
```

### 🇮🇳 GOA (2 entities)

```ts
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
```

---

## STEP 4 — Doneness labels (`data/doneness.ts`)

Indian doneness preferences are dominated by long-cooked traditions; "rare" and "medium-rare" are largely absent from home cooking but present in modern urban steakhouses.

```ts
// rare
kerala: "Rare",
tamil_nadu: "Rare",
telangana: "Rare",
andhra_pradesh: "Rare",
maharashtra: "Rare",
goa: "Rare",

// medium_rare
kerala: "Medium rare",
tamil_nadu: "Medium rare",
telangana: "Medium rare",
andhra_pradesh: "Medium rare",
maharashtra: "Medium rare",
goa: "Medium rare",

// medium
kerala: "Medium",
tamil_nadu: "Medium",
telangana: "Medium",
andhra_pradesh: "Medium",
maharashtra: "Medium",
goa: "Medium",

// well_done
kerala: "Lutu",  // Malayalam "well-cooked"
tamil_nadu: "Nalla seyyu",  // Tamil "well-cooked"
telangana: "Bhuna",  // Hindi "thoroughly browned"
andhra_pradesh: "Bagaa kallindi",  // Telugu "well-cooked"
maharashtra: "Bhuna",  // Hindi
goa: "Bem feito",  // Portuguese-derived "well done"
```

Add `notes` (on `well_done`):
```ts
kerala: "Kerala home cooking strongly defaults to well-done (Lutu) — both because of cultural preference and because the local grass-fed cow beef toughens at higher temperatures more rapidly than USDA grain-fed. The iconic Beef Ularthiyathu is cooked to deep mahogany. Modern Kochi steakhouses use international doneness terms; traditional home cooking is uniformly well-done.",
tamil_nadu: "Tamil home cooking defaults to well-done — Beef Chukka is roasted to deep brown, Beef Kuzhambu simmers for 45+ minutes. Buffalo's leanness combined with the Boil-then-Fry technique produces well-done results by default. Modern Chennai steakhouses (Royal Vega, etc.) operate at international standards.",
telangana: "Hyderabadi cooking is dominated by long-cooked Buffalo preparations — Haleem (12 hours), Nihari (overnight), Tala Hua Gosht (deep-fried after parboiling) — all produce well-done results. Premium Pasanda steaks at high-end restaurants are served Medium-Rare to Medium, but home cooking is uniformly Bhuna (thoroughly cooked).",
andhra_pradesh: "Andhra cuisine's intense Guntur chili heat and tamarind-based gravies require well-cooked Buffalo to avoid harsh raw textures. Vepudu (dry fries) and Pulusu (gravies) both demand fully-cooked meat. Buffalo + intense heat + long cook = well-done as default.",
maharashtra: "Mumbai's two-tier butchery system produces split doneness preferences — high-end Bandra restaurants serve premium cuts at international doneness levels (Medium-Rare to Medium); traditional Crawford Market home cooking uniformly produces well-done Buffalo via pressure-cooking. Both are valid Mumbai expressions.",
goa: "Goa's Portuguese influence introduces 'Bem feito' doneness for traditional Bistek (thin pan-fried), but the 1-2 minute high-heat cook actually produces Medium-Rare to Medium results despite the well-done terminology. Goan Beef Roast (slow-cooked salt-meat) produces classically well-done results. Modern Panjim restaurants operate at international standards.",
```

---

## STEP 5 — Butcher phrases (`data/butcherPhrases.ts`)

```ts
// 🇮🇳 KERALA (Malayalam-English mix)
{ canonicalId: "tenderloin", region: "kerala", phrase: "Pashu undercut, oru kilo, taja", notes: "'Cow undercut, one kilo, fresh' — explicit cow specification (vs Poti/Buffalo)" },
{ canonicalId: "inside_round", region: "kerala", phrase: "Beef Fry-inu chinnathayi murikku", notes: "'Cut small for Beef Fry' — the Beef Ularthiyathu cube format" },
{ canonicalId: "brisket", region: "kerala", phrase: "Nenju rachi, taja, nadan curry-kku", notes: "'Brisket meat, fresh, for traditional curry'" },

// 🇮🇳 TAMIL NADU (Tamil-English mix)
{ canonicalId: "tenderloin", region: "tamil_nadu", phrase: "Beef undercut, kilo, fresh-ah iruka", notes: "Buffalo undercut request; 'is it fresh' essential for hot-boned market" },
{ canonicalId: "inside_round", region: "tamil_nadu", phrase: "Chukka cut, paper-thin, fry pannathuku", notes: "'Chukka cut, paper-thin, for frying' — the Beef Chukka format" },
{ canonicalId: "hind_shank", region: "tamil_nadu", phrase: "Kaal, elumbu kooda, paya-kku", notes: "'Leg, with bone, for Paya' — bone-in mandatory for the soup" },

// 🇮🇳 TELANGANA / HYDERABAD (Urdu-Hindi mix)
{ canonicalId: "tenderloin", region: "telangana", phrase: "Pasanda kaat ke do, parchey ki shape mein", notes: "'Cut Pasanda in Parcha shape' — explicit thin-sheet specification" },
{ canonicalId: "hind_shank", region: "telangana", phrase: "Haleem ke liye Machhli, threads ke shape mein", notes: "'Machhli for Haleem, in thread-shape' — the cooking-driven cut request" },
{ canonicalId: "chuck_roll", region: "telangana", phrase: "Hath-ka-keema, machine se nahi", notes: "Hand-chopped keema, NOT machine-ground — Lukmi/Seekh Kebab requirement" },
{ canonicalId: "tenderloin", region: "telangana", phrase: "Rawa cut, grainy texture, Tala Hua Gosht ke liye", notes: "Texture-driven request for the iconic fried beef dish" },

// 🇮🇳 ANDHRA PRADESH (Telugu-Hindi mix)
{ canonicalId: "hind_shank", region: "andhra_pradesh", phrase: "Nalli emuka, full marrow, kilo", notes: "'Marrow bone, full marrow, kilo' — prestige cut request" },
{ canonicalId: "tenderloin", region: "andhra_pradesh", phrase: "Mettati mamsam, vepudu cooking ki", notes: "'Soft meat for dry-fry cooking' — Vepudu specification" },
{ canonicalId: "brisket", region: "andhra_pradesh", phrase: "Rommu mukkalu, kovvu kuda kavali", notes: "'Chest pieces, with fat needed' — explicit fat retention for Andhra heat balance" },

// 🇮🇳 MAHARASHTRA (English-Hindi mix at modern shops; pure Hindi/Urdu at Crawford)
{ canonicalId: "tenderloin", region: "maharashtra", phrase: "Undercut, fillet — Western style cut, Bandra restaurant ke liye", notes: "Modern English-Hindi mix at high-end butchers" },
{ canonicalId: "tenderloin", region: "maharashtra", phrase: "Pasanda, taza, mausam ka maal nahi", notes: "Traditional Hindi/Urdu — 'fresh, not seasonal stock' (avoiding stale meat)" },
{ canonicalId: "chuck_roll", region: "maharashtra", phrase: "Rawa keema for Keema Pav, hand-chopped", notes: "The iconic Mumbai breakfast preparation request" },

// 🇮🇳 GOA (Konkani-English-Portuguese mix)
{ canonicalId: "tenderloin", region: "goa", phrase: "Lomo/Undercut, motto kat, BBQ-saathi", notes: "'Lomo/Undercut, thick cut, for BBQ' — Portuguese-Konkani-English trilingual" },
{ canonicalId: "brisket", region: "goa", phrase: "Salt Meat, pre-salted, Beef Roast saathi", notes: "Pre-brined brisket request for Goan Beef Roast" },
{ canonicalId: "outside_round", region: "goa", phrase: "Topside or Rump, Vindaloo-saathi, vinagre marinate karayche", notes: "'Topside or Rump, for Vindaloo, will marinate in vinegar' — explicit marination plan" },
```

---

## STEP 6 — Update exhaustiveness checks

Add `kerala`, `tamil_nadu`, `telangana`, `andhra_pradesh`, `maharashtra`, `goa` to all `Record<RegionSlug, ...>` patterns in `lib/entities.ts`.

Specifically:
1. Update `REGION_ENTITY` with the 6 new region entries from Step 1.3
2. The `south_asia` group activates for the first time — verify it appears in the country selector dropdown after deploy
3. Verify all 6 new regions appear in alphabetical order within South Asia: Andhra Pradesh, Goa, Kerala, Maharashtra, Tamil Nadu, Telangana

---

## STEP 7 — Pan-Indian cross-references

After this deploy:

1. The `india_cow_buff_legal_map` Tier 3 entity (Maharashtra) is the architectural anchor for the cow vs buffalo legality axis. Cross-reference it from every other Buffalo-only and cow-legal Indian state in this batch and future batches.

2. The `pan_indian_hindi_urdu_in` Tier 3 entity (Maharashtra) is the architectural anchor for the universal Indian butchery vocabulary. Cross-reference it from every Indian state's regional entries in future batches.

3. The `hyderabad_precision_butchery_in` Tier 3 entity (Telangana) is the marquee Master Class anchor for Indian beef ontology. Cross-reference future Lucknow Awadhi (Batch 15) which is the spiritual predecessor.

These three anchors serve as the spine for all future India batches — Batch 15 (North India), Batch 16 (Northeast + Himalayan + Islands) all reference back to these three architectural pillars.

---

## VERIFICATION

```bash
npx tsc --noEmit
npx tsx scripts/validateDataset.ts
npm run build 2>&1 | tail -20

echo "Regions: $(grep -c 'slug:' data/regions.ts)"
echo "Regional names: $(grep -c 'maps_to' data/regionalNames.ts)"
echo "Tier 3 entities: $(grep -c 'id:' data/regionalCuts.ts)"
echo "Buffalo entries: $(grep -c 'species: \"buffalo\"' data/regionalNames.ts)"
echo "South Asia group populated: $(grep -c 'group: \"south_asia\"' data/regions.ts)"
npm run build 2>&1 | grep "static pages"
```

**Report targets:**
- Regions: 85 (was 79, +6 India South+West)
- Regional names added: ~78 (14+12+16+10+14+12)
- Tier 3 entities: 215 + 14 = 229 (the 14 = 3 Maharashtra + 4 Telangana + 2 Tamil Nadu + 2 Kerala + 1 Andhra Pradesh + 2 Goa)
- Buffalo species entries: ~50 (Tamil Nadu + Telangana + Andhra Pradesh + Maharashtra + 2 in Kerala = mostly buffalo)
- South Asia group activates for first time (was 0, now 6 regions)

---

## RULES

- Follow existing code style exactly
- Do NOT modify existing entries — only ADD new ones
- **Schema migration (14a) MUST be deployed first.** This batch (14b) depends on the `species` field being live in production. If 14a hasn't shipped, do NOT execute this batch.
- **CANONICAL ID VERIFICATION**: all mappings use verified `CanonicalId` values from `lib/types.ts`. Specifically:
  - `tenderloin` for all "Naram"/"Pasanda"/"Put"/"Lomo"/"Undercut"/"Mettati Mamsam" entries
  - `striploin` for all "Loin"/"Sirloin"/"Variyellu"/"Mishrama Mamsam" entries
  - `brisket` for all "Seena"/"Charbi"/"Buker"/"Nenju"/"Kozhuppu"/"Chest"/"Rommu Mukkalu"/"Sati" entries
  - `hind_shank` for all "Machhli"/"Nalli"/"Kaal"/"Nalukaya" entries — also for "Nalli Emuka" (marrow bone specifically)
  - `oxtail` for all "Dum"/"Poonch"/"Vaal"/"Thoka" entries
  - `chuck_blade` for "Dasti"/"Bega"/"Bhujam Mamsam" entries (shoulder for steaks)
  - `chuck_roll` for "Curry Cut"/"Boti"/"Keema" entries (general braising/grinding)
  - `inside_round` for "Topside"/"Pirudu Mamsam"/"Lap" entries
  - `outside_round` for "Silverside"/"Salt Meat" base
- **Species field is REQUIRED on every Buffalo-state entry.** Tamil Nadu, Telangana, Andhra Pradesh, Maharashtra, and the buffalo entries in Kerala all need `species: "buffalo"` explicitly. Cow-default entries in Kerala and Goa do NOT include the field (defaults to "cow").
- **The `india_cow_buff_legal_map` Tier 3 entry is the headline content of this batch.** This entity must be detailed, accurate, and culturally respectful. It documents the legal axis of Cow vs Buffalo across Indian states — a topic that requires nuance.
- **The `hyderabad_precision_butchery_in` Tier 3 entry is the Master Class anchor.** This is Hyderabad's defining content. Description must explicitly cover all 5 precision techniques (Pasanda, Parcha, Rawa, Hath-ka-Keema, Haleem-cut Machhli).
- **The `pan_indian_hindi_urdu_in` Tier 3 entry is the architectural vocabulary anchor.** Comparable to the pan-Hispanic Picanha Axis but within India. All 6 universal terms (Naram Maans, Pasanda, Seena, Machhli, Nalli, Charbi) must be explicitly listed.
- Native Indian scripts (Telugu, Tamil, Malayalam, Marathi, Konkani) — for this batch, store native script ONLY in synonyms where critical for cultural accuracy. The pan-Indian Hindi/Urdu vocabulary is more searchable in Latin transliteration. Don't burden URLs with non-Latin characters.
- Goa "Tongue" (Língua) and Kerala "Urat" (tendon) — flagged in the audit as outside the canonical ontology. NOT added as regional names. Documented in Tier 3 as cultural context only.
- The `south_asia` group activates with this batch — verify it appears in the dropdown after deploy
- After deploy, spot-check:
  - Pre-rendered route: `/usa-to-telangana/pasanda` — verify Hyderabadi Pasanda surfaces correctly with buffalo species annotation
  - On-demand route: `/japan-to-kerala/undercut-kl` — verify Kerala cow-legal context shows
  - Compare route: `/maharashtra-to-uk/sirloin` — verify the Commonwealth Sirloin trap (UK Sirloin = Striploin) coexists correctly with Mumbai's Western-friendly butchery context
  - Buffalo CTA: visit any `/usa-to-maharashtra/...` page and verify "Ask for: [Term] (water buffalo (buff))" annotation appears
  - Cow CTA: visit any `/usa-to-kerala/...` page and verify NO species annotation (cow is default)
  - Country selector: open the dropdown, verify "South Asia" group shows with 6 countries: Andhra Pradesh, Goa, Kerala, Maharashtra, Tamil Nadu, Telangana

---

## What success looks like

After this PR deploys:

1. ✅ TypeScript compiles cleanly with the new South Asian regions
2. ✅ 85 regions live, South Asia group activated
3. ✅ Buffalo annotations render correctly on Maharashtra/Telangana/Tamil Nadu/Andhra Pradesh pages
4. ✅ Cow-default annotations remain invisible on Kerala/Goa pages
5. ✅ The Cow vs Buffalo Legal Map of India anchor entity is the most-clicked Tier 3 entry within the first month
6. ✅ Hyderabad Precision Butchery entity surfaces in search results for "Hyderabadi Pasanda" and "Hyderabadi Haleem cut" queries
7. ✅ The Pan-Indian Hindi/Urdu Vocabulary entity is cross-referenced as Indian batches 15 and 16 ship

The Indian beef ontology now has its three architectural pillars: legal axis (Cow vs Buffalo), vocabulary axis (Hindi/Urdu universal terms), and precision axis (Hyderabadi Master Class). Future batches build on this foundation.
