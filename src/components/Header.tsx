"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import MobileMenu from "./MobileMenu";

const navItems = [
  {
    label: "ABOUT",
    href: "/about",
    children: [
      { label: "대표 철학", href: "/about/philosophy" },
      { label: "차별점", href: "/about/difference" },
      { label: "지점 찾기", href: "/about/locations" },
    ],
  },
  {
    label: "VOCAL CLASS",
    href: "/program",
    children: [
      { label: "기본 교육과정", href: "/program/basic" },
      { label: "심화 교육과정", href: "/program/advanced" },
    ],
  },
  {
    label: "COMMUNITY",
    href: "/community",
    children: [
      { label: "수강생 후기", href: "/community/reviews" },
      { label: "발성 꿀팁", href: "/community/tips" },
    ],
  },
  {
    label: "CONTACT",
    href: "/contact",
  },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_1px_20px_rgba(0,0,0,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo — swap between white/black based on scroll */}
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/images/logo-white.png"
            alt="3옥타브장인"
            width={180}
            height={32}
            className={`h-7 w-auto absolute transition-opacity duration-500 ${
              scrolled ? "opacity-0" : "opacity-100"
            }`}
            priority
          />
          <Image
            src="/images/logo-black.png"
            alt="3옥타브장인"
            width={180}
            height={32}
            className={`h-7 w-auto transition-opacity duration-500 ${
              scrolled ? "opacity-100" : "opacity-0"
            }`}
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10 h-full">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative group h-full flex items-center"
            >
              <Link
                href={item.href}
                className={`text-[13px] font-bold font-display tracking-[0.15em] transition-colors duration-500 flex items-center gap-1 ${
                  scrolled
                    ? "text-gray-800 hover:text-accent"
                    : "text-white/90 hover:text-accent"
                }`}
              >
                {item.label}
              </Link>

              {/* Hover underline */}
              <span className="absolute bottom-5 left-0 w-0 h-[2px] bg-accent group-hover:w-full transition-all duration-300" />

              {/* Dropdown */}
              {item.children && (
                <div
                  className={`absolute top-full left-1/2 -translate-x-1/2 w-48 py-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-2xl ${
                    scrolled
                      ? "bg-white border border-gray-100"
                      : "bg-black/95 backdrop-blur-sm border border-white/10"
                  }`}
                >
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className={`block px-5 py-2.5 text-sm transition-all duration-200 ${
                        scrolled
                          ? "text-gray-500 hover:text-accent hover:bg-gray-50 hover:pl-7"
                          : "text-gray-400 hover:text-white hover:bg-white/5 hover:pl-7"
                      }`}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* CTA Button (Desktop) */}
        <div className="hidden lg:block ml-6">
          <Link
            href="/contact"
            className={`px-6 py-2.5 text-xs font-bold tracking-widest transition-all duration-500 uppercase ${
              scrolled
                ? "border border-accent text-accent hover:bg-accent hover:text-white hover:shadow-[0_0_20px_rgba(230,32,77,0.3)]"
                : "border border-accent/60 text-white hover:bg-accent hover:shadow-[0_0_20px_rgba(230,32,77,0.3)]"
            }`}
          >
            상담 예약
          </Link>
        </div>

        {/* Mobile Menu */}
        <MobileMenu scrolled={scrolled} />
      </div>

      {/* Bottom decorative line — only visible when not scrolled */}
      <div
        className={`transition-opacity duration-500 ${
          scrolled ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="flex flex-col gap-[4px]">
          <div className="h-[1px] w-full bg-white/10" />
          <div className="h-[1px] w-full bg-white/10" />
        </div>
      </div>
    </header>
  );
}
