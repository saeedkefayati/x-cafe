"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { catalogProducts } from "@/data/products";
import {
  CART_STORAGE_KEY,
  addCartLine,
  parseCartSnapshot,
  removeCartLine,
  resolveCartLines,
  serializeCartSnapshot,
  setCartLineQuantity,
} from "@/lib/cart";
import type {
  CartLineRecord,
  ProductSelection,
  ResolvedCartLine,
} from "@/types/domain";
import { CartDrawer } from "./cart-drawer";
import styles from "./cart.module.css";

interface CartContextValue {
  lines: ResolvedCartLine[];
  itemCount: number;
  subtotal: number;
  isHydrated: boolean;
  isDrawerOpen: boolean;
  addItem: (
    productId: string,
    selection: ProductSelection,
    quantity?: number,
  ) => void;
  setQuantity: (id: string, quantity: number) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [records, setRecords] = useState<CartLineRecord[]>([]);
  const [isHydrated, setIsHydrated] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [announcement, setAnnouncement] = useState("");

  useEffect(() => {
    const hydrationFrame = window.requestAnimationFrame(() => {
      const stored = window.localStorage.getItem(CART_STORAGE_KEY);
      setRecords(stored ? parseCartSnapshot(stored, catalogProducts) : []);
      setIsHydrated(true);
    });

    const syncCart = (event: StorageEvent) => {
      if (event.key !== CART_STORAGE_KEY) return;
      setRecords(
        event.newValue
          ? parseCartSnapshot(event.newValue, catalogProducts)
          : [],
      );
    };
    window.addEventListener("storage", syncCart);
    return () => {
      window.cancelAnimationFrame(hydrationFrame);
      window.removeEventListener("storage", syncCart);
    };
  }, []);

  useEffect(() => {
    if (!isHydrated) return;
    window.localStorage.setItem(
      CART_STORAGE_KEY,
      serializeCartSnapshot(records),
    );
  }, [isHydrated, records]);

  const lines = useMemo(
    () => resolveCartLines(records, catalogProducts),
    [records],
  );
  const itemCount = lines.reduce((total, line) => total + line.quantity, 0);
  const subtotal = lines.reduce((total, line) => total + line.totalPrice, 0);

  const addItem = useCallback(
    (productId: string, selection: ProductSelection, quantity = 1) => {
      const product = catalogProducts.find((item) => item.id === productId);
      if (!product) return;
      setRecords((current) =>
        addCartLine(current, product, selection, quantity),
      );
      setAnnouncement(
        `${quantity.toLocaleString("fa-IR")} عدد ${product.shortName ?? product.name} به سبد اضافه شد.`,
      );
      setIsDrawerOpen(true);
    },
    [],
  );

  const setQuantity = useCallback((id: string, quantity: number) => {
    setRecords((current) => setCartLineQuantity(current, id, quantity));
  }, []);

  const removeItem = useCallback((id: string) => {
    setRecords((current) => removeCartLine(current, id));
    setAnnouncement("محصول از سبد حذف شد.");
  }, []);

  const clearCart = useCallback(() => {
    setRecords([]);
    setAnnouncement("سبد خرید خالی شد.");
  }, []);

  const value = useMemo<CartContextValue>(
    () => ({
      lines,
      itemCount,
      subtotal,
      isHydrated,
      isDrawerOpen,
      addItem,
      setQuantity,
      removeItem,
      clearCart,
      openCart: () => setIsDrawerOpen(true),
      closeCart: () => setIsDrawerOpen(false),
    }),
    [
      addItem,
      clearCart,
      isDrawerOpen,
      isHydrated,
      itemCount,
      lines,
      removeItem,
      setQuantity,
      subtotal,
    ],
  );

  return (
    <CartContext.Provider value={value}>
      {children}
      <CartDrawer />
      <p className={styles.liveRegion} role="status" aria-live="polite">
        {announcement}
      </p>
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
}
