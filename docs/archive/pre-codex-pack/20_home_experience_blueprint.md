# 20 — Home Experience Blueprint

این فایل نسخه‌ی دقیق‌تر Home است تا Codex بعداً animation را اختراع نکند.

---

# Global Rhythm

ترتیب ریتم:

`Cinematic → Functional → Cinematic → Functional → Editorial → Functional`

نباید سه سکشن سنگین پشت سر هم داشته باشیم.

---

# 01 — Header

## Initial State
روی Hero:
- transparent / visually quiet
- logo
- Menu
- Journal
- About
- Locations
- Search
- Cart

## Scrolled State
- compact
- subtle surface
- no heavy blur if performance suffers

Mobile:
- logo
- menu
- cart

---

# 02 — Hero / Signature Product

## Desktop Composition

Left:
- eyebrow
- huge headline
- short copy
- CTA

Center/Right:
- hero product

Background:
Paper / category-neutral warm tone.

## Suggested Copy Shape

Eyebrow:
`SIGNATURE MENU`

Headline:
`Made for the pause.`

Body:
One concise sensory sentence.

CTA:
`Explore the menu`

Secondary:
`Our story`

این Copy placeholder است و بعداً با Brand Name واقعی نهایی می‌شود.

## Scroll

### 0–20%
Scene stable.

### 20–55%
Headline opacity slightly reduces.
Product scale 1 → ~1.08.
Product shifts toward central narrative axis.

### 55–80%
Supporting copy exits.
Background begins transition.

### 80–100%
Product enters Transformation scene.

### Important
محصول نباید با scroll از کنترل کاربر خارج شود یا جهش کند.

---

# 03 — Signature Transformation Scene

## Goal
Signature interaction سایت.

## Desktop
Pinned scene.

Visual center:
one product stage.

Side:
short product name / descriptor.

Floating:
maximum 2 ingredient elements visible simultaneously.

## States

### 0–25 — Espresso
Theme:
deep coffee / warm neutral.

Text:
`Espresso`
`Bold. Clean. Direct.`

### 25–50 — Latte
Milk enters.
Background warms.

Text:
`Latte`
`Espresso, softened.`

### 50–75 — Caramel Latte
Caramel element enters.
Color warmth rises.

Text:
`Caramel Latte`
`Creamy with a soft caramel finish.`

### 75–100 — Mocha
Cocoa/chocolate cue.

Text:
`Mocha`
`Deep cocoa, balanced with espresso.`

## Product Behavior
ترجیح:
asset transition / crossfade / shared geometry.

پرهیز:
3D پیچیده فقط برای نمایش تکنیک.

## Mobile
Pinned scene حذف یا بسیار کوتاه شود.

هر Product State:
- stacked card or full-width panel
- snap optional
- native scroll priority

---

# 04 — Menu Gateway

## Purpose
بعد از Experience، کاربر باید سریع وارد Menu شود.

Headline:
`What are you in the mood for?`

Categories:
- Coffee
- Matcha
- Cold
- Dessert
- Breakfast

Desktop:
large horizontal cards.

Mobile:
native horizontal cards.

Each card:
image + category name.

No long descriptive copy.

---

# 05 — Ingredient Story

## Recommended Product
Strawberry Matcha یا یک Signature واقعی کافه.

## Desktop Scene

Left:
pinned product.

Right:
ingredient content progresses.

### Beat 1
Matcha

### Beat 2
Milk

### Beat 3
Strawberry

### Beat 4
Final flavor statement

هر Beat:
- 1 ingredient image
- name
- 1 sentence max

## Mobile
Static vertical storytelling.

---

# 06 — Best Sellers

Functional reset.

Headline:
`Regulars have favorites.`

Grid:
4 items wide desktop / 2 tablet / 1–2 mobile.

Product card:
- image
- name
- short descriptor
- price
- availability
- action

Motion:
simple reveal + hover.

---

# 07 — Brand Story

Large editorial image.

Headline example:
`Good coffee is only part of it.`

Short paragraph:
craft / sourcing / place / hospitality.

CTA:
`About us`

Motion:
slow image crop reveal.

No pin.

---

# 08 — Journal

Headline:
`From the counter.`

3 posts max on Home.

Post card:
- image
- category/tag
- title
- date optional

---

# 09 — Location / Visit

Large location image.

Content:
- branch name
- address
- open hours summary
- directions CTA

If multiple branches:
show 2–3 cards + `All locations`.

---

# 10 — Closing Statement

Near full-width text.

Example:
`Made carefully. Served daily.`

No CTA required.

---

# 11 — Footer

Functional and quiet.

---

# Desktop Height Budget

Avoid excessively long scroll.

Target feeling:
- Hero: ~1 viewport
- Transform scene: ~2.5–3.5 viewport scroll distance
- Menu gateway: ~1–1.5
- Ingredient story: ~2–2.5
- remaining content: normal flow

Do not turn entire Home into a 12-screen animation demo.

---

# Home Acceptance

Home موفق است اگر:

- کاربر در 3 ثانیه بفهمد برند مربوط به کافه است.
- Menu CTA سریع پیدا شود.
- Signature motion به‌یادماندنی باشد.
- Scroll همچنان طبیعی احساس شود.
- Best Sellers سریع قابل خرید باشند.
- Mobile بدون cinematic complexity عالی کار کند.
