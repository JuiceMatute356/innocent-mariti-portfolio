"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeUpVariant, staggerContainer } from "@/lib/animationVariants";
import { cn } from "@/lib/cn";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  stagger?: boolean;
}

export function SectionWrapper({
  children,
  className,
  stagger = true,
}: SectionWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      variants={stagger ? staggerContainer : fadeUpVariant}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
