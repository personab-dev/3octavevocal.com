"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative bg-black overflow-hidden -mt-20 pt-20 min-h-[600px] md:min-h-[700px] lg:min-h-[800px] flex items-center">
      {/* Background Image — Desktop */}
      <Image
        src="/images/hero-desktop.png"
        alt="3옥타브장인 보컬학원 레슨 현장"
        fill
        sizes="100vw"
        className="object-cover object-center hidden md:block"
        priority
      />
      {/* Background Image — Mobile */}
      <Image
        src="/images/hero-mobile.png"
        alt="3옥타브장인 보컬학원 레슨 현장"
        fill
        sizes="100vw"
        className="object-cover object-center md:hidden"
        priority
      />

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/80" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center py-20">
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
          <span className="text-accent">고음이 안 되는 이유,</span> 아무리
          해봐도 모르겠다면?
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-4 text-xl md:text-2xl lg:text-3xl font-bold text-white"
        >
          수 천명이 검증한{" "}
          <span className="underline decoration-accent decoration-4 underline-offset-4">
            3옥타브장인 보컬학원
          </span>
          에서 답을 찾으세요.
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
    </section>
  );
}
