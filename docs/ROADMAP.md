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

## Phase 2 — Product configuration and cart: next

- Complete static Product Detail composition.
- Product option groups and defaults.
- Price-delta calculation.
- Add-to-cart flow.
- Cart drawer and full cart page.
- Quantity, removal, subtotal, and empty state.
- Versioned local persistence.
- Responsive and accessibility verification.
- Light/dark theme infrastructure with shared product images.

Definition of done:

- A customer can configure any product, add it to the cart, distinguish different configurations, edit quantity, remove lines, and retain a valid cart after reload.
- Keyboard, screen-reader names, focus, RTL, mobile layout, and reduced-motion behavior are verified.
- Format, lint, typecheck, tests, and production build pass.

## Phase 3 — Content pages

- Refine Home static composition.
- About, Journal, Locations, Contact, and FAQ content structure.
- Replace mock content when real brand information is supplied.

## Phase 4 — Motion

- Experience-mode hero and product storytelling.
- Page and section transitions.
- Reduced-motion equivalents.
- Mobile simplification.

Do not add heavy motion before Phase 2 utility flows are correct.

## Phase 5 — Real commerce integration

Blocked until fulfillment, geography, payment, order backend/POS, inventory, tax, and fee decisions are supplied.

- Checkout integration.
- Order submission.
- Payment.
- Real availability.
- Production success-state data.
