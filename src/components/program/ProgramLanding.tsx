"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import ProgramSubNav from "./ProgramSubNav";

const programs = [
  {
    step: "STEP 1",
    title: "기본 과정",
    titleEn: "BASIC",
    description:
      "발성 기본기, 호흡, 공명, 성대 컨트롤. 완전 초보자도 부담 없이 시작할 수 있는 체계적 발성 트레이닝.",
    items: ["호흡", "공명", "성대 컨트롤", "피치"],
    href: "/program/basic",
  },
  {
    step: "STEP 2",
    title: "심화 과정",
    titleEn: "ADVANCED",
    description:
      "기초 발성을 실제 노래에 적용. 음역대 확장, 곡 해석, 감정 표현, 장르별 스타일링까지.",
    items: ["노래 적용", "음역대 확장", "곡 해석 & 감정 표현", "장르 스타일링"],
    href: "/program/advanced",
  },
  {
    step: "STEP 3",
    title: "프로페셔널 과정",
    titleEn: "PROFESSIONAL",
    description:
      "완성도 높은 보컬 테크닉과 다양한 장르 스타일링. 프로 가수, 뮤지컬 배우를 위한 최상위 트레이닝.",
    items: ["고급 보컬 테크닉", "퍼포먼스", "레코딩 & 라이브", "아티스트 브랜딩"],
    href: "/contact",
  },
];

export default function ProgramLanding() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <>
      <PageHero
        heading="VOCAL CLASS"
        subheading="Exceed Your Range"
        description="음치, 고음불가 일반인부터 프로 가수까지 모두 동일한 레슨 과정"
      />
      <ProgramSubNav />

      {/* 3-Step Curriculum */}
      <section ref={ref} className="bg-black py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <p className="font-display text-sm tracking-[0.2em] text-gray-500 mb-3">
              3-STEP CURRICULUM
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
              체계적인{" "}
              <span className="text-accent">3단계</span> 커리큘럼
            </h2>
            <p className="text-gray-400 text-sm md:text-base mt-4 max-w-2xl mx-auto">
              음치, 고음불가 일반인부터 프로 가수까지 모두 동일한 레슨 과정을
              통해 단계별로 성장할 수 있도록 설계되었습니다.
            </p>
          </motion.div>

          <div className="space-y-6 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-6">
            {programs.map((program, index) => (
              <motion.div
                key={program.step}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
              >
                <Link
                  href={program.href}
                  className="block border border-white/10 hover:border-accent transition-colors duration-300 p-8 lg:p-10 h-full group"
                >
                  <p className="text-accent text-xs font-bold tracking-widest mb-2">
                    {program.step}
                  </p>
                  <p className="font-display text-3xl text-white/10 tracking-[0.1em] mb-1">
                    {program.titleEn}
                  </p>
                  <h3 className="text-xl font-bold text-white mb-4">
                    {program.title}
                  </h3>

                  <div className="w-12 h-[2px] bg-accent mb-4" />

                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {program.description}
                  </p>

                  <ul className="space-y-2 mb-8">
                    {program.items.map((item) => (
                      <li
                        key={item}
                        className="text-gray-500 text-sm flex items-center gap-2"
                      >
                        <span className="w-1 h-1 bg-accent rounded-full shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center gap-1 text-accent text-sm font-bold group-hover:gap-2 transition-all duration-300">
                    자세히 보기
                    <ChevronRight size={14} />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-accent py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, transparent, transparent 20px, white 20px, white 21px)",
            }}
          />
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <p className="text-white text-xl md:text-2xl lg:text-3xl font-bold mb-4">
            지금 시작하세요
          </p>
          <p className="text-white/80 text-sm md:text-base mb-8">
            단 10분, 첫 레슨만으로도 변화를 경험하세요.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-text-on-light hover:bg-black hover:text-white px-8 py-4 text-sm font-bold transition-all duration-300"
          >
            무료 상담 예약
          </Link>
        </div>
      </section>
    </>
  );
}
