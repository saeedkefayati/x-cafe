# 0008 — Progressive scroll storytelling

Status: Accepted

Date: 2026-08-25

## Decision

The signature motion layer uses semantic server-rendered content and native CSS
scroll-driven animation as a progressive enhancement. Home has one bounded,
sticky desktop story built from three approved catalog products. Mobile,
unsupported browsers, and reduced-motion users receive the same states in normal
document flow without pinning or hidden content.

The desktop composition follows a product-centered reveal model: each catalog
image occupies the same central geometry, product replacement and scale carry
the primary motion, supporting copy uses short masked transitions, and the
surrounding token-derived surface tone changes with the active product. Playful
rounding and organic static shapes may soften the scene without adding looping
or cursor-driven effects.

Product Detail flavor storytelling is limited to Espresso, Café Latte, and Iced
Caramel Latte, and is rendered only after the complete configurator and Add to
Cart action. Utility routes remain low-motion. Product media is reused unchanged
across themes and story states.

## Rationale

- Server-rendered content preserves meaning, indexing, and accessibility before
  enhancement.
- Native view timelines avoid a client animation boundary, manual scroll
  listeners, extra runtime weight, and route-navigation cleanup.
- One signature scene creates a memorable moment without turning the complete
  ordering experience into a scroll demo.
- Normal-flow mobile and reduced-motion versions avoid long pins, scroll traps,
  and delayed access to shopping actions.
- Existing approved imagery keeps art direction consistent and avoids generating
  assets before an exact future ingredient sequence is approved.

## Revisit when

- A future approved campaign requires choreography that native scroll timelines
  cannot express while preserving the same fallback contract.
- Browser support or performance evidence changes materially.
- New isolated ingredient assets and an exact transformation sequence receive
  explicit art-direction approval.
