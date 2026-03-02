"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import CommunitySubNav from "./CommunitySubNav";

const reviews = [
  {
    quote: "3옥타브장인에 5년 넘게 다녔습니다. 근데 이제 칙촉쌤을 곁들인...",
    href: "https://cafe.naver.com/cloud9ent/29164",
  },
  {
    quote: "서울보컬학원 연축성 발성장애 20대 여자 보컬레슨 후기",
    href: "https://cafe.naver.com/cloud9ent/29117",
  },
  {
    quote: "내가 서울보컬학원들 중 3옥타브장인을 다니는 이유",
    href: "https://cafe.naver.com/cloud9ent/26485",
  },
  {
    quote: "3옥타브장인 도비쌤 수강 후기",
    href: "https://cafe.naver.com/cloud9ent/27587",
  },
  {
    quote: "3옥타브장인 클라인쌤 수강후기",
    href: "https://cafe.naver.com/cloud9ent/28845",
  },
  {
    quote: "도비쌤과 6개월 함께한, 고음을 내고 싶은 수강생의 후기",
    href: "https://cafe.naver.com/cloud9ent/29179",
  },
  {
    quote: "서울보컬학원 3옥타브장인 뼈 묻게 된 수강생 후기",
    href: "https://cafe.naver.com/cloud9ent/27608",
  },
  {
    quote: "보컬 레슨 후기 (아이유 선생님)",
    href: "https://cafe.naver.com/cloud9ent/29154",
  },
  {
    quote: "장인이 되기 위해 왔다가 레고쌤이라는 인생 스승님을 만났습니다",
    href: "https://cafe.naver.com/cloud9ent/28022",
  },
  {
    quote: "3옥타브장인 1년 조금 넘은 수강후기!",
    href: "https://cafe.naver.com/cloud9ent/22504",
  },
  {
    quote: "아이유쌤 11주차 수강 후기",
    href: "https://cafe.naver.com/cloud9ent/27526",
  },
  {
    quote: "3옥타브 뚫은 후기",
    href: "https://cafe.naver.com/cloud9ent/29154",
  },
];

export default function ReviewsContent() {
  const reviewsRef = useRef<HTMLElement>(null);
  const reviewsInView = useInView(reviewsRef, { once: true, amount: 0.1 });

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

      {/* Reviews Section — Text only */}
      <section ref={reviewsRef} className="bg-zinc-50 py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {reviews.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={reviewsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="group block bg-white p-6 hover:shadow-lg transition-shadow duration-300 h-full"
                >
                  <div className="flex items-start gap-3">
                    <svg
                      width="24"
                      height="20"
                      viewBox="0 0 32 28"
                      fill="none"
                      className="shrink-0 mt-0.5"
                    >
                      <path
                        d="M0 28V17.5C0 12.833 1.167 9.083 3.5 6.25C5.833 3.417 9.167 1.5 13.5 0.5L14.5 3C11.833 4 9.75 5.417 8.25 7.25C6.75 9.083 6 11.167 6 13.5H12V28H0ZM18 28V17.5C18 12.833 19.167 9.083 21.5 6.25C23.833 3.417 27.167 1.5 31.5 0.5L32.5 3C29.833 4 27.75 5.417 26.25 7.25C24.75 9.083 24 11.167 24 13.5H30V28H18Z"
                        fill="#D4879C"
                      />
                    </svg>
                    <p className="text-text-on-light/80 text-sm md:text-base leading-relaxed font-semibold group-hover:text-accent transition-colors">
                      {item.quote}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-black py-16 lg:py-20">
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
            내 상태 확인 &amp; 상담 예약하기
            <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
              <path d="M10 1L15 6L10 11M0 6H15" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </Link>
        </div>
      </section>

    </>
  );
}
