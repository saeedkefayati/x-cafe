# Design direction

## Brand feeling

Premium, minimal, warm, editorial, crafted, contemporary, calm, and sensory.

The visual system should create confidence through restraint: product-first imagery, generous spacing, precise typography, and limited decorative elements.

## Current foundations

- Semantic tokens live in `src/styles/tokens.css`.
- Global theme and accessibility behavior live in `src/styles/globals.css`.
- Component styling uses CSS Modules.
- Vazirmatn provides a unified Persian and Latin type system across body and
  display text.
- Reusable layout and typography primitives live under `src/components/primitives`.

## Palette direction

- Paper and warm white canvas tones.
- Ink and Espresso for high-contrast text and dark surfaces.
- Caramel, Matcha, and Berry as controlled accents.
- Feedback colors are semantic and must retain accessible contrast.

Do not add arbitrary hex values to feature components when a semantic token exists or should exist.

## Product-image style bible

All catalog product photography follows `shared-studio-v2`:

- Portrait 4:5 composition at 1122×1402.
- Photorealistic premium editorial food photography.
- Seamless warm paper-cream background.
- Matte honed pale-limestone surface in the same color family.
- Very soft background transition and subtle tactile microtexture.
- Diffused upper-left key light.
- Warm-white bounce from the right.
- Delicate natural grounded shadow.
- Slight eye-level camera and subtle 70mm-lens feel.
- One centered product with generous negative space.
- No props, hands, people, text, logo, watermark, garnish, or busy scenery unless a future brief explicitly requires one.

The asset manifest is `public/images/products/manifest.json`.

## Light and dark themes

Use the same product image assets in both themes.

- Light theme may blend the image well into paper surfaces.
- Dark theme should frame the light editorial image with warm Espresso surfaces, subtle borders, and a soft deeper shadow.
- Do not apply brightness, hue, saturation, or color filters to product images.
- Theme-specific hero or campaign imagery may be created later when a composed scene requires it.

## Focus and interaction

- Use `:focus-visible` for keyboard focus.
- Prefer a border-color change plus a subtle state-colored shadow.
- Never remove focus indication without an accessible replacement.
- Controls must have meaningful hover, active, disabled, and error states.
- Positional hover feedback belongs inside `(hover: hover) and (pointer: fine)`
  so touch users never depend on or inherit a sticky hover state.
- Product cards keep their text surface stationary. Pointer emphasis belongs to
  the linked product media and uses the lighter interactive shadow, a maximum
  two-pixel lift, and a restrained image scale.
- Whole-card lift is reserved for a card that is itself one complete link, such
  as a category path; editorial cards with several links remain stationary.

## Motion

- Build static, functional layout first.
- Use motion selectively in experience-mode pages.
- Utility pages remain fast and low-motion.
- Respect `prefers-reduced-motion` and provide equivalent non-animated meaning.
- Avoid autoplay motion that interferes with reading, selection, or checkout.
- Use the shared contract in `src/styles/motion.css` for page entry, section reveal, shared-media timing, and accessibility fallback.
- Home and Product Detail may use controlled opacity, small translation, crop, and scale; never loop their hero motion automatically.
- Product and journal media may use React View Transitions for continuity, but navigation and content must remain complete without browser support.
- Keep scroll-linked effects progressive: unsupported browsers receive the final visible state without JavaScript or a loading gate.
- Prefer transform and opacity; avoid manual scroll listeners, layout animation, large blur, and heavy shadow animation.

## Responsive behavior

- Mobile composition is intentional, not a scaled desktop layout.
- Simplify heavy motion and layered scenes on small screens.
- Reduce reveal distance on compact screens and never pin a mobile reading or shopping section.
- Preserve tap-target size, readable line length, and clear content order.
- Product cards and configuration controls must remain usable at narrow widths and high text zoom.
