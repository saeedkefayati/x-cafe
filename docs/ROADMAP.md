# Roadmap

## Phase mapping

The archived Pre-Codex pack defined five broad implementation phases:
Foundation, Product/Cart, Content, Motion, and Commerce Integration. The current
roadmap keeps that sequence but splits commerce, publishing safety, and quality
work into smaller reviewable phases. Current Phase 4 delivered the safe motion
foundation; the full signature scroll storytelling described by archived Phase
4 is intentionally carried forward as current Phase 11 rather than dropped.

## Phase 1 — Foundation: complete

- Project and route architecture.
- Design tokens and global foundations.
- Layout, typography, and control primitives.
- Header and footer shell.
- Domain models and mock content.
- Menu and product-card baseline.
- Fifteen-product catalog and cohesive product imagery.
- Lint, type, test, build, and responsive browser baseline.

## Phase 2 — Product configuration and cart: complete

- Complete static Product Detail composition.
- Product option groups and defaults.
- Price-delta calculation.
- Add-to-cart flow.
- Cart drawer and full cart page.
- Quantity, removal, subtotal, and empty state.
- Versioned local persistence.
- Responsive and accessibility verification.
- Light/dark theme infrastructure with shared product images.

Completed with normalized product selections, derived pricing, a versioned
browser cart, accessible drawer and cart page, and persistent light/dark theme
preference. The same approved product images are used without filters in both
themes.

Definition of done:

- A customer can configure any product, add it to the cart, distinguish different configurations, edit quantity, remove lines, and retain a valid cart after reload.
- Keyboard, screen-reader names, focus, RTL, mobile layout, and reduced-motion behavior are verified.
- Format, lint, typecheck, tests, and production build pass.

## Phase 3 — Content pages: complete

- Refined Home composition with category discovery, featured products, brand approach, journal, and visit status.
- Expanded About, Journal, Locations, Contact, and FAQ content structure.
- Added three editorial journal entries with cover images and related products.
- Removed customer-facing development copy and avoided publishing fabricated operational details.
- Final replacement of the provisional brand story, name, locations, contact routes, and operational FAQ remains pending until real information is supplied and approved.

Completed in commit `363765b` (`feat: complete editorial content experience`).

## Phase 4 — Motion foundation: complete

- Route-entry motion built on the App Router template lifecycle.
- Scroll-linked reveals for Home, About, Product Detail, and Journal content sections.
- Controlled Home and Product hero entrances with subtle scroll depth.
- Shared product and journal media continuity on supporting browsers, with a complete static fallback.
- Card, option, quantity, and button feedback kept short and interruptible.
- Explicit reduced-motion equivalents and shorter mobile movement.

Definition of done:

- Experience pages use a consistent motion vocabulary without delaying reading or shopping actions.
- Menu, cart, checkout, and other utility flows remain low-motion.
- Content is immediately available when enhanced motion or View Transitions are unsupported.
- Reduced-motion removes page, scroll, hero, card, and shared-element movement.
- Desktop and mobile light/dark browser checks pass without overflow, broken images, or console issues.

Completed in commit `a2abecf` (`feat: add responsive motion system`).

The cinematic Home transformation and richer Product Detail ingredient
storytelling from the original Pre-Codex Phase 4 were not part of this
foundation commit. They are the explicit scope of current Phase 11 below.

## Phase 5 — Pickup commerce foundation: complete

Confirmed scope for version one:

- Pickup-only fulfillment.
- No customer delivery address, delivery radius, or delivery fee.
- Provider-neutral order request and typed result contracts.
- Authoritative server/provider boundary: browser totals are review-only.
- Pickup Checkout preview with contact fields, cart review, and explicit configuration blockers.
- No contact-data persistence, order creation, or payment until the remaining decisions are configured.

Completed in commit `2c2ddf9` (`feat: add pickup checkout foundation`).

## Phase 6 — Guest pickup Checkout: complete

- Checkout is guest-only; registration and login are intentionally deferred.
- Payment is made at pickup; the first version has no online gateway.
- Contact fields use local, accessible validation without browser persistence or transmission.
- The payment choice is visible in Checkout and is no longer a configuration blocker.

Completed in commit `a837807` (`feat: add guest pickup checkout`).

## Phase 7 — Sample branches and pickup timing: complete

- Three explicitly sample Tehran branches with address, phone, and daily hours.
- Accessible branch selection in Checkout without browser persistence.
- Fixed 45-minute preparation time for every order and branch.
- Same-day acceptance stops 45 minutes before closing.
- Customer geolocation and route-time estimation are intentionally deferred to
  avoid an inaccurate estimate and an unnecessary permission request.

Real submission remains blocked until the sample branch data is confirmed for
production and the order backend/POS, availability source, and tax/service-fee
policy are supplied.

Completed in commit `8dea80c` (`feat: add pickup branches and timing`).

## Phase 8 — Server-confirmed demo order: complete

- Guest checkout submits through a Next.js Server Action.
- Contact, cart shape, product availability, price, branch, and opening hours
  are validated again on the server.
- Accepted demo orders receive a short tracking code and a signed, 24-hour
  confirmation token.
- The success route renders only a valid server-signed confirmation and clears
  the browser cart.
- Customer contact is not placed in the token or persisted in a database.
- No order is dispatched to a real branch, POS, or external provider.

Completed in commit `bbb0f2c` (`feat: add server-confirmed demo orders`).

Before real order submission can replace this demo boundary:

- confirm production branch data and menu prices;
- connect an order backend, ecommerce provider, or POS;
- connect authoritative inventory/availability;
- define taxes and service fees;
- persist idempotent orders and expose real order status.

## Phase 9 — SEO and publishing safety: complete

- Central public-origin configuration with localhost-safe fallback.
- Search indexing requires both a valid production domain and an explicit
  publishing opt-in.
- Canonical, Open Graph, and social-card metadata across public routes.
- Product and journal social metadata uses the matching catalog imagery.
- Generated robots, sitemap, and RTL web-app manifest routes.
- Cart, Checkout, search, order confirmation, and provisional legal pages stay
  out of indexing and the public sitemap.
- Factual privacy and terms notes document browser persistence and the exact
  boundaries of demo ordering without presenting provisional copy as legal
  advice.

Production indexing must remain disabled until final brand, domain, prices,
branches, contact routes, and legal text are approved.

## Phase 10 — Interaction and quality polish: complete

- Product cards keep their text area stationary and apply a restrained
  two-pixel lift, light interactive shadow, and 1.015 media scale only to the
  linked image.
- Positional hover effects across product, category, journal, navigation, and
  reusable controls are limited to fine pointers; touch actions stay complete.
- Keyboard focus, active, disabled, and reduced-motion behavior remains visible
  and non-positional where appropriate.
- The Home hero is visually quieter, display typography uses one Vazirmatn
  family, and Product Detail media stays visible while configuring on desktop
  without pinning the mobile layout.
- Home and Product Detail LCP images use the Next.js 16 preload contract, and an
  unused second font download was removed.
- Responsive browser checks passed at 390px, 768px, and 1440px in light and dark
  themes with no horizontal overflow or console errors.
- Automated interaction contracts cover fine-pointer and reduced-motion rules;
  format, lint, typecheck, tests, and production build pass.

## Phase 11 — Signature scroll storytelling: planned

This phase completes the cinematic portion of Phase 4 from
`docs/archive/pre-codex-pack` while preserving the stable functional layer.

- Build one memorable Home signature sequence: Hero handoff into a three- or
  four-state product transformation using only approved catalog products.
- Use a controlled pinned/scrubbed desktop scene with natural page scroll,
  followed by a functional menu gateway and a breathing section.
- Provide a shorter, non-pinned mobile composition with native scrolling and
  immediately readable content.
- Add a restrained Product Detail ingredient/flavor narrative for selected
  signature products without delaying configuration or Add to Cart.
- Keep Menu, Cart, Checkout, Search, FAQ, Contact, and order confirmation in
  low-motion utility mode.
- Load cinematic motion code only on routes that use it, clean up timelines on
  navigation, and animate transform/opacity before expensive visual properties.
- Provide a complete reduced-motion version with no long scrub, parallax, or
  content hidden behind animation.
- Generate versioned isolated ingredient assets only after the exact signature
  sequence and art direction are approved; never overwrite catalog images.

Primary historical references:

- `docs/archive/pre-codex-pack/08_motion_system_spec.md`
- `docs/archive/pre-codex-pack/09_home_scroll_storyboard.md`
- `docs/archive/pre-codex-pack/10_product_detail_storyboard.md`
- `docs/archive/pre-codex-pack/20_home_experience_blueprint.md`
- `docs/archive/pre-codex-pack/22_motion_transition_matrix.md`
