"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import YouTubeModal from "@/components/YouTubeModal";
import { beforeAfterShorts } from "@/lib/videos";
import type { VideoItem } from "@/lib/videos";

interface ProgramBeforeAfterProps {
  reviewLabel?: string;
  heading?: string;
  subHeading?: string;
  videos?: VideoItem[];
  isShorts?: boolean;
}

export default function ProgramBeforeAfter({
  reviewLabel = "기본 과정을 이수한 후기가 궁금하신가요?",
  heading = "수강 이후, 당신의 고음은 이렇게 달라집니다.",
  subHeading = "백 번의 설명보다 확실한 증명. 수강생들의 소름 돋는 비포 & 애프터",
  videos = beforeAfterShorts,
  isShorts = true,
}: ProgramBeforeAfterProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const closeModal = useCallback(() => setActiveVideo(null), []);

  const items = [...videos, ...videos, ...videos];

  return (
    <>
      <section ref={ref} className="bg-white py-20 lg:py-28 overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-6"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-on-light">
              {heading}
            </h2>
            <p className="text-text-on-light/60 text-base md:text-lg mt-3">
              {subHeading}
            </p>
          </motion.div>
        </div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="relative mt-10"
        >
          <div className={`flex ${isShorts ? "animate-carousel-shorts" : "animate-carousel"}`}>
            {items.map((video, i) => (
              <button
                key={`${video.id}-${i}`}
                onClick={() => setActiveVideo(video.id)}
                className={`shrink-0 ${isShorts ? "w-[200px] md:w-[240px] lg:w-[280px]" : "w-[320px] md:w-[400px] lg:w-[480px]"} mx-2.5 group cursor-pointer`}
              >
                <div className={`${isShorts ? "aspect-[9/16]" : "aspect-video"} bg-zinc-200 relative overflow-hidden`}>
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    sizes={isShorts ? "280px" : "480px"}
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-accent/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg width="16" height="18" viewBox="0 0 16 18" fill="white">
                        <path d="M0 0L16 9L0 18V0Z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <p className="text-text-on-light text-sm md:text-base leading-snug mt-2 group-hover:text-accent transition-colors text-left">
                  {video.title}
                </p>
              </button>
            ))}
          </div>
        </motion.div>

        {/* 100% 찐 후기 */}
        <div className="max-w-[1440px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-center mt-14"
          >
            <p className="font-display text-sm tracking-[0.2em] text-text-on-light/40 mb-2">
              100% 찐 후기
            </p>
            <p className="text-text-on-light/60 text-base md:text-lg mb-6">
              {reviewLabel}
            </p>
            <Link
              href="/reviews"
              className="group inline-flex items-center gap-2 bg-accent text-white hover:bg-accent/90 rounded-r-full px-7 py-3.5 text-base font-bold tracking-wide transition-all duration-300"
            >
              100% 찐후기 보러가기
              <svg
                width="16"
                height="12"
                viewBox="0 0 16 12"
                fill="none"
                className="transition-transform group-hover:translate-x-1"
              >
                <path d="M10 1L15 6L10 11M0 6H15" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      <YouTubeModal videoId={activeVideo} onClose={closeModal} isShorts={isShorts} />
    </>
  );
}
