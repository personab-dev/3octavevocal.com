"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";

const courses = [
  {
    title: "기본과정",
    subtitle: "BASIC",
    href: "/basic",
    description: "발성의 기본 — 호흡, 공명, 성대 컨트롤, 피치",
    keywords: ["호흡", "공명", "성대 컨트롤", "피치 교정"],
    step: "01",
  },
  {
    title: "심화과정",
    subtitle: "ADVANCED",
    href: "/advanced",
    description: "노래 적용 — 음역대 확장, 곡 해석, 감정 표현",
    keywords: ["음역대 확장", "곡 해석", "감정 표현", "스타일링"],
    step: "02",
  },
];

export default function CourseCardsSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="bg-black py-24 lg:py-36">
      <div className="max-w-6xl mx-auto px-6">
        {/* Headline */}
        <SectionHeader
          label="현직 가수부터 일반인까지, 모두가 인정한 검증된 시스템"
          heading="그 비결이 궁금하다면?"
          theme="dark"
          className="mb-8"
        />

        {/* Course cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-14">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
            >
              <Link
                href={course.href}
                className="group block relative border border-zinc-800 hover:border-accent/60 transition-colors duration-500 p-8 md:p-10"
              >
                {/* Step number */}
                <span className="text-[80px] md:text-[100px] font-black leading-none text-zinc-800 group-hover:text-accent/20 transition-colors duration-500 select-none">
                  {course.step}
                </span>

                {/* Title area */}
                <div className="mt-4">
                  <span className="text-xs tracking-[0.25em] text-zinc-500 font-medium">
                    {course.subtitle}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mt-1 group-hover:text-accent transition-colors duration-300">
                    {course.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="mt-4 text-gray-400 text-base md:text-lg leading-relaxed">
                  {course.description}
                </p>

                {/* Keywords */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {course.keywords.map((keyword) => (
                    <span
                      key={keyword}
                      className="text-sm text-zinc-400 border border-zinc-700 px-3 py-1 group-hover:border-zinc-600 transition-colors"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-8 inline-flex items-center gap-2 text-accent text-base font-semibold group-hover:gap-3 transition-all duration-300">
                  자세히 보기
                  <svg
                    width="14"
                    height="10"
                    viewBox="0 0 14 10"
                    fill="none"
                    className="transition-transform group-hover:translate-x-1"
                  >
                    <path
                      d="M9 1L13 5L9 9M0 5H13"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-center mt-14 text-lg md:text-xl text-gray-400"
        >
          <span className="text-accent underline underline-offset-4">동종 업계에서도 참고</span>하는 커리큘럼,{" "}
          <span className="text-white underline underline-offset-4">보컬 트레이너들</span>도 배우러 옵니다.
        </motion.p>
      </div>
    </section>
  );
}
