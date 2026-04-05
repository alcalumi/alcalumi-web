"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "Deep dive into your business, workflows, and data landscape. I identify where AI can create the most impact and assess technical readiness.",
    duration: "1-2 weeks",
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "Build a clear AI roadmap with prioritized use cases, expected ROI, technology recommendations, and a phased implementation plan.",
    duration: "2-3 weeks",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Hands-on development of AI solutions. From proof-of-concept to production-ready systems, with continuous stakeholder alignment.",
    duration: "4-12 weeks",
  },
  {
    number: "04",
    title: "Scale",
    description:
      "Deploy, monitor, and optimize. I ensure your AI solutions deliver sustained value and help your team own the technology long-term.",
    duration: "Ongoing",
  },
];

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="py-32 relative">
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
            Process
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 mb-6">
            How we work together
          </h2>
          <p className="text-lg text-[#888] max-w-2xl">
            A proven methodology that reduces risk and accelerates time to
            value.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[23px] top-0 bottom-0 w-px bg-gradient-to-b from-[#00e599]/50 via-[#333] to-transparent hidden md:block" />

          <div className="space-y-12">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
                className="flex gap-8 group"
              >
                <div className="hidden md:flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full border-2 border-[#333] bg-[#0a0a0a] flex items-center justify-center text-sm font-mono text-[#888] group-hover:border-[#00e599] group-hover:text-[#00e599] transition-all duration-300 relative z-10">
                    {step.number}
                  </div>
                </div>

                <div className="flex-1 p-8 rounded-2xl border border-[#222] bg-[#111]/30 group-hover:border-[#00e599]/20 group-hover:bg-[#111]/60 transition-all duration-500">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                    <h3 className="text-2xl font-bold group-hover:text-[#00e599] transition-colors">
                      {step.title}
                    </h3>
                    <span className="text-xs font-mono text-[#666] px-3 py-1 rounded-full border border-[#333]">
                      {step.duration}
                    </span>
                  </div>
                  <p className="text-[#888] leading-relaxed">
                    {step.description}
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
