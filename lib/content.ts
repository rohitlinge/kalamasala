export const brand = {
  house: "Lata Special",
  product: "Kala Massala",
  city: "Nagpur",
  state: "Maharashtra",
  deliveryDays: 6,
} as const;

export const packs = [
  {
    id: "250",
    weight: "250 g",
    price: 200,
    label: "The starter packet",
    note: "Masala only · transport ₹20",
    featured: false,
    image: "/images/product/200g.png",
  },
  {
    id: "500",
    weight: "500 g",
    price: 400,
    label: "The family packet",
    note: "Masala only · transport ₹20",
    featured: true,
    image: "/images/product/500g product image.png",
  },
  {
    id: "1000",
    weight: "1 kg",
    price: 800,
    label: "The pantry tin",
    note: "Masala only · transport ₹20",
    featured: false,
    image: "/images/product/1kg product image.png",
  },
  {
    id: "2000",
    weight: "2 kg",
    price: 1600,
    label: "The stock tin",
    note: "Masala only · transport ₹20",
    featured: false,
    image: "/images/product/2kg msala.png",
  },
] as const;

export type PackId = (typeof packs)[number]["id"];

export const productPhotos = {
  hero: "/images/product/hero.jpg",
  pack250: "/images/product/200g.png",
  pack500: "/images/product/500g product image.png",
  pack1kg: "/images/product/1kg product image.png",
  pack2kg: "/images/product/2kg msala.png",
  packs: "/images/product/packs.jpg",
  pack: "/images/product/pack.jpg",
  openBag: "/images/product/open-bag.jpg",
  plate: "/images/product/plate.jpg",
  scale: "/images/product/scale-500g.jpg",
  tin: "/images/product/tin.jpg",
  texture: "/images/product/texture.jpg",
  handPacks: "/images/product/hand-packs.jpg",
  process: "/images/product/A small process.png",
  inside: "/images/product/what inside masala..png",
  oil: "/images/product/Masala is an oil.webp",
} as const;

export const gallery = [
  { src: productPhotos.pack250, alt: "Lata Special Kala Massala 250 g packet" },
  { src: productPhotos.pack500, alt: "Lata Special Kala Massala 500 g packet" },
  { src: productPhotos.pack1kg, alt: "Lata Special Kala Massala 1 kg packet" },
  { src: productPhotos.pack2kg, alt: "Lata Special Kala Massala 2 kg packet" },
  { src: productPhotos.inside, alt: "What is inside Lata Special Kala Massala" },
  { src: productPhotos.process, alt: "A small process of making homemade Kala Massala" },
  { src: productPhotos.oil, alt: "Homemade Kala Massala with its natural oils" },
  { src: productPhotos.packs, alt: "Lata Special Kala Massala packets" },
  { src: productPhotos.pack, alt: "A packet of homemade Kala Massala" },
  { src: productPhotos.openBag, alt: "Freshly packed Kala Massala in an open bag" },
  { src: productPhotos.plate, alt: "Kala Massala on a plate" },
  { src: productPhotos.texture, alt: "Close-up of homemade Kala Massala" },
  { src: productPhotos.tin, alt: "Kala Massala packed from the kitchen tin" },
  { src: productPhotos.scale, alt: "500 g packet on the kitchen scale" },
  { src: productPhotos.handPacks, alt: "Fresh packets of Lata Special Kala Massala" },
] as const;

export const ingredients = [
  {
    name: "धनिया",
    note: "The warm, citrus body of the blend.",
    image: "/images/ingredients/dhaniya.jpg",
    alt: "धनिया",
  },
  {
    name: "सूखा नारियल (खोबरा)",
    note: "Slow-toasted until nutty and dark.",
    image: "/images/ingredients/sukha-nariyal.jpg",
    alt: "सूखा नारियल खोबरा",
  },
  {
    name: "काली मिर्च",
    note: "Heat that lingers, never shouts.",
    image: "/images/ingredients/kali-mirch.jpg",
    alt: "काली मिर्च",
  },
  {
    name: "लौंग",
    note: "The festive spine of the roast.",
    image: "/images/ingredients/laung.jpg",
    alt: "लौंग",
  },
  {
    name: "दगड़ फूल",
    note: "The forest note — dagad phool.",
    image: "/images/ingredients/dagad-phool.jpg",
    alt: "दगड़ फूल",
  },
  {
    name: "तेज पत्ता",
    note: "A green, tea-like lift.",
    image: "/images/ingredients/tej-patta.jpg",
    alt: "तेज पत्ता",
  },
  {
    name: "करन फूल",
    note: "A single, careful pinch.",
    image: "/images/ingredients/karan-phool.jpg",
    alt: "करन फूल",
  },
  {
    name: "जायफल",
    note: "Warmth at the finish.",
    image: "/images/ingredients/jaiphal.jpg",
    alt: "जायफल",
  },
  {
    name: "जावित्री",
    note: "A fine, sweet perfume.",
    image: "/images/ingredients/javitri.jpg",
    alt: "जावित्री",
  },
  {
    name: "बड़ी इलायची",
    note: "Deep, smoky flavour.",
    image: "/images/ingredients/badi-elaichi.jpg",
    alt: "बड़ी इलायची",
  },
  {
    name: "इलायची",
    note: "The last sweet breath.",
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

export const owner = {
  name: "Lata Linge",
  photo: "/images/owner/Lata Linge.jpeg",
  city: "Nagpur",
  bio: "Lata Linge has been roasting and grinding homemade Kala Massala in her Nagpur kitchen for about 9 years. More than 100 families already cook with her packets. She is now selling the same kitchen masala online so neighbours across Nagpur can order from home.",
  bioHi:
    "लता लिंगे करीब 9 साल से अपने नागपुर के रसोईघर में काला मसाला भूनती और पीसती हैं। 100 से ज़्यादा घर पहले से इनका मसाला लेते हैं। अब वही घरेलू मसाला ऑनलाइन मिल रहा है।",
} as const;

export const reviews = [
  {
    name: "सुनीता देशमुख",
    area: "धरोमपेठ, नागपुर",
    text: "उसाळ में एक चम्मच डालती हूँ — घर जैसा स्वाद आता है। बाज़ार के मसाले में यह खुशबू कभी नहीं मिली।",
  },
  {
    name: "प्रिया कावड़े",
    area: "साधकर नगर",
    text: "नारियल और तिल की महक साफ लगती है। रंग भी सच्चा काला है, कोई रसायन नहीं। बच्चों को दाल भी पसंद आने लगी।",
  },
  {
    name: "वर्षा पाटील",
    area: "महाल",
    text: "करीब नौ साल से लता ताई का मसाला ले रही हूँ। अब घर बैठे पैकेट आ जाता है। भरोसा पूरा है।",
  },
  {
    name: "अंजली जोशी",
    area: "रामदासपेठ",
    text: "भाजी और मटन दोनों में बढ़िया लगता है। एक बार पकाया तो पड़ोस की बहनों ने भी पूछा — कहाँ से लिया?",
  },
];
