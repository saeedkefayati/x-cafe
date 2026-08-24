# 06 — Product & Content Architecture

این فایل Conceptual Data Model را مشخص می‌کند. پیاده‌سازی TypeScript/DB/CMS بعداً توسط Codex انجام می‌شود.

---

# Product

## Identity

- id
- slug
- name
- shortName optional
- categoryId
- status
- availability

## Content

- shortDescription
- fullDescription
- story optional
- ingredients
- allergens
- flavorNotes
- dietaryTags

## Commerce

- basePrice
- compareAtPrice optional
- currency
- tax behavior
- featured
- bestSeller

## Media

- cardImage
- heroImage
- gallery
- detailAssets
- altText

## Configuration

- sizes
- temperatures
- milkOptions
- sweetnessOptions
- extras
- variantRules

## Metadata

- seoTitle
- seoDescription
- socialImage
- createdAt
- updatedAt

---

# Product Option

هر Option:

- id
- name
- value
- priceDelta
- availability
- default
- sortOrder

---

# Category

- id
- slug
- name
- description
- heroImage optional
- visualTheme
- sortOrder
- enabled

---

# Flavor Note

- label
- intensity optional
- type

مثال:
- chocolate
- nutty
- floral
- bright
- creamy
- bitter
- sweet

---

# Ingredient

- id
- name
- description optional
- image optional
- allergen
- origin optional

---

# Cart Item

یک Cart Item باید combination کامل انتخاب کاربر را نگه دارد:

- productId
- productName snapshot
- quantity
- selectedSize
- selectedTemperature
- selectedMilk
- selectedSweetness
- extras
- unitPrice
- totalPrice
- displayImage

دو محصول یکسان با customization متفاوت نباید اشتباه merge شوند.

---

# Order

## Customer

- name
- phone
- email optional

## Fulfillment

- type: pickup / delivery
- locationId optional
- address optional
- timeSlot optional

## Order Data

- items
- subtotal
- discount
- deliveryFee
- tax
- total
- currency
- paymentStatus
- orderStatus

---

# Journal Post

- id
- slug
- title
- excerpt
- coverImage
- body
- author optional
- publishedAt
- tags
- relatedProducts
- seo

---

# Location

- id
- slug
- name
- address
- coordinates
- phone
- openingHours
- services
- pickupEnabled
- image
- description

---

# FAQ

- id
- category
- question
- answer
- sortOrder

---

# Site Settings

- brandName
- logo
- defaultSeo
- socialLinks
- supportContact
- currency
- defaultLocation
- legalLinks

---

# Availability States

حداقل:

- available
- unavailable
- sold-out
- seasonal
- coming-soon

UI هرکدام باید مشخص و قابل فهم باشد.
