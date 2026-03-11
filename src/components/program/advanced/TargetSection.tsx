"use client";

import { motion } from "framer-motion";
import { Mic, Video, Headphones } from "lucide-react";

const vipBenefits = [
  {
    icon: Mic,
    title: "수강생 전원! 정기 레코딩 수업",
    description:
      "우수 수강생만 녹음한다고요? 아닙니다. 내 노래의 2% 부족함을 캐치하려면 진짜 가수처럼 녹음해 봐야 합니다. 누구나 정기적인 레코딩으로 디테일을 완벽하게 교정받습니다.",
  },
  {
    icon: Video,
    title: "인생 커버 영상 제작 & 든든한 장학 제도",
    description:
      "눈에 띄게 성장한 우수 수강생에게는 평생 소장할 '나만의 커버 영상' 촬영을 전폭 지원하며, 장학금 혜택까지 아낌없이 제공합니다.",
  },
  {
    icon: Headphones,
    title: "졸업해도 끝까지! 평생 보컬 A/S 피드백",
    description:
      "코인노래방에서 막힐 때, 갑자기 축가를 부르게 될 때 언제든 질문하세요. 검증된 강사진이 평생 보컬 페이스메이커가 되어 드립니다.",
  },
];

export default function TargetSection() {
  return (
    <section className="bg-black py-20 lg:py-28">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="font-display text-sm tracking-[0.2em] text-gray-500 mb-3">
            VIP BENEFITS
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            수강료 그 이상의 가치,{" "}
            <span className="text-accent">심화반 전용 VIP 혜택</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {vipBenefits.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.12 }}
                className="bg-zinc-900 border border-white/10 p-8 lg:p-10 hover:border-accent/30 transition-colors duration-300 group"
              >
                <div className="w-14 h-14 bg-accent/10 group-hover:bg-accent/20 flex items-center justify-center mb-6 transition-colors duration-300">
                  <Icon size={28} className="text-accent" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
