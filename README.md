# Cafe Commerce

پایهٔ فنی یک وب‌سایت فروشگاهی Premium و Editorial برای کافه با رابط فارسی و راست‌به‌چپ.

## شروع برای توسعه‌دهنده یا هوش مصنوعی

منبع اصلی راهنمای پروژه [AGENTS.md](AGENTS.md) است. سپس این فایل‌ها را بخوانید:

1. [docs/ai/START_HERE.md](docs/ai/START_HERE.md)
2. [docs/ai/PROJECT_STATE.md](docs/ai/PROJECT_STATE.md)
3. [docs/ai/CONTEXT_MAP.md](docs/ai/CONTEXT_MAP.md)

بستهٔ برنامه‌ریزی اولیه بدون تغییر در `docs/archive/pre-codex-pack` نگهداری می‌شود و مرجع تاریخی است، نه دستور جاری.

## شروع محلی

```bash
pnpm install
pnpm dev
```

## بررسی کیفیت

```bash
pnpm format:check
pnpm lint
pnpm typecheck
pnpm test
pnpm build
```

تم تصویری کاتالوگ تأیید شده و ۱۵ تصویر محصول در `public/images/products` قرار دارد. مشخصات مجموعه در manifest همان پوشه ثبت شده است.

نام نهایی برند، قیمت‌ها، سه شعبهٔ فعلی و اطلاعات حقوقی فعلاً آزمایشی هستند و باید پیش از انتشار تأیید یا جایگزین شوند. نسخهٔ اول بدون حساب کاربری، با تحویل حضوری، آماده‌سازی ۴۵ دقیقه‌ای و پرداخت هنگام تحویل طراحی شده است.
