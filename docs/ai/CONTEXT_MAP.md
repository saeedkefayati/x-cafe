# Context map

Use this map to load only the context relevant to the task. Do not read the entire archive by default.

| Task                      | Read first                                                                            | Then inspect                                              |
| ------------------------- | ------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| Any code change           | `AGENTS.md`, `ai/START_HERE.md`, `ai/PROJECT_STATE.md`                                | Current code and tests in scope                           |
| Menu or product data      | `product/PRODUCT_BRIEF.md`, `decisions/0003-initial-product-catalog.md`               | `src/types/domain.ts`, `src/data/products.ts`             |
| Product images            | `design/DESIGN_DIRECTION.md`, `decisions/0001-product-image-style.md`                 | `public/images/products/manifest.json`                    |
| Light/dark theme          | `design/DESIGN_DIRECTION.md`, `decisions/0002-shared-product-images-across-themes.md` | `src/styles/tokens.css`, relevant CSS Modules             |
| Product detail or cart    | `product/PRODUCT_BRIEF.md`, `architecture/FRONTEND.md`, `ROADMAP.md`                  | Product routes, controls, cart types, tests               |
| Checkout or real commerce | `product/PRODUCT_BRIEF.md`, `ai/PROJECT_STATE.md` unresolved section                  | Stop before provider-specific work unless decisions exist |
| Design-system component   | `design/DESIGN_DIRECTION.md`, `architecture/FRONTEND.md`, `quality/QUALITY_BAR.md`    | Existing primitives and tokens                            |
| Accessibility or motion   | `design/DESIGN_DIRECTION.md`, `quality/QUALITY_BAR.md`                                | Global styles, relevant component CSS and tests           |
| Routes or Next.js APIs    | `architecture/FRONTEND.md`                                                            | Relevant guide in `node_modules/next/dist/docs/`          |
| Project status or handoff | `ai/PROJECT_STATE.md`, `ROADMAP.md`, `decisions/README.md`                            | Recent Git history                                        |
| Historical rationale      | Current decision document first                                                       | `archive/pre-codex-pack` only if needed                   |

## Context rules

- Current documents beat archived planning files.
- Current code and tests must be verified before reporting behavior as implemented.
- A new durable decision belongs in `docs/decisions` and should update `PROJECT_STATE.md` when it changes the phase or product contract.
- Tool-specific instruction files are adapters. `AGENTS.md` remains canonical.
