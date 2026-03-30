"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const stages = [
  {
    phase: "01",
    label: "High-Volume Foundation",
    where: "IC Auto Nissan · 2014",
    detail: "Learned sales fundamentals under pressure. High transaction volume, tight targets, first exposure to NCA compliance on finance deals.",
    color: "#f59e0b",
  },
  {
    phase: "02",
    label: "Premium Brand Standards",
    where: "Mercedes-Benz · 2017",
    detail: "Elevated to OEM governance at the highest level. CSI scores, brand compliance, luxury client relationships. Learned that compliance is what earns trust.",
    color: "#c0c0c0",
  },
  {
    phase: "03",
    label: "Digital-First Execution",
    where: "Digi-Cars · 2020",
    detail: "Moved into digital lead conversion before most dealerships had a strategy for it. Mastered AutoTrader pipelines, credit assessment at scale, compliance in a fast-moving environment.",
    color: "#3b82f6",
  },
  {
    phase: "04",
    label: "Back to Traditional Roots",
    where: "Williams Hunt · Hyundai · 2024",
    detail: "Returned to traditional dealership sales — paper-based processes, manual workflows, old-school floor management. Reinforced the fundamentals while identifying exactly where modern systems and compliance discipline could add the most value.",
    color: "#10b981",
  },
];

export function ParallaxSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      {/* Parallax background */}
      <motion.div style={{ y }} className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-transparent" />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-cyan-500/8 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-purple-500/8 blur-3xl" />
      </motion.div>

      <motion.div style={{ opacity }} className="max-w-5xl mx-auto px-6">
        <div className="mb-16">
          <p className="text-cyan-400 text-xs tracking-[0.3em] uppercase font-medium mb-3">
            Career Progression
          </p>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-none">
            Not a timeline.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              A story of growth.
            </span>
          </h2>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-white/8 hidden md:block" />

          <div className="space-y-0">
            {stages.map((stage, i) => (
              <motion.div
                key={stage.phase}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative flex gap-8 pb-10 last:pb-0"
              >
                {/* Dot */}
                <div
                  className="relative z-10 w-10 h-10 rounded-full border-2 flex items-center justify-center shrink-0 text-xs font-black hidden md:flex"
                  style={{
                    borderColor: `${stage.color}50`,
                    backgroundColor: "transparent",
                    color: `${stage.color}80`,
                  }}
                >
                  {stage.phase}
                </div>

                {/* Content */}
                <div className="flex-1 pb-8">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="text-white font-bold text-lg">
                      {stage.label}
                    </h3>
                    <span
                      className="text-xs px-2.5 py-1 rounded-full border font-medium"
                      style={{
                        borderColor: `${stage.color}30`,
                        color: `${stage.color}90`,
                        backgroundColor: `${stage.color}10`,
                      }}
                    >
                      {stage.where}
                    </span>
                  </div>
                  <p className="text-white/40 text-sm leading-relaxed max-w-xl">
                    {stage.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
