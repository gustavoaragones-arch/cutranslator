import type { RegionGroup } from "@/lib/types";

export const regions = [
  // Americas — North
  { id: "usa" as const, label: "United States", flag: "🇺🇸", group: "americas_north" as RegionGroup, aliases: ["us", "united states", "america"] as readonly string[] },
  { id: "canada" as const, label: "Canada", flag: "🇨🇦", group: "americas_north" as RegionGroup },
  { id: "mexico" as const, label: "Mexico", flag: "🇲🇽", group: "americas_north" as RegionGroup },

  // Americas — Central
  { id: "panama" as const, label: "Panama", flag: "🇵🇦", group: "americas_central" as RegionGroup },
  { id: "costa_rica" as const, label: "Costa Rica", flag: "🇨🇷", group: "americas_central" as RegionGroup },
  { id: "nicaragua" as const, label: "Nicaragua", flag: "🇳🇮", group: "americas_central" as RegionGroup },
  { id: "honduras" as const, label: "Honduras", flag: "🇭🇳", group: "americas_central" as RegionGroup },
  { id: "el_salvador" as const, label: "El Salvador", flag: "🇸🇻", group: "americas_central" as RegionGroup },
  { id: "guatemala" as const, label: "Guatemala", flag: "🇬🇹", group: "americas_central" as RegionGroup },

  // Americas — South
  { id: "brazil" as const, label: "Brazil", flag: "🇧🇷", group: "americas_south" as RegionGroup },
  { id: "argentina" as const, label: "Argentina", flag: "🇦🇷", group: "americas_south" as RegionGroup },
  { id: "chile" as const, label: "Chile", flag: "🇨🇱", group: "americas_south" as RegionGroup },
  { id: "uruguay" as const, label: "Uruguay", flag: "🇺🇾", group: "americas_south" as RegionGroup },
  { id: "paraguay" as const, label: "Paraguay", flag: "🇵🇾", group: "americas_south" as RegionGroup },
  { id: "colombia" as const, label: "Colombia", flag: "🇨🇴", group: "americas_south" as RegionGroup },
  { id: "venezuela" as const, label: "Venezuela", flag: "🇻🇪", group: "americas_south" as RegionGroup },
  { id: "peru" as const, label: "Peru", flag: "🇵🇪", group: "americas_south" as RegionGroup },
  { id: "bolivia" as const, label: "Bolivia", flag: "🇧🇴", group: "americas_south" as RegionGroup },
  { id: "ecuador" as const, label: "Ecuador", flag: "🇪🇨", group: "americas_south" as RegionGroup },

  // Europe — Western
  { id: "france" as const, label: "France", flag: "🇫🇷", group: "europe_western" as RegionGroup },
  { id: "germany" as const, label: "Germany", flag: "🇩🇪", group: "europe_western" as RegionGroup },
  { id: "italy" as const, label: "Italy", flag: "🇮🇹", group: "europe_western" as RegionGroup },
  { id: "spain" as const, label: "Spain", flag: "🇪🇸", group: "europe_western" as RegionGroup },
  { id: "portugal" as const, label: "Portugal", flag: "🇵🇹", group: "europe_western" as RegionGroup },
  { id: "netherlands" as const, label: "Netherlands", flag: "🇳🇱", group: "europe_western" as RegionGroup },
  { id: "belgium" as const, label: "Belgium", flag: "🇧🇪", group: "europe_western" as RegionGroup },
  { id: "uk" as const, label: "United Kingdom", flag: "🇬🇧", group: "europe_western" as RegionGroup, aliases: ["britain", "great britain", "united kingdom", "england"] as readonly string[] },
  { id: "ireland" as const, label: "Ireland", flag: "🇮🇪", group: "europe_western" as RegionGroup },
  { id: "switzerland" as const, label: "Switzerland", flag: "🇨🇭", group: "europe_western" as RegionGroup },

  // Europe — Nordic
  { id: "denmark" as const, label: "Denmark", flag: "🇩🇰", group: "europe_nordic" as RegionGroup },
  { id: "norway" as const, label: "Norway", flag: "🇳🇴", group: "europe_nordic" as RegionGroup },
  { id: "sweden" as const, label: "Sweden", flag: "🇸🇪", group: "europe_nordic" as RegionGroup },
  { id: "finland" as const, label: "Finland", flag: "🇫🇮", group: "europe_nordic" as RegionGroup },

  // Europe — Central
  { id: "austria" as const, label: "Austria", flag: "🇦🇹", group: "europe_central" as RegionGroup },
  { id: "czechia" as const, label: "Czech Republic", flag: "🇨🇿", group: "europe_central" as RegionGroup, aliases: ["czech", "czech republic"] as readonly string[] },
  { id: "slovakia" as const, label: "Slovakia", flag: "🇸🇰", group: "europe_central" as RegionGroup },
  { id: "hungary" as const, label: "Hungary", flag: "🇭🇺", group: "europe_central" as RegionGroup },
  { id: "poland" as const, label: "Poland", flag: "🇵🇱", group: "europe_central" as RegionGroup },

  // Europe — Balkans
  { id: "slovenia" as const, label: "Slovenia", flag: "🇸🇮", group: "europe_balkans" as RegionGroup },
  { id: "croatia" as const, label: "Croatia", flag: "🇭🇷", group: "europe_balkans" as RegionGroup },
  { id: "bosnia" as const, label: "Bosnia & Herzegovina", flag: "🇧🇦", group: "europe_balkans" as RegionGroup },
  { id: "montenegro" as const, label: "Montenegro", flag: "🇲🇪", group: "europe_balkans" as RegionGroup },
  { id: "albania" as const, label: "Albania", flag: "🇦🇱", group: "europe_balkans" as RegionGroup },
  { id: "north_macedonia" as const, label: "North Macedonia", flag: "🇲🇰", group: "europe_balkans" as RegionGroup, aliases: ["macedonia", "fyrom"] as readonly string[] },
  { id: "romania" as const, label: "Romania", flag: "🇷🇴", group: "europe_balkans" as RegionGroup },
  { id: "bulgaria" as const, label: "Bulgaria", flag: "🇧🇬", group: "europe_balkans" as RegionGroup },
  { id: "greece" as const, label: "Greece", flag: "🇬🇷", group: "europe_balkans" as RegionGroup },

  // Europe — Eastern & Baltic
  { id: "estonia" as const, label: "Estonia", flag: "🇪🇪", group: "europe_eastern_baltic" as RegionGroup },
  { id: "latvia" as const, label: "Latvia", flag: "🇱🇻", group: "europe_eastern_baltic" as RegionGroup },
  { id: "lithuania" as const, label: "Lithuania", flag: "🇱🇹", group: "europe_eastern_baltic" as RegionGroup },
  { id: "belarus" as const, label: "Belarus", flag: "🇧🇾", group: "europe_eastern_baltic" as RegionGroup },
  { id: "russia" as const, label: "Russia", flag: "🇷🇺", group: "europe_eastern_baltic" as RegionGroup },
  { id: "ukraine" as const, label: "Ukraine", flag: "🇺🇦", group: "europe_eastern_baltic" as RegionGroup },

  // MENA
  { id: "turkey" as const, label: "Turkey", flag: "🇹🇷", group: "mena" as RegionGroup },
  { id: "israel" as const, label: "Israel", flag: "🇮🇱", group: "mena" as RegionGroup },
  { id: "egypt" as const, label: "Egypt", flag: "🇪🇬", group: "mena" as RegionGroup },
  { id: "morocco" as const, label: "Morocco", flag: "🇲🇦", group: "mena" as RegionGroup },
  { id: "iran" as const, label: "Iran", flag: "🇮🇷", group: "mena" as RegionGroup },
  { id: "saudi_arabia" as const, label: "Saudi Arabia", flag: "🇸🇦", group: "mena" as RegionGroup, aliases: ["ksa", "saudi"] as readonly string[] },
  { id: "qatar" as const, label: "Qatar", flag: "🇶🇦", group: "mena" as RegionGroup },
  { id: "uae" as const, label: "UAE", flag: "🇦🇪", group: "mena" as RegionGroup, aliases: ["united arab emirates", "emirates", "dubai"] as readonly string[] },

  // Central Asia
  { id: "kazakhstan" as const, label: "Kazakhstan", flag: "🇰🇿", group: "central_asia" as RegionGroup },
  { id: "uzbekistan" as const, label: "Uzbekistan", flag: "🇺🇿", group: "central_asia" as RegionGroup },

  // Asia-Pacific
  { id: "china" as const, label: "China", flag: "🇨🇳", group: "asia_pacific" as RegionGroup, aliases: ["prc", "mainland china"] as readonly string[] },
  { id: "japan" as const, label: "Japan", flag: "🇯🇵", group: "asia_pacific" as RegionGroup },
  { id: "south_korea" as const, label: "South Korea", flag: "🇰🇷", group: "asia_pacific" as RegionGroup, aliases: ["korea", "republic of korea", "rok"] as readonly string[] },
  { id: "taiwan" as const, label: "Taiwan", flag: "🇹🇼", group: "asia_pacific" as RegionGroup, aliases: ["roc", "chinese taipei"] as readonly string[] },

  // Southeast Asia
  { id: "indonesia" as const, label: "Indonesia", flag: "🇮🇩", group: "southeast_asia" as RegionGroup, aliases: ["bahasa", "indo"] as readonly string[] },
  { id: "malaysia" as const, label: "Malaysia", flag: "🇲🇾", group: "southeast_asia" as RegionGroup, aliases: ["malaya"] as readonly string[] },
  { id: "philippines" as const, label: "Philippines", flag: "🇵🇭", group: "southeast_asia" as RegionGroup, aliases: ["filipino", "pinoy"] as readonly string[] },
  { id: "singapore" as const, label: "Singapore", flag: "🇸🇬", group: "southeast_asia" as RegionGroup, aliases: ["sg", "singapura"] as readonly string[] },
  { id: "thailand" as const, label: "Thailand", flag: "🇹🇭", group: "southeast_asia" as RegionGroup, aliases: ["siam", "thai"] as readonly string[] },
  { id: "vietnam" as const, label: "Vietnam", flag: "🇻🇳", group: "southeast_asia" as RegionGroup, aliases: ["viet nam", "vn"] as readonly string[] },

  // Oceania
  { id: "australia" as const, label: "Australia", flag: "🇦🇺", group: "oceania" as RegionGroup, aliases: ["aus", "oz", "aussie", "down under"] as readonly string[] },
  { id: "new_zealand" as const, label: "New Zealand", flag: "🇳🇿", group: "oceania" as RegionGroup, aliases: ["nz", "kiwi", "aotearoa"] as readonly string[] },

  // Africa
  { id: "south_africa" as const, label: "South Africa", flag: "🇿🇦", group: "africa" as RegionGroup, aliases: ["rsa", "sa", "south african"] as readonly string[] },
  { id: "kenya" as const, label: "Kenya", flag: "🇰🇪", group: "africa" as RegionGroup, aliases: ["kenyan", "swahili"] as readonly string[] },
  { id: "nigeria" as const, label: "Nigeria", flag: "🇳🇬", group: "africa" as RegionGroup, aliases: ["naija", "nigerian"] as readonly string[] },
  { id: "ethiopia" as const, label: "Ethiopia", flag: "🇪🇹", group: "africa" as RegionGroup, aliases: ["ethiopian", "habesha", "abyssinia"] as readonly string[] },

  // South Asia — India
  { id: "kerala" as const, label: "Kerala", flag: "🇮🇳", group: "south_asia" as RegionGroup, aliases: ["kochi", "trivandrum", "thiruvananthapuram", "malayali"] as readonly string[] },
  { id: "tamil_nadu" as const, label: "Tamil Nadu", flag: "🇮🇳", group: "south_asia" as RegionGroup, aliases: ["chennai", "madras", "tn", "tamil"] as readonly string[] },
  { id: "telangana" as const, label: "Telangana", flag: "🇮🇳", group: "south_asia" as RegionGroup, aliases: ["hyderabad", "tg"] as readonly string[] },
  { id: "andhra_pradesh" as const, label: "Andhra Pradesh", flag: "🇮🇳", group: "south_asia" as RegionGroup, aliases: ["amaravati", "ap", "telugu"] as readonly string[] },
  { id: "maharashtra" as const, label: "Maharashtra", flag: "🇮🇳", group: "south_asia" as RegionGroup, aliases: ["mumbai", "pune", "bombay", "marathi"] as readonly string[] },
  { id: "goa" as const, label: "Goa", flag: "🇮🇳", group: "south_asia" as RegionGroup, aliases: ["panjim", "panaji", "goan"] as readonly string[] },
  { id: "karnataka" as const, label: "Karnataka", flag: "🇮🇳", group: "south_asia" as RegionGroup, aliases: ["bengaluru", "bangalore", "mysuru", "mysore", "mangaluru", "mangalore", "kannada", "dakhni", "udupi"] as readonly string[] },
] as const;

export type RegionRecord = (typeof regions)[number];
