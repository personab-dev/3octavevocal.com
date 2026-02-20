"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronRight } from "lucide-react";

const comparisonRows = [
  {
    label: "대상",
    basic: "노래 초보 · 발성을 배워본 적 없는 분",
    advanced: "기본기는 있지만 노래 적용이 안 되는 분",
  },
  {
    label: "핵심 목표",
    basic: "올바른 발성 습관 형성",
    advanced: "실전 노래 실력 완성",
  },
  {
    label: "배우는 내용",
    basic: "호흡 · 공명 · 성대 컨트롤 · 피치",
    advanced: "음역대 확장 · 곡 해석 · 감정 표현 · 장르 스타일링",
  },
  {
    label: "수업 후 변화",
    basic: "목이 편해지고, 고음이 가능해진다",
    advanced: "좋아하는 곡을 원키로, 감정까지 담아 부른다",
  },
  {
    label: "추천 대상",
    basic: "음치 · 고음불가 · 노래방 공포증",
    advanced: "음역대 정체 · 감정 표현 부족 · 원키 도전",
  },
];

export default function ComparisonSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section ref={ref} className="bg-zinc-900 py-20 lg:py-28">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="font-display text-sm tracking-[0.2em] text-gray-500 mb-3">
            COMPARE
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            어떤 과정이 <span className="text-accent">나에게</span> 맞을까?
          </h2>
        </motion.div>

        {/* Desktop table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden md:block"
        >
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="w-1/5 p-4 text-left text-sm text-gray-500 border-b border-white/10" />
                <th className="w-2/5 p-4 text-left border-b border-white/10">
                  <span className="text-accent text-sm font-bold tracking-widest">
                    BASIC
                  </span>
                  <p className="text-white font-bold mt-1">기본 과정</p>
                </th>
                <th className="w-2/5 p-4 text-left border-b border-white/10">
                  <span className="text-accent text-sm font-bold tracking-widest">
                    ADVANCED
                  </span>
                  <p className="text-white font-bold mt-1">심화 과정</p>
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.label}>
                  <td className="p-4 text-sm font-bold text-gray-400 border-b border-white/5 align-top">
                    {row.label}
                  </td>
                  <td className="p-4 text-sm md:text-base text-gray-300 border-b border-white/5 align-top">
                    {row.basic}
                  </td>
                  <td className="p-4 text-sm md:text-base text-gray-300 border-b border-white/5 align-top">
                    {row.advanced}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Mobile card stack */}
        <div className="md:hidden space-y-6">
          {[
            { badge: "BASIC", title: "기본 과정", key: "basic" as const },
            { badge: "ADVANCED", title: "심화 과정", key: "advanced" as const },
          ].map((course, idx) => (
            <motion.div
              key={course.badge}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + idx * 0.15 }}
              className="border border-white/10 p-6"
            >
              <span className="text-accent text-xs font-bold tracking-widest">
                {course.badge}
              </span>
              <p className="text-white font-bold text-lg mt-1 mb-4">
                {course.title}
              </p>
              <dl className="space-y-4">
                {comparisonRows.map((row) => (
                  <div key={row.label}>
                    <dt className="text-xs font-bold text-gray-500 mb-1">
                      {row.label}
                    </dt>
                    <dd className="text-sm text-gray-300">
                      {row[course.key]}
                    </dd>
                  </div>
                ))}
              </dl>
            </motion.div>
          ))}
        </div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12"
        >
          <Link
            href="/basic"
            className="inline-flex items-center gap-2 border border-accent text-accent hover:bg-accent hover:text-white px-7 py-3.5 text-base font-bold transition-all duration-300"
          >
            기본 과정 상세보기
            <ChevronRight size={16} />
          </Link>
          <Link
            href="/advanced"
            className="inline-flex items-center gap-2 border border-accent text-accent hover:bg-accent hover:text-white px-7 py-3.5 text-base font-bold transition-all duration-300"
          >
            심화 과정 상세보기
            <ChevronRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
