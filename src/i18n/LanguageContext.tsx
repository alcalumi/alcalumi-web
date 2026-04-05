"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import translations, { type Lang } from "./translations";

type LanguageContextType = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (section: string, key: string) => string | string[];
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("es");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("alcalumi-lang") as Lang | null;
    if (stored === "en" || stored === "es") {
      setLangState(stored);
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("alcalumi-lang", lang);
      document.documentElement.lang = lang;
    }
  }, [lang, mounted]);

  const setLang = (newLang: Lang) => {
    setLangState(newLang);
  };

  const t = (section: string, key: string): string | string[] => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const sec = (translations as any)[section];
    if (!sec) return key;
    const entry = sec[key];
    if (!entry) return key;
    const val = entry[lang];
    if (val == null) return key;
    // Convert readonly arrays to mutable
    return Array.isArray(val) ? [...val] : val;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
