"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

const serviceIcons = [
  <svg key="1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6"><path d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" strokeLinecap="round" strokeLinejoin="round" /></svg>,
  <svg key="2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6"><path d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" strokeLinecap="round" strokeLinejoin="round" /></svg>,
  <svg key="3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6"><path d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>,
  <svg key="4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6"><path d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" strokeLinecap="round" strokeLinejoin="round" /></svg>,
];

const serviceKeys = [
  { number: "01", titleKey: "s1Title", descKey: "s1Desc", tagsKey: "s1Tags" },
  { number: "02", titleKey: "s2Title", descKey: "s2Desc", tagsKey: "s2Tags" },
  { number: "03", titleKey: "s3Title", descKey: "s3Desc", tagsKey: "s3Tags" },
  { number: "04", titleKey: "s4Title", descKey: "s4Desc", tagsKey: "s4Tags" },
];

function ServiceCard({
  index,
  number,
  titleKey,
  descKey,
  tagsKey,
}: {
  index: number;
  number: string;
  titleKey: string;
  descKey: string;
  tagsKey: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative p-8 lg:p-10 rounded-2xl border border-[#e5e4e0] bg-white hover:border-[#00c781]/30 hover:shadow-lg transition-all duration-500"
    >
      <div className="relative">
        <div className="flex items-center justify-between mb-6">
          <span className="text-[#00c781] font-mono text-sm">{number}</span>
          <div className="w-10 h-10 rounded-xl bg-[#f8f7f4] border border-[#e5e4e0] flex items-center justify-center text-[#999] group-hover:text-[#00c781] group-hover:border-[#00c781]/30 transition-all duration-300">
            {serviceIcons[index]}
          </div>
        </div>
        <h3 className="text-2xl font-bold mb-4 text-[#1a1a1a] group-hover:text-[#00c781] transition-colors duration-300">
          {t("services", titleKey) as string}
        </h3>
        <p className="text-[#6b6b6b] leading-relaxed mb-6">
          {t("services", descKey) as string}
        </p>
        <div className="flex flex-wrap gap-2">
          {(t("services", tagsKey) as string[]).map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-mono text-[#999] bg-[#f8f7f4] rounded-full border border-[#e5e4e0]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const headerRef = useRef(null);
  const isInView = useInView(headerRef, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  return (
    <section id="services" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-xs text-[#999] font-mono uppercase tracking-[0.2em]">
            {t("services", "badge") as string}
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 mb-6 text-[#1a1a1a]">
            {t("services", "heading") as string}
          </h2>
          <p className="text-lg text-[#6b6b6b] max-w-2xl">
            {t("services", "description") as string}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {serviceKeys.map((sk, i) => (
            <ServiceCard
              key={sk.number}
              index={i}
              number={sk.number}
              titleKey={sk.titleKey}
              descKey={sk.descKey}
              tagsKey={sk.tagsKey}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
