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

// ─── Spain (ES) ───────────────────────────────────────────────────────────────

const ES: readonly OffalRegionalName[] = [
  {
    canonicalId: "tongue",
    country: "ES",
    localName: "lengua de vacuno",
    altNames: ["lengua de ternera"],
    confidence: "high",
  },
  {
    canonicalId: "tripe",
    country: "ES",
    localName: "callos",
    confidence: "high",
    traditionIds: ["callos-madrilenos"],
  },
  {
    canonicalId: "liver",
    country: "ES",
    localName: "hígado de vacuno",
    altNames: ["hígado de ternera"],
    confidence: "high",
  },
  {
    canonicalId: "heart",
    country: "ES",
    localName: "corazón de vacuno",
    confidence: "medium",
  },
  {
    canonicalId: "kidney",
    country: "ES",
    localName: "riñones de ternera",
    altNames: ["riñones de vacuno"],
    confidence: "high",
    traditionIds: ["rinones-al-jerez"],
  },
  {
    canonicalId: "intestines",
    country: "ES",
    localName: "tripas",
    altNames: ["intestinos"],
    confidence: "medium",
  },
  {
    canonicalId: "skin",
    country: "ES",
    localName: "piel de vacuno",
    confidence: "medium",
  },
  {
    canonicalId: "tendon",
    country: "ES",
    localName: "tendón de vacuno",
    confidence: "medium",
    traditionIds: ["callos-madrilenos"],
  },
  {
    canonicalId: "head_cheek",
    country: "ES",
    localName: "carrillera",
    altNames: ["carrillada", "cabeza de ternera"],
    confidence: "high",
  },
  {
    canonicalId: "bone_marrow",
    country: "ES",
    localName: "tuétano",
    confidence: "high",
  },
  {
    canonicalId: "sweetbreads",
    country: "ES",
    localName: "mollejas",
    confidence: "high",
  },
  {
    canonicalId: "testicles",
    country: "ES",
    localName: "criadillas",
    altNames: ["criadillas de toro"],
    confidence: "high",
  },
];

// ─── Nigeria (NG) ─────────────────────────────────────────────────────────────

const NG: readonly OffalRegionalName[] = [
  {
    canonicalId: "tongue",
    country: "NG",
    localName: "beef tongue",
    confidence: "medium",
    traditionIds: ["orishirishi"],
  },
  {
    canonicalId: "tripe",
    country: "NG",
    localName: "shaki",
    confidence: "high",
    traditionIds: ["orishirishi"],
  },
  {
    canonicalId: "liver",
    country: "NG",
    localName: "liver",
    altNames: ["ẹdọ"],
    confidence: "high",
    traditionIds: ["orishirishi"],
  },
  {
    canonicalId: "heart",
    country: "NG",
    localName: "heart",
    confidence: "high",
    traditionIds: ["orishirishi"],
  },
  {
    canonicalId: "kidney",
    country: "NG",
    localName: "kidney",
    confidence: "high",
    traditionIds: ["orishirishi"],
  },
  {
    canonicalId: "intestines",
    country: "NG",
    localName: "roundabout",
    confidence: "high",
    traditionIds: ["orishirishi"],
  },
  {
    canonicalId: "skin",
    country: "NG",
    localName: "ponmo",
    altNames: ["kpomo", "kanda"],
    confidence: "high",
    traditionIds: ["ponmo"],
  },
  {
    canonicalId: "tendon",
    country: "NG",
    localName: "ponmo tissues",
    confidence: "medium",
  },
  {
    canonicalId: "head_cheek",
    country: "NG",
    localName: "head meat",
    confidence: "high",
    traditionIds: ["orishirishi"],
  },
  {
    canonicalId: "bone_marrow",
    country: "NG",
    localName: "bone marrow",
    confidence: "medium",
  },
  {
    canonicalId: "sweetbreads",
    country: "NG",
    localName: "assorted meat",
    confidence: "medium",
  },
  {
    canonicalId: "testicles",
    country: "NG",
    localName: "testicles",
    confidence: "medium",
  },
];

// ─── Philippines (PH) ─────────────────────────────────────────────────────────

const PH: readonly OffalRegionalName[] = [
  {
    canonicalId: "tongue",
    country: "PH",
    localName: "dila ng baka",
    confidence: "high",
    traditionIds: ["lengua-estofada"],
  },
  {
    canonicalId: "tripe",
    country: "PH",
    localName: "tuwalya",
    altNames: ["tripas ng baka"],
    confidence: "high",
    traditionIds: ["kare-kare", "goto"],
  },
  {
    canonicalId: "liver",
    country: "PH",
    localName: "atay ng baka",
    confidence: "high",
  },
  {
    canonicalId: "heart",
    country: "PH",
    localName: "puso ng baka",
    confidence: "high",
  },
  {
    canonicalId: "kidney",
    country: "PH",
    localName: "bato ng baka",
    confidence: "high",
  },
  {
    canonicalId: "intestines",
    country: "PH",
    localName: "bituka ng baka",
    confidence: "medium",
  },
  {
    canonicalId: "skin",
    country: "PH",
    localName: "balat ng baka",
    confidence: "medium",
  },
  {
    canonicalId: "tendon",
    country: "PH",
    localName: "litid ng baka",
    confidence: "high",
    traditionIds: ["kare-kare", "bulalo"],
  },
  {
    canonicalId: "head_cheek",
    country: "PH",
    localName: "ulo ng baka",
    altNames: ["pisngi ng baka"],
    confidence: "high",
  },
  {
    canonicalId: "bone_marrow",
    country: "PH",
    localName: "utak ng buto",
    confidence: "high",
    traditionIds: ["bulalo"],
  },
  {
    canonicalId: "sweetbreads",
    country: "PH",
    localName: "laman-loob",
    confidence: "medium",
  },
  {
    canonicalId: "testicles",
    country: "PH",
    localName: "bayag ng baka",
    confidence: "medium",
  },
];

// ─── Turkey (TR) ─────────────────────────────────────────────────────────────

const TR: readonly OffalRegionalName[] = [
  {
    canonicalId: "tongue",
    country: "TR",
    localName: "dil",
    altNames: ["dana dili"],
    confidence: "high",
  },
  {
    canonicalId: "tripe",
    country: "TR",
    localName: "işkembe",
    confidence: "high",
    traditionIds: ["iskembe-corbasi"],
  },
  {
    canonicalId: "liver",
    country: "TR",
    localName: "ciğer",
    confidence: "high",
  },
  {
    canonicalId: "heart",
    country: "TR",
    localName: "yürek",
    confidence: "high",
  },
  {
    canonicalId: "kidney",
    country: "TR",
    localName: "böbrek",
    confidence: "high",
  },
  {
    canonicalId: "intestines",
    country: "TR",
    localName: "bağırsak",
    altNames: ["kokoreç"],
    confidence: "high",
    traditionIds: ["kokorec"],
  },
  {
    canonicalId: "skin",
    country: "TR",
    localName: "deri",
    altNames: ["dana derisi"],
    confidence: "medium",
    traditionIds: ["kelle-paca"],
  },
  {
    canonicalId: "tendon",
    country: "TR",
    localName: "kiriş",
    altNames: ["dana tendonu"],
    confidence: "medium",
  },
  {
    canonicalId: "head_cheek",
    country: "TR",
    localName: "kelle",
    altNames: ["yanak"],
    confidence: "high",
    traditionIds: ["kelle-paca"],
  },
  {
    canonicalId: "bone_marrow",
    country: "TR",
    localName: "kemik iliği",
    confidence: "high",
    traditionIds: ["kelle-paca"],
  },
  {
    canonicalId: "sweetbreads",
    country: "TR",
    localName: "uykuluk",
    confidence: "high",
    traditionIds: ["kokorec"],
  },
  {
    canonicalId: "testicles",
    country: "TR",
    localName: "koç yumurtası",
    speciesNote: "traditionally ram, not beef",
    confidence: "high",
  },
];

// ─── Ethiopia (ET) ────────────────────────────────────────────────────────────
// Second pass (batch PK/LB/ET-2): head_cheek updated to ras/ራስ,
// skin and tendon added. sweetbreads still omitted — confidence too low.

const ET: readonly OffalRegionalName[] = [
  {
    canonicalId: "tongue",
    country: "ET",
    localName: "milas",
    nativeScript: "ምላስ",
    confidence: "medium",
  },
  {
    canonicalId: "tripe",
    country: "ET",
    localName: "cheguara",
    nativeScript: "ጨጓራ",
    confidence: "high",
    traditionIds: ["dulet"],
  },
  {
    canonicalId: "liver",
    country: "ET",
    localName: "gubet",
    nativeScript: "ጉበት",
    confidence: "high",
    traditionIds: ["dulet"],
  },
  {
    canonicalId: "heart",
    country: "ET",
    localName: "lib",
    nativeScript: "ልብ",
    confidence: "medium",
    traditionIds: ["dulet"],
  },
  {
    canonicalId: "kidney",
    country: "ET",
    localName: "kulalit",
    nativeScript: "ኩላሊት",
    confidence: "medium",
    traditionIds: ["dulet"],
  },
  {
    canonicalId: "intestines",
    country: "ET",
    localName: "internal organs",
    confidence: "medium",
  },
  {
    canonicalId: "head_cheek",
    country: "ET",
    localName: "ras",
    nativeScript: "ራስ",
    confidence: "high",
    traditionIds: ["ethiopia-slaughter-day"],
  },
  {
    canonicalId: "bone_marrow",
    country: "ET",
    localName: "bone marrow",
    confidence: "medium",
  },
  {
    canonicalId: "skin",
    country: "ET",
    localName: "skin",
    confidence: "medium",
  },
  {
    canonicalId: "tendon",
    country: "ET",
    localName: "connective tissues",
    confidence: "medium",
  },
  {
    canonicalId: "testicles",
    country: "ET",
    localName: "testicles",
    confidence: "medium",
  },
];

// ─── Brain — researched country entries ──────────────────────────────────────
// NG, PH, ET, VN omitted — no documented standalone tradition with sufficient confidence.

const BRAIN: readonly OffalRegionalName[] = [
  { canonicalId: "brain", country: "MX", localName: "sesos", confidence: "high" },
  { canonicalId: "brain", country: "CN", localName: "niúnǎo", nativeScript: "牛脑", confidence: "high" },
  { canonicalId: "brain", country: "KR", localName: "골 (gol)", nativeScript: "골", confidence: "medium" },
  { canonicalId: "brain", country: "FR", localName: "cervelle de veau", speciesNote: "veau", confidence: "high" },
  { canonicalId: "brain", country: "IT", localName: "cervello", altNames: ["cervello fritto"], confidence: "high" },
  { canonicalId: "brain", country: "ES", localName: "sesos", altNames: ["sesos rebozados"], confidence: "high" },
  { canonicalId: "brain", country: "TR", localName: "beyin", confidence: "high" },
  { canonicalId: "brain", country: "GB", localName: "calf's brain", speciesNote: "traditionally veal not beef", confidence: "medium" },
  { canonicalId: "brain", country: "MA", localName: "mokh", nativeScript: "مخ", confidence: "high" },
  { canonicalId: "brain", country: "PE", localName: "sesos", confidence: "high" },
  { canonicalId: "brain", country: "JP", localName: "nōmiso", nativeScript: "脳みそ", confidence: "medium" },
];

// Tripe sub-canonical architecture resolved in ADR-006 (c1cb321).
// Distinct stomach chambers modeled as axis nodes in
// data/offal/axisNodes.ts: maodu_axis_cn, mino_axis_jp,
// makchang_axis_kr. altNames preserved for search/display.

// ─── United Kingdom (GB) ─────────────────────────────────────────────────────
// Note: GB skin, tendon, and testicles intentionally omitted —
// no culinary tradition documented (skin/tendon) or confidence too low (testicles).

const GB: readonly OffalRegionalName[] = [
  {
    canonicalId: "tongue",
    country: "GB",
    localName: "ox tongue",
    altNames: ["beef tongue"],
    confidence: "high",
    traditionIds: ["pressed-tongue"],
  },
  {
    canonicalId: "tripe",
    country: "GB",
    localName: "tripe",
    confidence: "medium",
  },
  {
    canonicalId: "liver",
    country: "GB",
    localName: "ox liver",
    altNames: ["beef liver"],
    confidence: "high",
  },
  {
    canonicalId: "heart",
    country: "GB",
    localName: "ox heart",
    confidence: "medium",
  },
  {
    canonicalId: "kidney",
    country: "GB",
    localName: "ox kidney",
    confidence: "high",
    traditionIds: ["steak-kidney-pie"],
  },
  {
    canonicalId: "intestines",
    country: "GB",
    localName: "beef intestines",
    confidence: "medium",
  },
  {
    canonicalId: "head_cheek",
    country: "GB",
    localName: "ox cheek",
    altNames: ["beef cheek"],
    confidence: "high",
  },
  {
    canonicalId: "bone_marrow",
    country: "GB",
    localName: "bone marrow",
    altNames: ["marrow bones"],
    confidence: "high",
    traditionIds: ["bone-marrow-toast"],
  },
  {
    canonicalId: "sweetbreads",
    country: "GB",
    localName: "sweetbreads",
    confidence: "medium",
  },
];

// ─── Vietnam (VN) ────────────────────────────────────────────────────────────
// Note: VN sweetbreads intentionally omitted — confidence too low.

const VN: readonly OffalRegionalName[] = [
  {
    canonicalId: "tongue",
    country: "VN",
    localName: "lưỡi bò",
    confidence: "high",
  },
  {
    canonicalId: "tripe",
    country: "VN",
    localName: "lá sách",
    altNames: ["bao tử bò", "tổ ong"],
    confidence: "high",
    traditionIds: ["pho-bo", "long-bo"],
  },
  {
    canonicalId: "liver",
    country: "VN",
    localName: "gan bò",
    confidence: "high",
    traditionIds: ["long-bo"],
  },
  {
    canonicalId: "heart",
    country: "VN",
    localName: "tim bò",
    confidence: "high",
    traditionIds: ["long-bo"],
  },
  {
    canonicalId: "kidney",
    country: "VN",
    localName: "cật bò",
    confidence: "high",
    traditionIds: ["long-bo"],
  },
  {
    canonicalId: "intestines",
    country: "VN",
    localName: "lòng bò",
    confidence: "high",
    traditionIds: ["long-bo"],
  },
  {
    canonicalId: "skin",
    country: "VN",
    localName: "da bò",
    confidence: "medium",
  },
  {
    canonicalId: "tendon",
    country: "VN",
    localName: "gân bò",
    confidence: "high",
    traditionIds: ["pho-bo", "bo-kho"],
  },
  {
    canonicalId: "head_cheek",
    country: "VN",
    localName: "má bò",
    altNames: ["đầu bò"],
    confidence: "medium",
  },
  {
    canonicalId: "bone_marrow",
    country: "VN",
    localName: "tủy bò",
    confidence: "high",
    traditionIds: ["pho-bo", "bo-kho"],
  },
  {
    canonicalId: "testicles",
    country: "VN",
    localName: "ngọc bò",
    confidence: "medium",
  },
];

// ─── Morocco (MA) ────────────────────────────────────────────────────────────
// Note: MA skin and tendon intentionally omitted —
// skin: confidence too low; tendon: present but not culturally distinct.

const MA: readonly OffalRegionalName[] = [
  {
    canonicalId: "tongue",
    country: "MA",
    localName: "lsane",
    nativeScript: "لسان",
    confidence: "high",
  },
  {
    canonicalId: "tripe",
    country: "MA",
    localName: "kercha",
    nativeScript: "كرشة",
    confidence: "high",
    traditionIds: ["douara"],
  },
  {
    canonicalId: "liver",
    country: "MA",
    localName: "kebda",
    nativeScript: "كبدة",
    confidence: "high",
    traditionIds: ["boulfaf", "eid-organ-grill"],
  },
  {
    canonicalId: "heart",
    country: "MA",
    localName: "qalb",
    nativeScript: "قلب",
    confidence: "high",
    traditionIds: ["eid-organ-grill"],
  },
  {
    canonicalId: "kidney",
    country: "MA",
    localName: "kliwa",
    nativeScript: "كلوة",
    confidence: "high",
    traditionIds: ["eid-organ-grill"],
  },
  {
    canonicalId: "intestines",
    country: "MA",
    localName: "douara",
    nativeScript: "دوارة",
    confidence: "high",
    traditionIds: ["douara"],
  },
  {
    canonicalId: "head_cheek",
    country: "MA",
    localName: "ras",
    nativeScript: "رأس",
    altNames: ["khadd (خد)"],
    confidence: "high",
  },
  {
    canonicalId: "bone_marrow",
    country: "MA",
    localName: "mokh l-ʿdam",
    nativeScript: "مخ العظام",
    confidence: "medium",
  },
  {
    canonicalId: "sweetbreads",
    country: "MA",
    localName: "ghodda",
    nativeScript: "غدة",
    confidence: "medium",
    traditionIds: ["eid-organ-grill"],
  },
  {
    canonicalId: "testicles",
    country: "MA",
    localName: "dghmira",
    nativeScript: "دغميرة",
    confidence: "high",
    traditionIds: ["eid-organ-grill"],
  },
];

// ─── Peru (PE) ───────────────────────────────────────────────────────────────

const PE: readonly OffalRegionalName[] = [
  {
    canonicalId: "tongue",
    country: "PE",
    localName: "lengua de res",
    confidence: "high",
  },
  {
    canonicalId: "tripe",
    country: "PE",
    localName: "mondongo",
    altNames: ["tripa"],
    confidence: "high",
    traditionIds: ["cau-cau"],
  },
  {
    canonicalId: "liver",
    country: "PE",
    localName: "hígado de res",
    confidence: "high",
  },
  {
    canonicalId: "heart",
    country: "PE",
    localName: "corazón de res",
    confidence: "high",
    traditionIds: ["anticuchos"],
  },
  {
    canonicalId: "kidney",
    country: "PE",
    localName: "riñón de res",
    confidence: "medium",
  },
  {
    canonicalId: "intestines",
    country: "PE",
    localName: "choncholí",
    altNames: ["chunchulí"],
    confidence: "high",
    traditionIds: ["anticuchos"],
  },
  {
    canonicalId: "skin",
    country: "PE",
    localName: "cuero de res",
    confidence: "medium",
  },
  {
    canonicalId: "tendon",
    country: "PE",
    localName: "tendón de res",
    confidence: "medium",
  },
  {
    canonicalId: "head_cheek",
    country: "PE",
    localName: "cabeza",
    altNames: ["cachete"],
    confidence: "medium",
  },
  {
    canonicalId: "bone_marrow",
    country: "PE",
    localName: "tuétano",
    confidence: "medium",
  },
  {
    canonicalId: "sweetbreads",
    country: "PE",
    localName: "mollejas",
    confidence: "high",
    traditionIds: ["anticuchos"],
  },
  {
    canonicalId: "testicles",
    country: "PE",
    localName: "criadillas",
    confidence: "medium",
  },
];

// ─── Japan (JP) ──────────────────────────────────────────────────────────────
// Note: JP skin intentionally omitted — low confidence.
// DEFERRED: mino/hachinosu/senmai are distinct stomach chambers treated as
// separate menu items in yakiniku. Modeled as altNames pending tripe
// sub-canonical architectural decision.

const JP: readonly OffalRegionalName[] = [
  {
    canonicalId: "tongue",
    country: "JP",
    localName: "gyūtan",
    nativeScript: "牛タン",
    confidence: "high",
    traditionIds: ["gyutan-culture"],
  },
  {
    canonicalId: "tripe",
    country: "JP",
    localName: "mino",
    nativeScript: "ミノ",
    altNames: ["hachinosu (ハチノス)", "senmai (センマイ)"],
    confidence: "high",
    traditionIds: ["horumon-yaki", "motsu-nabe"],
  },
  {
    canonicalId: "liver",
    country: "JP",
    localName: "gyū rebā",
    nativeScript: "牛レバー",
    confidence: "high",
    traditionIds: ["horumon-yaki"],
  },
  {
    canonicalId: "heart",
    country: "JP",
    localName: "hatsu",
    nativeScript: "ハツ",
    confidence: "high",
    traditionIds: ["horumon-yaki"],
  },
  {
    canonicalId: "kidney",
    country: "JP",
    localName: "mame",
    nativeScript: "マメ",
    confidence: "medium",
  },
  {
    canonicalId: "intestines",
    country: "JP",
    localName: "motsu",
    nativeScript: "モツ",
    altNames: ["shimachō (シマチョウ)", "shōchō (小腸)"],
    confidence: "high",
    traditionIds: ["horumon-yaki", "motsu-nabe"],
  },
  {
    canonicalId: "tendon",
    country: "JP",
    localName: "gyūsuji",
    nativeScript: "牛すじ",
    confidence: "high",
    traditionIds: ["gyusuji-traditions"],
  },
  {
    canonicalId: "head_cheek",
    country: "JP",
    localName: "tsurami",
    nativeScript: "ツラミ",
    confidence: "high",
  },
  {
    canonicalId: "bone_marrow",
    country: "JP",
    localName: "kotsuzui",
    nativeScript: "骨髄",
    confidence: "medium",
  },
  {
    canonicalId: "sweetbreads",
    country: "JP",
    localName: "shibire",
    nativeScript: "シビレ",
    confidence: "high",
    traditionIds: ["horumon-yaki"],
  },
  {
    canonicalId: "testicles",
    country: "JP",
    localName: "ushi no kōgan",
    nativeScript: "牛の睾丸",
    confidence: "medium",
  },
];

// ─── Argentina (AR) ──────────────────────────────────────────────────────────
// Note: AR skin and tendon intentionally omitted — low confidence.

const AR: readonly OffalRegionalName[] = [
  {
    canonicalId: "tongue",
    country: "AR",
    localName: "lengua",
    confidence: "high",
  },
  {
    canonicalId: "tripe",
    country: "AR",
    localName: "mondongo",
    confidence: "high",
  },
  {
    canonicalId: "liver",
    country: "AR",
    localName: "hígado",
    confidence: "medium",
  },
  {
    canonicalId: "heart",
    country: "AR",
    localName: "corazón",
    confidence: "medium",
    traditionIds: ["argentine-achuras"],
  },
  {
    canonicalId: "kidney",
    country: "AR",
    localName: "riñón",
    confidence: "high",
    traditionIds: ["argentine-achuras"],
  },
  {
    canonicalId: "intestines",
    country: "AR",
    localName: "chinchulines",
    altNames: ["tripa gorda"],
    confidence: "high",
    traditionIds: ["argentine-achuras"],
  },
  {
    canonicalId: "head_cheek",
    country: "AR",
    localName: "cabeza",
    altNames: ["cachete"],
    confidence: "medium",
  },
  {
    canonicalId: "bone_marrow",
    country: "AR",
    localName: "tuétano",
    confidence: "medium",
  },
  {
    canonicalId: "sweetbreads",
    country: "AR",
    localName: "mollejas",
    confidence: "high",
    traditionIds: ["argentine-achuras"],
  },
  {
    canonicalId: "testicles",
    country: "AR",
    localName: "criadillas",
    confidence: "medium",
  },
  {
    canonicalId: "brain",
    country: "AR",
    localName: "sesos",
    confidence: "high",
    traditionIds: ["sesos-parrilla", "argentine-achuras"],
  },
];

// ─── Chile (CL) ──────────────────────────────────────────────────────────────
// Note: CL skin, tendon, and brain intentionally omitted —
// skin/tendon low confidence, brain not documented in research.

const CL: readonly OffalRegionalName[] = [
  {
    canonicalId: "tongue",
    country: "CL",
    localName: "lengua",
    confidence: "high",
  },
  {
    canonicalId: "tripe",
    country: "CL",
    localName: "guatitas",
    confidence: "high",
    traditionIds: ["guatitas-chilenas"],
  },
  {
    canonicalId: "liver",
    country: "CL",
    localName: "hígado",
    confidence: "high",
  },
  {
    canonicalId: "heart",
    country: "CL",
    localName: "corazón",
    confidence: "medium",
  },
  {
    canonicalId: "kidney",
    country: "CL",
    localName: "riñón",
    confidence: "high",
  },
  {
    canonicalId: "intestines",
    country: "CL",
    localName: "chunchules",
    confidence: "high",
    traditionIds: ["chunchules-asados"],
  },
  {
    canonicalId: "head_cheek",
    country: "CL",
    localName: "cabeza",
    altNames: ["cachete"],
    confidence: "medium",
  },
  {
    canonicalId: "bone_marrow",
    country: "CL",
    localName: "tuétano",
    confidence: "medium",
  },
  {
    canonicalId: "sweetbreads",
    country: "CL",
    localName: "mollejas",
    confidence: "high",
  },
  {
    canonicalId: "testicles",
    country: "CL",
    localName: "criadillas",
    confidence: "medium",
  },
];

// ─── Uruguay (UY) ────────────────────────────────────────────────────────────
// Note: UY skin, tendon, and brain intentionally omitted —
// skin/tendon low confidence, brain not documented in research.

const UY: readonly OffalRegionalName[] = [
  {
    canonicalId: "tongue",
    country: "UY",
    localName: "lengua",
    confidence: "high",
    traditionIds: ["achuras-uruguayas"],
  },
  {
    canonicalId: "tripe",
    country: "UY",
    localName: "mondongo",
    confidence: "high",
  },
  {
    canonicalId: "liver",
    country: "UY",
    localName: "hígado",
    confidence: "medium",
  },
  {
    canonicalId: "heart",
    country: "UY",
    localName: "corazón",
    confidence: "medium",
    traditionIds: ["achuras-uruguayas"],
  },
  {
    canonicalId: "kidney",
    country: "UY",
    localName: "riñón",
    confidence: "high",
    traditionIds: ["achuras-uruguayas"],
  },
  {
    canonicalId: "intestines",
    country: "UY",
    localName: "chinchulines",
    confidence: "high",
    traditionIds: ["achuras-uruguayas"],
  },
  {
    canonicalId: "head_cheek",
    country: "UY",
    localName: "cabeza",
    altNames: ["cachete"],
    confidence: "medium",
  },
  {
    canonicalId: "bone_marrow",
    country: "UY",
    localName: "tuétano",
    confidence: "medium",
  },
  {
    canonicalId: "sweetbreads",
    country: "UY",
    localName: "mollejas",
    confidence: "high",
    traditionIds: ["achuras-uruguayas"],
  },
  {
    canonicalId: "testicles",
    country: "UY",
    localName: "criadillas",
    confidence: "medium",
  },
];

// ─── Germany (DE) ────────────────────────────────────────────────────────────
// Note: DE skin, tendon, testicles, brain intentionally omitted.

const DE: readonly OffalRegionalName[] = [
  {
    canonicalId: "tongue",
    country: "DE",
    localName: "Rinderzunge",
    confidence: "high",
  },
  {
    canonicalId: "tripe",
    country: "DE",
    localName: "Kutteln",
    altNames: ["Flecke"],
    confidence: "high",
    traditionIds: ["saure-kutteln"],
  },
  {
    canonicalId: "liver",
    country: "DE",
    localName: "Rinderleber",
    confidence: "high",
  },
  {
    canonicalId: "heart",
    country: "DE",
    localName: "Rinderherz",
    confidence: "medium",
  },
  {
    canonicalId: "kidney",
    country: "DE",
    localName: "Rinderniere",
    confidence: "high",
  },
  {
    canonicalId: "intestines",
    country: "DE",
    localName: "Rinderdarm",
    confidence: "medium",
  },
  {
    canonicalId: "head_cheek",
    country: "DE",
    localName: "Ochsenbacke",
    altNames: ["Rinderbacke"],
    confidence: "high",
  },
  {
    canonicalId: "bone_marrow",
    country: "DE",
    localName: "Knochenmark",
    confidence: "high",
    traditionIds: ["markklosschen"],
  },
  {
    canonicalId: "sweetbreads",
    country: "DE",
    localName: "Kalbsbries",
    speciesNote: "traditionally veal not beef",
    confidence: "high",
  },
];

// ─── Hungary (HU) ────────────────────────────────────────────────────────────
// Note: HU skin and brain intentionally omitted.

const HU: readonly OffalRegionalName[] = [
  {
    canonicalId: "tongue",
    country: "HU",
    localName: "marhanyelv",
    confidence: "high",
  },
  {
    canonicalId: "tripe",
    country: "HU",
    localName: "pacal",
    confidence: "high",
    traditionIds: ["pacalporkolt", "hungarian-porkolt-offal"],
  },
  {
    canonicalId: "liver",
    country: "HU",
    localName: "marhamáj",
    confidence: "high",
    traditionIds: ["hungarian-porkolt-offal"],
  },
  {
    canonicalId: "heart",
    country: "HU",
    localName: "marhaszív",
    confidence: "high",
    traditionIds: ["hungarian-porkolt-offal"],
  },
  {
    canonicalId: "kidney",
    country: "HU",
    localName: "marhavese",
    confidence: "high",
    traditionIds: ["hungarian-porkolt-offal"],
  },
  {
    canonicalId: "intestines",
    country: "HU",
    localName: "marhabél",
    altNames: ["bél"],
    confidence: "medium",
  },
  {
    canonicalId: "tendon",
    country: "HU",
    localName: "ín",
    confidence: "medium",
  },
  {
    canonicalId: "head_cheek",
    country: "HU",
    localName: "pofa",
    altNames: ["marhafej"],
    confidence: "high",
    traditionIds: ["hungarian-porkolt-offal"],
  },
  {
    canonicalId: "bone_marrow",
    country: "HU",
    localName: "velő",
    confidence: "high",
    traditionIds: ["velős-csont"],
  },
  {
    canonicalId: "sweetbreads",
    country: "HU",
    localName: "borjúmirigy",
    altNames: ["borjúbríz"],
    speciesNote: "traditionally veal not beef",
    confidence: "high",
  },
  {
    canonicalId: "testicles",
    country: "HU",
    localName: "bikahere",
    confidence: "high",
    traditionIds: ["bikahere-porkolt"],
  },
];

// ─── India (IN) ──────────────────────────────────────────────────────────────
// Single country code covers six regional culinary systems:
// North India/Mughlai, Hyderabad/Deccan, Kerala, Goa,
// Northeast India, and West Bengal/Kolkata.

const IN: readonly OffalRegionalName[] = [
  {
    canonicalId: "tongue",
    country: "IN",
    localName: "zubaan",
    nativeScript: "زبان",
    altNames: ["naakku (Kerala)", "lingua (Goa)", "jibh (Bengali)"],
    confidence: "high",
    traditionIds: ["naakku-roast", "lingua-vindalho"],
  },
  {
    canonicalId: "tripe",
    country: "IN",
    localName: "botti",
    altNames: ["ojhri (اوجھڑی)", "boti", "bhuri (ভুঁড়ি)"],
    confidence: "high",
    traditionIds: ["botti-curry", "ojhri-tradition", "nalli-nihari"],
  },
  {
    canonicalId: "liver",
    country: "IN",
    localName: "kaleji",
    nativeScript: "کلیجی",
    altNames: ["karal (Kerala)", "kolija (Bengali)"],
    confidence: "high",
    traditionIds: ["gurda-kaleji", "karal-fry"],
  },
  {
    canonicalId: "heart",
    country: "IN",
    localName: "dil",
    nativeScript: "دل",
    altNames: ["hridayam (Kerala)"],
    confidence: "medium",
  },
  {
    canonicalId: "kidney",
    country: "IN",
    localName: "gurda",
    nativeScript: "گردہ",
    confidence: "high",
    traditionIds: ["gurda-kaleji"],
  },
  {
    canonicalId: "intestines",
    country: "IN",
    localName: "ojhri",
    nativeScript: "اوجھڑی",
    altNames: ["chaal (Kerala)", "boti"],
    confidence: "high",
    traditionIds: ["ojhri-tradition", "chaal-roast"],
  },
  {
    canonicalId: "skin",
    country: "IN",
    localName: "thol",
    altNames: ["Kerala regional usage"],
    confidence: "medium",
    traditionIds: ["northeast-whole-animal"],
  },
  {
    canonicalId: "tendon",
    country: "IN",
    localName: "maghaz-e-haddi tissues",
    confidence: "medium",
    traditionIds: ["northeast-whole-animal"],
  },
  {
    canonicalId: "head_cheek",
    country: "IN",
    localName: "siri",
    nativeScript: "سری",
    altNames: ["thala (Kerala)", "naakku thala"],
    confidence: "high",
    traditionIds: ["siri-paya", "thala-curry"],
  },
  {
    canonicalId: "bone_marrow",
    country: "IN",
    localName: "maghaz-e-haddi",
    nativeScript: "مغز ہڈی",
    altNames: ["majja (Kerala)", "nalli"],
    confidence: "high",
    traditionIds: ["nalli-nihari", "marag"],
  },
  {
    canonicalId: "sweetbreads",
    country: "IN",
    localName: "kapura",
    nativeScript: "کپورا",
    terminologyNote:
      "kapura refers to sweetbreads in some North Indian contexts and testicles in others, " +
      "especially Hyderabad. Never assume identical meaning across regions.",
    confidence: "medium",
    traditionIds: ["kapura-fry"],
  },
  {
    canonicalId: "testicles",
    country: "IN",
    localName: "kapura",
    nativeScript: "کپورا",
    altNames: ["unda (Kerala)"],
    terminologyNote:
      "In Hyderabad restaurant culture kapura most commonly means testicles. In North India " +
      "it may mean sweetbreads or glandular tissues generally. Terminology is not standardized.",
    confidence: "medium",
    traditionIds: ["kapura-fry"],
  },
  {
    canonicalId: "brain",
    country: "IN",
    localName: "bheja",
    nativeScript: "بھیجا",
    altNames: ["bheja fry"],
    confidence: "high",
  },
];

// ─── Greece (GR) ─────────────────────────────────────────────────────────────
// Note: GR skin, tendon, brain intentionally omitted.

const GR: readonly OffalRegionalName[] = [
  {
    canonicalId: "tongue",
    country: "GR",
    localName: "glóssa vodinoú",
    nativeScript: "γλώσσα βοδινού",
    confidence: "high",
  },
  {
    canonicalId: "tripe",
    country: "GR",
    localName: "patsás",
    nativeScript: "πατσάς",
    confidence: "high",
    traditionIds: ["patsas"],
  },
  {
    canonicalId: "liver",
    country: "GR",
    localName: "sykóti",
    nativeScript: "συκώτι",
    confidence: "high",
    traditionIds: ["kokoretsi", "greek-easter-offal"],
  },
  {
    canonicalId: "heart",
    country: "GR",
    localName: "kardiá",
    nativeScript: "καρδιά",
    confidence: "high",
    traditionIds: ["kokoretsi", "greek-easter-offal"],
  },
  {
    canonicalId: "kidney",
    country: "GR",
    localName: "nefró",
    nativeScript: "νεφρό",
    confidence: "high",
    traditionIds: ["kokoretsi", "greek-easter-offal"],
  },
  {
    canonicalId: "intestines",
    country: "GR",
    localName: "éntera",
    nativeScript: "έντερα",
    confidence: "high",
    traditionIds: ["kokoretsi", "greek-easter-offal"],
  },
  {
    canonicalId: "head_cheek",
    country: "GR",
    localName: "kefáli",
    nativeScript: "κεφάλι",
    altNames: ["mágoulo (μάγουλο)"],
    confidence: "high",
    traditionIds: ["greek-easter-offal"],
  },
  {
    canonicalId: "bone_marrow",
    country: "GR",
    localName: "medoúli",
    nativeScript: "μεδούλι",
    confidence: "medium",
  },
  {
    canonicalId: "sweetbreads",
    country: "GR",
    localName: "glykádia",
    nativeScript: "γλυκάδια",
    speciesNote: "traditionally lamb, beef versions documented",
    confidence: "high",
    traditionIds: ["kokoretsi", "greek-easter-offal"],
  },
  {
    canonicalId: "testicles",
    country: "GR",
    localName: "amelétita",
    nativeScript: "αμελέτητα",
    confidence: "high",
    traditionIds: ["greek-easter-offal"],
  },
];

// ─── Indonesia (ID) ───────────────────────────────────────────────────────────
// Note: ID sweetbreads, testicles, brain intentionally omitted.

const ID: readonly OffalRegionalName[] = [
  {
    canonicalId: "tongue",
    country: "ID",
    localName: "lidah sapi",
    confidence: "high",
  },
  {
    canonicalId: "tripe",
    country: "ID",
    localName: "babat",
    confidence: "high",
    traditionIds: ["soto-jeroan", "padang-offal"],
  },
  {
    canonicalId: "liver",
    country: "ID",
    localName: "hati sapi",
    confidence: "high",
    traditionIds: ["soto-jeroan", "sate-jeroan"],
  },
  {
    canonicalId: "heart",
    country: "ID",
    localName: "jantung sapi",
    confidence: "high",
    traditionIds: ["soto-jeroan", "sate-jeroan"],
  },
  {
    canonicalId: "kidney",
    country: "ID",
    localName: "ginjal sapi",
    confidence: "high",
    traditionIds: ["soto-jeroan", "sate-jeroan"],
  },
  {
    canonicalId: "intestines",
    country: "ID",
    localName: "usus sapi",
    confidence: "high",
    traditionIds: ["soto-jeroan", "padang-offal", "sate-jeroan"],
  },
  {
    canonicalId: "skin",
    country: "ID",
    localName: "kikil",
    confidence: "high",
    traditionIds: ["kikil", "soto-jeroan", "padang-offal"],
  },
  {
    canonicalId: "tendon",
    country: "ID",
    localName: "urat sapi",
    confidence: "high",
    traditionIds: ["soto-jeroan", "padang-offal"],
  },
  {
    canonicalId: "head_cheek",
    country: "ID",
    localName: "kepala sapi",
    altNames: ["pipi sapi"],
    confidence: "high",
    traditionIds: ["padang-offal"],
  },
  {
    canonicalId: "bone_marrow",
    country: "ID",
    localName: "sumsum",
    confidence: "high",
    traditionIds: ["padang-offal"],
  },
];

// ─── Iran (IR) ────────────────────────────────────────────────────────────────
// Note: IR skin, tendon intentionally omitted.

const IR: readonly OffalRegionalName[] = [
  {
    canonicalId: "tongue",
    country: "IR",
    localName: "zabān",
    nativeScript: "زبان",
    confidence: "high",
    traditionIds: ["kaleh-pacheh"],
  },
  {
    canonicalId: "tripe",
    country: "IR",
    localName: "sirābi",
    nativeScript: "سیرابی",
    confidence: "high",
    traditionIds: ["sirabi-sheerdan"],
  },
  {
    canonicalId: "liver",
    country: "IR",
    localName: "jegar",
    nativeScript: "جگر",
    confidence: "high",
    traditionIds: ["jigaraki"],
  },
  {
    canonicalId: "heart",
    country: "IR",
    localName: "del",
    nativeScript: "دل",
    confidence: "high",
    traditionIds: ["jigaraki"],
  },
  {
    canonicalId: "kidney",
    country: "IR",
    localName: "gholveh",
    nativeScript: "قلوه",
    confidence: "high",
    traditionIds: ["jigaraki"],
  },
  {
    canonicalId: "intestines",
    country: "IR",
    localName: "rudeh",
    nativeScript: "روده",
    confidence: "medium",
  },
  {
    canonicalId: "head_cheek",
    country: "IR",
    localName: "kalleh",
    nativeScript: "کله",
    confidence: "high",
    traditionIds: ["kaleh-pacheh"],
  },
  {
    canonicalId: "bone_marrow",
    country: "IR",
    localName: "maghz-e ostokhān",
    nativeScript: "مغز استخوان",
    confidence: "medium",
  },
  {
    canonicalId: "sweetbreads",
    country: "IR",
    localName: "donbalān",
    nativeScript: "دنبلان",
    terminologyNote:
      "donbalān refers to glandular tissues broadly in some contexts and testicles specifically " +
      "in modern restaurant usage. Not identical meaning across regions.",
    confidence: "high",
    traditionIds: ["jigaraki"],
  },
  {
    canonicalId: "testicles",
    country: "IR",
    localName: "donbalān",
    nativeScript: "دنبلان",
    terminologyNote:
      "In modern Iranian restaurant culture donbalān most commonly refers to testicles. " +
      "Terminology overlaps with sweetbreads in some contexts.",
    confidence: "high",
    traditionIds: ["jigaraki"],
  },
  {
    canonicalId: "brain",
    country: "IR",
    localName: "maghz",
    nativeScript: "مغز",
    confidence: "high",
    traditionIds: ["kaleh-pacheh"],
  },
];

// ─── Egypt (EG) ───────────────────────────────────────────────────────────────
// Note: EG skin, tendon, brain intentionally omitted.

const EG: readonly OffalRegionalName[] = [
  {
    canonicalId: "tongue",
    country: "EG",
    localName: "lisān",
    nativeScript: "لسان",
    confidence: "high",
  },
  {
    canonicalId: "tripe",
    country: "EG",
    localName: "karsha",
    nativeScript: "كرشة",
    confidence: "high",
    traditionIds: ["karsha-traditions"],
  },
  {
    canonicalId: "liver",
    country: "EG",
    localName: "kibda",
    nativeScript: "كبدة",
    confidence: "high",
    traditionIds: ["kibda-iskandarani"],
  },
  {
    canonicalId: "heart",
    country: "EG",
    localName: "qalb",
    nativeScript: "قلب",
    confidence: "high",
  },
  {
    canonicalId: "kidney",
    country: "EG",
    localName: "kalawi",
    nativeScript: "كلاوي",
    confidence: "high",
  },
  {
    canonicalId: "intestines",
    country: "EG",
    localName: "am'ā'",
    nativeScript: "أمعاء",
    altNames: ["mombar context"],
    confidence: "high",
    traditionIds: ["mombar"],
  },
  {
    canonicalId: "head_cheek",
    country: "EG",
    localName: "ra's",
    nativeScript: "رأس",
    confidence: "high",
  },
  {
    canonicalId: "bone_marrow",
    country: "EG",
    localName: "nukhā'",
    nativeScript: "نخاع",
    confidence: "medium",
  },
  {
    canonicalId: "sweetbreads",
    country: "EG",
    localName: "makhasi",
    nativeScript: "مخاصي",
    terminologyNote:
      "makhasi terminology overlaps between sweetbreads and testicles in Egyptian usage. " +
      "Context-dependent.",
    confidence: "medium",
  },
  {
    canonicalId: "testicles",
    country: "EG",
    localName: "makhasi",
    nativeScript: "مخاصي",
    altNames: ["makhasi meshwi"],
    terminologyNote:
      "makhasi most commonly refers to testicles in Egyptian butcher and grill culture. " +
      "Terminology overlaps with sweetbreads in some contexts.",
    confidence: "high",
  },
];

// ─── Brazil (BR) ──────────────────────────────────────────────────────────────
// Note: BR brain intentionally omitted.

const BR: readonly OffalRegionalName[] = [
  {
    canonicalId: "tongue",
    country: "BR",
    localName: "língua bovina",
    confidence: "high",
  },
  {
    canonicalId: "tripe",
    country: "BR",
    localName: "dobradinha",
    altNames: ["bucho"],
    confidence: "high",
    traditionIds: ["dobradinha"],
  },
  {
    canonicalId: "liver",
    country: "BR",
    localName: "fígado bovino",
    confidence: "high",
  },
  {
    canonicalId: "heart",
    country: "BR",
    localName: "coração bovino",
    confidence: "medium",
  },
  {
    canonicalId: "kidney",
    country: "BR",
    localName: "rim bovino",
    confidence: "medium",
  },
  {
    canonicalId: "intestines",
    country: "BR",
    localName: "tripa",
    altNames: ["intestino bovino"],
    confidence: "high",
    traditionIds: ["churrasco-miudos"],
  },
  {
    canonicalId: "skin",
    country: "BR",
    localName: "couro bovino",
    confidence: "medium",
  },
  {
    canonicalId: "tendon",
    country: "BR",
    localName: "tendão bovino",
    confidence: "medium",
  },
  {
    canonicalId: "head_cheek",
    country: "BR",
    localName: "bochecha",
    altNames: ["cabeça"],
    confidence: "high",
  },
  {
    canonicalId: "bone_marrow",
    country: "BR",
    localName: "tutano",
    confidence: "high",
    traditionIds: ["tutano-tradition"],
  },
  {
    canonicalId: "sweetbreads",
    country: "BR",
    localName: "molejas",
    altNames: ["mollejas"],
    confidence: "medium",
    traditionIds: ["churrasco-miudos"],
  },
  {
    canonicalId: "testicles",
    country: "BR",
    localName: "criadillas",
    confidence: "medium",
  },
];

// ─── Pakistan (PK) ───────────────────────────────────────────────────────────
// Note: PK skin intentionally omitted — low confidence.

const PK: readonly OffalRegionalName[] = [
  {
    canonicalId: "tongue",
    country: "PK",
    localName: "zabān",
    nativeScript: "زبان",
    confidence: "high",
  },
  {
    canonicalId: "tripe",
    country: "PK",
    localName: "ojhri",
    nativeScript: "اوجھڑی",
    confidence: "high",
    traditionIds: ["ojhri-pk", "katakat"],
  },
  {
    canonicalId: "liver",
    country: "PK",
    localName: "kaleji",
    nativeScript: "کلیجی",
    confidence: "high",
    traditionIds: ["gurda-kaleji-pk", "katakat"],
  },
  {
    canonicalId: "heart",
    country: "PK",
    localName: "dil",
    nativeScript: "دل",
    confidence: "high",
    traditionIds: ["katakat"],
  },
  {
    canonicalId: "kidney",
    country: "PK",
    localName: "gurda",
    nativeScript: "گردہ",
    confidence: "high",
    traditionIds: ["gurda-kaleji-pk", "gurda-kapura", "katakat"],
  },
  {
    canonicalId: "intestines",
    country: "PK",
    localName: "ojhri",
    nativeScript: "اوجھڑی",
    altNames: ["digestive tract"],
    confidence: "high",
    traditionIds: ["ojhri-pk", "katakat"],
  },
  {
    canonicalId: "tendon",
    country: "PK",
    localName: "paya tissues",
    confidence: "high",
    traditionIds: ["nihari-pk"],
  },
  {
    canonicalId: "head_cheek",
    country: "PK",
    localName: "siri",
    nativeScript: "سری",
    confidence: "high",
    traditionIds: ["siri-paya-pk"],
  },
  {
    canonicalId: "bone_marrow",
    country: "PK",
    localName: "maghaz-e-haddi",
    nativeScript: "مغزِ ہڈی",
    confidence: "high",
    traditionIds: ["nihari-pk", "siri-paya-pk"],
  },
  {
    canonicalId: "sweetbreads",
    country: "PK",
    localName: "kapura",
    nativeScript: "کپورا",
    terminologyNote:
      "kapura refers to testicles in most Pakistani culinary contexts. Glandular tissue usage " +
      "also documented. Never assume identical meaning across South Asia.",
    confidence: "high",
    traditionIds: ["gurda-kapura"],
  },
  {
    canonicalId: "testicles",
    country: "PK",
    localName: "kapura",
    nativeScript: "کپورا",
    terminologyNote:
      "In Pakistani restaurant and street-food culture kapura most commonly means testicles. " +
      "One of the world's strongest testicle traditions. Terminology overlaps with sweetbreads " +
      "in some contexts.",
    confidence: "high",
    traditionIds: ["gurda-kapura", "katakat"],
  },
  {
    canonicalId: "brain",
    country: "PK",
    localName: "maghaz",
    nativeScript: "مغز",
    confidence: "high",
    traditionIds: ["katakat"],
  },
];

// ─── Lebanon / Levant (LB) ────────────────────────────────────────────────────
// Note: LB skin, tendon, brain intentionally omitted.

const LB: readonly OffalRegionalName[] = [
  {
    canonicalId: "tongue",
    country: "LB",
    localName: "lisān",
    nativeScript: "لسان",
    confidence: "high",
  },
  {
    canonicalId: "tripe",
    country: "LB",
    localName: "karsha",
    nativeScript: "كرشة",
    confidence: "medium",
  },
  {
    canonicalId: "liver",
    country: "LB",
    localName: "kibdeh",
    nativeScript: "كبدة",
    confidence: "high",
    traditionIds: ["mashawi-levant", "kibdeh-levant"],
  },
  {
    canonicalId: "heart",
    country: "LB",
    localName: "qalb",
    nativeScript: "قلب",
    confidence: "high",
    traditionIds: ["mashawi-levant"],
  },
  {
    canonicalId: "kidney",
    country: "LB",
    localName: "klawi",
    nativeScript: "كلاوي",
    altNames: ["klayeh"],
    confidence: "high",
    traditionIds: ["mashawi-levant"],
  },
  {
    canonicalId: "intestines",
    country: "LB",
    localName: "am'ā'",
    nativeScript: "أمعاء",
    confidence: "medium",
  },
  {
    canonicalId: "head_cheek",
    country: "LB",
    localName: "ra's",
    nativeScript: "رأس",
    altNames: ["khadd (خد)"],
    confidence: "high",
  },
  {
    canonicalId: "bone_marrow",
    country: "LB",
    localName: "nukha'",
    nativeScript: "نخاع",
    confidence: "medium",
  },
  {
    canonicalId: "sweetbreads",
    country: "LB",
    localName: "mukh",
    nativeScript: "مخ",
    confidence: "high",
    traditionIds: ["mashawi-levant"],
  },
  {
    canonicalId: "testicles",
    country: "LB",
    localName: "khusa",
    nativeScript: "خصى",
    altNames: ["khisyan (خصيان)"],
    confidence: "high",
    traditionIds: ["mashawi-levant"],
  },
];

// ─── Saudi Arabia (SA) ───────────────────────────────────────────────────────
// Note: SA skin, tendon, brain intentionally omitted.

const SA: readonly OffalRegionalName[] = [
  {
    canonicalId: "tongue",
    country: "SA",
    localName: "lisān",
    nativeScript: "لسان",
    confidence: "high",
  },
  {
    canonicalId: "tripe",
    country: "SA",
    localName: "karsha",
    nativeScript: "كرشة",
    confidence: "high",
  },
  {
    canonicalId: "liver",
    country: "SA",
    localName: "kabdah",
    nativeScript: "كبدة",
    confidence: "high",
    traditionIds: ["kabdah-jeddawiyah"],
  },
  {
    canonicalId: "heart",
    country: "SA",
    localName: "qalb",
    nativeScript: "قلب",
    confidence: "high",
  },
  {
    canonicalId: "kidney",
    country: "SA",
    localName: "kalawi",
    nativeScript: "كلاوي",
    confidence: "high",
  },
  {
    canonicalId: "intestines",
    country: "SA",
    localName: "masarin",
    nativeScript: "مصارين",
    confidence: "high",
    traditionIds: ["masarin-traditions"],
  },
  {
    canonicalId: "head_cheek",
    country: "SA",
    localName: "ra's",
    nativeScript: "رأس",
    confidence: "high",
  },
  {
    canonicalId: "bone_marrow",
    country: "SA",
    localName: "nukha'",
    nativeScript: "نخاع",
    confidence: "medium",
  },
  {
    canonicalId: "sweetbreads",
    country: "SA",
    localName: "ghudad",
    nativeScript: "غدد",
    confidence: "medium",
  },
  {
    canonicalId: "testicles",
    country: "SA",
    localName: "khusa",
    nativeScript: "خصى",
    confidence: "medium",
  },
];

// ─── Colombia (CO) ────────────────────────────────────────────────────────────

const CO: readonly OffalRegionalName[] = [
  {
    canonicalId: "tongue",
    country: "CO",
    localName: "lengua",
    confidence: "high",
  },
  {
    canonicalId: "tripe",
    country: "CO",
    localName: "mondongo",
    altNames: ["callo"],
    confidence: "high",
    traditionIds: ["mondongo-colombiano"],
  },
  {
    canonicalId: "liver",
    country: "CO",
    localName: "hígado",
    confidence: "high",
    traditionIds: ["fritanga-colombiana"],
  },
  {
    canonicalId: "heart",
    country: "CO",
    localName: "corazón",
    confidence: "medium",
    traditionIds: ["fritanga-colombiana"],
  },
  {
    canonicalId: "kidney",
    country: "CO",
    localName: "riñón",
    confidence: "medium",
    traditionIds: ["fritanga-colombiana"],
  },
  {
    canonicalId: "intestines",
    country: "CO",
    localName: "chunchullo",
    confidence: "high",
    traditionIds: ["chunchullo-asado", "fritanga-colombiana"],
  },
  {
    canonicalId: "skin",
    country: "CO",
    localName: "cuero",
    confidence: "medium",
  },
  {
    canonicalId: "tendon",
    country: "CO",
    localName: "tendón",
    confidence: "medium",
  },
  {
    canonicalId: "head_cheek",
    country: "CO",
    localName: "cabeza",
    altNames: ["cachete"],
    confidence: "high",
  },
  {
    canonicalId: "bone_marrow",
    country: "CO",
    localName: "tuétano",
    confidence: "medium",
    traditionIds: ["changua-tuetano"],
  },
  {
    canonicalId: "sweetbreads",
    country: "CO",
    localName: "mollejas",
    confidence: "high",
    traditionIds: ["fritanga-colombiana"],
  },
  {
    canonicalId: "testicles",
    country: "CO",
    localName: "criadillas",
    confidence: "medium",
  },
  {
    canonicalId: "brain",
    country: "CO",
    localName: "sesos",
    confidence: "medium",
    traditionIds: ["fritanga-colombiana"],
  },
];

// ─── South Africa (ZA) ───────────────────────────────────────────────────────

const ZA: readonly OffalRegionalName[] = [
  {
    canonicalId: "tongue",
    country: "ZA",
    localName: "ox tongue",
    altNames: ["tongue"],
    confidence: "high",
  },
  {
    canonicalId: "tripe",
    country: "ZA",
    localName: "mogodu",
    altNames: ["tripe"],
    confidence: "high",
    traditionIds: ["mala-mogodu"],
  },
  {
    canonicalId: "liver",
    country: "ZA",
    localName: "beef liver",
    altNames: ["liver"],
    confidence: "high",
    traditionIds: ["skilpadjies", "sa-braai-offal"],
  },
  {
    canonicalId: "heart",
    country: "ZA",
    localName: "heart",
    confidence: "high",
    traditionIds: ["sa-braai-offal"],
  },
  {
    canonicalId: "kidney",
    country: "ZA",
    localName: "kidney",
    confidence: "high",
    traditionIds: ["cape-malay-offal"],
  },
  {
    canonicalId: "intestines",
    country: "ZA",
    localName: "intestines",
    altNames: ["ulusu"],
    confidence: "high",
    traditionIds: ["sa-braai-offal"],
  },
  {
    canonicalId: "skin",
    country: "ZA",
    localName: "skin",
    confidence: "medium",
  },
  {
    canonicalId: "tendon",
    country: "ZA",
    localName: "tendon",
    confidence: "medium",
  },
  {
    canonicalId: "head_cheek",
    country: "ZA",
    localName: "head meat",
    confidence: "high",
  },
  {
    canonicalId: "bone_marrow",
    country: "ZA",
    localName: "bone marrow",
    confidence: "medium",
  },
  {
    canonicalId: "sweetbreads",
    country: "ZA",
    localName: "sweetbreads",
    confidence: "medium",
    traditionIds: ["sa-braai-offal"],
  },
  {
    canonicalId: "testicles",
    country: "ZA",
    localName: "testicles",
    confidence: "medium",
  },
  {
    canonicalId: "brain",
    country: "ZA",
    localName: "brain",
    altNames: ["brain curry"],
    confidence: "medium",
  },
];

// ─── Poland (PL) ─────────────────────────────────────────────────────────────
// Note: PL skin, tendon, testicles intentionally omitted — low confidence.

const PL: readonly OffalRegionalName[] = [
  {
    canonicalId: "tongue",
    country: "PL",
    localName: "ozór wołowy",
    confidence: "high",
    traditionIds: ["ozor-w-chrzanie"],
  },
  {
    canonicalId: "tripe",
    country: "PL",
    localName: "flaki wołowe",
    altNames: ["flaki"],
    confidence: "high",
    traditionIds: ["flaki"],
  },
  {
    canonicalId: "liver",
    country: "PL",
    localName: "wątróbka wołowa",
    confidence: "high",
    traditionIds: ["watrobka-z-cebula"],
  },
  {
    canonicalId: "heart",
    country: "PL",
    localName: "serce wołowe",
    confidence: "medium",
  },
  {
    canonicalId: "kidney",
    country: "PL",
    localName: "nerki wołowe",
    confidence: "high",
  },
  {
    canonicalId: "intestines",
    country: "PL",
    localName: "jelita",
    confidence: "medium",
  },
  {
    canonicalId: "head_cheek",
    country: "PL",
    localName: "głowizna",
    altNames: ["policzki wołowe"],
    confidence: "high",
  },
  {
    canonicalId: "bone_marrow",
    country: "PL",
    localName: "szpik",
    confidence: "high",
    traditionIds: ["rosol-ze-szpikiem"],
  },
  {
    canonicalId: "sweetbreads",
    country: "PL",
    localName: "grasica",
    confidence: "medium",
  },
  {
    canonicalId: "brain",
    country: "PL",
    localName: "móżdżek wołowy",
    confidence: "high",
    traditionIds: ["mozdzek-z-jajkiem"],
  },
];

// ─── Czech Republic (CZ) ─────────────────────────────────────────────────────
// Note: CZ skin, tendon, testicles intentionally omitted — low confidence.

const CZ: readonly OffalRegionalName[] = [
  {
    canonicalId: "tongue",
    country: "CZ",
    localName: "hovězí jazyk",
    confidence: "high",
    traditionIds: ["hovezi-jazyk-kren"],
  },
  {
    canonicalId: "tripe",
    country: "CZ",
    localName: "dršťky",
    confidence: "high",
    traditionIds: ["drstkova-polevka"],
  },
  {
    canonicalId: "liver",
    country: "CZ",
    localName: "hovězí játra",
    confidence: "high",
  },
  {
    canonicalId: "heart",
    country: "CZ",
    localName: "hovězí srdce",
    confidence: "medium",
  },
  {
    canonicalId: "kidney",
    country: "CZ",
    localName: "hovězí ledviny",
    confidence: "high",
  },
  {
    canonicalId: "intestines",
    country: "CZ",
    localName: "střeva",
    confidence: "medium",
  },
  {
    canonicalId: "head_cheek",
    country: "CZ",
    localName: "hovězí líčka",
    altNames: ["hlava"],
    confidence: "high",
  },
  {
    canonicalId: "bone_marrow",
    country: "CZ",
    localName: "morek",
    confidence: "high",
    traditionIds: ["hovezi-vyvar-morekem"],
  },
  {
    canonicalId: "sweetbreads",
    country: "CZ",
    localName: "brzlík",
    confidence: "medium",
  },
  {
    canonicalId: "brain",
    country: "CZ",
    localName: "hovězí mozeček",
    confidence: "high",
    traditionIds: ["mozecek-s-vejci"],
  },
];

// ─── Russia (RU) ─────────────────────────────────────────────────────────────
// Note: RU testicles intentionally omitted — low confidence.

const RU: readonly OffalRegionalName[] = [
  {
    canonicalId: "tongue",
    country: "RU",
    localName: "govyazhiy yazyk",
    nativeScript: "говяжий язык",
    confidence: "high",
    traditionIds: ["zalivnoy-yazyk"],
  },
  {
    canonicalId: "tripe",
    country: "RU",
    localName: "rubets",
    nativeScript: "рубец",
    confidence: "medium",
  },
  {
    canonicalId: "liver",
    country: "RU",
    localName: "pechen'",
    nativeScript: "печень",
    confidence: "high",
  },
  {
    canonicalId: "heart",
    country: "RU",
    localName: "serdtse",
    nativeScript: "сердце",
    confidence: "high",
  },
  {
    canonicalId: "kidney",
    country: "RU",
    localName: "pochki",
    nativeScript: "почки",
    confidence: "high",
    traditionIds: ["pochki-v-smetane"],
  },
  {
    canonicalId: "intestines",
    country: "RU",
    localName: "kishki",
    nativeScript: "кишки",
    confidence: "medium",
  },
  {
    canonicalId: "skin",
    country: "RU",
    localName: "shkura",
    nativeScript: "шкура",
    confidence: "medium",
  },
  {
    canonicalId: "tendon",
    country: "RU",
    localName: "sukhozhiliya",
    nativeScript: "сухожилия",
    confidence: "high",
    traditionIds: ["kholodets-ru"],
  },
  {
    canonicalId: "head_cheek",
    country: "RU",
    localName: "golova",
    nativeScript: "голова",
    altNames: ["shchyoki (щёки)"],
    confidence: "high",
    traditionIds: ["kholodets-ru"],
  },
  {
    canonicalId: "bone_marrow",
    country: "RU",
    localName: "kostny mozg",
    nativeScript: "костный мозг",
    confidence: "high",
    traditionIds: ["russian-marrow-broth"],
  },
  {
    canonicalId: "sweetbreads",
    country: "RU",
    localName: "zobnaya zheleza",
    nativeScript: "зобная железа",
    confidence: "medium",
  },
  {
    canonicalId: "brain",
    country: "RU",
    localName: "mozgi",
    nativeScript: "мозги",
    confidence: "high",
    traditionIds: ["mozgi-traditions"],
  },
];

// ─── Combined export ──────────────────────────────────────────────────────────

export const offalRegionalNames: readonly OffalRegionalName[] = [
  ...BRAIN,
  ...MX,
  ...CN,
  ...KR,
  ...FR,
  ...IT,
  ...ES,
  ...NG,
  ...PH,
  ...TR,
  ...ET,
  ...GB,
  ...VN,
  ...MA,
  ...PE,
  ...JP,
  ...AR,
  ...CL,
  ...UY,
  ...DE,
  ...HU,
  ...IN,
  ...GR,
  ...ID,
  ...IR,
  ...EG,
  ...BR,
  ...PK,
  ...LB,
  ...SA,
  ...CO,
  ...ZA,
  ...PL,
  ...CZ,
  ...RU,
];
