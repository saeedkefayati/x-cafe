# Quality bar

## Required checks

```bash
pnpm format:check
pnpm lint
pnpm typecheck
pnpm test
pnpm build
```

Phase-level changes should pass every command. Smaller documentation-only changes may use proportionate checks plus link and Git validation.

## Accessibility baseline

- Semantic elements and heading hierarchy.
- Keyboard-operable controls and navigation.
- Visible `:focus-visible` treatment.
- Accessible names for icon-only controls.
- Labels, descriptions, and errors associated with form fields.
- Status updates announced when required.
- Sufficient text, border, and focus contrast in light and dark themes.
- Reduced-motion alternative for non-essential animation.
- No essential information communicated by color alone.
- Meaningful Persian alt text for product media.
- Touch targets sized for mobile use.

## Responsive baseline

- Check narrow mobile, wide mobile, tablet, and desktop layouts.
- Verify RTL direction and mixed Persian/Latin text.
- Check text zoom and long product names.
- Keep checkout and cart actions reachable without hover.
- Avoid horizontal overflow.

## Performance baseline

- Use Server Components unless interactivity requires a client boundary.
- Load the likely LCP image intentionally.
- Keep menu and checkout motion light.
- Avoid shipping animation libraries before motion work is approved.
- Preserve image dimensions and responsive sizes.

## Content and commerce integrity

- Do not present mock prices, branch data, legal copy, or fulfillment rules as final.
- Ingredient and allergen information must stay attached to each product model.
- Price totals must be derived and covered by tests.
- Different customization combinations must remain distinct cart lines.

## Publishing safety

- Do not use a placeholder domain as `metadataBase`, canonical origin, robots
  host, or sitemap origin in a public deployment.
- Indexing must default off and require an explicit release-time opt-in.
- Exclude customer-specific utility routes and provisional legal content from
  indexing and sitemap discovery.
- Do not enable public indexing until branding, prices, branches, contact paths,
  and legal copy are approved.

## Git handoff

- Review staged changes with `git diff --cached` before committing.
- Do not commit secrets, environment files, generated build output, or local machine state.
- Preserve unrelated user changes.
- Update current documentation when implementation changes a durable contract.
