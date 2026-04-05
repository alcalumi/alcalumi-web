"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#00e599]/10 rounded-full blur-[128px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#00e599]/5 rounded-full blur-[128px]" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-2 h-2 rounded-full bg-[#00e599] animate-pulse" />
            <span className="text-sm text-[#888] uppercase tracking-widest font-mono">
              AI Consulting
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-8xl font-bold leading-[0.95] tracking-tight mb-8"
          >
            Transform your
            <br />
            business with{" "}
            <span className="bg-gradient-to-r from-[#00e599] to-[#00ffcc] bg-clip-text text-transparent">
              AI
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg sm:text-xl text-[#888] max-w-2xl mb-12 leading-relaxed"
          >
            I help companies design, implement, and scale AI solutions that
            deliver real results. From strategy to execution, with a
            founder&apos;s mindset and hands-on expertise.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#contact"
              className="group px-8 py-4 bg-[#00e599] text-black font-semibold rounded-full text-lg hover:bg-[#00ffaa] transition-all duration-200 hover:shadow-[0_0_40px_rgba(0,229,153,0.3)]"
            >
              Start a Project
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
                &rarr;
              </span>
            </a>
            <a
              href="#services"
              className="px-8 py-4 border border-[#333] text-white font-medium rounded-full text-lg hover:border-[#555] hover:bg-white/5 transition-all duration-200"
            >
              Explore Services
            </a>
          </motion.div>
        </div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-[#222] pt-12"
        >
          {[
            { value: "10+", label: "Years in Tech" },
            { value: "50+", label: "AI Projects Delivered" },
            { value: "3x", label: "Avg. ROI for Clients" },
            { value: "100%", label: "Hands-on Approach" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-[#666]">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
