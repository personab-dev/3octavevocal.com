"use client";

import { useRef, useState, useCallback } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Check, ChevronRight } from "lucide-react";

const diagnosisItems = [
  "노래할 때 목이 금방 피로해진다",
  "고음에서 소리가 얇아지거나 꺾인다",
  "발성은 배웠는데 노래에 적용이 안 된다",
  "감정 전달이 밋밋하다는 말을 듣는다",
  "음역대가 6개월째 제자리걸음이다",
  "좋아하는 곡을 원키로 못 부른다",
  "자신만의 보컬 스타일이 없다",
  "레코딩하면 생각보다 못 부른다",
];

export default function DiagnosisSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [checked, setChecked] = useState<Set<number>>(new Set());

  const toggle = useCallback((index: number) => {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  }, []);

  const count = checked.size;
  const showCta = count >= 3;

  return (
    <section ref={ref} className="bg-black py-20 lg:py-28">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-6"
        >
          <p className="font-display text-sm tracking-[0.2em] text-gray-500 mb-3">
            SELF CHECK
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            내 발성의 <span className="text-accent">문제</span>는 뭘까?
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-gray-400 text-base text-center mb-12"
        >
          해당하는 항목을 체크해 보세요.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {diagnosisItems.map((item, index) => {
            const isChecked = checked.has(index);
            return (
              <motion.button
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.15 + index * 0.05 }}
                onClick={() => toggle(index)}
                className={`flex items-center gap-3 p-4 text-left transition-all duration-300 border ${
                  isChecked
                    ? "border-accent bg-accent/5"
                    : "border-white/10 hover:border-white/20"
                }`}
              >
                <div
                  className={`w-5 h-5 shrink-0 flex items-center justify-center transition-all duration-300 ${
                    isChecked ? "bg-accent" : "border border-white/20"
                  }`}
                >
                  {isChecked && <Check size={12} className="text-white" />}
                </div>
                <span
                  className={`text-sm md:text-base transition-colors duration-300 ${
                    isChecked ? "text-white" : "text-gray-400"
                  }`}
                >
                  {item}
                </span>
              </motion.button>
            );
          })}
        </div>

        {/* Counter & CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-10 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="text-4xl md:text-5xl font-black text-accent">
              {count}
            </span>
            <span className="text-gray-400 text-sm md:text-base">
              / {diagnosisItems.length} 항목 체크
            </span>
          </div>

          <div
            className={`transition-all duration-500 ${
              showCta
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4 pointer-events-none"
            }`}
          >
            <p className="text-white font-bold text-base md:text-lg mb-4">
              <span className="text-accent">3개 이상</span> 체크되셨다면,
              <br className="md:hidden" /> 지금 당장 무료상담 받으세요.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-accent text-white hover:bg-accent/90 rounded-r-full px-7 py-3.5 text-base font-bold transition-all duration-300"
            >
              무료 상담 받기
              <ChevronRight size={16} />
            </Link>
          </div>

          {!showCta && (
            <p className="text-gray-600 text-sm">
              3개 이상 체크되면 무료상담을 추천드립니다.
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
