"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Check, ChevronRight } from "lucide-react";

const targetChecklist = [
  "기본 발성은 되는데, 노래에 적용이 안 된다",
  "고음은 나오지만 듣기 좋은 소리가 아니다",
  "감정 전달이 어렵고, 밋밋한 노래가 된다",
  "자신만의 보컬 스타일을 찾고 싶다",
  "실용음악 입시나 오디션을 준비 중이다",
  "프로 가수/뮤지컬 배우로 한 단계 성장하고 싶다",
];

export default function TargetSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section ref={ref} className="bg-black py-20 lg:py-28">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="font-display text-sm tracking-[0.2em] text-gray-500 mb-3">
            FOR YOU
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            이런 분들을 위한{" "}
            <span className="text-accent">과정입니다</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {targetChecklist.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.08 }}
              className="flex items-start gap-4 p-5 border border-white/10 hover:border-accent/50 transition-colors duration-300 group"
            >
              <div className="w-7 h-7 shrink-0 bg-accent/20 group-hover:bg-accent flex items-center justify-center transition-colors duration-300 mt-0.5">
                <Check
                  size={14}
                  className="text-accent group-hover:text-white transition-colors duration-300"
                />
              </div>
              <p className="text-white text-sm md:text-base">{item}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-10"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-accent text-white hover:bg-accent/90 rounded-r-full px-7 py-3.5 text-base font-bold transition-all duration-300"
          >
            무료 상담 문의하기
            <ChevronRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
