import type { Location } from "@/types/domain";

const sharedPickupSchedule = {
  timeZone: "Asia/Tehran",
  closesAt: "23:00",
  preparationMinutes: 45,
} as const;

export const locations: Location[] = [
  {
    id: "location-gholhak",
    slug: "gholhak",
    name: "شعبهٔ قلهک",
    address: "خیابان شریعتی، دوراهی قلهک، خیابان بصیری، پلاک ۶، طبقهٔ ۵",
    phone: "۰۲۱ ۲۲۶۴۹۵۶۱",
    phoneUri: "tel:+982122649561",
    openingHours: ["تمام روزها از ساعت ۸:۳۰ تا ۲۳"],
    pickupSchedule: { ...sharedPickupSchedule, opensAt: "08:30" },
    services: ["تحویل حضوری"],
    pickupEnabled: true,
    operationalStatus: "sample",
    description: "تحویل سفارش از شعبهٔ قلهک پس از آماده‌سازی انجام می‌شود.",
  },
  {
    id: "location-felestin",
    slug: "felestin",
    name: "شعبهٔ فلسطین",
    address:
      "خیابان فلسطین، پایین‌تر از خیابان بزرگمهر، نبش کوچهٔ نایبی، پلاک ۳۳",
    phone: "۰۲۱ ۶۶۹۷۶۰۴۱",
    phoneUri: "tel:+982166976041",
    openingHours: ["تمام روزها از ساعت ۹ تا ۲۳"],
    pickupSchedule: { ...sharedPickupSchedule, opensAt: "09:00" },
    services: ["تحویل حضوری"],
    pickupEnabled: true,
    operationalStatus: "sample",
    description: "تحویل سفارش از شعبهٔ فلسطین پس از آماده‌سازی انجام می‌شود.",
  },
  {
    id: "location-pasdaran",
    slug: "pasdaran",
    name: "شعبهٔ پاسداران",
    address: "پاسداران، نبش بوستان پنجم، ساختمان سام، پلاک ۲۲۹، طبقهٔ ۴",
    phone: "۰۲۱ ۲۲۷۹۶۵۲۱",
    phoneUri: "tel:+982122796521",
    openingHours: ["تمام روزها از ساعت ۹ تا ۲۳"],
    pickupSchedule: { ...sharedPickupSchedule, opensAt: "09:00" },
    services: ["تحویل حضوری"],
    pickupEnabled: true,
    operationalStatus: "sample",
    description: "تحویل سفارش از شعبهٔ پاسداران پس از آماده‌سازی انجام می‌شود.",
  },
];
