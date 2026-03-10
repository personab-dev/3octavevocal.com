"use client";

import { useState, useCallback, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion, useInView } from "framer-motion";
import { Check } from "lucide-react";

const checkItems = [
  "1~2곡만 불러도 목이 금방 쉬거나 칼칼해진다.",
  "노래를 배워본 적이 없거나, 배워봤는데도 개선이 되지 않았다.",
  "고음 파트에서 삑사리(음이탈)나 갈라지는 목소리가 자주 나온다.",
  "시원하게 지르지 못하고, 억지로 생목을 쥐어짜서 부르는 느낌이 든다.",
  "숨이 모자라서 끝음이 바들바들 떨리거나 흐지부지 끝난다.",
  "남들이 다 부르는 평범한 노래도 원키로 부를 엄두가 나지 않는다.",
  "내 목소리가 너무 얇고 힘이 없다고 느껴지거나 마음에 들지 않는다.",
  "컨디션에 따라 내 노래 실력이 너무 심하게 차이가 난다.",
  "음역대 개선이 되지 않는다.",
  "내 문제를 해결하려면 어떻게 해야되는지 잘 모르겠다.",
];

export default function ChecklistSection() {
  const router = useRouter();
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
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-snug">
            <span className="text-accent">[내 발성 능력 테스트]</span>
            <br />
            나는 왜 노래 1~2곡만 불러도{" "}
            목이 아플까?
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
          {checkItems.map((item, index) => {
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
              / {checkItems.length} 항목 체크
            </span>
          </div>

          <div
            className={`transition-all duration-500 ${
              showCta
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4 pointer-events-none"
            }`}
          >
            <p className="text-white text-base md:text-lg mb-2 leading-relaxed">
              위 항목 중 <span className="text-accent font-bold">3개 이상</span>{" "}
              해당되시나요?
            </p>
            <p className="text-gray-400 text-sm md:text-base mb-6 max-w-lg mx-auto">
              목을 혹사시키는 나쁜 습관, 늦기 전에 고쳐야 합니다. 가볍게 상태를 체크하고 수강 방향성을 잡고 싶다면 일반 상담을, 바로 문제점을 확인하고 솔루션을 얻고 싶다면 심층 보컬 진단을 신청하세요!
            </p>
            <button
              type="button"
              onClick={() => {
                const checkedItems = checkItems.filter((_, i) => checked.has(i));
                sessionStorage.setItem(
                  "vocalDiagnosis",
                  JSON.stringify({ source: "basic", items: checkedItems })
                );
                router.push("/contact");
              }}
              className="group cta-shimmer inline-flex items-center gap-2 bg-accent text-white hover:bg-accent/90 rounded-full px-8 py-4 text-base font-bold shadow-lg shadow-accent/20 hover:shadow-accent/30 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              내 상태에 맞는 진단 &amp; 상담 받기
              <svg width="16" height="12" viewBox="0 0 16 12" fill="none" className="transition-transform duration-300 group-hover:translate-x-1.5">
                <path d="M10 1L15 6L10 11M0 6H15" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </button>
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
