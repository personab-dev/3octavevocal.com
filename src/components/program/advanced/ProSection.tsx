"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const artistImages = [
  { src: "/images/pro-curriculum/artist-1.png", alt: "정성일 — 배우, '더 글로리' 주연", name: "정성일", role: "배우" },
  { src: "/images/pro-curriculum/artist-2.png", alt: "황치열 — 가수, 보컬 트레이닝", name: "황치열", role: "가수" },
  { src: "/images/pro-curriculum/artist-yoosieun.webp", alt: "유시은 — 솔로지옥3 출연", name: "유시은", role: "솔로지옥3" },
  { src: "/images/pro-curriculum/artist-6.png", alt: "노라조 — 엔터테이너 보컬 트레이닝", name: "노라조", role: "가수" },
  { src: "/images/pro-curriculum/artist-7.png", alt: "염유리 — 보컬 트레이닝", name: "염유리", role: "가수" },
  { src: "/images/pro-curriculum/artist-shinhwa.webp", alt: "신화 — K-POP 보컬 트레이닝", name: "신화", role: "아이돌 그룹" },
  { src: "/images/pro-curriculum/artist-4.png", alt: "하이라이트 — K-POP 보컬 트레이닝", name: "하이라이트", role: "아이돌 그룹" },
  { src: "/images/pro-curriculum/artist-8.png", alt: "반광옥 — 보컬 트레이닝", name: "반광옥", role: "가수" },
];

export default function ProSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [showAll, setShowAll] = useState(false);
  const visibleArtists = showAll ? artistImages : artistImages.slice(0, 3);
  const remainingCount = artistImages.length - 3;

  return (
    <section ref={ref} className="bg-zinc-900 py-20 lg:py-28">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-6"
        >
          <p className="font-display text-sm tracking-[0.2em] text-gray-500 mb-3">
            PROFESSIONAL CHOICE
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            <span className="text-accent">프로</span>들은 이유 없이 선택하지
            않습니다.
          </h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-gray-400 text-base md:text-lg text-center max-w-2xl mx-auto mb-14"
        >
          프로들이 선택한 커리큘럼 그대로, 평범한 일반인의 눈높이에 맞춰
          떠먹여 드립니다.
        </motion.p>

        <div
          className={`grid gap-4 lg:gap-6 ${
            showAll ? "grid-cols-2 md:grid-cols-4" : "grid-cols-3"
          }`}
        >
          {visibleArtists.map((artist, index) => (
            <motion.div
              key={artist.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="text-center group"
            >
              <div className="aspect-square relative overflow-hidden mb-4">
                <Image
                  src={artist.src}
                  alt={artist.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent z-10" />
                {/* Role badge */}
                <div className="absolute bottom-3 left-0 right-0 z-20 text-center">
                  <span className="inline-block text-[10px] font-bold tracking-wider text-accent bg-accent/10 px-2 py-0.5 backdrop-blur-sm">
                    {artist.role}
                  </span>
                </div>
              </div>
              <h3 className="text-white font-bold text-base md:text-lg">
                {artist.name}
              </h3>
            </motion.div>
          ))}
        </div>

        {!showAll && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex justify-center mt-10"
          >
            <button
              type="button"
              onClick={() => setShowAll(true)}
              className="border border-white/20 hover:border-accent text-white hover:text-accent px-8 py-3 text-sm font-bold tracking-wider transition-all duration-300"
            >
              +{remainingCount} MORE
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
