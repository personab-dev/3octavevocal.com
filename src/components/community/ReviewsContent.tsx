"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import PageHero from "@/components/PageHero";
import CommunitySubNav from "./CommunitySubNav";

const reviewImages = [
  {
    src: "/images/community/reviews/review-01.png",
    alt: "3옥타브장인 보컬 레슨 현장 - 강사가 수강생에게 발성법을 지도하는 모습",
    width: 984,
    height: 675,
  },
  {
    src: "/images/community/reviews/review-02.png",
    alt: "3옥타브장인 보컬 레슨 현장 - 화이트보드를 활용한 발성 구조 설명",
    width: 984,
    height: 675,
  },
  {
    src: "/images/community/reviews/review-03.png",
    alt: "3옥타브장인 보컬 레슨 현장 - 수강생 발성 교정 모습",
    width: 984,
    height: 675,
  },
  {
    src: "/images/community/reviews/review-04.png",
    alt: "3옥타브장인 보컬 레슨 현장 - 1:1 맞춤형 보컬 트레이닝",
    width: 984,
    height: 675,
  },
  {
    src: "/images/community/reviews/review-05.png",
    alt: "3옥타브장인 보컬학원 핵심 가치 - Dream, Patience, Challenge",
    width: 984,
    height: 675,
  },
];

export default function ReviewsContent() {
  const galleryRef = useRef<HTMLElement>(null);
  const galleryInView = useInView(galleryRef, { once: true, amount: 0.1 });
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <>
      <PageHero
        heading="COMMUNITY"
        subheading="Real Voice, Real Change"
      />
      <CommunitySubNav />

      {/* Header Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <p className="text-accent text-sm font-bold tracking-widest uppercase mb-4">
              Student Reviews
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-on-light leading-tight">
              첫 레슨만으로
              <br />
              <span className="text-accent">변화를 경험한 수강생들</span>
            </h2>
            <p className="text-text-on-light/60 mt-6 max-w-xl mx-auto leading-relaxed">
              7,000명 이상의 수강생을 배출한 3옥타브장인 보컬학원의
              생생한 레슨 현장과 후기를 소개합니다.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section ref={galleryRef} className="bg-zinc-50 py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {reviewImages.map((img, index) => (
              <motion.button
                key={img.src}
                initial={{ opacity: 0, y: 30 }}
                animate={galleryInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setSelectedImage(index)}
                className="group relative aspect-[3/2] overflow-hidden bg-gray-200 cursor-pointer"
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
                      <path d="M8 3V13M3 8H13" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </span>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-gray-400 text-sm mb-3 tracking-widest uppercase">
            Start Your Change
          </p>
          <p className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-8 leading-snug">
            다음 변화의 주인공은
            <span className="text-accent"> 당신</span>입니다
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 bg-accent hover:bg-white hover:text-text-on-light text-white px-8 py-4 text-sm font-bold transition-colors duration-300"
          >
            무료 상담 예약하기
            <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
              <path d="M10 1L15 6L10 11M0 6H15" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </motion.a>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={reviewImages[selectedImage].src}
                alt={reviewImages[selectedImage].alt}
                width={reviewImages[selectedImage].width}
                height={reviewImages[selectedImage].height}
                className="w-full h-auto"
              />

              {/* Close button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>

              {/* Navigation */}
              <div className="absolute top-1/2 -translate-y-1/2 -left-12 lg:-left-16">
                <button
                  onClick={() =>
                    setSelectedImage((selectedImage - 1 + reviewImages.length) % reviewImages.length)
                  }
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </button>
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 -right-12 lg:-right-16">
                <button
                  onClick={() =>
                    setSelectedImage((selectedImage + 1) % reviewImages.length)
                  }
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
