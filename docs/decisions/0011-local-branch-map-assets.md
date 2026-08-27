# 0011 — Local branch map assets

Status: Superseded by ADR 0012

Date: 2026-08-27

## Decision

Display branch context with versioned light and dark SVG files committed under
`public/images/locations`. Generate those files during development from the
`lat` and `lng` values in `src/data/locations.ts` and nearby OpenStreetMap road
geometry by running `pnpm maps:generate`.

Do not embed Google Maps, Neshan, Balad, or another remote map in the Locations
page, and do not request map tiles at runtime. Keep OpenStreetMap attribution
visible beside every local map. Offer Google Maps, Apple Maps, Neshan, and Balad
as external coordinate-based routing links that run only after a visitor chooses
one of them.

## Rationale

An iframe or client-side map library still depends on a remote tile or map API.
That makes the branch page fragile during network restrictions even if the
component package itself is installed locally. Build-time geometry plus committed
SVGs preserves real street context, supports the approved light and dark visual
system, and keeps runtime rendering fully local.

## Consequences

- Branch maps remain visible without an internet connection after the site has
  loaded from its host or local installation.
- Interactive panning, live traffic, and in-site turn-by-turn navigation are
  intentionally outside scope.
- External routing still needs the selected provider to be reachable.
- Increment the branch's `mapVersion`, then run
  `pnpm maps:generate -- --slug=<branch-slug>` after changing one branch's
  coordinates; increment all affected versions before refreshing all branches.
- The generator refuses to overwrite an existing version.
- Generated files are versioned siblings and must not silently overwrite an
  approved map version when the art direction changes.
- OpenStreetMap attribution and its copyright link must remain visible.
