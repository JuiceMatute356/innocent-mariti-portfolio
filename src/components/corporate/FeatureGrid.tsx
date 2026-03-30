"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeUpVariant, staggerContainer } from "@/lib/animationVariants";

const features = [
  {
    icon: "⚡",
    title: "Lightning Fast CI/CD",
    body: "Deploy to production in under 30 seconds. Automated pipelines that actually work.",
    color: "bg-yellow-50 border-yellow-100",
  },
  {
    icon: "🔒",
    title: "Enterprise Security",
    body: "SOC 2 Type II certified. SSO, RBAC, audit logs, and end-to-end encryption built in.",
    color: "bg-green-50 border-green-100",
  },
  {
    icon: "🤖",
    title: "AI Workflows",
    body: "Automate repetitive tasks with AI. PR summaries, test generation, and smart alerts.",
    color: "bg-purple-50 border-purple-100",
  },
  {
    icon: "📊",
    title: "Real-time Analytics",
    body: "Live dashboards for performance, error rates, and team velocity. No guesswork.",
    color: "bg-blue-50 border-blue-100",
  },
  {
    icon: "🌐",
    title: "Global Edge Network",
    body: "Deploy to 30+ regions instantly. Your users get sub-100ms response times worldwide.",
    color: "bg-cyan-50 border-cyan-100",
  },
  {
    icon: "🔗",
    title: "200+ Integrations",
    body: "GitHub, Slack, Jira, Figma, and 200+ more. Your workflow, your tools.",
    color: "bg-orange-50 border-orange-100",
  },
  {
    icon: "👥",
    title: "Team Collaboration",
    body: "Comments, reviews, and async communication built into every workflow.",
    color: "bg-pink-50 border-pink-100",
  },
  {
    icon: "🛡️",
    title: "99.99% Uptime SLA",
    body: "Enterprise SLA backed by a financial guarantee. We put our money where our mouth is.",
    color: "bg-indigo-50 border-indigo-100",
  },
  {
    icon: "🔄",
    title: "Instant Rollbacks",
    body: "One click to revert any deployment. Never be stuck in a bad release again.",
    color: "bg-teal-50 border-teal-100",
  },
];

export function FeatureGrid() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="features" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-blue-600 text-sm font-semibold tracking-wide uppercase">
            Features
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-3 mb-4 tracking-tight">
            Everything your team needs
          </h2>
          <p className="text-slate-500 text-lg">
            Built for developers, designed for teams, trusted by enterprises.
          </p>
        </div>

        {/* Grid */}
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={fadeUpVariant}
              className={`p-6 rounded-2xl border ${feature.color} hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group`}
            >
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-xl mb-4 shadow-sm group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-slate-900 mb-2 text-base">
                {feature.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {feature.body}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
