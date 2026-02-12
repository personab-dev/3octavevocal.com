"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { label: "수강생 후기", href: "/reviews" },
  { label: "발성 꿀팁", href: "/tips" },
];

export default function CommunitySubNav() {
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
                className={`flex-1 py-4 text-center text-sm font-bold transition-colors duration-300 relative ${isActive
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
