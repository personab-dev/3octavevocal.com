"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import PageHero from "@/components/PageHero";

const subPages = [
  {
    number: "01",
    title: "수강생 후기",
    titleEn: "REVIEWS",
    description:
      "첫 레슨만으로 변화를 경험한 수강생들. 생생한 레슨 현장과 후기를 확인하세요.",
    href: "/reviews",
  },
  {
    number: "02",
    title: "발성 꿀팁",
    titleEn: "VOCAL TIPS",
    description:
      "고음 발성법, 믹스보이스, 호흡 조절 등 3옥타브장인의 핵심 보컬 팁을 공개합니다.",
    href: "/tips",
  },
];

export default function CommunityLanding() {
  const cardsRef = useRef<HTMLElement>(null);
  const cardsInView = useInView(cardsRef, { once: true, amount: 0.2 });

  return (
    <>
      <PageHero
        heading="COMMUNITY"
        subheading="Real Voice, Real Change"
        description="수강생 후기와 발성 꿀팁. 3옥타브장인 보컬학원의 교육 효과를 직접 확인하세요."
      />

      <section ref={cardsRef} className="bg-white py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {subPages.map((page, index) => (
              <motion.div
                key={page.number}
                initial={{ opacity: 0, y: 40 }}
                animate={cardsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <Link href={page.href} className="group block h-full">
                  <div className="border border-gray-200 p-8 lg:p-10 h-full flex flex-col hover:border-accent transition-colors duration-300 relative overflow-hidden">
                    <span className="font-display text-6xl lg:text-7xl text-gray-100 group-hover:text-accent/10 transition-colors duration-300 leading-none">
                      {page.number}
                    </span>

                    <span className="font-display text-sm tracking-[0.2em] text-gray-400 mt-4 block">
                      {page.titleEn}
                    </span>

                    <h2 className="text-xl lg:text-2xl font-bold text-text-on-light mt-2 group-hover:text-accent transition-colors duration-300">
                      {page.title}
                    </h2>

                    <p className="text-sm md:text-base text-text-on-light/60 mt-4 leading-relaxed flex-1">
                      {page.description}
                    </p>

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
    </>
  );
}
