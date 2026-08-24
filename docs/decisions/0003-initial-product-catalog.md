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

Current prices and business details are mock data. Do not treat them as launch-approved.
