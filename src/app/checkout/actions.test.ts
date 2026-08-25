import { afterEach, describe, expect, it, vi } from "vitest";
import { locations } from "@/data/locations";
import { catalogProducts } from "@/data/products";
import {
  addCartLine,
  normalizeSelection,
  serializeCartSnapshot,
} from "@/lib/cart";
import { submitDemoOrder } from "./actions";

const redirectMock = vi.hoisted(() => vi.fn());

vi.mock("next/navigation", () => ({ redirect: redirectMock }));

const espresso = catalogProducts.find((product) => product.id === "espresso")!;
const gholhak = locations.find((location) => location.slug === "gholhak")!;

function validFormData() {
  const formData = new FormData();
  formData.set("name", "سعید رضایی");
  formData.set("phone", "۰۹۱۲۱۲۳۴۵۶۷");
  formData.set("email", "saeed@example.com");
  formData.set("pickupLocationId", gholhak.id);
  formData.set(
    "cartSnapshot",
    serializeCartSnapshot(
      addCartLine([], espresso, normalizeSelection(espresso), 2),
    ),
  );
  return formData;
}

describe("submitDemoOrder", () => {
  afterEach(() => {
    vi.useRealTimers();
    redirectMock.mockReset();
  });

  it("redirects an accepted order with a signed confirmation", async () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2026-08-25T09:00:00.000Z"));

    await submitDemoOrder({ message: "" }, validFormData());

    expect(redirectMock).toHaveBeenCalledOnce();
    expect(redirectMock).toHaveBeenCalledWith(
      expect.stringMatching(
        /^\/order\/success\?confirmation=[A-Za-z0-9_%.-]+$/,
      ),
    );
  });

  it("returns server validation errors without redirecting", async () => {
    const formData = validFormData();
    formData.set("pickupLocationId", "unknown");

    await expect(
      submitDemoOrder({ message: "" }, formData),
    ).resolves.toMatchObject({
      message: "شعبهٔ تحویل معتبر نیست.",
      fieldErrors: {
        pickupLocationId: "یکی از شعبه‌های تحویل را انتخاب کنید.",
      },
    });
    expect(redirectMock).not.toHaveBeenCalled();
  });
});
