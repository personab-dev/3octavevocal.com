"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Phone, MessageCircle } from "lucide-react";

const branches = [
  {
    name: "서울점",
    nameEn: "SEOUL",
    address: "서울시 서초구 서초대로78길 36, 강남지웰타워 5층 501호",
    landmark: "강남역 5번출구 100m",
    phone: "0507-1406-2849",
    kakao: "https://pf.kakao.com/_VwYHd",
    mapUrl: "https://naver.me/5vcHjbd8",
  },
  {
    name: "인천점",
    nameEn: "INCHEON",
    address: "인천 부평구 경원대로 1414, 2층 (부평동 185-41)",
    landmark: "부평역 7번출구 250m",
    phone: "0507-1319-1769",
    kakao: null,
    mapUrl: "https://naver.me/5YFpHxrR",
  },
  {
    name: "부산점",
    nameEn: "BUSAN",
    address: "부산 부산진구 서전로 17, 3층 (부전동, 진성빌딩)",
    landmark: "서면역 8번출구 100m",
    phone: "0507-1351-9158",
    kakao: "https://pf.kakao.com/_gUMxbs",
    mapUrl: "https://naver.me/5PVPwh3I",
  },
];

export default function BranchCards() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {branches.map((branch, i) => (
        <motion.div
          key={branch.name}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="bg-white p-6 lg:p-8 border border-gray-100"
        >
          {/* Header */}
          <p className="font-display text-xs tracking-[0.2em] text-text-on-light/30 mb-1">
            {branch.nameEn}
          </p>
          <h3 className="text-xl font-bold text-text-on-light mb-5">
            {branch.name}
          </h3>

          {/* Info */}
          <div className="space-y-4 text-sm">
            <div className="flex items-start gap-3">
              <MapPin size={16} className="text-accent mt-0.5 shrink-0" />
              <div>
                <p className="text-text-on-light">{branch.address}</p>
                <p className="text-accent text-xs mt-0.5">{branch.landmark}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Phone size={16} className="text-accent shrink-0" />
              <Link
                href={`tel:${branch.phone.replace(/-/g, "")}`}
                className="text-text-on-light hover:text-accent transition-colors"
              >
                {branch.phone}
              </Link>
            </div>
          </div>

          {/* Action Links */}
          <div className="flex gap-2 mt-6 pt-5 border-t border-gray-100">
            <Link
              href={branch.mapUrl}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-text-on-light/60 hover:text-accent transition-colors"
            >
              <MapPin size={14} />
              지도
            </Link>
            {branch.kakao && (
              <Link
                href={branch.kakao}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-text-on-light/60 hover:text-accent transition-colors"
              >
                <MessageCircle size={14} />
                카카오톡
              </Link>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
