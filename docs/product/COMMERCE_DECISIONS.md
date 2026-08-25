# Commerce decisions

Last updated: 2026-08-25

## Confirmed for version one

- Fulfillment is pickup-only.
- Delivery address, delivery radius, and delivery fee are not part of the first version.
- Checkout is guest-only. Registration, login, sessions, and customer accounts are not required in version one.
- Payment is made at pickup; the first version has no online payment gateway.
- The current implementation uses three explicitly sample Tehran branches: Gholhak, Felestin, and Pasdaran.
- Every branch uses a fixed 45-minute preparation time. Orders stop being accepted 45 minutes before closing.
- Customer geolocation and route-time estimation are deferred; Checkout does not request or store location.
- Checkout remains a low-motion utility flow.
- The browser cart is never trusted for price or availability; the demo Server
  Action resolves the current catalog again before issuing a confirmation.
- The current end-to-end submission is explicitly a demo: it does not persist
  customer contact or dispatch an order to a branch, POS, or external provider.
- A demo success page requires a server-signed confirmation that expires after
  24 hours and contains no customer contact data.

## Still required before real order submission

1. Production confirmation or replacement of the sample branch details.
2. Order destination: custom backend, ecommerce provider, or POS.
3. Production availability source.
4. Tax and service-fee policy.

Until these are supplied, Checkout transmits inputs only to the application
server for validation and a demo confirmation. Inputs are not persisted, no real
order is created, and nothing is sent to a branch or third party. Payment at
pickup becomes operational only after a real order can be accepted.

## Provider boundary

The provider-neutral request and response contracts live in `src/types/commerce.ts`. A production adapter must:

- validate customer and pickup inputs on the server;
- resolve product availability and prices from the authoritative source;
- calculate tax and fees on the server;
- create an idempotent order;
- return either an accepted order, a payment requirement, or a typed rejection;
- expose confirmed order data before the success page claims an order exists.
