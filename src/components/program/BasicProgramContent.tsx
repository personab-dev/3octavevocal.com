"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check } from "lucide-react";
import PageHero from "@/components/PageHero";
import ProgramSubNav from "./ProgramSubNav";
import ProgramBeforeAfter from "./ProgramBeforeAfter";
import ProgramFAQ from "./ProgramFAQ";

const curriculumItems = [
  {
    number: "01",
    title: "호흡",
    description:
      "올바른 복식호흡과 호흡 컨트롤. 노래의 기본 중의 기본인 호흡부터 제대로 잡아드립니다. 안정적인 호흡이 있어야 발성이 가능합니다.",
  },
  {
    number: "02",
    title: "공명",
    description:
      "공명 위치를 이해하고 활용하는 방법. 목소리가 풍성해지고, 적은 힘으로도 큰 소리를 낼 수 있는 비밀이 바로 공명에 있습니다.",
  },
  {
    number: "03",
    title: "성대 컨트롤",
    description:
      "성대 근육의 해부학적 이해와 컨트롤. 과학적/해부학적 접근으로 성대를 올바르게 사용하는 방법을 배웁니다.",
  },
  {
    number: "04",
    title: "피치",
    description:
      "정확한 음정과 음역대 확장. 저음과 고음의 경계선이 없어지고, 모든 음역대에서의 이동과 표현이 자유로워집니다.",
  },
];

const checklist = [
  "고음에서 목이 조이고, 쥐어짜는 느낌이 든다",
  "노래할 때 목이 금방 아프거나 쉰다",
  "음정이 불안정하고 자꾸 흔들린다",
  "호흡이 부족해서 긴 음을 유지하지 못한다",
  "노래방에서 목소리가 마이크에 실리지 않는다",
  "독학으로 연습했는데 실력이 제자리다",
];

const instructorFeatures = [
  {
    title: "6개월 이상 자체교육",
    description: "체계적인 자체교육 과정을 이수한 검증된 강사진",
  },
  {
    title: "3개월 인턴 기간",
    description:
      "커리큘럼을 완전히 이해하고 가르칠 수 있는 수준이 되어야 합니다",
  },
  {
    title: "프리랜서 NO, 정직원 강사",
    description:
      "프리랜서가 아닌 정직원 강사진으로 구성. 책임감 있는 교육을 보장합니다",
  },
  {
    title: "원장 직접 피드백",
    description:
      "김윤민 원장이 모든 강사의 수업을 모니터링하고 직접 피드백합니다",
  },
];

export default function BasicProgramContent() {
  const introRef = useRef<HTMLElement>(null);
  const introInView = useInView(introRef, { once: true, amount: 0.2 });
  const curriculumRef = useRef<HTMLElement>(null);
  const curriculumInView = useInView(curriculumRef, { once: true, amount: 0.1 });
  const checklistRef = useRef<HTMLElement>(null);
  const checklistInView = useInView(checklistRef, { once: true, amount: 0.2 });
  const instructorRef = useRef<HTMLElement>(null);
  const instructorInView = useInView(instructorRef, { once: true, amount: 0.1 });
  const resultRef = useRef<HTMLElement>(null);
  const resultInView = useInView(resultRef, { once: true, amount: 0.2 });

  return (
    <>
      <PageHero
        heading="기본 교육과정"
        subheading="Basic Vocal Training"
        description="발성의 기본인 호흡, 위치, 피치를 체계적으로 배우는 기초 보컬 트레이닝"
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
                7,000명+이 검증한
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-snug mb-6">
                단 하나의{" "}
                <span className="text-accent">발성 기본 커리큘럼</span>
              </h2>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6">
                학원비로 중형차 한 대 태운 수강생, 20분 만에 고쳤습니다.
                <br />
                주먹구구식 강의가 아닌{" "}
                <span className="text-white font-bold">
                  &lsquo;진짜&rsquo; 발성 강의
                </span>
                입니다.
              </p>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                발성의 기본인 호흡, 위치, 피치에 대한 수업을 진행합니다. 발성이
                완성됐을 때 비로소 노래를 할 수 있는 사람이 됩니다.{" "}
                <span className="text-white font-bold">
                  기본적인 호흡, 발성부터 단계별로 진행
                </span>
                하며, 완전 초보자도 부담 없이 시작할 수 있습니다.
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
                      BASIC
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

      {/* Section 2: Curriculum */}
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
              <span className="text-accent">15년의</span> 발성과정 커리큘럼
            </h2>
            <p className="text-text-on-light/60 text-sm md:text-base mt-4 max-w-2xl mx-auto">
              과학적이고 체계적인 발성 원리를 기반으로, 누구나 노래를 잘 부를 수
              있도록 설계된 커리큘럼입니다.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {curriculumItems.map((item, index) => (
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

      {/* Section 3: Checklist */}
      <section ref={checklistRef} className="bg-zinc-900 py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={checklistInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <p className="font-display text-sm tracking-[0.2em] text-gray-500 mb-3">
              CHECKLIST
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
              내 발성의 문제는{" "}
              <span className="text-accent">뭘까?</span>
            </h2>
            <p className="text-gray-400 text-sm md:text-base mt-4">
              아래 항목 중 하나라도 해당된다면, 기본 과정이 필요합니다.
            </p>
          </motion.div>

          <div className="space-y-4">
            {checklist.map((item, index) => (
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

      {/* Section 4: Instructors */}
      <section ref={instructorRef} className="bg-black py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={instructorInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <p className="font-display text-sm tracking-[0.2em] text-gray-500 mb-3">
              INSTRUCTORS
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
              <span className="text-accent">최정예</span> 강사진
            </h2>
            <p className="text-gray-400 text-sm md:text-base mt-4 max-w-2xl mx-auto">
              6개월 이상의 체계적인 자체교육을 거쳐 검증된 강사만 채용합니다.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {instructorFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={instructorInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                className="border border-white/10 p-6 lg:p-8 hover:border-accent/50 transition-colors duration-300"
              >
                <h3 className="text-white font-bold text-base mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: 교육 결과 */}
      <section ref={resultRef} className="bg-white py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={resultInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <p className="font-display text-sm tracking-[0.2em] text-text-on-light/40 mb-3">
              RESULT
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-on-light mb-8">
              기본 과정을 마치면
            </h2>
            <div className="space-y-4 text-text-on-light/70 text-sm md:text-base leading-relaxed text-left max-w-xl mx-auto">
              <p>
                저음과 고음의{" "}
                <span className="text-text-on-light font-bold">
                  경계선이 없어지고
                </span>{" "}
                모든 음역대에서의 이동과 표현이 자유로워집니다.
              </p>
              <p>
                체계적인 기초 발성 커리큘럼으로 모든{" "}
                <span className="text-text-on-light font-bold">
                  노하우와 솔루션
                </span>
                이 담겨있으며, 수강 종료 이후에도 지속적으로 활용할 수 있는
                방법들을 제공합니다.
              </p>
              <p className="text-accent font-bold text-center pt-4">
                &ldquo;원리만 알면 누구나 노래 잘 부를 수 있습니다.&rdquo;
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Before & After */}
      <ProgramBeforeAfter reviewLabel="기본 과정을 이수한 후기가 궁금하신가요?" />

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
            2옥타브에서 멈추실 건가요?
          </p>
          <p className="text-white/80 text-sm md:text-base mb-8">
            단 10분, 첫 레슨만으로도 변화를 경험하세요.
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
