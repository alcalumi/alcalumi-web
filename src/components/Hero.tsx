"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import HeroAnimation from "./HeroAnimation";

export default function Hero() {
  const { t } = useLanguage();

  const stats = [
    { value: t("hero", "stat1Value"), label: t("hero", "stat1Label") },
    { value: t("hero", "stat2Value"), label: t("hero", "stat2Label") },
    { value: t("hero", "stat3Value"), label: t("hero", "stat3Label") },
    { value: t("hero", "stat4Value"), label: t("hero", "stat4Label") },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <span className="text-sm text-[#6b6b6b] uppercase tracking-[0.2em] font-mono">
                Valencia, Spain
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-bold leading-[0.95] tracking-tight text-[#1a1a1a] mb-8"
            >
              {t("hero", "heading1") as string}
              <br />
              {t("hero", "heading2") as string}{" "}
              <span className="text-[#1a1a1a]">
                {t("hero", "headingHighlight") as string}.
              </span>
              <motion.span
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-block ml-2 text-[#c8c7a0] text-4xl align-top"
              >
                ✦
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg sm:text-xl text-[#6b6b6b] max-w-xl mb-10 leading-relaxed"
            >
              {t("hero", "description") as string}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-7 py-4 bg-[#00c781] text-white font-semibold rounded-full text-lg hover:bg-[#00e599] transition-all duration-200 hover:shadow-[0_8px_30px_rgba(0,199,129,0.25)]"
              >
                <span>&rarr;</span>
                {t("hero", "cta1") as string}
              </a>
            </motion.div>
          </div>

          {/* Right: Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex items-center justify-center"
          >
            <HeroAnimation />
          </motion.div>
        </div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 pt-10"
        >
          <p className="text-xs text-[#999] uppercase tracking-[0.2em] font-mono mb-8">
            {t("hero", "badge") as string}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label as string}>
                <div className="text-3xl sm:text-4xl font-bold text-[#1a1a1a] mb-1">
                  {stat.value as string}
                </div>
                <div className="text-sm text-[#999]">
                  {stat.label as string}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
