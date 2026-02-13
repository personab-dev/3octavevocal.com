"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Check,
  Wind,
  Mic,
  Music,
  MessageCircle,
  Users,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import ProgramSubNav from "./ProgramSubNav";
import ProgramBeforeAfter from "./ProgramBeforeAfter";
import ProgramFAQ from "./ProgramFAQ";

/* ── Data ─────────────────────────────────────────── */

const worries = [
  "고음이 안 나와서",
  "목이 아파서",
  "내 목소리가 싫어서...",
];

const curriculumDetails = [
  {
    number: "01",
    title: "호흡",
    subtitle: "고음이 뚫리는 기본기",
    icon: Wind,
    items: [
      "기초 호흡법 (안정적인 호흡 조절)",
      "호흡 밸런스 훈련 (불필요한 힘 빼고, 필요한 힘만 쓰는 법)",
      "호흡근 강화 (숨이 차지 않고 지치지 않는 가창력)",
      "호흡 컨트롤 (호흡 사용 최적화)",
    ],
  },
  {
    number: "02",
    title: "위치",
    subtitle: "소리를 컨트롤하는 핵심 기술",
    icon: Mic,
    items: [
      "소리의 위치 이해 (답답한 소리를 시원하게 변환)",
      "성대 컨트롤 (같은 고음도 강하게&부드럽게, 원하는대로!)",
      "톤 & 감정 (단순한 발음이 아닌, 감정이 묻어나는 소리 만들기)",
      "모음/자음 발음 교정 (가사가 또렷하게 전달되는 선명한 발성)",
      "목에 힘빼기 & 공명 훈련 (힘으로 밀지 않아도 뚫리는 고음)",
    ],
  },
  {
    number: "03",
    title: "피치",
    subtitle: "초고음까지 음역대를 확장하는 기술",
    icon: Music,
    items: [
      "고음 확장 (힘으로 밀지 않아도 시원하게 올라가는 고음)",
      "성구 전환 & 통합 (저음에서 고음을 이질감 없이 넘나들 수 있다!)",
      "고음 컨트롤 능력 강화 (성대를 보호하면서 초고음까지 음역대 확장)",
    ],
  },
];

const checklistCategories = [
  {
    title: "고음 & 음역대",
    items: [
      "고음 구간만 나오면 목이 조이면서 소리가 안 나와요",
      "2옥타브 라(A4) 이상은 아예 시도도 못해요",
      "음을 지르면 지를수록 점점 더 안 나와요",
    ],
  },
  {
    title: "목 상태 & 호흡",
    items: [
      "노래 한 곡만 불러도 목이 쉬어버려요",
      "호흡이 짧아서 한 소절도 못 끝내겠어요",
      "가슴이나 어깨로 숨을 쉬는 것 같아요",
    ],
  },
  {
    title: "발음 & 톤",
    items: [
      "고음 부분에서는 발음이 전혀 안 돼요",
      "목소리가 너무 얇고 약해서 콤플렉스에요",
      "삑사리가 너무 심해서 노래방을 갈 때마다 겁이 나요",
    ],
  },
];

const expertList = [
  "WHO 공인 중국침구의",
  "대한통증척수학회 전문의",
  "Carrick's 카이로프랙틱 전문가",
];

/* ── Component ────────────────────────────────────── */

export default function BasicProgramContent() {
  const hookRef = useRef<HTMLElement>(null);
  const hookInView = useInView(hookRef, { once: true, amount: 0.2 });

  const approachRef = useRef<HTMLElement>(null);
  const approachInView = useInView(approachRef, { once: true, amount: 0.15 });

  const compareRef = useRef<HTMLElement>(null);
  const compareInView = useInView(compareRef, { once: true, amount: 0.15 });

  const currRef = useRef<HTMLElement>(null);
  const currInView = useInView(currRef, { once: true, amount: 0.1 });

  const instrRef = useRef<HTMLElement>(null);
  const instrInView = useInView(instrRef, { once: true, amount: 0.15 });

  const checkRef = useRef<HTMLElement>(null);
  const checkInView = useInView(checkRef, { once: true, amount: 0.1 });

  return (
    <>
      {/* ── 1. PageHero ──────────────────────────── */}
      <PageHero
        heading="기본 교육과정"
        subheading="Basic Vocal Training"
        description="발성의 기본 — 호흡, 위치, 피치를 체계적으로 배우는 기초 보컬 트레이닝"
      />

      {/* ── 2. ProgramSubNav ─────────────────────── */}
      <ProgramSubNav />

      {/* ── 3. Hook Section ──────────────────────── */}
      <section ref={hookRef}>
        {/* Title area — light bg */}
        <div className="bg-white py-14 lg:py-16">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={hookInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-accent text-sm md:text-base font-bold tracking-widest mb-5"
            >
              7천명+이 검증한 단 하나의 발성 기본 커리큘럼
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={hookInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-2xl md:text-3xl lg:text-[2.5rem] font-bold text-text-on-light leading-snug"
            >
              학원비로 중형차 한 대{" "}
              <span className="text-accent">태운 수강생,</span>
              <br />
              20분 만에 고쳤습니다.
            </motion.h2>
          </div>
        </div>

        {/* Image area with worry bubbles overlay */}
        <div className="relative aspect-[16/7] md:aspect-[16/5] overflow-hidden bg-zinc-800">
          {/* Placeholder — replace with actual image */}
          <Image
            src="/images/program/basic-hero.jpg"
            alt="3옥타브장인 보컬 레슨 현장"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />

          {/* Worry Bubbles */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-full max-w-2xl px-6 flex flex-wrap items-center justify-center gap-4 md:gap-6">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={hookInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-zinc-700/80 backdrop-blur-sm rounded-xl px-6 py-3.5 text-gray-200 text-sm md:text-base"
              >
                고음이 안 나와서
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={hookInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.45 }}
                className="bg-zinc-700/80 backdrop-blur-sm rounded-xl px-6 py-3.5 text-gray-200 text-sm md:text-base mt-8 md:mt-10"
              >
                목이 아파서
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={hookInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="bg-zinc-700/80 backdrop-blur-sm rounded-xl px-6 py-3.5 text-gray-200 text-sm md:text-base border border-white/20"
              >
                내 목소리가 싫어서...
              </motion.div>
            </div>
          </div>
        </div>

        {/* Accent Bridge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={hookInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="bg-accent py-5 relative overflow-hidden"
        >
          {/* Diagonal decoration */}
          <div className="absolute left-0 top-0 h-full w-20 md:w-32 bg-accent-dark/20 -skew-x-12 -translate-x-4" />
          <p className="text-center text-white text-base md:text-lg font-bold tracking-wide relative z-10">
            당신의 고민, 모두{" "}
            <span className="underline underline-offset-4">발성</span>에서
            시작됩니다.
          </p>
        </motion.div>
      </section>

      {/* ── 4. Curriculum Approach ────────────────── */}
      <section ref={approachRef} className="bg-white py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={approachInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <p className="text-text-on-light/50 text-sm mb-3 tracking-widest">
              주먹구구식 강의가 아닌 &lsquo;진짜&rsquo; 발성강의
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-on-light">
              매일을 고민하며 쌓아온,{" "}
              <span className="text-accent">15년</span>의 발성과정 커리큘럼
            </h2>
          </motion.div>

          {/* Row 1 — Image left, Text right */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={approachInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] overflow-hidden bg-gray-50 mb-6"
          >
            <div className="relative aspect-[4/3] lg:aspect-auto bg-zinc-300">
              <Image
                src="/images/program/approach-01.jpg"
                alt="체계적인 발성 교육 현장"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center p-8 lg:p-12">
              <h3 className="text-xl md:text-2xl font-bold text-text-on-light mb-4 leading-snug">
                누구나 이해 가능한
                <br />
                체계적인 발성 교육
              </h3>
              <p className="text-text-on-light/60 text-sm md:text-base leading-relaxed">
                해부학, 생리학, 음성학
                <br />
                기반의 체계적 발성 훈련
                <br />
                커리큘럼
              </p>
            </div>
          </motion.div>

          {/* Row 2 — Text left, Image right */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={approachInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] overflow-hidden bg-gray-50"
          >
            <div className="flex flex-col justify-center p-8 lg:p-12 order-2 lg:order-1">
              <h3 className="text-xl md:text-2xl font-bold text-text-on-light mb-4 leading-snug">
                해부학 및 생리학
                <br />
                전문가와의 협업
              </h3>
              <ul className="space-y-3">
                {expertList.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-text-on-light/70 text-sm md:text-base"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-text-on-light/40 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-[4/3] lg:aspect-auto bg-zinc-300 order-1 lg:order-2">
              <Image
                src="/images/program/approach-02.jpg"
                alt="해부학 전문가와 협업하는 발성 교육"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 5. Before / After Comparison ──────────── */}
      <section ref={compareRef} className="bg-zinc-900 py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={compareInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-14"
          >
            <p className="font-display text-sm tracking-[0.2em] text-gray-500 mb-3">
              BEFORE / AFTER
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
              수강 이후, 당신의{" "}
              <span className="text-accent">고음</span>은 이렇게 달라집니다.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Before */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={compareInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="bg-zinc-800 p-8 lg:p-10 hover:scale-[1.02] transition-transform duration-300"
            >
              <p className="font-display text-sm tracking-[0.2em] text-gray-500 mb-4">
                BEFORE
              </p>
              <h3 className="text-lg md:text-xl font-bold text-gray-400 mb-6">
                힘으로만 버티는 고음,
                <br />
                불안정한 소리
              </h3>
              <ul className="space-y-4">
                {[
                  "목이 조여서 고음이 올라가지 않음",
                  "소리가 갈라지고 흔들림",
                  "몇 곡만 불러도 목이 피로하고 금방 잠김",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-500 shrink-0 mt-2" />
                    <span className="text-gray-400 text-sm md:text-base leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* After */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={compareInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-accent p-8 lg:p-10 hover:scale-[1.02] transition-transform duration-300"
            >
              <p className="font-display text-sm tracking-[0.2em] text-white/60 mb-4">
                AFTER
              </p>
              <h3 className="text-lg md:text-xl font-bold text-white mb-6">
                힘이 아닌 기술로 뚫리는
                <br />
                시원한 고음
              </h3>
              <ul className="space-y-4">
                {[
                  "편안한 발성으로 2옥타브에서 3옥타브까지 음역대 확장",
                  "흔들리지 않는 고음, 여유로운 고음 처리",
                  "힘들이지 않아도 노래가 쉬워지고, 자신감 UP",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/60 shrink-0 mt-2" />
                    <span className="text-white text-sm md:text-base leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 6. Curriculum Details ─────────────────── */}
      <section ref={currRef} className="bg-white py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={currInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <p className="text-text-on-light/50 text-sm mb-3 tracking-widest">
              매달 1키씩 올라가는 마법 같은 커리큘럼
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-on-light">
              3옥타브장인만의{" "}
              <span className="text-accent">기본과정</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {curriculumDetails.map((cur, index) => {
              const Icon = cur.icon;
              return (
                <motion.div
                  key={cur.number}
                  initial={{ opacity: 0, y: 30 }}
                  animate={currInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.12 }}
                  className="bg-zinc-900 p-8 lg:p-10 border border-transparent hover:border-accent transition-colors duration-300 group"
                >
                  <Icon
                    size={32}
                    className="text-white/30 group-hover:text-accent transition-colors duration-300 mb-5"
                  />
                  <span className="font-display text-4xl text-accent leading-none">
                    {cur.number}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-3 mb-1">
                    {cur.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-6">
                    {cur.subtitle}
                  </p>
                  <div className="w-8 h-[2px] bg-accent/40 mb-6" />
                  <ul className="space-y-3">
                    {cur.items.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5 text-gray-400 text-sm leading-relaxed"
                      >
                        <span className="w-1 h-1 rounded-full bg-accent shrink-0 mt-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 7. Instructors ────────────────────────── */}
      <section ref={instrRef} className="bg-white py-20 lg:py-28 border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={instrInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-14"
          >
            <p className="text-text-on-light/50 text-sm mb-3 tracking-widest">
              3옥타브장인이 보장하는 최정예 강사진
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-on-light">
              한 명의 선생님이 아닌,{" "}
              <span className="text-accent">모든 선생님이 당신의 성장</span>을
              돕습니다.
            </h2>
          </motion.div>

          {/* Main 2-column cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={instrInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="bg-zinc-900 p-8 lg:p-10"
            >
              <MessageCircle
                size={28}
                className="text-accent mb-5"
              />
              <h3 className="text-lg md:text-xl font-bold text-white mb-3">
                자유로운 피드백 시스템
              </h3>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                수업이 없는 시간, 모든 선생님께 피드백이 가능합니다. 담당
                선생님뿐만 아니라 모든 강사진에게 자유롭게 질문하고 피드백을
                받으세요.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={instrInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="bg-zinc-900 p-8 lg:p-10"
            >
              <Users
                size={28}
                className="text-accent mb-5"
              />
              <h3 className="text-lg md:text-xl font-bold text-white mb-3">
                동일한 퀄리티로 일관된 보컬 교육
              </h3>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                본원의 모든 선생님이 같은 커리큘럼으로 가르칩니다. 강사에 따라
                수업 퀄리티가 달라지는 일은 없습니다.
              </p>
            </motion.div>
          </div>

          {/* Sub cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: "6개월 자체교육", desc: "체계적인 자체교육 이수" },
              { title: "3개월 인턴", desc: "실전 수업 검증 완료" },
              { title: "정직원 강사", desc: "프리랜서 NO, 책임감 보장" },
              { title: "원장 직접 피드백", desc: "모든 수업 모니터링" },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={instrInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.35 + i * 0.08 }}
                className="border border-gray-200 p-5 text-center hover:border-accent transition-colors duration-300"
              >
                <p className="text-text-on-light font-bold text-sm md:text-base mb-1">
                  {item.title}
                </p>
                <p className="text-text-on-light/50 text-xs md:text-sm">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. Checklist ──────────────────────────── */}
      <section ref={checkRef} className="bg-zinc-900 py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={checkInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-14"
          >
            <p className="font-display text-sm tracking-[0.2em] text-gray-500 mb-3">
              CHECKLIST
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
              내 발성의 문제는{" "}
              <span className="text-accent">뭘까?</span>
            </h2>
            <p className="text-gray-400 text-base md:text-lg">
              <span className="text-accent font-bold">3개 이상</span> 해당되면
              지금 당장 무료상담 받으세요.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {checklistCategories.map((cat, catIdx) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 30 }}
                animate={checkInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + catIdx * 0.12 }}
                className="bg-zinc-700/50 p-7 lg:p-8"
              >
                <h3 className="text-white font-bold text-base md:text-lg mb-5 pb-4 border-b border-white/10">
                  {cat.title}
                </h3>
                <ul className="space-y-4">
                  {cat.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-5 h-5 shrink-0 rounded-full border-2 border-accent flex items-center justify-center mt-0.5">
                        <Check size={10} className="text-accent" />
                      </span>
                      <span className="text-gray-300 text-sm leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. ProgramBeforeAfter (영상 후기) ──── */}
      <ProgramBeforeAfter reviewLabel="기본 과정을 이수한 후기가 궁금하신가요?" />

      {/* ── 10. ProgramFAQ ────────────────────────── */}
      <ProgramFAQ />

      {/* ── 11. Final CTA ─────────────────────────── */}
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
            2옥타브에서 멈추실 건가요?
          </p>
          <p className="text-white/80 text-base md:text-lg mb-8">
            단 10분, 첫 레슨만으로도 변화를 경험하세요.
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
