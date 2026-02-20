"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const quotes = [
  { text: "\"목이 아픈 게 정상인가?", highlight: "원래 다 이렇게 부르나?\"", x: "50%", y: "5%" },
  { text: "\"연습할수록 목이 잠기는데,", highlight: "뭘 잘못한 거지?\"", x: "5%", y: "28%" },
  { text: "\"유튜브 보고 연습했는데,", highlight: "왜 난 안 되지?\"", x: "35%", y: "52%" },
  { text: "\"다른 사람들은 쉽게 부르던데,", highlight: "난왜 이렇게 힘들까?\"", x: "3%", y: "76%" },
];

export default function PainPointsSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="bg-white py-24 lg:py-36 relative overflow-hidden">
      {/* Logo watermark — top-left */}
      <div className="absolute -top-16 -left-16 opacity-[0.04] pointer-events-none">
        <Image
          src="/images/logo-accent-black.png"
          alt=""
          width={420}
          height={420}
          className="object-contain"
        />
      </div>
      {/* Logo watermark — bottom-right */}
      <div className="absolute -bottom-16 -right-16 opacity-[0.04] pointer-events-none">
        <Image
          src="/images/logo-accent-black.png"
          alt=""
          width={420}
          height={420}
          className="object-contain"
        />
      </div>

      {/* Radial gradient background */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_80%_60%_at_50%_55%,_rgba(0,0,0,0.06)_0%,_transparent_70%)]" />
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-text-on-light/70 text-lg md:text-xl mb-4">
            아무리 연습해도 고음은 늘 제자리인가요?
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-on-light">
            <span className="bg-accent text-white px-3 py-1 inline-block">혼자서는</span> 답을 찾기 어렵습니다.
          </h2>
        </motion.div>

        {/* Mobile: stacked layout */}
        <div className="flex flex-col gap-4 md:hidden">
          {quotes.map((quote, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
              className={index % 2 === 0 ? "self-start max-w-[85%]" : "self-end max-w-[85%]"}
            >
              <div className="bg-zinc-800/90 backdrop-blur-sm text-white px-7 py-6 text-lg shadow-xl">
                <span className="text-gray-300">{quote.text}</span>{" "}
                <span className="font-bold text-white">{quote.highlight}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop: scattered absolute layout */}
        <div className="relative min-h-[620px] hidden md:block">
          {quotes.map((quote, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, rotate: -2 + index * 2 }}
              animate={isInView ? { opacity: 1, y: 0, rotate: -3 + index * 3 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
              className="absolute max-w-[420px]"
              style={{ left: quote.x, top: quote.y }}
            >
              <div className="bg-zinc-800/90 backdrop-blur-sm text-white px-8 py-6 text-lg lg:text-xl shadow-xl">
                <span className="text-gray-300">{quote.text}</span>{" "}
                <span className="font-bold text-white">{quote.highlight}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
