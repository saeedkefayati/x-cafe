# 0001 — Product image style

Status: Accepted

Date: 2026-08-24

## Decision

All standard catalog product images use the `shared-studio-v2` art direction:

- Photorealistic premium editorial product photography.
- Portrait 4:5 at 1122×1402.
- Warm paper-cream seamless backdrop.
- Matte pale-limestone surface.
- Diffused upper-left key and warm-white right bounce.
- Soft natural grounded shadow.
- Centered product with generous negative space.
- No props, text, logo, watermark, hands, or busy scene.

## Rationale

The style keeps a diverse menu cohesive, supports quick recognition in a grid, and matches the warm editorial brand direction.

## Implementation

- Product assets: `public/images/products`.
- Asset manifest: `public/images/products/manifest.json`.
- Data references: `src/data/products.ts`.
- The built-in GPT Image workflow produced the current generated assets.

New assets must reference an approved existing product image and preserve the shared backdrop, surface, lighting, framing, and avoid list.
