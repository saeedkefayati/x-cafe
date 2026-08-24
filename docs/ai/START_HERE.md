# Cafe Commerce — start here

This is the canonical short briefing for humans and coding agents.

## Product

Cafe Commerce is a premium, warm, editorial cafe storefront and ordering experience. The customer-facing interface is Persian and right-to-left. The design emphasizes product photography, calm spacing, clear hierarchy, and accessible commerce flows.

The experience has two modes:

- **Experience mode:** Home, Product Detail, and About may use intentional storytelling and motion.
- **Utility mode:** Menu, Search, Cart, Checkout, FAQ, and Contact prioritize speed, clarity, and low motion.

## Current implementation

- Next.js 16 App Router, React 19, TypeScript, CSS Modules, semantic CSS tokens.
- Fifteen products across hot coffee, cold coffee, and cakes.
- Fifteen unique 4:5 product images using the approved shared studio style.
- Static/SSG route foundation for the complete planned site map.
- Tests with Vitest and Testing Library.
- Phase 1 is complete. Phase 2 is the next implementation target.

Read [`PROJECT_STATE.md`](PROJECT_STATE.md) for exact current status and pending decisions.

## Locked decisions

- Premium, minimal, warm, editorial visual direction.
- Persian RTL customer interface.
- Semantic design tokens and reusable primitives before feature composition.
- Product photos use a warm paper-cream backdrop, matte pale-limestone surface, soft upper-left light, and no decorative props or text.
- The same product image assets are used in light and dark themes. Theme-specific styling belongs to the surrounding card and surface.
- Accessibility and reduced-motion behavior are baseline requirements.
- Product, option, category, and cart behavior must be data-driven.
- Prices and business information remain mock until the user supplies final values.

## Before making changes

1. Read the root `AGENTS.md`.
2. Read [`CONTEXT_MAP.md`](CONTEXT_MAP.md) and open only the documents relevant to the task.
3. Inspect the current implementation; documentation does not replace code verification.
4. For Next.js work, read the relevant version-matched guide under `node_modules/next/dist/docs/` before editing.
5. Preserve unrelated user work and generated assets.

## Verification commands

```bash
pnpm format:check
pnpm lint
pnpm typecheck
pnpm test
pnpm build
```

Run checks proportionate to the change. A phase-level change should pass all five.

## Historical planning pack

The original pre-implementation planning package is preserved under [`../archive/pre-codex-pack`](../archive/pre-codex-pack). It is historical context, not the current source of truth.
