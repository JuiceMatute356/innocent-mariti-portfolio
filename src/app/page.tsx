import Link from "next/link";

const sites = [
  {
    href: "/portfolio",
    label: "/portfolio",
    title: "Designer Portfolio",
    description:
      "Minimalist dark theme with warm amber accents. Large typography, smooth scroll, project grid. The kind of site that wins Awwwards.",
    tags: ["Minimal", "Dark", "Smooth Scroll"],
    gradient: "from-amber-500/20 to-orange-600/5",
    border: "border-amber-500/20 hover:border-amber-500/50",
    tagColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    number: "01",
  },
  {
    href: "/corporate",
    label: "/corporate",
    title: "SaaS / Corporate",
    description:
      "Professional business site with feature grids, testimonials, pricing tiers, and subtle entrance animations. Vercel-level polish.",
    tags: ["Business", "Light", "Animated"],
    gradient: "from-blue-500/20 to-indigo-600/5",
    border: "border-blue-500/20 hover:border-blue-500/50",
    tagColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    number: "02",
  },
  {
    href: "/interactive",
    label: "/interactive",
    title: "Interactive Demo",
    description:
      "Canvas particle background, 3D tilt cards, modal system, animated counters, parallax scrolling. The full creative toolkit.",
    tags: ["Creative", "3D", "Particles"],
    gradient: "from-cyan-500/20 to-purple-600/5",
    border: "border-cyan-500/20 hover:border-cyan-500/50",
    tagColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    number: "03",
  },
];

export default function HubPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      {/* Grid background */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-24">
        {/* Header */}
        <div className="mb-20 text-center">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-xs text-white/50 mb-8 tracking-widest uppercase">
            Website Showcase
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
            Three{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">
              Premium
            </span>{" "}
            Designs
          </h1>
          <p className="text-white/40 text-lg max-w-md mx-auto leading-relaxed">
            Production-ready websites built with Next.js 16, Tailwind CSS v4,
            and Framer Motion. Click any card to explore.
          </p>
        </div>

        {/* Site cards */}
        <div className="grid gap-5">
          {sites.map((site) => (
            <Link
              key={site.href}
              href={site.href}
              className={`group relative block rounded-2xl border bg-white/[0.02] p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:bg-white/[0.04] ${site.border}`}
            >
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br opacity-30 ${site.gradient}`}
              />
              <div className="relative flex flex-col md:flex-row md:items-center gap-6">
                {/* Number */}
                <span className="text-6xl font-black text-white/5 tabular-nums select-none shrink-0">
                  {site.number}
                </span>

                {/* Content */}
                <div className="flex-1">
                  <div className="font-mono text-xs text-white/30 mb-2">
                    {site.label}
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-2">
                    {site.title}
                  </h2>
                  <p className="text-white/40 text-sm leading-relaxed max-w-xl">
                    {site.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {site.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`text-xs px-2.5 py-1 rounded-full border ${site.tagColor}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Arrow */}
                <div className="text-white/20 group-hover:text-white/60 transition-colors shrink-0">
                  <svg
                    className="w-6 h-6 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Footer */}
        <p className="text-center text-white/20 text-xs mt-16">
          Built with Next.js 16 · Tailwind CSS v4 · Framer Motion · React 19
        </p>
      </div>
    </main>
  );
}
