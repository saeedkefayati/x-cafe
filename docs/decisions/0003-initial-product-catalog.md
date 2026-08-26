# 0003 — Initial product catalog

Status: Accepted

Date: 2026-08-24

## Decision

The initial working catalog contains fifteen products in three equal groups:

- Five hot coffees.
- Five cold coffees.
- Five cakes.

The exact product list is maintained in `docs/ai/PROJECT_STATE.md` and `src/data/products.ts`.

Every product has content, ingredients, allergens, flavor notes, mock base price, configuration support where relevant, SEO fields, and a unique image.

## Rationale

Fifteen products provide enough variation to validate menu navigation, product cards, product configuration, cart identity, and responsive behavior before the final production menu is supplied.

## Constraint

This catalog started with mock prices and business details. ADR 0009 governs the
reference source, and ADR 0010 records the five replacements that make every
current base price source-matched. Configuration deltas remain temporary.
