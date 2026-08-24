export interface CommerceConfiguration {
  fulfillmentMode: "pickup";
  pickupLocation: { id: string; name: string; address: string } | null;
  paymentMethod: "online" | "pay-at-pickup" | null;
  orderProvider: string | null;
  availabilitySource: string | null;
  feePolicy: "none" | "configured" | null;
}

export const commerceConfig: CommerceConfiguration = {
  fulfillmentMode: "pickup",
  pickupLocation: null,
  paymentMethod: null,
  orderProvider: null,
  availabilitySource: null,
  feePolicy: null,
};

export interface CommerceBlocker {
  id:
    | "pickup-location"
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
  if (!config.pickupLocation) {
    blockers.push({ id: "pickup-location", label: "نشانی محل تحویل حضوری" });
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
