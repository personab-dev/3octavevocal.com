"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import BrandSymbol from "@/components/BrandSymbol";

export default function TrustCtaSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="relative overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[400px]">
        {/* Left: Dark with text */}
        <div className="bg-gradient-to-br from-zinc-900 to-black p-8 lg:p-16 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-snug">
              여기서도 안 된다면,<br />어디서도 안 됩니다.
            </h2>
            <p className="text-gray-400 text-sm md:text-base mt-4">
              그만큼 확실한 커리큘럼, 직접 확인하세요.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 border border-accent text-accent hover:bg-accent hover:text-white px-6 py-3 text-sm font-bold mt-8 transition-all duration-300"
            >
              무료 상담 문의하기
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
          </motion.div>
        </div>

        {/* Right: Brand symbol */}
        <div className="bg-black flex items-center justify-center p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 to-black/80" />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 0.3, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative z-10"
          >
            <BrandSymbol size={250} color="#ffffff" />
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="absolute bottom-8 right-8 text-white font-display text-2xl md:text-3xl tracking-tight z-10"
          >
            3OCTAVE<br />MASTER
          </motion.p>
        </div>
      </div>
    </section>
  );
}
