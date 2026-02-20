"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronRight, Check } from "lucide-react";

const instructorPoints = [
  "6개월 이상 자체교육을 거친 정직원 강사만 수업",
  "원장의 직접 수업 모니터링 & 피드백 시스템",
  "수강생 실력 향상이 곧 강사 평가 기준",
];

export default function InstructorSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section ref={ref} className="bg-white py-20 lg:py-28">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="font-display text-sm tracking-[0.2em] text-text-on-light/40 mb-3">
              INSTRUCTORS
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-on-light leading-snug mb-6">
              <span className="text-accent">아무나</span> 가르칠 수 없습니다
            </h2>
            <p className="text-text-on-light/60 text-base md:text-lg leading-relaxed mb-8">
              수업의 질은 강사의 실력에서 결정됩니다. 3옥타브장인은 아무나
              가르칠 수 없도록 만들었습니다.
            </p>

            <ul className="space-y-4">
              {instructorPoints.map((point, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-3 text-text-on-light text-sm md:text-base"
                >
                  <span className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={14} className="text-accent" />
                  </span>
                  {point}
                </motion.li>
              ))}
            </ul>

            <Link
              href="/difference"
              className="inline-flex items-center gap-1 text-accent text-sm md:text-base font-bold mt-8 group"
            >
              차별점 자세히 알아보기
              <ChevronRight
                size={14}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </motion.div>

          {/* Right: placeholder image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="aspect-[4/3] bg-gray-100 flex items-center justify-center"
          >
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-200 flex items-center justify-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-gray-400"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <p className="text-gray-400 text-sm">강사진 이미지</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
