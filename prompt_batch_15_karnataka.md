# Prompt — Batch 15: Karnataka (Intra-India South Indian Completion)

## Context

Cutranslator has 85 regions after Batch 14b's South India + West India deploy. This batch adds **Karnataka** — the 5th South Indian state, completing the major buffalo-only South Indian cluster (Maharashtra, Telangana, Tamil Nadu, Andhra Pradesh, + Karnataka).

After deploy: **86 regions**, ~232 Tier 3 entities. The South Asia group expands from 6 → 7 regions.

**Why Karnataka alone:** This is a focused intra-India deploy. The next batch (Pakistan + Bangladesh) introduces sovereign South Asian nations with distinct legal-political contexts — Pakistani Bachhiya/Bhains dual-species retail and Bangladeshi cow-dominance — plus the marquee Nihari Regional Traditions architectural anchor. Mixing those into a Karnataka deploy would muddy two distinct thematic landings.

Karnataka completes the buffalo-only South Indian cluster cleanly: same architectural anchors as Batch 14b (cow-vs-buff legal map, pan-Indian Hindi/Urdu vocabulary, Hyderabad precision butchery), no new architectural patterns introduced. The deploy is small, focused, and architecturally simple.

---

## KEY INSIGHTS

### Insight 1: Karnataka completes the South Indian buffalo-only cluster

After this batch, all 5 major South Indian states with cow-slaughter restrictions are documented:
- Telangana (Batch 14b — Hyderabad as Master Class anchor)
- Tamil Nadu (Batch 14b — Boil-then-Fry technique anchor)
- Andhra Pradesh (Batch 14b — Marrow prestige inversion)
- Maharashtra (Batch 14b — Two-tier butchery + pan-Indian anchors)
- **Karnataka (this batch)**

All 5 states share: buffalo-only legal status, pan-Indian Hindi/Urdu universal vocabulary (Naram Maans, Pasanda, Seena, Machhli, Nalli, Charbi), and the Boil-then-Fry South Indian cooking convention. Karnataka adds three distinctive contributions documented in the source PDF.

### Insight 2: Bengaluru is the second documented dual-tier butchery city

Bengaluru's tech-expat population (~300K tech professionals) sustains a "Western Tier" at modern supermarkets (Nature's Basket Bangalore, Hypermart) using USDA-style English vocabulary, alongside a "Traditional Tier" at colonial-era markets (Russell Market in Shivaji Nagar, Johnson Market) using Hindi/Dakhni Urdu/Kannada vocabulary. This is structurally identical to Mumbai's two-tier system (Batch 14b) — making Bengaluru the second documented Indian dual-tier city.

The Russell Market butchers (operational since 1927, British colonial inheritance) speak excellent English alongside multiple Indian languages — they're often the most accessible Indian butchers for first-time expats. Cross-references `mumbai_two_tier_butchery_in` (Batch 14b).

### Insight 3: Donne Biryani — Karnataka's distinctive bone-in cut format

Donne Biryani (served in palm-leaf bowls, distinguished from Hyderabadi Dum Biryani) requires small 1-inch BONE-IN chunks, typically Shoulder or Ribs. The bone marrow leeches into Karnataka's distinctive short-grain Seeraga Samba rice during the slow-simmer phase — boneless USDA stew meat produces an inauthentic flat-tasting biryani. Cross-references the broader pan-cultural bone-in-stew/rice tradition (Filipino Bulalo Batch 11, NZ Hāngī Batch 12, Italian Osso Buco existing, SA Potjiekos Batch 13).

### Insight 4: Mangalorean Bafat Roast — coastal Goan-Portuguese inheritance

Mangalore (coastal Karnataka) operates a distinct Catholic-community beef tradition derived from the 17th-century migration of Portuguese-era Goan Catholics south to Mangalore. The Bafat Roast: large flat slabs of Topside hand-pounded for tenderization, marinated overnight in Bafat masala (Kashmiri chili + cumin + coriander + cinnamon + cloves + toddy vinegar). The vinegar component is the explicit Portuguese inheritance — cross-references Goa Vindaloo (Batch 14b). This makes Mangalore the second Indian region with European-colonial butchery influence after Goa, with future Pondicherry (French) being the third.

### Insight 5: Uppu Saaru extends the Boil-then-Fry technique to a 5th state

Karnataka's Uppu Saaru (literally "salt water" in Kannada) is a textbook Boil-then-Fry preparation: pressure-cook small half-inch cubes in salt water to break down Buffalo toughness, drain and reserve broth, high-heat fry with curry leaves and dried chilies in coconut oil. Same technique as Tamil Beef Chukka, Kerala Beef Ularthiyathu, Telangana Tala Hua Gosht — making Karnataka the 5th documented state in the pan-South-Indian Boil-then-Fry convention. Cross-references `boil_then_fry_south_in` (Tamil Nadu, Batch 14b).

---

## CANONICAL ID VERIFICATION

| Term | Canonical | Notes |
|------|-----------|-------|
| Karnataka "Undercut" / "Naram" / "Pasanda" | `tenderloin` | Universal pan-Indian |
| Karnataka "Puth" / "Loin" | `striploin` | Back muscle |
| Karnataka "Seena" / "Kozhuppu" | `brisket` | Chest, fatty |
| Karnataka "Machhli" / "Nalli" | `hind_shank` | Same canonical mapping |
| Karnataka "Baala" (Kannada "tail") | `oxtail` | Standard |
| Karnataka "Donne Biryani Cut" | `short_ribs` primary, `chuck_blade` secondary | Bone-in small chunks |
| Karnataka "Bafat Roast Cut" | `inside_round` | Topside slab |
| Karnataka "Uppu Saaru Cut" | `inside_round` | Round/Rump small cubes |
| Karnataka "Naram Maunsa" (Kannada) | `tenderloin` | Kannada-language equivalent of Hindi Naram Maans |

---

## STEP 1 — Add Karnataka region

### 1.1 — `RegionSlug` type (`lib/types.ts`)
```ts
| "karnataka"
```

### 1.2 — Region records (`data/regions.ts`)
```ts
{ slug: "karnataka", label: "Karnataka", h1Place: "Karnataka", flag: "🇮🇳", group: "south_asia", subregion: "South India" },
```

Karnataka joins the "South India" subregion alongside Kerala, Tamil Nadu, Telangana, Andhra Pradesh from Batch 14b. Maharashtra and Goa remain in "West India".

### 1.3 — Region entity record (`lib/entities.ts` — `REGION_ENTITY`)
```ts
karnataka: { id: "karnataka", formalName: "Karnataka", shortName: "Karnataka" },
```

### 1.4 — Update exhaustiveness checks in `lib/entities.ts`

### 1.5 — Search aliases
```ts
karnataka: aliases: ["bengaluru", "bangalore", "mysuru", "mysore", "mangaluru", "mangalore", "kannada", "dakhni", "udupi"]
```

---

## STEP 2 — Regional name entries (`data/regionalNames.ts`)

### 🇮🇳 KARNATAKA — BUFFALO ONLY (12 entries)

```ts
// Universal pan-Indian Hindi/Urdu vocabulary (Bengaluru is highly multilingual)
{ name: "undercut ka", region: "karnataka", maps_to: "tenderloin", confidence: 0.95, synonyms: ["pasanda", "naram"] as const, species: "buffalo", notes: "The softest cut. Buffalo. Bengaluru's Russell Market and Johnson Market butchers are very Western-literate due to colonial history (Russell Market operational since 1927) and large tech-expat population. Used for Beef Steaks at Bengaluru pubs (Pecos, Toit) and traditional Boti fry at Shivaji Nagar." },
{ name: "puth ka", region: "karnataka", maps_to: "striploin", confidence: 0.85, synonyms: ["loin"] as const, species: "buffalo", notes: "Back muscle — Buffalo. Best for roasting or 'Continental' style dishes at Bengaluru pub-restaurants serving the tech-expat clientele." },

{ name: "seena ka", region: "karnataka", maps_to: "brisket", confidence: 0.85, synonyms: ["seena", "kozhuppu"] as const, species: "buffalo", notes: "Chest — Buffalo. Vital for flavor in Donne Biryani (Karnataka's rustic herb-based biryani served in palm-leaf bowls)." },

{ name: "machhli ka", region: "karnataka", maps_to: "hind_shank", confidence: 0.95, synonyms: ["nalli", "shank"] as const, species: "buffalo", notes: "Calf muscle — Buffalo. Mandatory for Bengaluru-style Nihari (Shivaji Nagar tradition, distinct from Hyderabadi Nihari) and Paya. Cross-references the four Nihari Regional Traditions." },
{ name: "nalli ka", region: "karnataka", maps_to: "hind_shank", confidence: 0.85, synonyms: ["marrow bone"] as const, species: "buffalo", notes: "Marrow bone specifically — requested as add-on for Donne Biryani depth and Beef Pepper Fry richness" },

{ name: "baala", region: "karnataka", maps_to: "oxtail", confidence: 0.95, synonyms: ["tail"] as const, species: "buffalo", notes: "Kannada for 'tail' — used for rich slow-cooked soups. Distinctive Kannada-language term (vs Hindi/Urdu Dum/Poonch)." },

// Format-driven cuts unique to Karnataka
{ name: "donne biryani cut", region: "karnataka", maps_to: "short_ribs", confidence: 0.70, synonyms: ["donne biryani", "donne"] as const, species: "buffalo", notes: "NOT a specific muscle — small 1-inch bone-in chunks (typically Shoulder/Chuck or Ribs) for Karnataka's iconic Donne Biryani. Bone marrow leeches into the short-grain Seeraga Samba rice during the slow-simmer phase. Tier 3 entity explains." },
{ name: "uppu saaru cut", region: "karnataka", maps_to: "inside_round", confidence: 0.75, synonyms: ["uppu saaru"] as const, species: "buffalo", notes: "NOT a specific muscle — very small uniform half-inch cubes (Round/Rump) for quick-boil-then-fry Beef Uppu Saaru. The Boil-then-Fry technique extends from Tamil Nadu/Kerala/Telangana/Andhra to Karnataka — making this the 5th South Indian state in the pan-regional cooking convention." },
{ name: "bafat roast cut", region: "karnataka", maps_to: "inside_round", confidence: 0.75, synonyms: ["bafat", "mangalorean roast"] as const, species: "buffalo", notes: "Mangalorean coastal specialty — large flat slab of Topside or Silverside, hand-pounded then marinated overnight in Bafat masala (vinegar-and-spice paste). Goan-Portuguese inheritance via 17th-century Mangalorean Catholic migration. Tier 3 entity explains." },

// Bengaluru's Western-style retail
{ name: "topside ka", region: "karnataka", maps_to: "inside_round", confidence: 0.80, synonyms: ["round"] as const, species: "buffalo", notes: "Bengaluru's tech-expat-driven retail recognizes 'Topside' alongside Hindi 'Naram' and Kannada 'Naram Maunsa' — the Western Tier of the dual-tier butchery system." },
{ name: "naram maunsa", region: "karnataka", maps_to: "tenderloin", confidence: 0.80, synonyms: ["soft meat", "naram"] as const, species: "buffalo", notes: "Kannada 'soft meat' — Buffalo. Cross-references pan-Indian Hindi/Urdu Naram Maans AND Kannada local naming. Bengaluru is bilingual in butchery." },

// Universal Indian
{ name: "charbi ka", region: "karnataka", maps_to: "brisket", confidence: 0.50, synonyms: ["fat"] as const, species: "buffalo", notes: "Universally requested separately to compensate for lean Buffalo. Pan-Indian vocabulary." },
```

---

## STEP 3 — Tier 3 entities (`data/regionalCuts.ts`) — 4 entities

```ts
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
```

---

## STEP 4 — Doneness labels (`data/doneness.ts`)

```ts
// rare
karnataka: "Rare",

// medium_rare
karnataka: "Medium rare",

// medium
karnataka: "Medium",

// well_done
karnataka: "Bhuna",  // Hindi-derived "thoroughly browned"
```

Add `notes` (on `well_done`):
```ts
karnataka: "Karnataka beef cooking centers on slow-braised Buffalo dishes — Donne Biryani's marrow-leeching simmer, Mangalorean Bafat Roast's slow-roast caramelization, Beef Pepper Fry's high-heat finish, Uppu Saaru's pressure-cook-then-fry. All produce well-done results by default. Modern Bengaluru pub-restaurants (Pecos, Toit, Arbor Brewing) operate at international steakhouse standards and serve premium cuts at Medium-Rare to Medium for the tech-expat clientele. The dual-tier butchery system supports both ends of the doneness spectrum simultaneously. Beef Chili at Bengaluru's iconic pub culture is typically served Medium with charred edges — a hybrid of US BBQ doneness expectations and Indian heat preference."
```

---

## STEP 5 — Butcher phrases (`data/butcherPhrases.ts`)

```ts
// 🇮🇳 KARNATAKA (Kannada/Dakhni Urdu/English mix)
{ canonicalId: "tenderloin", region: "karnataka", phrase: "Undercut, naram maunsa kodi, kilo eradu", notes: "'Undercut, soft meat please, two kilos' — Kannada-English mix at Russell Market" },
{ canonicalId: "short_ribs", region: "karnataka", phrase: "Donne Biryani cut, bone-in chunks, Seeraga Samba ke saath", notes: "'Donne Biryani cut, bone-in, with [for use with] Seeraga Samba [rice]' — explicit dish-driven request" },
{ canonicalId: "inside_round", region: "karnataka", phrase: "Bafat masala roast ke liye topside, hand-pounded", notes: "'Topside for Bafat masala roast, hand-pounded' — Mangalorean specialty request" },
{ canonicalId: "brisket", region: "karnataka", phrase: "Charbi haaki, biryani-saathi", notes: "'Add some fat, for biryani' — explicit fat-add for lean Buffalo (Kannada haaki = 'put/add')" },
```

---

## STEP 6 — Update exhaustiveness checks

Add `karnataka` to all `Record<RegionSlug, ...>` patterns in `lib/entities.ts`.

After this batch:
- South Asia group: 7 regions (was 6)
- South India sub-region: 5 states (Andhra Pradesh, Karnataka, Kerala, Tamil Nadu, Telangana)
- West India sub-region: 2 states (Goa, Maharashtra) — unchanged

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
echo "South Asia regions: $(grep -c 'group: \"south_asia\"' data/regions.ts)"
npm run build 2>&1 | grep "static pages"
```

**Report targets:**
- Regions: 86 (was 85, +1: Karnataka)
- Regional names added: 12
- Tier 3 entities added: 4 (228 + 4 = 232)
- Buffalo entries: 53 + 12 = 65 (all 12 Karnataka entries are buffalo)
- South Asia regions: 6 → 7
- South India sub-region populated correctly (5 states)

---

## RULES

- Follow existing code style exactly
- Do NOT modify existing entries — only ADD new ones
- **All Karnataka entries are Buffalo** — `species: "buffalo"` on every regional name. Karnataka has cow-slaughter restrictions identical to Maharashtra/Telangana/Tamil Nadu/Andhra Pradesh.
- **No new architectural anchors introduced.** This batch reuses existing anchors:
  - `india_cow_buff_legal_map` (Maharashtra, Batch 14b) — Karnataka is part of the buffalo-only legal axis
  - `pan_indian_hindi_urdu_in` (Maharashtra, Batch 14b) — Karnataka uses the same 6 universal terms
  - `mumbai_two_tier_butchery_in` (Maharashtra, Batch 14b) — Karnataka's `bengaluru_dual_tier_butchery_in` cross-references this directly
  - `boil_then_fry_south_in` (Tamil Nadu, Batch 14b) — Karnataka's `uppu_saaru_cut_in` extends this to 5 states
  - `goa_portuguese_bridge_in` (Goa, Batch 14b) — Karnataka's `mangalorean_bafat_roast_in` cross-references this
- **CANONICAL ID VERIFICATION**: 
  - "Undercut/Naram/Pasanda" → `tenderloin`
  - "Puth/Loin" → `striploin`
  - "Seena/Kozhuppu" → `brisket`
  - "Machhli/Nalli" → `hind_shank`
  - "Baala" → `oxtail`
  - "Donne Biryani Cut" → `short_ribs` (bone-in small chunks primary)
  - "Bafat Roast Cut" → `inside_round`
  - "Uppu Saaru Cut" → `inside_round`
- **Subregion field**: Karnataka uses `subregion: "South India"` (joining Kerala, Tamil Nadu, Telangana, Andhra Pradesh — 5 states total in this sub-grouping after deploy).
- Do NOT modify resolver or page logic
- The site must build and deploy successfully on Cloudflare Workers Paid plan
- After deploy, spot-check:
  - Pre-rendered route: `/usa-to-karnataka/donne-biryani-cut` — verify Buffalo annotation + dish-driven specification
  - Pre-rendered route: `/usa-to-karnataka/undercut-ka` — verify Buffalo annotation
  - Compare route: `/karnataka-to-telangana/pasanda` — verify cross-reference between Karnataka Naram and Hyderabadi Pasanda (both Buffalo, pan-Indian vocabulary)
  - Country selector: South Asia group shows 7 regions, with South India sub-grouping showing 5 states alphabetically (Andhra Pradesh, Karnataka, Kerala, Tamil Nadu, Telangana)
  - Verify the four Bengaluru/Mangalore/Donne/Uppu Saaru Tier 3 entities cross-reference Mumbai, Goa, Tamil Nadu correctly

---

## What success looks like

After this PR deploys:

1. ✅ TypeScript compiles cleanly with the Karnataka region addition
2. ✅ 86 regions live, South Asia group at 7 regions
3. ✅ Karnataka entries render with buffalo annotation correctly
4. ✅ The four new Tier 3 entries surface in Karnataka-related search queries
5. ✅ Cross-references to Mumbai (dual-tier), Goa (Portuguese-bridge), Tamil Nadu (Boil-then-Fry) work correctly
6. ✅ The 5-state South Indian buffalo cluster is documented as a coherent regional grouping
7. ✅ Architectural foundation remains unchanged — no new anchors to maintain

**Next batch**: Pakistan + Bangladesh (Batch 16). Will introduce 5+ new architectural anchors (Bachhiya/Bhains duality, Bangladesh cow-dominance, Nihari Regional Traditions, pan-South-Asian vocabulary, Mezban quality-inversion apex, Hunter Beef 5th regional corned beef tradition). Substantially larger architectural deploy. Karnataka being shipped first cleanly closes out the intra-India South Indian work before the sovereign South Asia expansion begins.
