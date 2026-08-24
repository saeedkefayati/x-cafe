# 08 — Motion System Specification

## فلسفه

Motion باید یکی از این کارها را انجام دهد:

1. جهت را توضیح دهد.
2. رابطه‌ی عناصر را نشان دهد.
3. hierarchy را تقویت کند.
4. داستان را جلو ببرد.
5. feedback بدهد.

اگر هیچ‌کدام را انجام نمی‌دهد، احتمالاً لازم نیست.

---

# 1. Motion Categories

## Micro Motion

کاربرد:
- button
- icon
- hover
- tab
- checkbox
- quantity

ویژگی:
- سریع
- subtle
- interruptible

---

## Component Motion

کاربرد:
- card
- accordion
- drawer
- menu
- search

ویژگی:
- واضح
- کوتاه
- بدون overshoot افراطی

---

## Page Motion

کاربرد:
- route change
- shared product image
- journal card → post

ویژگی:
- hierarchy-driven
- ترجیحاً shared visual continuity
- fallback بدون motion باید کامل باشد

---

## Scroll Cinematic Motion

کاربرد:
- Home
- Product Detail
- About

ویژگی:
- progress-based
- controlled
- section-specific
- responsive variant دارد

---

# 2. Signature Motion Vocabulary

## Reveal

- mask reveal
- opacity + small y
- clip reveal
- image crop reveal

## Shift

- controlled translate
- product re-centering
- typography repositioning

## Scale

- subtle product emphasis
- depth

## Parallax

- فقط لایه‌های محدود
- اختلاف سرعت کم
- نه روی متن اصلی

## Transform Story

یک Product Hero با Scroll:
- scale
- move
- theme shift
- ingredient change
- copy change

---

# 3. Home Motion Density

### High

- Hero
- Featured transformation
- Ingredient story

### Medium

- categories
- best sellers
- brand story

### Low

- journal
- location
- footer

---

# 4. Product Detail Motion Density

### High

- shared entry
- hero
- ingredient/flavor storytelling

### Low

- customization
- add to cart
- recommendations

خرید نباید به Motion وابسته شود.

---

# 5. Checkout Motion

فقط:
- validation feedback
- step change
- loading
- success

هیچ cinematic scroll در Checkout.

---

# 6. Scroll Timeline Format

برای هر cinematic section این فیلدها ثبت شود:

- trigger
- start
- end
- pin
- scrub
- snap optional
- layers
- text states
- background states
- product states
- mobile adaptation
- reduced-motion behavior

---

# 7. Motion Accessibility

وقتی `prefers-reduced-motion: reduce`:

- scrub animation حذف یا بسیار ساده
- parallax حذف
- page transition کوتاه/instant
- content بدون انتظار قابل مشاهده
- هیچ اطلاعاتی فقط با animation ظاهر نشود

---

# 8. Motion Performance Rules

اولویت:
- transform
- opacity

با احتیاط:
- filter
- backdrop-filter
- large blur
- box-shadow animation

پرهیز:
- layout thrashing
- scroll listenerهای متعدد دستی
- width/height animation سنگین
- انیمیت کردن تصاویر بسیار بزرگ بدون strategy

---

# 9. Interaction Timing Personality

Brand motion باید:

- smooth
- confident
- slightly slow in cinematic moments
- quick in utility flows

یعنی:
Home می‌تواند deliberate باشد.
Cart باید immediate باشد.

---

# 10. Page Transition Concept

### Menu → Product Detail

1. کاربر Product Card را انتخاب می‌کند.
2. card image visual continuity دارد.
3. surrounding UI fade/shift می‌شود.
4. product image به Hero position می‌رود.
5. detail copy ظاهر می‌شود.

اگر shared transition پشتیبانی نشد:
- normal route navigation
- hero fade/enter

UX نباید خراب شود.
