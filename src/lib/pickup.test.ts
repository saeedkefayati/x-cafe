import { describe, expect, it } from "vitest";
import { locations } from "@/data/locations";
import {
  formatPickupReadyTime,
  getPickupAvailability,
  getPickupReadyAt,
} from "./pickup";

const gholhak = locations.find((location) => location.slug === "gholhak")!;
const felestin = locations.find((location) => location.slug === "felestin")!;

describe("pickup scheduling", () => {
  it("applies each branch opening time in Tehran", () => {
    const atEightThirty = new Date("2026-08-25T05:00:00.000Z");

    expect(getPickupAvailability(gholhak, atEightThirty)).toMatchObject({
      state: "accepting",
      acceptingOrders: true,
    });
    expect(getPickupAvailability(felestin, atEightThirty)).toMatchObject({
      state: "before-opening",
      acceptingOrders: false,
    });
  });

  it("stops accepting orders 45 minutes before closing", () => {
    expect(
      getPickupAvailability(gholhak, new Date("2026-08-25T18:45:00.000Z"))
        .acceptingOrders,
    ).toBe(true);
    expect(
      getPickupAvailability(gholhak, new Date("2026-08-25T18:46:00.000Z")),
    ).toMatchObject({
      state: "last-order-passed",
      acceptingOrders: false,
    });
  });

  it("returns a stable 45-minute ready estimate", () => {
    const orderedAt = new Date("2026-08-25T09:00:00.000Z");

    expect(getPickupReadyAt(gholhak, orderedAt)?.toISOString()).toBe(
      "2026-08-25T09:45:00.000Z",
    );
    expect(formatPickupReadyTime(gholhak, orderedAt)).toContain("۱۳:۱۵");
  });
});
