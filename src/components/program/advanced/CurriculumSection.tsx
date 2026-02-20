"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const advancedCurriculum = [
  {
    number: "01",
    title: "호흡과 감정의 조화",
    subtitle: "BREATH & EMOTION",
    bullets: [
      "힘 빼고 고음 내는 '호흡 컨트롤'",
      "감정을 표현하는 호흡 활용법",
      "듣는 이를 사로잡는 안정적인 발성 & 호흡 테크닉",
    ],
  },
  {
    number: "02",
    title: "가사 전달의 기술",
    subtitle: "LYRIC DELIVERY",
    bullets: [
      "'국어책 읽기'가 아닌, 감정을 전달하는 보컬 테크닉",
      "프로들이 쓰는 딕션 디테일",
      "전달력을 3배 업그레이드 시켜주는 딕션 활용법",
      "듣는 순간 몰입되는 감정 표현법",
    ],
  },
  {
    number: "03",
    title: "실전 음악성 강화",
    subtitle: "PRACTICAL MUSICALITY",
    bullets: [
      "밴딩, 비브라토, 애드립 등 프로들이 쓰는 실전 테크닉",
      "'듣는 귀'를 키워, 어떤 곡도 쉽게 소화하는 트레이닝",
      "'내 목소리'에 색깔을 더하는 음색 컨트롤",
    ],
  },
];

export default function CurriculumSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section ref={ref} className="bg-white py-20 lg:py-28">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-text-on-light/50 text-sm mb-3 tracking-widest uppercase">
            Curriculum
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-on-light">
            고음과 테크닉을 동시에 잡는
            <br />
            <span className="text-accent">심화 과정</span> 커리큘럼
          </h2>
        </motion.div>

        {/* Desktop: horizontal stepper line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="hidden md:flex items-center justify-center mb-14"
        >
          {advancedCurriculum.map((item, index) => (
            <div key={item.number} className="flex items-center">
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-accent text-white text-sm font-bold flex items-center justify-center">
                  {item.number}
                </span>
                <span className="text-sm font-bold text-text-on-light">
                  {item.title}
                </span>
              </div>
              {index < advancedCurriculum.length - 1 && (
                <div className="w-16 lg:w-24 h-[2px] bg-gray-200 mx-4" />
              )}
            </div>
          ))}
        </motion.div>

        {/* 3 Curriculum Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {advancedCurriculum.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.12 }}
              className="relative overflow-hidden group"
            >
              {/* Dark card with accent gradient on hover */}
              <div className="bg-zinc-900 p-8 lg:p-9 h-full border border-transparent group-hover:border-accent/30 transition-colors duration-300">
                {/* Number badge */}
                <span className="absolute top-5 right-6 font-display text-6xl text-white/5 group-hover:text-accent/10 transition-colors duration-300 leading-none select-none pointer-events-none">
                  {item.number}
                </span>

                <p className="text-accent text-[10px] font-bold tracking-widest mb-2 relative z-10">
                  {item.subtitle}
                </p>
                <h3 className="text-xl font-bold text-white mb-3 relative z-10">
                  {item.title}
                </h3>
                <div className="w-10 h-[2px] bg-accent mb-5" />

                {/* Bullet points */}
                <ul className="space-y-3 relative z-10">
                  {item.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-2.5 text-sm text-gray-400 leading-relaxed"
                    >
                      <span className="w-1 h-1 bg-accent rounded-full shrink-0 mt-2" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
