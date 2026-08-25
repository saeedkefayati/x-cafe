import type {
  Category,
  FAQ,
  JournalPost,
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
  option("size-large", "بزرگ", "large", 450000, 2),
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
    basePrice: 2450000,
    currency: "IRR",
    pricingStatus: "mock",
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
      option("milk-oat", "شیر جو دوسر", "oat", 350000, 2),
    ],
    sweetnessOptions: [
      option("sweet-regular", "معمولی", "regular", 0, 1, true),
      option("sweet-less", "کم‌شیرین", "less", 0, 2),
    ],
    extras: [option("extra-shot", "شات اضافه", "extra-shot", 550000, 1)],
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
    basePrice: 2750000,
    currency: "IRR",
    pricingStatus: "mock",
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
      option("milk-oat-matcha", "شیر جو دوسر", "oat", 350000, 2),
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
    basePrice: 2250000,
    currency: "IRR",
    pricingStatus: "mock",
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
    coverImage: products.find((product) => product.id === "espresso")
      ?.cardImage,
    body: [
      "یک فنجان خوب با ژست بزرگ شروع نمی‌شود؛ با انتخاب‌های کوچک و تکرارشونده شکل می‌گیرد.",
      "از وزن‌کردن دانه تا دمای آب و زمانی که نوشیدنی روی پیشخوان قرار می‌گیرد، هر تصمیم کوچک روی تجربهٔ نهایی اثر دارد. دقت قرار نیست دیده شود؛ قرار است در طعم حس شود.",
      "تکرار خوب یعنی هر بار از نو توجه‌کردن. نه برای رسیدن به یک فنجان نمایشی، برای ساختن تجربه‌ای که بتوان به آن برگشت.",
    ],
    publishedAt: "2026-08-24",
    tags: ["فرایند"],
    relatedProductIds: ["iced-caramel-latte"],
    seoTitle: "یک آیین کوچک، با دقت",
    seoDescription: "یادداشتی دربارهٔ دقت، تکرار و آیین کوچک یک فنجان خوب.",
  },
  {
    id: "post-temperature",
    slug: "temperature-changes-the-cup",
    title: "دما، طعم را جابه‌جا می‌کند",
    excerpt: "یک نوشیدنی از اولین جرعه تا آخرین جرعه ثابت نمی‌ماند.",
    coverImage: products.find((product) => product.id === "iced-latte")
      ?.cardImage,
    body: [
      "گرما عطر را زودتر آزاد می‌کند و سرما بافت و شیرینی را برجسته‌تر نشان می‌دهد. به همین دلیل یک ترکیب مشابه در نسخهٔ گرم و سرد، دو تجربهٔ متفاوت می‌سازد.",
      "در نوشیدنی سرد، اندازهٔ یخ و نسبت شیر فقط جزئیات ظاهری نیستند. این انتخاب‌ها تعیین می‌کنند نوشیدنی با گذشت زمان چگونه رقیق شود و کدام طعم در پایان باقی بماند.",
      "بهترین دما یک عدد ثابت نیست؛ دمایی است که اجازه می‌دهد شخصیت مواد اصلی واضح بماند.",
    ],
    publishedAt: "2026-08-20",
    tags: ["طعم", "فرایند"],
    relatedProductIds: ["iced-latte", "cafe-latte"],
    seoTitle: "دما چگونه طعم قهوه را تغییر می‌دهد",
    seoDescription: "نگاهی کوتاه به اثر دما، یخ و زمان روی طعم نوشیدنی.",
  },
  {
    id: "post-basque",
    slug: "the-contrast-in-basque-cheesecake",
    title: "تضاد خوبِ چیزکیک باسک",
    excerpt: "رویهٔ تیره، مرکز روشن و مرزی که باید دقیق بماند.",
    coverImage: products.find(
      (product) => product.id === "burnt-basque-cheesecake",
    )?.cardImage,
    body: [
      "جذابیت چیزکیک باسک از تضاد می‌آید: سطحی برشته و کاراملی در کنار مرکزی نرم و خامه‌ای. اگر یکی از این دو بیش از حد پیش برود، تعادل از بین می‌رود.",
      "استراحت پس از پخت به‌اندازهٔ زمان داخل فر مهم است. بافت در همین فاصله شکل می‌گیرد و طعم‌های تندتر آرام می‌شوند.",
      "نتیجه باید ساده به نظر برسد؛ یک برش با لبه‌های طبیعی، شیرینی کنترل‌شده و بافتی که نیاز به تزئین اضافه ندارد.",
    ],
    publishedAt: "2026-08-16",
    tags: ["کیک", "بافت"],
    relatedProductIds: ["burnt-basque-cheesecake"],
    seoTitle: "بافت و طعم چیزکیک باسک",
    seoDescription:
      "چرا تضاد رویهٔ کاراملی و مرکز نرم، چیزکیک باسک را متمایز می‌کند.",
  },
];

export const faqs: FAQ[] = [
  {
    id: "faq-customize",
    category: "سفارش",
    question: "آیا می‌توانم نوشیدنی را شخصی‌سازی کنم؟",
    answer:
      "بله. در صفحهٔ هر محصول، گزینه‌های موجود مثل اندازه، نوع شیر، میزان شیرینی و افزودنی‌ها نمایش داده می‌شوند. گزینه‌ها برای هر محصول متفاوت‌اند.",
    sortOrder: 1,
  },
  {
    id: "faq-allergen",
    category: "محصولات",
    question: "اطلاعات آلرژن‌ها کجا نمایش داده می‌شود؟",
    answer:
      "مواد اصلی و آلرژن‌های شناخته‌شده در صفحهٔ هر محصول آمده‌اند. این اطلاعات فعلاً محتوای اولیه‌اند و پیش از انتشار عمومی با دستور تهیهٔ نهایی بازبینی می‌شوند.",
    sortOrder: 2,
  },
  {
    id: "faq-prices",
    category: "سفارش",
    question: "قیمت‌های منو از چه مرجعی آمده‌اند؟",
    answer:
      "قیمت محصولاتی که تطبیق مستقیم دارند از منوی آنلاین شعبهٔ فلسطین در ۴ شهریور ۱۴۰۵ برداشته شده‌اند و با نشان «قیمت مرجع» دیده می‌شوند. پنج محصول بدون معادل دقیق همچنان «قیمت موقت» دارند.",
    sortOrder: 3,
  },
  {
    id: "faq-cart",
    category: "سفارش",
    question: "سبد خرید بعد از بستن صفحه باقی می‌ماند؟",
    answer:
      "بله. سبد روی همین مرورگر نگه داشته می‌شود تا بتوانید بعداً ادامه دهید. فقط هنگام ثبت سفارش آزمایشی، یک نسخهٔ بدون قیمت از سبد برای بازبینی به سرور برنامه فرستاده می‌شود و در دیتابیس ذخیره نمی‌شود.",
    sortOrder: 4,
  },
  {
    id: "faq-fulfillment",
    category: "تحویل",
    question: "سفارش برای تحویل حضوری است یا ارسال؟",
    answer:
      "نسخهٔ اول فقط تحویل حضوری دارد. شعبهٔ تحویل در Checkout انتخاب می‌شود و سفارش حدود ۴۵ دقیقه پس از ثبت موفق آماده خواهد بود. نشانی، تلفن و ساعات سه شعبه از مرجع اعلام‌شده به‌روز شده‌اند.",
    sortOrder: 5,
  },
  {
    id: "faq-payment",
    category: "پرداخت",
    question: "پرداخت آنلاین فعال است؟",
    answer:
      "خیر. در نسخهٔ اول مبلغ سفارش هنگام تحویل حضوری در شعبه پرداخت می‌شود و درگاه آنلاین وجود ندارد.",
    sortOrder: 6,
  },
];

export const getProduct = (slug: string) =>
  products.find((product) => product.slug === slug);
export const getCategory = (slug: string) =>
  categories.find((category) => category.slug === slug);
export const getPost = (slug: string) =>
  journalPosts.find((post) => post.slug === slug);
