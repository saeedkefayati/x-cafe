# 0007 — Opt-in search indexing

Status: Accepted

Date: 2026-08-25

## Decision

Search indexing is disabled by default. A build becomes indexable only when it
has a valid, non-placeholder `SITE_URL` and the release environment explicitly
sets `SITE_INDEXING_ENABLED=true`.

Public content receives canonical, Open Graph, and social-card metadata from a
shared helper. Robots and sitemap files are generated from the same site
configuration. Cart, Checkout, search, order-confirmation, and provisional legal
routes are excluded from public discovery.

The default site-level social image is generated at `/opengraph-image` from the
approved X Cafe mark and brand palette. Product and journal routes may continue
to use their directly relevant catalog imagery when it is more specific than
the brand-level card.

## Rationale

- The current brand, domain, prices, branches, contacts, and legal copy are not
  final and should not be indexed accidentally.
- Preview deployments must remain safe without relying on every hosting platform
  to configure crawler headers correctly.
- One origin source prevents contradictory canonical, sitemap, robots, and
  social URLs.
- Utility and customer-specific routes do not provide useful search landing
  pages.

## Revisit when

- Final brand, public domain, business data, and legal content are approved.
- The release environment is ready to opt into indexing.
- Localized routes, additional languages, or a separate editorial domain are
  introduced.
