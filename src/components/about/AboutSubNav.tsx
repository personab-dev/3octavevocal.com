"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { label: "대표 철학", href: "/about/philosophy" },
  { label: "3옥타브장인 차별점", href: "/about/difference" },
  { label: "지점 찾기", href: "/about/locations" },
];

export default function AboutSubNav() {
  const pathname = usePathname();

  return (
    <nav className="bg-zinc-900 border-b border-white/10">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex">
          {tabs.map((tab) => {
            const isActive = pathname === tab.href;
            return (
              <Link
                key={tab.href}
                href={tab.href}
                className={`flex-1 py-4 text-center text-sm font-bold transition-colors duration-300 relative ${
                  isActive
                    ? "text-accent"
                    : "text-gray-500 hover:text-white"
                }`}
              >
                {tab.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[3px] bg-accent" />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
