import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

const source = (...segments: string[]) =>
  readFileSync(join(process.cwd(), "src", ...segments), "utf8");

const productCss = source("components", "product", "product.module.css");
const controlsCss = source("components", "controls", "controls.module.css");
const journalCss = source("components", "content", "journal-card.module.css");
const siteCss = source("app", "site.module.css");
const signatureCss = source("components", "home", "signature-story.module.css");
const flavorStoryCss = source(
  "components",
  "product",
  "flavor-story.module.css",
);

describe("interaction accessibility contract", () => {
  it("keeps positional hover feedback on fine pointers", () => {
    for (const css of [productCss, controlsCss, journalCss, siteCss]) {
      expect(css).toContain("@media (hover: hover) and (pointer: fine)");
    }
  });

  it("keeps the product card surface stable and emphasizes only its media", () => {
    expect(productCss).not.toContain(".card:hover {");
    expect(productCss).toContain(".mediaLink:hover {");
    expect(productCss).toContain("box-shadow: var(--shadow-interactive)");
    expect(productCss).toContain("transform: scale(1.015)");
  });

  it("provides non-positional reduced-motion fallbacks", () => {
    expect(productCss).toContain("@media (prefers-reduced-motion: reduce)");
    expect(productCss).toContain(".mediaLink:hover .image");
    expect(productCss).toContain("transform: none");
  });

  it("keeps the signature scroll scene progressive and reducible", () => {
    expect(signatureCss).toContain("@supports (animation-timeline: view())");
    expect(signatureCss).toContain("view-timeline-name: --signature-story");
    expect(signatureCss).toContain("position: sticky");
    expect(signatureCss).toContain("@media (prefers-reduced-motion: reduce)");
    expect(signatureCss).toContain("height: auto !important");
  });

  it("keeps product flavor storytelling restrained and reducible", () => {
    expect(flavorStoryCss).toContain("@supports (animation-timeline: view())");
    expect(flavorStoryCss).toContain("view-timeline-name: --flavor-note");
    expect(flavorStoryCss).toContain("position: sticky");
    expect(flavorStoryCss).toContain("@media (prefers-reduced-motion: reduce)");
    expect(flavorStoryCss).toContain("animation: none");
  });
});
