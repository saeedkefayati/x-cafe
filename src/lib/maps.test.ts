import { describe, expect, it } from "vitest";
import { createMapSearchUrl } from "./maps";

describe("createMapSearchUrl", () => {
  it("creates a Google Maps search URL without changing the address", () => {
    const url = new URL(createMapSearchUrl("خیابان فلسطین، پلاک ۳۳"));

    expect(url.origin + url.pathname).toBe(
      "https://www.google.com/maps/search/",
    );
    expect(url.searchParams.get("api")).toBe("1");
    expect(url.searchParams.get("query")).toBe("خیابان فلسطین، پلاک ۳۳، تهران");
  });
});
