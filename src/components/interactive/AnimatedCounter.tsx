"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  label: string;
  color?: string;
}

function easeOutExpo(t: number): number {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

export function AnimatedCounter({
  end,
  suffix = "",
  label,
  color = "#00f5ff",
}: AnimatedCounterProps) {
  const [value, setValue] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (!inView) return;

    const DURATION = 2000;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / DURATION, 1);
      const eased = easeOutExpo(progress);
      setValue(Math.round(end * eased));

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [inView, end]);

  return (
    <div ref={ref} className="text-center">
      <div
        className="text-5xl md:text-6xl font-black tabular-nums mb-2"
        style={{ color }}
      >
        {value.toLocaleString()}
        {suffix}
      </div>
      <div className="text-white/40 text-sm tracking-wide uppercase">
        {label}
      </div>
    </div>
  );
}
