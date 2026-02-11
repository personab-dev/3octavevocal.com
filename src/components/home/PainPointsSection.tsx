"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const quotes = [
  { text: "\"목이 아픈 게 정상인가?", highlight: "원래 다 이렇게 부르나?\"", x: "60%", y: "10%" },
  { text: "\"연습할수록 목이 잠기는데,", highlight: "뭘 잘못한 거지?\"", x: "10%", y: "30%" },
  { text: "\"유튜브 보고 연습했는데,", highlight: "왜 난 안 되지?\"", x: "45%", y: "50%" },
  { text: "\"다른 사람들은 쉽게 부르던데,", highlight: "난왜 이렇게 힘들까?\"", x: "5%", y: "70%" },
];

export default function PainPointsSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="bg-white py-20 lg:py-28 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-text-on-light/70 text-base md:text-lg mb-4">
            아무리 연습해도 고음은 늘 제자리인가요?
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-on-light">
            <span className="bg-accent text-white px-2 py-1 inline-block">혼자서는</span> 답을 찾기 어렵습니다.
          </h2>
        </motion.div>

        {/* Scattered speech bubbles */}
        <div className="relative min-h-[400px] md:min-h-[500px]">
          {quotes.map((quote, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, rotate: -2 + index * 2 }}
              animate={isInView ? { opacity: 1, y: 0, rotate: -3 + index * 3 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
              className="absolute max-w-[320px]"
              style={{ left: quote.x, top: quote.y }}
            >
              <div className="bg-zinc-800/90 backdrop-blur-sm text-white px-5 py-4 text-sm md:text-base shadow-xl">
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
