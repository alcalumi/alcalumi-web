"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

const technologies = [
  "OpenAI",
  "Anthropic",
  "LangChain",
  "Hugging Face",
  "AWS",
  "Google Cloud",
  "Azure",
  "Python",
];

export default function TechLogos() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const { t } = useLanguage();

  return (
    <section className="py-16 border-y border-[#e5e4e0]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-center text-xs text-[#999] mb-10 uppercase tracking-[0.2em] font-mono">
            {t("techLogos", "title") as string}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {technologies.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="text-lg font-medium text-[#bbb] hover:text-[#666] transition-colors cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
