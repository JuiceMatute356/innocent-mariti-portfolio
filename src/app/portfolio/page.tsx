import { PortfolioNav } from "@/components/portfolio/PortfolioNav";
import { Hero } from "@/components/portfolio/Hero";
import { ProjectGrid } from "@/components/portfolio/ProjectGrid";
import { AboutSection } from "@/components/portfolio/AboutSection";
import { ContactForm } from "@/components/portfolio/ContactForm";
import { profile } from "@/data/profile";

export default function PortfolioPage() {
  return (
    <>
      <PortfolioNav />
      <Hero />
      <ProjectGrid />

      {/* Career Timeline strip */}
      <section className="py-16 px-6 border-t border-b border-white/5 bg-[#161616]">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#f5f0e8]/20 text-xs tracking-widest uppercase mb-8 text-center">
            Career Timeline
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { co: "IC Auto Nissan", years: "2014-2017", color: "#f59e0b" },
              { co: "Mercedes-Benz", years: "2017-2020", color: "#c0c0c0" },
              { co: "Digi-Cars (iCars)", years: "2020-2022", color: "#3b82f6" },
              { co: "Williams Hunt", years: "2024-2025", color: "#10b981" },
              { co: "Hyundai Motor Co.", years: "2025-Present", color: "#ef4444" },
            ].map((item) => (
              <div
                key={item.co}
                className="flex items-center gap-3 bg-white/3 border border-white/10 rounded-full px-5 py-2.5"
              >
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-[#f5f0e8]/60 text-sm font-medium">
                  {item.co}
                </span>
                <span className="text-[#f5f0e8]/20 text-xs">{item.years}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AboutSection />
      <ContactForm />

      {/* References strip */}
      <section className="py-16 px-6 bg-[#161616] border-t border-white/5">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-[#f5f0e8]/20 text-xs tracking-widest uppercase mb-3">
            Professional References
          </p>
          <p className="text-[#f5f0e8]/40 text-sm">
            Available on request.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-[#f5f0e8]/20 text-sm">
            © 2026 {profile.fullName} · {profile.location}
          </span>
          <div className="flex gap-6">
            <a
              href={`mailto:${profile.email}`}
              className="text-[#f5f0e8]/20 hover:text-[#f59e0b] text-sm transition-colors"
            >
              Email
            </a>
            <a
              href={profile.linkedinUrl}
              className="text-[#f5f0e8]/20 hover:text-[#f59e0b] text-sm transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={profile.githubUrl}
              className="text-[#f5f0e8]/20 hover:text-[#f59e0b] text-sm transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
