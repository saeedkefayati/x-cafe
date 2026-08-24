# 02 — Image Art Direction System

## هدف

تمام تصاویر Menu باید طوری ساخته شوند که انگار در یک Photo Shoot واحد تولید شده‌اند.

هدف این نیست که هر تصویر به‌تنهایی زیبا باشد؛ هدف این است که کل Collection یک زبان بصری مشترک داشته باشد.

---

## 1. Master Photography Language

### Camera

- product eye-level یا کمی پایین‌تر برای Hero
- perspective طبیعی
- distortion بسیار کم
- focal feel نزدیک به 50–85mm product photography
- زاویه‌های شدید ممنوع مگر برای Asset خاص

### Lighting

- large soft key light از upper-left
- soft fill
- subtle rim light در صورت نیاز
- shadow نرم و طبیعی
- highlightهای کنترل‌شده روی شیشه و سرامیک

### Background

- ساده
- matte
- subtle gradient
- بدون texture شلوغ
- بر اساس category قابل تغییر ولی در یک خانواده رنگی

### Surface

یکی از چند Surface ثابت:

- warm natural stone
- dark honed stone
- light travertine
- matte ceramic
- muted wood

تعداد Surfaceها محدود باشد.

---

## 2. Product Placement

### Card Asset

- center aligned
- silhouette واضح
- فضای امن اطراف
- crop یکسان
- scale یکسان در هر category

### Hero Asset

- فضای خالی بیشتر
- محصول می‌تواند کمی off-center باشد
- فضای مناسب برای typography و Motion
- background قابل گسترش

### Ingredient Asset

- isolated
- ساده
- بدون props اضافی
- مناسب حرکت روی صفحه

---

## 3. Realism Rules

باید طبیعی بماند:

- foam
- crema
- ice
- condensation
- pastry crumb
- chocolate texture
- matcha powder
- fruit fibers
- melted caramel
- whipped cream

ممنوع:

- glass geometry عجیب
- iceهای ناممکن
- foam پلاستیکی
- میوه‌های غیرواقعی
- reflection غیرمنطقی
- اشیای شناور بدون منطق مگر برای Asset motion
- food بیش از حد perfect

---

## 4. Color Families by Category

این‌ها direction هستند، نه Hex نهایی.

### Espresso / Coffee
- espresso brown
- warm cream
- cocoa
- charcoal

### Milk Drinks
- warm ivory
- oat beige
- caramel
- soft brown

### Matcha
- muted botanical green
- cream
- light stone

### Cold Drinks
- pale aqua
- soft fruit accents
- ice blue
- transparent glass tones

### Desserts
- warm cream
- chocolate brown
- berry accent
- pastry beige

### Breakfast / Food
- natural stone
- warm daylight
- muted greens
- bread / egg / cheese natural colors

---

## 5. Required Assets Per Product

حداقل:

### A. Card Image
- 4:5
- clean centered product
- ecommerce listing

### B. Hero Image
- 16:10 یا 16:9
- negative space
- detail page / landing

### C. Detail Asset
یکی از:
- close-up texture
- ingredient composition
- alternate angle

### D. Optional Transparent/Isolated Asset
برای motion-heavy products در صورت نیاز.

---

## 6. Naming Convention

پیشنهاد:

`product-{slug}-{usage}-{variant}.{format}`

مثال:

- `product-caramel-latte-card-v1.webp`
- `product-caramel-latte-hero-v1.webp`
- `product-caramel-latte-detail-caramel-v1.webp`

---

## 7. Generation Workflow

برای تمام محصولات یک‌باره تصویر نساز.

### مرحله 1 — Calibration

سه محصول با جنس متفاوت:

1. Latte
2. Matcha
3. Cheesecake

### مرحله 2 — Compare

برای هر کدام چند نسخه بساز و بررسی کن:

- camera consistency
- shadow consistency
- background
- product scale
- realism
- crop
- brand feeling

### مرحله 3 — Lock Style

وقتی Style نهایی شد:

- lighting direction را تغییر نده
- lens feel را تغییر نده
- visual density را تغییر نده
- background language را حفظ کن
- surface family را محدود نگه دار

### مرحله 4 — Scale

بعد همه Menu تولید شود.

---

## 8. QA Checklist for Every Image

هر تصویر قبل از تأیید:

- آیا محصول واضح است؟
- آیا با Collection هماهنگ است؟
- آیا glass/plate geometry طبیعی است؟
- آیا سایه منطقی است؟
- آیا highlight طبیعی است؟
- آیا بیش از حد AI-perfect نشده؟
- آیا crop برای responsive مناسب است؟
- آیا text/logo ناخواسته ندارد؟
- آیا props اضافی ندارد؟
- آیا رنگ پس‌زمینه با category هماهنگ است؟
- آیا محصول در Thumbnail هم قابل تشخیص است؟

---

## 9. Export Guidance

برای سایت:

- AVIF یا WebP
- نسخه‌های responsive
- Hero با width بزرگ‌تر
- Card سبک‌تر
- blur placeholder یا dominant-color placeholder
- اصل source را جدا نگه دار

تولید فایل و optimize نهایی در مرحله‌ی توسعه انجام می‌شود.
