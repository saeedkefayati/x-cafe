# Frontend architecture

## Stack

- Next.js 16.3 App Router.
- React 19.
- TypeScript with strict checking.
- CSS Modules and semantic global tokens.
- Vitest, Testing Library, and jsdom.
- pnpm.

## Next.js version rule

This repository uses a version with APIs and conventions that may differ from general model knowledge. Before changing Next.js code, read the relevant version-matched guide under `node_modules/next/dist/docs/` and follow deprecation notices.

## Application map

- `src/app`: routes, layouts, metadata, and route-level composition.
- `src/app/template.tsx`: route-segment remount boundary for lightweight page entry.
- `src/components/primitives`: business-agnostic layout and typography primitives.
- `src/components/content`: reusable page-intro and editorial journal-card compositions.
- `src/components/controls`: reusable interactive controls.
- `src/components/cart`: cart provider, drawer, cart lines, and full-page cart composition.
- `src/components/checkout`: pickup Checkout, demo submission, and order-review presentation.
- `src/components/product`: product and menu presentation.
- `src/components/shell`: header, navigation, and footer.
- `src/components/theme`: persistent system/light/dark theme state.
- `src/data/products.ts`: current fifteen-product catalog.
- `src/data/locations.ts`: three sample pickup branches and structured operating schedules.
- `src/config/commerce.ts`: explicit guest, pickup, and pay-at-pickup decisions plus remaining commerce blockers.
- `src/app/checkout/actions.ts`: Server Action boundary for the demo order flow.
- `src/lib/demo-order.ts`: server-side demo validation and signed confirmation logic.
- `src/data/mock.ts`: categories and remaining mock content sources.
- `src/types/domain.ts`: domain contracts.
- `src/types/commerce.ts`: provider-neutral pickup order request and result contracts.
- `src/styles/tokens.css`: semantic design tokens.
- `src/styles/globals.css`: root styling, theme baselines, and accessibility behavior.
- `src/styles/motion.css`: shared progressive motion, View Transition timing, and reduced-motion fallback.
- `public/images/products`: production-bound product-card assets and manifest.
- `public/images/calibration`: preserved image-calibration history.

## Component boundaries

- Use Server Components by default.
- Add a Client Component boundary only for actual browser state, events, effects, or client-only APIs.
- Keep business logic out of layout and typography primitives.
- Keep motion orchestration separate from presentational components when possible.
- Prefer native CSS and React View Transitions over a client-side motion dependency; enhanced behavior must degrade to the final static layout.
- Keep category, product, option, and cart behavior data-driven.
- Avoid route components that combine data modeling, state orchestration, and detailed presentation in one file.

## Cart and theme state

- Represent a cart line by product id plus the normalized full option selection.
- Derive prices from base price and selected option deltas; do not store independently editable totals.
- Persist only validated cart data and version the persisted shape.
- Keep provider-specific real order submission behind interfaces until business decisions exist.
- Keep the cart and theme providers in the root layout so their state survives route navigation.
- Resolve theme preference from `system`, `light`, or `dark`, apply it on the root element before paint, and persist the preference locally.

## Commerce boundary

- Version one supports pickup only; delivery-specific fields and fees stay outside the flow.
- Version one uses guest Checkout and pay-at-pickup; authentication and an online gateway stay outside the flow.
- Pickup preparation is fixed at 45 minutes. Branch availability derives from structured Tehran opening and closing times.
- Customer geolocation is not requested or persisted; route-time estimation requires a future routing-provider decision.
- Treat browser cart totals as display data only. A server/provider must re-resolve products, options, availability, prices, tax, and fees before accepting an order.
- Keep customer contact data out of browser persistence.
- The current Server Action may issue only a signed demo confirmation after
  server-side revalidation; it must not persist contact or dispatch an order.
- Require `DEMO_ORDER_CONFIRMATION_SECRET` in production and never commit its
  real value.
- Replace the demo boundary with an idempotent provider adapter only after sample
  branch data is production-confirmed and an order provider, availability
  source, and fee policy are configured.
- Do not show a real success claim until the provider returns a confirmed order id.

## Images

- Use `next/image` for product assets.
- Preserve intrinsic dimensions and meaningful Persian alt text.
- Avoid using CSS filters to adapt product media to dark mode.
- Do not overwrite approved assets when generating a variant; use versioned filenames and update the manifest.

## Testing

- Unit-test pure cart and pricing logic.
- Component-test controls and cart interactions with user-level events.
- Test category counts, unique ids/slugs, and unique image paths.
- Run a production build for route, metadata, and static-generation validation.
