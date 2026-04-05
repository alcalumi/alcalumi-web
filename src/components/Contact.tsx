"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="py-32 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-[#333] to-transparent" />

      {/* Background orbs */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#00e599]/5 rounded-full blur-[128px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="text-sm text-[#00e599] font-mono uppercase tracking-widest">
              Contact
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 mb-6">
              Let&apos;s build
              <br />
              something great
            </h2>
            <p className="text-lg text-[#888] mb-10 max-w-md">
              Ready to explore how AI can transform your business? Tell me about
              your challenge and I&apos;ll get back to you within 24 hours.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#1a1a1a] border border-[#333] flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#00e599" strokeWidth="1.5" className="w-5 h-5">
                    <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-[#666]">Email</div>
                  <a
                    href="mailto:hello@alcalumi.com"
                    className="text-white hover:text-[#00e599] transition-colors"
                  >
                    hello@alcalumi.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#1a1a1a] border border-[#333] flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#00e599" strokeWidth="1.5" className="w-5 h-5">
                    <path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-[#666]">Location</div>
                  <span className="text-white">Valencia, Spain</span>
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
                  <div className="w-16 h-16 rounded-full bg-[#00e599]/10 border border-[#00e599]/30 flex items-center justify-center mx-auto mb-6">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#00e599" strokeWidth="2" className="w-8 h-8">
                      <path d="M4.5 12.75l6 6 9-13.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Message Sent</h3>
                  <p className="text-[#888]">
                    I&apos;ll get back to you within 24 hours.
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
                    <label className="block text-sm text-[#888] mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-[#111] border border-[#333] rounded-xl text-white placeholder-[#555] focus:outline-none focus:border-[#00e599]/50 transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-[#888] mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 bg-[#111] border border-[#333] rounded-xl text-white placeholder-[#555] focus:outline-none focus:border-[#00e599]/50 transition-colors"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-[#888] mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-[#111] border border-[#333] rounded-xl text-white placeholder-[#555] focus:outline-none focus:border-[#00e599]/50 transition-colors"
                    placeholder="Your company"
                  />
                </div>

                <div>
                  <label className="block text-sm text-[#888] mb-2">
                    How can I help?
                  </label>
                  <textarea
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-[#111] border border-[#333] rounded-xl text-white placeholder-[#555] focus:outline-none focus:border-[#00e599]/50 transition-colors resize-none"
                    placeholder="Tell me about your project or challenge..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#00e599] text-black font-semibold rounded-full text-lg hover:bg-[#00ffaa] transition-all duration-200 hover:shadow-[0_0_40px_rgba(0,229,153,0.3)]"
                >
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
