import type { CartLineRecord } from "./domain";

export interface CustomerContact {
  name: string;
  phone: string;
  email?: string;
}

export interface PickupFulfillmentRequest {
  type: "pickup";
  locationId: string;
  requestedTimeSlotId?: string;
}

export interface PickupOrderRequest {
  schemaVersion: 1;
  cart: CartLineRecord[];
  customer: CustomerContact;
  fulfillment: PickupFulfillmentRequest;
}

export type OrderSubmissionResult =
  | { status: "accepted"; orderId: string }
  | { status: "payment-required"; orderId: string; paymentUrl: string }
  | {
      status: "rejected";
      code: "invalid-cart" | "unavailable" | "closed" | "provider-error";
      message: string;
    };

export interface CommerceProvider {
  createPickupOrder(
    request: PickupOrderRequest,
  ): Promise<OrderSubmissionResult>;
}
