import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

const stylesPath = join(process.cwd(), "src", "styles");
const motionCss = readFileSync(join(stylesPath, "motion.css"), "utf8");
const globalCss = readFileSync(join(stylesPath, "globals.css"), "utf8");

describe("motion accessibility contract", () => {
  it("keeps enhanced motion optional and imports the shared contract", () => {
    expect(globalCss).toContain('@import "./motion.css"');
    expect(motionCss).toContain("@supports (animation-timeline: view())");
    expect(motionCss).toContain("[data-reveal]");
  });

  it("removes page, scroll, and shared-element motion when requested", () => {
    expect(motionCss).toContain("@media (prefers-reduced-motion: reduce)");
    expect(motionCss).toContain("animation: none !important");
    expect(motionCss).toContain("animation-duration: 0s !important");
  });
});
