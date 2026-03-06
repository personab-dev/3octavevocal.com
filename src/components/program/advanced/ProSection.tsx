"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { allArtists, FEATURED_COUNT } from "@/lib/artists";

export default function ProSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [showAll, setShowAll] = useState(false);
  const visibleArtists = showAll ? allArtists : allArtists.slice(0, FEATURED_COUNT);
  const remainingCount = allArtists.length - FEATURED_COUNT;

  return (
    <section id="artists" ref={ref} className="bg-zinc-900 py-20 lg:py-28">
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
              animate={isInView || showAll ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.05 }}
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
