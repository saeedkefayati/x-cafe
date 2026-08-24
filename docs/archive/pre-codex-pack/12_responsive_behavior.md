# 12 — Responsive Behavior Specification

## اصل

نسخه Mobile نباید Desktop کوچک‌شده باشد.

بعضی Experienceها باید redesign شوند.

---

# 1. Layout

## Desktop / Wide

- large negative space
- cinematic compositions
- split layouts
- pinned scenes
- larger type

## Tablet

- shorter pinned sections
- reduced side content
- simplified layer count

## Mobile

- content-first
- shorter motion
- native scrolling
- fewer floating elements
- no fragile multi-column composition

---

# 2. Home Adaptation

## Hero
Desktop:
large centered composition.

Mobile:
product smaller
headline earlier
less movement

## Product Transformation
Desktop:
pinned timeline possible.

Mobile:
یکی از:
- shorter staged sequence
- swipe cards
- simple stacked product states

## Category Horizontal Scroll
Desktop:
scroll-driven optional.

Mobile:
native horizontal scroll preferred.

---

# 3. Product Detail

Desktop:
visual storytelling side-by-side.

Mobile:
image first
content
options
sticky CTA

Ingredient story:
Desktop can pin.
Mobile should stack.

---

# 4. Navigation

Desktop:
full minimal nav.

Mobile:
compact header
menu drawer/sheet
cart remains direct.

---

# 5. Touch Rules

- target size مناسب
- hover-only information ممنوع
- swipe behavior با native scroll conflict نداشته باشد
- drag-only controls ممنوع مگر alternative داشته باشند

---

# 6. Typography

Display text باید fluid یا breakpoint-aware باشد.

Headline نباید:
- بیش از حد line break عجیب داشته باشد
- محصول را بپوشاند
- viewport را پر کند

---

# 7. Images

برای Hero:
- art direction crop
- object-position per breakpoint
- possibly separate generated mobile asset فقط اگر واقعاً نیاز است

---

# 8. Motion Reduction by Screen Size

علاوه بر reduced-motion preference، برای دستگاه‌های compact:

- layer count کمتر
- blur کمتر
- parallax کمتر
- timeline shorter
- pinned distance کمتر

---

# 9. Sticky UI

Mobile:
- sticky add-to-cart useful
- header sticky minimal

مراقب safe-area inset.

---

# 10. Landscape Mobile

نباید فرض شود height کافی است.

Pinned cinematic sections باید در landscape mobile degrade شوند.
