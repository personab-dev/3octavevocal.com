"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import YouTubeModal from "@/components/YouTubeModal";
import type { VideoItem } from "@/lib/videos";

export default function BeforeAfterSection({ videos }: { videos: VideoItem[] }) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const closeModal = useCallback(() => setActiveVideo(null), []);

  // 충분히 복제하여 끊김 없는 무한 루프 보장
  const items = [...videos, ...videos, ...videos];

  return (
    <>
      <section ref={ref} className="bg-white py-24 lg:py-36 overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6">
          <SectionHeader
            label="단 10분, 첫 레슨만으로도 변화를 경험한 수강생들!"
            heading={
              <>
                <span className="text-accent font-black">
                  BEFORE &amp; AFTER
                </span>
                로 직접 확인하세요
              </>
            }
          />
        </div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="flex animate-carousel-shorts">
            {items.map((video, i) => (
              <button
                key={`${video.id}-${i}`}
                onClick={() => setActiveVideo(video.id)}
                className="shrink-0 w-[200px] md:w-[240px] lg:w-[280px] mx-2.5 group cursor-pointer"
              >
                <div className="aspect-[9/16] bg-zinc-200 relative overflow-hidden">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    sizes="280px"
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
      </section>

      <YouTubeModal videoId={activeVideo} onClose={closeModal} />
    </>
  );
}
