"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check } from "lucide-react";
import PageHero from "@/components/PageHero";
import ProgramSubNav from "./ProgramSubNav";
import ProgramBeforeAfter from "./ProgramBeforeAfter";
import ProgramFAQ from "./ProgramFAQ";

const proReferences = [
  {
    name: "배우 정성일",
    description: "3옥타브장인에서 보컬 트레이닝",
  },
  {
    name: "인피니트",
    description: "K-POP 아이돌 그룹 보컬 트레이닝",
  },
  {
    name: "노라조",
    description: "엔터테이너 보컬 트레이닝",
  },
  {
    name: "비스트",
    description: "K-POP 아이돌 그룹 보컬 트레이닝",
  },
];

const advancedCurriculum = [
  {
    number: "01",
    title: "노래 적용",
    description:
      "기초에서 배운 발성을 실제 노래에 적용합니다. 올바른 발성 위에 노래를 얹히는 연습을 통해 자연스럽고 편안한 가창을 구현합니다.",
  },
  {
    number: "02",
    title: "음역대 확장",
    description:
      "저음부터 고음까지 자유로운 이동. 믹스 보이스, 벨팅 등 다양한 테크닉으로 음역대의 한계를 돌파합니다.",
  },
  {
    number: "03",
    title: "곡 해석 & 감정 표현",
    description:
      "단순 테크닉을 넘어서 음악적 표현력을 강화합니다. 같은 곡이라도 감정 전달력에 따라 완전히 다른 노래가 됩니다.",
  },
  {
    number: "04",
    title: "다양한 장르 스타일링",
    description:
      "발라드, 팝, R&B, 록 등 장르별 보컬 테크닉을 습득합니다. 어떤 장르의 곡이든 자신만의 스타일로 소화할 수 있게 됩니다.",
  },
];

const targetChecklist = [
  "기본 발성은 되는데, 노래에 적용이 안 된다",
  "고음은 나오지만 듣기 좋은 소리가 아니다",
  "감정 전달이 어렵고, 밋밋한 노래가 된다",
  "자신만의 보컬 스타일을 찾고 싶다",
  "실용음악 입시나 오디션을 준비 중이다",
  "프로 가수/뮤지컬 배우로 한 단계 성장하고 싶다",
];

export default function AdvancedProgramContent() {
  const introRef = useRef<HTMLElement>(null);
  const introInView = useInView(introRef, { once: true, amount: 0.2 });
  const proRef = useRef<HTMLElement>(null);
  const proInView = useInView(proRef, { once: true, amount: 0.1 });
  const curriculumRef = useRef<HTMLElement>(null);
  const curriculumInView = useInView(curriculumRef, {
    once: true,
    amount: 0.1,
  });
  const checklistRef = useRef<HTMLElement>(null);
  const checklistInView = useInView(checklistRef, { once: true, amount: 0.2 });

  return (
    <>
      <PageHero
        heading="심화 교육과정"
        subheading="Advanced Vocal Training"
        description="기초 발성을 실제 노래에 적용하는 심화 보컬 트레이닝"
      />
      <ProgramSubNav />

      {/* Section 1: Intro */}
      <section ref={introRef} className="bg-black py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={introInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <p className="text-accent text-sm font-bold tracking-widest uppercase mb-4">
                Beyond High Notes
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-snug mb-6">
                고음만 된다고{" "}
                <span className="text-accent">끝이 아닙니다.</span>
              </h2>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6">
                듣는 순간 소름 돋는 노래엔{" "}
                <span className="text-white font-bold">결정적 차이</span>가
                있습니다. 올바른 발성 위에 테크닉과 감정 표현을 더해야 비로소
                &lsquo;잘 부른다&rsquo;는 소리를 듣게 됩니다.
              </p>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                심화 과정은 기본 과정에서 완성한 발성을{" "}
                <span className="text-white font-bold">
                  실제 노래에 적용하고, 자신만의 보컬 스타일
                </span>
                을 만들어가는 과정입니다. 음역대 확장, 곡 해석, 감정 표현,
                장르별 스타일링까지 체계적으로 배웁니다.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={introInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/3] bg-zinc-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <p className="font-display text-6xl md:text-7xl text-white/10">
                      ADVANCED
                    </p>
                    <p className="text-accent text-sm tracking-widest mt-2">
                      VOCAL TRAINING
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2: Pro References */}
      <section ref={proRef} className="bg-zinc-900 py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={proInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <p className="font-display text-sm tracking-[0.2em] text-gray-500 mb-3">
              PROFESSIONAL CHOICE
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
              <span className="text-accent">프로</span>들의 선택
            </h2>
            <p className="text-gray-400 text-sm md:text-base mt-4">
              현직 배우, 가수들도 선택한 3옥타브장인의 트레이닝
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
            {proReferences.map((pro, index) => (
              <motion.div
                key={pro.name}
                initial={{ opacity: 0, y: 20 }}
                animate={proInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                className="text-center group"
              >
                <div className="aspect-square bg-black relative overflow-hidden mb-4">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#e6204d"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                    </div>
                  </div>
                </div>
                <h3 className="text-white font-bold text-sm md:text-base">
                  {pro.name}
                </h3>
                <p className="text-gray-500 text-xs mt-1">{pro.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Curriculum */}
      <section ref={curriculumRef} className="bg-white py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={curriculumInView ? { opacity: 1, y: 0 } : {}}
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {advancedCurriculum.map((item, index) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 30 }}
                animate={curriculumInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                className="border border-gray-200 p-8 lg:p-10 relative overflow-hidden group hover:border-accent transition-colors duration-300"
              >
                <span className="font-display text-5xl text-gray-100 group-hover:text-accent/10 transition-colors duration-300 leading-none">
                  {item.number}
                </span>
                <h3 className="text-xl font-bold text-text-on-light mt-4 mb-3">
                  {item.title}
                </h3>
                <div className="w-12 h-[2px] bg-accent mb-4" />
                <p className="text-sm text-text-on-light/60 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Target Checklist */}
      <section ref={checklistRef} className="bg-zinc-900 py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={checklistInView ? { opacity: 1, y: 0 } : {}}
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
                animate={checklistInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 + index * 0.08 }}
                className="flex items-start gap-4 p-4 border border-white/10 hover:border-accent/50 transition-colors duration-300"
              >
                <div className="w-6 h-6 shrink-0 bg-accent/20 flex items-center justify-center mt-0.5">
                  <Check size={14} className="text-accent" />
                </div>
                <p className="text-white text-sm md:text-base">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After */}
      <ProgramBeforeAfter reviewLabel="심화 과정을 이수한 후기가 궁금하신가요?" />

      {/* FAQ */}
      <ProgramFAQ />

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
            고음만 된다고 끝이 아닙니다.
          </p>
          <p className="text-white/80 text-sm md:text-base mb-8">
            듣는 순간 소름 돋는 노래, 직접 만들어 보세요.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-text-on-light hover:bg-black hover:text-white px-8 py-4 text-sm font-bold transition-all duration-300"
          >
            무료 상담 문의하기
          </Link>
        </div>
      </section>
    </>
  );
}
