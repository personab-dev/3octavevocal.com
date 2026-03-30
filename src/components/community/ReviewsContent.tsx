"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import CommunitySubNav from "./CommunitySubNav";

interface Review {
  title: string;
  reviewFields: {
    externalUrl: string;
    isHighlight: boolean | null;
  };
}

interface ReviewsContentProps {
  reviews: Review[];
  reviewsDescription: string;
}

export default function ReviewsContent({ reviews, reviewsDescription }: ReviewsContentProps) {
  return (
    <>
      <PageHero
        heading="COMMUNITY"
        subheading="Real Voice, Real Change"
        backgroundImage="/images/community/hero.png"
      />
      <CommunitySubNav />

      {/* Header Section */}
      <section className="bg-white py-16 lg:py-18">
        <div className="max-w-5xl mx-auto px-6">
          <SectionHeader
            label="Student Reviews"
            labelStyle="accent"
            heading={<>첫 레슨만으로<br /><span className="text-accent">변화를 경험한 수강생들</span></>}
            description={reviewsDescription}
          />
        </div>
      </section>

      {/* Reviews Section — Fault-Tolerant Grid & Premium States */}
      <section className="bg-zinc-50 py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-6">
          {/* 가로 방향으로 정상적으로 채워지며, 가장 높은 카드의 높이에 각 줄이 맞춰짐 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {reviews.map((item, index) => {
              // CMS Highlight toggle determines the visual weight and style, NOT the rigid grid span.
              // This guarantees the UI never breaks (empty holes) horizontally.
              const isHero = item.reviewFields.isHighlight === true;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (index % 6) * 0.05 }}
                  className="h-full"
                >
                  <Link
                    href={item.reviewFields.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className={`group relative block rounded-2xl overflow-hidden h-full 
                      transition-all duration-500 ease-out 
                      hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-15px_rgba(230,32,77,0.25)]
                      ${isHero
                        ? "bg-zinc-900 text-white border border-zinc-800 p-8 md:p-10"
                        : "bg-white text-text-on-light border border-zinc-100/80 p-6 md:p-8 hover:border-accent/30"
                      }`}
                  >
                    {/* Abstract Gradient Accent for Highlighted Cards */}
                    {isHero && (
                      <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                    )}

                    {/* Quotation Watermark */}
                    <div className={`absolute -bottom-4 -right-2 text-[120px] leading-none font-serif opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out scale-75 group-hover:scale-100 origin-bottom-right pointer-events-none select-none
                      ${isHero ? "text-white/5" : "text-accent/5"}
                    `}>
                      &quot;
                    </div>

                    <div className="relative z-10 flex flex-col h-full justify-between gap-6">
                      <div className="flex items-start gap-4">
                        {/* Quote Icon */}
                        <svg
                          width="24"
                          height="20"
                          viewBox="0 0 32 28"
                          fill="none"
                          className={`shrink-0 mt-1 transition-all duration-500 transform group-hover:-translate-y-0.5
                            ${isHero
                              ? "opacity-60 fill-accent group-hover:opacity-100"
                              : "opacity-20 fill-current group-hover:fill-accent group-hover:opacity-100"
                            }`}
                        >
                          <path
                            d="M0 28V17.5C0 12.833 1.167 9.083 3.5 6.25C5.833 3.417 9.167 1.5 13.5 0.5L14.5 3C11.833 4 9.75 5.417 8.25 7.25C6.75 9.083 6 11.167 6 13.5H12V28H0ZM18 28V17.5C18 12.833 19.167 9.083 21.5 6.25C23.833 3.417 27.167 1.5 31.5 0.5L32.5 3C29.833 4 27.75 5.417 26.25 7.25C24.75 9.083 24 11.167 24 13.5H30V28H18Z"
                          />
                        </svg>

                        {/* Review Content */}
                        <p className={`font-semibold leading-relaxed tracking-tight transition-colors duration-300
                          ${isHero
                            ? "text-lg md:text-xl text-white/95 group-hover:text-white"
                            : "text-base md:text-lg text-text-on-light/90 group-hover:text-black"
                          }
                        `}>
                          {item.title}
                        </p>
                      </div>

                      {/* Fake Review Details (CMS could provide this later) */}
                      <div className="flex items-center gap-2 mt-auto pt-4">
                        <div className={`w-6 h-px transition-all duration-500 group-hover:w-10
                          ${isHero ? "bg-white/20 group-hover:bg-accent" : "bg-zinc-200 group-hover:bg-accent/50"}
                        `}></div>
                        <span className={`text-xs font-bold transition-colors duration-300
                          ${isHero ? "text-white/40 group-hover:text-accent" : "text-zinc-400 group-hover:text-accent"}
                        `}>
                          수강생 후기 원문 보기
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
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
            내 상태 진단 &amp; 상담 신청
            <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
              <path d="M10 1L15 6L10 11M0 6H15" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </Link>
        </div>
      </section>

    </>
  );
}
