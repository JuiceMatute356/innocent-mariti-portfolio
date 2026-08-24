"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUpVariant } from "@/lib/animationVariants";

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pt-16">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          {/* Eyebrow */}
          <motion.p
            variants={fadeUpVariant}
            className="text-[#f59e0b] text-xs tracking-[0.3em] uppercase font-medium"
          >
            AI Automation Engineer
          </motion.p>

          {/* Main headline */}
          <motion.h1
            variants={fadeUpVariant}
            className="text-6xl md:text-[9rem] font-black leading-none tracking-tighter text-[#f5f0e8]"
          >
            Innocent
            <br />
            <span className="text-[#f5f0e8]/20">Mariti</span>
          </motion.h1>

          {/* Descriptor */}
          <motion.p
            variants={fadeUpVariant}
            className="text-[#f5f0e8]/50 text-xl max-w-xl leading-relaxed"
          >
            I build and run{" "}
            <em className="text-[#f59e0b] not-italic">production AI systems</em>
            . Self-hosted n8n, Claude, and webhook infrastructure, on real
            uptime, not a demo.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUpVariant}
            className="flex flex-wrap gap-4 pt-4"
          >
            <a
              href="#work"
              className="inline-flex items-center gap-2 bg-[#f59e0b] text-[#1a1a1a] font-semibold px-6 py-3 rounded-full hover:bg-[#d97706] transition-colors"
            >
              View Experience
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
            <a
              href="/Innocent_Mariti_CV_AI_Automation_Engineer.pdf"
              download
              className="inline-flex items-center gap-2 text-[#f5f0e8]/60 hover:text-[#f5f0e8] font-medium px-6 py-3 border border-white/10 rounded-full hover:border-white/30 transition-all"
            >
              Download CV
            </a>
          </motion.div>

          {/* Key stats */}
          <motion.div
            variants={fadeUpVariant}
            className="flex flex-wrap gap-8 pt-6 border-t border-white/5"
          >
            {[
              { n: "12", label: "Active Workflows" },
              { n: "489", label: "Node Flagship Bot" },
              { n: "99.96%", label: "7-Day Success Rate" },
              { n: "128d", label: "Uptime" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-black text-[#f59e0b]">
                  {stat.n}
                </div>
                <div className="text-xs text-[#f5f0e8]/30 mt-0.5">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-16 flex items-center gap-3 text-[#f5f0e8]/20"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </motion.div>
          <span className="text-xs tracking-widest uppercase">
            Scroll to explore
          </span>
        </motion.div>
      </div>
    </section>
  );
}
