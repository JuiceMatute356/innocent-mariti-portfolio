import { CorporateNav } from "@/components/corporate/CorporateNav";
import { CorporateHero } from "@/components/corporate/CorporateHero";
import { FeatureGrid } from "@/components/corporate/FeatureGrid";
import { TestimonialCarousel } from "@/components/corporate/TestimonialCarousel";
import { PricingSection } from "@/components/corporate/PricingSection";
import { CorporateFooter } from "@/components/corporate/CorporateFooter";

export default function CorporatePage() {
  return (
    <>
      <CorporateNav />
      <CorporateHero />
      <FeatureGrid />
      <TestimonialCarousel />
      <PricingSection />

      {/* CTA Banner */}
      <section className="py-24 px-6 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Ready to ship 10× faster?
          </h2>
          <p className="text-blue-100 text-xl mb-8">
            Join 10,000+ teams already using Nexus. Free plan available, no
            credit card required.
          </p>
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 bg-white text-blue-600 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors text-base shadow-xl"
          >
            Get started for free
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
        </div>
      </section>

      <CorporateFooter />
    </>
  );
}
