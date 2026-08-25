export const DEFAULT_SITE_ORIGIN = "http://localhost:3000";

export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  language: "fa";
  locale: "fa_IR";
  origin: string;
  url: URL;
  isDomainConfigured: boolean;
  isIndexingEnabled: boolean;
}

interface SiteEnvironment {
  SITE_URL?: string;
  SITE_INDEXING_ENABLED?: string;
}

function configuredOrigin(value: string | undefined) {
  if (!value?.trim()) return null;

  try {
    const url = new URL(value.trim());
    const isWebProtocol = url.protocol === "https:" || url.protocol === "http:";
    const isPlaceholder =
      url.hostname === "localhost" ||
      url.hostname.endsWith(".local") ||
      url.hostname.endsWith(".example");

    if (!isWebProtocol || url.username || url.password || isPlaceholder) {
      return null;
    }

    return url.origin;
  } catch {
    return null;
  }
}

export function resolveSiteConfig(environment: SiteEnvironment): SiteConfig {
  const origin = configuredOrigin(environment.SITE_URL);
  const isDomainConfigured = Boolean(origin);

  return {
    name: "کافه",
    title: "کافه — ساخته‌شده برای مکث",
    description: "تجربه‌ای آرام برای کشف منو و سفارش از یک کافهٔ مستقل.",
    language: "fa",
    locale: "fa_IR",
    origin: origin ?? DEFAULT_SITE_ORIGIN,
    url: new URL(origin ?? DEFAULT_SITE_ORIGIN),
    isDomainConfigured,
    isIndexingEnabled:
      isDomainConfigured && environment.SITE_INDEXING_ENABLED === "true",
  };
}

export const siteConfig = resolveSiteConfig({
  SITE_URL: process.env.SITE_URL,
  SITE_INDEXING_ENABLED: process.env.SITE_INDEXING_ENABLED,
});

export function absoluteSiteUrl(pathname: string, baseUrl = siteConfig.url) {
  return new URL(pathname, baseUrl).toString();
}
