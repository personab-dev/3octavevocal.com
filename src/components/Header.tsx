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
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/95 backdrop-blur-sm">
      <div className="max-w-[1440px] mx-auto px-6 h-20 flex items-center justify-between">
        {/* Left: Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/images/logo-white.png"
            alt="3옥타브장인 보컬학원"
            width={180}
            height={32}
            className="h-7 w-auto"
            priority
          />
        </Link>

        {/* Center/Right: Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10 h-full">
          {navItems.map((item) => (
            <div key={item.label} className="relative group h-full flex items-center">
              <Link
                href={item.href}
                className="text-[13px] font-bold font-display tracking-[0.15em] text-white/90 hover:text-accent transition-colors duration-300 flex items-center gap-1"
              >
                {item.label}
              </Link>

              {/* Hover underline */}
              <span className="absolute bottom-5 left-0 w-0 h-[2px] bg-accent group-hover:w-full transition-all duration-300" />

              {/* Dropdown */}
              {item.children && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-48 bg-black/95 backdrop-blur-sm border border-white/10 py-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-2xl">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-5 py-2.5 text-sm text-gray-400 hover:text-white hover:bg-white/5 hover:pl-7 transition-all duration-200"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right: CTA (Desktop) */}
        <div className="hidden lg:block ml-6">
          <Link
            href="/contact"
            className="border border-accent/60 hover:bg-accent text-white px-6 py-2.5 text-xs font-bold tracking-widest transition-all duration-300 uppercase hover:shadow-[0_0_20px_rgba(230,32,77,0.3)]"
          >
            상담 예약
          </Link>
        </div>

        {/* Right: Mobile Menu */}
        <MobileMenu />
      </div>

      {/* Decorative Music Sheet Lines */}
      <div className="flex flex-col gap-[4px]">
        <div className="h-[1px] w-full bg-white/10" />
        <div className="h-[1px] w-full bg-white/10" />
      </div>
    </header>
  );
}
