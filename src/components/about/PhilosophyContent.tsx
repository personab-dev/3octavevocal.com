"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import PageHero from "@/components/PageHero";
import AboutSubNav from "./AboutSubNav";
import BrandSymbol from "@/components/BrandSymbol";
import FinalCta from "@/components/FinalCta";

const galleryImages = [
  { src: "/images/gallery/gallery-01.png", alt: "보컬 레슨 현장 — 1:1 발성 트레이닝" },
  { src: "/images/gallery/gallery-02.png", alt: "보컬 레슨 현장 — 그룹 피드백" },
  { src: "/images/gallery/gallery-03.png", alt: "보컬 레슨 현장 — 해부학 기반 발성 강의" },
  { src: "/images/gallery/gallery-04.png", alt: "보컬 레슨 현장 — 화이트보드 교육" },
  { src: "/images/gallery/gallery-05.png", alt: "보컬 레슨 현장 — 자세 교정 지도" },
  { src: "/images/gallery/gallery-06.png", alt: "보컬 레슨 현장 — 녹음 실습" },
];

const promises = [
  {
    number: "01",
    title: "공감에서 시작하는 가르침",
    body: "우리는 여러분과 같은 길을 걸었습니다.\n고음 불가, 음정 불안, 발성장애까지,\n이 모든 어려움을 극복했기에 여러분의\n고민을 진정으로 이해합니다.",
  },
  {
    number: "02",
    title: "실력향상에 대한 확실한 보장",
    body: '9년간 7,000명이 "할 수 없다"에서 "해냈다"로 바뀌었습니다.\n처음엔 모두 의구심을 가졌지만,\n지금은 음역대가 2~3키 이상 상승되었고,\n자신 있게 노래합니다.\n여러분도 충분히 변화할 수 있습니다.',
  },
  {
    number: "03",
    title: "끝까지 책임지는 교육",
    body: '"고음이 안 나와요"라는 말이 더 이상\n여러분의 한계가 되지 않게 하겠습니다.\n개인별 맞춤 피드백과 수강 후 피드백으로,\n여러분이 고음을 자유롭게 다룰 수 있을 때까지\n절대 포기하지 않겠습니다.',
  },
];

export default function PhilosophyContent() {
  const originRef = useRef<HTMLElement>(null);
  const originInView = useInView(originRef, { once: true, amount: 0.2 });
  const promiseRef = useRef<HTMLElement>(null);
  const promiseInView = useInView(promiseRef, { once: true, amount: 0.1 });
  const philosophyRef = useRef<HTMLElement>(null);
  const philosophyInView = useInView(philosophyRef, { once: true, amount: 0.2 });
  const proofRef = useRef<HTMLElement>(null);
  const proofInView = useInView(proofRef, { once: true, amount: 0.2 });

  return (
    <>
      <PageHero heading="대표 철학" subheading="Philosophy" backgroundImage="/images/about/hero.png" />
      <AboutSubNav />

      {/* Section 1: 3옥타브장인의 시작 — 상단 헤딩 */}
      <section ref={originRef} className="bg-white py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={originInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-accent text-sm md:text-base font-bold tracking-widest mb-5"
          >
            3옥타브장인의 시작
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={originInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-on-light leading-snug"
          >
            저희도 <span className="text-accent">고음불가</span>였습니다.
            <br />
            그래서, 여러분들도 가능합니다.
          </motion.h2>
        </div>
      </section>

      {/* Section 1-b: 배경 이미지 + 고민 말풍선 + 본문 */}
      <section className="relative">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/about/philosophy-hero.png"
            alt="3옥타브장인 보컬 레슨 현장"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-6 py-20 lg:py-28">
          {/* 고민 말풍선 */}
          <div className="flex flex-col items-center gap-3 mb-16">
            {[
              "아무리 연습해도 안 올라가는데...",
              "목은 금방 잠기고..",
              "다른 사람들은 잘만 올라가는데 왜 나는 안될까?",
            ].map((text, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
                className={`bg-zinc-800/80 backdrop-blur-sm rounded-lg px-6 py-3 text-gray-300 text-sm md:text-base ${i === 1 ? "self-end mr-4 md:mr-16" : "self-start ml-4 md:ml-16"
                  }`}
              >
                &ldquo;{text}&rdquo;
              </motion.div>
            ))}
          </div>

          {/* 본문 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-center space-y-6"
          >
            <p className="text-white font-bold text-base md:text-lg">
              저희도 똑같이 겪었습니다.
            </p>

            <p className="inline-block bg-accent px-4 py-2 text-white font-bold text-base md:text-lg">
              우리는 모두 처음부터 노래를 잘했던 사람들이 아닙니다.
            </p>

            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              오히려 고음이 안 되고, 음정이 불안정하고, 심지어{" "}
              <span className="text-white font-bold">발성장애</span>를 겪었던 사람들입니다.
              <br />
              하지만 포기하지 않았습니다. 어떻게든 해결하고 싶었고,
              <br />
              <span className="text-white font-bold">수많은 시행착오 끝에 결국 확실한 방법</span>을 찾았습니다.
            </p>

            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              그리고 지금, 같은 고민을 하는 여러분께 그 방법을 전하고 있습니다.
              <br />
              우리는 단순히 가르치는 사람이 아닙니다.
            </p>

            <p className="text-white font-bold text-lg md:text-xl pt-4">
              같은 길을 걸어왔고, 끝내 극복한 사람들입니다.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 2: 약속 3가지 */}
      <section ref={promiseRef} className="bg-white py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={promiseInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <p className="text-text-on-light/50 text-sm md:text-base mb-3 tracking-widest uppercase">
              3옥타브장인의 시작
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-on-light">
              될 때까지, 끝까지
              <br />
              <span className="text-accent">이게 저희의 약속입니다.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {promises.map((promise, index) => (
              <motion.div
                key={promise.number}
                initial={{ opacity: 0, y: 30 }}
                animate={promiseInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
                className="border border-gray-200 p-8 lg:p-10 relative overflow-hidden group hover:border-accent transition-colors duration-300"
              >
                {/* Brand symbol watermark */}
                <div className="absolute left-7 top-10 -translate-x-[30%] -translate-y-[20%] pointer-events-none">
                  <Image
                    src="/images/brand-symbol.png"
                    alt=""
                    width={120}
                    height={120}
                    className="opacity-[0.05] w-[100px] lg:w-[120px] h-auto"
                  />
                </div>

                {/* Number */}
                <span className="font-display text-black text-5xl group-hover:text-accent transition-colors duration-300 leading-none">
                  {promise.number}
                </span>

                {/* Title */}
                <h3 className="text-lg font-bold text-text-on-light mt-4 mb-4">
                  {promise.title}
                </h3>

                {/* Divider */}
                <div className="w-12 h-[2px] bg-accent mb-4" />

                {/* Body */}
                <p className="text-sm md:text-base text-text-on-light leading-relaxed whitespace-pre-line">
                  {promise.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: 발성 철학 */}
      <section ref={philosophyRef} className="bg-black py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute left-0 bottom-0 opacity-[0.03] pointer-events-none -translate-x-1/4 translate-y-1/4">
          <BrandSymbol size={500} color="white" />
        </div>

        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={philosophyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <blockquote className="border-l-2 border-accent pl-6 lg:pl-10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
                발성은 타고나는 것이 아닙니다.
              </h2>

              <div className="space-y-6 text-gray-400 text-sm md:text-base leading-relaxed">
                <p>
                  올바른 방법과 꾸준한 연습이 있다면, 누구나 변할 수 있습니다.
                  <br />
                  우리는 단순히 &lsquo;고음을 내는 법&rsquo;만 가르치지 않습니다.
                  <br />
                  어떤 노래든 자신 있게,{" "}
                  <span className="text-white font-bold">당신만의 소리</span>로 부를 수 있도록 만들어 드립니다.
                </p>

                <p>
                  &ldquo;내가 진짜 할 수 있을까?&rdquo;
                  <br />
                  그 불안한 마음, 너무나 잘 압니다.
                  <br />
                  우리도 똑같이 고민했었으니까요.
                  <br />
                  하지만 단언컨대, <span className="text-accent font-bold">당신도 가능합니다.</span>
                </p>

                <p>
                  고음은 타고나는 것이 아닙니다.
                  <br />
                  과학적이고 체계적인 커리큘럼, 검증된 솔루션이 있다면,
                  <br />
                  변화는 당연한 결과가 됩니다.
                  <br />
                  <span className="text-white font-bold">
                    그 변화를 반드시 만들어 드리겠습니다.
                  </span>
                </p>
              </div>
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* Section 4: 수강생 증명 */}
      <section ref={proofRef} className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-zinc-900">
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={proofInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="space-y-6 text-gray-400 text-sm md:text-base leading-relaxed"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              지난 9년간{" "}
              <span className="text-accent">7,000명 이상</span>의 수강생들이
              증명했습니다.
            </h2>

            <p>
              수업을 들으면 누구나 실력이 향상될 수밖에 없는 구조,
              <br />
              이것이 우리가 9년 동안 쌓아온, 검증된 시스템입니다.
            </p>

            <p>
              실용음악과 입시생부터 현직 뮤지컬 배우, 가수,
              <br />
              그리고 &lsquo;고음불가&rsquo;였던 초보자까지 모두 같은 교육을 받습니다.
              <br />
              그만큼 완벽한 커리큘럼을 자랑합니다.
            </p>

            <div className="border-l-2 border-accent/50 pl-6 py-2 space-y-2">
              <p className="text-white italic">
                &ldquo;이제라도 3옥타브장인을 만난 게 행운입니다.&rdquo;
              </p>
              <p className="text-white italic">
                &ldquo;그동안 헤맨 시간이 아깝습니다.&rdquo;
              </p>
            </div>

            <p>
              우리는 단순히 가르치는 곳이 아닙니다.
              <br />
              <span className="text-white font-bold">확실한 변화를 만들어내는 곳</span>입니다.
              <br />
              당신이 더 이상 헤매지 않도록,
              <br />
              끝까지 책임지고 정확한 길로 안내하겠습니다.
            </p>

            <p className="text-white font-bold text-right mt-8">
              3옥타브장인 보컬학원 대표 김윤민 드림
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Carousel */}
      <section className="bg-black py-16 lg:py-20 overflow-hidden">
        <div className="relative">
          {/* Infinite scrolling track — duplicated for seamless loop */}
          <div className="flex animate-carousel">
            {[...galleryImages, ...galleryImages].map((img, i) => (
              <div
                key={i}
                className="shrink-0 w-[300px] md:w-[480px] lg:w-[560px] px-2"
              >
                <div className="aspect-[16/9] relative overflow-hidden">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 768px) 300px, (max-width: 1024px) 480px, 560px"
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <FinalCta />
    </>
  );
}
