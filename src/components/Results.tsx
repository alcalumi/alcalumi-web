"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const caseStudies = [
  {
    category: "Retail",
    title: "AI-Powered Customer Intelligence",
    description:
      "Built a machine learning pipeline that analyzes customer behavior patterns, enabling personalized recommendations that increased conversion by 35%.",
    metrics: [
      { value: "+35%", label: "Conversion Rate" },
      { value: "2.1x", label: "Engagement" },
    ],
  },
  {
    category: "Telecom",
    title: "Intelligent Process Automation",
    description:
      "Designed and deployed an AI-driven automation system that reduced manual processing time by 60% while improving accuracy across operations.",
    metrics: [
      { value: "-60%", label: "Processing Time" },
      { value: "99.2%", label: "Accuracy" },
    ],
  },
  {
    category: "Finance",
    title: "Predictive Analytics Platform",
    description:
      "Created a predictive analytics solution that forecasts market trends with high accuracy, enabling data-driven investment decisions.",
    metrics: [
      { value: "3.2x", label: "ROI" },
      { value: "+40%", label: "Forecast Accuracy" },
    ],
  },
];

export default function Results() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="results" className="py-32 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-[#333] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-sm text-[#00e599] font-mono uppercase tracking-widest">
            Results
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 mb-6">
            Impact that matters
          </h2>
          <p className="text-lg text-[#888] max-w-2xl">
            Real outcomes from real projects. Every engagement is measured by the
            business value it creates.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {caseStudies.map((study, i) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.15 }}
              className="group relative p-8 rounded-2xl border border-[#222] bg-[#111]/30 hover:border-[#00e599]/20 transition-all duration-500 flex flex-col"
            >
              <span className="text-xs font-mono text-[#00e599] uppercase tracking-widest mb-4">
                {study.category}
              </span>
              <h3 className="text-xl font-bold mb-4 group-hover:text-[#00e599] transition-colors">
                {study.title}
              </h3>
              <p className="text-sm text-[#888] leading-relaxed mb-8 flex-1">
                {study.description}
              </p>

              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-[#222]">
                {study.metrics.map((m) => (
                  <div key={m.label}>
                    <div className="text-2xl font-bold text-[#00e599]">
                      {m.value}
                    </div>
                    <div className="text-xs text-[#666] mt-1">{m.label}</div>
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
