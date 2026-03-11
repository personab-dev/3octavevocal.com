"use client";

import { motion } from "framer-motion";

const advancedCurriculum = [
  {
    number: "01",
    title: "프로들의 '사이다 발성 & 톤 메이킹'",
    subtitle: "SODA VOICE & TONE MAKING",
    bullets: [
      "억지로 지르는 아마추어식 고음은 그만!",
      "답답한 소리를 청량하게 뻗어나가게 하는 '공간감'과 '소리길' 조절 테크닉",
      "고음은 되는데 왜 답답할까? 그 답을 알려드립니다",
    ],
  },
  {
    number: "02",
    title: "프로들의 '디테일 컨트롤'",
    subtitle: "DETAIL CONTROL",
    bullets: [
      "어색한 모창에서 벗어날 차례!",
      "바이브레이션, 밴딩, 호흡 조절 등 프로들의 디테일한 기술 장착",
      "내 목소리를 마음대로 컨트롤하는 법",
    ],
  },
  {
    number: "03",
    title: "나만의 보컬 스타일",
    subtitle: "MY VOCAL STYLE",
    bullets: [
      "평범한 노래에 입체감을 불어넣는 기술",
      "남의 노래를 따라 부르는 사람이 아닌 '나만의 보컬 스타일' 완성",
      "부족한 2%를 채워 진짜 실력자로",
    ],
  },
];

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
          <p className="text-text-on-light/50 text-sm mb-3 tracking-widest uppercase">
            프로 가수들의 실전 보컬 테크닉을 장착해 드립니다.
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-on-light">
            &lsquo;와, 진짜 잘 부른다!&rsquo; 소리를 끌어내는
            <br />
            <span className="text-accent">3옥타브장인</span>만의 치트키
          </h2>
        </motion.div>

        {/* Desktop: horizontal stepper line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
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
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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
                <div className="w-10 h-[2px] bg-accent mb-5 group-hover:w-full transition-all duration-500" />

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
