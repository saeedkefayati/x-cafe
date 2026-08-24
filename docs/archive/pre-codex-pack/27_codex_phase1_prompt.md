# 27 — Ready-to-Paste Codex Phase 1 Prompt

You are implementing Phase 1 of a premium café ecommerce website.

Before changing any code, read the complete planning pack in this repository/context.

Treat these files as authoritative:

1. `16_codex_master_spec.md` — master product/engineering specification
2. `18_visual_identity_lock.md` — locked visual direction
3. `07_design_system_spec.md` — design system requirements
4. `11_component_inventory.md` — expected component boundaries
5. `12_responsive_behavior.md` — responsive rules
6. `13_accessibility_and_performance.md` — accessibility/performance guardrails
7. `24_pre_codex_decision_log.md` — locked vs unknown decisions
8. `15_acceptance_criteria.md` — definition of done
9. `25_codex_handoff_instructions.md` — implementation order

## Phase 1 Goal

Build only the reusable application foundation.

Do NOT attempt to complete the entire website in this phase.

Do NOT implement the heavy cinematic Home scroll experience yet.

Do NOT choose a production payment gateway, CMS, POS provider, delivery provider, production database, or order backend unless one is already explicitly configured in the repository.

Unknown business integrations must remain abstracted or mocked.

## Required Work

### 1. Inspect the existing repository

First understand:

- current framework and version
- package manager
- monorepo/workspace structure if present
- styling architecture
- test tooling
- linting/formatting
- existing design system/components
- routing conventions
- existing dependencies

Preserve good existing architecture rather than replacing it unnecessarily.

### 2. Establish application structure

Create or normalize the route/page structure required by the planning pack, but Phase 1 pages may remain minimal shells where appropriate.

Required route skeleton:

- `/`
- `/menu`
- `/menu/[category]`
- `/product/[slug]`
- `/search`
- `/cart`
- `/checkout`
- `/order/success`
- `/journal`
- `/journal/[slug]`
- `/about`
- `/locations`
- `/contact`
- `/faq`
- `/privacy`
- `/terms`
- 404/not-found

Do not fill all pages with final feature code yet.

### 3. Implement design tokens

Implement semantic tokens based on:

- `18_visual_identity_lock.md`
- `07_design_system_spec.md`

Token groups must include:

- canvas/surface colors
- primary/secondary/muted/inverse text
- subtle/default/strong borders
- brand/accent/category theme roles
- feedback roles
- typography roles
- spacing/layout tokens
- radii
- shadows/depth
- motion durations/easing
- semantic z-index layers

Avoid scattered arbitrary magic values.

### 4. Typography foundation

Set up the chosen typography direction in a performance-conscious way.

Preferred direction:

- Persian/UI: Vazirmatn
- Latin/UI/display: Manrope

If the project already has an intentional font system, evaluate before replacing it.

Build semantic typography primitives/styles:

- Display XL
- Display L
- H1
- H2
- H3
- H4
- Body L
- Body
- Body S
- Label
- Caption

### 5. Layout primitives

Implement composable foundational primitives consistent with the existing project conventions.

Conceptual targets:

- Box
- Stack
- Inline
- Grid
- Container
- Section
- Surface
- Divider
- AspectRatio
- VisuallyHidden

Do not put business logic into these primitives.

Avoid over-engineering APIs.

### 6. Core controls

Build or normalize:

- Button
- IconButton
- Text/Input primitives where appropriate
- QuantityControl foundation
- basic selection control foundation
- accessible focus-visible behavior

All interactive states must be intentional:

- default
- hover
- active
- focus-visible
- disabled
- loading where applicable
- selected where applicable

### 7. Application shell

Implement:

- Header
- Desktop navigation
- Mobile navigation
- Footer
- main content shell

Use the navigation architecture in the planning pack.

The shell must be responsive and keyboard accessible.

Do not add unnecessary motion yet.

### 8. Mock domain models

Create clean typed models/interfaces/schema foundations for:

- Product
- Category
- Product option
- Ingredient
- Cart item
- Journal post
- Location
- FAQ

Use mock/seed data sufficient to exercise UI foundations.

Do not pretend mock data is production data.

### 9. Initial product UI

Implement a reusable ProductCard and basic MenuGrid using mock data.

ProductCard should support:

- image
- name
- concise description
- price
- availability
- featured/best-seller state only where visually justified
- navigation to product detail

Do not create a visually noisy marketplace card.

### 10. Responsive baseline

Verify:

- wide desktop
- standard desktop
- tablet
- compact mobile
- mobile landscape sanity

Mobile must not rely on hover.

### 11. Accessibility baseline

Verify:

- semantic landmarks
- heading hierarchy
- keyboard navigation
- visible focus
- accessible mobile navigation
- meaningful controls
- reduced-motion CSS foundation

### 12. Testing / quality baseline

Use the repository's existing tooling where possible.

Ensure:

- format passes
- lint passes
- typecheck passes
- relevant tests pass

Add focused tests for foundational interactive components where the repository's testing strategy supports it.

## Explicitly Out of Scope for Phase 1

Do not implement yet:

- GSAP Home timelines
- ScrollTrigger cinematic sequences
- product transformation scene
- ingredient scroll scene
- elaborate page transitions
- real checkout/payment
- real order submission
- production CMS
- production backend
- rewards/account/favorites
- reservations
- large animation abstraction system

## Engineering Principles

Prioritize in this order:

1. correctness
2. clear component boundaries
3. accessibility
4. responsive behavior
5. performance
6. visual polish
7. motion

Do not add an abstraction simply because it may be useful later.

Do not duplicate an established repository pattern without checking it first.

Do not introduce a second solution for something already solved well in the project.

## Completion Report

At the end of Phase 1, provide:

1. summary of implemented architecture
2. files/modules added or materially changed
3. design-system decisions implemented
4. test/lint/typecheck results
5. any deviations from the specification and why
6. unresolved business decisions that remain intentionally mocked/abstracted
7. recommended Phase 2 starting point

Phase 1 is complete only when the foundation is stable enough that Menu, Product Detail, Cart, and later Motion can be built without redesigning the base architecture.
