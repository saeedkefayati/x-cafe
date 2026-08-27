export type Availability =
  "available" | "unavailable" | "sold-out" | "seasonal" | "coming-soon";
export type ProductTheme =
  "coffee" | "milk" | "matcha" | "cold" | "dessert" | "breakfast";

export interface MediaAsset {
  src: string;
  alt: string;
  width: number;
  height: number;
}
export interface ProductOption {
  id: string;
  name: string;
  value: string;
  priceDelta: number;
  availability: Availability;
  default?: boolean;
  sortOrder: number;
}
export interface Ingredient {
  id: string;
  name: string;
  description?: string;
  image?: MediaAsset;
  allergen?: string;
  origin?: string;
}
export interface FlavorNote {
  label: string;
  intensity?: number;
  type: "aroma" | "taste" | "texture";
}
export interface Product {
  id: string;
  slug: string;
  name: string;
  shortName?: string;
  categoryId: string;
  status: Availability;
  availability: Availability;
  shortDescription: string;
  fullDescription: string;
  story?: string;
  ingredients: Ingredient[];
  allergens: string[];
  flavorNotes: FlavorNote[];
  dietaryTags: string[];
  basePrice: number;
  compareAtPrice?: number;
  currency: string;
  pricingStatus?: "source-matched" | "mock";
  featured: boolean;
  bestSeller: boolean;
  cardImage: MediaAsset;
  heroImage: MediaAsset;
  gallery: MediaAsset[];
  detailAssets: MediaAsset[];
  sizes: ProductOption[];
  temperatures: ProductOption[];
  milkOptions: ProductOption[];
  sweetnessOptions: ProductOption[];
  extras: ProductOption[];
  seoTitle: string;
  seoDescription: string;
  socialImage?: MediaAsset;
}
export interface Category {
  id: string;
  slug: string;
  name: string;
  description: string;
  heroImage?: MediaAsset;
  visualTheme: ProductTheme;
  sortOrder: number;
  enabled: boolean;
}
export interface ProductSelection {
  sizeId?: string;
  temperatureId?: string;
  milkId?: string;
  sweetnessId?: string;
  extraIds: string[];
}
export interface CartLineRecord {
  id: string;
  productId: string;
  selection: ProductSelection;
  quantity: number;
}
export interface ResolvedCartLine extends CartLineRecord {
  product: Product;
  optionLabels: string[];
  unitPrice: number;
  totalPrice: number;
}
export interface JournalPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  coverImage?: MediaAsset;
  body: string[];
  author?: string;
  publishedAt: string;
  tags: string[];
  relatedProductIds: string[];
  seoTitle: string;
  seoDescription: string;
}
export interface PickupSchedule {
  timeZone: string;
  opensAt: string;
  closesAt: string;
  preparationMinutes: number;
}
export interface Location {
  id: string;
  slug: string;
  name: string;
  address: string;
  lat: string;
  lng: string;
  mapVersion: string;
  coordinates?: { lat: number; lng: number };
  phone?: string;
  phoneUri?: string;
  openingHours: string[];
  pickupSchedule?: PickupSchedule;
  services: string[];
  pickupEnabled: boolean;
  operationalStatus: "sample" | "confirmed";
  image?: MediaAsset;
  description: string;
}
export interface FAQ {
  id: string;
  category: string;
  question: string;
  answer: string;
  sortOrder: number;
}
