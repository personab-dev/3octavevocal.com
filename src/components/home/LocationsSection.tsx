"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const branches = [
  {
    name: "서울점",
    address: "서울시 서초구 서초대로78길 36, 강남지웰타워 5층",
    landmarks: ["강남역 5번출구 100m"],
    mapUrl: "https://naver.me/5vcHjbd8",
    mapImage: "/images/locations/map-seoul.png",
  },
  {
    name: "부산점",
    address: "부산 부산진구 서전로17, 3층",
    landmarks: ["서면역 8번출구 100m"],
    mapUrl: "https://naver.me/5PVPwh3I",
    mapImage: "/images/locations/map-busan.png",
  },
  {
    name: "인천점",
    address: "인천 부평구 경원대로 1414, 2층",
    landmarks: ["부평역 7번출구 250m", "부평지하상가 11번출구 100m"],
    mapUrl: "https://naver.me/5YFpHxrR",
    mapImage: "/images/locations/map-incheon.png",
  },
];

export default function LocationsSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="bg-white py-24 lg:py-36">
      <div className="max-w-6xl mx-auto px-6">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-text-on-light/50 text-base md:text-lg mb-2">오시는 길</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-on-light">
            <span className="text-accent">전국 3개의 지점</span>에서<br />
            3옥타브장인 보컬학원을 만나보세요.
          </h2>
        </motion.div>

        {/* Branch cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {branches.map((branch, index) => (
            <motion.div
              key={branch.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
            >
              <Link
                href={branch.mapUrl}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="group block"
              >
                {/* Map Image */}
                <div className="aspect-square bg-zinc-100 relative overflow-hidden mb-4 group-hover:shadow-lg transition-shadow">
                  <Image
                    src={branch.mapImage}
                    alt={`${branch.name} 지도`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <span className="absolute bottom-2 right-2 text-zinc-400 text-sm">
                    지도 보기
                  </span>
                </div>

                {/* Info */}
                <h3 className="text-xl font-bold text-text-on-light mb-2 group-hover:text-accent transition-colors">
                  {branch.name}
                </h3>
                <p className="text-base md:text-lg text-text-on-light/70 mb-2">{branch.address}</p>
                <ul className="space-y-1">
                  {branch.landmarks.map((landmark, i) => (
                    <li key={i} className="flex items-center gap-1.5 text-base text-text-on-light/50">
                      <span className="w-1 h-1 rounded-full bg-text-on-light/30" />
                      {landmark}
                    </li>
                  ))}
                </ul>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
