"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

/* ── Component ────────────────────────────────────── */

export default function CompareSection() {
  const compareRef = useRef<HTMLElement>(null);
  const compareInView = useInView(compareRef, { once: true, amount: 0.15 });

  return (
    <section ref={compareRef} className="bg-zinc-900 py-20 lg:py-28">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={compareInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="font-display text-sm tracking-[0.2em] text-gray-500 mb-3">
            BEFORE / AFTER
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            수강 이후, 당신의{" "}
            <span className="text-accent">고음</span>은 이렇게 달라집니다.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Before */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={compareInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-zinc-800 p-8 lg:p-10 hover:scale-[1.02] transition-transform duration-300"
          >
            <p className="font-display text-sm tracking-[0.2em] text-gray-500 mb-4">
              BEFORE
            </p>
            <h3 className="text-lg md:text-xl font-bold text-gray-400 mb-6">
              힘으로만 버티는 고음,
              <br />
              불안정한 소리
            </h3>
            <ul className="space-y-4">
              {[
                "목이 조여서 고음이 올라가지 않음",
                "소리가 갈라지고 흔들림",
                "몇 곡만 불러도 목이 피로하고 금방 잠김",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-500 shrink-0 mt-2" />
                  <span className="text-gray-400 text-sm md:text-base leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* After */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={compareInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-accent p-8 lg:p-10 hover:scale-[1.02] transition-transform duration-300"
          >
            <p className="font-display text-sm tracking-[0.2em] text-white/60 mb-4">
              AFTER
            </p>
            <h3 className="text-lg md:text-xl font-bold text-white mb-6">
              힘이 아닌 기술로 뚫리는
              <br />
              시원한 고음
            </h3>
            <ul className="space-y-4">
              {[
                "편안한 발성으로 2옥타브에서 3옥타브까지 음역대 확장",
                "흔들리지 않는 고음, 여유로운 고음 처리",
                "힘들이지 않아도 노래가 쉬워지고, 자신감 UP",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/60 shrink-0 mt-2" />
                  <span className="text-white text-sm md:text-base leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
