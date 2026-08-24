// Single source of truth for portfolio copy and metrics.
// Facts must match ~/.claude/skills/innocent-cv-context/SKILL.md exactly.
// Re-verify metrics before editing: they are point-in-time, not static.

export const profile = {
  name: "Innocent Mariti",
  fullName: "Innocent Kelebogile Mariti",
  positioning: "AI Automation Engineer",
  location: "Johannesburg, South Africa",
  email: "innocentmariti@gmail.com",
  linkedin: "linkedin.com/in/innocent-mariti-27a4b552",
  linkedinUrl: "https://linkedin.com/in/innocent-mariti-27a4b552",
  github: "github.com/JuiceMatute356",
  githubUrl: "https://github.com/JuiceMatute356",
  cvFile: "/Innocent_Mariti_CV_AI_Automation_Engineer.pdf",

  heroSubtext:
    "I build and run production AI systems. Self-hosted n8n, Claude, and webhook infrastructure, on real uptime, not a demo.",

  // Verified live against the Contabo box on 2026-08-20. Re-verify before reusing.
  stats: [
    { n: "12", label: "Active Workflows" },
    { n: "489", label: "Node Flagship Bot" },
    { n: "99.96%", label: "7-Day Success Rate" },
    { n: "128d", label: "Uptime" },
  ],

  aboutIntro:
    "Based in Johannesburg, South Africa. No computer science degree, the systems are live and the evidence is public: a self-hosted n8n stack running 54 workflows, Claude and OpenAI integrations, WhatsApp and Telegram bots, and the infrastructure behind all of it.",
  aboutBackground:
    "12+ years in South Africa's most demanding dealership environments taught me what compliance, precision, and trust actually mean under pressure. I now build the automation that replaces the manual version of that work: NCA and POPIA-aware systems, audit-trail logging, and guardrails that catch a wrong number before a customer ever sees it.",
  aboutGoal: "AI Automation Engineer",

  skills: [
    "n8n Automation",
    "Python",
    "Claude / Anthropic",
    "WhatsApp & Telegram Bots",
    "Webhook & Event-Driven Design",
    "Docker & Linux VPS",
    "NCA Compliance",
    "POPIA",
    "OEM Governance",
    "F&I Deal Structuring",
    "Audit Readiness",
    "Credit Risk Assessment",
  ],

  contactIntro:
    "Open to AI Automation Engineer roles, forward-deployed and solutions engineering, and automation consulting.",
} as const;
