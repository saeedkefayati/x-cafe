import { describe, expect, it } from "vitest";
import { createMapDirectionsUrl } from "./maps";

const lat = "35.769804";
const lng = "51.440688";

describe("createMapDirectionsUrl", () => {
  it("creates a Google Maps directions URL", () => {
    const url = new URL(createMapDirectionsUrl("google", lat, lng));

    expect(url.origin + url.pathname).toBe("https://www.google.com/maps/dir/");
    expect(url.searchParams.get("api")).toBe("1");
    expect(url.searchParams.get("destination")).toBe(`${lat},${lng}`);
    expect(url.searchParams.get("dir_action")).toBe("navigate");
  });

  it("creates an Apple Maps directions URL", () => {
    const url = new URL(createMapDirectionsUrl("apple", lat, lng));

    expect(url.origin + url.pathname).toBe("https://maps.apple.com/");
    expect(url.searchParams.get("daddr")).toBe(`${lat},${lng}`);
    expect(url.searchParams.get("dirflg")).toBe("d");
  });

  it("creates a Neshan coordinate URL", () => {
    expect(createMapDirectionsUrl("neshan", lat, lng)).toBe(
      `https://neshan.org/maps/@${lat},${lng},16z,0p`,
    );
  });

  it("creates a Balad coordinate URL", () => {
    const url = new URL(createMapDirectionsUrl("balad", lat, lng));

    expect(url.origin + url.pathname).toBe("https://balad.ir/location");
    expect(url.searchParams.get("latitude")).toBe(lat);
    expect(url.searchParams.get("longitude")).toBe(lng);
    expect(url.searchParams.get("zoom")).toBe("16");
  });
});
