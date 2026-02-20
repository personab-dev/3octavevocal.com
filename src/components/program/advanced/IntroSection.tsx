"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { ChevronRight } from "lucide-react";

const painPoints = [
  "고음은 나오는데 왜 감동이 없을까?",
  "왜 2% 부족한 느낌일까?",
  "소리는 괜찮은데, 왜 이렇게 밋밋할까?",
];

export default function IntroSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section ref={ref} className="bg-black py-20 lg:py-28">
      <div className="max-w-5xl mx-auto px-6">
        {/* Pain point speech bubbles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-14"
        >
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.15 }}
              className="relative bg-zinc-800/80 backdrop-blur-sm px-5 py-3 text-gray-300 text-sm md:text-base"
            >
              {point}
              {/* Speech bubble tail */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[8px] border-l-transparent border-r-transparent border-t-zinc-800/80 sm:block hidden" />
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <p className="text-accent text-sm md:text-base font-bold tracking-widest uppercase mb-4">
              Beyond High Notes
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-snug mb-6">
              고음만 잘 내는 게 아닌,
              <br />
              <span className="text-accent">
                듣는 사람의 마음을 움직이는 보컬
              </span>
              로
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6">
              듣는 순간 소름 돋는 노래엔{" "}
              <span className="text-white font-bold">결정적 차이</span>가
              있습니다. 올바른 발성 위에 테크닉과 감정 표현을 더해야 비로소
              &lsquo;잘 부른다&rsquo;는 소리를 듣게 됩니다.
            </p>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8">
              심화 과정은 기본 과정에서 완성한 발성을{" "}
              <span className="text-white font-bold">
                실제 노래에 적용하고, 자신만의 보컬 스타일
              </span>
              을 만들어가는 과정입니다. 호흡과 감정의 조화, 가사 전달력,
              실전 음악성까지 체계적으로 배웁니다.
            </p>
            <Link
              href="/basic"
              className="inline-flex items-center gap-1 text-gray-500 hover:text-accent text-sm transition-colors group"
            >
              기본 과정부터 보기
              <ChevronRight
                size={14}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative"
          >
            <div className="aspect-[3/4] bg-zinc-900 relative overflow-hidden max-w-[380px] mx-auto">
              <Image
                src="/images/program/asset-advanced.png"
                alt="심화 보컬 트레이닝"
                fill
                sizes="(max-width: 1024px) 100vw, 380px"
                className="object-contain"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
