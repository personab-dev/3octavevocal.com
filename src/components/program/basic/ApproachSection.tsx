"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

/* ── Data ─────────────────────────────────────────── */

const expertList = [
  "WHO 공인 중국침구의",
  "대한통증척수학회 전문의",
  "Carrick's 카이로프랙틱 전문가",
];

/* ── Component ────────────────────────────────────── */

export default function ApproachSection() {
  const approachRef = useRef<HTMLElement>(null);
  const approachInView = useInView(approachRef, { once: true, amount: 0.15 });

  return (
    <section ref={approachRef} className="bg-white py-20 lg:py-28">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={approachInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-text-on-light/50 text-sm mb-3 tracking-widest">
            주먹구구식 강의가 아닌 &lsquo;진짜&rsquo; 발성강의
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-on-light">
            매일을 고민하며 쌓아온,{" "}
            <span className="text-accent">15년</span>의 발성과정 커리큘럼
          </h2>
        </motion.div>

        {/* Row 1 — Image left, Text right */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={approachInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] overflow-hidden bg-gray-50 mb-6"
        >
          <div className="relative aspect-[4/3] lg:aspect-auto bg-zinc-300">
            <Image
              src="/images/program/approach-01.jpg"
              alt="체계적인 발성 교육 현장"
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center p-8 lg:p-12">
            <h3 className="text-xl md:text-2xl font-bold text-text-on-light mb-4 leading-snug">
              누구나 이해 가능한
              <br />
              체계적인 발성 교육
            </h3>
            <p className="text-text-on-light/60 text-sm md:text-base leading-relaxed">
              해부학, 생리학, 음성학
              <br />
              기반의 체계적 발성 훈련
              <br />
              커리큘럼
            </p>
          </div>
        </motion.div>

        {/* Row 2 — Text left, Image right */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={approachInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] overflow-hidden bg-gray-50"
        >
          <div className="flex flex-col justify-center p-8 lg:p-12 order-2 lg:order-1">
            <h3 className="text-xl md:text-2xl font-bold text-text-on-light mb-4 leading-snug">
              해부학 및 생리학
              <br />
              전문가와의 협업
            </h3>
            <ul className="space-y-3">
              {expertList.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-text-on-light/70 text-sm md:text-base"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-text-on-light/40 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-[4/3] lg:aspect-auto bg-zinc-300 order-1 lg:order-2">
            <Image
              src="/images/program/approach-02.jpg"
              alt="해부학 전문가와 협업하는 발성 교육"
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
