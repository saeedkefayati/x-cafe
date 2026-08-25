import { describe, expect, it } from "vitest";
import { DEFAULT_SITE_ORIGIN, resolveSiteConfig } from "./site";

describe("site publishing configuration", () => {
  it("keeps previews and placeholder domains out of search indexes", () => {
    expect(resolveSiteConfig({})).toMatchObject({
      origin: DEFAULT_SITE_ORIGIN,
      isDomainConfigured: false,
      isIndexingEnabled: false,
    });
    expect(
      resolveSiteConfig({
        SITE_URL: "https://your-domain.example",
        SITE_INDEXING_ENABLED: "true",
      }),
    ).toMatchObject({
      origin: DEFAULT_SITE_ORIGIN,
      isDomainConfigured: false,
      isIndexingEnabled: false,
    });
  });

  it("enables indexing only for a valid configured domain and explicit opt-in", () => {
    expect(
      resolveSiteConfig({ SITE_URL: "https://cafe.test.ir/path" }),
    ).toMatchObject({
      origin: "https://cafe.test.ir",
      isDomainConfigured: true,
      isIndexingEnabled: false,
    });
    expect(
      resolveSiteConfig({
        SITE_URL: "https://cafe.test.ir",
        SITE_INDEXING_ENABLED: "true",
      }),
    ).toMatchObject({
      origin: "https://cafe.test.ir",
      isDomainConfigured: true,
      isIndexingEnabled: true,
    });
  });

  it("rejects unsafe or non-web origins", () => {
    for (const SITE_URL of [
      "not-a-url",
      "ftp://cafe.test.ir",
      "https://user:pass@cafe.test.ir",
    ]) {
      expect(
        resolveSiteConfig({ SITE_URL, SITE_INDEXING_ENABLED: "true" }),
      ).toMatchObject({
        origin: DEFAULT_SITE_ORIGIN,
        isIndexingEnabled: false,
      });
    }
  });
});
