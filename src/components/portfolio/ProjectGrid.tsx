"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeUpVariant, staggerContainer } from "@/lib/animationVariants";

const projects = [
  {
    id: 1,
    title: "Mercedes-Benz Premium Sales Excellence",
    description:
      "Premium customer base, monthly volume and CSI targets under OEM brand standards.",
    tags: ["OEM Compliance", "CSI Management", "F&I", "Premium Sales"],
    year: "2017-2020",
    emoji: "🚗",
    color: "#f59e0b",
    highlight: "Three years on the Mercedes-Benz floor",
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
    highlight: "Live AI receptionist built on n8n",
  },
  {
    id: 3,
    title: "Hyundai Motor Company: Sales and Team Leadership",
    description:
      "Second in charge of a team of nine sales people. Averaged 8 units a month against a 6-unit target, converted 90% of deals to finance under NCA and F&I requirements, and ran daily, weekly and monthly reporting on finance applications against conversion.",
    tags: ["Team Leadership", "NCA Compliance", "F&I", "Coaching"],
    year: "2025-2026",
    emoji: "📋",
    color: "#10b981",
    highlight: "133% of target, 3rd of 9 on the floor",
  },
  {
    id: 4,
    title: "Digi-Cars Digital-First Sales Platform",
    description:
      "End-to-end sales on a digital-first platform, working leads from AutoTrader and Cars.co.za.",
    tags: ["Digital Sales", "AutoTrader", "Cars.co.za", "Lead Conversion"],
    year: "2020-2022",
    emoji: "💻",
    color: "#8b5cf6",
    highlight: "Digital leads, enquiry to delivery",
  },
  {
    id: 5,
    title: "NCA & POPIA Compliance in Daily Practice",
    description:
      "Twelve years of hands-on application: structuring finance deals within NCA frameworks, assessing credit risk, handling customer records with POPIA in mind, and operating under OEM standards. NCA accredited.",
    tags: ["NCA", "POPIA", "OEM Standards", "Credit Assessment"],
    year: "2014-2026",
    emoji: "🛡️",
    color: "#ef4444",
    highlight: "NCA accredited, finance deals structured through Signio and Seriti",
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
