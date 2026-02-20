"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, MessageCircle, Clock } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import ContactForm from "./ContactForm";
import BranchCards from "./BranchCards";

const operatingHours = [
  { day: "평일 (월~수, 금)", time: "13:00 ~ 22:00" },
  { day: "토요일", time: "13:00 ~ 22:00" },
  { day: "주말 (일요일)", time: "12:00 ~ 19:00" },
  { day: "목요일", time: "휴무", isHoliday: true },
];

const infoCards = [
  {
    icon: Phone,
    title: "전화 상담",
    description: "각 지점으로 직접 전화하시면\n빠르게 상담받으실 수 있습니다.",
  },
  {
    icon: MessageCircle,
    title: "카카오톡 상담",
    description: "카카오톡 채널을 통해\n편하게 문의해주세요.",
  },
  {
    icon: Clock,
    title: "빠른 응답",
    description: "평균 30분 이내 답변.\n영업시간 내 접수 시 당일 회신.",
  },
];

export default function ContactContent() {
  const infoRef = useRef<HTMLDivElement>(null);
  const infoInView = useInView(infoRef, { once: true, amount: 0.2 });
  const hoursRef = useRef<HTMLElement>(null);
  const hoursInView = useInView(hoursRef, { once: true, amount: 0.3 });

  return (
    <>
      <PageHero
        heading="CONTACT"
        subheading="Get in Touch"
        description="무료 상담 예약부터 지점 안내까지, 궁금한 점을 편하게 문의해주세요."
      />

      {/* 상담 예약 폼 섹션 */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            label="무료 상담 예약"
            labelStyle="accent"
            heading="지금 바로 상담을 시작하세요"
            description="아래 양식을 작성해주시면 담당자가 빠르게 연락드리겠습니다."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* 왼쪽: 폼 */}
            <ContactForm />

            {/* 오른쪽: 안내 카드 */}
            <div ref={infoRef} className="space-y-6">
              {infoCards.map((card, i) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={infoInView ? { opacity: 1, x: 0 } : {}}
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
            description="가까운 지점을 선택해 방문하거나 연락해주세요."
          />
          <BranchCards />
        </div>
      </section>

      {/* 운영시간 섹션 */}
      <section ref={hoursRef} className="bg-black py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={hoursInView ? { opacity: 1, y: 0 } : {}}
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
            animate={hoursInView ? { opacity: 1, y: 0 } : {}}
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
            animate={hoursInView ? { opacity: 1 } : {}}
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
