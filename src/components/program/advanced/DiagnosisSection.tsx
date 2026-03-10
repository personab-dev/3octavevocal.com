"use client";

import { useRef, useState, useCallback } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Check, ChevronRight } from "lucide-react";

const diagnosisItems = [
  "기본 발성법을 알지만, 노래에 적용이 잘 안되는 것 같아요.",
  "고음은 올라가는데, 주변에서 '노래 잘한다'는 칭찬은 못 들어본 것 같아요.",
  "가수처럼 바이브레이션이나 기교를 멋지게 넣어보고 싶은데, 내가 하면 뭔가 어색해요.",
  "가수처럼 '잘' 부르려면 어떻게 해야 될지 잘 모르겠어요.",
  "프로 가수들이 쓰는 테크닉과 스킬을 배우고 싶어요.",
  "좋아하는 가수의 노래를 불러도 뭔가 밋밋하고 이상한 것 같아요.",
  "내 노래를 녹음해서 들어보면 아마추어 티가 나는 것 같아요.",
  "내 보컬 스타일이 어떤 건지 잘 모르겠어요.",
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
            <span className="text-accent">[내 노래 실력 체크]</span>
            <br />
            내 노래가 2% 부족하게 들리는
            이유는?
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
            <p className="text-white font-bold text-base md:text-lg mb-4 max-w-xl mx-auto leading-relaxed">
              <span className="text-accent">3개 이상</span> 체크되셨다면, 혼자
              답답해하지 말고 진단을 받아보세요. 커리큘럼을 알아보고 수강
              방향성을 잡고 싶다면 일반 상담을, 내 발성의 한계를 정확히 분석하고
              솔루션을 얻고 싶다면 심층 보컬 진단을 받아보세요!
            </p>
            <Link
              href="/contact"
              onClick={() => {
                const checkedItems = diagnosisItems.filter((_, i) => checked.has(i));
                sessionStorage.setItem(
                  "vocalDiagnosis",
                  JSON.stringify({ source: "advanced", items: checkedItems })
                );
              }}
              className="group cta-shimmer inline-flex items-center gap-2 bg-accent text-white hover:bg-accent/90 rounded-full px-8 py-4 text-base font-bold shadow-lg shadow-accent/25 hover:shadow-accent/35 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              내 상태에 맞는 진단 &amp; 상담 받기
              <ChevronRight size={16} className="transition-transform duration-300 group-hover:translate-x-1.5" />
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
