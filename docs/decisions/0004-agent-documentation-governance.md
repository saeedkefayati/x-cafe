# 0004 — Agent documentation governance

Status: Accepted

Date: 2026-08-24

## Decision

`AGENTS.md` is the canonical coding-agent instruction file. Tool-specific files are short adapters and must not duplicate the full rules.

Current product and implementation context lives in `docs/ai` and the routed current documents. The complete pre-implementation planning package is preserved under `docs/archive/pre-codex-pack` as non-authoritative history.

## Rationale

- One canonical source prevents instruction drift across tools.
- A short start file reduces repeated user explanation and unnecessary context loading.
- A context map lets agents read only task-relevant documentation.
- Preserving the original package retains rationale without letting obsolete phase instructions override current state.

## Maintenance

- Update `docs/ai/PROJECT_STATE.md` when project status changes.
- Add a decision record for durable decisions.
- Keep adapters short.
- Never store credentials or private production data in agent documentation.
