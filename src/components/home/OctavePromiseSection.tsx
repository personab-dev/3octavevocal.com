"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function OctavePromiseSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <section ref={ref} className="bg-black py-20 lg:py-28 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          {/* Dots */}
          <div className="flex gap-2.5 mb-5">
            <span className="w-2.5 h-2.5 rounded-full bg-accent" />
            <span className="w-2.5 h-2.5 rounded-full bg-accent" />
            <span className="w-2.5 h-2.5 rounded-full bg-accent" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-snug">
            누구나 올라갑니다.
          </h2>
          <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mt-3">
            <span className="bg-accent px-2 py-1 inline-block">2옥타브 → 3옥타브,</span>{" "}
            이제 당신 차례입니다.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <Link
            href="/reviews"
            className="group inline-flex items-center gap-2 bg-accent text-white hover:bg-accent/90 rounded-r-full px-8 py-4 text-lg font-bold tracking-wide transition-all duration-300"
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
        </motion.div>
      </div>
    </section>
  );
}
