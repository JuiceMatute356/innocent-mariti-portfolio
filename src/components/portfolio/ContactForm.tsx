"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeUpVariant, staggerContainer } from "@/lib/animationVariants";

export function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1200));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  const inputClass =
    "w-full bg-transparent border-b border-[#3d3a3a] focus:border-[#f59e0b] outline-none py-3 text-[#f5f0e8] placeholder:text-[#f5f0e8]/20 transition-colors duration-200 text-base";

  return (
    <section id="contact" ref={ref} className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left: copy */}
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <p className="text-[#f59e0b] text-xs tracking-[0.3em] uppercase font-medium mb-3">
              Contact
            </p>
            <h2 className="text-5xl font-black text-[#f5f0e8] tracking-tight mb-6">
              Let&apos;s talk
              <br />
              opportunity
            </h2>
            <p className="text-[#f5f0e8]/40 text-base leading-relaxed mb-8">
              Open to Risk & Compliance roles, Sales Management positions, and
              consulting opportunities across South Africa. I respond within 24
              hours.
            </p>

            <div className="space-y-5 text-sm">
              {[
                {
                  icon: "📧",
                  label: "Email",
                  value: "innocentmariti@gmail.com",
                  href: "mailto:innocentmariti@gmail.com",
                },
                {
                  icon: "📞",
                  label: "Phone",
                  value: "073 567 2508",
                  href: "tel:0735672508",
                },
                {
                  icon: "📍",
                  label: "Location",
                  value: "Honeydew, Gauteng, SA",
                  href: null,
                },
                {
                  icon: "🟢",
                  label: "Availability",
                  value: "Open to opportunities",
                  href: null,
                },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <span className="text-lg">{item.icon}</span>
                  <div>
                    <p className="text-[#f5f0e8]/30 text-xs">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-[#f5f0e8]/70 hover:text-[#f59e0b] transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-[#f5f0e8]/70">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* CV download hint */}
            <div className="mt-8 p-4 rounded-xl border border-[#f59e0b]/20 bg-[#f59e0b]/5">
              <p className="text-[#f59e0b] text-xs font-semibold mb-1">
                📄 CV Available on Request
              </p>
              <p className="text-[#f5f0e8]/40 text-xs">
                12+ year full career history, references from Mercedes-Benz,
                Williams Hunt & Digi-Cars included.
              </p>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center justify-center h-full text-center py-16"
              >
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-2xl font-bold text-[#f5f0e8] mb-2">
                  Message received!
                </h3>
                <p className="text-[#f5f0e8]/40">
                  I&apos;ll be in touch within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <motion.div variants={fadeUpVariant}>
                  <input
                    type="text"
                    placeholder="Your name"
                    required
                    value={form.name}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, name: e.target.value }))
                    }
                    className={inputClass}
                  />
                </motion.div>

                <motion.div variants={fadeUpVariant}>
                  <input
                    type="email"
                    placeholder="Email address"
                    required
                    value={form.email}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, email: e.target.value }))
                    }
                    className={inputClass}
                  />
                </motion.div>

                <motion.div variants={fadeUpVariant}>
                  <textarea
                    placeholder="Tell me about the opportunity..."
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, message: e.target.value }))
                    }
                    className={`${inputClass} resize-none`}
                  />
                </motion.div>

                <motion.div variants={fadeUpVariant}>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2 bg-[#f59e0b] text-[#1a1a1a] font-semibold px-8 py-3.5 rounded-full hover:bg-[#d97706] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="w-4 h-4 animate-spin"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v8H4z"
                          />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      "Send message"
                    )}
                  </button>
                </motion.div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
