import type { Metadata } from "next";
import { Manrope, Vazirmatn } from "next/font/google";
import { Footer } from "@/components/shell/footer";
import { Header } from "@/components/shell/header";
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
      data-scroll-behavior="smooth"
      className={`${vazirmatn.variable} ${manrope.variable}`}
    >
      <body>
        <a className="skip-link" href="#main-content">
          رفتن به محتوای اصلی
        </a>
        <Header />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
