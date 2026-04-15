import type { CanonicalCut } from "@/lib/types";

export const canonicalCuts: readonly CanonicalCut[] = [
  {
    id: "ribeye",
    primal: "rib",
    location: "upper rib / rib eye muscle",
    description:
      "Highly marbled steak cut from the rib primal; bone-in or boneless retail cuts vary by market.",
    aliases: ["rib eye", "scotch fillet"],
  },
  {
    id: "striploin",
    primal: "loin",
    location: "longissimus dorsi (short loin)",
    description:
      "Leaner than ribeye; the classic strip steak muscle running along the short loin.",
    aliases: ["strip", "sirloin (UK retail)", "new york strip"],
  },
  {
    id: "tenderloin",
    primal: "loin",
    location: "psoas major",
    description:
      "Most tender muscle of the loin; center cuts often sold as filet mignon.",
    aliases: ["filet", "fillet", "filet mignon"],
  },
  {
    id: "sirloin_cap",
    primal: "sirloin",
    location: "top sirloin cap (coulotte)",
    description:
      "Triangular cap on the top sirloin; prized as picanha in Brazil.",
    aliases: ["coulotte", "rump cap"],
  },
  {
    id: "sirloin_flap",
    primal: "sirloin",
    location: "sirloin flap / bottom sirloin flap",
    description:
      "Thin, loose-grained flap from the bottom sirloin; overlaps skirt/flank in some regional breakdowns.",
    aliases: ["flap meat", "bavette (US wholesale overlap)"],
  },
  {
    id: "flank",
    primal: "flank",
    location: "abdominal flank steak",
    description:
      "Long, fibrous abdominal cut; benefits from slicing across the grain.",
    aliases: ["flank steak"],
  },
  {
    id: "skirt",
    primal: "plate",
    location: "diaphragm (inside/outside skirt varies by spec)",
    description:
      "Plate primal diaphragm muscle; very beefy, used for fajitas and grilling.",
    aliases: ["arrachera (regional)", "fajita meat"],
  },
  // Phase 1 additions:
  {
    id: "brisket",
    primal: "brisket",
    location: "Breast / lower chest, between the forelegs",
    description:
      "From the breast and lower chest. Two sub-sections: the flat (lean, uniform) and the point/deckle (fattier, more marbled). The most iconic cut for American BBQ smoking. Also used for braising, corned beef, and pastrami.",
    aliases: ["beef brisket", "whole brisket", "packer brisket"] as const,
  },
  {
    id: "hanger",
    primal: "plate",
    location: "Hangs from the diaphragm, between the last rib and the loin",
    description:
      "Also called hanging tender or butcher's steak. A thick, V-shaped muscle that 'hangs' from the diaphragm — only one per animal. Extremely flavorful with a coarse grain. Distinct from skirt steak, which is the diaphragm muscle itself.",
    aliases: ["hanger steak", "hanging tender", "butcher's steak", "thick skirt"] as const,
  },
  {
    id: "short_ribs",
    primal: "rib",
    location: "Lower portion of ribs 6–8 (plate short ribs) or ribs 1–5 (chuck short ribs)",
    description:
      "Sections of rib bone with attached intercostal meat. Cut two ways: English style (between the bones, thick) or flanken/cross-cut (across the bones, thin strips). Rich, collagen-heavy meat ideal for braising, grilling (flanken), or smoking.",
    aliases: ["beef short ribs", "flanken ribs", "cross-cut ribs", "plate ribs"] as const,
  },
  {
    id: "top_sirloin",
    primal: "sirloin",
    location: "Upper hip, above the sirloin cap (coulotte) and behind the short loin",
    description:
      "A large, lean cut from the hip section. The top sirloin butt (NAMP 184) is the main muscle group. Versatile — grilled as steaks, roasted whole, or cut into kabobs. Moderate tenderness with good beefy flavor. Not to be confused with sirloin cap (coulotte/picanha) which sits on top of it.",
    aliases: ["top sirloin butt", "sirloin butt", "rump"] as const,
  },
  {
    id: "tri_tip",
    primal: "sirloin",
    location: "Bottom sirloin, triangular muscle at the base of the sirloin near the flank",
    description:
      "A triangular cut from the bottom sirloin (tensor fasciae latae muscle). Popularized by Santa Maria-style California BBQ. Lean with a pronounced grain that changes direction. Best grilled whole to medium-rare and sliced against the grain.",
    aliases: ["tri-tip", "triangle roast", "bottom sirloin tri-tip", "Santa Maria steak"] as const,
  },
  // Phase 3 — Round:
  {
    id: "inside_round",
    primal: "round",
    location: "Inner thigh of the hindquarter",
    description: "A large, lean cut from the inner thigh (adductor and semimembranosus muscles). Sold as top round steaks, London broil, or roasts. Lean but can be tough — best sliced thin or braised.",
    aliases: ["top round", "inside round", "London broil"] as const,
  },
  {
    id: "outside_round",
    primal: "round",
    location: "Outer thigh of the hindquarter",
    description: "From the outer thigh (biceps femoris). Leaner and less tender than inside round. Used for roasts, rouladen, and ground beef. Often sold as bottom round roast or eye of round.",
    aliases: ["bottom round", "outside round", "gooseneck round"] as const,
  },
  {
    id: "eye_of_round",
    primal: "round",
    location: "Small oval muscle within the outside round",
    description: "A small, tight-grained, very lean oval muscle embedded in the outside round. Uniform shape makes it ideal for roasting and slicing thin (roast beef deli meat). Can be tough if overcooked.",
    aliases: ["eye round", "eye of the round"] as const,
  },
  {
    id: "sirloin_tip",
    primal: "round",
    location: "Front of the rear leg, between sirloin and round",
    description: "Also called the knuckle. A lean, moderately tender cut from the front of the round, near the sirloin. Used for roasts, kabobs, and stir-fry. Not from the sirloin despite the name.",
    aliases: ["knuckle", "sirloin tip roast", "round tip"] as const,
  },
  {
    id: "oxtail",
    primal: "round",
    location: "Tail, cross-cut into round sections",
    description: "The tail, cut into thick cross-sections exposing a central bone surrounded by rich, gelatinous meat. One of the most universally recognized cuts across all cultures. Ideal for slow braising — produces extraordinarily rich, collagen-heavy broth.",
    aliases: ["beef oxtail", "rabo", "cola"] as const,
  },
  // Phase 3 — Chuck:
  {
    id: "chuck_roll",
    primal: "chuck",
    location: "Between the neck and the rib section, boneless",
    description: "A boneless cut from the center of the chuck, between the neck and the rib primal. Well-marbled with good beefy flavor. Contains several muscles with varying tenderness. Used for roasts, stew, and ground beef.",
    aliases: ["chuck roll", "chuck under blade"] as const,
  },
  {
    id: "chuck_blade",
    primal: "chuck",
    location: "Shoulder blade area, above the arm",
    description: "From the shoulder blade (scapula) area. Contains the blade bone and connective tissue that melts during braising. Classic pot roast cut. Cross-rib roast is cut from this area.",
    aliases: ["blade roast", "chuck roast", "cross rib roast", "blade steak"] as const,
  },
  {
    id: "shoulder_clod",
    primal: "chuck",
    location: "Upper shoulder, above the arm and outside the blade",
    description: "A large, lean muscle group from the outer shoulder. Contains the flat iron (infraspinatus) and petite tender (teres major) as sub-cuts. Often sold as shoulder roast or clod steaks.",
    aliases: ["shoulder clod", "top blade roast", "shoulder roast"] as const,
  },
  // Phase 3 — Rib:
  {
    id: "prime_rib",
    primal: "rib",
    location: "Ribs 6-12, bone-in, with cap and eye",
    description: "A bone-in rib roast consisting of the ribeye with the bone, cap (spinalis), and fat layer intact. Premium roasting cut — the classic holiday centerpiece. 'Prime' refers to the cut, not necessarily the USDA grade.",
    aliases: ["standing rib roast", "bone-in ribeye roast", "prime rib roast"] as const,
  },
  {
    id: "back_ribs",
    primal: "rib",
    location: "Upper rib bones (dorsal side), removed from the ribeye",
    description: "The curved rib bones left after the ribeye is removed. Less meaty than short ribs but tender and flavorful. Popular in American BBQ (baby back ribs are pork; beef back ribs are larger).",
    aliases: ["beef back ribs", "dinosaur ribs", "rib bones"] as const,
  },
  // Phase 3 — Loin:
  {
    id: "t_bone",
    primal: "loin",
    location: "Short loin cross-section, containing T-shaped vertebra",
    description: "A cross-section of the short loin that includes both the striploin and a portion of the tenderloin, separated by a T-shaped vertebra. Porterhouse is the same cut from further back, with a larger tenderloin section.",
    aliases: ["T-bone", "porterhouse", "T-bone steak"] as const,
  },
  // Phase 3 — Shank:
  {
    id: "hind_shank",
    primal: "shank",
    location: "Rear leg, below the knee joint",
    description: "Cross-cut sections of the rear leg bone with surrounding meat. Extremely tough and collagen-rich — produces deeply flavored broth when braised. Classic osso buco cut. One of the most universal braising cuts worldwide.",
    aliases: ["rear shank", "osso buco", "shank cross-cut"] as const,
  },
  {
    id: "fore_shank",
    primal: "shank",
    location: "Front leg, below the elbow joint",
    description: "Cross-cut sections of the front leg. Slightly smaller than hind shank but prepared identically. Same braising applications. In many countries, fore and hind shank are sold interchangeably.",
    aliases: ["foreshank", "front shank", "shin"] as const,
  },
  // Phase 3 — Plate:
  {
    id: "short_plate",
    primal: "plate",
    location: "Belly area, below the rib section",
    description: "The belly of the cow, below the rib primal. Source of short ribs, skirt steak, and hanger steak. Rich, fatty, and flavorful. Used for braising, fajitas, and in Asian cuisines for hot pot.",
    aliases: ["plate", "navel", "short plate"] as const,
  },
  // Tier 2 — Chuck:
  {
    id: "denver_steak",
    primal: "chuck",
    location: "Serratus ventralis muscle, extracted from under the blade bone",
    description: "A modern butchery innovation — the denver steak was 'discovered' in 2009 by meat scientists at the University of Nebraska. Extracted from the serratus ventralis muscle in the chuck, it's surprisingly tender and well-marbled for a chuck cut. An affordable alternative to ribeye with similar marbling patterns.",
    aliases: ["denver cut", "zabuton"] as const,
  },
  {
    id: "flat_iron",
    primal: "chuck",
    location: "Infraspinatus muscle, top blade of the shoulder clod",
    description: "The second most tender muscle on the entire animal, after the tenderloin. A flat, rectangular steak extracted from the top blade by splitting it along the central connective tissue. Uniform thickness makes it ideal for grilling. Also known as butler's steak in the UK.",
    aliases: ["flat iron steak", "top blade steak", "butler's steak"] as const,
  },
  {
    id: "petite_tender",
    primal: "chuck",
    location: "Teres major muscle, tucked alongside the shoulder blade",
    description: "A small, narrow muscle from the shoulder that resembles a miniature tenderloin in shape and tenderness. Only about 250-350g per side, making it one of the lowest-yield cuts on the animal. Extremely tender but relatively unknown outside professional kitchens.",
    aliases: ["teres major", "shoulder tender", "bistro filet"] as const,
  },
  {
    id: "chuck_eye_steak",
    primal: "chuck",
    location: "5th rib, where the chuck meets the rib primal",
    description: "The 'poor man's ribeye' — cut from the 5th rib, right where the chuck primal ends and the rib primal begins. Contains the same longissimus dorsi muscle as a ribeye but from a less premium section. Similar marbling at a significantly lower price point. Only 2 steaks per animal from this location.",
    aliases: ["chuck eye roll steak", "Delmonico steak"] as const,
  },
  // Tier 2 — Brisket:
  {
    id: "brisket_flat",
    primal: "brisket",
    location: "Deep pectoral muscle — the lean, flat portion of the brisket",
    description: "The leaner half of the whole brisket. Uniform rectangular shape makes it ideal for even slicing. The competition BBQ cut — prized for its presentation. Also the traditional cut for corned beef and pastrami. Less forgiving than the point — requires precise temperature control to avoid drying out.",
    aliases: ["brisket first cut", "flat cut", "brisket flat half"] as const,
  },
  {
    id: "brisket_point",
    primal: "brisket",
    location: "Superficial pectoral muscle — the fatty, irregular portion overlapping the flat",
    description: "The fattier, more marbled half of the whole brisket. Sits on top of the flat with a fat layer (the deckle) between them. More flavorful and forgiving than the flat due to higher fat content. The source of burnt ends — cubed and re-smoked until caramelized. Also called the deckle.",
    aliases: ["brisket second cut", "point cut", "deckle", "brisket point half"] as const,
  },
  // Tier 2 — Sirloin:
  {
    id: "flap_steak",
    primal: "sirloin",
    location: "Bottom sirloin, obliquus internus abdominis muscle",
    description: "A thin, coarse-grained steak from the bottom sirloin. The American name for what the French call bavette d'aloyau. Open grain absorbs marinades extremely well. Popular for fajitas, stir-fry, and carne asada. Often confused with skirt steak but from a different location entirely.",
    aliases: ["sirloin flap meat", "sirloin tip steak"] as const,
  },
  // Tier 2 — Round:
  {
    id: "top_round_steak",
    primal: "round",
    location: "Steak cut from the inside round / top round",
    description: "A lean, affordable steak cut from the inside round. Often marketed as 'London Broil' in US supermarkets, though London broil is technically a preparation method, not a cut. Best when marinated, grilled to medium-rare, and sliced very thin against the grain. Overcooking makes it tough and dry.",
    aliases: ["London broil", "top round London broil"] as const,
  },
  {
    id: "bottom_round_roast",
    primal: "round",
    location: "Roast from the outside round / bottom round",
    description: "A lean, economical roast from the outer thigh. The classic American pot roast cut — braised low and slow with vegetables. Also used for deli roast beef when oven-roasted and sliced paper-thin. Tougher than inside round but more affordable.",
    aliases: ["rump roast", "bottom round rump roast", "round roast"] as const,
  },
  // Tier 2 — Plate:
  {
    id: "inside_skirt",
    primal: "plate",
    location: "Transversus abdominis muscle — the inner diaphragm muscle",
    description: "The 'other' skirt steak. Thinner, wider, and slightly tougher than the outside skirt (which is the standard 'skirt steak'). Most restaurant fajitas use inside skirt because the outside skirt is exported or sold at premium. Requires high heat, fast cooking, and slicing against the grain.",
    aliases: ["inside skirt steak", "inner skirt"] as const,
  },
] as const;
