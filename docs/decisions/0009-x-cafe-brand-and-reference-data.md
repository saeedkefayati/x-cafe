# 0009 — X Cafe brand and reference data

Status: Accepted

Date: 2026-08-26

## Decision

The customer-facing brand is «ایکس کافه». Its original vector mark uses a
crossed-path motif with a coffee bean at the center and supports the existing
light and dark themes without a separate raster logo.

The user-approved VCafe Tehran website is the reference for the three Tehran
branch records and directly matched menu prices. Branch addresses, phones, and
hours are confirmed for the current project. Product prices are marked either
`source-matched` or `mock`; unmatched catalog products are never silently given
an inferred official price.

## Rationale

The X motif gives the new name a recognizable meaning without copying the
reference brand. Explicit price provenance lets the project use current data
where a direct match exists while preserving honesty for the five products that
do not appear in the source menu under the same identity.

## Consequences

- Site metadata, navigation, footer, About, Contact, and Locations use X Cafe.
- Branch confirmation is no longer a real-commerce blocker.
- The checkout remains a demo until an order provider, availability source, and
  fee policy exist.
- Adding or replacing catalog products still requires a matching approved-style
  image before the item is exposed.
