"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import PageHero from "@/components/PageHero";
import AboutSubNav from "./AboutSubNav";
import CountUp from "@/components/animations/CountUp";
import FinalCta from "@/components/FinalCta";

const strengths = [
  {
    number: "01",
    title: (
      <>
        <span className="text-accent">7,000명</span>이 선택한 교육,
        <br />
        <span className="text-accent">경쟁 학원들도 참고</span>하는 커리큘럼
      </>
    ),
    subtitle: "체계적인 커리큘럼 (타 학원에서도 배우러 옵니다.)",
    bullets: [
      { bold: "10년간, 7,000명 이상의 실전 데이터", rest: "로 완성된 체계적인 커리큘럼" },
      { bold: "과학적 분석을 통한 1:1 맞춤 솔루션", rest: "" },
      { bold: "안전한 발성 메소드", rest: " — 현직 이비인후과 전문의와 협력 개발" },
      { bold: "프로 가수도 찾는 검증된 시스템", rest: "" },
    ],
    image: "/images/about/strength-01.png",
    imageAlt: "3옥타브장인 체계적 커리큘럼",
  },
  {
    number: "02",
    title: (
      <>
        끝까지 책임지는
        <br />
        <span className="text-accent">&lsquo;평생 무료 피드백&rsquo;</span>
      </>
    ),
    subtitle:
      "학원을 그만둔 후에도 지속적인 피드백을 통해 실력이 더 향상되는 것을 보면, 저희의 교육 철학이 틀리지 않았다는 걸 다시 한번 느끼게 됩니다.",
    bullets: [
      { bold: "음성 및 영상 피드백 무제한 제공", rest: " — 수업 외 시간에도" },
      { bold: "모든 강사진에게 1:1 피드백 가능", rest: "" },
      { bold: "수강료 할인 혜택", rest: " — 주 1회 꾸준한 피드백만 받아도" },
    ],
    image: "/images/about/strength-02.png",
    imageAlt: "3옥타브장인 평생 무료 피드백",
  },
  {
    number: "03",
    title: (
      <>
        책임 없는 강사는 가르칠 수 없습니다.
        <br />
        오직 <span className="text-accent">검증된 정직원 강사진</span>만 수업합니다.
      </>
    ),
    subtitle:
      "수업의 질은 강사의 실력에서 결정됩니다. 우리는 아무나 가르칠 수 없도록 만들었습니다.",
    bullets: [
      { bold: "6개월 이상의 체계적인 자체교육", rest: "을 거쳐 검증된 강사만 채용" },
      { bold: "정직원 강사진", rest: " — 프리랜서 NO, 책임감이 다른 수업 퀄리티" },
      { bold: "수업의 퀄리티를 언제나 최고 수준", rest: "으로 유지하는 철저한 관리 시스템" },
    ],
    image: "/images/about/strength-03.png",
    imageAlt: "3옥타브장인 검증된 정직원 강사진",
  },
  {
    number: "04",
    title: (
      <>
        최고의 교육 퀄리티를 위해,
        <br />
        <span className="text-accent">한정된 인원만</span> 가르칩니다.
      </>
    ),
    subtitle:
      "모든 수강생이 실력 향상을 체감할 수 있도록, 수강 인원을 제한합니다.",
    bullets: [
      { bold: "소수 정예 그룹 레슨", rest: "으로, 최고의 교육 퀄리티 보장" },
      { bold: "맞춤형 피드백 제공", rest: " — 개인별 특성에 맞춰" },
      { bold: "실전에서 적용 가능한 실력까지 향상", rest: "" },
    ],
    image: "/images/about/strength-04.png",
    imageAlt: "3옥타브장인 소수 정예 레슨",
  },
];

const stats = [
  { label: "누적 보컬레슨 시간", value: 595680, suffix: "+" },
  { label: "누적 수강생", value: 7000, suffix: "명+" },
  { label: "만족도", value: 98, suffix: "%" },
];

const testimonials = [
  {
    quote: "내가 서울 보컬학원들 중 3옥타브장인을 다니는 이유",
    href: "https://cafe.naver.com/cloud9ent/26485",
    thumbnail: "https://cdn.imweb.me/thumbnail/20250324/c3d1cba81dc7b.png",
  },
  {
    quote:
      "소극적으로 살던 제 인생의 초반에서 3옥타브장인을 만난건 천운입니다.",
    href: "https://cafe.naver.com/cloud9ent/26484",
    thumbnail: "https://cdn.imweb.me/thumbnail/20250320/3b1aabb889e25.png",
  },
  {
    quote:
      "선생님만 전적으로 믿고 따라가면 실력 향상 안될 수 없는 커리큘럼입니다.",
    href: "https://cafe.naver.com/cloud9ent/28022",
    thumbnail: "https://cdn.imweb.me/thumbnail/20250319/e358e6a987495.png",
  },
  {
    quote:
      "잘하는 부분과 안되는 부분을 명확하게 알려주시고, 해결 방법도 명확하게 알려주셔요.",
    href: "https://cafe.naver.com/cloud9ent",
    thumbnail: "https://cdn.imweb.me/thumbnail/20250319/684387f783747.png",
  },
  {
    quote:
      "목잡이 탈출을 원하시거나 노래방 인기차트곡들을 잘 부르고 싶다면 무조건 오세요.",
    href: "https://cafe.naver.com/cloud9ent/22504",
    thumbnail: "https://cdn.imweb.me/thumbnail/20250324/99841a64bc95e.png",
  },
];

const videos = [
  {
    title: "목 쥐어짜는 흔한 일반인이\n보컬레슨을 받으면 생기는 변화",
    url: "https://www.youtube.com/shorts/z57DrPANPQ8",
    thumbnail: "https://img.youtube.com/vi/z57DrPANPQ8/oar2.jpg",
  },
  {
    title: "목으로만 지르는 일반인이\n'믹스 보이스'를 배우면 생기는 일",
    url: "https://www.youtube.com/shorts/lrYzzluMoX8",
    thumbnail: "https://img.youtube.com/vi/lrYzzluMoX8/oar2.jpg",
  },
  {
    title: "노래를 겁내던 일반인이\n노래를 배운 뒤 생긴 변화",
    url: "https://www.youtube.com/shorts/Gwfri1Pa5sM",
    thumbnail: "https://img.youtube.com/vi/Gwfri1Pa5sM/oar2.jpg",
  },
  {
    title: "원래 목소리가 좋은 일반인이\n보컬 레슨을 받는다면?!",
    url: "https://www.youtube.com/shorts/eH_5DPSKwmU",
    thumbnail: "https://img.youtube.com/vi/eH_5DPSKwmU/oar2.jpg",
  },
  {
    title: "꽥꽥지르던 일반인도 배우면\n'마크툽 노래'를 부를 수 있을까?",
    url: "https://www.youtube.com/shorts/DFK_YLVzBoU",
    thumbnail: "https://img.youtube.com/vi/DFK_YLVzBoU/oar2.jpg",
  },
  {
    title: "3옥타브 매번 실패했었는데,\n이게 되네?",
    url: "https://www.youtube.com/shorts/UMLeeKdEB7w",
    thumbnail: "https://img.youtube.com/vi/UMLeeKdEB7w/oar2.jpg",
  },
];

export default function DifferenceContent() {
  const strengthRef = useRef<HTMLElement>(null);
  const strengthInView = useInView(strengthRef, { once: true, amount: 0.05 });
  const statsRef = useRef<HTMLElement>(null);
  const statsInView = useInView(statsRef, { once: true, amount: 0.3 });
  const videoRef = useRef<HTMLElement>(null);
  const videoInView = useInView(videoRef, { once: true, amount: 0.2 });

  return (
    <>
      <PageHero
        heading="차별점"
        subheading="Why 3 Octave Master?"
        description="고음이 안되던 우리가 직접 경험한 확실한 방법"
        backgroundImage="/images/about/hero.png"
      />
      <AboutSubNav />

      {/* 4대 강점 — 이미지+텍스트 교차 레이아웃 */}
      <section ref={strengthRef} className="bg-white py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-6 space-y-20 lg:space-y-28">
          {strengths.map((item, idx) => {
            /* 홀수(01,03): 텍스트 좌 / 이미지 우
               짝수(02,04): 이미지 좌 / 텍스트 우 */
            const imageFirst = idx % 2 === 1;
            return (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 40 }}
                animate={strengthInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: idx * 0.12 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
              >
                {/* Text */}
                <div className={imageFirst ? "order-2 lg:order-2" : "order-2 lg:order-1"}>
                  <div className="flex items-start gap-4 mb-6">
                    <span className="font-display text-[2.8rem] text-gray-300 leading-none shrink-0">
                      {item.number}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-text-on-light leading-snug">
                      {item.title}
                    </h3>
                  </div>

                  <div className="w-full h-[2px] bg-gray-200 mb-5" />

                  <p className="text-text-on-light/70 text-sm md:text-base font-bold leading-relaxed mb-5">
                    {item.subtitle}
                  </p>

                  <ul className="space-y-4">
                    {item.bullets.map((b, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-text-on-light/70 text-sm md:text-base leading-relaxed"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-2" />
                        <span>
                          <strong className="text-text-on-light font-extrabold">
                            {b.bold}
                          </strong>
                          {b.rest}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Image */}
                <div
                  className={`relative aspect-[4/3] overflow-hidden ${
                    imageFirst ? "order-1 lg:order-1" : "order-1 lg:order-2"
                  }`}
                >
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-zinc-900">
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={statsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="mb-12"
          >
            <p className="text-gray-400 text-base md:text-lg mb-2">
              더 말이 필요 있을까요?
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
              일반인 대상 보컬학원 중{" "}
              <span className="text-accent">최다 수강생</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
              >
                <div className="flex items-baseline justify-center gap-1">
                  <span className="font-bold text-4xl md:text-5xl lg:text-6xl text-white">
                    <CountUp end={stat.value} suffix="" />
                  </span>
                  <span className="text-white/60 text-lg">{stat.suffix}</span>
                </div>
                <span className="text-gray-500 text-sm md:text-base mt-2 block">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Videos */}
      <section ref={videoRef} className="bg-white py-20 lg:py-28">
        <div className="max-w-[1440px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={videoInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <p className="text-text-on-light/60 text-base md:text-lg mb-3">
              보컬 레슨 후 변화가 궁금하신가요?
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-on-light">
              생생한{" "}
              <span className="text-accent font-black">BEFORE &amp; AFTER</span>
              가 실력 상승을 증명합니다.
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {videos.map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={videoInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              >
                <Link
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="group block"
                >
                  <div className="aspect-[9/16] bg-zinc-200 relative overflow-hidden mb-3">
                    <Image
                      src={video.thumbnail}
                      alt={video.title.replace("\n", " ")}
                      fill
                      sizes="(max-width: 768px) 50vw, 16vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-accent/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <svg width="16" height="18" viewBox="0 0 16 18" fill="white">
                          <path d="M0 0L16 9L0 18V0Z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <p className="text-text-on-light text-sm md:text-base leading-snug whitespace-pre-line group-hover:text-accent transition-colors">
                    {video.title}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/reviews"
              className="group inline-flex items-center gap-2 bg-accent text-white hover:bg-accent/90 rounded-r-full px-7 py-3.5 text-base font-bold tracking-wide transition-all duration-300"
            >
              100% 찐후기 보러가기
              <svg
                width="16"
                height="12"
                viewBox="0 0 16 12"
                fill="none"
                className="transition-transform group-hover:translate-x-1"
              >
                <path d="M10 1L15 6L10 11M0 6H15" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <p className="text-text-on-light/60 text-base md:text-lg mb-3">
              수강생들의 진짜 이야기
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-on-light">
              <span className="text-accent">7,000명</span>이 경험한 변화
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {testimonials.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="group block bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  {/* Thumbnail */}
                  <div className="relative aspect-[16/10] bg-zinc-200">
                    <Image
                      src={item.thumbnail}
                      alt={item.quote}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Quote text */}
                  <div className="p-6 flex items-start gap-3">
                    <svg
                      width="24"
                      height="20"
                      viewBox="0 0 32 28"
                      fill="none"
                      className="shrink-0 mt-0.5"
                    >
                      <path
                        d="M0 28V17.5C0 12.833 1.167 9.083 3.5 6.25C5.833 3.417 9.167 1.5 13.5 0.5L14.5 3C11.833 4 9.75 5.417 8.25 7.25C6.75 9.083 6 11.167 6 13.5H12V28H0ZM18 28V17.5C18 12.833 19.167 9.083 21.5 6.25C23.833 3.417 27.167 1.5 31.5 0.5L32.5 3C29.833 4 27.75 5.417 26.25 7.25C24.75 9.083 24 11.167 24 13.5H30V28H18Z"
                        fill="#D4879C"
                      />
                    </svg>
                    <p className="text-text-on-light/80 text-sm md:text-base leading-relaxed font-semibold group-hover:text-accent transition-colors">
                      {item.quote}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <FinalCta />
    </>
  );
}

