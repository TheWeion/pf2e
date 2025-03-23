const ARMOR_CATEGORIES = ["unarmored", "light", "medium", "heavy", "light-barding", "heavy-barding"] as const;
const ARMOR_GROUPS = ["chain", "cloth", "composite", "leather", "plate", "skeletal", "wood"] as const;
const ARMOR_PROPERTY_RUNE_TYPES = new Set([
    "acidResistant",
    "advancing",
    "aimAiding",
    "antimagic",
    "assisting",
    "bitter",
    "coldResistant",
    "deathless",
    "electricityResistant",
    "energyAdaptive",
    "ethereal",
    "fireResistant",
    "fortification",
    "gliding",
    "greaterAcidResistant",
    "greaterAdvancing",
    "greaterColdResistant",
    "greaterDread",
    "greaterElectricityResistant",
    "greaterFireResistant",
    "greaterFortification",
    "greaterInvisibility",
    "greaterQuenching",
    "greaterReady",
    "greaterShadow",
    "greaterSlick",
    "greaterStanching",
    "greaterSwallowSpike",
    "greaterWinged",
    "immovable",
    "implacable",
    "invisibility",
    "lesserDread",
    "magnetizing",
    "majorQuenching",
    "majorShadow",
    "majorSlick",
    "majorStanching",
    "majorSwallowSpike",
    "malleable",
    "misleading",
    "moderateDread",
    "portable",
    "quenching",
    "raiment",
    "ready",
    "rockBraced",
    "shadow",
    "sinisterKnight",
    "sizeChanging",
    "slick",
    "soaring",
    "stanching",
    "swallowSpike",
    "trueQuenching",
    "trueStanching",
    "winged",
] as const);

export { ARMOR_CATEGORIES, ARMOR_GROUPS, ARMOR_PROPERTY_RUNE_TYPES };
