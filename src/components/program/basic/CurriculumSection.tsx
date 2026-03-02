"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Wind, Mic, Music } from "lucide-react";

/* ── Data ─────────────────────────────────────────── */

const curriculumDetails = [
  {
    number: "01",
    title: "호흡",
    subtitle: "숨만 잘 쉬어도 고음이 뚫립니다",
    icon: Wind,
    description:
      "노래 한 곡만 불러도 목이 쉬고 숨이 차나요? 가슴으로 얕게 쉬는 호흡을 몸 전체를 채우는 깊은 호흡으로 바꿔드립니다. 목을 조이게 만드는 불필요한 힘이 빠지고, 편안하게 소리 내는 몸으로 바뀌게 됩니다.",
  },
  {
    number: "02",
    title: "위치",
    subtitle: "답답한 소리를 시원하게 꺼내드립니다",
    icon: Mic,
    description:
      "억지로 쥐어짜는 생목, 입안에서 웅얼거리는 발음, 조금만 방심해도 튀어나오는 삑사리. 소리가 울리는 '위치'만 제대로 잡아줘도 내 목소리가 막힘없이 시원하게 뻗어나갑니다.",
  },
  {
    number: "03",
    title: "피치",
    subtitle: "내 목소리의 한계를 깨는 성구 전환",
    icon: Music,
    description:
      "저음과 고음을 끊김 없이 부드럽게 연결하는 '성구 전환'이 가능하게 만들어 줍니다. 이후에 성구를 통합하게 되면 3옥타브까지 시원하게 소리낼 수 있게 됩니다.",
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
            매달 1키씩 올라가는 마법, 누구나 바뀔 수 밖에 없는 3옥타브장인만의 3단계 기초 발성 커리큘럼
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-on-light">
            &apos;고음불가&apos; 출신들이 몸으로 부딪혀 찾아낸{" "}
            <span className="text-accent">가장 확실한 방법</span>
          </h2>
          <p className="text-text-on-light/60 text-base md:text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
            7,000명 이상의 수강생 데이터가 증명합니다. 타고나지 않아도, 어떤 케이스라도 변화시킬 수 있는 솔루션이 준비되어 있습니다.
          </p>
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
                <p className="text-gray-400 text-sm leading-relaxed">
                  {cur.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
