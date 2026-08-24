# 24 — Pre-Codex Decision Log

## LOCKED

این تصمیم‌ها برای شروع implementation کافی هستند:

- Premium / Minimal / Editorial / Warm visual direction
- Apple-like clarity and scroll storytelling without copying
- Light Editorial as primary mode
- Dark Immersive only in selected moments
- warm neutral palette direction
- Espresso as primary brand tone
- product-first photography
- consistent ChatGPT Image art direction
- Home + Product Detail motion-heavy
- Checkout / FAQ / Contact utility-first
- data-driven categories
- Cart Drawer flow
- semantic Design System
- reduced motion required
- mobile experience intentionally simplified
- static functional layer before motion layer

---

# NOT BLOCKING FOUNDATION DEVELOPMENT

این موارد هنوز می‌توانند بعداً مشخص شوند و مانع ساخت Foundation نیستند:

- exact café name
- final logo
- final marketing copy
- full menu item list
- final product prices
- final blog articles
- exact number of branches
- exact photography assets

برای UI foundation می‌توان mock data استفاده کرد.

---

# BLOCKING REAL COMMERCE INTEGRATION

قبل از اینکه Codex checkout واقعی و production commerce را نهایی کند، باید مشخص شوند:

## 1. Fulfillment
- Pickup only?
- Delivery?
- Both?

## 2. Geography
- country
- city
- delivery radius
- address rules

## 3. Payment
- payment gateway/provider

## 4. Order Backend
- custom backend?
- ecommerce provider?
- POS integration?

## 5. Inventory / Availability
- manual?
- POS driven?
- schedule driven?

## 6. Tax / Fees
- tax handling
- delivery fee
- service fee if any

---

# BLOCKING FINAL CONTENT

برای Launch:

- brand name
- logo
- actual menu
- product descriptions
- allergens
- images
- branches
- contact info
- legal text
- privacy details

---

# Recommended Codex Strategy Despite Unknowns

Codex می‌تواند قبل از این اطلاعات:

1. Design System
2. Layout
3. Components
4. Mock Product Model
5. Home
6. Menu
7. Product Detail
8. Cart state
9. Static Checkout UI

را بسازد.

اما Payment / real Orders باید تا زمان مشخص‌شدن Provider abstraction-based باقی بماند.
