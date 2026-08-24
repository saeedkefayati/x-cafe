<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Cafe Commerce repository guide

## Mandatory startup

Before changing code:

1. Read `docs/ai/START_HERE.md`.
2. Read `docs/ai/PROJECT_STATE.md` for the implemented phase and unresolved business decisions.
3. Use `docs/ai/CONTEXT_MAP.md` to select task-relevant documents.
4. Inspect the current code and tests in scope. Documentation does not replace verification.
5. For Next.js work, follow the version-matched documentation rule above.

Do not read every file in `docs/archive` by default.

## Source priority

When sources conflict, follow this order:

1. The user's current request.
2. This `AGENTS.md`.
3. Current documents outside `docs/archive`.
4. Current code and automated tests.
5. Historical files in `docs/archive`.

The original planning pack under `docs/archive/pre-codex-pack` is preserved history, not current instructions.

## Project snapshot

- Premium Persian RTL cafe storefront and ordering experience.
- Next.js 16 App Router, React 19, TypeScript, CSS Modules, semantic CSS tokens.
- Fifteen products: five hot coffees, five cold coffees, and five cakes.
- Product imagery follows the approved `shared-studio-v2` style in `public/images/products`.
- Light and dark themes share product image assets; adapt the surrounding UI, not image colors.
- Phase 1 is complete. Phase 2 focuses on product configuration and cart behavior.
- Prices, branding, branches, fulfillment, payment, order backend, and legal content remain mock or undecided unless the user supplies them.

## Core implementation rules

- Customer-facing UI is Persian and `dir="rtl"`.
- Use Server Components by default; add client boundaries only for real interactivity or browser APIs.
- Keep primitives business-agnostic and keep feature/domain logic out of layout primitives.
- Use semantic tokens; do not scatter arbitrary visual values through components.
- Preserve accessibility, keyboard operation, visible `:focus-visible`, and reduced-motion behavior.
- Use the same catalog image in light and dark modes. Do not apply color or brightness filters to product media.
- Cart lines are distinct by product plus the normalized full customization combination.
- Do not invent provider-specific commerce, final prices, addresses, or legal information.
- Never overwrite approved generated assets without explicit user direction; create a versioned sibling and update its manifest.

## Quality commands

```bash
pnpm format:check
pnpm lint
pnpm typecheck
pnpm test
pnpm build
```

Run checks proportionate to the change. Phase-level implementation must pass all commands.

## Documentation contract

- Update `docs/ai/PROJECT_STATE.md` when a phase or major capability changes.
- Add or supersede an ADR in `docs/decisions` when a durable decision changes.
- Update the relevant current document in the same change as the implementation.
- Keep tool-specific files as short adapters to this file; do not duplicate the full rules.
- Do not store secrets, credentials, customer data, or private production configuration in repository instructions.

## Git rules

- Preserve unrelated user changes.
- Inspect staged changes with `git diff --cached` before committing.
- Do not commit build output, environment files, local machine state, or secrets.
- Do not rewrite, reset, or delete user work unless explicitly requested.
