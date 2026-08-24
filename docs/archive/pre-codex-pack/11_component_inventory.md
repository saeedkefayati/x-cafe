# 11 — Component Inventory

این فایل implementation نیست؛ فقط مسئولیت و مرز componentها را تعریف می‌کند.

---

# A. Foundation / Primitives

- Box
- Stack
- Inline
- Grid
- Container
- Section
- Surface
- Divider
- AspectRatio
- VisuallyHidden

---

# B. Typography

- Text
- Heading
- Eyebrow
- PriceText
- RichText

---

# C. Controls

- Button
- IconButton
- LinkButton
- QuantityControl
- SegmentedControl
- RadioCard
- Checkbox
- Select
- Input
- Textarea

---

# D. Navigation

- Header
- DesktopNav
- MobileNav
- Footer
- Breadcrumb optional
- CategoryNav
- BackLink

---

# E. Product

- ProductCard
- ProductImage
- ProductBadge
- ProductPrice
- ProductMeta
- ProductHero
- ProductGallery
- FlavorNotes
- IngredientCard
- ProductConfigurator
- ProductOptionGroup
- AddToCartBar
- RelatedProducts

---

# F. Menu

- MenuGrid
- CategoryCard
- CategoryTabs
- FilterBar
- MenuEmptyState
- SearchResults

---

# G. Cart / Checkout

- CartTrigger
- CartDrawer
- CartItem
- CartSummary
- CheckoutSection
- FulfillmentSelector
- LocationSelector
- TimeSlotSelector
- PaymentSection
- OrderReview
- OrderSuccess

---

# H. Content

- JournalCard
- ArticleHero
- ArticleBody
- PullQuote
- RelatedPosts
- BrandStorySection
- LocationCard
- FAQItem

---

# I. Motion / Experience

این‌ها باید wrapper یا orchestration باشند، نه primitive عمومی بی‌هدف.

- Reveal
- ScrollScene
- ProductTransformScene
- IngredientStoryScene
- PageTransitionBoundary
- ParallaxLayer

---

# J. Feedback

- Toast
- InlineError
- EmptyState
- LoadingState
- Skeleton

---

# K. Utility

- ResponsiveImage
- SEO metadata helper
- Price formatter
- Availability indicator

---

# Component Rules

هر component باید:

- یک مسئولیت روشن داشته باشد
- از data model جداشدنی باشد تا حد منطقی
- hardcoded product data نداشته باشد
- accessibility state کامل داشته باشد
- visual state document شود
- Story/Test مناسب داشته باشد اگر پروژه Design System دارد

---

# Avoid

- Mega componentهای چندصد خطی
- propهای boolean زیاد برای themeهای تصادفی
- componentهایی که route + data + animation + presentation را یکجا کنترل کنند
- duplication بین Home product و Menu product بدون دلیل
