"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronRight, Check } from "lucide-react";
import PageHero from "@/components/PageHero";
import ProgramSubNav from "./ProgramSubNav";
import ProgramBeforeAfter from "./ProgramBeforeAfter";
import ProgramFAQ from "./ProgramFAQ";
import CountUp from "@/components/animations/CountUp";

/* ────────────────────────────────────────────
   DATA
   ──────────────────────────────────────────── */

const personas = [
  {
    badge: "BASIC",
    title: "노래가 처음이거나,\n기본기가 부족한 분",
    checklist: [
      "노래방에서 목이 금방 잠긴다",
      "고음만 나오면 목이 조인다",
      "음정·박자가 자꾸 흔들린다",
      "발성을 제대로 배워본 적이 없다",
    ],
    solution: "호흡·공명·성대 컨트롤부터 탄탄하게",
    href: "/basic",
    label: "기본 과정 보기",
  },
  {
    badge: "ADVANCED",
    title: "기본기는 있지만,\n노래에 적용이 안 되는 분",
    checklist: [
      "발성은 배웠는데 노래에 적용이 안 된다",
      "음역대가 제자리걸음이다",
      "감정 표현이 밋밋하다는 말을 듣는다",
      "좋아하는 곡을 원키로 부르고 싶다",
    ],
    solution: "음역대 확장·곡 해석·장르 스타일링까지",
    href: "/advanced",
    label: "심화 과정 보기",
  },
];

const programs = [
  {
    step: "STEP 1",
    title: "기본 과정",
    titleEn: "BASIC",
    description:
      "발성 기본기, 호흡, 공명, 성대 컨트롤. 완전 초보자도 부담 없이 시작할 수 있는 체계적 발성 트레이닝.",
    items: ["호흡", "공명", "성대 컨트롤", "피치"],
    href: "/basic",
  },
  {
    step: "STEP 2",
    title: "심화 과정",
    titleEn: "ADVANCED",
    description:
      "기초 발성을 실제 노래에 적용. 음역대 확장, 곡 해석, 감정 표현, 장르별 스타일링까지.",
    items: ["노래 적용", "음역대 확장", "곡 해석 & 감정 표현", "장르 스타일링"],
    href: "/advanced",
  },
];

const comparisonRows = [
  {
    label: "대상",
    basic: "노래 초보 · 발성을 배워본 적 없는 분",
    advanced: "기본기는 있지만 노래 적용이 안 되는 분",
  },
  {
    label: "핵심 목표",
    basic: "올바른 발성 습관 형성",
    advanced: "실전 노래 실력 완성",
  },
  {
    label: "배우는 내용",
    basic: "호흡 · 공명 · 성대 컨트롤 · 피치",
    advanced: "음역대 확장 · 곡 해석 · 감정 표현 · 장르 스타일링",
  },
  {
    label: "수업 후 변화",
    basic: "목이 편해지고, 고음이 가능해진다",
    advanced: "좋아하는 곡을 원키로, 감정까지 담아 부른다",
  },
  {
    label: "추천 대상",
    basic: "음치 · 고음불가 · 노래방 공포증",
    advanced: "음역대 정체 · 감정 표현 부족 · 원키 도전",
  },
];

const timeline = [
  {
    period: "1개월",
    badge: "BASIC",
    milestone: "올바른 호흡과 발성 원리를 이해하고, 목이 편해지는 것을 느낀다.",
  },
  {
    period: "2~3개월",
    badge: "BASIC",
    milestone: "고음이 조금씩 올라가고, 음정·박자가 안정된다.",
  },
  {
    period: "4~5개월",
    badge: "ADVANCED",
    milestone: "좋아하는 곡을 원키로 소화하고, 곡 해석·감정 표현이 가능해진다.",
  },
  {
    period: "6개월+",
    badge: "ADVANCED",
    milestone: "장르 스타일링까지 자유자재. 주변에서 '노래 잘한다'는 말을 듣는다.",
  },
];

const stats = [
  { value: 7000, suffix: "+", label: "누적 수강생" },
  { value: 98, suffix: "%", label: "만족도" },
  { value: 15, suffix: "년", label: "커리큘럼 연구" },
  { value: 1500, suffix: "+", label: "수강 후기" },
];

const instructorPoints = [
  "6개월 이상 자체교육을 거친 정직원 강사만 수업",
  "원장의 직접 수업 모니터링 & 피드백 시스템",
  "수강생 실력 향상이 곧 강사 평가 기준",
];

/* ────────────────────────────────────────────
   COMPONENT
   ──────────────────────────────────────────── */

export default function ProgramLanding() {
  return (
    <>
      {/* 1. PageHero */}
      <PageHero
        heading="VOCAL CLASS"
        subheading="Exceed Your Range"
        description="음치, 고음불가 일반인부터 프로 가수까지 모두 동일한 레슨 과정"
      />

      {/* 2. ProgramSubNav */}

      {/* 3. Persona Cards */}
      <PersonaSection />

      {/* 4. 2-Step Curriculum (light) */}
      <CurriculumSection />

      {/* 5. Comparison Table */}
      <ComparisonSection />

      {/* 6. Learning Journey Timeline */}
      <TimelineSection />

      {/* 7. Stats Strip */}
      <StatsStrip />

      {/* 8. Instructor Preview */}
      <InstructorSection />

      {/* 9. Before & After */}
      <ProgramBeforeAfter reviewLabel="어떤 과정이든, 변화는 확실합니다." />

      {/* 10. FAQ */}
      <ProgramFAQ />

      {/* 11. CTA */}
      <CtaSection />
    </>
  );
}

/* ────────────────────────────────────────────
   3. PERSONA CARDS
   ──────────────────────────────────────────── */

function PersonaSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section ref={ref} className="bg-black py-20 lg:py-28">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="font-display text-sm tracking-[0.2em] text-gray-500 mb-3">
            FIND YOUR FIT
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            당신은 <span className="text-accent">어디에</span> 해당하시나요?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {personas.map((persona, index) => (
            <motion.div
              key={persona.badge}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
              className="border border-white/10 hover:border-accent/50 transition-colors duration-300 p-8 lg:p-10 flex flex-col"
            >
              <span className="inline-block self-start text-xs font-bold tracking-widest text-accent border border-accent/30 px-3 py-1 mb-5">
                {persona.badge}
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-white whitespace-pre-line leading-snug mb-6">
                {persona.title}
              </h3>

              <ul className="space-y-3 mb-6">
                {persona.checklist.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-gray-400 text-sm md:text-base"
                  >
                    <Check
                      size={16}
                      className="text-accent shrink-0 mt-0.5"
                    />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="w-full h-[1px] bg-white/10 mb-5" />

              <p className="text-white text-sm md:text-base font-bold mb-6">
                {persona.solution}
              </p>

              <Link
                href={persona.href}
                className="mt-auto inline-flex items-center gap-1 text-accent text-sm md:text-base font-bold group"
              >
                {persona.label}
                <ChevronRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────
   4. 2-STEP CURRICULUM (LIGHT)
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
          className="text-center mb-12"
        >
          <p className="font-display text-sm tracking-[0.2em] text-text-on-light/40 mb-3">
            2-STEP CURRICULUM
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-on-light">
            체계적인 <span className="text-accent">2단계</span> 커리큘럼
          </h2>
          <p className="text-text-on-light/60 text-base md:text-lg mt-4 max-w-2xl mx-auto">
            음치, 고음불가 일반인부터 프로 가수까지 모두 동일한 레슨 과정을 통해
            단계별로 성장할 수 있도록 설계되었습니다.
          </p>
        </motion.div>

        {/* Progress bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="hidden md:flex items-center justify-center gap-0 mb-14"
        >
          {programs.map((program, index) => (
            <div key={program.step} className="flex items-center">
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-accent text-white text-sm font-bold flex items-center justify-center">
                  {index + 1}
                </span>
                <span className="text-sm font-bold text-text-on-light">
                  {program.title}
                </span>
              </div>
              {index < programs.length - 1 && (
                <div className="w-16 lg:w-24 h-[2px] bg-gray-200 mx-4" />
              )}
            </div>
          ))}
        </motion.div>

        <div className="space-y-6 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-6">
          {programs.map((program, index) => (
            <motion.div
              key={program.step}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
            >
              <Link
                href={program.href}
                className="block border border-gray-200 hover:border-accent transition-colors duration-300 p-8 lg:p-10 h-full group"
              >
                <p className="text-accent text-sm font-bold tracking-widest mb-2">
                  {program.step}
                </p>
                <p className="font-display text-3xl text-text-on-light/10 tracking-[0.1em] mb-1">
                  {program.titleEn}
                </p>
                <h3 className="text-xl font-bold text-text-on-light mb-4">
                  {program.title}
                </h3>

                <div className="w-12 h-[2px] bg-accent mb-4" />

                <p className="text-text-on-light/60 text-sm md:text-base leading-relaxed mb-6">
                  {program.description}
                </p>

                <ul className="space-y-2 mb-8">
                  {program.items.map((item) => (
                    <li
                      key={item}
                      className="text-text-on-light/50 text-sm md:text-base flex items-center gap-2"
                    >
                      <span className="w-1 h-1 bg-accent rounded-full shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-1 text-accent text-sm md:text-base font-bold group-hover:gap-2 transition-all duration-300">
                  자세히 보기
                  <ChevronRight size={14} />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────
   5. COMPARISON TABLE
   ──────────────────────────────────────────── */

function ComparisonSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section ref={ref} className="bg-zinc-900 py-20 lg:py-28">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="font-display text-sm tracking-[0.2em] text-gray-500 mb-3">
            COMPARE
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            어떤 과정이 <span className="text-accent">나에게</span> 맞을까?
          </h2>
        </motion.div>

        {/* Desktop table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden md:block"
        >
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="w-1/5 p-4 text-left text-sm text-gray-500 border-b border-white/10" />
                <th className="w-2/5 p-4 text-left border-b border-white/10">
                  <span className="text-accent text-sm font-bold tracking-widest">
                    BASIC
                  </span>
                  <p className="text-white font-bold mt-1">기본 과정</p>
                </th>
                <th className="w-2/5 p-4 text-left border-b border-white/10">
                  <span className="text-accent text-sm font-bold tracking-widest">
                    ADVANCED
                  </span>
                  <p className="text-white font-bold mt-1">심화 과정</p>
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.label}>
                  <td className="p-4 text-sm font-bold text-gray-400 border-b border-white/5 align-top">
                    {row.label}
                  </td>
                  <td className="p-4 text-sm md:text-base text-gray-300 border-b border-white/5 align-top">
                    {row.basic}
                  </td>
                  <td className="p-4 text-sm md:text-base text-gray-300 border-b border-white/5 align-top">
                    {row.advanced}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Mobile card stack */}
        <div className="md:hidden space-y-6">
          {[
            { badge: "BASIC", title: "기본 과정", key: "basic" as const },
            { badge: "ADVANCED", title: "심화 과정", key: "advanced" as const },
          ].map((course, idx) => (
            <motion.div
              key={course.badge}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + idx * 0.15 }}
              className="border border-white/10 p-6"
            >
              <span className="text-accent text-xs font-bold tracking-widest">
                {course.badge}
              </span>
              <p className="text-white font-bold text-lg mt-1 mb-4">
                {course.title}
              </p>
              <dl className="space-y-4">
                {comparisonRows.map((row) => (
                  <div key={row.label}>
                    <dt className="text-xs font-bold text-gray-500 mb-1">
                      {row.label}
                    </dt>
                    <dd className="text-sm text-gray-300">
                      {row[course.key]}
                    </dd>
                  </div>
                ))}
              </dl>
            </motion.div>
          ))}
        </div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12"
        >
          <Link
            href="/basic"
            className="inline-flex items-center gap-2 border border-accent text-accent hover:bg-accent hover:text-white px-7 py-3.5 text-base font-bold transition-all duration-300"
          >
            기본 과정 상세보기
            <ChevronRight size={16} />
          </Link>
          <Link
            href="/advanced"
            className="inline-flex items-center gap-2 border border-accent text-accent hover:bg-accent hover:text-white px-7 py-3.5 text-base font-bold transition-all duration-300"
          >
            심화 과정 상세보기
            <ChevronRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────
   6. LEARNING JOURNEY TIMELINE
   ──────────────────────────────────────────── */

function TimelineSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section ref={ref} className="bg-black py-20 lg:py-28">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="font-display text-sm tracking-[0.2em] text-gray-500 mb-3">
            GROWTH ROADMAP
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            당신의 <span className="text-accent">성장</span> 로드맵
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-[2px] bg-white/10" />

          <div className="space-y-10">
            {timeline.map((item, index) => (
              <motion.div
                key={item.period}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
                className="relative pl-12 md:pl-16"
              >
                {/* Dot */}
                <div className="absolute left-2.5 md:left-4.5 top-1 w-3 h-3 rounded-full bg-accent border-2 border-black" />

                <div className="flex items-center gap-3 mb-2">
                  <span className="text-white font-bold text-lg md:text-xl">
                    {item.period}
                  </span>
                  <span
                    className={`text-[10px] font-bold tracking-widest px-2 py-0.5 ${
                      item.badge === "BASIC"
                        ? "bg-white/10 text-white"
                        : "bg-accent/20 text-accent"
                    }`}
                  >
                    {item.badge}
                  </span>
                </div>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                  {item.milestone}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────
   7. STATS STRIP
   ──────────────────────────────────────────── */

function StatsStrip() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="bg-accent py-14 lg:py-16">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-3xl md:text-4xl lg:text-5xl font-black text-white">
                  {isInView ? (
                    <CountUp end={stat.value} />
                  ) : (
                    "0"
                  )}
                </span>
                <span className="text-white text-lg md:text-xl font-bold">
                  {stat.suffix}
                </span>
              </div>
              <p className="text-white/80 text-sm mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────
   8. INSTRUCTOR PREVIEW
   ──────────────────────────────────────────── */

function InstructorSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section ref={ref} className="bg-white py-20 lg:py-28">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="font-display text-sm tracking-[0.2em] text-text-on-light/40 mb-3">
              INSTRUCTORS
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-on-light leading-snug mb-6">
              <span className="text-accent">아무나</span> 가르칠 수 없습니다
            </h2>
            <p className="text-text-on-light/60 text-base md:text-lg leading-relaxed mb-8">
              수업의 질은 강사의 실력에서 결정됩니다. 3옥타브장인은 아무나
              가르칠 수 없도록 만들었습니다.
            </p>

            <ul className="space-y-4">
              {instructorPoints.map((point, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-3 text-text-on-light text-sm md:text-base"
                >
                  <span className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={14} className="text-accent" />
                  </span>
                  {point}
                </motion.li>
              ))}
            </ul>

            <Link
              href="/difference"
              className="inline-flex items-center gap-1 text-accent text-sm md:text-base font-bold mt-8 group"
            >
              차별점 자세히 알아보기
              <ChevronRight
                size={14}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </motion.div>

          {/* Right: placeholder image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="aspect-[4/3] bg-gray-100 flex items-center justify-center"
          >
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-200 flex items-center justify-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-gray-400"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <p className="text-gray-400 text-sm">강사진 이미지</p>
            </div>
          </motion.div>
        </div>
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
    <section ref={ref} className="bg-accent py-16 lg:py-20 relative overflow-hidden">
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
          <p className="text-white text-xl md:text-2xl lg:text-3xl font-bold mb-4">
            2옥타브에서 멈추실 건가요?
          </p>
          <p className="text-white/80 text-base md:text-lg mb-8">
            무료 상담으로 시작하세요
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-text-on-light hover:bg-black hover:text-white px-8 py-4 text-base font-bold transition-all duration-300"
          >
            무료 상담 예약
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
