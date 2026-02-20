"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

/* ── Data ─────────────────────────────────────────── */

const worries = [
  "고음이 안 나와서",
  "목이 아파서",
  "내 목소리가 싫어서...",
];

/* ── Component ────────────────────────────────────── */

export default function HookSection() {
  const hookRef = useRef<HTMLElement>(null);
  const hookInView = useInView(hookRef, { once: true, amount: 0.2 });

  return (
    <section ref={hookRef}>
      {/* Title area — light bg */}
      <div className="bg-white py-14 lg:py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={hookInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-accent text-sm md:text-base font-bold tracking-widest mb-5"
          >
            7천명+이 검증한 단 하나의 발성 기본 커리큘럼
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={hookInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-2xl md:text-3xl lg:text-[2.5rem] font-bold text-text-on-light leading-snug"
          >
            학원비로 중형차 한 대{" "}
            <span className="text-accent">태운 수강생,</span>
            <br />
            20분 만에 고쳤습니다.
          </motion.h2>
        </div>
      </div>

      {/* Image area with worry bubbles overlay */}
      <div className="relative aspect-[16/7] md:aspect-[16/5] overflow-hidden bg-zinc-800">
        <Image
          src="/images/home/painpoints-bg.png"
          alt="3옥타브장인 보컬 레슨 현장"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />

        {/* Worry Bubbles */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-full max-w-2xl px-6 flex flex-wrap items-center justify-center gap-4 md:gap-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={hookInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-zinc-700/80 backdrop-blur-sm rounded-xl px-6 py-3.5 text-gray-200 text-sm md:text-base"
            >
              고음이 안 나와서
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={hookInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="bg-zinc-700/80 backdrop-blur-sm rounded-xl px-6 py-3.5 text-gray-200 text-sm md:text-base mt-8 md:mt-10"
            >
              목이 아파서
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={hookInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-zinc-700/80 backdrop-blur-sm rounded-xl px-6 py-3.5 text-gray-200 text-sm md:text-base border border-white/20"
            >
              내 목소리가 싫어서...
            </motion.div>
          </div>
        </div>
      </div>

      {/* Accent Bridge */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={hookInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.7, delay: 0.7 }}
        className="bg-accent py-5 relative overflow-hidden"
      >
        {/* Diagonal decoration */}
        <div className="absolute left-0 top-0 h-full w-20 md:w-32 bg-accent-dark/20 -skew-x-12 -translate-x-4" />
        <p className="text-center text-white text-base md:text-lg font-bold tracking-wide relative z-10">
          당신의 고민, 모두{" "}
          <span className="underline underline-offset-4">발성</span>에서
          시작됩니다.
        </p>
      </motion.div>
    </section>
  );
}
