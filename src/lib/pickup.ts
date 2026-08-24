import type { Location } from "@/types/domain";

export type PickupAvailabilityState =
  "accepting" | "before-opening" | "last-order-passed" | "unavailable";

export interface PickupAvailability {
  state: PickupAvailabilityState;
  acceptingOrders: boolean;
  label: string;
}

function clockToMinutes(value: string) {
  const match = /^(\d{2}):(\d{2})$/.exec(value);
  if (!match) {
    throw new Error(`Invalid clock value: ${value}`);
  }

  const hours = Number(match[1]);
  const minutes = Number(match[2]);
  if (hours > 23 || minutes > 59) {
    throw new Error(`Invalid clock value: ${value}`);
  }
  return hours * 60 + minutes;
}

function minutesInTimeZone(date: Date, timeZone: string) {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone,
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(date);
  const hour = Number(parts.find((part) => part.type === "hour")?.value);
  const minute = Number(parts.find((part) => part.type === "minute")?.value);
  return hour * 60 + minute;
}

export function getPickupAvailability(
  location: Location,
  at: Date,
): PickupAvailability {
  const schedule = location.pickupSchedule;
  if (!location.pickupEnabled || !schedule) {
    return {
      state: "unavailable",
      acceptingOrders: false,
      label: "تحویل حضوری غیرفعال",
    };
  }

  const currentMinutes = minutesInTimeZone(at, schedule.timeZone);
  const openingMinutes = clockToMinutes(schedule.opensAt);
  const closingMinutes = clockToMinutes(schedule.closesAt);
  const lastOrderMinutes = closingMinutes - schedule.preparationMinutes;

  if (currentMinutes < openingMinutes) {
    return {
      state: "before-opening",
      acceptingOrders: false,
      label: `شروع سفارش از ساعت ${formatClock(schedule.opensAt)}`,
    };
  }

  if (currentMinutes > lastOrderMinutes) {
    return {
      state: "last-order-passed",
      acceptingOrders: false,
      label: "پذیرش سفارش امروز پایان یافته",
    };
  }

  return {
    state: "accepting",
    acceptingOrders: true,
    label: "آمادهٔ پذیرش سفارش",
  };
}

export function getPickupReadyAt(location: Location, orderedAt: Date) {
  const preparationMinutes = location.pickupSchedule?.preparationMinutes;
  if (!preparationMinutes) {
    return null;
  }
  return new Date(orderedAt.getTime() + preparationMinutes * 60_000);
}

export function formatPickupReadyTime(location: Location, orderedAt: Date) {
  const readyAt = getPickupReadyAt(location, orderedAt);
  const timeZone = location.pickupSchedule?.timeZone;
  if (!readyAt || !timeZone) {
    return null;
  }
  return new Intl.DateTimeFormat("fa-IR", {
    timeZone,
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).format(readyAt);
}

export function formatClock(value: string) {
  const [hours, minutes] = value.split(":").map(Number);
  return new Intl.NumberFormat("fa-IR", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  })
    .format(hours)
    .concat(
      ":",
      new Intl.NumberFormat("fa-IR", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      }).format(minutes),
    );
}
