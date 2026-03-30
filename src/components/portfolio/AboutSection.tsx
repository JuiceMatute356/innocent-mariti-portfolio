"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import {
  fadeUpVariant,
  slideInLeft,
  slideInRight,
} from "@/lib/animationVariants";
import Image from "next/image";

const skills = [
  "NCA Compliance",
  "POPIA",
  "OEM Governance",
  "F&I Deal Structuring",
  "Audit Readiness",
  "Credit Risk Assessment",
  "CRM Management",
  "n8n Automation",
  "Python",
  "Telegram Bots",
  "Digital Lead Management",
  "AutoTrader / Cars.co.za",
];

export function AboutSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [imgError, setImgError] = useState(false);

  return (
    <section id="about" ref={ref} className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <p className="text-[#f59e0b] text-xs tracking-[0.3em] uppercase font-medium mb-3">
              About Me
            </p>
            <h2 className="text-5xl font-black text-[#f5f0e8] tracking-tight mb-6">
              Where compliance
              <br />
              meets{" "}
              <span className="text-[#f5f0e8]/30">ambition</span>
            </h2>
            <div className="space-y-4 text-[#f5f0e8]/50 text-base leading-relaxed">
              <p>
                Based in Honeydew, Gauteng, I&apos;ve spent 12+ years in
                South Africa&apos;s most demanding dealership environments:
                Mercedes-Benz, Hyundai, Williams Hunt, and Digi-Cars. Every
                deal requires compliance, precision, and trust.
              </p>
              <p>
                I&apos;m not just a salesperson. I understand NCA frameworks,
                POPIA obligations, audit-trail documentation, and OEM governance
                from the inside. I also build automation tools to make compliance
                faster and smarter.
              </p>
              <p>
                My goal: move into a{" "}
                <span className="text-[#f59e0b]">Risk & Compliance</span> role
                where I can apply this lived experience at a strategic level.
              </p>
            </div>

            {/* Skills */}
            <div className="mt-8">
              <p className="text-[#f5f0e8]/20 text-xs tracking-widest uppercase mb-4">
                Skills & Expertise
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm text-[#f5f0e8]/50 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Photo */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="relative"
          >
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-[#242222]">
              {!imgError ? (
                <Image
                  src="/images/innocent-mariti.jpg"
                  alt="Innocent Mariti"
                  fill
                  className="object-cover object-top"
                  onError={() => setImgError(true)}
                />
              ) : (
                /* Fallback when photo not yet added */
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 rounded-full bg-[#f59e0b]/20 border-2 border-[#f59e0b]/30 flex items-center justify-center mx-auto mb-4">
                      <span className="text-4xl">👔</span>
                    </div>
                    <p className="text-[#f5f0e8]/30 text-sm">
                      Innocent Mariti
                    </p>
                  </div>
                </div>
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/60 to-transparent" />

              {/* Stats overlay */}
              <div className="absolute bottom-6 left-6 right-6 bg-[#1a1a1a]/85 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <div className="grid grid-cols-3 gap-4 text-center">
                  {[
                    { n: "12+", label: "Years" },
                    { n: "5", label: "Dealerships" },
                    { n: "100%", label: "Audit Ready" },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <div className="text-xl font-black text-[#f59e0b]">
                        {stat.n}
                      </div>
                      <div className="text-xs text-[#f5f0e8]/30 mt-0.5">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Decorative border */}
            <motion.div
              variants={fadeUpVariant}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="absolute -top-4 -right-4 w-24 h-24 border border-[#f59e0b]/20 rounded-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
