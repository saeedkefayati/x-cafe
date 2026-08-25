# Product brief

## Goal

Build a premium, production-quality Persian cafe storefront with a strong editorial identity, cohesive product imagery, and a clear path from browsing to ordering.

The experience should feel warm, crafted, contemporary, calm, sensory, and distinctive. It may borrow the clarity and polish of top product websites but must not imitate another brand.

## Audience and language

- Customer-facing content is Persian.
- The document direction is RTL.
- Product names may retain familiar English names while descriptions and controls remain Persian.
- Catalog amounts are stored in IRR and displayed in toman. Directly matched
  products use the user-approved VCafe reference menu; unmatched products stay
  visibly marked as temporary.

## Experience modes

### Experience mode

Used by Home, Product Detail, and About.

- Editorial composition.
- Large typography and product-first imagery.
- Intentional motion after the static layout is correct.
- Reduced-motion and mobile alternatives are mandatory.

### Utility mode

Used by Menu, Search, Cart, Checkout, FAQ, Contact, and legal pages.

- Fast and conversion-focused.
- Clear hierarchy and low motion.
- Keyboard and screen-reader usability.
- No cinematic effect may block a task.

## Required routes

- `/`
- `/menu`
- `/menu/[category]`
- `/product/[slug]`
- `/search`
- `/cart`
- `/checkout`
- `/order/success`
- `/journal`
- `/journal/[slug]`
- `/about`
- `/locations`
- `/contact`
- `/faq`
- `/privacy`
- `/terms`
- custom 404

## Initial catalog contract

The current launch dataset has exactly fifteen products:

- Five hot coffees.
- Five cold coffees.
- Five cakes.

Categories and products are data-driven. The current list is recorded in `docs/ai/PROJECT_STATE.md` and implemented in `src/data/products.ts`.

## Product model

Each product supports:

- Identity: id, slug, name, category, availability, status.
- Content: short and full description, ingredients, allergens, flavor notes, dietary tags, optional story.
- Commerce: base price, optional compare-at price, currency, featured, best seller.
- Media: card image, hero image, detail assets, gallery, alt text.
- Configuration: sizes, hot/iced, milk, sweetness, extras, option availability, price deltas.
- SEO: title, description, optional social image.

## Cart contract

A cart line is identified by the product and its full customization combination.

The same product with a different size, temperature, milk, sweetness, or extras is a distinct cart line.

The cart must support:

- Add configured product.
- Remove line.
- Update quantity.
- Accurate line total and subtotal.
- Empty state.
- Accessible cart drawer and full cart page.
- Checkout call to action.
- Persistence across browser sessions.

## Real-commerce stop conditions

Version one is confirmed as pickup-only, guest-only, and pay-at-pickup. Do not
select or implement provider-specific production commerce until the user supplies:

- Order backend, ecommerce platform, or POS integration.
- Inventory and availability source.
- Tax and service-fee rules.

Before those decisions, build provider-neutral interfaces and clearly labeled mock flows.

The current pickup flow uses a fixed 45-minute preparation estimate. It does not
request customer geolocation or claim a route-time estimate.

## Out of scope unless requested

- Customer accounts.
- Favorites.
- Rewards.
- Reservations.
- Gift cards.
- Order history.
