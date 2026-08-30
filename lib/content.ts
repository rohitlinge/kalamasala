export const brand = {
  house: "Lata Special",
  product: "Kala Massala",
  city: "Nagpur",
  state: "Maharashtra",
  deliveryDays: 6,
} as const;

export const packs = [
  {
    id: "500",
    weight: "500 g",
    price: 500,
    label: "The family packet",
    note: "Masala only · transport extra",
    featured: true,
  },
  {
    id: "1000",
    weight: "1 kg",
    price: 1000,
    label: "The pantry tin",
    note: "Masala only · transport extra",
    featured: false,
  },
  {
    id: "2000",
    weight: "2 kg",
    price: 2000,
    label: "The stock tin",
    note: "Masala only · transport extra",
    featured: false,
  },
] as const;

export type PackId = (typeof packs)[number]["id"];

export const ingredients = [
  {
    name: "धनिया",
    note: "मिश्रण की गर्म, नींबू जैसी देह",
    image: "/images/ingredients/dhaniya.jpg",
    alt: "धनिया",
  },
  {
    name: "सूखा नारियल (खोबरा)",
    note: "धीरे भूनकर, जब तक गूदा और गहरा न हो",
    image: "/images/ingredients/sukha-nariyal.jpg",
    alt: "सूखा नारियल खोबरा",
  },
  {
    name: "काली मिर्च",
    note: "गर्मी जो ठहरती है, चिल्लाई नहीं",
    image: "/images/ingredients/kali-mirch.jpg",
    alt: "काली मिर्च",
  },
  {
    name: "लौंग",
    note: "त्योहार की रीढ़",
    image: "/images/ingredients/laung.jpg",
    alt: "लौंग",
  },
  {
    name: "दगड़ फूल",
    note: "जंगल का सुर",
    image: "/images/ingredients/dagad-phool.jpg",
    alt: "दगड़ फूल",
  },
  {
    name: "तेज पत्ता",
    note: "हरी, चाय जैसी उठान",
    image: "/images/ingredients/tej-patta.jpg",
    alt: "तेज पत्ता",
  },
  {
    name: "करन फूल",
    note: "एक सावधानी भरी चुटकी",
    image: "/images/ingredients/karan-phool.jpg",
    alt: "करन फूल",
  },
  {
    name: "जायफल",
    note: "अंत में गर्माहट",
    image: "/images/ingredients/jaiphal.jpg",
    alt: "जायफल",
  },
  {
    name: "जावित्री",
    note: "महीन, मीठी खुशबू",
    image: "/images/ingredients/javitri.jpg",
    alt: "जावित्री",
  },
  {
    name: "बड़ी इलायची",
    note: "गहरा, धुआँ-सा स्वाद",
    image: "/images/ingredients/badi-elaichi.jpg",
    alt: "बड़ी इलायची",
  },
  {
    name: "इलायची",
    note: "मीठी सुगंध का अंतिम स्पर्श",
    image: "/images/ingredients/elaichi.jpg",
    alt: "इलायची",
  },
];

export const processSteps = [
  {
    n: "01",
    title: "Hand-pick",
    body: "Whole spices only. Each lot is smelled and sorted on the kitchen table — pale coriander, hollow pepper, and dusty coconut never enter the roast.",
  },
  {
    n: "02",
    title: "Sun-dry",
    body: "A short rest in shade-then-sun so moisture leaves without bleaching the oils. Damp spice is the first path to spoilage; we refuse it here.",
  },
  {
    n: "03",
    title: "Roast apart",
    body: "Every spice meets the kadai on its own clock. Coconut last, cumin brief, coriander until the kitchen turns sweet. This is the difference you can taste.",
  },
  {
    n: "04",
    title: "Cool fully",
    body: "Hot spice ground too soon turns bitter and clumps. We wait. Oils settle. The colour goes from brown to the true kala — a deep, honest black-brown.",
  },
  {
    n: "05",
    title: "Small-batch grind",
    body: "Ground in modest lots so the mill never heats the masala. Fine, not dusty. You should still catch a fleck of sesame if you look.",
  },
  {
    n: "06",
    title: "Rest, blend, pack",
    body: "The family proportion — Lata’s measure — is folded in, rested overnight, and packed in airtight packets the next morning. No warehouse wait.",
  },
];

export const comparisons = [
  {
    us: "Each spice roasted separately, on a low flame",
    them: "One-pot factory roast, high heat, flat flavour",
  },
  {
    us: "Packed within a day of grinding",
    them: "Often months on a distributor’s shelf",
  },
  {
    us: "No starch, no anti-caking powder, no dye",
    them: "Fillers to keep the colour ‘always dark’",
  },
  {
    us: "Whole spices you could name by scent",
    them: "Mixed grades and leftover lots",
  },
  {
    us: "Oil locked in by a patient roast",
    them: "Pre-ground, tired, and sharp with heat",
  },
  {
    us: "A Nagpur kitchen recipe, measured by hand",
    them: "A generic ‘Maharashtrian mix’ for every city",
  },
];

export const uses = [
  {
    title: "Usal, misal & bhaji",
    body: "One level teaspoon for two servings. Bloom in hot oil at the end, then fold through. Do not boil hard after it goes in — the perfume is the point.",
  },
  {
    title: "Gravy & Sunday mutton",
    body: "Toast a spoon in ghee with onion, then add tomato. The kala colour should stain the gravy, not sit as dust on top.",
  },
  {
    title: "Vegetables & raita",
    body: "A pinch on roasted bhindi, potato, or in thick dahi. It is a finishing spice as much as a cooking spice.",
  },
  {
    title: "Marinade",
    body: "With curd, ginger-garlic, and salt. Rest the meat an hour. The coconut and sesame give body that factory masala never does.",
  },
];

export const storageRules = [
  {
    title: "Airtight, always",
    body: "Keep the packet sealed after every use. Air is how aroma leaves and how moisture — and mould — arrives.",
  },
  {
    title: "Cool, dry, dark",
    body: "A cupboard away from the stove and the window. Heat cooks the oils twice; light fades the colour you paid for.",
  },
  {
    title: "A dry spoon only",
    body: "Never dip a wet ladle. One drop of water is enough to cake the packet and spoil the batch.",
  },
  {
    title: "Do not refrigerate",
    body: "Cold packets sweat when opened. That condensation is spoilage in slow motion. Room temperature is kinder.",
  },
  {
    title: "Finish in 90 days",
    body: "Once opened, use within three months. The unopened packet keeps its character longer if the seal stays true.",
  },
  {
    title: "Trust your nose",
    body: "If it smells flat, sour, or of damp wood — stop. Homemade masala has no preservative to hide a fault. We would rather you discard than cook with it.",
  },
];
