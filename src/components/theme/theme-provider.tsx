"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";

export type ThemePreference = "system" | "light" | "dark";
type ResolvedTheme = Exclude<ThemePreference, "system">;

interface ThemeContextValue {
  preference: ThemePreference;
  resolvedTheme: ResolvedTheme;
  toggleTheme: () => void;
}

export const THEME_STORAGE_KEY = "cafe-theme";
const ThemeContext = createContext<ThemeContextValue | null>(null);

const isThemePreference = (value: string | null): value is ThemePreference =>
  value === "system" || value === "light" || value === "dark";

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [preference, setPreference] = useState<ThemePreference>("system");
  const [systemTheme, setSystemTheme] = useState<ResolvedTheme>("light");
  const [isHydrated, setIsHydrated] = useState(false);
  const hasUserPreferenceChange = useRef(false);
  const resolvedTheme = preference === "system" ? systemTheme : preference;

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const hydrationFrame = window.requestAnimationFrame(() => {
      const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
      if (!hasUserPreferenceChange.current) {
        setPreference(isThemePreference(stored) ? stored : "system");
      }
      setSystemTheme(media.matches ? "dark" : "light");
      setIsHydrated(true);
    });
    const onSystemThemeChange = (event: MediaQueryListEvent) =>
      setSystemTheme(event.matches ? "dark" : "light");
    media.addEventListener("change", onSystemThemeChange);
    return () => {
      window.cancelAnimationFrame(hydrationFrame);
      media.removeEventListener("change", onSystemThemeChange);
    };
  }, []);

  useEffect(() => {
    if (!isHydrated) return;
    document.documentElement.dataset.theme = resolvedTheme;
    document.documentElement.style.colorScheme = resolvedTheme;
    window.localStorage.setItem(THEME_STORAGE_KEY, preference);
  }, [isHydrated, preference, resolvedTheme]);

  const toggleTheme = useCallback(() => {
    hasUserPreferenceChange.current = true;
    setPreference((current) => {
      const currentResolved = current === "system" ? systemTheme : current;
      return currentResolved === "dark" ? "light" : "dark";
    });
  }, [systemTheme]);

  const value = useMemo(
    () => ({ preference, resolvedTheme, toggleTheme }),
    [preference, resolvedTheme, toggleTheme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
}
