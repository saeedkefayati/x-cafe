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
- `src/components/primitives`: business-agnostic layout and typography primitives.
- `src/components/controls`: reusable interactive controls.
- `src/components/product`: product and menu presentation.
- `src/components/shell`: header, navigation, and footer.
- `src/data/products.ts`: current fifteen-product catalog.
- `src/data/mock.ts`: categories and remaining mock content sources.
- `src/types/domain.ts`: domain contracts.
- `src/styles/tokens.css`: semantic design tokens.
- `src/styles/globals.css`: root styling, theme baselines, and accessibility behavior.
- `public/images/products`: production-bound product-card assets and manifest.
- `public/images/calibration`: preserved image-calibration history.

## Component boundaries

- Use Server Components by default.
- Add a Client Component boundary only for actual browser state, events, effects, or client-only APIs.
- Keep business logic out of layout and typography primitives.
- Keep motion orchestration separate from presentational components when possible.
- Keep category, product, option, and cart behavior data-driven.
- Avoid route components that combine data modeling, state orchestration, and detailed presentation in one file.

## State direction for Phase 2

- Represent a cart line by product id plus the normalized full option selection.
- Derive prices from base price and selected option deltas; do not store independently editable totals.
- Persist only validated cart data and version the persisted shape.
- Keep provider-specific checkout and order submission behind interfaces until business decisions exist.

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
