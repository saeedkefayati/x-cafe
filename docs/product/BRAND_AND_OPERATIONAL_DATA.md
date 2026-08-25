# Brand and operational data

Last verified: 2026-08-26 (1405-06-04)

## Brand

- Customer-facing name: «ایکس کافه».
- The vector mark combines two crossing paths with a coffee bean at their
  intersection: a visual shorthand for a meeting point between product and
  pause.
- The mark is original to this project and must not reuse VCafe's logo or
  wordmark.
- Primary reusable files:
  - `src/components/brand/brand-logo.tsx`
  - `public/brand/x-cafe-mark.svg`
  - `src/app/icon.svg`

## User-approved reference source

The user explicitly requested that branch details and menu prices be based on
VCafe Tehran. This is a content reference only; X Cafe keeps its own identity.

- Branch directory: <https://vcafetehran.com/branches/>
- Felestin menu: <https://vcafetehran.com/menu/felestin/>
- Gholhak menu: <https://vcafetehran.com/menu/gholhak/>
- Pasdaran menu: <https://vcafetehran.com/menu/pasdaran/>

## Branches

| Branch   | Address                                                            | Phone        | Daily hours |
| -------- | ------------------------------------------------------------------ | ------------ | ----------- |
| Gholhak  | خیابان شریعتی، دوراهی قلهک، خیابان بصیری، پلاک ۶، طبقه ۵           | ۰۲۱ ۲۲۶۴۹۵۶۱ | ۸:۳۰ تا ۲۳  |
| Felestin | خیابان فلسطین، پایین‌تر از خیابان بزرگمهر، نبش کوچه نایبی، پلاک ۳۳ | ۰۲۱ ۶۶۹۷۶۰۴۱ | ۹ تا ۲۳     |
| Pasdaran | پاسداران، نبش بوستان پنجم، ساختمان سام، پلاک ۲۲۹، طبقه ۴           | ۰۲۱ ۲۲۷۹۶۵۲۱ | ۹ تا ۲۳     |

The fixed pickup preparation estimate remains 45 minutes. These records are
confirmed for the current project, but the checkout action remains a demo and
does not dispatch anything to a real branch.

## Pricing policy

- Source pages show compact values such as `210`; they are interpreted as
  thousands of toman and stored as IRR. Example: 210 thousand toman is stored
  as 2,100,000 IRR and displayed as 210,000 toman.
- Because the current product model has one base price before a branch is
  selected, directly matched products use the Felestin price as the starting
  reference. The Gholhak and Pasdaran pages currently differ only for Espresso
  and Americano (240 instead of 210).
- A product is `source-matched` only when its current catalog identity has a
  direct reference match. Other products keep temporary values and must not be
  presented as source-confirmed.
- Size and extra-option deltas remain temporary because the live menu does not
  provide a direct match for the current configuration model.

### Direct matches currently applied

| X Cafe product          | Reference item            | Starting price |
| ----------------------- | ------------------------- | -------------- |
| Espresso                | اسپرسو، کامرشیال          | ۲۱۰ هزار تومان |
| Americano               | امریکانو، کامرشیال        | ۲۱۰ هزار تومان |
| Cappuccino              | کاپوچینو                  | ۲۹۰ هزار تومان |
| Cafe Latte              | لاته                      | ۲۹۰ هزار تومان |
| Flat White              | فلت وایت                  | ۲۹۰ هزار تومان |
| Iced Americano          | امریکانو با امکان سرو سرد | ۲۱۰ هزار تومان |
| Iced Latte              | لاته با امکان سرو سرد     | ۲۹۰ هزار تومان |
| Burnt Basque Cheesecake | چیزکیک سن سباستین         | ۲۹۰ هزار تومان |
| Carrot and Walnut Cake  | هویج خامه‌ای              | ۲۷۰ هزار تومان |
| Chocolate Fudge Cake    | کیک شکلاتی با گاناش       | ۲۹۰ هزار تومان |

## Remaining commerce blockers

- Real order backend, ecommerce provider, or POS.
- Authoritative availability and inventory source.
- Final tax and service-fee rules for pickup orders.
- Production domain and legal content.
