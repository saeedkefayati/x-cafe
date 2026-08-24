# 05 — Core UX Flows

## Flow 1 — Hero Product Purchase

`Home`
→ Featured cinematic product
→ CTA: Explore
→ Product Detail
→ Customize
→ Add to Cart
→ Cart Drawer
→ Checkout
→ Order Success

### هدف

کمترین اصطکاک بین Discovery و Purchase.

---

## Flow 2 — Menu Browsing

`Home`
→ Menu
→ Category
→ Product Card
→ Product Detail
→ Add to Cart

### Rules

- Category switching سریع
- Filters محدود و مفید
- Product card اطلاعات کافی ولی کم
- بازگشت به scroll position قبلی Menu ترجیحاً حفظ شود

---

## Flow 3 — Quick Add

`Menu`
→ Product Card
→ Quick Add

فقط برای محصولاتی که customization پیچیده ندارند.

اگر محصول customization لازم دارد:

Quick Add به Product Detail یا Configurator باز شود.

---

## Flow 4 — Cart

Add to Cart
→ Cart Drawer باز می‌شود

Drawer:
- items
- quantity
- remove
- subtotal
- checkout CTA

Secondary CTA:
- Continue browsing

Cart Drawer نباید کاربر را از context فعلی جدا کند.

---

## Flow 5 — Checkout

Cart
→ Checkout

ترتیب پیشنهادی:

1. Contact
2. Fulfillment
3. Address / Pickup location
4. Time slot اگر لازم است
5. Payment
6. Review
7. Place order

Checkout باید کم‌Motion باشد.

---

## Flow 6 — Search

Search trigger
→ Search overlay/page
→ Query
→ Products first
→ Categories
→ Journal

Keyboard interaction باید کامل باشد.

---

## Flow 7 — Journal Discovery

Home / Header
→ Journal
→ Post
→ Related product یا related post

Journal فروش مستقیم نباشد، ولی می‌تواند با محصول مرتبط ارتباط طبیعی ایجاد کند.

---

## Flow 8 — Location

Home
→ Locations
→ Location detail/card
→ Address / hours / contact
→ Directions

اگر چند شعبه وجود دارد، انتخاب شعبه باید روی Pickup Flow هم اثر داشته باشد.

---

# UX Principles

## Progressive Disclosure

اطلاعات زیاد را یک‌باره نمایش نده.

مثلاً customization:
- Size
- Temperature
- Milk
- Extras

به ترتیب منطقی.

---

## Preserve Context

بعد از بستن:
- cart drawer
- search
- mobile menu
- product quick view

کاربر باید به جای قبلی برگردد.

---

## Functional Pages > Cinematic Pages

Checkout:
وضوح > زیبایی

Home:
Storytelling + زیبایی

Menu:
Speed + discovery

Product Detail:
Storytelling + conversion

---

# Important Edge Cases

- Product unavailable
- Variant unavailable
- Price change by size
- Extra charge
- Max quantity
- Cart item duplicated with different options
- Invalid pickup time
- Location closed
- Empty category
- No search results
- Slow image loading
- JS animation disabled/fails
