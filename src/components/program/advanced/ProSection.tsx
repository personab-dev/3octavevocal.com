"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const artistImages = [
  { src: "/images/pro-curriculum/artist-1.png", alt: "정성일 — 배우, '더 글로리' 주연", name: "정성일", role: "배우" },
  { src: "/images/pro-curriculum/artist-2.png", alt: "인피니트 — K-POP 보컬 트레이닝", name: "인피니트", role: "아이돌 그룹" },
  { src: "/images/pro-curriculum/artist-3.png", alt: "노라조 — 엔터테이너 보컬 트레이닝", name: "노라조", role: "밴드" },
  { src: "/images/pro-curriculum/artist-4.png", alt: "비스트 — K-POP 보컬 트레이닝", name: "비스트", role: "아이돌 그룹" },
];

export default function ProSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

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
            <span className="text-accent">프로</span>들은 이유 없이
            선택하지 않습니다.
          </h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-gray-400 text-base md:text-lg text-center max-w-2xl mx-auto mb-14"
        >
          신화, 비스트, 인피니트, 노라조, &lsquo;더 글로리&rsquo; 주연
          배우까지.
          <br className="hidden md:block" />
          프로들이 선택한 커리큘럼 그대로, 당신도 똑같이 성장할 수
          있습니다.
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
          {artistImages.map((artist, index) => (
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
      </div>
    </section>
  );
}
