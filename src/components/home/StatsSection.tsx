"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import CountUp from "@/components/animations/CountUp";

const stats = [
  { label: "운영기간", value: 9, suffix: "년", sublabel: "" },
  { label: "만족도", value: 98, suffix: "%", sublabel: "" },
  { label: "누적 수강후기", value: 1500, suffix: "개+", sublabel: "일반인 대상 보컬학원 중 최다" },
  { label: "누적 수강생", value: 7000, suffix: "명+", sublabel: "실력 향상을 보장하는 시스템" },
  { label: "누적 보컬레슨 시간", value: 595680, suffix: "+", sublabel: "압도적인 노하우" },
];

export default function StatsSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background: classroom image */}
      <div className="absolute inset-0">
        <Image
          src="/images/stats/bg.png"
          alt="3옥타브장인 보컬학원 강의실"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 items-start">
          {/* Left: Question */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-snug">
              고음이 안 되던<br />
              수많은 사람들은<br />
              <span className="text-accent underline decoration-accent underline-offset-4">왜 3옥타브장인</span>을<br />
              찾았을까요?
            </h2>
          </motion.div>

          {/* Right: Stats */}
          <div className="flex flex-col gap-8">
            {/* Top row: 2 stats */}
            <div className="grid grid-cols-2 gap-8">
              {stats.slice(0, 2).map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                >
                  <span className="text-gray-400 text-xs md:text-sm">{stat.label}</span>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="font-bold text-4xl md:text-5xl text-white">
                      <CountUp end={stat.value} suffix="" />
                    </span>
                    <span className="text-white text-lg md:text-xl">{stat.suffix}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Remaining stats */}
            {stats.slice(2).map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                <span className="text-gray-400 text-xs md:text-sm">{stat.label}</span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="font-bold text-4xl md:text-5xl lg:text-6xl text-white">
                    <CountUp end={stat.value} suffix="" />
                  </span>
                  <span className="text-white text-lg md:text-xl">{stat.suffix}</span>
                  {stat.sublabel && (
                    <span className="text-gray-400 text-xs md:text-sm ml-2">{stat.sublabel}</span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
