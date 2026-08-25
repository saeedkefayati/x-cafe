import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import { CartProvider } from "@/components/cart/cart-provider";
import { Footer } from "@/components/shell/footer";
import { Header } from "@/components/shell/header";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { siteConfig } from "@/config/site";
import { defaultSocialImage } from "@/lib/metadata";
import "@/styles/globals.css";

const vazirmatn = Vazirmatn({
  subsets: ["arabic", "latin"],
  variable: "--font-vazirmatn",
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
  metadataBase: siteConfig.url,
  title: { default: siteConfig.title, template: `%s | ${siteConfig.name}` },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  manifest: "/manifest.webmanifest",
  robots: siteConfig.isIndexingEnabled
    ? {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-image-preview": "large",
          "max-snippet": -1,
          "max-video-preview": -1,
        },
      }
    : { index: false, follow: false },
  openGraph: {
    type: "website",
    title: siteConfig.title,
    description: siteConfig.description,
    url: "/",
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    images: [
      {
        url: defaultSocialImage.src,
        width: defaultSocialImage.width,
        height: defaultSocialImage.height,
        alt: defaultSocialImage.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [{ url: defaultSocialImage.src, alt: defaultSocialImage.alt }],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fa"
      dir="rtl"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={vazirmatn.variable}
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
