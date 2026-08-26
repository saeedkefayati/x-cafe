# 0010 — Source-matched launch catalog

Status: Accepted

Date: 2026-08-27

## Decision

Keep the fifteen-product and five-per-category launch contract, but replace the
five products without a direct VCafe Felestin menu match:

| Previous product      | Current source-matched product | Reference base price |
| --------------------- | ------------------------------ | -------------------- |
| Iced Caramel Latte    | Iced Caramel Macchiato         | ۳۵۰ هزار تومان       |
| Cold Brew             | Cold Grip                      | ۳۲۰ هزار تومان       |
| Espresso Tonic        | Iced Hazelnut Mocha            | ۳۵۰ هزار تومان       |
| Lemon Poppy Seed Cake | Brownie                        | ۲۷۰ هزار تومان       |
| Red Velvet Cake       | Tres Leches Cake               | ۳۲۰ هزار تومان       |

The cold-service snowflake shown beside Macchiato and Mocha on the source menu
supports their placement in the cold-coffee category. Each replacement receives
a unique `shared-studio-v2` image. Previous approved assets remain preserved as
superseded files rather than being overwritten.

## Rationale

Direct identity and price matches remove the last mock base prices without
inventing values or changing the agreed 5 + 5 + 5 catalog size. The replacements
also preserve visual variety across layered milk drinks, clear cold coffee, and
plated cakes.

## Consequences

- Every current product base price is `source-matched`.
- The redundant Menu filter for reference prices is removed.
- Size, milk, sweetness, and extra-option deltas remain temporary.
- Future catalog additions still require a direct price match and a unique
  approved-style image before exposure.
- This record supersedes only the five-unmatched-product consequence of ADR
  0009; its brand, branch, and reference-source decisions remain accepted.
