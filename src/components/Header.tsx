import Link from "next/link";
import Image from "next/image";
import MobileMenu from "./MobileMenu";
import { Icons } from "./Icons";

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
        <header className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-sm border-b border-white/10">
            <div className="max-w-[1440px] mx-auto px-6 h-20 flex items-center justify-between">
                {/* Helper function to check for children */}

                {/* Left: Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="relative h-8 w-auto">
                        {/* Use text logo if image is not available yet, or use the Icon.Logo */}
                        <span className="font-display text-2xl font-bold tracking-tighter text-white group-hover:text-white/90 transition-colors">
                            3 OCTAVE <span className="text-accent">MASTER</span>
                        </span>
                    </div>
                </Link>

                {/* Center/Right: Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-8 h-full">
                    {navItems.map((item) => (
                        <div key={item.label} className="relative group h-full flex items-center">
                            <Link
                                href={item.href}
                                className="text-sm font-bold font-display tracking-widest text-white hover:text-accent transition-colors flex items-center gap-1"
                            >
                                {item.label}
                            </Link>

                            {/* Dropdown */}
                            {item.children && (
                                <div className="absolute top-full left-1/2 -translate-x-1/2 w-48 bg-black border border-white/10 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 shadow-xl">
                                    {item.children.map((child) => (
                                        <Link
                                            key={child.href}
                                            href={child.href}
                                            className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
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
                <div className="hidden lg:block ml-4">
                    <Link
                        href="/contact"
                        className="border border-white/20 hover:border-accent hover:bg-accent text-white px-5 py-2 text-xs font-bold tracking-widest transition-all uppercase"
                    >
                        Consultation
                    </Link>
                </div>

                {/* Right: Mobile Menu */}
                <MobileMenu />
            </div>

            {/* Decorative Music Sheet Lines (2 lines with 4px gap) */}
            <div className="absolute bottom-0 left-0 w-full flex flex-col gap-[4px] pointer-events-none pb-[2px]">
                <div className="h-[1px] w-full bg-white/20"></div>
                <div className="h-[1px] w-full bg-white/20"></div>
            </div>
        </header>
    );
}
