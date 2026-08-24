# 18 — Visual Identity Lock

این فایل، Visual Direction پیشنهادی پروژه را از حالت مفهومی به یک سیستم مشخص تبدیل می‌کند.

> نکته: تا زمانی که هویت رسمی کافه (لوگو، رنگ سازمانی یا Brand Guideline) وجود ندارد، این Palette به‌عنوان Direction پایه استفاده شود. اگر برند موجود است، نقش‌های رنگی حفظ و مقادیر با رنگ‌های برند جایگزین شوند.

---

# 1. Visual Formula

## 80% — Light Editorial
بخش عمده‌ی سایت:

- پس‌زمینه‌ی گرم و روشن
- متن بسیار تیره
- سطح‌های طبیعی
- تصویر محصول به‌عنوان مرکز توجه
- Border بسیار subtle

## 20% — Dark Immersive
فقط برای لحظات خاص:

- Roast / Coffee story
- Signature product
- Brand statement
- Transitional cinematic moment

هدف این است که Dark section «اتفاق» باشد، نه حالت دائمی سایت.

---

# 2. Core Palette

## Canvas / Neutral

### Paper
`#F5F1E8`

پس‌زمینه‌ی اصلی سایت؛ کمی گرم‌تر از سفید خالص.

### Soft Paper
`#ECE5D8`

برای Surfaceهای ثانویه، کارت‌های بزرگ و سکشن‌های تفکیک‌شده.

### Warm White
`#FBF9F4`

برای Surfaceهای روشن‌تر، input و panelهایی که باید از Canvas جدا شوند.

### Ink
`#171612`

متن اصلی.

### Muted Ink
`#6F6A61`

متن ثانویه.

### Soft Border
`#D9D1C3`

Border کنترل‌شده.

---

# 3. Brand / Product Accents

### Espresso
`#3B2418`

رنگ اصلی برند پیشنهادی.

کاربرد:
- CTA مهم
- dark section
- coffee category
- emphasis محدود

### Oat
`#D8C7AE`

Neutral گرم برای milk drinks و Surface.

### Caramel
`#B8773A`

Accent گرم.

استفاده محدود برای:
- highlight
- selected state
- flavor moment

### Matcha
`#78855C`

برای Matcha category.

### Berry
`#A65E63`

برای fruit drinks / dessert accent.

### Glass
`#D8E5E3`

برای cold drinks و حالت‌های خنک.

---

# 4. Dark Mode / Inverse Section

### Dark Canvas
`#191713`

### Dark Surface
`#24211C`

### Inverse Text
`#F6F1E8`

### Inverse Muted
`#BDB5A8`

---

# 5. Semantic Mapping

- `canvas` → Paper
- `surface` → Warm White
- `surfaceMuted` → Soft Paper
- `textPrimary` → Ink
- `textSecondary` → Muted Ink
- `borderSubtle` → Soft Border
- `brandPrimary` → Espresso
- `accentWarm` → Caramel
- `themeMatcha` → Matcha
- `themeBerry` → Berry
- `themeCold` → Glass

Category color نباید مستقیماً جای text/feedback semantic color را بگیرد.

---

# 6. Color Usage Rule

در یک viewport عادی:

- 1 neutral canvas
- 1 text family
- حداکثر 1 accent غالب
- رنگ طبیعی خود محصول

از نمایش هم‌زمان Matcha + Berry + Caramel به‌عنوان Decoration جلوگیری شود.

---

# 7. Typography Direction

## Persian-first / Bilingual Recommendation

### Persian UI & Body
**Vazirmatn**

دلایل:
- خوانایی بالا
- وزن‌های مناسب
- مناسب UI
- مناسب متن طولانی
- امکان استفاده در heading بدون شکستن هویت مینیمال

### Latin UI & Display
**Manrope**

ویژگی:
- geometric ولی انسانی
- تمیز
- مناسب premium contemporary interfaces

## Alternative

اگر پروژه فقط فارسی است:
Vazirmatn به‌تنهایی کافی است.

اگر Brand Font رسمی وجود داشت:
جایگزینی فقط بعد از بررسی readability و performance انجام شود.

---

# 8. Type Personality

## Display
- Bold
- کوتاه
- line-height فشرده
- حداکثر 2–3 خط در Hero

## Heading
- وزن medium/bold
- بدون تزئین

## Body
- readable
- line-height آزادتر
- width محدود

## Label
- compact
- medium weight
- uppercase فقط در Latin و فقط محدود

---

# 9. Suggested Type Scale

مقادیر نهایی باید responsive شوند.

### Wide
- Display XL: 88–112px
- Display L: 64–80px
- H1: 52–64px
- H2: 40–48px
- H3: 28–32px
- Body L: 20px
- Body: 16–18px
- Small: 14px

### Compact
- Display XL: 48–60px
- Display L: 42–52px
- H1: 36–44px
- H2: 30–36px
- H3: 24–28px
- Body L: 18px
- Body: 16px
- Small: 13–14px

---

# 10. Layout Personality

## Page Gutter
- Wide: generous
- Tablet: medium
- Mobile: compact but not cramped

## Content Width
محتوای متنی طولانی نباید full width شود.

## Hero
از لبه‌ها فاصله‌ی زیاد داشته باشد تا تصویر و typography نفس بکشند.

---

# 11. Shape Language

- اکثر UIها: radius متوسط
- Product media: radius بزرگ‌تر
- pill فقط برای tag / segmented control
- buttonها نباید همه pill باشند

هدف:
Premium، نه playful app UI.

---

# 12. Image Background Mapping

### Coffee
Paper / Soft Paper / Espresso dark

### Milk Drinks
Oat / warm cream

### Matcha
very muted green / cream

### Cold Drinks
Glass / pale cool neutral

### Desserts
cream / cocoa / muted berry

همه backgroundها باید low saturation باشند.

---

# 13. Final Visual Rule

اگر بین «افکت بیشتر» و «محصول واضح‌تر» انتخاب داریم:

**محصول واضح‌تر برنده است.**
