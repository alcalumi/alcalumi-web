"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

const stepKeys = [
  { number: "01", titleKey: "step1Title", descKey: "step1Desc", durationKey: "step1Duration" },
  { number: "02", titleKey: "step2Title", descKey: "step2Desc", durationKey: "step2Duration" },
  { number: "03", titleKey: "step3Title", descKey: "step3Desc", durationKey: "step3Duration" },
  { number: "04", titleKey: "step4Title", descKey: "step4Desc", durationKey: "step4Duration" },
];

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  return (
    <section id="process" className="py-32 relative">
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
            {t("process", "badge") as string}
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 mb-6 text-[#1a1a1a]">
            {t("process", "heading") as string}
          </h2>
          <p className="text-lg text-[#6b6b6b] max-w-2xl">
            {t("process", "description") as string}
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-[23px] top-0 bottom-0 w-px bg-gradient-to-b from-[#00c781]/50 via-[#e5e4e0] to-transparent hidden md:block" />

          <div className="space-y-8">
            {stepKeys.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
                className="flex gap-8 group"
              >
                <div className="hidden md:flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full border-2 border-[#e5e4e0] bg-white flex items-center justify-center text-sm font-mono text-[#999] group-hover:border-[#00c781] group-hover:text-[#00c781] transition-all duration-300 relative z-10">
                    {step.number}
                  </div>
                </div>

                <div className="flex-1 p-8 rounded-2xl border border-[#e5e4e0] bg-white group-hover:border-[#00c781]/20 group-hover:shadow-md transition-all duration-500">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                    <h3 className="text-2xl font-bold text-[#1a1a1a] group-hover:text-[#00c781] transition-colors">
                      {t("process", step.titleKey) as string}
                    </h3>
                    <span className="text-xs font-mono text-[#999] px-3 py-1 rounded-full border border-[#e5e4e0] bg-[#f8f7f4]">
                      {t("process", step.durationKey) as string}
                    </span>
                  </div>
                  <p className="text-[#6b6b6b] leading-relaxed">
                    {t("process", step.descKey) as string}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
