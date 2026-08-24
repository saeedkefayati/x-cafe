# Roadmap

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

## Phase 4 — Motion: complete, approval pending

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

## Phase 5 — Real commerce integration

Blocked until fulfillment, geography, payment, order backend/POS, inventory, tax, and fee decisions are supplied.

- Checkout integration.
- Order submission.
- Payment.
- Real availability.
- Production success-state data.
