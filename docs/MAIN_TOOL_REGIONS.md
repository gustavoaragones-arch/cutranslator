# Cutranslator — Main Tool Region Coverage

Source: `data/regions.ts`  
Total: 127 regions (as of June 2026)  
Last verified: June 2026

## Original 118 Regions

### Americas — North (3)
United States, Canada, Mexico

### Americas — Central (6)
Panama, Costa Rica, Nicaragua, Honduras, El Salvador, Guatemala

### Americas — South (10)
Brazil, Argentina, Chile, Uruguay, Paraguay, Colombia, Venezuela, Peru, Bolivia, Ecuador

### Europe — Western (10)
France, Germany, Italy, Spain, Portugal, Netherlands, Belgium, United Kingdom, Ireland, Switzerland

### Europe — Nordic (4)
Denmark, Norway, Sweden, Finland

### Europe — Central (5)
Austria, Czech Republic, Slovakia, Hungary, Poland

### Europe — Balkans (9)
Slovenia, Croatia, Bosnia & Herzegovina, Montenegro, Albania, North Macedonia, Romania, Bulgaria, Greece

### Europe — Eastern & Baltic (6)
Estonia, Latvia, Lithuania, Belarus, Russia, Ukraine

### Middle East & North Africa (8)
Turkey, Israel, Egypt, Morocco, Iran, Saudi Arabia, Qatar, UAE

### Central Asia (2)
Kazakhstan, Uzbekistan

### Asia-Pacific (5)
China, Japan, South Korea, Taiwan, Mongolia

### Southeast Asia (7)
Indonesia, Malaysia, Philippines, Singapore, Thailand, Vietnam, Myanmar

### Oceania (2)
Australia, New Zealand

### Africa (14)
South Africa, Botswana, Namibia, Zimbabwe, Kenya, Tanzania, Uganda,
Nigeria, Mali, Senegal, Niger, Chad, Burkina Faso, Ethiopia

### South Asia (27)
Sovereign countries (5): Pakistan, Bangladesh, Sri Lanka, Nepal, Bhutan  
India — South (7): Kerala, Tamil Nadu, Telangana, Andhra Pradesh, Maharashtra, Goa, Karnataka  
India — North (4): Uttar Pradesh, Punjab, Rajasthan, West Bengal  
India — Central (1): Central India (Bihar, MP, Gujarat, Jharkhand, Chhattisgarh, Odisha)  
India — Northeast (5): Meghalaya, Nagaland, Manipur, Sikkim, Northeast India (Other States)  
India — Himalayan (3): Ladakh, Jammu & Kashmir, Himachal Pradesh & Uttarakhand  
India — Coastal/Islands (2): Coastal-Colonial India (Pondicherry & Daman), Indian Islands

## New Countries Added June 2026 (+9)

### Lusophone Africa (complete cluster)
- Angola: 11 entries
- Mozambique: 10 entries
Portugal -> Brazil -> Angola -> Mozambique = complete Lusophone translation chain

### West/Central/East Africa
- Sudan: 7 entries (Sudanese Arabic)
- Côte d'Ivoire: 7 entries (French/Nouchi) — slug: `cote_divoire`
- Cameroon: 7 entries (French/Pidgin English)
- DRC: 7 entries (French/Lingala)

### Caribbean
- Cuba: 7 entries
- Dominican Republic: 9 entries — slug: `dominican_republic`  
  Note: DR churrasco = skirt steak (not barbecue) — critical disambiguation

### Central Asia
- Afghanistan: 6 entries (Dari)  
  Note: No steak culture — entries map to braising/mincing cuts only

## Entry Expansions June 2026
- Spain: 7 -> 20 entries (despiece anatomico / seam-butchery)
- Brazil: 12 -> 23 entries (cortes brasileiros)
- Portugal: 11 -> 23 entries (PT-PT talho — distinct from PT-BR)
- Paraguay: 3 -> 18 entries (Rioplatense-Guarani system)

## Coverage Notes
- Senegal (10) and Andhra Pradesh (10) appear thin but are comprehensive
  for their markets — composite/cultural entries cover gaps accurately
- Sudan, Côte d'Ivoire, Cameroon, DRC at 7 entries — functional but thin,
  candidates for second-pass expansion
- Afghanistan at 6 entries — reflects genuine market structure

## Architectural Notes
- Group enum values must match repo-native enums (`americas_central`, `central_asia`, etc.)
- `pairRoute.ts` handles underscore slugs generically — `dominican-republic`,
  `cote-divoire`, `burkina-faso` all resolve without individual entries
- Latin transliteration rule: native scripts go in `synonyms[]` only
- Accent normalization: `entrecot`/`entrecôte`/`entrecote` collapse to same key
  within a region — check before adding accented names

## Audit Commands
```bash
grep 'region:' data/regionalNames.ts | \
  sed 's/.*region: "\([^"]*\)".*/\1/' | \
  sort | uniq -c | sort -n

grep -c 'id:' data/regions.ts
```
