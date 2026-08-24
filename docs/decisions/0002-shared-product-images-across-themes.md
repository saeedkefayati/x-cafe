# 0002 — Shared product images across themes

Status: Accepted

Date: 2026-08-24

## Decision

Light and dark themes use the same standard product image assets.

Dark mode adapts the image container, card surface, border, and shadow. It does not recolor or dim the image itself.

## Rationale

- Product colors remain trustworthy and consistent.
- The light editorial photo becomes an intentional illuminated frame on a dark Espresso surface.
- One asset per product reduces maintenance and loading complexity.
- CSS filters would distort food and drink colors.

## Exception

Future full-bleed campaign, journal, or hero scenes may have separately art-directed dark variants when composition—not catalog consistency—requires it.
