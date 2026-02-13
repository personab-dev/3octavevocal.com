"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, useState, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import { Check, ChevronRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import ProgramSubNav from "./ProgramSubNav";
import ProgramBeforeAfter from "./ProgramBeforeAfter";
import ProgramFAQ from "./ProgramFAQ";

/* ────────────────────────────────────────────
   DATA
   ──────────────────────────────────────────── */

const artistImages = [
  { src: "/images/pro-curriculum/artist-1.png", alt: "정성일 — 배우, '더 글로리' 주연", name: "정성일", role: "배우" },
  { src: "/images/pro-curriculum/artist-2.png", alt: "인피니트 — K-POP 보컬 트레이닝", name: "인피니트", role: "아이돌 그룹" },
  { src: "/images/pro-curriculum/artist-3.png", alt: "노라조 — 엔터테이너 보컬 트레이닝", name: "노라조", role: "밴드" },
  { src: "/images/pro-curriculum/artist-4.png", alt: "비스트 — K-POP 보컬 트레이닝", name: "비스트", role: "아이돌 그룹" },
];

const painPoints = [
  "고음은 나오는데 왜 감동이 없을까?",
  "왜 2% 부족한 느낌일까?",
  "소리는 괜찮은데, 왜 이렇게 밋밋할까?",
];

const advancedCurriculum = [
  {
    number: "01",
    title: "호흡과 감정의 조화",
    subtitle: "BREATH & EMOTION",
    bullets: [
      "힘 빼고 고음 내는 '호흡 컨트롤'",
      "감정을 표현하는 호흡 활용법",
      "듣는 이를 사로잡는 안정적인 발성 & 호흡 테크닉",
    ],
  },
  {
    number: "02",
    title: "가사 전달의 기술",
    subtitle: "LYRIC DELIVERY",
    bullets: [
      "'국어책 읽기'가 아닌, 감정을 전달하는 보컬 테크닉",
      "프로들이 쓰는 딕션 디테일",
      "전달력을 3배 업그레이드 시켜주는 딕션 활용법",
      "듣는 순간 몰입되는 감정 표현법",
    ],
  },
  {
    number: "03",
    title: "실전 음악성 강화",
    subtitle: "PRACTICAL MUSICALITY",
    bullets: [
      "밴딩, 비브라토, 애드립 등 프로들이 쓰는 실전 테크닉",
      "'듣는 귀'를 키워, 어떤 곡도 쉽게 소화하는 트레이닝",
      "'내 목소리'에 색깔을 더하는 음색 컨트롤",
    ],
  },
];

const diagnosisItems = [
  "노래할 때 목이 금방 피로해진다",
  "고음에서 소리가 얇아지거나 꺾인다",
  "발성은 배웠는데 노래에 적용이 안 된다",
  "감정 전달이 밋밋하다는 말을 듣는다",
  "음역대가 6개월째 제자리걸음이다",
  "좋아하는 곡을 원키로 못 부른다",
  "자신만의 보컬 스타일이 없다",
  "레코딩하면 생각보다 못 부른다",
];

const targetChecklist = [
  "기본 발성은 되는데, 노래에 적용이 안 된다",
  "고음은 나오지만 듣기 좋은 소리가 아니다",
  "감정 전달이 어렵고, 밋밋한 노래가 된다",
  "자신만의 보컬 스타일을 찾고 싶다",
  "실용음악 입시나 오디션을 준비 중이다",
  "프로 가수/뮤지컬 배우로 한 단계 성장하고 싶다",
];

const promiseCards = [
  {
    title: "자유로운 피드백 시스템",
    desc: "수업이 없는 시간에도, 모든 선생님께 피드백이 가능합니다.",
    detail:
      "담당 강사 한 명이 아닌 전 강사진이 수강생의 성장에 참여합니다. 궁금한 점이 생기면 언제든 질문하고, 언제든 피드백을 받을 수 있습니다.",
  },
  {
    title: "동일한 퀄리티로 일관된 보컬 교육",
    desc: "본원의 모든 선생님이 같은 커리큘럼으로 가르칩니다.",
    detail:
      "6개월 이상 자체교육을 이수한 정직원 강사만 수업합니다. 원장의 직접 모니터링으로 어떤 선생님이든 동일한 수업 퀄리티를 보장합니다.",
  },
];

/* ────────────────────────────────────────────
   COMPONENT
   ──────────────────────────────────────────── */

export default function AdvancedProgramContent() {
  return (
    <>
      {/* 1. Hero */}
      <PageHero
        heading="심화 교육과정"
        subheading="Advanced Vocal Training"
        description="기초 발성을 실제 노래에 적용하는 심화 보컬 트레이닝"
      />

      {/* 2. SubNav */}
      <ProgramSubNav />

      {/* 3. Intro */}
      <IntroSection />

      {/* 4. Pro References */}
      <ProSection />

      {/* 5. Self-Diagnosis */}
      <DiagnosisSection />

      {/* 6. Curriculum */}
      <CurriculumSection />

      {/* 7. Instructor */}
      <InstructorSection />

      {/* 8. Target Checklist */}
      <TargetSection />

      {/* 9. Before & After */}
      <ProgramBeforeAfter reviewLabel="심화 과정을 이수한 후기가 궁금하신가요?" />

      {/* 10. FAQ */}
      <ProgramFAQ />

      {/* 11. CTA */}
      <CtaSection />
    </>
  );
}

/* ────────────────────────────────────────────
   3. INTRO
   ──────────────────────────────────────────── */

function IntroSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section ref={ref} className="bg-black py-20 lg:py-28">
      <div className="max-w-5xl mx-auto px-6">
        {/* Pain point speech bubbles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-14"
        >
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.15 }}
              className="relative bg-zinc-800/80 backdrop-blur-sm px-5 py-3 text-gray-300 text-sm md:text-base"
            >
              {point}
              {/* Speech bubble tail */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[8px] border-l-transparent border-r-transparent border-t-zinc-800/80 sm:block hidden" />
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <p className="text-accent text-sm md:text-base font-bold tracking-widest uppercase mb-4">
              Beyond High Notes
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-snug mb-6">
              고음만 잘 내는 게 아닌,
              <br />
              <span className="text-accent">
                듣는 사람의 마음을 움직이는 보컬
              </span>
              로
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6">
              듣는 순간 소름 돋는 노래엔{" "}
              <span className="text-white font-bold">결정적 차이</span>가
              있습니다. 올바른 발성 위에 테크닉과 감정 표현을 더해야 비로소
              &lsquo;잘 부른다&rsquo;는 소리를 듣게 됩니다.
            </p>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8">
              심화 과정은 기본 과정에서 완성한 발성을{" "}
              <span className="text-white font-bold">
                실제 노래에 적용하고, 자신만의 보컬 스타일
              </span>
              을 만들어가는 과정입니다. 호흡과 감정의 조화, 가사 전달력,
              실전 음악성까지 체계적으로 배웁니다.
            </p>
            <Link
              href="/basic"
              className="inline-flex items-center gap-1 text-gray-500 hover:text-accent text-sm transition-colors group"
            >
              기본 과정부터 보기
              <ChevronRight
                size={14}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative"
          >
            <div className="aspect-[4/3] bg-zinc-900 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent" />
              <div className="absolute top-6 right-6 w-20 h-20 border border-accent/20 rotate-45" />
              <div className="absolute bottom-8 left-8 w-12 h-12 border border-accent/10 rotate-12" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="font-display text-6xl md:text-7xl text-white/10 tracking-wider">
                    ADVANCED
                  </p>
                  <p className="text-accent text-sm tracking-widest mt-2">
                    VOCAL TRAINING
                  </p>
                  <div className="w-12 h-[2px] bg-accent mx-auto mt-4" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────
   4. PRO REFERENCES
   ──────────────────────────────────────────── */

function ProSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section ref={ref} className="bg-zinc-900 py-20 lg:py-28">
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
            <span className="text-accent">프로</span>들은 이유 없이
            선택하지 않습니다.
          </h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-gray-400 text-base md:text-lg text-center max-w-2xl mx-auto mb-14"
        >
          신화, 비스트, 인피니트, 노라조, &lsquo;더 글로리&rsquo; 주연
          배우까지.
          <br className="hidden md:block" />
          프로들이 선택한 커리큘럼 그대로, 당신도 똑같이 성장할 수
          있습니다.
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
          {artistImages.map((artist, index) => (
            <motion.div
              key={artist.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
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
                {/* Role badge */}
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
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────
   5. SELF-DIAGNOSIS (NEW)
   ──────────────────────────────────────────── */

function DiagnosisSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [checked, setChecked] = useState<Set<number>>(new Set());

  const toggle = useCallback((index: number) => {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  }, []);

  const count = checked.size;
  const showCta = count >= 3;

  return (
    <section ref={ref} className="bg-black py-20 lg:py-28">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-6"
        >
          <p className="font-display text-sm tracking-[0.2em] text-gray-500 mb-3">
            SELF CHECK
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            내 발성의 <span className="text-accent">문제</span>는 뭘까?
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-gray-400 text-base text-center mb-12"
        >
          해당하는 항목을 체크해 보세요.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {diagnosisItems.map((item, index) => {
            const isChecked = checked.has(index);
            return (
              <motion.button
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.15 + index * 0.05 }}
                onClick={() => toggle(index)}
                className={`flex items-center gap-3 p-4 text-left transition-all duration-300 border ${
                  isChecked
                    ? "border-accent bg-accent/5"
                    : "border-white/10 hover:border-white/20"
                }`}
              >
                <div
                  className={`w-5 h-5 shrink-0 flex items-center justify-center transition-all duration-300 ${
                    isChecked ? "bg-accent" : "border border-white/20"
                  }`}
                >
                  {isChecked && <Check size={12} className="text-white" />}
                </div>
                <span
                  className={`text-sm md:text-base transition-colors duration-300 ${
                    isChecked ? "text-white" : "text-gray-400"
                  }`}
                >
                  {item}
                </span>
              </motion.button>
            );
          })}
        </div>

        {/* Counter & CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-10 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="text-4xl md:text-5xl font-black text-accent">
              {count}
            </span>
            <span className="text-gray-400 text-sm md:text-base">
              / {diagnosisItems.length} 항목 체크
            </span>
          </div>

          <div
            className={`transition-all duration-500 ${
              showCta
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4 pointer-events-none"
            }`}
          >
            <p className="text-white font-bold text-base md:text-lg mb-4">
              <span className="text-accent">3개 이상</span> 체크되셨다면,
              <br className="md:hidden" /> 지금 당장 무료상담 받으세요.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-accent text-white hover:bg-red-700 px-7 py-3.5 text-base font-bold transition-all duration-300"
            >
              무료 상담 받기
              <ChevronRight size={16} />
            </Link>
          </div>

          {!showCta && (
            <p className="text-gray-600 text-sm">
              3개 이상 체크되면 무료상담을 추천드립니다.
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────
   6. CURRICULUM
   ──────────────────────────────────────────── */

function CurriculumSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section ref={ref} className="bg-white py-20 lg:py-28">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-text-on-light/50 text-sm mb-3 tracking-widest uppercase">
            Curriculum
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-on-light">
            고음과 테크닉을 동시에 잡는
            <br />
            <span className="text-accent">심화 과정</span> 커리큘럼
          </h2>
        </motion.div>

        {/* Desktop: horizontal stepper line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="hidden md:flex items-center justify-center mb-14"
        >
          {advancedCurriculum.map((item, index) => (
            <div key={item.number} className="flex items-center">
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-accent text-white text-sm font-bold flex items-center justify-center">
                  {item.number}
                </span>
                <span className="text-sm font-bold text-text-on-light">
                  {item.title}
                </span>
              </div>
              {index < advancedCurriculum.length - 1 && (
                <div className="w-16 lg:w-24 h-[2px] bg-gray-200 mx-4" />
              )}
            </div>
          ))}
        </motion.div>

        {/* 3 Curriculum Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {advancedCurriculum.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.12 }}
              className="relative overflow-hidden group"
            >
              {/* Dark card with accent gradient on hover */}
              <div className="bg-zinc-900 p-8 lg:p-9 h-full border border-transparent group-hover:border-accent/30 transition-colors duration-300">
                {/* Number badge */}
                <span className="absolute top-5 right-6 font-display text-6xl text-white/5 group-hover:text-accent/10 transition-colors duration-300 leading-none select-none pointer-events-none">
                  {item.number}
                </span>

                <p className="text-accent text-[10px] font-bold tracking-widest mb-2 relative z-10">
                  {item.subtitle}
                </p>
                <h3 className="text-xl font-bold text-white mb-3 relative z-10">
                  {item.title}
                </h3>
                <div className="w-10 h-[2px] bg-accent mb-5" />

                {/* Bullet points */}
                <ul className="space-y-3 relative z-10">
                  {item.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-2.5 text-sm text-gray-400 leading-relaxed"
                    >
                      <span className="w-1 h-1 bg-accent rounded-full shrink-0 mt-2" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────
   7. INSTRUCTOR (NEW)
   ──────────────────────────────────────────── */

function InstructorSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section ref={ref} className="bg-zinc-900 py-20 lg:py-28">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-6"
        >
          <p className="font-display text-sm tracking-[0.2em] text-gray-500 mb-3">
            INSTRUCTORS
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-snug">
            3옥타브장인이 보장하는{" "}
            <span className="text-accent">최정예 강사진</span>
          </h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-gray-400 text-base md:text-lg text-center max-w-xl mx-auto mb-14"
        >
          한 명의 선생님이 아닌,{" "}
          <span className="text-white font-bold">
            모든 선생님이 당신의 성장
          </span>
          을 돕습니다.
        </motion.p>

        {/* 2 Promise Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {promiseCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
              className="relative overflow-hidden group"
            >
              {/* Card with image placeholder background */}
              <div className="bg-black relative min-h-[280px] md:min-h-[320px] flex flex-col justify-end p-8 lg:p-10">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30 z-10" />
                {/* Placeholder background */}
                <div className="absolute inset-0 bg-zinc-800">
                  <div className="absolute inset-0 flex items-center justify-center opacity-20">
                    <svg
                      width="64"
                      height="64"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="1"
                    >
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                </div>
                {/* Content */}
                <div className="relative z-20">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                    {card.title}
                  </h3>
                  <p className="text-accent text-sm font-bold mb-3">
                    {card.desc}
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {card.detail}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-10"
        >
          <Link
            href="/difference"
            className="inline-flex items-center gap-1 text-accent text-sm md:text-base font-bold group"
          >
            차별점 자세히 알아보기
            <ChevronRight
              size={14}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────
   8. TARGET CHECKLIST
   ──────────────────────────────────────────── */

function TargetSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section ref={ref} className="bg-black py-20 lg:py-28">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="font-display text-sm tracking-[0.2em] text-gray-500 mb-3">
            FOR YOU
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            이런 분들을 위한{" "}
            <span className="text-accent">과정입니다</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {targetChecklist.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.08 }}
              className="flex items-start gap-4 p-5 border border-white/10 hover:border-accent/50 transition-colors duration-300 group"
            >
              <div className="w-7 h-7 shrink-0 bg-accent/20 group-hover:bg-accent flex items-center justify-center transition-colors duration-300 mt-0.5">
                <Check
                  size={14}
                  className="text-accent group-hover:text-white transition-colors duration-300"
                />
              </div>
              <p className="text-white text-sm md:text-base">{item}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-10"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 border border-accent text-accent hover:bg-accent hover:text-white px-7 py-3.5 text-base font-bold transition-all duration-300"
          >
            무료 상담 문의하기
            <ChevronRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────
   11. CTA
   ──────────────────────────────────────────── */

function CtaSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      ref={ref}
      className="bg-accent py-16 lg:py-20 relative overflow-hidden"
    >
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-white text-xl md:text-2xl lg:text-3xl font-bold mb-3">
            2옥타브에서 멈추실 건가요?
          </p>
          <p className="text-white/80 text-base md:text-lg mb-8">
            3옥타브를 뚫은 사람들이 선택한 가장 확실한 방법, 직접
            경험해보세요.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-text-on-light hover:bg-black hover:text-white px-8 py-4 text-base font-bold transition-all duration-300"
          >
            무료 상담 문의하기
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
