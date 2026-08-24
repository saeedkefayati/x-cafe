# Commerce decisions

Last updated: 2026-08-24

## Confirmed for version one

- Fulfillment is pickup-only.
- Delivery address, delivery radius, and delivery fee are not part of the first version.
- Checkout remains a low-motion utility flow.
- The browser cart is never trusted for authoritative price or availability; a future server/provider must resolve the current catalog again before accepting an order.

## Still required before real order submission

1. Real pickup location name and address.
2. Opening hours and valid pickup time-slot rules.
3. Payment method: online payment or payment at pickup.
4. Order destination: custom backend, ecommerce provider, or POS.
5. Production availability source.
6. Tax and service-fee policy.

Until these are supplied, Checkout is an explicit preview: customer inputs are not transmitted or persisted, no order is created, and no payment is requested.

## Provider boundary

The provider-neutral request and response contracts live in `src/types/commerce.ts`. A production adapter must:

- validate customer and pickup inputs on the server;
- resolve product availability and prices from the authoritative source;
- calculate tax and fees on the server;
- create an idempotent order;
- return either an accepted order, a payment requirement, or a typed rejection;
- expose confirmed order data before the success page claims an order exists.
