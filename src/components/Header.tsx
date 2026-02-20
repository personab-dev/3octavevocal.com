"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import MobileMenu from "./MobileMenu";
import { navItems } from "@/lib/navigation";

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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${scrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_1px_20px_rgba(0,0,0,0.08)]"
          : "bg-transparent"
        }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 h-16 lg:h-[72px] flex items-center justify-between">
        {/* Logo — swap between white/black based on scroll */}
        <Link href="/" className="relative flex items-center shrink-0">
          {/* White version (transparent bg) */}
          <span className={`flex items-center gap-2 absolute left-0 transition-opacity duration-500 ${scrolled ? "opacity-0" : "opacity-100"}`}>
            <Image
              src="/images/logo-accent-white.png"
              alt=""
              width={40}
              height={40}
              className="h-6 lg:h-8 w-auto"
              priority
            />
            <Image
              src="/images/logo-white.png"
              alt="3옥타브장인"
              width={220}
              height={40}
              className="h-6 lg:h-8 w-auto"
              priority
            />
          </span>
          {/* Black version (scrolled bg) */}
          <span className={`flex items-center gap-2 transition-opacity duration-500 ${scrolled ? "opacity-100" : "opacity-0"}`}>
            <Image
              src="/images/logo-accent-black.png"
              alt=""
              width={40}
              height={40}
              className="h-6 lg:h-8 w-auto"
              priority
            />
            <Image
              src="/images/logo-black.png"
              alt="3옥타브장인"
              width={220}
              height={40}
              className="h-6 lg:h-8 w-auto"
              priority
            />
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-14 h-full">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative group h-full flex items-center"
            >
              <Link
                href={item.href}
                className={`text-sm font-bold font-display tracking-[0.15em] transition-colors duration-500 flex items-center gap-1 ${scrolled
                    ? "text-gray-800 hover:text-accent"
                    : "text-white/90 hover:text-accent"
                  }`}
              >
                {item.label}
              </Link>

              {/* Hover underline */}
              <span className="absolute bottom-4 left-0 w-0 h-[2px] bg-accent group-hover:w-full transition-all duration-300" />

              {/* Dropdown */}
              {item.children && (
                <div
                  className={`absolute top-full left-1/2 -translate-x-1/2 w-52 py-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-2xl ${scrolled
                      ? "bg-white border border-gray-100"
                      : "bg-black/95 backdrop-blur-sm border border-white/10"
                    }`}
                >
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className={`block px-6 py-3 text-base transition-all duration-200 border-l-2 border-transparent hover:border-accent ${scrolled
                          ? "text-gray-500 hover:text-accent hover:bg-gray-50 hover:pl-8"
                          : "text-gray-400 hover:text-white hover:bg-white/5 hover:pl-8"
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

        {/* Mobile Menu */}
        <MobileMenu scrolled={scrolled} />
      </div>

    </header>
  );
}
