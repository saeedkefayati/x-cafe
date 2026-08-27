# 0012 — Stable branch map filenames and labels

Status: Accepted

Date: 2026-08-27

## Decision

Keep exactly six branch-map assets with stable filenames:

- `map-<branch-slug>-light.svg`
- `map-<branch-slug>-dark.svg`

The SVG artwork contains road geometry and the branch marker but no visible
branch name or brand caption. The Locations page overlays the current branch
name from structured data, so the label remains visible across responsive crop
ratios without duplicating content inside the image.

Do not repeat the long OpenStreetMap attribution on every map card. The current
SVG metadata still identifies the geometry source, while the final visible
attribution placement remains a release decision. The generator refuses to
overwrite a stable asset unless `--replace` is supplied after explicit approval.

## Rationale

Stable filenames are simpler to reference and cache, while keeping visible text
outside the SVG prevents `object-fit: cover` from cropping it on narrow cards.
Using structured location data for the label also avoids stale or duplicated
branch names inside generated artwork.

## Consequences

- `Location` does not carry a map-version field.
- Changing coordinates does not require changing the asset URL.
- Regeneration is an explicit replacement operation and must be reviewed before
  commit.
- Visible OpenStreetMap attribution remains a blocker to resolve before public
  release.
- This record supersedes the filename and per-map attribution details in ADR
  0011; its offline-runtime and external-routing decisions remain accepted.
