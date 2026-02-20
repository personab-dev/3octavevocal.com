"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";

const courses = [
  {
    title: "기본과정",
    href: "/basic",
    description: "발성의 기본 — 호흡, 공명, 성대 컨트롤, 피치",
    image: "/images/courses/basic.png",
  },
  {
    title: "심화과정",
    href: "/advanced",
    description: "노래 적용 — 음역대 확장, 곡 해석, 감정 표현",
    image: "/images/courses/advanced.png",
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
              <Link href={course.href} className="group block relative overflow-hidden">
                <div className="aspect-[16/9] bg-zinc-800 relative overflow-hidden">
                  <Image
                    src={course.image}
                    alt={`${course.title} 레슨`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                  {/* CTA overlay */}
                  <div className="absolute bottom-6 right-6">
                    <span className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3.5 text-base md:text-lg font-bold group-hover:bg-white group-hover:text-black transition-all duration-300">
                      {course.title}
                      <svg width="14" height="10" viewBox="0 0 14 10" fill="none" className="transition-transform group-hover:translate-x-1">
                        <path d="M9 1L13 5L9 9M0 5H13" stroke="currentColor" strokeWidth="1.5" />
                      </svg>
                    </span>
                  </div>
                </div>

                <p className="mt-4 text-gray-400 text-base md:text-lg">{course.description}</p>
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
