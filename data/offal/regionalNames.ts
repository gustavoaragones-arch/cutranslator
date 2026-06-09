import type { OffalRegionalName } from "@/lib/offalData";

// ─── Mexico (MX) ──────────────────────────────────────────────────────────────

const MX: readonly OffalRegionalName[] = [
  {
    canonicalId: "tongue",
    country: "MX",
    localName: "lengua",
    confidence: "high",
    traditionIds: ["mexican-lengua"],
  },
  {
    canonicalId: "tripe",
    country: "MX",
    localName: "panza",
    altNames: ["pancita", "menudo", "tripa de res"],
    confidence: "high",
    traditionIds: ["menudo"],
  },
  {
    canonicalId: "liver",
    country: "MX",
    localName: "hígado de res",
    confidence: "high",
  },
  {
    canonicalId: "heart",
    country: "MX",
    localName: "corazón de res",
    confidence: "medium",
  },
  {
    canonicalId: "kidney",
    country: "MX",
    localName: "riñón de res",
    confidence: "medium",
  },
  {
    canonicalId: "intestines",
    country: "MX",
    localName: "tripas",
    altNames: ["machitos", "tripitas"],
    confidence: "high",
    traditionIds: ["tacos-de-tripa"],
  },
  {
    canonicalId: "skin",
    country: "MX",
    localName: "cuero de res",
    altNames: ["piel de res"],
    confidence: "medium",
  },
  {
    canonicalId: "tendon",
    country: "MX",
    localName: "tendón de res",
    altNames: ["nervio"],
    confidence: "medium",
  },
  {
    canonicalId: "head_cheek",
    country: "MX",
    localName: "cabeza",
    altNames: ["cachete", "trompa", "labio", "ojo"],
    confidence: "high",
    traditionIds: ["tacos-de-cabeza"],
  },
  {
    canonicalId: "bone_marrow",
    country: "MX",
    localName: "tuétano",
    altNames: ["médula"],
    confidence: "high",
  },
  {
    canonicalId: "sweetbreads",
    country: "MX",
    localName: "mollejas",
    confidence: "high",
  },
  {
    canonicalId: "testicles",
    country: "MX",
    localName: "criadillas",
    confidence: "medium",
  },
];

// ─── China (CN) ───────────────────────────────────────────────────────────────

const CN: readonly OffalRegionalName[] = [
  {
    canonicalId: "tongue",
    country: "CN",
    localName: "niúshé",
    nativeScript: "牛舌",
    confidence: "high",
  },
  {
    canonicalId: "tripe",
    country: "CN",
    localName: "niúdǔ",
    nativeScript: "牛肚",
    altNames: ["máodǔ (毛肚)", "bǎiyè (百叶)"],
    confidence: "high",
    traditionIds: ["niuza", "sichuan-hotpot-offal"],
  },
  {
    canonicalId: "liver",
    country: "CN",
    localName: "niúgān",
    nativeScript: "牛肝",
    confidence: "high",
  },
  {
    canonicalId: "heart",
    country: "CN",
    localName: "niúxīn",
    nativeScript: "牛心",
    confidence: "high",
  },
  {
    canonicalId: "kidney",
    country: "CN",
    localName: "niúyāo",
    nativeScript: "牛腰",
    confidence: "high",
  },
  {
    canonicalId: "intestines",
    country: "CN",
    localName: "niúcháng",
    nativeScript: "牛肠",
    confidence: "high",
    traditionIds: ["niuza", "sichuan-hotpot-offal"],
  },
  {
    canonicalId: "skin",
    country: "CN",
    localName: "niúpí",
    nativeScript: "牛皮",
    confidence: "medium",
  },
  {
    canonicalId: "tendon",
    country: "CN",
    localName: "niújīn",
    nativeScript: "牛筋",
    confidence: "high",
  },
  {
    canonicalId: "head_cheek",
    country: "CN",
    localName: "niútóuròu",
    nativeScript: "牛头肉",
    altNames: ["niǔliǎnròu (牛脸肉)"],
    confidence: "high",
  },
  {
    canonicalId: "bone_marrow",
    country: "CN",
    localName: "niúgǔsuǐ",
    nativeScript: "牛骨髓",
    confidence: "high",
  },
  {
    canonicalId: "sweetbreads",
    country: "CN",
    localName: "niúyí",
    nativeScript: "牛杂中的牛胰",
    confidence: "medium",
  },
  {
    canonicalId: "testicles",
    country: "CN",
    localName: "niú gāowán",
    nativeScript: "牛睾丸",
    confidence: "medium",
  },
];

// ─── South Korea (KR) ─────────────────────────────────────────────────────────

const KR: readonly OffalRegionalName[] = [
  {
    canonicalId: "tongue",
    country: "KR",
    localName: "useol",
    nativeScript: "우설",
    confidence: "high",
  },
  {
    canonicalId: "tripe",
    country: "KR",
    localName: "yang",
    nativeScript: "양",
    confidence: "high",
    traditionIds: ["gopchang-gui"],
  },
  {
    canonicalId: "liver",
    country: "KR",
    localName: "gan",
    nativeScript: "간",
    confidence: "high",
  },
  {
    canonicalId: "heart",
    country: "KR",
    localName: "yeomtong",
    nativeScript: "염통",
    confidence: "high",
    traditionIds: ["gopchang-gui"],
  },
  {
    canonicalId: "kidney",
    country: "KR",
    localName: "kongpat",
    nativeScript: "콩팥",
    confidence: "medium",
  },
  {
    canonicalId: "intestines",
    country: "KR",
    localName: "gopchang",
    nativeScript: "곱창",
    altNames: ["daechang (대창)", "makchang (막창)"],
    confidence: "high",
    traditionIds: ["gopchang-gui"],
  },
  {
    canonicalId: "skin",
    country: "KR",
    localName: "so-kkeopdegi",
    nativeScript: "소껍데기",
    confidence: "medium",
  },
  {
    canonicalId: "tendon",
    country: "KR",
    localName: "seuji",
    nativeScript: "스지",
    confidence: "high",
  },
  {
    canonicalId: "head_cheek",
    country: "KR",
    localName: "meorigogi",
    nativeScript: "머리고기",
    altNames: ["bolsal (볼살)"],
    confidence: "medium",
  },
  {
    canonicalId: "bone_marrow",
    country: "KR",
    localName: "golsu",
    nativeScript: "골수",
    confidence: "high",
  },
  {
    canonicalId: "sweetbreads",
    country: "KR",
    localName: "so chwejang",
    nativeScript: "소췌장",
    confidence: "low",
  },
  {
    canonicalId: "testicles",
    country: "KR",
    localName: "so-bural",
    nativeScript: "소불알",
    confidence: "medium",
  },
];

// ─── France (FR) ──────────────────────────────────────────────────────────────

const FR: readonly OffalRegionalName[] = [
  {
    canonicalId: "tongue",
    country: "FR",
    localName: "langue de bœuf",
    confidence: "high",
  },
  {
    canonicalId: "tripe",
    country: "FR",
    localName: "tripes de bœuf",
    confidence: "high",
    traditionIds: ["tripes-caen"],
  },
  {
    canonicalId: "liver",
    country: "FR",
    localName: "foie de bœuf",
    confidence: "high",
  },
  {
    canonicalId: "heart",
    country: "FR",
    localName: "cœur de bœuf",
    confidence: "medium",
  },
  {
    canonicalId: "kidney",
    country: "FR",
    localName: "rognon de bœuf",
    confidence: "high",
  },
  {
    canonicalId: "intestines",
    country: "FR",
    localName: "boyaux de bœuf",
    confidence: "medium",
  },
  {
    canonicalId: "skin",
    country: "FR",
    localName: "peau de bœuf",
    confidence: "medium",
  },
  {
    canonicalId: "tendon",
    country: "FR",
    localName: "tendon de bœuf",
    confidence: "medium",
  },
  {
    canonicalId: "head_cheek",
    country: "FR",
    localName: "joue de bœuf",
    altNames: ["tête de veau"],
    speciesNote: "tête de veau is veal not beef",
    confidence: "high",
    traditionIds: ["tete-de-veau"],
  },
  {
    canonicalId: "bone_marrow",
    country: "FR",
    localName: "moelle de bœuf",
    confidence: "high",
  },
  {
    canonicalId: "sweetbreads",
    country: "FR",
    localName: "ris de veau",
    speciesNote: "veau",
    confidence: "high",
  },
  {
    canonicalId: "testicles",
    country: "FR",
    localName: "animelles",
    confidence: "medium",
  },
];

// ─── Italy (IT) ───────────────────────────────────────────────────────────────

const IT: readonly OffalRegionalName[] = [
  {
    canonicalId: "tongue",
    country: "IT",
    localName: "lingua di manzo",
    confidence: "high",
  },
  {
    canonicalId: "tripe",
    country: "IT",
    localName: "trippa",
    confidence: "high",
    traditionIds: ["quinto-quarto", "lampredotto"],
  },
  {
    canonicalId: "liver",
    country: "IT",
    localName: "fegato di manzo",
    confidence: "medium",
    traditionIds: ["quinto-quarto"],
  },
  {
    canonicalId: "heart",
    country: "IT",
    localName: "cuore di manzo",
    confidence: "medium",
  },
  {
    canonicalId: "kidney",
    country: "IT",
    localName: "rognone di manzo",
    confidence: "high",
    traditionIds: ["quinto-quarto"],
  },
  {
    canonicalId: "intestines",
    country: "IT",
    localName: "pajata",
    altNames: ["intestini di vitello"],
    speciesNote: "pajata is veal not beef",
    confidence: "high",
    traditionIds: ["quinto-quarto"],
  },
  {
    canonicalId: "skin",
    country: "IT",
    localName: "pelle bovina",
    confidence: "medium",
  },
  {
    canonicalId: "tendon",
    country: "IT",
    localName: "nervetti",
    altNames: ["tendine di manzo"],
    confidence: "high",
  },
  {
    canonicalId: "head_cheek",
    country: "IT",
    localName: "guancia di manzo",
    altNames: ["testina di vitello"],
    confidence: "high",
    traditionIds: ["quinto-quarto"],
  },
  {
    canonicalId: "bone_marrow",
    country: "IT",
    localName: "midollo",
    confidence: "high",
  },
  {
    canonicalId: "sweetbreads",
    country: "IT",
    localName: "animelle",
    confidence: "high",
    traditionIds: ["quinto-quarto"],
  },
  {
    canonicalId: "testicles",
    country: "IT",
    localName: "granelli",
    confidence: "medium",
  },
];

// ─── Combined export ──────────────────────────────────────────────────────────

export const offalRegionalNames: readonly OffalRegionalName[] = [
  ...MX,
  ...CN,
  ...KR,
  ...FR,
  ...IT,
];
