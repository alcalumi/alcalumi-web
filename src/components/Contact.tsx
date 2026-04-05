"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-32 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-[#e5e4e0] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="text-xs text-[#999] font-mono uppercase tracking-[0.2em]">
              {t("contact", "badge") as string}
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 mb-6 text-[#1a1a1a]">
              {t("contact", "heading1") as string}
              <br />
              {t("contact", "heading2") as string}
            </h2>
            <p className="text-lg text-[#6b6b6b] mb-10 max-w-md">
              {t("contact", "description") as string}
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#f0efec] border border-[#e5e4e0] flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#00c781" strokeWidth="1.5" className="w-5 h-5">
                    <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-[#999]">
                    {t("contact", "emailLabel") as string}
                  </div>
                  <a
                    href="mailto:hello@alcalumi.com"
                    className="text-[#1a1a1a] hover:text-[#00c781] transition-colors"
                  >
                    hello@alcalumi.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#f0efec] border border-[#e5e4e0] flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#00c781" strokeWidth="1.5" className="w-5 h-5">
                    <path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-[#999]">
                    {t("contact", "locationLabel") as string}
                  </div>
                  <span className="text-[#1a1a1a]">
                    {t("contact", "location") as string}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {submitted ? (
              <div className="h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-[#00c781]/10 border border-[#00c781]/30 flex items-center justify-center mx-auto mb-6">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#00c781" strokeWidth="2" className="w-8 h-8">
                      <path d="M4.5 12.75l6 6 9-13.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-[#1a1a1a]">
                    {t("contact", "successTitle") as string}
                  </h3>
                  <p className="text-[#6b6b6b]">
                    {t("contact", "successText") as string}
                  </p>
                </div>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-6"
              >
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-[#6b6b6b] mb-2">
                      {t("contact", "nameLabel") as string}
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-white border border-[#e5e4e0] rounded-xl text-[#1a1a1a] placeholder-[#bbb] focus:outline-none focus:border-[#00c781]/50 transition-colors"
                      placeholder={t("contact", "namePlaceholder") as string}
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-[#6b6b6b] mb-2">
                      {t("contact", "emailFieldLabel") as string}
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 bg-white border border-[#e5e4e0] rounded-xl text-[#1a1a1a] placeholder-[#bbb] focus:outline-none focus:border-[#00c781]/50 transition-colors"
                      placeholder={t("contact", "emailPlaceholder") as string}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-[#6b6b6b] mb-2">
                    {t("contact", "companyLabel") as string}
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white border border-[#e5e4e0] rounded-xl text-[#1a1a1a] placeholder-[#bbb] focus:outline-none focus:border-[#00c781]/50 transition-colors"
                    placeholder={t("contact", "companyPlaceholder") as string}
                  />
                </div>

                <div>
                  <label className="block text-sm text-[#6b6b6b] mb-2">
                    {t("contact", "messageLabel") as string}
                  </label>
                  <textarea
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white border border-[#e5e4e0] rounded-xl text-[#1a1a1a] placeholder-[#bbb] focus:outline-none focus:border-[#00c781]/50 transition-colors resize-none"
                    placeholder={t("contact", "messagePlaceholder") as string}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#00c781] text-white font-semibold rounded-full text-lg hover:bg-[#00e599] transition-all duration-200 hover:shadow-[0_8px_30px_rgba(0,199,129,0.25)]"
                >
                  {t("contact", "submit") as string}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
