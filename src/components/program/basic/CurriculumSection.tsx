"use client";

import Image from "next/image";
import { motion } from "framer-motion";

/* ── Data ─────────────────────────────────────────── */

const curriculumDetails = [
  {
    number: "01",
    title: "호흡",
    subtitle: "숨만 잘 쉬어도 고음이 뚫립니다",
    image: "/images/program/approach-01.jpg",
    alt: "호흡 훈련 현장",
    description:
      "노래 한 곡만 불러도 목이 쉬고 숨이 차나요? 가슴으로 얕게 쉬는 호흡을 몸 전체를 채우는 깊은 호흡으로 바꿔드립니다. 목을 조이게 만드는 불필요한 힘이 빠지고, 편안하게 소리 내는 몸으로 바뀌게 됩니다.",
  },
  {
    number: "02",
    title: "위치",
    subtitle: "답답한 소리를 시원하게 꺼내드립니다",
    image: "/images/program/approach-02.jpg",
    alt: "발성 위치 교정 수업",
    description:
      "억지로 쥐어짜는 생목, 입안에서 웅얼거리는 발음, 조금만 방심해도 튀어나오는 삑사리. 소리가 울리는 '위치'만 제대로 잡아줘도 내 목소리가 막힘없이 시원하게 뻗어나갑니다.",
  },
  {
    number: "03",
    title: "피치",
    subtitle: "내 목소리의 한계를 깨는 성구 전환",
    image: "/images/program/approach-03.jpg",
    alt: "성구 전환 훈련",
    description:
      "저음과 고음을 끊김 없이 부드럽게 연결하는 '성구 전환'이 가능하게 만들어 줍니다. 이후에 성구를 통합하게 되면 3옥타브까지 시원하게 소리낼 수 있게 됩니다.",
  },
];

/* ── Component ────────────────────────────────────── */

export default function CurriculumSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-text-on-light/50 text-sm mb-3 tracking-widest">
            매달 1키씩 올라가는 마법, 누구나 바뀔 수 밖에 없는 3옥타브장인만의 3단계 기초 발성 커리큘럼
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-on-light">
            &apos;고음불가&apos; 출신들이 몸으로 부딪혀 찾아낸{" "}
            <span className="text-accent">가장 확실한 방법</span>
          </h2>
          <p className="text-text-on-light/60 text-base md:text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
            8,000명 이상의 수강생 데이터가 증명합니다. 타고나지 않아도, 어떤 케이스라도 변화시킬 수 있는 솔루션이 준비되어 있습니다.
          </p>
        </motion.div>

        <div className="space-y-6">
          {curriculumDetails.map((cur, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={cur.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 + index * 0.15 }}
                className={`grid grid-cols-1 lg:grid-cols-[3fr_2fr] overflow-hidden bg-gray-50 ${
                  !isEven ? "lg:grid-cols-[2fr_3fr]" : ""
                }`}
              >
                {/* Image */}
                <div
                  className={`relative aspect-[4/3] lg:aspect-auto bg-zinc-300 ${
                    !isEven ? "order-1 lg:order-2" : ""
                  }`}
                >
                  <Image
                    src={cur.image}
                    alt={cur.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover"
                  />
                </div>

                {/* Text */}
                <div
                  className={`flex flex-col justify-center p-8 lg:p-12 ${
                    !isEven ? "order-2 lg:order-1" : ""
                  }`}
                >
                  <span className="font-display text-5xl text-accent/20 leading-none mb-3">
                    {cur.number}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-text-on-light mb-1 leading-snug">
                    {cur.title}
                  </h3>
                  <p className="text-accent text-sm mb-4">{cur.subtitle}</p>
                  <p className="text-text-on-light/60 text-sm md:text-base leading-relaxed">
                    {cur.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
