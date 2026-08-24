import type {
  Category,
  FAQ,
  JournalPost,
  Location,
  Product,
  ProductOption,
} from "@/types/domain";
import { catalogProducts } from "@/data/products";

const image = (src: string, alt: string) => ({
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

export const calibrationCategories: Category[] = [
  {
    id: "coffee",
    slug: "coffee",
    name: "قهوه",
    description: "اسپرسو و نوشیدنی‌های کلاسیک، دقیق و متعادل.",
    visualTheme: "coffee",
    sortOrder: 1,
    enabled: true,
  },
  {
    id: "milk-drinks",
    slug: "milk-drinks",
    name: "نوشیدنی‌های شیری",
    description: "بافت نرم شیر در کنار اسپرسو و طعم‌های کنترل‌شده.",
    visualTheme: "milk",
    sortOrder: 2,
    enabled: true,
  },
  {
    id: "matcha",
    slug: "matcha",
    name: "ماچا",
    description: "ماچای گیاهی و آرام با ترکیب‌های فصلی.",
    visualTheme: "matcha",
    sortOrder: 3,
    enabled: true,
  },
  {
    id: "cold-drinks",
    slug: "cold-drinks",
    name: "نوشیدنی سرد",
    description: "شفاف، خنک و مناسب مکث‌های طولانی‌تر.",
    visualTheme: "cold",
    sortOrder: 4,
    enabled: true,
  },
  {
    id: "desserts",
    slug: "desserts",
    name: "دسر",
    description: "شیرینی‌های روزانه با بافت طبیعی و شیرینی متعادل.",
    visualTheme: "dessert",
    sortOrder: 5,
    enabled: true,
  },
];

const commonSizes = [
  option("size-regular", "معمولی", "regular", 0, 1, true),
  option("size-large", "بزرگ", "large", 45000, 2),
];
const temperatures = [
  option("temp-iced", "سرد", "iced", 0, 1, true),
  option("temp-hot", "گرم", "hot", 0, 2),
];

export const calibrationProducts: Product[] = [
  {
    id: "iced-caramel-latte",
    slug: "iced-caramel-latte",
    name: "Iced Caramel Latte",
    shortName: "Caramel Latte",
    categoryId: "milk-drinks",
    status: "available",
    availability: "available",
    shortDescription: "اسپرسوی دوبل، شیر سرد، یخ و پایان نرم کارامل.",
    fullDescription:
      "یک لاتهٔ سرد متعادل که طعم اسپرسو را زیر شیرینی کارامل پنهان نمی‌کند.",
    ingredients: [
      { id: "espresso", name: "اسپرسو" },
      { id: "milk", name: "شیر", allergen: "لبنیات" },
      { id: "caramel", name: "کارامل" },
    ],
    allergens: ["لبنیات"],
    flavorNotes: [
      { label: "نرم", type: "texture" },
      { label: "کاراملی", type: "taste" },
      { label: "متعادل", type: "taste" },
    ],
    dietaryTags: [],
    basePrice: 245000,
    currency: "IRR",
    featured: true,
    bestSeller: true,
    cardImage: image(
      "/images/calibration/product-iced-caramel-latte-card-v1.png",
      "یک لیوان لاتهٔ کارامل سرد روی سطح تراورتن روشن",
    ),
    heroImage: image(
      "/images/calibration/product-iced-caramel-latte-card-v1.png",
      "لاتهٔ کارامل سرد با یخ و لایهٔ طبیعی اسپرسو",
    ),
    gallery: [],
    detailAssets: [],
    sizes: commonSizes,
    temperatures,
    milkOptions: [
      option("milk-whole", "شیر کامل", "whole", 0, 1, true),
      option("milk-oat", "شیر جو دوسر", "oat", 35000, 2),
    ],
    sweetnessOptions: [
      option("sweet-regular", "معمولی", "regular", 0, 1, true),
      option("sweet-less", "کم‌شیرین", "less", 0, 2),
    ],
    extras: [option("extra-shot", "شات اضافه", "extra-shot", 55000, 1)],
    seoTitle: "لاته کارامل سرد",
    seoDescription: "اسپرسوی دوبل، شیر سرد، یخ و کارامل با شیرینی متعادل.",
  },
  {
    id: "strawberry-matcha-latte",
    slug: "strawberry-matcha-latte",
    name: "Strawberry Matcha Latte",
    categoryId: "matcha",
    status: "seasonal",
    availability: "available",
    shortDescription: "ماچای گیاهی، شیر سرد و پورهٔ واقعی توت‌فرنگی.",
    fullDescription:
      "سه بافت آشنا در یک لیوان: میوهٔ تازه، شیر سرد و ماچای خاکی و آرام.",
    ingredients: [
      { id: "matcha", name: "ماچا" },
      { id: "milk", name: "شیر", allergen: "لبنیات" },
      { id: "strawberry", name: "توت‌فرنگی" },
    ],
    allergens: ["لبنیات"],
    flavorNotes: [
      { label: "گیاهی", type: "taste" },
      { label: "میوه‌ای", type: "aroma" },
      { label: "خامه‌ای", type: "texture" },
    ],
    dietaryTags: ["فصلی"],
    basePrice: 275000,
    currency: "IRR",
    featured: true,
    bestSeller: true,
    cardImage: image(
      "/images/calibration/product-strawberry-matcha-latte-card-v1.png",
      "یک لیوان ماچا لاته توت‌فرنگی سرد با لایه‌های طبیعی",
    ),
    heroImage: image(
      "/images/calibration/product-strawberry-matcha-latte-card-v1.png",
      "ماچا لاته توت‌فرنگی با ماچای سبز مات و پورهٔ میوه",
    ),
    gallery: [],
    detailAssets: [],
    sizes: commonSizes,
    temperatures: [temperatures[0]],
    milkOptions: [
      option("milk-whole-matcha", "شیر کامل", "whole", 0, 1, true),
      option("milk-oat-matcha", "شیر جو دوسر", "oat", 35000, 2),
    ],
    sweetnessOptions: [
      option("sweet-regular-matcha", "معمولی", "regular", 0, 1, true),
      option("sweet-less-matcha", "کم‌شیرین", "less", 0, 2),
    ],
    extras: [],
    seoTitle: "ماچا لاته توت فرنگی",
    seoDescription: "ماچای گیاهی، شیر سرد و پورهٔ واقعی توت‌فرنگی.",
  },
  {
    id: "burnt-basque-cheesecake",
    slug: "burnt-basque-cheesecake",
    name: "Burnt Basque Cheesecake",
    categoryId: "desserts",
    status: "available",
    availability: "available",
    shortDescription: "رویهٔ کاراملی تیره و مغز نرم و خامه‌ای.",
    fullDescription:
      "برشی دست‌ساز با لبه‌های طبیعی، شیرینی کنترل‌شده و بافت متراکم اما نرم.",
    ingredients: [
      { id: "cream-cheese", name: "پنیر خامه‌ای", allergen: "لبنیات" },
      { id: "egg", name: "تخم‌مرغ", allergen: "تخم‌مرغ" },
    ],
    allergens: ["لبنیات", "تخم‌مرغ"],
    flavorNotes: [
      { label: "خامه‌ای", type: "texture" },
      { label: "کاراملی", type: "taste" },
      { label: "ملایم", type: "taste" },
    ],
    dietaryTags: [],
    basePrice: 225000,
    currency: "IRR",
    featured: true,
    bestSeller: true,
    cardImage: image(
      "/images/calibration/product-burnt-basque-cheesecake-card-v1.png",
      "یک برش چیزکیک باسک با رویهٔ کاراملی تیره",
    ),
    heroImage: image(
      "/images/calibration/product-burnt-basque-cheesecake-card-v1.png",
      "برش چیزکیک باسک روی بشقاب سرامیکی روشن",
    ),
    gallery: [],
    detailAssets: [],
    sizes: [],
    temperatures: [],
    milkOptions: [],
    sweetnessOptions: [],
    extras: [],
    seoTitle: "چیزکیک باسک سوخته",
    seoDescription: "چیزکیک باسک با رویهٔ کاراملی و بافت نرم و خامه‌ای.",
  },
];

export const categories: Category[] = [
  {
    id: "hot-coffee",
    slug: "hot-coffee",
    name: "قهوه بار گرم",
    description: "اسپرسو و نوشیدنی‌های گرم کلاسیک با بافت و نسبت دقیق.",
    visualTheme: "coffee",
    sortOrder: 1,
    enabled: true,
  },
  {
    id: "cold-coffee",
    slug: "cold-coffee",
    name: "قهوه بار سرد",
    description: "قهوه‌های خنک، شفاف و لایه‌ای برای نوشیدن آرام‌تر.",
    visualTheme: "cold",
    sortOrder: 2,
    enabled: true,
  },
  {
    id: "cakes",
    slug: "cakes",
    name: "کیک و چیزکیک",
    description: "برش‌های روزانه با بافت طبیعی و شیرینی کنترل‌شده.",
    visualTheme: "dessert",
    sortOrder: 3,
    enabled: true,
  },
];

export const products = catalogProducts;

export const journalPosts: JournalPost[] = [
  {
    id: "post-ritual",
    slug: "a-small-ritual-done-well",
    title: "یک آیین کوچک، با دقت",
    excerpt: "چرا تکرار خوب، مهم‌تر از پیچیدگی است.",
    body: [
      "یک فنجان خوب با ژست بزرگ شروع نمی‌شود؛ با انتخاب‌های کوچک و تکرارشونده شکل می‌گیرد.",
      "این نوشته نمونهٔ محتوایی Phase 1 است و در مرحلهٔ محتوا با روایت واقعی برند جایگزین خواهد شد.",
    ],
    publishedAt: "2026-08-24",
    tags: ["فرایند"],
    relatedProductIds: ["iced-caramel-latte"],
    seoTitle: "یک آیین کوچک، با دقت",
    seoDescription: "یادداشت نمونه دربارهٔ دقت در فرایند کافه.",
  },
];

export const locations: Location[] = [
  {
    id: "location-sample",
    slug: "sample-branch",
    name: "شعبهٔ نمونه",
    address: "نشانی واقعی پیش از انتشار جایگزین می‌شود.",
    openingHours: ["شنبه تا پنج‌شنبه — ۸ تا ۲۲", "جمعه — ۹ تا ۲۲"],
    services: ["سفارش حضوری", "تحویل حضوری"],
    pickupEnabled: true,
    description:
      "اطلاعات این شعبه آزمایشی است و برای نمایش ساختار UI استفاده می‌شود.",
  },
];
export const faqs: FAQ[] = [
  {
    id: "faq-pickup",
    category: "سفارش",
    question: "سفارش حضوری چگونه انجام می‌شود؟",
    answer:
      "این جریان در Phase 2 تکمیل می‌شود و اطلاعات نهایی به مدل تحویل واقعی وابسته است.",
    sortOrder: 1,
  },
  {
    id: "faq-allergen",
    category: "محصولات",
    question: "اطلاعات آلرژن‌ها کجا نمایش داده می‌شود؟",
    answer: "هر محصول فهرست آلرژن مخصوص خود را دارد؛ اطلاعات فعلی آزمایشی است.",
    sortOrder: 2,
  },
];

export const getProduct = (slug: string) =>
  products.find((product) => product.slug === slug);
export const getCategory = (slug: string) =>
  categories.find((category) => category.slug === slug);
export const getPost = (slug: string) =>
  journalPosts.find((post) => post.slug === slug);
