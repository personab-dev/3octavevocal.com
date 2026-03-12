"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { programFaqs } from "@/lib/faq-data";

export default function ProgramFAQ() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section ref={ref} className="bg-black py-20 lg:py-28">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="font-display text-sm tracking-[0.2em] text-gray-500 mb-3">
            Q&A
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            이런 걱정, 아직도 하시나요?
          </h2>
        </motion.div>

        <div className="divide-y divide-white/10">
          {programFaqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex items-start justify-between gap-4 py-6 text-left group"
              >
                <span
                  className={`text-sm md:text-base font-bold transition-colors duration-300 ${
                    openIndex === index
                      ? "text-accent"
                      : "text-white group-hover:text-accent"
                  }`}
                >
                  {faq.question}
                </span>
                <ChevronDown
                  size={20}
                  className={`shrink-0 text-gray-500 transition-transform duration-300 mt-0.5 ${
                    openIndex === index ? "rotate-180 text-accent" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-gray-400 text-sm md:text-base leading-relaxed pb-6 whitespace-pre-line">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
