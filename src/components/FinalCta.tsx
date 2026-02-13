"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface FinalCtaProps {
  heading?: string;
  description?: string;
  buttonText?: string;
}

export default function FinalCta({
  heading = "여기서도 안 된다면, 어디서도 안 됩니다.",
  description = "그만큼 확실한 커리큘럼, 직접 확인하세요.",
  buttonText = "무료 상담 문의하기",
}: FinalCtaProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="relative overflow-hidden bg-gradient-to-br from-zinc-900 to-black">
      {/* Logo watermark — right side */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-[10%] pointer-events-none">
        <Image
          src="/images/cta/logo-watermark.png"
          alt=""
          width={480}
          height={480}
          className="opacity-[0.06] w-[360px] lg:w-[480px] h-auto"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-snug">
            {heading}
          </h2>
          <p className="text-gray-400 text-lg md:text-xl mt-5">
            {description}
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 border border-accent text-accent hover:bg-accent hover:text-white px-8 py-4 text-lg font-bold mt-8 transition-all duration-300"
          >
            {buttonText}
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
