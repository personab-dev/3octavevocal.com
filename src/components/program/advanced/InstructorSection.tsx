"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ChevronRight } from "lucide-react";

const promiseCards = [
  {
    title: "자유로운 피드백 시스템",
    desc: "수업이 없는 시간에도, 모든 선생님께 피드백이 가능합니다.",
    detail:
      "담당 강사 한 명이 아닌 전 강사진이 수강생의 성장에 참여합니다. 궁금한 점이 생기면 언제든 질문하고, 언제든 피드백을 받을 수 있습니다.",
  },
  {
    title: "동일한 퀄리티로 일관된 보컬 교육",
    desc: "본원의 모든 선생님이 같은 커리큘럼으로 가르칩니다.",
    detail:
      "6개월 이상 자체교육을 이수한 정직원 강사만 수업합니다. 원장의 직접 모니터링으로 어떤 선생님이든 동일한 수업 퀄리티를 보장합니다.",
  },
];

export default function InstructorSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section ref={ref} className="bg-zinc-900 py-20 lg:py-28">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-6"
        >
          <p className="font-display text-sm tracking-[0.2em] text-gray-500 mb-3">
            INSTRUCTORS
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-snug">
            3옥타브장인이 보장하는{" "}
            <span className="text-accent">최정예 강사진</span>
          </h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-gray-400 text-base md:text-lg text-center max-w-xl mx-auto mb-14"
        >
          한 명의 선생님이 아닌,{" "}
          <span className="text-white font-bold">
            모든 선생님이 당신의 성장
          </span>
          을 돕습니다.
        </motion.p>

        {/* 2 Promise Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {promiseCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
              className="relative overflow-hidden group"
            >
              {/* Card with image placeholder background */}
              <div className="bg-black relative min-h-[280px] md:min-h-[320px] flex flex-col justify-end p-8 lg:p-10">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30 z-10" />
                {/* Placeholder background */}
                <div className="absolute inset-0 bg-zinc-800">
                  <div className="absolute inset-0 flex items-center justify-center opacity-20">
                    <svg
                      width="64"
                      height="64"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="1"
                    >
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                </div>
                {/* Content */}
                <div className="relative z-20">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                    {card.title}
                  </h3>
                  <p className="text-accent text-sm font-bold mb-3">
                    {card.desc}
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {card.detail}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-10"
        >
          <Link
            href="/difference"
            className="inline-flex items-center gap-1 text-accent text-sm md:text-base font-bold group"
          >
            차별점 자세히 알아보기
            <ChevronRight
              size={14}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
