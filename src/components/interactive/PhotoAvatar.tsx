"use client";

import { motion } from "framer-motion";

export function PhotoAvatar() {
  return (
    <div className="relative flex items-center justify-center w-64 h-64 md:w-80 md:h-80">
      {/* Outer pulse ring 1 */}
      <motion.div
        animate={{ scale: [1, 1.18, 1], opacity: [0.15, 0, 0.15] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 rounded-full border border-cyan-400/40"
      />

      {/* Outer pulse ring 2 — offset timing */}
      <motion.div
        animate={{ scale: [1, 1.32, 1], opacity: [0.1, 0, 0.1] }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute inset-0 rounded-full border border-cyan-400/20"
      />

      {/* Rotating arc ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute inset-[-8px] rounded-full"
        style={{
          background:
            "conic-gradient(from 0deg, transparent 70%, rgba(0,245,255,0.6) 100%)",
          borderRadius: "50%",
        }}
      />

      {/* Glow halo */}
      <motion.div
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-[-4px] rounded-full"
        style={{
          boxShadow: "0 0 40px 10px rgba(0,245,255,0.25)",
        }}
      />

      {/* Photo container — breathing */}
      <motion.div
        animate={{ scale: [1, 1.02, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="relative w-full h-full rounded-full overflow-hidden border-2 border-cyan-400/30 bg-zinc-900"
        style={{ boxShadow: "inset 0 0 30px rgba(0,0,0,0.5)" }}
      >
        <div
          className="absolute inset-0 rounded-full"
          style={{
            backgroundImage: "url('/images/innocent-mariti.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
          }}
        />

        {/* Subtle shimmer scan line */}
        <motion.div
          animate={{ y: ["-100%", "200%"] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
            repeatDelay: 3,
          }}
          className="absolute inset-x-0 h-16 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, transparent, rgba(0,245,255,0.06), transparent)",
          }}
        />
      </motion.div>

      {/* Status badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap"
      >
        <div className="bg-black/80 backdrop-blur-sm border border-green-400/30 rounded-full px-3 py-1.5 flex items-center gap-2">
          <motion.div
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-green-400"
          />
          <span className="text-green-400 text-xs font-medium">
            Available for hire
          </span>
        </div>
      </motion.div>
    </div>
  );
}
