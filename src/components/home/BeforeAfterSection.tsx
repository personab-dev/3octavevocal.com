"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import { beforeAfterShorts } from "@/lib/videos";

export default function BeforeAfterSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="bg-white py-24 lg:py-36">
      <div className="max-w-[1440px] mx-auto px-6">
        {/* Headline */}
        <SectionHeader
          label="단 10분, 첫 레슨만으로도 변화를 경험한 수강생들!"
          heading={<><span className="text-accent font-black">BEFORE &amp; AFTER</span>로 직접 확인하세요</>}
        />

        {/* YouTube Shorts Grid — 10개 */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {beforeAfterShorts.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.06 }}
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
                    alt={video.title}
                    fill
                    sizes="(max-width: 768px) 50vw, 20vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Play icon overlay */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-accent/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg width="16" height="18" viewBox="0 0 16 18" fill="white">
                        <path d="M0 0L16 9L0 18V0Z" />
                      </svg>
                    </div>
                  </div>
                </div>
                {/* Title */}
                <p className="text-text-on-light text-base md:text-lg leading-snug group-hover:text-accent transition-colors">
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
