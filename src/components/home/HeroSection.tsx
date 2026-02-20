"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative bg-black overflow-hidden -mt-16 pt-16 min-h-[650px] md:min-h-[780px] lg:min-h-[860px] flex items-center">
      {/* Background Image */}
      <Image
        src="/images/hero-bg.jpg"
        alt="3옥타브장인 보컬학원 브랜드 포스터"
        fill
        sizes="100vw"
        className="object-cover object-center"
        priority
      />

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/80" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center py-24">
        {/* Dots decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center gap-2.5 mb-10"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-white/60" />
          <span className="w-2.5 h-2.5 rounded-full bg-white/60" />
          <span className="w-2.5 h-2.5 rounded-full bg-white/60" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-snug text-white"
        >
          <span className="text-accent">고음이 안 되는 이유,</span>
          <br />
          아무리 해봐도 모르겠다면?
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-5 text-2xl md:text-3xl lg:text-4xl font-bold text-white"
        >
          수천명이 검증한{" "}
          <span className="underline decoration-accent decoration-4 underline-offset-8">
            3옥타브장인 보컬학원
          </span>
          에서
          <br />
          답을 찾으세요.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 text-gray-400 text-xl md:text-2xl"
        >
          당신도 바뀔 수 밖에 없는 이유, 궁금하다면?
        </motion.p>
      </div>
    </section>
  );
}
