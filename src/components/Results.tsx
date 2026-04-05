"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

const caseStudyKeys = [
  {
    categoryKey: "cs1Category",
    titleKey: "cs1Title",
    descKey: "cs1Desc",
    metrics: [
      { value: "+35%", labelKey: "cs1M1Label" },
      { value: "2.1x", labelKey: "cs1M2Label" },
    ],
  },
  {
    categoryKey: "cs2Category",
    titleKey: "cs2Title",
    descKey: "cs2Desc",
    metrics: [
      { value: "-60%", labelKey: "cs2M1Label" },
      { value: "99.2%", labelKey: "cs2M2Label" },
    ],
  },
  {
    categoryKey: "cs3Category",
    titleKey: "cs3Title",
    descKey: "cs3Desc",
    metrics: [
      { value: "3.2x", labelKey: "cs3M1Label" },
      { value: "+40%", labelKey: "cs3M2Label" },
    ],
  },
];

export default function Results() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  return (
    <section id="results" className="py-32 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-[#e5e4e0] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-xs text-[#999] font-mono uppercase tracking-[0.2em]">
            {t("results", "badge") as string}
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 mb-6 text-[#1a1a1a]">
            {t("results", "heading") as string}
          </h2>
          <p className="text-lg text-[#6b6b6b] max-w-2xl">
            {t("results", "description") as string}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {caseStudyKeys.map((study, i) => (
            <motion.div
              key={study.titleKey}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.15 }}
              className="group relative p-8 rounded-2xl border border-[#e5e4e0] bg-white hover:border-[#00c781]/20 hover:shadow-lg transition-all duration-500 flex flex-col"
            >
              <span className="text-xs font-mono text-[#00c781] uppercase tracking-widest mb-4">
                {t("results", study.categoryKey) as string}
              </span>
              <h3 className="text-xl font-bold mb-4 text-[#1a1a1a] group-hover:text-[#00c781] transition-colors">
                {t("results", study.titleKey) as string}
              </h3>
              <p className="text-sm text-[#6b6b6b] leading-relaxed mb-8 flex-1">
                {t("results", study.descKey) as string}
              </p>

              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-[#e5e4e0]">
                {study.metrics.map((m) => (
                  <div key={m.labelKey}>
                    <div className="text-2xl font-bold text-[#00c781]">
                      {m.value}
                    </div>
                    <div className="text-xs text-[#999] mt-1">
                      {t("results", m.labelKey) as string}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
