// Single source of truth for portfolio copy and metrics.
// Facts must match the current master CV (Documents\Innocent_Mariti_CV.pdf) exactly.
// Re-verify metrics before editing: they are point-in-time, not static.
// Trustee role is deliberately NOT on this public site (Innocent, 2026-10-05).

export const profile = {
  name: "Innocent Mariti",
  fullName: "Innocent Kelebogile Mariti",
  positioning: "Sales Team Leader | Vehicle Sales and F&I",
  location: "Johannesburg, South Africa",
  email: "innocentmariti@gmail.com",
  linkedin: "linkedin.com/in/innocent-mariti-27a4b552",
  linkedinUrl: "https://linkedin.com/in/innocent-mariti-27a4b552",
  github: "github.com/JuiceMatute356",
  githubUrl: "https://github.com/JuiceMatute356",
  cvFile: "/Innocent_Mariti_CV.pdf",

  heroSubtext:
    "Twelve years selling and structuring vehicle finance deals. Second in charge of a team of nine at Hyundai, 133% of target, 90% of deals converted to finance. I also build the sales and finance tools my team uses.",

  stats: [
    { n: "133%", label: "Of Target at Hyundai" },
    { n: "90%", label: "Deals Converted to Finance" },
    { n: "3rd of 9", label: "On the Sales Floor" },
    { n: "12", label: "Years in Vehicle Sales" },
  ],

  aboutIntro:
    "Based in Johannesburg, South Africa. Vehicle sales team leader with twelve years across Nissan, Mercedes-Benz, a digital-first dealer group and Hyundai, including second-in-charge responsibility for a team of nine. NCA accredited, with hands-on experience in compliant deal structuring and credit assessment.",
  aboutBackground:
    "At Hyundai I averaged 8 units a month against a 6-unit target, coached the team, and ran daily, weekly and monthly reporting on finance applications against conversion. I also build sales and finance tools, including a live WhatsApp enquiry and finance-application assistant, that improve lead response, application completion and deal control.",
  aboutGoal: "Sales Team Leader",

  skills: [
    "NCA Compliance",
    "F&I Deal Structuring",
    "Credit Risk Assessment",
    "Team Coaching",
    "Conversion Reporting",
    "OEM Standards",
    "AutoTrader & Cars.co.za Leads",
    "Signio & Seriti",
    "n8n Sales Automation",
    "WhatsApp Sales Assistants",
    "Claude / OpenAI APIs",
    "POPIA-Aware Records",
  ],

  contactIntro:
    "Open to sales team leader and sales manager roles, F&I, fleet and automotive business development.",
} as const;
