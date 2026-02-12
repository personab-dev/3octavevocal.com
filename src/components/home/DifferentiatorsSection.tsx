"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const items = [
  {
    number: "01",
    title: "고음불가에서 고음 트레이너가 된\n사람들의 '검증된 실전 솔루션'",
    titleAccent: "고음 트레이너",
    body: "우리도 원래 고음이 안 됐습니다.\n그래서 누구보다 더 확실한 방법을 알려줄 수 있습니다.",
    bullets: [
      "고음이 안 돼서 좌절했던 사람들이 직접 증명한 방법",
      "이론으로만 가능한 것이 아니라, 직접 겪고, 뚫어낸 사람들이 만든 해결법",
    ],
  },
  {
    number: "02",
    title: "수업이 끝나도,\n평생 무료 피드백 제공",
    titleAccent: "평생 무료 피드백",
    body: "우리는 단순히 수업만 하고 끝내지 않습니다.\n수강생이 원하는 실력을 얻을 때까지 끝까지 함께합니다.",
    bullets: [
      "한 달만 다녀도, 피드백 평생 무료!",
      "피드백은 무제한!",
      "주 1회 꾸준한 피드백만 받아도, 수강료 할인까지!",
    ],
  },
  {
    number: "03",
    title: "최고의 레슨 퀄리티를 위해,\n한정된 인원만 가르칩니다.",
    titleAccent: "한정된 인원",
    body: "강사가 맡는 수강생이 많아질수록 레슨의 질은 반드시 낮아집니다.\n그래서 매월 한정된 인원만 선별해 '제대로' 가르칩니다.",
    bullets: [
      "소수 정예 그룹 레슨으로, 최고의 교육 퀄리티 보장!",
      "개인별 특성에 맞는 맞춤형 피드백 제공",
    ],
  },
  {
    number: "04",
    title: "책임 없는 강사는 가르칠 수 없습니다.\n오직 검증된 정직원 강사진만 수업합니다.",
    titleAccent: "검증된 정직원 강사진",
    body: "수업의 질은 강사의 실력에서 결정됩니다.\n우리는 아무나 가르칠 수 없도록 만들었습니다.",
    bullets: [
      "6개월 이상의 체계적인 자체교육을 거쳐 검증된 강사만 채용",
      "프리랜서가 아닌 정직원 강사진 - 책임감이 다른 수업 퀄리티",
      "철저한 강사 관리 시스템으로, 수업의 퀄리티를 언제나 최고 수준으로 유지",
    ],
  },
];

export default function DifferentiatorsSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section ref={ref} className="bg-white relative">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[560px_1fr]">
          {/* Left: Red sticky panel */}
          <div className="lg:sticky lg:top-0 lg:self-start bg-accent p-10 lg:p-16 lg:h-screen flex flex-col justify-center relative overflow-hidden">
            {/* Decorative geometric shapes */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-black/10 -translate-y-1/2 translate-x-1/2 rotate-45" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-black/10 translate-y-1/2 -translate-x-1/2 rotate-45" />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="relative z-10"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
                <span className="underline decoration-white decoration-4 underline-offset-4">7,000명+의 선택</span>에는<br />
                다 이유가 있습니다.
              </h2>
              <p className="text-white/80 text-lg md:text-xl mt-6 leading-relaxed">
                평생 무료 피드백 시스템으로 완성되는<br />소수정예 커리큘럼
              </p>
              <Link
                href="/about/difference"
                className="inline-flex items-center gap-2 bg-white text-text-on-light hover:bg-black hover:text-white px-8 py-4 text-lg font-bold mt-8 transition-all duration-300"
              >
                차별점 자세히 알아보기
              </Link>
            </motion.div>
          </div>

          {/* Right: 4 differentiators */}
          <div className="divide-y divide-gray-200">
            {items.map((item, index) => (
              <DifferentiatorItem key={item.number} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function DifferentiatorItem({
  item,
  index,
}: {
  item: (typeof items)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="p-10 lg:p-14 lg:py-20"
    >
      <div className="flex gap-6 lg:gap-10">
        {/* Number */}
        <span className="text-5xl md:text-6xl font-bold text-gray-200 shrink-0">
          {item.number}
        </span>

        <div>
          {/* Title */}
          <h3 className="text-2xl md:text-3xl font-bold text-text-on-light whitespace-pre-line leading-snug mb-5">
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
          <div className="w-full h-[1px] bg-gray-200 mb-5" />

          {/* Body */}
          <p className="text-text-on-light/70 text-lg md:text-xl leading-relaxed whitespace-pre-line mb-5">
            {item.body}
          </p>

          {/* Bullets */}
          <ul className="space-y-2.5">
            {item.bullets.map((bullet, i) => (
              <li key={i} className="flex items-start gap-2 text-base md:text-lg text-text-on-light/70">
                <span className="w-1.5 h-1.5 rounded-full bg-text-on-light/40 mt-2.5 shrink-0" />
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
