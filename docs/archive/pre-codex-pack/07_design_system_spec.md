# 07 — Design System Specification

هدف: قبل از نوشتن CSS، semantic system مشخص باشد.

---

# 1. Color Roles

به جای نام‌هایی مثل `brown-500` در UI، از Role استفاده شود.

## Foundation

- canvas
- surface
- surfaceElevated
- surfaceInverse

## Text

- textPrimary
- textSecondary
- textMuted
- textInverse

## Border

- borderSubtle
- borderDefault
- borderStrong

## Brand

- brandPrimary
- brandSecondary
- accent

## Feedback

- success
- warning
- danger
- info

## Product Theme

هر Category می‌تواند theme محدود داشته باشد:

- coffee
- matcha
- dessert
- cold
- breakfast

اما این themeها نباید کل Design System را بشکنند.

---

# 2. Typography Roles

- displayXL
- displayLG
- heading1
- heading2
- heading3
- heading4
- bodyLG
- body
- bodySM
- label
- caption

## Rules

- Display فقط برای hero / campaign moments
- body line-length حدوداً محدود
- uppercase فقط محدود برای eyebrow/label
- letter spacing در Display و Label جداگانه تنظیم شود
- responsive type scale داشته باشیم

---

# 3. Spacing Scale

پیشنهاد conceptual:

- 4
- 8
- 12
- 16
- 20
- 24
- 32
- 40
- 48
- 64
- 80
- 96
- 128
- 160

همه spacingها لازم نیست exposed token عمومی باشند.

---

# 4. Layout Tokens

- contentMaxWidth
- readingMaxWidth
- wideMaxWidth
- pageGutterDesktop
- pageGutterTablet
- pageGutterMobile
- sectionSpaceCompact
- sectionSpaceDefault
- sectionSpaceLarge
- headerHeight

---

# 5. Radius

- radiusSM
- radiusMD
- radiusLG
- radiusXL
- radiusPill

استفاده‌ی radius بزرگ در همه‌چیز ممنوع.

---

# 6. Shadow / Depth

به‌جای shadowهای زیاد:

- shadowSubtle
- shadowFloating
- shadowOverlay

در cinematic sectionها depth بیشتر با:
- scale
- focus
- blur
- layering
- light

ساخته شود، نه box-shadow سنگین.

---

# 7. Motion Tokens

## Duration

- motionInstant
- motionFast
- motionBase
- motionSlow
- motionPage

## Easing

- easeStandard
- easeEnter
- easeExit
- easeEmphasized

Scroll scrub timeline جدا از duration token است.

---

# 8. Z-Index Layers

Semantic layers:

- base
- sticky
- header
- drawer
- modal
- toast
- transition
- criticalOverlay

عددهای تصادفی z-index در componentها استفاده نشوند.

---

# 9. Breakpoint Philosophy

Breakpoint بر اساس layout نیاز تعریف شود نه device branding.

حداقل conceptual:

- compact
- medium
- wide
- ultraWide

---

# 10. State Design

برای Componentهای interactive:

- default
- hover
- active
- focus-visible
- disabled
- loading
- selected
- error where relevant

---

# 11. Dark Sections

Dark mode کامل پروژه در فاز اول الزامی نیست.

اما componentها باید بتوانند داخل:
- light section
- dark/inverse section

درست کار کنند.

---

# 12. Primitive Philosophy

Primitiveها باید composable باشند.

پیشنهاد:

- Box
- Stack
- Inline
- Grid
- Container
- Section
- Surface
- Text
- Heading
- VisuallyHidden
- AspectRatio

Primitive نباید business logic داشته باشد.

---

# 13. Component Styling Rule

هر Component باید:

- از token استفاده کند
- stateهای مشخص داشته باشد
- responsive behavior مشخص داشته باشد
- reduced motion را رعایت کند
- themeهای لازم را محدود نگه دارد
