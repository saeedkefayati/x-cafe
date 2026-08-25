# 0006 — Server-confirmed demo orders

Status: Accepted

Date: 2026-08-25

## Decision

Before a production order provider is chosen, Checkout may complete an
end-to-end demo flow through a Next.js Server Action. The server revalidates the
guest contact, cart, catalog pricing and availability, pickup branch, and branch
hours. It then issues a short demo tracking code and a signed confirmation token
that expires after 24 hours.

The token contains only order display data. Customer name, phone, and email are
not included or persisted. A demo submission is never sent to a real branch,
POS, ecommerce backend, or third party. Customer-facing copy must label the
result as experimental.

Production environments must provide a private
`DEMO_ORDER_CONFIRMATION_SECRET`; the repository includes only a placeholder.

## Rationale

- The complete guest journey can be tested without pretending that operational
  integrations exist.
- Server-side catalog resolution demonstrates the correct trust boundary and
  prevents browser prices from becoming authoritative.
- A signed, expiring success payload prevents arbitrary success-page claims
  without introducing a provisional database schema.
- Excluding contact data from both persistence and the URL keeps the demo's
  privacy footprint small.

## Revisit when

- A real order backend, ecommerce provider, or POS is selected.
- Production branch, inventory, price, tax, and service-fee data are confirmed.
- Persistent order history, idempotency, cancellations, or staff workflow are
  required.
