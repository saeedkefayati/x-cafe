# Project state

Last updated: 2026-08-27

Foundation commit: `1d692fe` (`feat: build cafe commerce foundation`)
Phase 2 commit: `567dfab` (`feat: complete product configuration and cart`)
Phase 3 commit: `363765b` (`feat: complete editorial content experience`)
Phase 4 commit: `a2abecf` (`feat: add responsive motion system`)
Phase 5 commit: `2c2ddf9` (`feat: add pickup checkout foundation`)

Phase 6 commit: `a837807` (`feat: add guest pickup checkout`)
Phase 7 commit: `8dea80c` (`feat: add pickup branches and timing`)
Phase 8 commit: `bbb0f2c` (`feat: add server-confirmed demo orders`)
Phase 9 commit: `93d80c6` (`feat: add safe publishing metadata`)
Phase 10 commit: `e095762` (`feat: complete interaction polish`)
Phase 11 commit: `a57de34` (`feat: add signature scroll storytelling`)

Phase 12 brand and operational reference integration is complete.
Phase 13 frontend content and discovery refinement is complete.
Phase 14 publishing and content-safety refinement is complete.

## Current phase

Phase 14 adds a dedicated brand-level Open Graph image, visible and semantic
active category states, and clearer allergen limitations on Menu and Product
Detail. Five unmatched products and all option deltas stay visibly temporary.
Backend and real-order work are intentionally deferred.

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
- Central site-origin configuration without a committed production domain.
- Opt-in search indexing that defaults to blocking previews and placeholder
  deployments.
- Canonical, Open Graph, Twitter-card, robots, sitemap, and web-manifest
  foundations.
- Public sitemap coverage for Home, Menu, categories, products, Journal,
  articles, About, Locations, Contact, and FAQ.
- Noindex coverage for cart, Checkout, search, order confirmation, and
  provisional legal routes.
- Accurate provisional privacy and terms explanations for local browser state
  and demo-order data handling.
- Product Card hover that keeps the transparent text surface stationary and
  confines subtle lift, shadow, and scale feedback to the linked media.
- Fine-pointer guards for positional hover feedback across reusable controls,
  category links, product media, journal media, navigation, and cart links.
- Unified Vazirmatn display and body typography with the unused Manrope resource
  removed from global font loading.
- A quieter Home display heading and sticky desktop Product Detail media with a
  normal-flow mobile fallback.
- Explicit eager loading for the Home and Product Detail LCP images.
- Interaction contract tests for pointer capability and reduced-motion
  fallbacks.
- Browser verification at 390px, 768px, and 1440px in light and dark themes,
  with no horizontal overflow or console errors.
- A semantic three-state Home signature story using Espresso, Café Latte, and
  Iced Caramel Latte from the approved catalog and image set.
- Progressive desktop pinning and crossfades driven by native CSS view timelines
  without a client component, manual scroll listener, or animation dependency.
- Complete non-pinned mobile, unsupported-browser, and reduced-motion versions
  with every state immediately available in document order.
- A restrained, accessible flavor-profile narrative after the configurator on
  the three signature Product Detail pages, with no impact on utility routes.
- A product-centered Apple-style refinement for the Home signature scene: one
  stable visual axis, short supporting copy, synchronized background tones,
  rounded playful surfaces, and masked state transitions that avoid noisy text
  overlap.
- Approved «ایکس کافه» name across shell, metadata, content, and web manifest.
- Original theme-aware vector logo combining an X intersection and coffee bean.
- Confirmed Gholhak, Felestin, and Pasdaran branch addresses, phones, and hours
  from the user-approved VCafe reference site.
- Toman display backed by IRR storage, with ten direct product price matches and
  five visibly temporary catalog prices.
- Consistent Persian typography across navigation, catalog, Checkout, FAQ,
  journal, contact, legal, and confirmation copy, including standardized
  «تسویه‌حساب» and customer-friendly demo wording.
- Accessible frontend-only Menu filters for all products, best sellers,
  source-matched prices, and products without registered allergens, with live
  result counts and responsive horizontal controls.
- External map search links for all three branches on Locations and Contact,
  derived from confirmed addresses without requesting customer location or
  adding a routing SDK.
- A generated 1200×630 brand-level social card using the approved X mark and
  warm visual system, replacing the generic product contact sheet for default
  Open Graph and Twitter metadata.
- Visible and semantic active states in Menu category navigation using
  `aria-current="page"`.
- Clear allergen limitations on Menu filtering and Product Detail, including a
  contact path for customers with severe sensitivities.

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

1. Decide whether to replace the five unmatched products with source-menu items;
   generate approved-style images before exposing any replacement.
2. Finalize legal and privacy copy before public launch.
3. Configure the production domain and complete release-specific metadata and
   social-preview validation before enabling indexing.
4. When backend work resumes, choose the order destination and define
   availability and tax/service-fee rules.

See [`../ROADMAP.md`](../ROADMAP.md) for phase boundaries and acceptance targets.

## Mock or unresolved

- Five unmatched product prices and all configuration price deltas.
- Complete production menu beyond the current fifteen-product contract.
- Order backend, ecommerce provider, or POS integration.
- Inventory source and availability rules.
- Tax and service-fee rules.
- Final legal copy and production privacy details.

Customer accounts and online payment are intentionally outside version one,
not unresolved requirements.

Do not invent these values. Use explicit mock labeling or abstractions until the user decides them.
