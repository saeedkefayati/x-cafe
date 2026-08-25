"use server";

import type { Route } from "next";
import { redirect } from "next/navigation";
import { parseCartSnapshot } from "@/lib/cart";
import { createDemoOrderAttempt } from "@/lib/demo-order";
import { catalogProducts } from "@/data/products";
import type { CheckoutActionState, PickupOrderRequest } from "@/types/commerce";

const readField = (formData: FormData, name: string, maxLength: number) => {
  const value = formData.get(name);
  return typeof value === "string" ? value.slice(0, maxLength) : "";
};

export async function submitDemoOrder(
  _previousState: CheckoutActionState,
  formData: FormData,
): Promise<CheckoutActionState> {
  const cartSnapshot = readField(formData, "cartSnapshot", 100_000);
  const cart = parseCartSnapshot(cartSnapshot, catalogProducts);
  const email = readField(formData, "email", 254).trim();
  const request: PickupOrderRequest = {
    schemaVersion: 1,
    cart,
    customer: {
      name: readField(formData, "name", 80),
      phone: readField(formData, "phone", 20),
      email: email || undefined,
    },
    fulfillment: {
      type: "pickup",
      locationId: readField(formData, "pickupLocationId", 80),
    },
  };

  const result = createDemoOrderAttempt(request, new Date());
  if (result.status === "rejected") {
    return {
      message: result.message,
      fieldErrors: result.fieldErrors,
    };
  }

  redirect(
    ("/order/success?confirmation=" +
      encodeURIComponent(result.confirmationToken)) as Route,
  );
}
