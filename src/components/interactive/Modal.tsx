"use client";

import { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

interface CaseStudy {
  problem: { title: string; detail: string };
  solution: { title: string; detail: string };
  result: { title: string; detail: string };
  metric: { value: number; suffix: string; label: string };
  stack: string[];
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  icon: string;
  color: string;
  caseStudy?: CaseStudy;
}

function CountUp({ end, suffix, active }: { end: number; suffix: string; active: boolean }) {
  const [value, setValue] = useState(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (!active) return;
    const DURATION = 1800;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / DURATION, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(end * eased));
      if (progress < 1) rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [active, end]);

  return <>{value}{suffix}</>;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const stepVariants: any = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.22, duration: 0.5, ease: "easeOut" },
  }),
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const lineVariants: any = {
  hidden: { scaleY: 0, originY: 0 },
  visible: (i: number) => ({
    scaleY: 1,
    transition: { delay: i * 0.22 + 0.18, duration: 0.25, ease: "easeOut" },
  }),
};

export function Modal({ isOpen, onClose, title, icon, color, caseStudy }: ModalProps) {
  const [mounted, setMounted] = useState(false);
  const [metricActive, setMetricActive] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!isOpen) { setMetricActive(false); return; }
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handler);
    const t = setTimeout(() => setMetricActive(true), 900);
    return () => { document.removeEventListener("keydown", handler); clearTimeout(t); };
  }, [isOpen, onClose]);

  if (!mounted) return null;

  const steps = caseStudy ? [
    { label: "PROBLEM", badge: "bg-red-500/20 border-red-500/40 text-red-400", dot: "bg-red-500", ...caseStudy.problem },
    { label: "SOLUTION", badge: "bg-blue-500/20 border-blue-500/40 text-blue-400", dot: "bg-blue-500", ...caseStudy.solution },
    { label: "RESULT", badge: "bg-green-500/20 border-green-500/40 text-green-400", dot: "bg-green-500", ...caseStudy.result },
  ] : [];

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-sm z-50"
          />

          {/* Modal panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 32 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 32 }}
            transition={{ type: "spring", damping: 26, stiffness: 320 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg z-50 max-h-[90vh] overflow-y-auto"
          >
            <div
              className="bg-zinc-900 border rounded-2xl shadow-2xl overflow-hidden"
              style={{ borderColor: `${color}40` }}
            >
              {/* Header */}
              <div
                className="px-7 pt-7 pb-5 border-b"
                style={{ borderColor: `${color}20`, background: `linear-gradient(135deg, ${color}08, transparent)` }}
              >
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/50 hover:text-white transition-all text-lg"
                >
                  ×
                </button>
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", damping: 15, delay: 0.05 }}
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-4"
                  style={{ backgroundColor: `${color}18`, boxShadow: `0 0 24px ${color}30` }}
                >
                  {icon}
                </motion.div>
                <motion.h2
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-xl font-bold text-white"
                >
                  {title}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.15 }}
                  className="text-xs uppercase tracking-widest mt-1"
                  style={{ color }}
                >
                  Case Study
                </motion.p>
              </div>

              {/* Case study steps */}
              {caseStudy && (
                <div className="px-7 py-6 space-y-0">
                  {steps.map((step, i) => (
                    <div key={step.label}>
                      {/* Step */}
                      <motion.div
                        custom={i}
                        variants={stepVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex gap-4"
                      >
                        {/* Left: dot + line */}
                        <div className="flex flex-col items-center shrink-0 pt-1">
                          <div className={`w-3 h-3 rounded-full ${step.dot} shadow-lg`}
                            style={{ boxShadow: `0 0 8px ${i === 0 ? '#ef4444' : i === 1 ? '#3b82f6' : '#22c55e'}60` }}
                          />
                          {i < steps.length - 1 && (
                            <motion.div
                              custom={i}
                              variants={lineVariants}
                              initial="hidden"
                              animate="visible"
                              className="w-px flex-1 mt-1"
                              style={{ background: `linear-gradient(to bottom, ${i === 0 ? '#ef444450' : '#3b82f650'}, transparent)`, minHeight: 32 }}
                            />
                          )}
                        </div>

                        {/* Right: content */}
                        <div className="pb-6 flex-1">
                          <span className={`inline-flex items-center text-xs font-bold px-2.5 py-1 rounded-full border mb-2 ${step.badge}`}>
                            {step.label}
                          </span>
                          <h3 className="text-white font-semibold text-sm mb-1">{step.title}</h3>
                          <p className="text-white/40 text-xs leading-relaxed">{step.detail}</p>
                        </div>
                      </motion.div>
                    </div>
                  ))}

                  {/* Key metric */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.75, type: "spring", damping: 18 }}
                    className="rounded-xl p-5 border text-center mt-2"
                    style={{ backgroundColor: `${color}08`, borderColor: `${color}30` }}
                  >
                    <div
                      className="text-4xl font-black mb-1 tabular-nums"
                      style={{ color }}
                    >
                      <CountUp end={caseStudy.metric.value} suffix={caseStudy.metric.suffix} active={metricActive} />
                    </div>
                    <p className="text-white/40 text-xs">{caseStudy.metric.label}</p>
                  </motion.div>

                  {/* Stack */}
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                    className="pt-4"
                  >
                    <p className="text-white/20 text-xs uppercase tracking-widest mb-2">Tools & Frameworks</p>
                    <div className="flex flex-wrap gap-2">
                      {caseStudy.stack.map((s) => (
                        <span
                          key={s}
                          className="text-xs px-2.5 py-1 rounded-full border text-white/50"
                          style={{ borderColor: `${color}30`, backgroundColor: `${color}08` }}
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              )}

              {/* Footer */}
              <div className="px-7 pb-6">
                <button
                  onClick={onClose}
                  className="w-full py-3 rounded-xl text-sm font-semibold text-white/50 border border-white/10 hover:border-white/20 hover:text-white/80 transition-all"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
}
