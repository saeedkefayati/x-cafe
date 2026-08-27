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
- Home and Product Detail LCP images use the Next.js 16 eager-loading contract, and an
  unused second font download was removed.
- Responsive browser checks passed at 390px, 768px, and 1440px in light and dark
  themes with no horizontal overflow or console errors.
- Automated interaction contracts cover fine-pointer and reduced-motion rules;
  format, lint, typecheck, tests, and production build pass.

## Phase 11 — Signature scroll storytelling: complete

This phase completes the cinematic portion of Phase 4 from
`docs/archive/pre-codex-pack` while preserving the stable functional layer.

- Build one memorable Home signature sequence: Hero handoff into a three- or
  four-state product transformation using only approved catalog products.
- Use a controlled pinned/scrubbed desktop scene with natural page scroll,
  followed by a functional menu gateway and a breathing section.
- Provide a shorter, non-pinned mobile composition with native scrolling and
  immediately readable content.
- Add a restrained Product Detail ingredient/flavor narrative without delaying
  configuration or Add to Cart.
- Keep Menu, Cart, Checkout, Search, FAQ, Contact, and order confirmation in
  low-motion utility mode.
- Load cinematic motion code only on routes that use it, clean up timelines on
  navigation, and animate transform/opacity before expensive visual properties.
- Provide a complete reduced-motion version with no long scrub, parallax, or
  content hidden behind animation.
- Generate versioned isolated ingredient assets only after the exact signature
  sequence and art direction are approved; never overwrite catalog images.

Completed with a progressively enhanced, CSS-native Home sequence that moves
from Espresso to Café Latte and Iced Caramel Macchiato. Supporting desktop browsers
receive one controlled sticky scene driven by the page scroll; unsupported
browsers, mobile layouts, and reduced-motion users receive the same three states
in readable document flow. No JavaScript timeline dependency or new image asset
was added.

The current visual refinement follows a product-centered, Apple-style reveal
model rather than a split editorial composition: all three products transform on
one stable central axis, copy and flavor notes stay secondary, soft surface tones
change with the product, and short masked transitions prevent distracting text
overlap. Rounded panels and restrained decorative shapes provide the requested
warmer, more playful personality without introducing looping motion.

Every Product Detail page now adds a restrained flavor-profile narrative after
the complete configurator and Add to Cart action. It uses current catalog flavor
notes and accessible intensity labels and remains static on mobile and under
reduced motion.

Definition of done:

- The Home story has three complete semantic states before enhancement and exits
  naturally into the existing menu gateway.
- Desktop pinning is progressive, bounded, and free of manual scroll listeners.
- Mobile and reduced-motion layouts never pin or hide story content.
- Product configuration and Add to Cart precede any Product Detail narrative.
- Menu, Cart, Checkout, Search, FAQ, Contact, and order confirmation remain
  unchanged low-motion utility flows.
- Responsive browser checks pass without horizontal overflow, missing content,
  or a scroll trap; format, lint, types, tests, and production build pass.

## Phase 12 — Brand and operational reference data: complete

- Establish «ایکس کافه» as the customer-facing name.
- Add an original responsive vector mark and app icon.
- Confirm the three Tehran branch records from the user-approved reference.
- Apply current reference prices only to products with a direct source match.
- At this phase, keep unmatched products and configuration deltas visibly
  temporary; Phase 15 later replaces the unmatched products.
- Refresh Home, About, Locations, Contact, shell, metadata, FAQ, and commerce
  blockers to reflect the settled identity and branch data.

Real order dispatch remains outside this phase because the provider, inventory
source, and fee policy are still unresolved.

## Phase 13 — Frontend content and discovery refinement: complete

- Standardize customer-facing Persian copy across the complete route set.
- Add low-motion frontend Menu filters with accessible selected state and live
  result count.
- Add branch map-search links without requesting customer location or adding a
  routing SDK.

## Phase 14 — Publishing and content-safety refinement: complete

- Add a dedicated 1200×630 brand social card.
- Add semantic active category navigation.
- Clarify allergen-data limits and severe-sensitivity guidance on Menu and
  Product Detail.

## Phase 15 — Source-matched launch catalog: complete

- Replace the five unmatched products with direct items from the approved
  Felestin reference menu while preserving five products per category.
- Generate five unique `shared-studio-v2` images without overwriting historical
  assets, and publish a versioned current contact sheet.
- Make all fifteen base prices source-matched and keep configuration deltas
  explicitly temporary.
- Remove the now-redundant reference-price Menu filter.

## Phase 16 — Visual consistency and utility UX: complete

- Remove redundant Home, Contact, and Locations calls to action and all
  customer-facing pricing-status badges.
- Establish one control radius for interactive UI and reserve pills for compact
  status badges.
- Standardize interface icons on Iconsax and enlarge key numeric markers.
- Replace the duplicate Menu controls with one category, filter, and sort
  toolbar shared by all Menu routes.
- Rebuild Search, branch maps, Contact information architecture, FAQ motion,
  Journal metadata, Product ingredients, cart clearing, Checkout steps, and the
  order-failure state.
- Keep branch-map display runtime-independent by committing versioned light and
  dark SVGs generated from branch coordinates and OpenStreetMap geometry; use
  coordinate links for Google Maps, Apple Maps, Neshan, and Balad routing.
- Present Journal topics as tags on editorial pages rather than repeating them
  in preview cards, and expose catalog flavor profiles on every Product Detail.
- Keep `/product/[slug]` as the unambiguous product route while
  `/menu/[category]` remains the category namespace.

Definition of done:

- Utility pages retain low motion, accessible focus and keyboard behavior, and
  a consistent rounded-control vocabulary.
- Contact does not duplicate branch records; Locations is the canonical visual
  source for addresses, phones, hours, maps, and route links.
- All quality commands and responsive browser checks pass without overflow,
  broken images, or console errors.

Primary historical references:

- `docs/archive/pre-codex-pack/08_motion_system_spec.md`
- `docs/archive/pre-codex-pack/09_home_scroll_storyboard.md`
- `docs/archive/pre-codex-pack/10_product_detail_storyboard.md`
- `docs/archive/pre-codex-pack/20_home_experience_blueprint.md`
- `docs/archive/pre-codex-pack/22_motion_transition_matrix.md`
