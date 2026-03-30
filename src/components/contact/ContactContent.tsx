"use client";

import { Suspense } from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle, Clock } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import ContactForm from "./ContactForm";
import BranchCards from "./BranchCards";
import { operatingHours } from "@/lib/operating-hours";
import type { ConsultationSettings } from "@/lib/wordpress";


const infoCards = [
  {
    icon: Phone,
    title: "다이렉트 전화 상담",
    description: "글로 설명하기 답답하신가요?\n각 지점 전문 매니저가 현재 고민을 듣고\n속 시원하게 안내해 드립니다.",
  },
  {
    icon: MessageCircle,
    title: "1분 컷 카카오톡 문의",
    description: "수강료, 시간표, 지점별 대기 현황 등\n가벼운 궁금증을 카톡으로\n부담 없이 물어보세요.",
  },
  {
    icon: Clock,
    title: "고민을 끝내는 빠른 응답",
    description: "망설임은 변화를 늦출 뿐입니다.\n평일 기준 평균 30분 이내에\n빠르게 회신해 드립니다.",
  },
];

interface ContactContentProps {
  consultationSettings: ConsultationSettings;
}

export default function ContactContent({ consultationSettings }: ContactContentProps) {
  return (
    <>
      <PageHero
        heading="CONTACT"
        subheading="Get in Touch"
        description="혼자서 고민하는 시간은 끝났습니다. 내 목소리의 한계를 깰 가장 확실한 첫걸음을 시작하세요."
      />

      {/* 상담 예약 폼 섹션 */}
      <section id="form" className="bg-white py-20 lg:py-28 scroll-mt-16">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            label="내 목소리의 변화, 여기서 시작됩니다."
            labelStyle="accent"
            heading="막막했던 내 노래, 지금 바로 해결책을 확인하세요."
            description="아래 양식을 남겨주시면, 담당자가 확인 후 가장 빠르고 정확하게 안내해 드립니다."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* 왼쪽: 폼 */}
            <Suspense fallback={<div className="animate-pulse h-96 bg-zinc-100 rounded" />}>
              <ContactForm consultationSettings={consultationSettings} />
            </Suspense>

            {/* 오른쪽: 안내 카드 */}
            <div className="space-y-6">
              {infoCards.map((card, i) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="flex items-start gap-4 p-5 bg-zinc-50 border border-gray-100"
                >
                  <div className="w-12 h-12 bg-accent/10 flex items-center justify-center shrink-0">
                    <card.icon size={22} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-text-on-light mb-1">
                      {card.title}
                    </h3>
                    <p className="text-text-on-light/60 text-sm leading-relaxed whitespace-pre-line">
                      {card.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 지점별 연락처 섹션 */}
      <section id="branches" className="bg-zinc-50 py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            label="BRANCHES"
            labelStyle="display"
            heading="지점별 연락처"
            description="전국 3개 지점, 가장 가까운 곳에서 3옥타브장인의 압도적인 커리큘럼을 직접 경험해보세요."
          />
          <BranchCards />
        </div>
      </section>

      {/* 운영시간 섹션 */}
      <section className="bg-black py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <p className="text-gray-500 text-sm mb-3 tracking-widest uppercase">
              Operating Hours
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
              <span className="text-accent">운영시간</span> 안내
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="divide-y divide-white/10"
          >
            {operatingHours.map((item) => (
              <div
                key={item.day}
                className="flex items-center justify-between py-5"
              >
                <div className="flex items-center gap-3">
                  <Clock
                    size={16}
                    className={item.isHoliday ? "text-gray-600" : "text-accent"}
                  />
                  <span
                    className={`text-sm md:text-base ${
                      item.isHoliday ? "text-gray-600" : "text-white"
                    }`}
                  >
                    {item.day}
                  </span>
                </div>
                <span
                  className={`font-bold text-sm md:text-base ${
                    item.isHoliday ? "text-gray-600" : "text-white"
                  }`}
                >
                  {item.time}
                </span>
              </div>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-gray-600 text-sm mt-6 text-center"
          >
            * 공휴일은 운영시간이 변동될 수 있습니다. 방문 전 전화 확인
            부탁드립니다.
          </motion.p>
        </div>
      </section>
    </>
  );
}
