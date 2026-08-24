# 16 — CODEX MASTER SPEC

این فایل را می‌توان به‌عنوان ورودی اصلی Codex استفاده کرد.

---

# Project Goal

Build a premium, production-quality café ecommerce website with a strong editorial visual identity, scroll-driven storytelling, cohesive AI-generated product imagery, and highly usable commerce flows.

The design should take inspiration from the clarity, spacing, hierarchy, polish, and scroll storytelling associated with top-tier product websites such as Apple, but it must not visually copy Apple.

The final brand feeling is:

Premium, minimal, warm, editorial, crafted, contemporary, calm, sensory, and distinctive.

---

# Core UX Principle

The website has two modes:

## Experience Mode
Used for:
- Home
- Product Detail
- About

Characteristics:
- intentional motion
- large typography
- storytelling
- immersive product visuals

## Utility Mode
Used for:
- Menu browsing
- Search
- Cart
- Checkout
- FAQ
- Contact

Characteristics:
- fast
- clear
- accessible
- low motion
- conversion-focused

Do not apply cinematic animation uniformly across the whole site.

---

# Required Routes

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
- custom 404

Optional Phase 2 features must not be implemented unless explicitly requested:
- account
- favorites
- rewards
- reservation
- gift cards
- order history

---

# Primary Navigation

Desktop:
- Logo → Home
- Menu
- Journal
- About
- Locations
- Search
- Cart

Mobile:
same information via compact mobile navigation.

Keep header minimal.

---

# Product Categories

Initial conceptual categories:

- Coffee
- Milk Drinks
- Matcha
- Tea
- Cold Drinks
- Desserts
- Breakfast
- Food

Categories must be data-driven.

---

# Product Model Requirements

Each product must be able to support:

Identity:
- id
- slug
- name
- category
- availability/status

Content:
- short description
- full description
- ingredients
- allergens
- flavor notes
- dietary tags
- optional story

Commerce:
- base price
- optional compare-at price
- currency
- featured
- best seller

Media:
- card image
- hero image
- detail assets
- gallery
- alt text

Configuration:
- sizes
- hot/iced
- milk options
- sweetness
- extras
- availability per option
- price delta per option where needed

SEO:
- title
- description
- social image

---

# Cart Rules

A cart item is defined by:

product + full customization combination.

The same product with different size, milk, temperature, sweetness, or extras must be treated as a distinct cart configuration.

Cart must support:
- add
- remove
- quantity update
- subtotal
- clear empty state
- cart drawer
- checkout CTA

---

# Design System Requirements

Implement semantic tokens.

Do not hardcode arbitrary values throughout components.

Token groups:

## Colors
- canvas
- surfaces
- text
- borders
- brand
- accent
- feedback
- inverse
- limited category themes

## Typography
- displayXL
- displayLG
- heading1–4
- bodyLG
- body
- bodySM
- label
- caption

## Layout
- page gutters
- max widths
- section spacing
- reading width
- header height

## Radius
- sm
- md
- lg
- xl
- pill

## Motion
- fast
- base
- slow
- page
- standard/enter/exit/emphasized easing

## Layering
Use semantic z-index tiers.

---

# Primitive Layer

Build composable primitives before higher-level business components.

Expected conceptual primitives:

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
- Text
- Heading

Do not put product/business logic inside primitives.

---

# Main Components

Navigation:
- Header
- DesktopNav
- MobileNav
- Footer
- CategoryNav

Product:
- ProductCard
- ProductImage
- ProductPrice
- ProductHero
- ProductGallery
- FlavorNotes
- IngredientCard
- ProductConfigurator
- ProductOptionGroup
- AddToCartBar
- RelatedProducts

Menu:
- MenuGrid
- CategoryCard
- CategoryTabs
- FilterBar if needed
- SearchResults
- EmptyState

Commerce:
- CartDrawer
- CartItem
- CartSummary
- Checkout sections
- Fulfillment selector
- Location selector
- Time slot selector if needed
- Payment section
- Order review
- Success state

Content:
- JournalCard
- ArticleHero
- ArticleBody
- RelatedPosts
- BrandStorySection
- LocationCard
- FAQItem

Motion:
- Reveal
- ScrollScene
- ProductTransformScene
- IngredientStoryScene
- PageTransitionBoundary
- ParallaxLayer

Keep motion orchestration separated from presentational components when possible.

---

# Home Page Required Sections

1. Hero
2. Featured Product Transformation
3. Menu Categories
4. Ingredient Story
5. Best Sellers
6. Brand Story
7. Journal
8. Locations
9. Closing statement
10. Footer

---

# Home Motion Requirements

## Hero
- full viewport or near-full viewport
- product as primary visual hero
- large typography
- subtle scroll response
- short mobile variant

## Featured Product Transformation
Use a limited sequence of 3–4 product states.

Example:
Espresso → Latte → Caramel Latte → Mocha

Possible changes:
- product asset
- ingredient cards
- background theme
- product title
- descriptor

Do not make the sequence longer than needed.

## Ingredient Story
Use a small number of meaningful ingredient reveals.

## Low Motion Sections
Best sellers, journal, location, footer should remain easier to browse.

---

# Product Detail Required Structure

1. entry/shared visual transition where supported
2. hero
3. concise product essence
4. ingredient narrative
5. flavor profile
6. customization
7. add to cart
8. optional product story
9. related products
10. fulfillment info if needed

Customization is utility UI and must not be cinematic.

---

# Motion Engineering Rules

Primary motion strategy:
- CSS transitions for simple interaction
- GSAP/ScrollTrigger or equivalent robust scroll timeline solution for cinematic sections
- View Transition API or equivalent progressive enhancement for supported route transitions

Do not use multiple overlapping animation libraries without a strong reason.

Prefer animating:
- transform
- opacity

Avoid excessive animation of:
- width
- height
- large blur
- large box-shadow
- backdrop-filter

All motion must have cleanup/lifecycle handling.

---

# Reduced Motion

Required.

When user prefers reduced motion:

- remove parallax
- remove long scrub timelines
- remove or shorten route transitions
- show all content without waiting for animation
- preserve all functionality
- never hide information behind motion

---

# Responsive Strategy

Mobile must be intentionally adapted.

Do not simply scale desktop.

Desktop may use:
- pinned scenes
- horizontal scroll storytelling
- layered art direction

Mobile should use:
- shorter scenes
- fewer layers
- native horizontal swipe where appropriate
- stacked ingredient content
- sticky add-to-cart on product detail if useful

Touch users must never depend on hover.

Landscape mobile must be handled.

---

# Image System

All product photography must follow one consistent art direction.

Expected assets per product:
- card 4:5
- hero 16:10 or 16:9
- detail/ingredient asset
- optional isolated asset for motion

Images must support:
- responsive sizes
- modern formats
- reserved aspect ratios
- lazy loading where appropriate
- correct alt text

Do not mix random stock visual styles.

---

# Accessibility Requirements

Must support:

- semantic document structure
- correct heading hierarchy
- keyboard navigation
- visible focus
- accessible dialogs/drawers
- form labels
- clear validation
- meaningful alt text
- no color-only feedback
- reduced motion
- screen-reader friendly cart feedback

Shopping flow must remain fully usable without cinematic motion.

---

# Performance Requirements

Motion-heavy does not mean heavy.

Must:

- optimize responsive media
- avoid unnecessary large image assets
- load motion code only where needed when practical
- clean up scroll triggers/listeners
- limit continuous loops
- limit blur/filter use
- avoid layout shift
- control font weight/family count
- preserve functional content if enhanced animation fails

---

# SEO / Content Requirements

Routes must use readable slugs.

Product and journal content must be present in meaningful HTML, not injected only as animation fragments.

Support:
- page title
- description
- social image
- canonical where needed
- product metadata structure where appropriate

---

# Image Art Direction Reference

Use the separate files:
- `02_image_art_direction.md`
- `03_image_prompt_templates.md`

Do not generate arbitrary visual direction during implementation.

---

# Validation / Acceptance

Use `15_acceptance_criteria.md` as the final QA checklist.

The implementation is not considered complete merely because pages render.

It must also meet:
- responsive
- motion
- accessibility
- performance
- UX
- visual consistency
- commerce correctness

criteria.

---

# Implementation Philosophy

Before building a large section:

1. confirm data shape
2. confirm component boundaries
3. confirm responsive behavior
4. confirm motion behavior
5. implement
6. test
7. profile
8. polish

Avoid premature abstraction, but do not duplicate foundational patterns.

Prioritize:
clarity → correctness → accessibility → performance → polish.
