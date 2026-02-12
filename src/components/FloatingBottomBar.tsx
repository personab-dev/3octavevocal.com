"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingBottomBar() {
  const [isVisible, setIsVisible] = useState(false);
  const [viewerCount, setViewerCount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Simulated live viewer count
    setViewerCount(Math.floor(Math.random() * 8) + 5);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed bottom-0 left-0 w-full z-50"
        >
          <div className="bg-accent/95 backdrop-blur-sm shadow-[0_-4px_20px_rgba(0,0,0,0.2)]">
            <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
              {/* Viewer count */}
              <div className="flex items-center gap-2 text-white text-sm md:text-base shrink-0">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                지금 <strong className="text-lg md:text-xl">{viewerCount}명</strong>이 보고 있어요
              </div>

              {/* CTA button */}
              <Link
                href="/contact"
                className="group flex items-center justify-center gap-2 bg-white text-text-on-light hover:bg-black hover:text-white px-6 md:px-10 py-3 text-sm font-bold transition-all duration-300 shrink-0"
              >
                상담 예약하기
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
        </motion.div>
      )}
    </AnimatePresence>
  );
}
