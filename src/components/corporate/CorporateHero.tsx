"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUpVariant } from "@/lib/animationVariants";

export function CorporateHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/50 to-white pt-24 pb-32">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-60" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-indigo-100 rounded-full blur-3xl opacity-40" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div variants={fadeUpVariant} className="mb-8 inline-flex">
            <span className="bg-blue-50 text-blue-700 text-xs font-semibold px-4 py-1.5 rounded-full border border-blue-100 inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 inline-block" />
              New: AI-powered workflows now available
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUpVariant}
            className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight mb-6 leading-[1.08]"
          >
            Ship faster,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">
              together
            </span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            variants={fadeUpVariant}
            className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed mb-10"
          >
            Nexus gives your team the tools, automation, and visibility to move
            from idea to production in record time. No more context-switching.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUpVariant}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
          >
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-6 py-3.5 rounded-xl hover:bg-blue-700 transition-colors text-base shadow-lg shadow-blue-500/25"
            >
              Start for free
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
              href="#features"
              className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 font-semibold px-6 py-3.5 rounded-xl border border-slate-200 hover:border-slate-300 transition-all text-base"
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
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Watch demo
            </a>
          </motion.div>

          {/* Social proof */}
          <motion.div
            variants={fadeUpVariant}
            className="flex items-center justify-center gap-3 text-sm text-slate-500"
          >
            <div className="flex -space-x-2">
              {["🧑‍💻", "👩‍💼", "👨‍🎨", "👩‍🔬"].map((emoji, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 border-2 border-white flex items-center justify-center text-sm"
                >
                  {emoji}
                </div>
              ))}
            </div>
            <div>
              <span className="font-semibold text-slate-700">10,000+</span>{" "}
              teams shipping faster
            </div>
          </motion.div>
        </motion.div>

        {/* Dashboard preview */}
        <motion.div
          initial={{ opacity: 0, y: 48 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 relative max-w-5xl mx-auto"
        >
          <div className="rounded-2xl border border-slate-200 shadow-2xl shadow-slate-200/60 overflow-hidden bg-white">
            <div className="bg-slate-50 border-b border-slate-200 px-4 py-3 flex items-center gap-2">
              <div className="flex gap-1.5">
                {["bg-red-400", "bg-yellow-400", "bg-green-400"].map((c) => (
                  <div key={c} className={`w-3 h-3 rounded-full ${c}`} />
                ))}
              </div>
              <div className="flex-1 bg-white rounded border border-slate-200 mx-8 py-1 px-3 text-xs text-slate-400 text-center">
                app.nexus.io/dashboard
              </div>
            </div>
            <div className="aspect-video bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
              <div className="grid grid-cols-3 gap-4 p-8 w-full max-w-2xl">
                {[
                  { label: "Active Projects", value: "24", color: "blue" },
                  { label: "Team Members", value: "87", color: "indigo" },
                  { label: "Deployments", value: "1.2k", color: "violet" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className={`bg-white rounded-xl p-4 border border-${stat.color}-100 shadow-sm`}
                  >
                    <p className="text-xs text-slate-500 mb-1">{stat.label}</p>
                    <p
                      className={`text-3xl font-bold text-${stat.color}-600`}
                    >
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
