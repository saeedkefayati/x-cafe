# 25 — Codex Handoff Instructions

## نحوه استفاده

کل پوشه‌ی این Planning Pack را در context پروژه در اختیار Codex قرار بده.

به Codex بگو:

1. همه فایل‌ها را قبل از implementation مرور کند.
2. `16_codex_master_spec.md` را Master Requirement بداند.
3. `15_acceptance_criteria.md` را Definition of Done بداند.
4. `24_pre_codex_decision_log.md` را برای تشخیص Locked/Pending decisions رعایت کند.
5. از اختراع Visual Direction جدید خودداری کند.
6. ابتدا Static + Functional implementation بسازد.
7. Motion را بعد از درست‌شدن Layout اضافه کند.
8. هر phase را lint/test/typecheck کند.

---

# Suggested First Codex Task

در اولین task، کل سایت را یک‌باره نساز.

Phase 1 فقط:

- repository/project architecture
- route skeleton
- design tokens
- primitive layout components
- typography
- controls foundation
- Header/Footer shell
- mock data models
- basic Menu/Product Card
- testing/linting baseline

هیچ Scroll Cinematic سنگینی در Phase 1 پیاده نشود.

---

# Suggested Second Codex Task

Phase 2:

- complete Menu
- Category
- Product Detail static
- Product Configurator
- Cart state
- Cart Drawer
- responsive behavior
- accessibility baseline

---

# Suggested Third Codex Task

Phase 3:

- Home static composition
- About
- Journal
- Locations
- Contact
- FAQ

---

# Suggested Fourth Codex Task

Phase 4 — Motion:

- GSAP/Scroll architecture
- Hero
- Product Transformation
- Ingredient Story
- page transitions
- reduced-motion variants
- mobile simplification

---

# Suggested Fifth Codex Task

Phase 5 — Commerce Integration:

فقط وقتی backend/payment/fulfillment مشخص شد:

- checkout integration
- order submission
- payment
- availability
- order success data

---

# Mandatory Verification After Each Phase

Codex باید:

- format
- lint
- typecheck
- unit/component tests as applicable
- responsive sanity check
- keyboard check
- reduced-motion check when motion exists

را انجام دهد.

---

# Stop Conditions

Codex نباید برای این موارد تصمیم قطعی بگیرد مگر داده داده شده باشد:

- payment gateway
- CMS
- order provider
- POS
- delivery provider
- production database

در این موارد abstraction و interface مناسب بسازد یا implementation را defer کند.
