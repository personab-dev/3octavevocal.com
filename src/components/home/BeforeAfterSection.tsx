"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const videos = [
  {
    title: "목 쥐어짜는 흔한 일반인이\n보컬레슨을 받으면 생기는 변화",
    url: "https://www.youtube.com/shorts/z57DrPANPQ8",
    thumbnail: "https://img.youtube.com/vi/z57DrPANPQ8/oar2.jpg",
  },
  {
    title: "목으로만 지르는 일반인이\n'믹스 보이스'를 배우면 생기는 일",
    url: "https://www.youtube.com/shorts/lrYzzluMoX8",
    thumbnail: "https://img.youtube.com/vi/lrYzzluMoX8/oar2.jpg",
  },
  {
    title: "노래를 겁내던 일반인이\n노래를 배운 뒤 생긴 변화",
    url: "https://www.youtube.com/shorts/Gwfri1Pa5sM",
    thumbnail: "https://img.youtube.com/vi/Gwfri1Pa5sM/oar2.jpg",
  },
  {
    title: "원래 목소리가 좋은 일반인이\n보컬 레슨을 받는다면?!",
    url: "https://www.youtube.com/shorts/eH_5DPSKwmU",
    thumbnail: "https://img.youtube.com/vi/eH_5DPSKwmU/oar2.jpg",
  },
  {
    title: "꽥꽥지르던 일반인도 배우면\n'마크툽 노래'를 부를 수 있을까?",
    url: "https://www.youtube.com/shorts/DFK_YLVzBoU",
    thumbnail: "https://img.youtube.com/vi/DFK_YLVzBoU/oar2.jpg",
  },
  {
    title: "3옥타브 매번 실패했었는데,\n이게 되네?",
    url: "https://www.youtube.com/shorts/UMLeeKdEB7w",
    thumbnail: "https://img.youtube.com/vi/UMLeeKdEB7w/oar2.jpg",
  },
];

export default function BeforeAfterSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="bg-white py-20 lg:py-28">
      <div className="max-w-[1440px] mx-auto px-6">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="text-text-on-light/60 text-sm md:text-base mb-3">
            단 10분, 첫 레슨만으로도 변화를 경험한 수강생들!
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-on-light">
            <span className="text-accent font-black">BEFORE &amp; AFTER</span>로 직접 확인하세요
          </h2>
        </motion.div>

        {/* YouTube Shorts Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
            >
              <Link
                href={video.url}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="group block"
              >
                {/* Thumbnail */}
                <div className="aspect-[9/16] bg-zinc-200 relative overflow-hidden mb-3">
                  <Image
                    src={video.thumbnail}
                    alt={video.title.replace("\n", " ")}
                    fill
                    sizes="(max-width: 768px) 50vw, 16vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Play icon overlay */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-accent/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg width="16" height="18" viewBox="0 0 16 18" fill="white">
                        <path d="M0 0L16 9L0 18V0Z" />
                      </svg>
                    </div>
                  </div>
                </div>
                {/* Title */}
                <p className="text-text-on-light text-xs md:text-sm leading-snug whitespace-pre-line group-hover:text-accent transition-colors">
                  {video.title}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
