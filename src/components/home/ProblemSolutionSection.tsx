"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function ProblemSolutionSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <section ref={ref} className="bg-accent py-20 lg:py-28 relative overflow-hidden">
      {/* Subtle diagonal pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 20px, white 20px, white 21px)",
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-4">
            잘못된 연습이 쌓일수록, 고음은 더 멀어집니다.
          </p>
          <p className="text-white text-xl md:text-2xl font-bold mb-10">
            혼자 해결하려다 시간만 낭비하지 마세요.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            <span className="underline decoration-white decoration-4 underline-offset-8">
              문제의 원인을 제대로 알고 확실한 변화를 경험하세요.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
