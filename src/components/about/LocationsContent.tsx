"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Clock, ChevronRight, MessageCircle } from "lucide-react";
import PageHero from "@/components/PageHero";
import AboutSubNav from "./AboutSubNav";

const branches = [
  {
    name: "서울점",
    nameEn: "SEOUL",
    address: "서울시 서초구 서초대로78길 36, 강남지웰타워 5층 501호",
    landmark: "강남역 5번출구 100m",
    phone: ["0507-1406-2849", "02-566-2848"],
    instructors: 7,
    kakao: "https://pf.kakao.com/_VwYHd",
    mapImage: "/images/locations/map-seoul.png",
    mapUrl: "https://naver.me/5vcHjbd8",
  },
  {
    name: "인천점",
    nameEn: "INCHEON",
    address: "인천 부평구 경원대로 1414, 2층 (부평동 185-41)",
    landmark: "부평역 7번출구 250m / 부평지하상가 11번출구 100m",
    phone: ["0507-1319-1769"],
    instructors: null,
    kakao: null,
    mapImage: "/images/locations/map-incheon.png",
    mapUrl: "https://naver.me/5YFpHxrR",
  },
  {
    name: "부산점",
    nameEn: "BUSAN",
    address: "부산 부산진구 서전로 17, 3층 (부전동, 진성빌딩)",
    landmark: "서면역 8번출구 100m",
    phone: ["0507-1351-9158"],
    instructors: 3,
    kakao: "https://pf.kakao.com/_gUMxbs",
    mapImage: "/images/locations/map-busan.png",
    mapUrl: "https://naver.me/5PVPwh3I",
  },
];

const operatingHours = [
  { day: "평일 (월~수, 금)", time: "13:00 ~ 22:00" },
  { day: "토요일", time: "13:00 ~ 22:00" },
  { day: "주말 (일요일)", time: "12:00 ~ 19:00" },
  { day: "목요일", time: "휴무", isHoliday: true },
];

export default function LocationsContent() {
  const [activeBranch, setActiveBranch] = useState(0);
  const branchesRef = useRef<HTMLElement>(null);
  const branchesInView = useInView(branchesRef, { once: true, amount: 0.1 });
  const hoursRef = useRef<HTMLElement>(null);
  const hoursInView = useInView(hoursRef, { once: true, amount: 0.3 });

  return (
    <>
      <PageHero
        heading="지점 찾기"
        subheading="Find Your Branch"
        description="서울 강남, 인천 부평, 부산 서면. 전국 3개 지점에서 만나보세요."
      />
      <AboutSubNav />

      {/* Branch Detail Section */}
      <section ref={branchesRef} className="bg-white py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6">
          {/* Branch Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={branchesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex border-b border-gray-200 mb-12"
          >
            {branches.map((branch, index) => (
              <button
                key={branch.name}
                onClick={() => setActiveBranch(index)}
                className={`flex-1 py-4 text-center font-bold text-sm md:text-base transition-all duration-300 relative ${
                  activeBranch === index
                    ? "text-accent"
                    : "text-text-on-light/40 hover:text-text-on-light/70"
                }`}
              >
                <span className="font-display text-sm tracking-[0.2em] block mb-1">
                  {branch.nameEn}
                </span>
                {branch.name}
                {activeBranch === index && (
                  <motion.div
                    layoutId="branch-tab"
                    className="absolute bottom-0 left-0 w-full h-[3px] bg-accent"
                  />
                )}
              </button>
            ))}
          </motion.div>

          {/* Active Branch Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeBranch}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                {/* Map Image */}
                <Link
                  href={branches[activeBranch].mapUrl}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="block relative overflow-hidden bg-zinc-100 group"
                >
                  <div className="relative w-full h-[250px] md:h-[350px] lg:h-[400px]">
                    <Image
                      src={branches[activeBranch].mapImage}
                      alt={`${branches[activeBranch].name} 지도`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 flex items-center gap-2 text-sm font-medium text-text-on-light group-hover:bg-accent group-hover:text-white transition-all duration-300">
                    <MapPin size={14} />
                    네이버 지도에서 보기
                  </div>
                </Link>

                {/* Branch Info */}
                <div className="flex flex-col justify-center">
                  <h2 className="text-3xl md:text-4xl font-bold text-text-on-light mb-2">
                    {branches[activeBranch].name}
                  </h2>
                  <p className="font-display text-sm tracking-[0.2em] text-text-on-light/40 mb-8">
                    {branches[activeBranch].nameEn} BRANCH
                  </p>

                  {/* Address */}
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-accent/10 flex items-center justify-center shrink-0">
                        <MapPin size={18} className="text-accent" />
                      </div>
                      <div>
                        <p className="text-sm text-text-on-light/40 mb-1">주소</p>
                        <p className="text-text-on-light font-medium text-sm md:text-base">
                          {branches[activeBranch].address}
                        </p>
                        <p className="text-accent text-sm mt-1">
                          {branches[activeBranch].landmark}
                        </p>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-accent/10 flex items-center justify-center shrink-0">
                        <Phone size={18} className="text-accent" />
                      </div>
                      <div>
                        <p className="text-sm text-text-on-light/40 mb-1">전화</p>
                        <div className="space-y-1">
                          {branches[activeBranch].phone.map((num) => (
                            <Link
                              key={num}
                              href={`tel:${num.replace(/-/g, "")}`}
                              className="block text-text-on-light font-medium text-sm md:text-base hover:text-accent transition-colors"
                            >
                              {num}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Instructors */}
                    {branches[activeBranch].instructors && (
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-accent/10 flex items-center justify-center shrink-0">
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#e6204d"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                            <circle cx="9" cy="7" r="4" />
                            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm text-text-on-light/40 mb-1">
                            강사진
                          </p>
                          <p className="text-text-on-light font-medium text-sm md:text-base">
                            정직원 강사{" "}
                            <span className="text-accent font-bold">
                              {branches[activeBranch].instructors}
                            </span>
                            명
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 mt-10">
                    <Link
                      href={branches[activeBranch].mapUrl}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="inline-flex items-center justify-center gap-2 bg-accent text-white hover:bg-accent/90 px-6 py-3.5 text-sm md:text-base font-bold transition-all duration-300"
                    >
                      <MapPin size={16} />
                      길찾기
                    </Link>
                    <Link
                      href={`tel:${branches[activeBranch].phone[0].replace(/-/g, "")}`}
                      className="inline-flex items-center justify-center gap-2 border border-text-on-light/20 text-text-on-light hover:border-accent hover:text-accent px-6 py-3.5 text-sm md:text-base font-bold transition-all duration-300"
                    >
                      <Phone size={16} />
                      전화 상담
                    </Link>
                    {branches[activeBranch].kakao && (
                      <Link
                        href={branches[activeBranch].kakao!}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="inline-flex items-center justify-center gap-2 bg-[#FEE500] text-[#3C1E1E] hover:bg-[#FDD835] px-6 py-3.5 text-sm md:text-base font-bold transition-all duration-300"
                      >
                        <MessageCircle size={16} />
                        카카오톡 상담
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* All Branches Overview */}
      <section className="bg-zinc-900 py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {branches.map((branch, index) => (
              <motion.div
                key={branch.name}
                initial={{ opacity: 0, y: 20 }}
                animate={branchesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              >
                <button
                  onClick={() => {
                    setActiveBranch(index);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className={`block w-full text-left p-6 border transition-all duration-300 ${
                    activeBranch === index
                      ? "border-accent bg-accent/10"
                      : "border-white/10 hover:border-white/30"
                  }`}
                >
                  <span className="font-display text-sm tracking-[0.2em] text-gray-500 block mb-1">
                    {branch.nameEn}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {branch.name}
                  </h3>
                  <p className="text-sm md:text-base text-gray-400 mb-1">{branch.address}</p>
                  <p className="text-sm text-accent">{branch.landmark}</p>
                  <div className="flex items-center gap-1 text-gray-500 text-sm mt-3">
                    자세히 보기
                    <ChevronRight size={12} />
                  </div>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Operating Hours */}
      <section ref={hoursRef} className="bg-black py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={hoursInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <p className="text-gray-500 text-sm mb-3 tracking-widest uppercase">
              Operating Hours
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
              <span className="text-accent">운영시간</span> 안내
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={hoursInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="divide-y divide-white/10"
          >
            {operatingHours.map((item) => (
              <div
                key={item.day}
                className="flex items-center justify-between py-5"
              >
                <div className="flex items-center gap-3">
                  <Clock
                    size={16}
                    className={
                      item.isHoliday ? "text-gray-600" : "text-accent"
                    }
                  />
                  <span
                    className={`text-sm md:text-base ${
                      item.isHoliday ? "text-gray-600" : "text-white"
                    }`}
                  >
                    {item.day}
                  </span>
                </div>
                <span
                  className={`font-bold text-sm md:text-base ${
                    item.isHoliday ? "text-gray-600" : "text-white"
                  }`}
                >
                  {item.time}
                </span>
              </div>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={hoursInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-gray-600 text-sm mt-6 text-center"
          >
            * 공휴일은 운영시간이 변동될 수 있습니다. 방문 전 전화 확인 부탁드립니다.
          </motion.p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-accent py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, transparent, transparent 20px, white 20px, white 21px)",
            }}
          />
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <p className="text-white text-xl md:text-2xl lg:text-3xl font-bold mb-4">
            여기서도 안 된다면, 어디서도 안 됩니다.
          </p>
          <p className="text-white/80 text-base md:text-lg mb-8">
            그만큼 확실한 커리큘럼, 직접 확인하세요.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-text-on-light hover:bg-black hover:text-white px-8 py-4 text-base font-bold transition-all duration-300"
          >
            무료 상담 문의하기
          </Link>
        </div>
      </section>
    </>
  );
}
