"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import CountUp from "@/components/animations/CountUp";

const stats = [
  { value: 7000, suffix: "+", label: "누적 수강생" },
  { value: 98, suffix: "%", label: "만족도" },
  { value: 15, suffix: "년", label: "커리큘럼 연구" },
  { value: 1500, suffix: "+", label: "수강 후기" },
];

export default function StatsStrip() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="bg-accent py-14 lg:py-16">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-3xl md:text-4xl lg:text-5xl font-black text-white">
                  {isInView ? (
                    <CountUp end={stat.value} />
                  ) : (
                    "0"
                  )}
                </span>
                <span className="text-white text-lg md:text-xl font-bold">
                  {stat.suffix}
                </span>
              </div>
              <p className="text-white/80 text-sm mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
