"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import NaverMap from "@/components/NaverMap";
import SectionHeader from "@/components/SectionHeader";

const branches = [
  {
    name: "서울점",
    address: "서울시 서초구 서초대로78길 36, 강남지웰타워 5층",
    landmarks: ["강남역 5번출구 100m"],
    mapUrl: "https://naver.me/5vcHjbd8",
    lat: 37.49784,
    lng: 127.02764,
  },
  {
    name: "부산점",
    address: "부산 부산진구 서전로17, 3층",
    landmarks: ["서면역 8번출구 100m"],
    mapUrl: "https://naver.me/5PVPwh3I",
    lat: 35.15786,
    lng: 129.05935,
  },
  {
    name: "인천점",
    address: "인천 부평구 경원대로 1414, 2층",
    landmarks: ["부평역 7번출구 250m", "부평지하상가 11번출구 100m"],
    mapUrl: "https://naver.me/5YFpHxrR",
    lat: 37.49065,
    lng: 126.72340,
  },
];

export default function LocationsSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="bg-white py-24 lg:py-36">
      <div className="max-w-6xl mx-auto px-6">
        {/* Headline */}
        <SectionHeader
          label="오시는 길"
          heading={<><span className="text-accent">전국 3개의 지점</span>에서<br />3옥타브장인 보컬학원을 만나보세요.</>}
        />

        {/* Branch cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {branches.map((branch, index) => (
            <motion.div
              key={branch.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
            >
              {/* Map */}
              <div className="aspect-[5/3] bg-zinc-100 relative overflow-hidden rounded-lg mb-4 group hover:shadow-lg transition-shadow">
                <NaverMap lat={branch.lat} lng={branch.lng} className="w-full h-full" />
                <Link
                  href={branch.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="absolute inset-0 z-10"
                >
                  <span className="sr-only">{branch.name} 네이버 지도에서 보기</span>
                </Link>
                <span className="absolute bottom-2 right-2 text-zinc-400 text-sm z-20 pointer-events-none">
                  지도 보기
                </span>
              </div>

              {/* Info */}
              <Link
                href={branch.mapUrl}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="group block"
              >
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
