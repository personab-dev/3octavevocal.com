"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface SectionHeaderProps {
  label?: string;
  heading: React.ReactNode;
  description?: string;
  /** "light" = 흰 배경, "dark" = 어두운 배경 */
  theme?: "light" | "dark";
  /** label 스타일: "accent" = 빨간색 강조, "muted" = 회색 보조, "display" = 영문 트래킹 */
  labelStyle?: "accent" | "muted" | "display";
  align?: "center" | "left";
  className?: string;
}

export default function SectionHeader({
  label,
  heading,
  description,
  theme = "light",
  labelStyle = "muted",
  align = "center",
  className = "mb-14",
}: SectionHeaderProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const labelClasses = {
    accent: "text-accent text-sm md:text-base font-bold tracking-widest uppercase",
    muted: theme === "light"
      ? "text-text-on-light/60 text-lg md:text-xl"
      : "text-gray-400 text-lg md:text-xl",
    display: theme === "light"
      ? "font-display text-sm tracking-[0.2em] text-gray-500"
      : "font-display text-sm tracking-[0.2em] text-gray-400",
  };

  const headingColor = theme === "light" ? "text-text-on-light" : "text-white";
  const descColor = theme === "light" ? "text-text-on-light/60" : "text-gray-400";
  const textAlign = align === "center" ? "text-center" : "text-left";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7 }}
      className={`${textAlign} ${className}`}
    >
      {label && (
        <p className={`${labelClasses[labelStyle]} mb-3`}>
          {label}
        </p>
      )}
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold ${headingColor} leading-tight`}>
        {heading}
      </h2>
      {description && (
        <p className={`${descColor} text-base md:text-lg mt-6 max-w-xl ${align === "center" ? "mx-auto" : ""} leading-relaxed`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
