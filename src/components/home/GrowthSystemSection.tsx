"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function GrowthSystemSection() {
  return (
    <section className="bg-black py-20 lg:py-28 relative overflow-hidden">
      {/* Asset 38 background layer */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <Image
          src="/images/home/asset-38.png"
          alt=""
          width={800}
          height={800}
          className="w-auto h-full max-h-[80%] object-contain opacity-[0.07]"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-white"
        >
          <span className="text-accent">수강생이 성장할 수 밖에 없는 시스템</span>을 만듭니다.
        </motion.h2>
      </div>
    </section>
  );
}
