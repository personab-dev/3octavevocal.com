"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import CommunitySubNav from "./CommunitySubNav";

const reviewImages = [
  {
    src: "/images/community/reviews/review-01.png",
    alt: "수강생 후기 — 내가 서울 보컬학원들 중 3옥타브장인을 다니는 이유",
    href: "https://cafe.naver.com/cloud9ent/26485",
    width: 984,
    height: 675,
  },
  {
    src: "/images/community/reviews/review-02.png",
    alt: "수강생 후기 — 소극적으로 살던 제 인생의 초반에서 3옥타브장인을 만난건 천운입니다",
    href: "https://cafe.naver.com/cloud9ent/26484",
    width: 984,
    height: 675,
  },
  {
    src: "/images/community/reviews/review-03.png",
    alt: "수강생 후기 — 선생님만 전적으로 믿고 따라가면 실력 향상 안될 수 없는 커리큘럼입니다",
    href: "https://cafe.naver.com/cloud9ent/28022",
    width: 984,
    height: 675,
  },
  {
    src: "/images/community/reviews/review-04.png",
    alt: "수강생 후기 — 잘하는 부분과 안되는 부분을 명확하게 알려주시고, 해결 방법도 명확하게 알려주셔요",
    href: "https://cafe.naver.com/cloud9ent/27526",
    width: 984,
    height: 675,
  },
  {
    src: "/images/community/reviews/review-05.png",
    alt: "수강생 후기 — 목잡이 탈출을 원하시거나 노래방 인기차트곡들을 잘 부르고 싶다면 무조건 오세요",
    href: "https://cafe.naver.com/cloud9ent/22504",
    width: 984,
    height: 675,
  },
];

export default function ReviewsContent() {
  const galleryRef = useRef<HTMLElement>(null);
  const galleryInView = useInView(galleryRef, { once: true, amount: 0.1 });

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
            label="Student Reviews"
            labelStyle="accent"
            heading={<>첫 레슨만으로<br /><span className="text-accent">변화를 경험한 수강생들</span></>}
            description="7,000명 이상의 수강생을 배출한 3옥타브장인 보컬학원의 생생한 레슨 현장과 후기를 소개합니다."
          />
        </div>
      </section>

      {/* Gallery Section */}
      <section ref={galleryRef} className="bg-zinc-50 py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {reviewImages.map((img, index) => (
              <motion.div
                key={img.src}
                initial={{ opacity: 0, y: 30 }}
                animate={galleryInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={img.href}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="group relative aspect-[3/2] overflow-hidden bg-gray-200 block"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={img.width}
                    height={img.height}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M3 13L13 3M13 3H5M13 3V11" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-black py-16 lg:py-20">
        {/* Logo watermark — left side */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-[30%] pointer-events-none">
          <Image
            src="/images/logo-accent-white.png"
            alt=""
            width={400}
            height={400}
            className="opacity-[0.06] w-[280px] lg:w-[400px] h-auto"
          />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <p className="text-gray-400 text-sm md:text-base mb-3 tracking-widest uppercase">
            Start Your Change
          </p>
          <p className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-8 leading-snug">
            다음 변화의 주인공은
            <span className="text-accent"> 당신</span>입니다
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
