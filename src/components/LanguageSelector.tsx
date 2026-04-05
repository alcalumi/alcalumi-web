"use client";

import { useLanguage } from "@/i18n/LanguageContext";

export default function LanguageSelector() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="flex items-center gap-1 text-sm font-mono">
      <span className="text-[#999] mr-1">
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 21a9 9 0 100-18 9 9 0 000 18z" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M3.6 9h16.8M3.6 15h16.8M12 3c2.5 2.8 3.9 6.3 3.9 9s-1.4 6.2-3.9 9c-2.5-2.8-3.9-6.3-3.9-9s1.4-6.2 3.9-9z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <button
        onClick={() => setLang("es")}
        className={`px-1.5 py-0.5 rounded transition-colors ${
          lang === "es"
            ? "text-[#1a1a1a] font-semibold"
            : "text-[#999] hover:text-[#1a1a1a]"
        }`}
      >
        es
      </button>
      <span className="text-[#ccc]">/</span>
      <button
        onClick={() => setLang("en")}
        className={`px-1.5 py-0.5 rounded transition-colors ${
          lang === "en"
            ? "text-[#1a1a1a] font-semibold"
            : "text-[#999] hover:text-[#1a1a1a]"
        }`}
      >
        en
      </button>
    </div>
  );
}
