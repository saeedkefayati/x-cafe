# Project state

Last updated: 2026-08-25

Foundation commit: `1d692fe` (`feat: build cafe commerce foundation`)
Phase 2 commit: `567dfab` (`feat: complete product configuration and cart`)
Phase 3 commit: `363765b` (`feat: complete editorial content experience`)
Phase 4 commit: `a2abecf` (`feat: add responsive motion system`)
Phase 5 commit: `2c2ddf9` (`feat: add pickup checkout foundation`)

Phase 6 commit: `a837807` (`feat: add guest pickup checkout`)
Phase 7 commit: `8dea80c` (`feat: add pickup branches and timing`)

## Current phase

Phase 8 server-confirmed demo ordering is implemented and awaiting review and
commit. Checkout can validate a guest order through a Server Action and issue a
signed, expiring demo confirmation. It does not persist contact data or send an
order to a branch, POS, or external provider. Real ordering remains blocked on
production confirmation, an order provider, authoritative availability, and fee
decisions.

## Completed

- Next.js 16.3.2 App Router project with React 19.2.8 and TypeScript 5.9.
- Persian RTL root layout and responsive application shell.
- Semantic color, type, spacing, radius, shadow, motion, and layering tokens.
- Layout, typography, control, navigation, and product-card primitives.
- Routes for Home, Menu, Category, Product, Search, Cart, Checkout, Success, Journal, About, Locations, Contact, FAQ, Privacy, Terms, and custom 404.
- Domain models for products, categories, configurable options, ingredients, flavor notes, cart items, posts, locations, and FAQ entries.
- Fifteen catalog products: five hot coffees, five cold coffees, and five cakes.
- Fifteen product-card images at 1122×1402 using the approved shared studio art direction.
- Automated lint, type, component, data-integrity, and production-build checks.
- Product configurator for available size, milk, sweetness, temperature, and extra options.
- Price totals derived from the current product catalog and selected option deltas.
- Cart identity based on product id plus the normalized full customization.
- Accessible cart drawer and full cart page with quantity, removal, subtotal, and empty states.
- Versioned, validated browser persistence with cross-tab synchronization.
- Persistent system/light/dark theme infrastructure using the same approved product images in both themes.
- Cart, pricing, persistence, theme, keyboard, RTL, mobile, and desktop verification.
- Refined Home composition with category paths, six featured products, editorial principles, journal previews, and an honest branch-status callout.
- Expanded About page with a provisional brand narrative, product-led imagery, and reusable principles.
- Three complete journal entries with cover images, publication dates, long-form bodies, and related catalog products.
- Locations and Contact pages that explicitly avoid fabricated addresses, hours, contact routes, or nonfunctional submission claims.
- Expanded FAQ covering configuration, allergens, mock prices, cart persistence, fulfillment, and payment status.
- Functional product search across names, descriptions, and flavor notes with Persian character normalization.
- Responsive light/dark browser verification for Home, About, Journal, Locations, Contact, and FAQ.
- App Router template-based page entry with a native CSS motion contract and no added animation dependency.
- Scroll-linked section reveals limited to experience and editorial content.
- Controlled Home and Product hero entry, depth, and staggered flavor-note motion.
- Shared product-card and journal-cover continuity through React View Transitions where supported, with normal navigation fallback.
- Subtle card lift, media emphasis, option selection, and quantity feedback.
- Explicit reduced-motion rules that keep every piece of content immediately visible and remove positional motion.
- Responsive light/dark browser verification for Home and Product Detail at desktop and mobile sizes, with no overflow, broken images, or console issues.
- Pickup-only fulfillment scope for version one, with delivery address and fee removed from the initial flow.
- Provider-neutral pickup order request/result contracts and explicit commerce configuration blockers.
- Checkout review derived from the current resolved catalog while excluding browser price snapshots from future authoritative order input.
- Generic contact normalization and validation for name, phone, and optional email.
- Responsive Pickup Checkout preview with contact fields, fulfillment status, payment status, cart review, and disabled real submission.
- Checkout preview explicitly prevents form transmission and does not persist customer contact data.
- Guest-only Checkout with no registration, login, session, or customer-account dependency.
- Pay-at-pickup selected for version one, with no online payment gateway.
- Accessible inline validation for guest name, phone, and optional email fields.
- Three explicitly sample Tehran pickup branches shared by the Locations page and Checkout.
- Accessible, non-persistent branch selection with current acceptance status.
- Fixed 45-minute pickup preparation and a last-order boundary 45 minutes before closing.
- No customer geolocation request or inaccurate route-time estimate.
- Server-side revalidation of guest contact, cart, current product data, branch,
  and acceptance hours for demo submissions.
- Signed, 24-hour demo confirmations containing no customer contact data.
- Success-state rendering only after server confirmation, followed by browser
  cart cleanup.
- Explicit separation between a testable end-to-end demo and real branch/POS
  dispatch.

## Catalog

### Hot coffee

- Espresso
- Americano
- Cappuccino
- Café Latte
- Flat White

### Cold coffee

- Iced Americano
- Iced Latte
- Iced Caramel Latte
- Cold Brew
- Espresso Tonic

### Cakes

- Burnt Basque Cheesecake
- Carrot & Walnut Cake
- Chocolate Fudge Cake
- Lemon Poppy Seed Cake
- Red Velvet Cake

Catalog data lives in `src/data/products.ts`. Product assets and their manifest live in `public/images/products`.

## Next recommended work

1. Confirm or replace the three sample branch records before production.
2. Choose the order destination: custom backend, ecommerce provider, or POS.
3. Define production availability and tax/service-fee rules.
4. Review and replace provisional brand and operational content when real material is ready.

See [`../ROADMAP.md`](../ROADMAP.md) for phase boundaries and acceptance targets.

## Mock or unresolved

- Final cafe name and logo.
- Final prices and complete production menu.
- Production confirmation for the sample pickup locations, phones, and hours.
- Order backend, ecommerce provider, or POS integration.
- Inventory source and availability rules.
- Tax and service-fee rules.
- Real branches, contact information, legal copy, and privacy details.

Customer accounts and online payment are intentionally outside version one,
not unresolved requirements.

Do not invent these values. Use explicit mock labeling or abstractions until the user decides them.
