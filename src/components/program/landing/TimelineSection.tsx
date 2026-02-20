"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const timeline = [
  {
    period: "1개월",
    badge: "BASIC",
    milestone: "올바른 호흡과 발성 원리를 이해하고, 목이 편해지는 것을 느낀다.",
  },
  {
    period: "2~3개월",
    badge: "BASIC",
    milestone: "고음이 조금씩 올라가고, 음정·박자가 안정된다.",
  },
  {
    period: "4~5개월",
    badge: "ADVANCED",
    milestone: "좋아하는 곡을 원키로 소화하고, 곡 해석·감정 표현이 가능해진다.",
  },
  {
    period: "6개월+",
    badge: "ADVANCED",
    milestone: "장르 스타일링까지 자유자재. 주변에서 '노래 잘한다'는 말을 듣는다.",
  },
];

export default function TimelineSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section ref={ref} className="bg-black py-20 lg:py-28">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="font-display text-sm tracking-[0.2em] text-gray-500 mb-3">
            GROWTH ROADMAP
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            당신의 <span className="text-accent">성장</span> 로드맵
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-[2px] bg-white/10" />

          <div className="space-y-10">
            {timeline.map((item, index) => (
              <motion.div
                key={item.period}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
                className="relative pl-12 md:pl-16"
              >
                {/* Dot */}
                <div className="absolute left-2.5 md:left-4.5 top-1 w-3 h-3 rounded-full bg-accent border-2 border-black" />

                <div className="flex items-center gap-3 mb-2">
                  <span className="text-white font-bold text-lg md:text-xl">
                    {item.period}
                  </span>
                  <span
                    className={`text-[10px] font-bold tracking-widest px-2 py-0.5 ${
                      item.badge === "BASIC"
                        ? "bg-white/10 text-white"
                        : "bg-accent/20 text-accent"
                    }`}
                  >
                    {item.badge}
                  </span>
                </div>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                  {item.milestone}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
