"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Wind, Mic, Music } from "lucide-react";

/* ── Data ─────────────────────────────────────────── */

const curriculumDetails = [
  {
    number: "01",
    title: "호흡",
    subtitle: "고음이 뚫리는 기본기",
    icon: Wind,
    items: [
      "기초 호흡법 (안정적인 호흡 조절)",
      "호흡 밸런스 훈련 (불필요한 힘 빼고, 필요한 힘만 쓰는 법)",
      "호흡근 강화 (숨이 차지 않고 지치지 않는 가창력)",
      "호흡 컨트롤 (호흡 사용 최적화)",
    ],
  },
  {
    number: "02",
    title: "위치",
    subtitle: "소리를 컨트롤하는 핵심 기술",
    icon: Mic,
    items: [
      "소리의 위치 이해 (답답한 소리를 시원하게 변환)",
      "성대 컨트롤 (같은 고음도 강하게&부드럽게, 원하는대로!)",
      "톤 & 감정 (단순한 발음이 아닌, 감정이 묻어나는 소리 만들기)",
      "모음/자음 발음 교정 (가사가 또렷하게 전달되는 선명한 발성)",
      "목에 힘빼기 & 공명 훈련 (힘으로 밀지 않아도 뚫리는 고음)",
    ],
  },
  {
    number: "03",
    title: "피치",
    subtitle: "초고음까지 음역대를 확장하는 기술",
    icon: Music,
    items: [
      "고음 확장 (힘으로 밀지 않아도 시원하게 올라가는 고음)",
      "성구 전환 & 통합 (저음에서 고음을 이질감 없이 넘나들 수 있다!)",
      "고음 컨트롤 능력 강화 (성대를 보호하면서 초고음까지 음역대 확장)",
    ],
  },
];

/* ── Component ────────────────────────────────────── */

export default function CurriculumSection() {
  const currRef = useRef<HTMLElement>(null);
  const currInView = useInView(currRef, { once: true, amount: 0.1 });

  return (
    <section ref={currRef} className="bg-white py-20 lg:py-28">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={currInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-text-on-light/50 text-sm mb-3 tracking-widest">
            매달 1키씩 올라가는 마법 같은 커리큘럼
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-on-light">
            3옥타브장인만의{" "}
            <span className="text-accent">기본과정</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {curriculumDetails.map((cur, index) => {
            const Icon = cur.icon;
            return (
              <motion.div
                key={cur.number}
                initial={{ opacity: 0, y: 30 }}
                animate={currInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.12 }}
                className="bg-zinc-900 p-8 lg:p-10 border border-transparent hover:border-accent transition-colors duration-300 group"
              >
                <Icon
                  size={32}
                  className="text-white/30 group-hover:text-accent transition-colors duration-300 mb-5"
                />
                <span className="font-display text-4xl text-accent leading-none">
                  {cur.number}
                </span>
                <h3 className="text-xl font-bold text-white mt-3 mb-1">
                  {cur.title}
                </h3>
                <p className="text-gray-500 text-sm mb-6">
                  {cur.subtitle}
                </p>
                <div className="w-8 h-[2px] bg-accent/40 mb-6" />
                <ul className="space-y-3">
                  {cur.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-gray-400 text-sm leading-relaxed"
                    >
                      <span className="w-1 h-1 rounded-full bg-accent shrink-0 mt-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
