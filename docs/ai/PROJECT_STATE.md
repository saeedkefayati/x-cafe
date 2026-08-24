# Project state

Last updated: 2026-08-24

Baseline commit: `1d692fe` (`feat: build cafe commerce foundation`)

## Current phase

Phase 1 is complete. The project is ready for Phase 2: functional product configuration and cart flow.

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

1. Product configurator with size, milk, sweetness, temperature, and extras.
2. Correct price-delta calculation.
3. Cart state keyed by the full customization combination.
4. Add, remove, quantity update, subtotal, and empty state.
5. Cart persistence across browser sessions.
6. Accessible cart drawer and responsive product add-to-cart flow.
7. Light/dark theme infrastructure using shared product images.

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
