# Project state

Last updated: 2026-08-24

Foundation commit: `1d692fe` (`feat: build cafe commerce foundation`)
Phase 2 commit: `567dfab` (`feat: complete product configuration and cart`)
Phase 3 commit: `363765b` (`feat: complete editorial content experience`)

## Current phase

Phase 4 motion implementation is complete and awaiting approval. The next implementation phase is real commerce integration, which remains blocked on operational and provider decisions.

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

1. Review and approve the Phase 4 motion behavior.
2. Review and replace the provisional Home and About copy when real brand material is ready.
3. Confirm the real cafe name, logo, voice, founder story, and city.
4. Supply real location, opening hours, contact routes, and social links.
5. Keep checkout informational until fulfillment, geography, payment, and backend choices are supplied.

See [`../ROADMAP.md`](../ROADMAP.md) for phase boundaries and acceptance targets.

## Mock or unresolved

- Final cafe name and logo.
- Final prices and complete production menu.
- Fulfillment model: pickup, delivery, or both.
- Country, city, delivery radius, and address rules.
- Payment gateway.
- Order backend, ecommerce provider, or POS integration.
- Inventory source and availability rules.
- Tax, delivery, and service-fee rules.
- Real branches, contact information, legal copy, and privacy details.

Do not invent these values. Use explicit mock labeling or abstractions until the user decides them.
