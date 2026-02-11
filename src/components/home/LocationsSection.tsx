"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const branches = [
  {
    name: "서울점",
    address: "서울시 서초구 서초대로78길 36, 강남지웰타워 5층",
    landmarks: ["강남역 5번출구 100m"],
    mapUrl: "https://naver.me/5vcHjbd8",
  },
  {
    name: "부산점",
    address: "부산 부산진구 서전로17, 3층",
    landmarks: ["서면역 8번출구 100m"],
    mapUrl: "https://naver.me/5PVPwh3I",
  },
  {
    name: "인천점",
    address: "인천 부평구 경원대로 1414, 2층",
    landmarks: ["부평역 7번출구 250m", "부평지하상가 11번출구 100m"],
    mapUrl: "https://naver.me/5YFpHxrR",
  },
];

export default function LocationsSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="bg-white py-20 lg:py-28">
      <div className="max-w-5xl mx-auto px-6">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="text-text-on-light/50 text-sm mb-2">오시는 길</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-on-light">
            <span className="text-accent">전국 3개의 지점</span>에서<br />
            3옥타브장인 보컬학원을 만나보세요.
          </h2>
        </motion.div>

        {/* Branch cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                {/* Map placeholder */}
                <div className="aspect-square bg-zinc-100 relative overflow-hidden mb-4 group-hover:shadow-lg transition-shadow">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-md">
                      <svg width="14" height="18" viewBox="0 0 14 18" fill="white">
                        <path d="M7 0C3.13 0 0 3.13 0 7c0 5.25 7 11 7 11s7-5.75 7-11c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
                      </svg>
                    </div>
                  </div>
                  <span className="absolute bottom-2 right-2 text-zinc-400 text-[10px]">
                    지도 보기
                  </span>
                </div>

                {/* Info */}
                <h3 className="text-lg font-bold text-text-on-light mb-2 group-hover:text-accent transition-colors">
                  {branch.name}
                </h3>
                <p className="text-sm text-text-on-light/70 mb-2">{branch.address}</p>
                <ul className="space-y-1">
                  {branch.landmarks.map((landmark, i) => (
                    <li key={i} className="flex items-center gap-1.5 text-xs text-text-on-light/50">
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
