"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative bg-black overflow-hidden">
      {/* Background: Image grid placeholder */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-[2px] opacity-40">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="aspect-[4/3] bg-zinc-800 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-zinc-700/30 to-zinc-900/50" />
            <span className="absolute inset-0 flex items-center justify-center text-zinc-600 text-[10px] tracking-widest uppercase">
              레슨 현장 {i + 1}
            </span>
          </div>
        ))}
      </div>

      {/* Overlay content */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black/90 flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-6 text-center">
          {/* Dots decoration */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center gap-2 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-white/60" />
            <span className="w-2 h-2 rounded-full bg-white/60" />
            <span className="w-2 h-2 rounded-full bg-white/60" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold leading-snug text-white"
          >
            <span className="text-accent">고음이 안 되는 이유,</span> 아무리 해봐도 모르겠다면?
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-4 text-xl md:text-2xl lg:text-3xl font-bold text-white"
          >
            수 천명이 검증한 <span className="underline decoration-accent decoration-4 underline-offset-4">3옥타브장인 보컬학원</span>에서 답을 찾으세요.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 text-gray-400 text-base md:text-lg"
          >
            당신도 바뀔 수 밖에 없는 이유, 궁금하다면?
          </motion.p>
        </div>
      </div>

      {/* Bottom image row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-[2px] opacity-40">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="aspect-[4/3] bg-zinc-800 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-700/30 to-zinc-900/50" />
            <span className="absolute inset-0 flex items-center justify-center text-zinc-600 text-[10px] tracking-widest uppercase">
              레슨 현장 {i + 9}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
