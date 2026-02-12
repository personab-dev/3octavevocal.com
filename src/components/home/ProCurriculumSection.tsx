"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const artistImages = [
  { src: "/images/pro-curriculum/artist-1.png", alt: "아티스트 레슨 현장 1" },
  { src: "/images/pro-curriculum/artist-2.png", alt: "아티스트 레슨 현장 2" },
  { src: "/images/pro-curriculum/artist-3.png", alt: "아티스트 레슨 현장 3" },
  { src: "/images/pro-curriculum/artist-4.png", alt: "아티스트 레슨 현장 4" },
];

export default function ProCurriculumSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 mb-12">
          {artistImages.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className="relative aspect-[3/4] overflow-hidden"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover"
              />
            </motion.div>
          ))}
        </div>

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
              신화·비스트·인피니트·노라조까지!
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
