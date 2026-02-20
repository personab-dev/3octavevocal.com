"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronRight } from "lucide-react";

const programs = [
  {
    step: "STEP 1",
    title: "기본 과정",
    titleEn: "BASIC",
    description:
      "발성 기본기, 호흡, 공명, 성대 컨트롤. 완전 초보자도 부담 없이 시작할 수 있는 체계적 발성 트레이닝.",
    items: ["호흡", "공명", "성대 컨트롤", "피치"],
    href: "/basic",
  },
  {
    step: "STEP 2",
    title: "심화 과정",
    titleEn: "ADVANCED",
    description:
      "기초 발성을 실제 노래에 적용. 음역대 확장, 곡 해석, 감정 표현, 장르별 스타일링까지.",
    items: ["노래 적용", "음역대 확장", "곡 해석 & 감정 표현", "장르 스타일링"],
    href: "/advanced",
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
          className="text-center mb-12"
        >
          <p className="font-display text-sm tracking-[0.2em] text-text-on-light/40 mb-3">
            2-STEP CURRICULUM
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-on-light">
            체계적인 <span className="text-accent">2단계</span> 커리큘럼
          </h2>
          <p className="text-text-on-light/60 text-base md:text-lg mt-4 max-w-2xl mx-auto">
            음치, 고음불가 일반인부터 프로 가수까지 모두 동일한 레슨 과정을 통해
            단계별로 성장할 수 있도록 설계되었습니다.
          </p>
        </motion.div>

        {/* Progress bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="hidden md:flex items-center justify-center gap-0 mb-14"
        >
          {programs.map((program, index) => (
            <div key={program.step} className="flex items-center">
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-accent text-white text-sm font-bold flex items-center justify-center">
                  {index + 1}
                </span>
                <span className="text-sm font-bold text-text-on-light">
                  {program.title}
                </span>
              </div>
              {index < programs.length - 1 && (
                <div className="w-16 lg:w-24 h-[2px] bg-gray-200 mx-4" />
              )}
            </div>
          ))}
        </motion.div>

        <div className="space-y-6 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-6">
          {programs.map((program, index) => (
            <motion.div
              key={program.step}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
            >
              <Link
                href={program.href}
                className="block border border-gray-200 hover:border-accent transition-colors duration-300 p-8 lg:p-10 h-full group"
              >
                <p className="text-accent text-sm font-bold tracking-widest mb-2">
                  {program.step}
                </p>
                <p className="font-display text-3xl text-text-on-light/10 tracking-[0.1em] mb-1">
                  {program.titleEn}
                </p>
                <h3 className="text-xl font-bold text-text-on-light mb-4">
                  {program.title}
                </h3>

                <div className="w-12 h-[2px] bg-accent mb-4" />

                <p className="text-text-on-light/60 text-sm md:text-base leading-relaxed mb-6">
                  {program.description}
                </p>

                <ul className="space-y-2 mb-8">
                  {program.items.map((item) => (
                    <li
                      key={item}
                      className="text-text-on-light/50 text-sm md:text-base flex items-center gap-2"
                    >
                      <span className="w-1 h-1 bg-accent rounded-full shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-1 text-accent text-sm md:text-base font-bold group-hover:gap-2 transition-all duration-300">
                  자세히 보기
                  <ChevronRight size={14} />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
