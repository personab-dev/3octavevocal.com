"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronRight, Check } from "lucide-react";

const personas = [
  {
    badge: "BASIC",
    title: "노래가 처음이거나,\n기본기가 부족한 분",
    checklist: [
      "노래방에서 목이 금방 잠긴다",
      "고음만 나오면 목이 조인다",
      "음정·박자가 자꾸 흔들린다",
      "발성을 제대로 배워본 적이 없다",
    ],
    solution: "호흡·공명·성대 컨트롤부터 탄탄하게",
    href: "/basic",
    label: "기본 과정 보기",
  },
  {
    badge: "ADVANCED",
    title: "기본기는 있지만,\n노래에 적용이 안 되는 분",
    checklist: [
      "발성은 배웠는데 노래에 적용이 안 된다",
      "음역대가 제자리걸음이다",
      "감정 표현이 밋밋하다는 말을 듣는다",
      "좋아하는 곡을 원키로 부르고 싶다",
    ],
    solution: "음역대 확장·곡 해석·장르 스타일링까지",
    href: "/advanced",
    label: "심화 과정 보기",
  },
];

export default function PersonaSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section ref={ref} className="bg-black py-20 lg:py-28">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="font-display text-sm tracking-[0.2em] text-gray-500 mb-3">
            FIND YOUR FIT
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            당신은 <span className="text-accent">어디에</span> 해당하시나요?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {personas.map((persona, index) => (
            <motion.div
              key={persona.badge}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
              className="border border-white/10 hover:border-accent/50 transition-colors duration-300 p-8 lg:p-10 flex flex-col"
            >
              <span className="inline-block self-start text-xs font-bold tracking-widest text-accent border border-accent/30 px-3 py-1 mb-5">
                {persona.badge}
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-white whitespace-pre-line leading-snug mb-6">
                {persona.title}
              </h3>

              <ul className="space-y-3 mb-6">
                {persona.checklist.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-gray-400 text-sm md:text-base"
                  >
                    <Check
                      size={16}
                      className="text-accent shrink-0 mt-0.5"
                    />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="w-full h-[1px] bg-white/10 mb-5" />

              <p className="text-white text-sm md:text-base font-bold mb-6">
                {persona.solution}
              </p>

              <Link
                href={persona.href}
                className="mt-auto inline-flex items-center gap-1 text-accent text-sm md:text-base font-bold group"
              >
                {persona.label}
                <ChevronRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
