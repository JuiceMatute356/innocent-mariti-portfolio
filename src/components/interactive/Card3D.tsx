"use client";

import { useRef, useState } from "react";

interface Card3DProps {
  title: string;
  description: string;
  category: string;
  color: string;
  onOpenModal: () => void;
}

export function Card3D({
  title,
  description,
  category,
  color,
  onOpenModal,
}: Card3DProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("perspective(1000px)");
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const x = e.clientX - cx;
    const y = e.clientY - cy;

    const rx = (y / (rect.height / 2)) * 5;
    const ry = -(x / (rect.width / 2)) * 5;

    const glareX = ((e.clientX - rect.left) / rect.width) * 100;
    const glareY = ((e.clientY - rect.top) / rect.height) * 100;

    setTransform(
      `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) scale3d(1.02,1.02,1.02)`
    );
    setGlare({ x: glareX, y: glareY, opacity: 0.08 });
  };

  const handleMouseLeave = () => {
    setTransform(
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)"
    );
    setGlare((g) => ({ ...g, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onOpenModal}
      className="relative rounded-xl border border-white/8 bg-zinc-950 p-6 cursor-pointer group overflow-hidden flex flex-col"
      style={{
        transform,
        transition: "transform 0.15s ease-out",
        borderLeft: `2px solid ${color}60`,
      }}
    >
      {/* Glare overlay */}
      <div
        className="absolute inset-0 rounded-xl pointer-events-none transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,${glare.opacity}), transparent 60%)`,
        }}
      />

      {/* Hover border glow */}
      <div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ boxShadow: `inset 0 0 0 1px ${color}30` }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        <p
          className="text-xs uppercase tracking-[0.2em] font-semibold mb-3"
          style={{ color: `${color}80` }}
        >
          {category}
        </p>

        <h3 className="text-white font-bold text-base leading-snug mb-3">
          {title}
        </h3>

        <p className="text-white/35 text-sm leading-relaxed flex-1">
          {description}
        </p>

        <div
          className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium transition-all group-hover:gap-2.5"
          style={{ color }}
        >
          View case study
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  );
}
