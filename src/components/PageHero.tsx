"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import BrandSymbol from "./BrandSymbol";

interface PageHeroProps {
  heading: string;
  subheading?: string;
  description?: string;
  backgroundImage?: string;
}

export default function PageHero({
  heading,
  subheading,
  description,
  backgroundImage,
}: PageHeroProps) {
  return (
    <section className="relative bg-black py-28 lg:py-36 overflow-hidden">
      {/* Background image (optional) */}
      {backgroundImage && (
        <div className="absolute inset-0">
          <Image
            src={backgroundImage}
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
      )}

      {/* Decorative brand symbol */}
      {!backgroundImage && (
        <div className="absolute -right-20 top-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none">
          <BrandSymbol size={500} color="white" />
        </div>
      )}

      {/* Music staff lines decoration */}
      <div className="absolute top-0 left-0 w-full flex flex-col gap-[6px] opacity-10">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="h-[1px] w-full bg-white" />
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Dots decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex gap-2 mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-accent" />
          <span className="w-2 h-2 rounded-full bg-accent" />
          <span className="w-2 h-2 rounded-full bg-accent" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-5xl md:text-6xl lg:text-7xl tracking-[0.1em] text-white"
        >
          {heading}
        </motion.h1>

        {subheading && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-script text-2xl md:text-3xl text-white/60 mt-4"
          >
            {subheading}
          </motion.p>
        )}

        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-400 text-base md:text-lg mt-6 max-w-xl"
          >
            {description}
          </motion.p>
        )}
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-accent" />
    </section>
  );
}
