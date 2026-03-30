"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { motion } from "framer-motion";
import { Card3D } from "@/components/interactive/Card3D";
import { Modal } from "@/components/interactive/Modal";
import { AnimatedCounter } from "@/components/interactive/AnimatedCounter";
import { ParallaxSection } from "@/components/interactive/ParallaxSection";
import { staggerContainer, fadeUpVariant } from "@/lib/animationVariants";
import { PhotoAvatar } from "@/components/interactive/PhotoAvatar";

const ParticleCanvas = dynamic(
  () =>
    import("@/components/interactive/ParticleCanvas").then(
      (m) => m.ParticleCanvas
    ),
  { ssr: false }
);

const cards = [
  {
    id: "compliance",
    title: "NCA & POPIA Compliance",
    description: "12 years. Five dealerships. Zero compliance incidents.",
    category: "Compliance",
    icon: "🛡️",
    color: "#00f5ff",
    caseStudy: {
      problem: { title: "Compliance Risk on Every Deal", detail: "Each finance deal carried regulatory exposure: incorrect documentation, POPIA breaches, or NCA violations could result in audits, fines, or deal reversals." },
      solution: { title: "Systematic Compliance on Every Transaction", detail: "Implemented a personal checklist system: credit assessments, accurate deal files, POPIA-compliant data handling, and OEM governance sign-off on every single deal across 12 years." },
      result: { title: "Zero Compliance Incidents", detail: "Not one audit failure, regulatory breach, or compliance incident across 12+ years and five major dealerships including Mercedes-Benz and Hyundai." },
      metric: { value: 0, suffix: "", label: "Compliance Incidents in 12 Years" },
      stack: ["NCA Framework", "POPIA", "OEM Governance", "F&I Compliance", "Audit Documentation"],
    },
  },
  {
    id: "automation",
    title: "Lerato AI Voice Receptionist",
    description: "Live AI system that answers calls, transcribes, logs leads, and fires Telegram alerts. Built with n8n and ElevenLabs.",
    category: "Automation",
    icon: "🤖",
    color: "#b100ff",
    caseStudy: {
      problem: { title: "Missed Calls = Lost Leads", detail: "Inbound calls going unanswered after hours meant lost prospects, zero follow-up data, and no way to track who called or why." },
      solution: { title: "Built an AI Receptionist from Scratch", detail: "Designed and deployed Lerato using n8n + ElevenLabs. It answers calls live, holds a conversation, extracts the caller's name and number from the transcript, logs everything to Google Sheets, and fires a Telegram alert instantly." },
      result: { title: "24/7 Lead Capture, Zero Missed Calls", detail: "Every inbound call is now answered, transcribed, and logged automatically. Leads captured around the clock with full audit trail, no human involvement required." },
      metric: { value: 24, suffix: "/7", label: "Availability: Every Call Answered" },
      stack: ["n8n", "ElevenLabs", "Google Sheets", "Telegram API", "JavaScript"],
    },
  },
  {
    id: "mercedes",
    title: "Mercedes-Benz Excellence",
    description: "3 consecutive years meeting unit and CSI targets under full OEM governance. Zero deal reversals.",
    category: "Sales Excellence",
    icon: "⭐",
    color: "#00ff88",
    caseStudy: {
      problem: { title: "Premium Brand Standards + Volume Targets", detail: "Mercedes-Benz demands top CSI scores, full OEM compliance, and gross profit targets, simultaneously. Most sales execs sacrifice one for another." },
      solution: { title: "Compliance-First Sales Process", detail: "Built every deal around the F&I compliance framework first, then customer relationship second. Documentation accuracy meant zero deal reversals. CSI scores stayed high because clients trusted the process." },
      result: { title: "Consistent Target Achievement Every Quarter", detail: "Met or exceeded monthly unit targets and CSI scores every quarter across 3 years. Zero OEM governance violations. Strong referral and repeat client base built through trust." },
      metric: { value: 3, suffix: " yrs", label: "Consecutive Years Hitting Targets" },
      stack: ["Mercedes-Benz OEM Standards", "F&I Compliance", "NCA", "CSI Management", "CRM"],
    },
  },
  {
    id: "digital",
    title: "Digital Lead Management",
    description: "AutoTrader and Cars.co.za leads converted into fully documented, NCA-compliant finance deals at scale.",
    category: "Digital Sales",
    icon: "💻",
    color: "#ff6b35",
    caseStudy: {
      problem: { title: "High Lead Volume, Low Structure", detail: "Digital platforms like AutoTrader generate hundreds of enquiries. Without a structured process, leads fall through, compliance gets skipped, and conversion rates suffer." },
      solution: { title: "Digital-First Sales Pipeline", detail: "Built a structured pipeline: enquiry received, credit profile assessed, finance deal structured within NCA, documentation completed, delivery. Every step tracked, every file audit-ready." },
      result: { title: "High Conversion with Full Compliance", detail: "Maintained consistent conversion rates from digital leads to completed deals while keeping every transaction fully compliant with NCA and internal governance, on a digital-first platform before most dealerships had one." },
      metric: { value: 100, suffix: "%", label: "Deal Files Audit-Ready" },
      stack: ["AutoTrader", "Cars.co.za", "Credit Assessment", "NCA Compliance", "CRM Systems"],
    },
  },
  {
    id: "jobautomation",
    title: "Job Search Automation",
    description: "End-to-end pipeline: n8n + Python generates tailored cover letters, Redis tracks state, Gmail sends, Telegram notifies.",
    category: "Engineering",
    icon: "⚡",
    color: "#ffd700",
    caseStudy: {
      problem: { title: "Job Hunting is Manual and Slow", detail: "Tracking applications across multiple platforms, writing tailored cover letters for each role, and following up consistently is a full-time job in itself." },
      solution: { title: "Built an Automated Job Application System", detail: "Designed a full pipeline: n8n orchestrates the workflow, Python generates tailored cover letters using job description data, Redis tracks application state, Gmail API sends applications, and Google Docs stores everything. Telegram delivers real-time status updates." },
      result: { title: "Fully Automated Job Search Running Right Now", detail: "This system is live and running behind my current job search. Every application is tracked, every cover letter is tailored, and I get notified the moment something needs attention." },
      metric: { value: 5, suffix: " tools", label: "Integrated into One Pipeline" },
      stack: ["n8n", "Python", "Redis", "Gmail API", "Google Docs", "Telegram"],
    },
  },
  {
    id: "hyundai",
    title: "Hyundai Midrand All Channels",
    description: "144-node n8n workflow automating every customer touchpoint: WhatsApp bot, AI lead classification, follow-ups, reminders, and daily reporting.",
    category: "Dealership Automation",
    icon: "🎯",
    color: "#ff4fd8",
    caseStudy: {
      problem: { title: "Traditional Dealership, Zero Digital Infrastructure", detail: "Hyundai Midrand ran on paper-based processes. WhatsApp leads went unanswered after hours, follow-ups were manual and inconsistent, management had no real-time visibility on leads or bookings." },
      solution: { title: "Built a 144-Node Automation System from Scratch", detail: "Designed and deployed a full n8n workflow: WhatsApp + Telegram bot handling all inbound inquiries, AI classifying used car, new car, service, and complaints automatically, live stock matching with AI-drafted responses, hot lead alerts, test drive booking, automated follow-up sequences every 2 hours via Redis, appointment reminders (day-before and same-day), competitor detection, and daily 7am + weekly Monday reports to management." },
      result: { title: "Every Lead Captured, Every Channel Automated", detail: "Zero missed leads. Hot leads escalated in real time. Management receives daily reports without lifting a finger. Follow-ups run automatically. The entire customer journey from first WhatsApp message to post-visit rating is handled by the system." },
      metric: { value: 144, suffix: " nodes", label: "Fully Automated Customer Journey" },
      stack: ["n8n", "WhatsApp API", "Telegram API", "Redis", "Google Sheets", "OpenAI", "JavaScript"],
    },
  },
];

const testimonials = [
  {
    quote: "Innocent is one of the most process-driven sales executives I have worked with. His deal files were always clean, compliance was never an issue, and he consistently delivered results under pressure.",
    name: "Manie du Toit",
    role: "Used Cars Sales Manager · Hyundai Midrand",
    contact: "082 707 4363",
    initials: "MD",
    color: "#00f5ff",
  },
  {
    quote: "Working with Innocent on finance and insurance, every deal was structured correctly from the start. Documentation was audit-ready, NCA compliance was tight, and he never cut corners.",
    name: "Kristen Van der Linde",
    role: "Business Finance & Insurance Manager · Hyundai Midrand",
    contact: "076 297 8917",
    initials: "KV",
    color: "#00ff88",
  },
];

interface ModalState {
  isOpen: boolean;
  cardId: string | null;
}

export default function InteractivePage() {
  const [modal, setModal] = useState<ModalState>({
    isOpen: false,
    cardId: null,
  });

  const activeCard = cards.find((c) => c.id === modal.cardId);

  const openModal = (id: string) => setModal({ isOpen: true, cardId: id });
  const closeModal = () => setModal({ isOpen: false, cardId: null });

  return (
    <>
      <ParticleCanvas />

      {/* Nav */}
      <nav className="relative z-10 max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="/interactive"
          className="font-black text-xl text-white tracking-tight"
        >
          IM<span className="text-cyan-400">.</span>
        </a>
        <div className="hidden md:flex items-center gap-6">
          {[
            { label: "Expertise", href: "#expertise" },
            { label: "Impact", href: "#stats" },
            { label: "References", href: "#references" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-white/40 hover:text-white text-sm transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <a
            href="https://www.linkedin.com/in/innocent-mariti-27a4b552"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/40 hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a
            href="https://wa.me/27735672508"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/40 hover:text-green-400 transition-colors"
            aria-label="WhatsApp"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </a>
          <a
            href="/Innocent_Mariti_CV.pdf"
            download
            className="text-sm font-semibold px-4 py-2 rounded-lg border border-white/15 text-white/60 hover:text-white hover:border-white/30 transition-all"
          >
            Download CV
          </a>
          <a
            href="mailto:innocentmariti@gmail.com"
            className="text-sm font-semibold px-4 py-2 rounded-lg border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 transition-colors"
          >
            Hire me
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative z-10 min-h-screen flex items-center px-6 pt-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left: text */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.p
                variants={fadeUpVariant}
                className="text-cyan-400 text-xs tracking-[0.4em] uppercase font-medium mb-6"
              >
                Sales Leader · Risk & Compliance · Automation Builder
              </motion.p>

              <motion.h1
                variants={fadeUpVariant}
                className="text-5xl md:text-7xl font-black leading-none tracking-tighter text-white mb-6"
              >
                Innocent
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Mariti
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUpVariant}
                className="text-white/40 text-lg max-w-lg leading-relaxed mb-10"
              >
                12+ years in compliance-heavy automotive sales across
                Mercedes-Benz, Hyundai, Digi-Cars, and Williams Hunt. I combine
                sales execution, compliance discipline, and automation to increase
                revenue without increasing risk.
              </motion.p>

              <motion.div
                variants={fadeUpVariant}
                className="flex flex-wrap gap-4"
              >
                <a
                  href="#expertise"
                  className="inline-flex items-center gap-2 bg-cyan-400 text-black font-bold px-6 py-3.5 rounded-full hover:bg-cyan-300 transition-colors"
                >
                  Explore my expertise
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
                </a>
                <a
                  href="mailto:innocentmariti@gmail.com"
                  className="inline-flex items-center gap-2 text-white/60 hover:text-white font-medium px-6 py-3.5 border border-white/10 rounded-full hover:border-white/30 transition-all"
                >
                  Get in touch
                </a>
              </motion.div>

              {/* Quick stats row */}
              <motion.div
                variants={fadeUpVariant}
                className="flex gap-8 mt-10 pt-8 border-t border-white/5"
              >
                {[
                  { n: "12+", label: "Years" },
                  { n: "5", label: "Dealerships" },
                  { n: "0", label: "Incidents" },
                ].map((s) => (
                  <div key={s.label}>
                    <div className="text-2xl font-black text-cyan-400">
                      {s.n}
                    </div>
                    <div className="text-xs text-white/30 mt-0.5">
                      {s.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right: animated photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex justify-center md:justify-end"
            >
              <PhotoAvatar />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3D Expertise Cards */}
      <section id="expertise" className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-cyan-400 text-xs tracking-[0.3em] uppercase font-medium mb-3">
              Core Expertise
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
              Click any card to go deeper
            </h2>
            <p className="text-white/30 mt-3 text-sm">
              Each card opens a full case study with real outcomes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {cards.map((card) => (
              <Card3D
                key={card.id}
                title={card.title}
                description={card.description}
                category={card.category}
                color={card.color}
                onOpenModal={() => openModal(card.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Journey parallax */}
      <div id="journey">
        <ParallaxSection />
      </div>

      {/* Stats */}
      <section
        id="stats"
        className="relative z-10 py-24 px-6 border-t border-white/5"
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-cyan-400 text-xs tracking-[0.3em] uppercase font-medium mb-3">
              By the Numbers
            </p>
            <h2 className="text-4xl font-black text-white tracking-tight">
              The impact
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            <AnimatedCounter
              end={12}
              suffix="+"
              label="Years Experience"
              color="#00f5ff"
            />
            <AnimatedCounter
              end={5}
              suffix=""
              label="Premium Dealerships"
              color="#00ff88"
            />
            <AnimatedCounter
              end={1000}
              suffix="+"
              label="Deals Closed"
              color="#b100ff"
            />
            <AnimatedCounter
              end={92}
              suffix="%"
              label="Audit Score"
              color="#ffd700"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="references" className="relative z-10 py-24 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-green-400 text-xs tracking-[0.3em] uppercase font-medium mb-3">
              What Colleagues Say
            </p>
            <h2 className="text-4xl font-black text-white tracking-tight">
              The trust layer
            </h2>
            <p className="text-white/30 mt-3 text-sm">
              I am not the only one saying this.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                viewport={{ once: true }}
                className="bg-zinc-900 border border-white/8 rounded-2xl p-7 flex flex-col gap-5"
              >
                <p className="text-white/60 text-sm leading-relaxed italic flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-black"
                    style={{ backgroundColor: t.color }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-white/70 text-sm font-semibold">{t.name}</p>
                    <p className="text-white/30 text-xs">{t.role}</p>
                    <a
                      href={`tel:${t.contact.replace(/\s/g, "")}`}
                      className="text-white/20 text-xs hover:text-cyan-400 transition-colors mt-0.5 block"
                    >
                      {t.contact}
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-8 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-black text-white/20">
            INNOCENT MARITI
            <span className="text-cyan-400/40">.</span>
          </span>
          <p className="text-white/20 text-xs">
            © 2025 · Honeydew, Gauteng, South Africa
          </p>
        </div>
      </footer>

      {/* Modal */}
      {activeCard && (
        <Modal
          isOpen={modal.isOpen}
          onClose={closeModal}
          title={activeCard.title}
          description={activeCard.description}
          icon={activeCard.icon}
          color={activeCard.color}
          caseStudy={activeCard.caseStudy}
        />
      )}
    </>
  );
}
