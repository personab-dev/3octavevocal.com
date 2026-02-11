"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const courses = [
  {
    title: "기본과정",
    href: "/program/basic",
    description: "발성의 기본 — 호흡, 공명, 성대 컨트롤, 피치",
  },
  {
    title: "심화과정",
    href: "/program/advanced",
    description: "노래 적용 — 음역대 확장, 곡 해석, 감정 표현",
  },
];

export default function CourseCardsSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="bg-black py-20 lg:py-28">
      <div className="max-w-5xl mx-auto px-6">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-6"
        >
          <p className="text-gray-400 text-sm md:text-base mb-3">
            현직 가수부터 일반인까지, <strong className="text-white">모두가 인정한 검증된 시스템</strong>
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            그 비결이 궁금하다면?
          </h2>
        </motion.div>

        {/* Course cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
            >
              <Link href={course.href} className="group block relative overflow-hidden">
                {/* Image placeholder */}
                <div className="aspect-[16/9] bg-zinc-800 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <span className="absolute inset-0 flex items-center justify-center text-zinc-600 text-xs tracking-widest uppercase">
                    {course.title} 레슨 이미지
                  </span>

                  {/* CTA overlay */}
                  <div className="absolute bottom-6 right-6">
                    <span className="inline-flex items-center gap-2 bg-accent text-white px-5 py-3 text-sm font-bold group-hover:bg-white group-hover:text-black transition-all duration-300">
                      {course.title}
                      <svg width="14" height="10" viewBox="0 0 14 10" fill="none" className="transition-transform group-hover:translate-x-1">
                        <path d="M9 1L13 5L9 9M0 5H13" stroke="currentColor" strokeWidth="1.5" />
                      </svg>
                    </span>
                  </div>
                </div>

                <p className="mt-3 text-gray-400 text-sm">{course.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-center mt-12 text-sm md:text-base text-gray-400"
        >
          <span className="text-accent underline underline-offset-4">동종 업계에서도 참고</span>하는 커리큘럼,{" "}
          <span className="text-white underline underline-offset-4">보컬 트레이너들</span>도 배우러 옵니다.
        </motion.p>
      </div>
    </section>
  );
}
