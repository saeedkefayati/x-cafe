import type {
  FlavorNote,
  Ingredient,
  MediaAsset,
  Product,
  ProductOption,
} from "@/types/domain";

const image = (src: string, alt: string): MediaAsset => ({
  src,
  alt,
  width: 1122,
  height: 1402,
});

const option = (
  id: string,
  name: string,
  value: string,
  priceDelta: number,
  sortOrder: number,
  isDefault = false,
): ProductOption => ({
  id,
  name,
  value,
  priceDelta,
  sortOrder,
  default: isDefault,
  availability: "available",
});

const regularLarge = [
  option("size-regular", "معمولی", "regular", 0, 1, true),
  option("size-large", "بزرگ", "large", 450000, 2),
];

const singleDouble = [
  option("size-single", "تک‌شات", "single", 0, 1, true),
  option("size-double", "دبل‌شات", "double", 550000, 2),
];

const hotOnly = [option("temp-hot", "گرم", "hot", 0, 1, true)];
const icedOnly = [option("temp-iced", "سرد", "iced", 0, 1, true)];

const milkOptions = [
  option("milk-whole", "شیر کامل", "whole", 0, 1, true),
  option("milk-low-fat", "شیر کم‌چرب", "low-fat", 0, 2),
  option("milk-oat", "شیر جو دوسر", "oat", 350000, 3),
];

const sweetnessOptions = [
  option("sweet-regular", "شیرینی معمولی", "regular", 0, 1, true),
  option("sweet-less", "کم‌شیرین", "less", 0, 2),
  option("sweet-none", "بدون شیرینی", "none", 0, 3),
];

const coffeeExtras = [
  option("extra-shot", "شات اضافهٔ اسپرسو", "extra-shot", 550000, 1),
];

const flavoredCoffeeExtras = [
  ...coffeeExtras,
  option("extra-caramel", "کارامل اضافه", "extra-caramel", 300000, 2),
];

interface ProductSeed {
  id: string;
  name: string;
  shortName?: string;
  categoryId: "hot-coffee" | "cold-coffee" | "cakes";
  shortDescription: string;
  fullDescription: string;
  story?: string;
  ingredients: Ingredient[];
  allergens?: string[];
  flavorNotes: FlavorNote[];
  dietaryTags?: string[];
  basePrice: number;
  pricingStatus?: Product["pricingStatus"];
  featured?: boolean;
  bestSeller?: boolean;
  sizes?: ProductOption[];
  temperatures?: ProductOption[];
  milkOptions?: ProductOption[];
  sweetnessOptions?: ProductOption[];
  extras?: ProductOption[];
}

const createProduct = (seed: ProductSeed): Product => {
  const media = image(
    `/images/products/product-${seed.id}-card-v1.png`,
    `${seed.shortName ?? seed.name} با پس‌زمینه کرم کاغذی و سطح سنگ‌آهک روشن`,
  );

  return {
    id: seed.id,
    slug: seed.id,
    name: seed.name,
    shortName: seed.shortName,
    categoryId: seed.categoryId,
    status: "available",
    availability: "available",
    shortDescription: seed.shortDescription,
    fullDescription: seed.fullDescription,
    story: seed.story,
    ingredients: seed.ingredients,
    allergens: seed.allergens ?? [],
    flavorNotes: seed.flavorNotes,
    dietaryTags: seed.dietaryTags ?? [],
    basePrice: seed.basePrice,
    currency: "IRR",
    pricingStatus: seed.pricingStatus ?? "mock",
    featured: seed.featured ?? false,
    bestSeller: seed.bestSeller ?? false,
    cardImage: media,
    heroImage: media,
    gallery: [],
    detailAssets: [],
    sizes: seed.sizes ?? [],
    temperatures: seed.temperatures ?? [],
    milkOptions: seed.milkOptions ?? [],
    sweetnessOptions: seed.sweetnessOptions ?? [],
    extras: seed.extras ?? [],
    seoTitle: `${seed.name} | منوی ایکس کافه`,
    seoDescription: seed.shortDescription,
  };
};

export const catalogProducts: Product[] = [
  createProduct({
    id: "espresso",
    name: "Espresso",
    shortName: "اسپرسو",
    categoryId: "hot-coffee",
    shortDescription: "عصاره‌ای فشرده با عطر قوی و پایان شکلاتی.",
    fullDescription:
      "اسپرسوی تازه با کرمای یکدست؛ انتخابی کوتاه و خالص برای چشیدن شخصیت واقعی دانه.",
    ingredients: [{ id: "espresso-beans", name: "قهوه اسپرسو" }],
    flavorNotes: [
      { label: "شکلات تلخ", type: "taste", intensity: 4 },
      { label: "آجیلی", type: "aroma", intensity: 3 },
      { label: "غلیظ", type: "texture", intensity: 5 },
    ],
    basePrice: 2100000,
    pricingStatus: "source-matched",
    featured: true,
    sizes: singleDouble,
    temperatures: hotOnly,
  }),
  createProduct({
    id: "americano",
    name: "Americano",
    shortName: "آمریکانو",
    categoryId: "hot-coffee",
    shortDescription: "اسپرسو و آب داغ؛ شفاف، سبک و خوش‌عطر.",
    fullDescription:
      "ترکیب اسپرسوی تازه و آب داغ با بدنه‌ای سبک‌تر و عطری ماندگار برای نوشیدن آرام‌تر.",
    ingredients: [
      { id: "espresso", name: "اسپرسو" },
      { id: "hot-water", name: "آب تصفیه‌شده" },
    ],
    flavorNotes: [
      { label: "کاکائویی", type: "taste", intensity: 3 },
      { label: "شفاف", type: "texture", intensity: 2 },
      { label: "برشته", type: "aroma", intensity: 3 },
    ],
    basePrice: 2100000,
    pricingStatus: "source-matched",
    sizes: regularLarge,
    temperatures: hotOnly,
    extras: coffeeExtras,
  }),
  createProduct({
    id: "cappuccino",
    name: "Cappuccino",
    shortName: "کاپوچینو",
    categoryId: "hot-coffee",
    shortDescription: "اسپرسو، شیر بخاردیده و فوم مخملی متعادل.",
    fullDescription:
      "نسبتی کلاسیک از اسپرسو و شیر با فوم ریزبافت که تلخی قهوه و شیرینی طبیعی شیر را متعادل می‌کند.",
    ingredients: [
      { id: "espresso", name: "اسپرسو" },
      { id: "steamed-milk", name: "شیر بخاردیده", allergen: "لبنیات" },
    ],
    allergens: ["لبنیات"],
    flavorNotes: [
      { label: "مخملی", type: "texture", intensity: 4 },
      { label: "شکلات شیری", type: "taste", intensity: 3 },
      { label: "گرم", type: "aroma", intensity: 3 },
    ],
    basePrice: 2900000,
    pricingStatus: "source-matched",
    featured: true,
    bestSeller: true,
    sizes: regularLarge,
    temperatures: hotOnly,
    milkOptions,
    extras: coffeeExtras,
  }),
  createProduct({
    id: "cafe-latte",
    name: "Café Latte",
    shortName: "کافه لاته",
    categoryId: "hot-coffee",
    shortDescription: "اسپرسوی دوبل با شیر گرم و بافتی نرم و آرام.",
    fullDescription:
      "لاته‌ای لطیف با شیر بخاردیده و لایه‌ای نازک از میکروفوم؛ مناسب برای طعمی نرم‌تر و طولانی‌تر.",
    ingredients: [
      { id: "double-espresso", name: "اسپرسوی دوبل" },
      { id: "steamed-milk", name: "شیر بخاردیده", allergen: "لبنیات" },
    ],
    allergens: ["لبنیات"],
    flavorNotes: [
      { label: "خامه‌ای", type: "texture", intensity: 4 },
      { label: "کارامل ملایم", type: "taste", intensity: 2 },
      { label: "شیرین طبیعی", type: "taste", intensity: 2 },
    ],
    basePrice: 2900000,
    pricingStatus: "source-matched",
    bestSeller: true,
    sizes: regularLarge,
    temperatures: hotOnly,
    milkOptions,
    extras: coffeeExtras,
  }),
  createProduct({
    id: "flat-white",
    name: "Flat White",
    shortName: "فلت وایت",
    categoryId: "hot-coffee",
    shortDescription: "اسپرسوی دوبل و میکروفوم نازک با طعم قهوه برجسته.",
    fullDescription:
      "نوشیدنی‌ای کوچک‌تر و قهوه‌محورتر از لاته، با بافت یکدست شیر و پایان قدرتمند اسپرسو.",
    ingredients: [
      { id: "double-espresso", name: "اسپرسوی دوبل" },
      { id: "microfoam", name: "میکروفوم شیر", allergen: "لبنیات" },
    ],
    allergens: ["لبنیات"],
    flavorNotes: [
      { label: "قهوه‌محور", type: "taste", intensity: 4 },
      { label: "ابریشمی", type: "texture", intensity: 4 },
      { label: "آجیلی", type: "aroma", intensity: 3 },
    ],
    basePrice: 2900000,
    pricingStatus: "source-matched",
    sizes: [regularLarge[0]],
    temperatures: hotOnly,
    milkOptions,
    extras: coffeeExtras,
  }),
  createProduct({
    id: "iced-americano",
    name: "Iced Americano",
    shortName: "آیس آمریکانو",
    categoryId: "cold-coffee",
    shortDescription: "اسپرسوی دوبل، آب سرد و یخ؛ شفاف و پرانرژی.",
    fullDescription:
      "اسپرسوی تازه روی آب سرد و یخ با تلخی تمیز و عطری روشن؛ ساده و بدون افزودنی.",
    ingredients: [
      { id: "double-espresso", name: "اسپرسوی دوبل" },
      { id: "cold-water", name: "آب تصفیه‌شده" },
      { id: "ice", name: "یخ" },
    ],
    flavorNotes: [
      { label: "تمیز", type: "texture", intensity: 2 },
      { label: "برشته", type: "aroma", intensity: 4 },
      { label: "تلخی متعادل", type: "taste", intensity: 3 },
    ],
    basePrice: 2100000,
    pricingStatus: "source-matched",
    sizes: regularLarge,
    temperatures: icedOnly,
    extras: coffeeExtras,
  }),
  createProduct({
    id: "iced-latte",
    name: "Iced Latte",
    shortName: "آیس لاته",
    categoryId: "cold-coffee",
    shortDescription: "اسپرسوی دوبل، شیر سرد و یخ با بافتی نرم.",
    fullDescription:
      "لاته‌ای خنک و متعادل با لایه‌های طبیعی شیر و اسپرسو؛ نرم، ساده و روزمره.",
    ingredients: [
      { id: "double-espresso", name: "اسپرسوی دوبل" },
      { id: "cold-milk", name: "شیر سرد", allergen: "لبنیات" },
      { id: "ice", name: "یخ" },
    ],
    allergens: ["لبنیات"],
    flavorNotes: [
      { label: "نرم", type: "texture", intensity: 4 },
      { label: "کاکائویی", type: "taste", intensity: 2 },
      { label: "خنک", type: "aroma", intensity: 2 },
    ],
    basePrice: 2900000,
    pricingStatus: "source-matched",
    bestSeller: true,
    sizes: regularLarge,
    temperatures: icedOnly,
    milkOptions,
    extras: coffeeExtras,
  }),
  createProduct({
    id: "iced-caramel-latte",
    name: "Iced Caramel Latte",
    shortName: "آیس کارامل لاته",
    categoryId: "cold-coffee",
    shortDescription: "اسپرسوی دوبل، شیر سرد، یخ و کارامل متعادل.",
    fullDescription:
      "یک لاتهٔ سرد و لایه‌ای که شیرینی کارامل را کنترل می‌کند تا طعم اسپرسو همچنان واضح بماند.",
    story: "اولین محصول تصویری مجموعه و معیار سبک عکاسی منوی ایکس کافه.",
    ingredients: [
      { id: "double-espresso", name: "اسپرسوی دوبل" },
      { id: "cold-milk", name: "شیر سرد", allergen: "لبنیات" },
      { id: "caramel", name: "سس کارامل" },
      { id: "ice", name: "یخ" },
    ],
    allergens: ["لبنیات"],
    flavorNotes: [
      { label: "کاراملی", type: "taste", intensity: 4 },
      { label: "خامه‌ای", type: "texture", intensity: 4 },
      { label: "اسپرسوی متعادل", type: "aroma", intensity: 3 },
    ],
    basePrice: 2450000,
    featured: true,
    bestSeller: true,
    sizes: regularLarge,
    temperatures: icedOnly,
    milkOptions,
    sweetnessOptions,
    extras: flavoredCoffeeExtras,
  }),
  createProduct({
    id: "cold-brew",
    name: "Cold Brew",
    shortName: "کلد برو",
    categoryId: "cold-coffee",
    shortDescription: "عصاره‌گیری طولانی و سرد با طعمی نرم و کم‌اسید.",
    fullDescription:
      "قهوه‌ای که ساعت‌ها در دمای پایین عصاره‌گیری می‌شود تا شیرینی طبیعی و بافتی شفاف پیدا کند.",
    ingredients: [
      { id: "cold-brew-coffee", name: "عصاره قهوه سرد" },
      { id: "ice", name: "یخ" },
    ],
    flavorNotes: [
      { label: "شکلاتی", type: "taste", intensity: 3 },
      { label: "میوهٔ خشک", type: "aroma", intensity: 2 },
      { label: "صاف", type: "texture", intensity: 4 },
    ],
    basePrice: 2250000,
    featured: true,
    sizes: regularLarge,
    temperatures: icedOnly,
  }),
  createProduct({
    id: "espresso-tonic",
    name: "Espresso Tonic",
    shortName: "اسپرسو تونیک",
    categoryId: "cold-coffee",
    shortDescription: "اسپرسو، تونیک و یخ با تلخی روشن و گاز ظریف.",
    fullDescription:
      "ترکیبی شفاف و درخشان از اسپرسو و تونیک که طعم مرکباتی و پایان خشک‌تری دارد.",
    ingredients: [
      { id: "espresso", name: "اسپرسو" },
      { id: "tonic", name: "آب تونیک" },
      { id: "ice", name: "یخ" },
    ],
    flavorNotes: [
      { label: "مرکباتی", type: "aroma", intensity: 4 },
      { label: "گازدار", type: "texture", intensity: 4 },
      { label: "تلخ و خشک", type: "taste", intensity: 3 },
    ],
    basePrice: 2350000,
    sizes: [regularLarge[0]],
    temperatures: icedOnly,
    extras: coffeeExtras,
  }),
  createProduct({
    id: "burnt-basque-cheesecake",
    name: "Burnt Basque Cheesecake",
    shortName: "چیزکیک باسک",
    categoryId: "cakes",
    shortDescription: "رویهٔ کاراملی تیره و مغز نرم و خامه‌ای.",
    fullDescription:
      "برشی دست‌ساز با لبه‌های طبیعی، شیرینی کنترل‌شده و بافت متراکم اما نرم.",
    ingredients: [
      { id: "cream-cheese", name: "پنیر خامه‌ای", allergen: "لبنیات" },
      { id: "cream", name: "خامه", allergen: "لبنیات" },
      { id: "egg", name: "تخم‌مرغ", allergen: "تخم‌مرغ" },
      { id: "sugar", name: "شکر" },
    ],
    allergens: ["لبنیات", "تخم‌مرغ"],
    flavorNotes: [
      { label: "خامه‌ای", type: "texture", intensity: 5 },
      { label: "کاراملی", type: "taste", intensity: 4 },
      { label: "وانیلی ملایم", type: "aroma", intensity: 2 },
    ],
    basePrice: 2900000,
    pricingStatus: "source-matched",
    featured: true,
    bestSeller: true,
  }),
  createProduct({
    id: "carrot-walnut-cake",
    name: "Carrot & Walnut Cake",
    shortName: "کیک هویج و گردو",
    categoryId: "cakes",
    shortDescription: "کیک ادویه‌ای مرطوب با گردو و کرم پنیر سبک.",
    fullDescription:
      "کیک هویج دست‌ساز با دارچین، گردوی برشته و لایه‌ای متعادل از کرم پنیر.",
    ingredients: [
      { id: "carrot", name: "هویج" },
      { id: "walnut", name: "گردو", allergen: "آجیل" },
      { id: "flour", name: "آرد گندم", allergen: "گلوتن" },
      { id: "egg", name: "تخم‌مرغ", allergen: "تخم‌مرغ" },
      { id: "cream-cheese", name: "پنیر خامه‌ای", allergen: "لبنیات" },
      { id: "cinnamon", name: "دارچین" },
    ],
    allergens: ["آجیل", "گلوتن", "تخم‌مرغ", "لبنیات"],
    flavorNotes: [
      { label: "دارچینی", type: "aroma", intensity: 4 },
      { label: "مرطوب", type: "texture", intensity: 4 },
      { label: "آجیلی", type: "taste", intensity: 4 },
    ],
    basePrice: 2700000,
    pricingStatus: "source-matched",
    bestSeller: true,
  }),
  createProduct({
    id: "chocolate-fudge-cake",
    name: "Chocolate Fudge Cake",
    shortName: "کیک شکلات فاج",
    categoryId: "cakes",
    shortDescription: "لایه‌های شکلاتی عمیق با گاناش نرم و براق.",
    fullDescription:
      "کیک شکلاتی متراکم و مرطوب با گاناش تلخ‌وشیرین؛ غنی اما با شیرینی کنترل‌شده.",
    ingredients: [
      { id: "dark-chocolate", name: "شکلات تلخ", allergen: "لبنیات" },
      { id: "cocoa", name: "پودر کاکائو" },
      { id: "flour", name: "آرد گندم", allergen: "گلوتن" },
      { id: "egg", name: "تخم‌مرغ", allergen: "تخم‌مرغ" },
      { id: "cream", name: "خامه", allergen: "لبنیات" },
    ],
    allergens: ["لبنیات", "گلوتن", "تخم‌مرغ"],
    flavorNotes: [
      { label: "کاکائویی", type: "taste", intensity: 5 },
      { label: "فاجی", type: "texture", intensity: 5 },
      { label: "شکلات تلخ", type: "aroma", intensity: 4 },
    ],
    basePrice: 2900000,
    pricingStatus: "source-matched",
    featured: true,
  }),
  createProduct({
    id: "lemon-poppy-seed-cake",
    name: "Lemon Poppy Seed Cake",
    shortName: "کیک لیمو و خشخاش",
    categoryId: "cakes",
    shortDescription: "کیک سبک لیمویی با دانه خشخاش و لعاب ترش‌وشیرین.",
    fullDescription:
      "برشی روشن و معطر با پوست لیموی تازه، بافت نرم و لعابی سبک برای پایان ترش‌وشیرین.",
    ingredients: [
      { id: "lemon", name: "لیموی تازه" },
      { id: "poppy-seed", name: "دانه خشخاش" },
      { id: "flour", name: "آرد گندم", allergen: "گلوتن" },
      { id: "egg", name: "تخم‌مرغ", allergen: "تخم‌مرغ" },
      { id: "butter", name: "کره", allergen: "لبنیات" },
    ],
    allergens: ["گلوتن", "تخم‌مرغ", "لبنیات"],
    flavorNotes: [
      { label: "لیمویی", type: "aroma", intensity: 5 },
      { label: "ترش‌وشیرین", type: "taste", intensity: 4 },
      { label: "سبک", type: "texture", intensity: 3 },
    ],
    basePrice: 1850000,
  }),
  createProduct({
    id: "red-velvet-cake",
    name: "Red Velvet Cake",
    shortName: "کیک رد ولوت",
    categoryId: "cakes",
    shortDescription: "کیک کاکائویی لطیف با کرم پنیر و بافت مخملی.",
    fullDescription:
      "لایه‌های نرم رد ولوت با رایحهٔ ملایم کاکائو و کرم پنیر سبک و کمی ترش.",
    ingredients: [
      { id: "cocoa", name: "پودر کاکائو" },
      { id: "flour", name: "آرد گندم", allergen: "گلوتن" },
      { id: "egg", name: "تخم‌مرغ", allergen: "تخم‌مرغ" },
      { id: "cream-cheese", name: "پنیر خامه‌ای", allergen: "لبنیات" },
      { id: "butter", name: "کره", allergen: "لبنیات" },
    ],
    allergens: ["گلوتن", "تخم‌مرغ", "لبنیات"],
    flavorNotes: [
      { label: "مخملی", type: "texture", intensity: 5 },
      { label: "کاکائوی ملایم", type: "taste", intensity: 2 },
      { label: "کرم پنیر", type: "aroma", intensity: 3 },
    ],
    basePrice: 2050000,
  }),
];
