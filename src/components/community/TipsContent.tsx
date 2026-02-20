"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import CommunitySubNav from "./CommunitySubNav";

const tipCards = [
  {
    src: "/images/community/tips/tip-01.png",
    alt: "유튜브 보고 백날 따라해도 고음 안 뚫리는 이유 - 해결법 공개",
    width: 1547,
    height: 880,
    youtube: "https://www.youtube.com/watch?v=EHubyOKJD0I",
  },
  {
    src: "/images/community/tips/tip-02.png",
    alt: "믹스 보이스 이렇게 연습 안하면 평생 2옥타브 솔이야",
    width: 1547,
    height: 880,
    youtube: "https://www.youtube.com/watch?v=vTDXCwryPIc",
  },
  {
    src: "/images/community/tips/tip-03.png",
    alt: "AI 기술로도 불가능한 박효신만의 비밀",
    width: 1547,
    height: 880,
    youtube: "https://www.youtube.com/watch?v=8lDDz8UCeog",
  },
  {
    src: "/images/community/tips/tip-04.png",
    alt: "2옥타브 라 이상 쌉가능! 진짜 고음 뚫리는 연습법 (Feat. 믹스 보이스)",
    width: 1547,
    height: 880,
    youtube: "https://www.youtube.com/watch?v=DqrkPfChE7Q",
  },
  {
    src: "/images/community/tips/tip-05.png",
    alt: "이게 안되면 평생 고음 불가 - 고음 필수 조건 1가지 (99% 일반인들은 모름)",
    width: 1547,
    height: 880,
    youtube: "https://www.youtube.com/watch?v=ht9yyOPDXlc",
  },
  {
    src: "/images/community/tips/tip-06.png",
    alt: "박효신 VS 김범수 - 둘 중에 누가 더 잘한다고?",
    width: 1547,
    height: 880,
    youtube: "https://www.youtube.com/watch?v=6oSPrX7Q17g",
  },
  {
    src: "/images/community/tips/tip-07.png",
    alt: "나얼 애드리브 너무 빡세네요 - 브라운 아이드 소울 Love Ballad",
    width: 1547,
    height: 880,
    youtube: "https://www.youtube.com/watch?v=QSPJyWjo6sk",
  },
  {
    src: "/images/community/tips/tip-08.png",
    alt: "노래 연습을 해도 실력이 제자리인 이유",
    width: 1547,
    height: 880,
    youtube: "https://www.youtube.com/watch?v=QWtooMTgBVc",
  },
  {
    src: "/images/community/tips/tip-09.png",
    alt: "반가성 VS 믹스 보이스 이 영상으로 종결합니다",
    width: 1547,
    height: 880,
    youtube: "https://www.youtube.com/watch?v=CeAovSqR5gE",
  },
];

export default function TipsContent() {
  const gridRef = useRef<HTMLElement>(null);
  const gridInView = useInView(gridRef, { once: true, amount: 0.1 });

  return (
    <>
      <PageHero
        heading="COMMUNITY"
        subheading="Real Voice, Real Change"
        backgroundImage="/images/community/hero.png"
      />
      <CommunitySubNav />

      {/* Header Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-6">
          <SectionHeader
            label="Hot Tip"
            labelStyle="accent"
            heading={<>3옥타브장인<br /><span className="text-accent">발성 꿀팁</span></>}
            description="고음 발성법, 호흡 조절, 성대 컨트롤 등 3옥타브장인 보컬학원의 핵심 보컬 팁을 확인하세요."
          />
        </div>
      </section>

      {/* Tips Grid */}
      <section ref={gridRef} className="bg-zinc-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8">
            {tipCards.map((tip, index) => (
              <motion.a
                key={tip.src}
                href={tip.youtube}
                target="_blank"
                rel="noopener noreferrer nofollow"
                initial={{ opacity: 0, y: 30 }}
                animate={gridInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group relative aspect-video overflow-hidden bg-gray-200 cursor-pointer rounded-xl shadow-md hover:shadow-2xl transition-all duration-300"
              >
                <Image
                  src={tip.src}
                  alt={tip.alt}
                  width={tip.width}
                  height={tip.height}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-gray-400 text-sm md:text-base mb-3 tracking-widest uppercase">
            Level Up Your Voice
          </p>
          <p className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-8 leading-snug">
            영상만으로는 한계가 있습니다
            <br />
            <span className="text-accent">전문가에게 직접 배워보세요</span>
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white rounded-r-full px-8 py-4 text-base font-bold transition-colors duration-300 hover:scale-[1.02] active:scale-[0.98] transition-transform"
          >
            무료 상담 예약하기
            <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
              <path d="M10 1L15 6L10 11M0 6H15" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
