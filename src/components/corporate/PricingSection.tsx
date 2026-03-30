"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeUpVariant, staggerContainer } from "@/lib/animationVariants";

const tiers = [
  {
    name: "Starter",
    price: "$0",
    period: "forever",
    description: "For individuals and small side projects.",
    features: [
      "Up to 3 projects",
      "5 team members",
      "100 deployments/month",
      "Community support",
      "Basic analytics",
    ],
    cta: "Get started free",
    ctaStyle:
      "border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$49",
    period: "per month",
    description: "For growing teams that need more power and control.",
    features: [
      "Unlimited projects",
      "25 team members",
      "Unlimited deployments",
      "Priority support (24h)",
      "Advanced analytics",
      "AI workflows",
      "Custom domains",
    ],
    cta: "Start free trial",
    ctaStyle: "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-500/30",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "contact us",
    description: "For large organizations with advanced security needs.",
    features: [
      "Everything in Pro",
      "Unlimited team members",
      "SSO & SAML",
      "RBAC & audit logs",
      "99.99% SLA",
      "Dedicated support",
      "Custom integrations",
      "On-premise option",
    ],
    cta: "Contact sales",
    ctaStyle:
      "border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300",
    highlighted: false,
  },
];

export function PricingSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="pricing" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-blue-600 text-sm font-semibold tracking-wide uppercase">
            Pricing
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-3 mb-4 tracking-tight">
            Simple, transparent pricing
          </h2>
          <p className="text-slate-500 text-lg">
            No hidden fees. No surprises. Cancel anytime.
          </p>
        </div>

        {/* Tiers */}
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center"
        >
          {tiers.map((tier) => (
            <motion.div
              key={tier.name}
              variants={fadeUpVariant}
              className={`rounded-2xl p-8 border relative ${
                tier.highlighted
                  ? "bg-blue-600 border-blue-600 scale-105 shadow-2xl shadow-blue-500/25"
                  : "bg-white border-slate-200"
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3
                  className={`font-bold text-lg mb-1 ${tier.highlighted ? "text-white" : "text-slate-900"}`}
                >
                  {tier.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span
                    className={`text-4xl font-black ${tier.highlighted ? "text-white" : "text-slate-900"}`}
                  >
                    {tier.price}
                  </span>
                  <span
                    className={`text-sm ${tier.highlighted ? "text-blue-200" : "text-slate-400"}`}
                  >
                    /{tier.period}
                  </span>
                </div>
                <p
                  className={`text-sm ${tier.highlighted ? "text-blue-100" : "text-slate-500"}`}
                >
                  {tier.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm">
                    <svg
                      className={`w-4 h-4 shrink-0 ${tier.highlighted ? "text-blue-200" : "text-green-500"}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span
                      className={
                        tier.highlighted ? "text-blue-100" : "text-slate-600"
                      }
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={`block w-full text-center py-3 rounded-xl font-semibold transition-all duration-200 text-sm ${tier.ctaStyle}`}
              >
                {tier.cta}
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
