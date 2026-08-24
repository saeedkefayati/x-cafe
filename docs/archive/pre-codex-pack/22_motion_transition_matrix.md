# 22 — Motion & Transition Matrix

این Matrix مشخص می‌کند هر Interaction چه شدت Motion دارد.

| Context | Motion level | Primary behavior | Avoid |
|---|---:|---|---|
| Home Hero | High | scale / shift / narrative transition | random floating UI |
| Home Transform | High | pinned scrub timeline | too many states |
| Menu | Low-Medium | reveal / hover | long pin |
| Product Card | Low | image emphasis / feedback | dramatic tilt |
| Menu → Product | Medium-High | shared visual continuity | full-screen loader |
| Product Hero | High | controlled entry | auto-loop |
| Ingredients | Medium-High | staged reveal | text parallax |
| Configurator | Low | selection feedback | cinematic motion |
| Add to Cart | Low | immediate feedback | delay |
| Cart Drawer | Medium | slide/fade | bounce-heavy spring |
| Checkout | Low | validation/step | scroll effects |
| Journal | Low-Medium | image reveal | animate every paragraph |
| Post | Low | simple entry | continuous scroll motion |
| About | Medium-High | editorial reveal | product-demo repetition |
| FAQ | Low | accordion | decorative transitions |
| 404 | Medium | one playful moment | long animation |

---

# Route Transition Rules

## Home → Menu
Simple:
- current content fade/shift
- Menu enters fast

No need for cinematic shared transition.

## Menu → Product
Signature:
- selected product image continuity
- other UI recedes
- Hero resolves

## Product → Menu
Fast reverse feeling.
Do not force long reverse animation.

## Journal → Post
Featured image continuity if easy and stable.

## Any → Checkout
Fast, minimal.
Utility state takes priority.

---

# Overlay Motion

## Mobile Menu
- panel or full-screen surface
- fast ease
- focus managed

## Cart
- side drawer desktop
- bottom/full-height sheet mobile as appropriate

## Search
- overlay/page with rapid entry
- autofocus only when accessibility behavior is correct

---

# Hover Rules

Desktop product card:
- image scale very subtle
- label shift optional
- shadow/border response minimal

Do not use:
- 3D tilt
- cursor-follow rotation
- large perspective distortions

---

# Loading Motion

Use:
- skeleton
- subtle opacity
- progress only when meaningful

Avoid:
- branded intro loader on every route
- forced minimum loading time

---

# Motion Hierarchy

در هر viewport فقط یک animation باید «اصلی» احساس شود.

اگر Product در حال transform است:
ingredientها secondary باشند.
text tertiary باشد.

همه عناصر همزمان attention نخواهند.
