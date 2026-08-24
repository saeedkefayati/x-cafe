# Project documentation

This directory contains the version-controlled product, design, architecture, and execution context for Cafe Commerce.

## Source priority

When information conflicts, use this order:

1. The user's current request.
2. Root `AGENTS.md` instructions.
3. Current documents under `docs/ai`, `docs/product`, `docs/design`, `docs/architecture`, `docs/quality`, and `docs/decisions`.
4. Current code and automated tests.
5. Historical documents under `docs/archive`.

Archived documents explain how the project began. They are not current requirements unless a current document explicitly links to them.

## Start here

Every new contributor or coding agent should begin with:

1. [`ai/START_HERE.md`](ai/START_HERE.md)
2. [`ai/PROJECT_STATE.md`](ai/PROJECT_STATE.md)
3. [`ai/CONTEXT_MAP.md`](ai/CONTEXT_MAP.md)

## Documentation maintenance

- Update `ai/PROJECT_STATE.md` when a phase or major capability changes.
- Add an ADR under `decisions` when a durable product, design, architecture, or workflow decision is made.
- Update the relevant current document in the same change as the implementation.
- Do not rewrite the archive to match current behavior.
- Never place secrets, credentials, customer data, or private production configuration in documentation.
