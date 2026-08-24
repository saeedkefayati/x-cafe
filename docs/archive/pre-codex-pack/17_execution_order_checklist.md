# 17 — Execution Order Checklist

این Checklist ترتیب پیشنهادی کار بعد از پایان این Planning Pack است.

## Pre-Coding

- [ ] Brand direction approved
- [ ] Visual direction approved
- [ ] Image art direction approved
- [ ] 3 calibration products selected
- [ ] Calibration images generated
- [ ] Image Style Bible locked
- [ ] Sitemap approved
- [ ] UX flows approved
- [ ] Product model approved
- [ ] Design System roles approved
- [ ] Motion vocabulary approved
- [ ] Home storyboard approved
- [ ] Product detail storyboard approved
- [ ] Component inventory approved
- [ ] Responsive rules approved
- [ ] Accessibility/performance guardrails approved

## Codex — Foundation

- [ ] Initialize project
- [ ] Configure formatting/linting/testing
- [ ] Set routing structure
- [ ] Add design tokens
- [ ] Build layout primitives
- [ ] Build typography primitives
- [ ] Build core controls
- [ ] Build responsive container/layout system
- [ ] Add motion utilities/lifecycle strategy

## Codex — Data / Commerce Foundation

- [ ] Product schema
- [ ] Category schema
- [ ] Cart model
- [ ] Order model
- [ ] Journal model
- [ ] Location model
- [ ] Mock/seed data
- [ ] Price formatting
- [ ] Availability rules

## Codex — Core UI

- [ ] Header
- [ ] Mobile navigation
- [ ] Footer
- [ ] Product Card
- [ ] Menu Grid
- [ ] Category Navigation
- [ ] Search
- [ ] Cart Drawer
- [ ] Empty / error states

## Codex — Experience Pages

- [ ] Home static layout first
- [ ] Home responsive layout
- [ ] Home motion layer
- [ ] Home reduced-motion variant
- [ ] Product Detail static layout
- [ ] Product Detail customization
- [ ] Product Detail motion
- [ ] Product Detail reduced-motion variant

## Codex — Commerce

- [ ] Cart page/drawer
- [ ] Checkout
- [ ] Validation
- [ ] Fulfillment
- [ ] Success page
- [ ] Edge cases

## Codex — Content Pages

- [ ] Journal
- [ ] Post
- [ ] About
- [ ] Locations
- [ ] Contact
- [ ] FAQ
- [ ] Legal
- [ ] 404

## QA

- [ ] Desktop visual QA
- [ ] Tablet visual QA
- [ ] Mobile visual QA
- [ ] Landscape mobile
- [ ] Keyboard
- [ ] Screen reader basics
- [ ] Reduced motion
- [ ] Slow network
- [ ] Image loading
- [ ] Cart edge cases
- [ ] Checkout edge cases
- [ ] Performance profiling
- [ ] SEO metadata
- [ ] Final acceptance checklist

## Important Implementation Rule

برای Home و Product Detail:

ابتدا نسخه‌ی کاملاً Functional و Static ساخته شود.

بعد Motion به آن اضافه شود.

هیچ بخش اصلی نباید برای قابل استفاده بودن به GSAP یا animation وابسته باشد.
