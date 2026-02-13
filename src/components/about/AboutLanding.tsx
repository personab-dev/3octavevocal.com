"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import PageHero from "@/components/PageHero";
import BrandSymbol from "@/components/BrandSymbol";

const subPages = [
  {
    number: "01",
    title: "대표 철학",
    titleEn: "PHILOSOPHY",
    description:
      "고시원 달방에서 7년, 과학적 발성법을 연구한 김윤민 원장의 교육 철학.",
    href: "/philosophy",
  },
  {
    number: "02",
    title: "차별점",
    titleEn: "DIFFERENCE",
    description:
      "7,000명 이상의 수강생이 검증한 교육 효과. 3옥타브장인만의 차별화된 시스템.",
    href: "/difference",
  },
  {
    number: "03",
    title: "지점 찾기",
    titleEn: "LOCATIONS",
    description:
      "서울 강남, 인천 부평, 부산 서면. 가까운 지점을 찾아보세요.",
    href: "/locations",
  },
];

const coreValues = [
  {
    label: "CHALLENGE",
    ko: "도전",
    description: "기초 발성부터 체계적으로",
  },
  {
    label: "PATIENCE",
    ko: "끈기",
    description: "끈기 있는 단계별 트레이닝",
  },
  {
    label: "DREAM",
    ko: "꿈",
    description: "한계를 넘어 꿈의 보컬 실현",
  },
];

export default function AboutLanding() {
  const cardsRef = useRef<HTMLElement>(null);
  const cardsInView = useInView(cardsRef, { once: true, amount: 0.2 });
  const valuesRef = useRef<HTMLElement>(null);
  const valuesInView = useInView(valuesRef, { once: true, amount: 0.3 });

  return (
    <>
      <PageHero
        heading="ABOUT"
        subheading="Exceed Your Range"
        description="노래에 대한 꿈과 목표를 장인정신으로 실현시켜주는 발성 전문 보컬 트레이닝 학원"
        backgroundImage="/images/about/hero.png"
      />

      {/* Sub-page Cards */}
      <section ref={cardsRef} className="bg-white py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {subPages.map((page, index) => (
              <motion.div
                key={page.number}
                initial={{ opacity: 0, y: 40 }}
                animate={cardsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <Link href={page.href} className="group block h-full">
                  <div className="border border-gray-200 p-8 lg:p-10 h-full flex flex-col hover:border-accent transition-colors duration-300 relative overflow-hidden">
                    {/* Number */}
                    <span className="font-display text-6xl lg:text-7xl text-gray-100 group-hover:text-accent/10 transition-colors duration-300 leading-none">
                      {page.number}
                    </span>

                    {/* English title */}
                    <span className="font-display text-sm tracking-[0.2em] text-gray-400 mt-4 block">
                      {page.titleEn}
                    </span>

                    {/* Korean title */}
                    <h2 className="text-xl lg:text-2xl font-bold text-text-on-light mt-2 group-hover:text-accent transition-colors duration-300">
                      {page.title}
                    </h2>

                    {/* Description */}
                    <p className="text-sm md:text-base text-text-on-light/60 mt-4 leading-relaxed flex-1">
                      {page.description}
                    </p>

                    {/* Arrow */}
                    <div className="mt-6 flex items-center gap-2 text-sm md:text-base font-bold text-text-on-light/40 group-hover:text-accent transition-colors duration-300">
                      자세히 보기
                      <svg
                        width="16"
                        height="12"
                        viewBox="0 0 16 12"
                        fill="none"
                        className="transition-transform group-hover:translate-x-1"
                      >
                        <path
                          d="M10 1L15 6L10 11M0 6H15"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values - Staircase Layout */}
      <section ref={valuesRef} className="bg-black py-20 lg:py-28 relative overflow-hidden">
        {/* Decorative symbol */}
        <div className="absolute -left-20 top-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none">
          <BrandSymbol size={400} color="white" />
        </div>

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="mb-16"
          >
            <p className="text-gray-500 text-sm md:text-base mb-3 tracking-widest uppercase">
              Core Values
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-snug">
              누구나 즐겁고, 누구나 끈기있게
              <br />
              <span className="text-accent">당신의 목소리가 해낼 수 있도록.</span>
            </h2>
          </motion.div>

          {/* Staircase layout - ascending like 3 octaves */}
          <div className="space-y-6">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.label}
                initial={{ opacity: 0, x: -30 }}
                animate={valuesInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                className="flex items-stretch"
                style={{ paddingLeft: `${index * 8}%` }}
              >
                {/* Music staff line */}
                <div className="flex items-center mr-6 lg:mr-10">
                  <div className="w-12 lg:w-20 h-[1px] bg-white/20" />
                </div>

                <div className="flex-1 border-l-2 border-accent pl-6 lg:pl-10 py-4">
                  <span className="font-display text-3xl md:text-4xl lg:text-5xl tracking-[0.1em] text-white">
                    {value.label}
                  </span>
                  <div className="flex items-center gap-3 mt-2">
                    <span className="text-accent font-bold">{value.ko}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-600" />
                    <span className="text-gray-400 text-sm md:text-base">
                      {value.description}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Essence CTA */}
      <section className="bg-accent py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, transparent, transparent 20px, white 20px, white 21px)",
            }}
          />
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <p className="text-white/80 text-base md:text-lg mb-4">
            탄탄하지 않은 보컬 트레이닝 이슈를 해결하는
          </p>
          <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-8">
            체계적이고 즐거운, 끈기 있는 트레이닝으로
            <br />
            <span className="underline decoration-white decoration-4 underline-offset-8">
              한계를 뛰어넘는 보컬을 실현합니다.
            </span>
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-text-on-light hover:bg-black hover:text-white px-8 py-4 text-base font-bold transition-all duration-300"
          >
            무료 상담 예약하기
            <svg
              width="16"
              height="12"
              viewBox="0 0 16 12"
              fill="none"
              className="transition-transform group-hover:translate-x-1"
            >
              <path
                d="M10 1L15 6L10 11M0 6H15"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
