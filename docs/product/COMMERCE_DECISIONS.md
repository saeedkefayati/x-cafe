# Commerce decisions

Last updated: 2026-08-24

## Confirmed for version one

- Fulfillment is pickup-only.
- Delivery address, delivery radius, and delivery fee are not part of the first version.
- Checkout is guest-only. Registration, login, sessions, and customer accounts are not required in version one.
- Payment is made at pickup; the first version has no online payment gateway.
- Checkout remains a low-motion utility flow.
- The browser cart is never trusted for authoritative price or availability; a future server/provider must resolve the current catalog again before accepting an order.

## Still required before real order submission

1. Real pickup location name and address.
2. Opening hours and valid pickup time-slot rules.
3. Order destination: custom backend, ecommerce provider, or POS.
4. Production availability source.
5. Tax and service-fee policy.

Until these are supplied, Checkout validates customer inputs only in the current
page: inputs are not transmitted or persisted and no order is created. Payment
will happen at pickup only after a real order can be accepted.

## Provider boundary

The provider-neutral request and response contracts live in `src/types/commerce.ts`. A production adapter must:

- validate customer and pickup inputs on the server;
- resolve product availability and prices from the authoritative source;
- calculate tax and fees on the server;
- create an idempotent order;
- return either an accepted order, a payment requirement, or a typed rejection;
- expose confirmed order data before the success page claims an order exists.
