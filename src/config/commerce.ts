import { locations } from "@/data/locations";
import type { Location } from "@/types/domain";

export interface CommerceConfiguration {
  customerMode: "guest";
  fulfillmentMode: "pickup";
  pickupLocations: readonly Location[];
  paymentMethod: "online" | "pay-at-pickup" | null;
  orderProvider: string | null;
  availabilitySource: string | null;
  feePolicy: "none" | "configured" | null;
}

export const commerceConfig: CommerceConfiguration = {
  customerMode: "guest",
  fulfillmentMode: "pickup",
  pickupLocations: locations,
  paymentMethod: "pay-at-pickup",
  orderProvider: null,
  availabilitySource: null,
  feePolicy: null,
};

export interface CommerceBlocker {
  id:
    | "pickup-location"
    | "pickup-location-confirmation"
    | "payment-method"
    | "order-provider"
    | "availability-source"
    | "fee-policy";
  label: string;
}

export function getCommerceBlockers(
  config: CommerceConfiguration,
): CommerceBlocker[] {
  const blockers: CommerceBlocker[] = [];
  if (config.pickupLocations.length === 0) {
    blockers.push({ id: "pickup-location", label: "نشانی محل تحویل حضوری" });
  } else if (
    config.pickupLocations.some(
      (location) => location.operationalStatus !== "confirmed",
    )
  ) {
    blockers.push({
      id: "pickup-location-confirmation",
      label: "تأیید نهایی اطلاعات شعبه‌ها",
    });
  }
  if (!config.paymentMethod) {
    blockers.push({ id: "payment-method", label: "روش پرداخت" });
  }
  if (!config.orderProvider) {
    blockers.push({ id: "order-provider", label: "سامانهٔ ثبت سفارش" });
  }
  if (!config.availabilitySource) {
    blockers.push({ id: "availability-source", label: "منبع موجودی منو" });
  }
  if (!config.feePolicy) {
    blockers.push({ id: "fee-policy", label: "قانون مالیات و هزینهٔ خدمات" });
  }
  return blockers;
}
