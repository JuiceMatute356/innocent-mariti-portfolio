"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeUpVariant, staggerContainer } from "@/lib/animationVariants";

const projects = [
  {
    id: 1,
    title: "Mercedes-Benz Premium Sales Excellence",
    description:
      "3 years selling pre-owned luxury vehicles to a premium retail base. Consistently met monthly unit & CSI targets under strict OEM governance and Mercedes-Benz brand standards.",
    tags: ["OEM Compliance", "CSI Management", "F&I", "Premium Sales"],
    year: "2017-2020",
    emoji: "🚗",
    color: "#f59e0b",
    highlight: "Exceeded CSI targets, every quarter",
  },
  {
    id: 2,
    title: "Lerato AI Voice Receptionist",
    description:
      "Built a live AI receptionist using n8n and ElevenLabs. Handles inbound calls, transcribes conversations, extracts caller details, logs to Google Sheets, and fires Telegram alerts in real time.",
    tags: ["n8n", "ElevenLabs", "Google Sheets", "Telegram Bot", "Automation"],
    year: "2025",
    emoji: "🤖",
    color: "#00f5ff",
    highlight: "Zero human input from script to post",
  },
  {
    id: 3,
    title: "Hyundai Motor Company Compliance-First Sales",
    description:
      "Current role. Managing full deal lifecycle from enquiry to delivery with strict adherence to NCA, POPIA, and OEM governance. Maintaining audit-ready documentation on every transaction.",
    tags: ["NCA Compliance", "POPIA", "Audit Readiness", "Deal Structuring"],
    year: "2025-Present",
    emoji: "📋",
    color: "#10b981",
    highlight: "100% audit-ready deal files",
  },
  {
    id: 4,
    title: "Digi-Cars Digital-First Sales Platform",
    description:
      "Led digital lead conversion on AutoTrader & Cars.co.za. Assessed customer credit profiles to structure compliant finance deals and reduce regulatory exposure on a tech-forward platform.",
    tags: ["Digital Sales", "Credit Assessment", "AutoTrader", "Risk Mitigation"],
    year: "2020-2022",
    emoji: "💻",
    color: "#8b5cf6",
    highlight: "Digital lead-to-sale pipeline mastery",
  },
  {
    id: 5,
    title: "NCA & POPIA Compliance in Daily Practice",
    description:
      "12 years of hands-on application: structuring finance deals within NCA frameworks, managing customer data under POPIA, maintaining audit-trail documentation, and operating under OEM governance standards.",
    tags: ["NCA", "POPIA", "OEM Governance", "Regulatory Compliance"],
    year: "2013-Present",
    emoji: "🛡️",
    color: "#ef4444",
    highlight: "Zero compliance incidents across career",
  },
  {
    id: 6,
    title: "Job Application Automation AI Pipeline",
    description:
      "Built a personal job search automation system using n8n, Python, Redis, Gmail, and Google Docs. Tracks applications, generates tailored cover letters, and notifies via Telegram in real time.",
    tags: ["n8n", "Python", "Redis", "Gmail API", "Google Docs"],
    year: "2025",
    emoji: "⚡",
    color: "#f59e0b",
    highlight: "Fully automated job tracking system",
  },
];

export function ProjectGrid() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="work" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="flex items-end justify-between mb-16">
          <div>
            <p className="text-[#f59e0b] text-xs tracking-[0.3em] uppercase font-medium mb-3">
              Experience & Projects
            </p>
            <h2 className="text-5xl font-black text-[#f5f0e8] tracking-tight">
              The Work
            </h2>
          </div>
          <span className="text-[#f5f0e8]/20 text-sm hidden md:block">
            12 Years · 5 Dealerships
          </span>
        </div>

        {/* Grid */}
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {projects.map((project) => (
            <motion.article
              key={project.id}
              variants={fadeUpVariant}
              className="group cursor-pointer"
            >
              {/* Visual card */}
              <div
                className="relative overflow-hidden rounded-xl mb-4 aspect-video flex items-center justify-center"
                style={{ backgroundColor: `${project.color}10`, border: `1px solid ${project.color}20` }}
              >
                <span className="text-7xl">{project.emoji}</span>

                {/* Highlight badge */}
                <div
                  className="absolute bottom-3 left-3 right-3 rounded-lg px-3 py-2 text-xs font-medium"
                  style={{ backgroundColor: `${project.color}20`, color: project.color, border: `1px solid ${project.color}30` }}
                >
                  ✓ {project.highlight}
                </div>
              </div>

              {/* Meta */}
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3
                    className="text-[#f5f0e8] font-semibold text-lg leading-tight mb-1 transition-colors"
                    style={{ ["--hover-color" as string]: project.color }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-[#f5f0e8]/40 text-sm leading-relaxed max-w-xs">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-[#f5f0e8]/30 border border-[#f5f0e8]/10 px-2.5 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="text-[#f5f0e8]/20 text-xs shrink-0 mt-1 ml-4">
                  {project.year}
                </span>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
