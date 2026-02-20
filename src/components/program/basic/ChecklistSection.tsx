"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check } from "lucide-react";

/* ── Data ─────────────────────────────────────────── */

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

/* ── Component ────────────────────────────────────── */

export default function ChecklistSection() {
  const checkRef = useRef<HTMLElement>(null);
  const checkInView = useInView(checkRef, { once: true, amount: 0.1 });

  return (
    <section ref={checkRef} className="relative bg-zinc-900 py-20 lg:py-28 overflow-hidden">
      <Image
        src="https://cdn.imweb.me/thumbnail/20250410/1c1a24558ceac.png"
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-50"
      />
      <div className="relative z-10 max-w-5xl mx-auto px-6">
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
  );
}
