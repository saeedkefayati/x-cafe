import type { Metadata } from "next";
import { Manrope, Vazirmatn } from "next/font/google";
import { CartProvider } from "@/components/cart/cart-provider";
import { Footer } from "@/components/shell/footer";
import { Header } from "@/components/shell/header";
import { ThemeProvider } from "@/components/theme/theme-provider";
import "@/styles/globals.css";

const vazirmatn = Vazirmatn({
  subsets: ["arabic", "latin"],
  variable: "--font-vazirmatn",
  display: "swap",
});
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const themeScript = `(() => {
  try {
    const stored = localStorage.getItem("cafe-theme");
    const preference = stored === "light" || stored === "dark" || stored === "system" ? stored : "system";
    const theme = preference === "system" ? (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light") : preference;
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
  } catch {}
})();`;

export const metadata: Metadata = {
  title: { default: "کافه — ساخته‌شده برای مکث", template: "%s | کافه" },
  description: "تجربه‌ای آرام برای کشف منو و سفارش از یک کافهٔ مستقل.",
  metadataBase: new URL("https://example.com"),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fa"
      dir="rtl"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${vazirmatn.variable} ${manrope.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <ThemeProvider>
          <CartProvider>
            <a className="skip-link" href="#main-content">
              رفتن به محتوای اصلی
            </a>
            <Header />
            <main id="main-content" tabIndex={-1}>
              {children}
            </main>
            <Footer />
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
