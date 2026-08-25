"use client";

import { useEffect } from "react";
import { useCart } from "@/components/cart/cart-provider";

export function ClearCartOnConfirmation() {
  const { clearCart, isHydrated } = useCart();

  useEffect(() => {
    if (!isHydrated) return;
    clearCart();
  }, [clearCart, isHydrated]);

  return null;
}
