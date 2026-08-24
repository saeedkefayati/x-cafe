# 13 — Accessibility & Performance Guardrails

# Accessibility

## 1. Semantic Structure

- یک H1 اصلی در هر page
- heading hierarchy واقعی
- nav/header/main/footer semantic
- button برای action
- link برای navigation

---

## 2. Keyboard

تمام:
- menu
- search
- cart
- accordion
- product options
- checkout
- modal/drawer

با keyboard قابل استفاده باشند.

Focus-visible واضح باشد.

---

## 3. Reduced Motion

پشتیبانی اجباری.

در reduce:

- parallax off
- long scrub off
- page transitions minimal
- revealها instant یا بسیار کوتاه
- محتوا همیشه حاضر

---

## 4. Contrast

Text و controls باید contrast مناسب داشته باشند.

پس‌زمینه‌های category theme نباید readability را خراب کنند.

---

## 5. Images

- alt text meaningful
- decorative assets empty alt
- product image alt واقعی
- image نباید تنها carrier اطلاعات باشد

---

## 6. Forms

- label واقعی
- errors مرتبط
- required state
- validation message واضح
- error فقط با رنگ نمایش داده نشود

---

## 7. Cart / Toast

افزودن به Cart باید feedback قابل فهم داشته باشد.

اگر toast استفاده شد:
- dismissible where relevant
- screen-reader announcement مناسب

---

# Performance

## 1. Core Principle

Motion-heavy site نباید به معنی heavy site باشد.

---

## 2. Images

- responsive sizes
- AVIF/WebP
- hero preload فقط در صورت نیاز
- lazy load پایین صفحه
- dimensions مشخص
- placeholder
- avoid 4K image where 1200px کافی است

---

## 3. JavaScript

- GSAP فقط در صفحه‌هایی که لازم است
- split/chunk
- avoid duplicate animation libs
- cleanup scroll triggers
- no uncontrolled global listeners

---

## 4. Animation

ترجیح:
- transform
- opacity

کاهش:
- huge blur
- backdrop-filter
- animated shadow
- clip on massive layers if costly

---

## 5. Layout Stability

- image aspect ratio reserved
- fonts strategy
- sticky heights predictable
- no late layout jump from product data

---

## 6. Fonts

- محدودیت تعداد family/weights
- subset در صورت نیاز
- fallback مناسب
- avoid excessive font files

---

## 7. Mobile GPU

روی دستگاه ضعیف:
- fewer layers
- no giant fixed canvases
- no continuous decorative loops
- reduced transform complexity

---

## 8. SEO

Animation نباید content را از HTML حذف کند.

- server-rendered meaningful content
- metadata
- structured product content if applicable
- canonical
- readable URLs

---

## 9. Failure Mode

اگر JavaScript animation fail شد:
- content visible
- navigation works
- shopping works
- checkout works

Motion enhancement است، dependency نیست.
