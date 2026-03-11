"use client";

import { motion } from "framer-motion";
import { Users, MessageCircle, Shield, Gift, Award } from "lucide-react";

const benefits = [
  {
    icon: Users,
    title: "'듣는 귀'부터 훈련하는 소수 정예 그룹 레슨",
    description:
      "초보자는 자신의 문제점을 스스로 파악하지 못해 혼자 연습할 수 없습니다. 노래 실력이 늘려면 내 소리를 객관적으로 판단하는 '듣는 귀' 훈련이 필수입니다. 다른 사람의 피드백 과정을 지켜보며 셀프 피드백 능력을 키우는 그룹 레슨은 초보자에게 선택이 아닌 필수입니다.",
  },
  {
    icon: MessageCircle,
    title: "한 명의 강사? NO! 전 강사진 자유 피드백",
    description:
      "담당 강사 한 명에게만 의존하지 마세요. 모든 전문 강사진에게 언제든 자유롭게 질문하고 피드백을 받을 수 있습니다.",
  },
  {
    icon: Shield,
    title: "강사에 따른 퀄리티 차이? 0% 보장",
    description:
      "프리랜서 강사는 쓰지 않습니다. 혹독한 자체 교육을 거친 정직원 강사만이, 검증된 동일한 커리큘럼으로 수업합니다.",
  },
  {
    icon: Award,
    title: "졸업해도 끝까지 책임지는 '평생 보컬 A/S 피드백'",
    description:
      "학원을 수료했다고 끝이 아닙니다. 나중에 혼자 노래하다 막히는 부분이 생겨도 언제든 질문하세요. 무제한 음성/영상 피드백을 제공하며 여러분의 평생 보컬 페이스메이커가 되어 드립니다.",
  },
  {
    icon: Gift,
    title: "열정에 기름을 붓는 '장학제도 시스템'",
    description:
      "누구나 열심히만 하면 수강료 부담을 덜 수 있습니다. 모든 수강생에게 아낌없는 장학 혜택을 제공하여, 목표 달성까지 포기하지 않도록 전폭 지원합니다.",
  },
];

export default function InstructorSection() {
  return (
    <section className="bg-white py-20 lg:py-28 border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-text-on-light/50 text-sm mb-3 tracking-widest">
            오직 초보자를 위해 설계된
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-on-light">
            3옥타브장인만의{" "}
            <span className="text-accent">압도적 시스템</span>
          </h2>
        </motion.div>

        <div className="space-y-5">
          {benefits.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                className="flex items-start gap-5 p-6 lg:p-8 bg-zinc-50 border border-gray-100 hover:border-accent/30 transition-colors duration-300 group"
              >
                <div className="w-12 h-12 bg-accent/10 group-hover:bg-accent/20 flex items-center justify-center shrink-0 transition-colors duration-300">
                  <Icon size={22} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-text-on-light text-base md:text-lg mb-2">
                    {item.title}
                  </h3>
                  <p className="text-text-on-light/60 text-sm md:text-base leading-relaxed">
                    {item.description}
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
