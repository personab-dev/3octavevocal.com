"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function GrowthSystemSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <section ref={ref} className="bg-black py-16 lg:py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-xl md:text-2xl lg:text-3xl font-bold text-white"
        >
          <span className="text-accent">수강생이 성장할 수 밖에 없는 시스템</span>을 만듭니다.
        </motion.h2>
      </div>
    </section>
  );
}
