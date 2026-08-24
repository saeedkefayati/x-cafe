# 04 — Sitemap & Information Architecture

## Primary Sitemap

### Commerce

- `/`
- `/menu`
- `/menu/[category]`
- `/product/[slug]`
- `/search`
- `/cart`
- `/checkout`
- `/order/success`

### Content

- `/journal`
- `/journal/[slug]`
- `/about`
- `/locations`
- `/contact`
- `/faq`

### Legal / System

- `/privacy`
- `/terms`
- `/404`

---

## Optional Phase 2

فقط در صورت نیاز واقعی:

- `/account`
- `/account/orders`
- `/favorites`
- `/rewards`
- `/order/[id]`
- `/reservation`
- `/gift-cards`

---

# Navigation Architecture

## Desktop Primary Nav

پیشنهاد:

- Menu
- Journal
- About
- Locations

سمت دیگر:

- Search
- Cart

Logo:
- Home

Contact را می‌توان داخل Footer یا About/Locations نگه داشت تا Header بیش از حد شلوغ نشود.

---

## Mobile Nav

- Menu
- Journal
- About
- Locations
- Contact
- FAQ

Utility:
- Search
- Cart

---

# Footer

### Discover
- Menu
- Journal
- About

### Visit
- Locations
- Contact
- Hours

### Help
- FAQ
- Shipping/Delivery info در صورت وجود
- Privacy
- Terms

### Social
در صورت نیاز.

---

# Category Structure

پیشنهاد اولیه:

- Coffee
- Milk Drinks
- Matcha
- Tea
- Cold Drinks
- Desserts
- Breakfast
- Food

Categoryها باید از Data Source بیایند، نه Hard-code شدن در layout.

---

# Search Scope

Search باید بتواند حداقل این موارد را پیدا کند:

- products
- categories
- journal posts

در فاز اول Product-first باشد.

---

# Product URL Rule

Slug:
- lowercase
- readable
- hyphen-separated
- stable

مثال:

`/product/iced-caramel-latte`

از ID خام در URL اصلی استفاده نشود.

---

# Journal URL

`/journal/how-we-roast-our-coffee`

نه:

`/blog/post?id=328`

---

# Empty / Error States

برای این موارد Design لازم است:

- search no results
- empty cart
- product unavailable
- checkout validation
- order failure
- 404
