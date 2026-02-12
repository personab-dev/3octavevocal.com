"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "실력이 잘 늘지 않으면 어떡하죠? 얼마나 배우면 실력이 향상되나요?",
    answer:
      "단 10분! 이 짧은 시간에도 변화를 느끼는 분들이 있습니다. 어떤 분들은 1~2회 레슨 만에 '어? 이렇게 편하게 부를 수 있다고?' 하고 놀라기도 합니다.\n\n노래가 늘지 않는 건 재능이 아니라 '방법'의 문제입니다! 현재 상태에 머물러 있을 걱정은 하지 않으셔도 됩니다. 지금보다 무조건 나아지게 만들어 드립니다.\n\n저희 보컬학원의 수업 시스템은 타고난 재능이 없어도 실력이 오를 수밖에 없는 구조로 만들어졌습니다. 믿고 따라오세요.",
  },
  {
    question: "노래를 배워본 적이 없는 초보인데, 수업을 잘 따라갈 수 있을까요?",
    answer:
      "누구든 처음부터 차근차근 배울 수 있도록 설계된 커리큘럼입니다. 기본적인 호흡, 발성부터 단계별로 진행되기 때문에 완전 초보자도 부담 없이 시작할 수 있습니다.\n\n발성 지식이 아예 없는 사람도 탄탄한 기본기를 갖출 수 있게 됩니다.\n\n수업 전 무료 진단을 통해 맞춤형 학습 방향을 안내해드립니다!",
  },
  {
    question: "함께 수업 듣는 사람들과 실력 차이가 나면 어떡하죠?",
    answer:
      "걱정하지 마세요. 모든 수강생이 같은 방식으로 성장할 수 있도록 관리합니다.\n\n• 그룹 레슨이지만 개별 맞춤 피드백을 제공합니다.\n• 개개인의 수준과 실력에 맞춰 각자의 페이스로 성장할 수 있도록 수업이 진행됩니다.\n• 실력 차이를 느끼지 않도록 연습 과제 & 추가 피드백도 지원합니다.\n• 오히려 혼자보다 함께 배우면서 성장 속도가 더 빨라집니다!\n\n본인의 상태뿐만 아니라 각기 다른 사람들의 발성과 노래를 들어보며 소리를 판단하는 감각이 더 좋아질 수밖에 없기 때문입니다.",
  },
  {
    question: "기초 발성만 배워도 좋아질까요?",
    answer:
      "물론입니다. 기초 발성만 제대로 배워도 고음과 노래 실력이 확실히 달라집니다.\n\n3옥타브장인의 체계적인 기초 발성 커리큘럼은 모든 노하우와 솔루션이 담겨있기 때문에 수강 종료 이후에도 지속적으로 활용할 수 있는 방법들을 얻어가실 수 있습니다.",
  },
  {
    question: "과정별로 무엇이 다른지, 어떻게 진행되는지 궁금해요.",
    answer:
      "2가지 과정으로 나누어져 있으며, 음치 고음불가 일반인부터 프로 가수까지 모두 동일한 레슨 과정을 통해 단계별로 성장할 수 있도록 설계되었습니다.\n\n• 기본 과정 — 발성 기본기 / 호흡 / 공명 / 성대 컨트롤\n• 심화 과정 — 노래 적용 / 음역대 확장 / 곡 해석 & 감정 표현\n\n자세한 내용이 궁금하다면? 무료 상담을 통해 최적의 과정 안내를 받아보세요!",
  },
  {
    question: "과정별로 가격 차이가 있나요?",
    answer:
      "모든 과정의 수강료는 동일합니다. 취미반, 입시반 등 과정마다 수업 퀄리티의 차이를 두지 않습니다.\n\n모든 소리의 시작점은 결국 발성의 올바른 원리와 이해라는 같은 목적지를 향하고 있기 때문입니다.",
  },
];

export default function ProgramFAQ() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
            Q&A
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            이런 걱정, 아직도 하시나요?
          </h2>
        </motion.div>

        <div className="divide-y divide-white/10">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex items-start justify-between gap-4 py-6 text-left group"
              >
                <span
                  className={`text-sm md:text-base font-bold transition-colors duration-300 ${
                    openIndex === index
                      ? "text-accent"
                      : "text-white group-hover:text-accent"
                  }`}
                >
                  {faq.question}
                </span>
                <ChevronDown
                  size={20}
                  className={`shrink-0 text-gray-500 transition-transform duration-300 mt-0.5 ${
                    openIndex === index ? "rotate-180 text-accent" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-gray-400 text-sm md:text-base leading-relaxed pb-6 whitespace-pre-line">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
