"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const artistImages = [
  { src: "/images/pro-curriculum/artist-1.png", alt: "정성일 — 배우 보컬 레슨", name: "정성일", role: "배우" },
  { src: "/images/pro-curriculum/artist-2.png", alt: "황치열 — 가수 보컬 레슨", name: "황치열", role: "가수" },
  { src: "/images/pro-curriculum/artist-yoosieun.webp", alt: "유시은 — 솔로지옥3 출연", name: "유시은", role: "솔로지옥3" },
  { src: "/images/pro-curriculum/artist-6.png", alt: "노라조 — 보컬 레슨", name: "노라조", role: "가수" },
  { src: "/images/pro-curriculum/artist-7.png", alt: "염유리 — 보컬 레슨", name: "염유리", role: "가수" },
  { src: "/images/pro-curriculum/artist-shinhwa.webp", alt: "신화 — 아이돌 보컬 레슨", name: "신화", role: "아이돌 그룹" },
  { src: "/images/pro-curriculum/artist-4.png", alt: "하이라이트 — 아이돌 보컬 레슨", name: "하이라이트", role: "아이돌 그룹" },
  { src: "/images/pro-curriculum/artist-8.png", alt: "반광옥 — 보컬 레슨", name: "반광옥", role: "가수" },
];

export default function ProCurriculumSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [showAll, setShowAll] = useState(false);
  const visibleArtists = showAll ? artistImages : artistImages.slice(0, 3);
  const remainingCount = artistImages.length - 3;

  return (
    <section ref={ref} className="bg-white py-24 lg:py-36">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-8"
        >
          <p className="text-accent font-bold text-lg md:text-xl mb-2">
            프로들도 배우는 커리큘럼
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-on-light">
            <span className="text-accent">같은 방식 그대로 성장</span>할 수
            있습니다.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-center mb-14 text-text-on-light/60 text-lg md:text-xl leading-relaxed"
        >
          <p>프로들은 이유 없이 선택하지 않습니다.</p>
          <p>
            결국,{" "}
            <strong className="text-text-on-light">
              실력이 올라가는 방법
            </strong>
            을 선택할 수 밖에 없습니다.
          </p>
        </motion.div>

        {/* Artist Images Grid */}
        <div
          className={`grid gap-4 md:gap-5 mb-12 ${
            showAll ? "grid-cols-2 md:grid-cols-4" : "grid-cols-3"
          }`}
        >
          {visibleArtists.map((artist, i) => (
            <motion.div
              key={artist.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className="text-center group"
            >
              <div className="relative aspect-[3/4] overflow-hidden mb-3">
                <Image
                  src={artist.src}
                  alt={artist.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-0 right-0 text-center">
                  <span className="inline-block text-[10px] font-bold tracking-wider text-accent bg-accent/10 px-2 py-0.5 backdrop-blur-sm">
                    {artist.role}
                  </span>
                </div>
              </div>
              <h3 className="text-text-on-light font-bold text-base md:text-lg">
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
            className="flex justify-center mb-12"
          >
            <button
              type="button"
              onClick={() => setShowAll(true)}
              className="border border-gray-300 hover:border-accent text-text-on-light hover:text-accent px-8 py-3 text-sm font-bold tracking-wider transition-all duration-300"
            >
              +{remainingCount} MORE
            </button>
          </motion.div>
        )}

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 text-base md:text-lg text-text-on-light/70 leading-relaxed"
        >
          <div>
            <p>
              결과가 검증된 시스템, 이미 수많은 연예인과 아티스트들이 실력 향상을
              위해 이곳을 찾고 있습니다. &apos;더 글로리&apos; 주연 배우부터,
              신화·하이라이트·황치열·노라조까지!
            </p>
            <p className="text-accent font-bold mt-2">
              프로들이 직접 검증한 커리큘럼 그대로!
            </p>
          </div>
          <div>
            <p>국내는 물론, 미국·홍콩·러시아·일본에서도 찾아오는 이유,</p>
            <p>전 지점 3~6주간 대기가 필요한데도 찾아오는 이유,</p>
            <p className="font-bold text-text-on-light mt-2">궁금하신가요?</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
