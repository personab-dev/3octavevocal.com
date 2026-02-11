"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import PageHero from "@/components/PageHero";
import CommunitySubNav from "./CommunitySubNav";

const tipCards = [
  {
    src: "/images/community/tips/tip-01.png",
    alt: "유튜브 보고 백날 따라해도 고음 안 뚫리는 이유 - 해결법 공개",
    width: 1547,
    height: 880,
  },
  {
    src: "/images/community/tips/tip-02.png",
    alt: "믹스 보이스 이렇게 연습 안하면 평생 2옥타브 솔이야",
    width: 1547,
    height: 880,
  },
  {
    src: "/images/community/tips/tip-03.png",
    alt: "AI 기술로도 불가능한 박효신만의 비밀",
    width: 1547,
    height: 880,
  },
  {
    src: "/images/community/tips/tip-04.png",
    alt: "3옥타브장인 보컬 꿀팁 4",
    width: 1547,
    height: 880,
  },
  {
    src: "/images/community/tips/tip-05.png",
    alt: "3옥타브장인 보컬 꿀팁 5",
    width: 1547,
    height: 880,
  },
  {
    src: "/images/community/tips/tip-06.png",
    alt: "3옥타브장인 보컬 꿀팁 6",
    width: 1547,
    height: 880,
  },
  {
    src: "/images/community/tips/tip-07.png",
    alt: "3옥타브장인 보컬 꿀팁 7",
    width: 1547,
    height: 880,
  },
  {
    src: "/images/community/tips/tip-08.png",
    alt: "3옥타브장인 보컬 꿀팁 8",
    width: 1547,
    height: 880,
  },
  {
    src: "/images/community/tips/tip-09.png",
    alt: "3옥타브장인 보컬 꿀팁 9",
    width: 1547,
    height: 880,
  },
];

export default function TipsContent() {
  const gridRef = useRef<HTMLElement>(null);
  const gridInView = useInView(gridRef, { once: true, amount: 0.1 });
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
              Hot Tip
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-on-light leading-tight">
              3옥타브장인
              <br />
              <span className="text-accent">발성 꿀팁</span>
            </h2>
            <p className="text-text-on-light/60 mt-6 max-w-xl mx-auto leading-relaxed">
              고음 발성법, 호흡 조절, 성대 컨트롤 등
              3옥타브장인 보컬학원의 핵심 보컬 팁을 확인하세요.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tips Grid */}
      <section ref={gridRef} className="bg-zinc-50 py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {tipCards.map((tip, index) => (
              <motion.button
                key={tip.src}
                initial={{ opacity: 0, y: 30 }}
                animate={gridInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                onClick={() => setSelectedImage(index)}
                className="group relative aspect-video overflow-hidden bg-gray-200 cursor-pointer rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <Image
                  src={tip.src}
                  alt={tip.alt}
                  width={tip.width}
                  height={tip.height}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-gray-400 text-sm mb-3 tracking-widest uppercase">
            Level Up Your Voice
          </p>
          <p className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-8 leading-snug">
            영상만으로는 한계가 있습니다
            <br />
            <span className="text-accent">전문가에게 직접 배워보세요</span>
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
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={tipCards[selectedImage].src}
                alt={tipCards[selectedImage].alt}
                width={tipCards[selectedImage].width}
                height={tipCards[selectedImage].height}
                className="w-full h-auto rounded-lg"
              />

              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>

              <div className="absolute top-1/2 -translate-y-1/2 -left-12 lg:-left-16">
                <button
                  onClick={() =>
                    setSelectedImage((selectedImage - 1 + tipCards.length) % tipCards.length)
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
                    setSelectedImage((selectedImage + 1) % tipCards.length)
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
