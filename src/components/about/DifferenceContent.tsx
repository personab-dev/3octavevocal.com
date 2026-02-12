"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import PageHero from "@/components/PageHero";
import AboutSubNav from "./AboutSubNav";
import CountUp from "@/components/animations/CountUp";

const differentiators = [
  {
    number: "01",
    title: "7,000명이 선택한 교육,\n경쟁 학원들도 참고하는 커리큘럼",
    titleAccent: "경쟁 학원들도 참고",
    description:
      "1,500개 이상의 후기와 수많은 비포&애프터가 증명하는 체계적인 커리큘럼\n(타 학원에서도 배우러 옵니다.)",
    bullets: [
      "10년간, 7,000명 이상의 실전 데이터로 완성된 체계적인 커리큘럼",
      "성대 구조부터 호흡까지, 과학적 분석을 통한 1:1 맞춤 솔루션",
      "현직 이비인후과 전문의와 협력하여 개발한 안전한 발성 메소드",
      "일반인뿐만 아니라 프로 가수도 찾는 검증된 시스템",
    ],
  },
  {
    number: "02",
    title: "끝까지 책임지는\n'평생 무료 피드백' 시스템",
    titleAccent: "평생 무료 피드백",
    description:
      "학원을 그만둔 후에도 지속적인 피드백을 통해 실력이 더 향상되는 것을 보면,\n저희의 교육 철학이 틀리지 않았다는 걸 다시 한번 느끼게 됩니다.",
    bullets: [
      "수업 외 시간에도 음성 및 영상 피드백 무제한 제공",
      "담당 강사뿐만 아니라, 모든 강사진에게 1:1 피드백 제공",
      "주 1회 꾸준한 피드백만 받아도, 수강료 할인 혜택까지!",
    ],
  },
  {
    number: "03",
    title: "책임 없는 강사는 가르칠 수 없습니다.\n오직 검증된 정직원 강사진만 수업합니다.",
    titleAccent: "검증된 정직원 강사진",
    description:
      "수업의 질은 강사의 실력에서 결정됩니다.\n우리는 아무나 가르칠 수 없도록 만들었습니다.",
    bullets: [
      "6개월 이상의 체계적인 자체교육을 거쳐 검증된 강사만 채용",
      "프리랜서가 아닌 정직원 강사진 — 책임감이 다른 수업 퀄리티",
      "철저한 강사 관리 시스템으로, 수업의 퀄리티를 언제나 최고 수준으로 유지",
    ],
  },
  {
    number: "04",
    title: "최고의 교육 퀄리티를 위해,\n한정된 인원만 가르칩니다.",
    titleAccent: "한정된 인원",
    description: "모든 수강생이 실력 향상을 체감할 수 있도록!",
    bullets: [
      "소수 정예 그룹 레슨으로, 최고의 교육 퀄리티 보장",
      "개인별 특성에 맞는 맞춤형 피드백 제공",
      "단순한 수업이 아닌, 실전에서 적용 가능한 실력까지 향상",
    ],
  },
];

const stats = [
  { label: "누적 보컬레슨 시간", value: 595680, suffix: "+" },
  { label: "누적 수강생", value: 7000, suffix: "명+" },
  { label: "만족도", value: 98, suffix: "%" },
];

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

export default function DifferenceContent() {
  const listRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLElement>(null);
  const statsInView = useInView(statsRef, { once: true, amount: 0.3 });
  const videoRef = useRef<HTMLElement>(null);
  const videoInView = useInView(videoRef, { once: true, amount: 0.2 });

  return (
    <>
      <PageHero
        heading="차별점"
        subheading="Why 3 Octave Master?"
        description="고음이 안되던 우리가 직접 경험한 확실한 방법"
      />
      <AboutSubNav />

      {/* Differentiators List */}
      <section ref={listRef} className="bg-white">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr]">
            {/* Left: Sticky panel */}
            <div className="lg:sticky lg:top-20 lg:self-start bg-accent p-8 lg:p-12 lg:min-h-[calc(100vh-80px)] flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-black/10 -translate-y-1/2 translate-x-1/2 rotate-45" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-black/10 translate-y-1/2 -translate-x-1/2 rotate-45" />

              <div className="relative z-10">
                <p className="font-display text-sm md:text-base tracking-[0.2em] text-white/60 mb-4">
                  3옥타브장인의 보컬교육
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight">
                  고음이 안되던 우리가
                  <br />
                  직접 경험한
                  <br />
                  <span className="underline decoration-white decoration-4 underline-offset-4">
                    확실한 방법
                  </span>
                </h2>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-white text-text-on-light hover:bg-black hover:text-white px-7 py-3.5 text-base font-bold mt-8 transition-all duration-300"
                >
                  무료 상담 예약
                </Link>
              </div>
            </div>

            {/* Right: Differentiator items */}
            <div className="divide-y divide-gray-200">
              {differentiators.map((item, index) => (
                <DifferentiatorItem key={item.number} item={item} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-zinc-900">
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={statsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="mb-12"
          >
            <p className="text-gray-400 text-base md:text-lg mb-2">
              더 말이 필요 있을까요?
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
              일반인 대상 보컬학원 중{" "}
              <span className="text-accent">최다 수강생</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
              >
                <div className="flex items-baseline justify-center gap-1">
                  <span className="font-bold text-4xl md:text-5xl lg:text-6xl text-white">
                    <CountUp end={stat.value} suffix="" />
                  </span>
                  <span className="text-white/60 text-lg">{stat.suffix}</span>
                </div>
                <span className="text-gray-500 text-sm md:text-base mt-2 block">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Videos */}
      <section ref={videoRef} className="bg-white py-20 lg:py-28">
        <div className="max-w-[1440px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={videoInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <p className="text-text-on-light/60 text-base md:text-lg mb-3">
              보컬 레슨 후 변화가 궁금하신가요?
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-on-light">
              생생한{" "}
              <span className="text-accent font-black">BEFORE &amp; AFTER</span>
              가 실력 상승을 증명합니다.
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {videos.map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={videoInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              >
                <Link
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="group block"
                >
                  <div className="aspect-[9/16] bg-zinc-200 relative overflow-hidden mb-3">
                    <Image
                      src={video.thumbnail}
                      alt={video.title.replace("\n", " ")}
                      fill
                      sizes="(max-width: 768px) 50vw, 16vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-accent/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <svg width="16" height="18" viewBox="0 0 16 18" fill="white">
                          <path d="M0 0L16 9L0 18V0Z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <p className="text-text-on-light text-sm md:text-base leading-snug whitespace-pre-line group-hover:text-accent transition-colors">
                    {video.title}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 border border-accent text-accent hover:bg-accent hover:text-white px-7 py-3.5 text-base font-bold tracking-wide transition-all duration-300"
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
          </div>
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

function DifferentiatorItem({
  item,
  index,
}: {
  item: (typeof differentiators)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      className="p-8 lg:p-12 lg:py-16"
    >
      <div className="flex gap-6 lg:gap-10">
        {/* Number */}
        <span className="text-4xl md:text-5xl font-bold text-gray-200 shrink-0">
          {item.number}
        </span>

        <div>
          {/* Title with accent */}
          <h3 className="text-xl md:text-2xl font-bold text-text-on-light whitespace-pre-line leading-snug mb-4">
            {item.title.split(item.titleAccent).map((part, i, arr) =>
              i < arr.length - 1 ? (
                <span key={i}>
                  {part}
                  <span className="text-accent underline decoration-accent underline-offset-4">
                    {item.titleAccent}
                  </span>
                </span>
              ) : (
                <span key={i}>{part}</span>
              )
            )}
          </h3>

          {/* Divider */}
          <div className="w-full h-[1px] bg-gray-200 mb-4" />

          {/* Description */}
          <p className="text-text-on-light/70 text-base md:text-lg leading-relaxed whitespace-pre-line mb-4">
            {item.description}
          </p>

          {/* Bullets */}
          <ul className="space-y-2">
            {item.bullets.map((bullet, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-sm md:text-base text-text-on-light/70"
              >
                <span className="w-1 h-1 rounded-full bg-text-on-light/40 mt-2 shrink-0" />
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
