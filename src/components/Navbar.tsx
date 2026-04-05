"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import LanguageSelector from "./LanguageSelector";
import Logo from "./Logo";

const navKeys = [
  { key: "services", href: "#services" },
  { key: "about", href: "#about" },
  { key: "process", href: "#process" },
  { key: "results", href: "#results" },
  { key: "contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#f8f7f4]/90 backdrop-blur-xl border-b border-[#e5e4e0] shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <a href="#">
              <Logo size="md" />
            </a>

            <div className="hidden md:flex items-center gap-8">
              {navKeys.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-[#6b6b6b] hover:text-[#1a1a1a] transition-colors duration-200"
                >
                  {t("nav", link.key) as string}
                </a>
              ))}
              <LanguageSelector />
              <a
                href="#contact"
                className="px-5 py-2.5 bg-[#1a1a1a] text-white text-sm font-semibold rounded-full hover:bg-[#333] transition-colors duration-200 flex items-center gap-2"
              >
                <span>&rarr;</span>
                {t("nav", "letsTalk") as string}
              </a>
            </div>

            <div className="flex items-center gap-4 md:hidden">
              <LanguageSelector />
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="flex flex-col gap-1.5 p-2"
                aria-label={t("nav", "toggleMenu") as string}
              >
                <span
                  className={`w-6 h-0.5 bg-[#1a1a1a] transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}
                />
                <span
                  className={`w-6 h-0.5 bg-[#1a1a1a] transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`}
                />
                <span
                  className={`w-6 h-0.5 bg-[#1a1a1a] transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
                />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#f8f7f4]/98 backdrop-blur-xl pt-24 px-8 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navKeys.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-2xl font-medium text-[#1a1a1a]/80 hover:text-[#00c781] transition-colors"
                >
                  {t("nav", link.key) as string}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-4 px-6 py-3 bg-[#1a1a1a] text-white font-semibold rounded-full text-center text-lg"
              >
                {t("nav", "letsTalk") as string}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
