"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MessageCircle, Users } from "lucide-react";

/* ── Component ────────────────────────────────────── */

export default function InstructorSection() {
  const instrRef = useRef<HTMLElement>(null);
  const instrInView = useInView(instrRef, { once: true, amount: 0.15 });

  return (
    <section ref={instrRef} className="bg-white py-20 lg:py-28 border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={instrInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-text-on-light/50 text-sm mb-3 tracking-widest">
            3옥타브장인이 보장하는 최정예 강사진
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-on-light">
            한 명의 선생님이 아닌,{" "}
            <span className="text-accent">모든 선생님이 당신의 성장</span>을
            돕습니다.
          </h2>
        </motion.div>

        {/* Main 2-column cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={instrInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="bg-zinc-900 p-8 lg:p-10"
          >
            <MessageCircle
              size={28}
              className="text-accent mb-5"
            />
            <h3 className="text-lg md:text-xl font-bold text-white mb-3">
              자유로운 피드백 시스템
            </h3>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              수업이 없는 시간, 모든 선생님께 피드백이 가능합니다. 담당
              선생님뿐만 아니라 모든 강사진에게 자유롭게 질문하고 피드백을
              받으세요.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={instrInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="bg-zinc-900 p-8 lg:p-10"
          >
            <Users
              size={28}
              className="text-accent mb-5"
            />
            <h3 className="text-lg md:text-xl font-bold text-white mb-3">
              동일한 퀄리티로 일관된 보컬 교육
            </h3>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              본원의 모든 선생님이 같은 커리큘럼으로 가르칩니다. 강사에 따라
              수업 퀄리티가 달라지는 일은 없습니다.
            </p>
          </motion.div>
        </div>

        {/* Sub cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { title: "6개월 자체교육", desc: "체계적인 자체교육 이수" },
            { title: "3개월 인턴", desc: "실전 수업 검증 완료" },
            { title: "정직원 강사", desc: "프리랜서 NO, 책임감 보장" },
            { title: "원장 직접 피드백", desc: "모든 수업 모니터링" },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={instrInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.35 + i * 0.08 }}
              className="border border-gray-200 p-5 text-center hover:border-accent transition-colors duration-300"
            >
              <p className="text-text-on-light font-bold text-sm md:text-base mb-1">
                {item.title}
              </p>
              <p className="text-text-on-light/50 text-xs md:text-sm">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
