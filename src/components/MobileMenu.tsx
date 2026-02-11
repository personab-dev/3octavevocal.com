"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
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

export default function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
    const pathname = usePathname();

    const toggleMenu = () => setIsOpen(!isOpen);
    const toggleSubmenu = (label: string) =>
        setOpenSubmenu(openSubmenu === label ? null : label);

    return (
        <div className="lg:hidden">
            <button
                onClick={toggleMenu}
                className="p-2 text-white hover:text-accent transition-colors"
                aria-label="Toggle menu"
            >
                {isOpen ? <Icons.X size={24} /> : <Icons.Menu size={24} />}
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-md border-b border-white/10 p-6 flex flex-col gap-6"
                    >
                        <nav className="flex flex-col gap-4">
                            {navItems.map((item) => (
                                <div key={item.label} className="flex flex-col">
                                    {item.children ? (
                                        <>
                                            <button
                                                onClick={() => toggleSubmenu(item.label)}
                                                className={`flex items-center justify-between text-lg font-bold tracking-wider hover:text-accent transition-colors ${pathname.startsWith(item.href)
                                                        ? "text-accent"
                                                        : "text-white"
                                                    }`}
                                            >
                                                {item.label}
                                                <Icons.ChevronDown
                                                    size={16}
                                                    className={`transition-transform ${openSubmenu === item.label ? "rotate-180" : ""
                                                        }`}
                                                />
                                            </button>
                                            <AnimatePresence>
                                                {openSubmenu === item.label && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: "auto", opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        className="overflow-hidden pl-4 flex flex-col gap-2 mt-2 border-l border-white/20"
                                                    >
                                                        {item.children.map((child) => (
                                                            <Link
                                                                key={child.href}
                                                                href={child.href}
                                                                onClick={() => setIsOpen(false)}
                                                                className="text-sm text-gray-400 hover:text-white py-1 block"
                                                            >
                                                                {child.label}
                                                            </Link>
                                                        ))}
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </>
                                    ) : (
                                        <Link
                                            href={item.href}
                                            onClick={() => setIsOpen(false)}
                                            className={`text-lg font-bold tracking-wider hover:text-accent transition-colors ${pathname === item.href ? "text-accent" : "text-white"
                                                }`}
                                        >
                                            {item.label}
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </nav>
                        <div className="pt-6 border-t border-white/10">
                            <Link
                                href="/contact"
                                onClick={() => setIsOpen(false)}
                                className="block w-full text-center bg-accent hover:bg-white hover:text-black text-white px-6 py-3 font-bold transition-all text-sm uppercase tracking-widest"
                            >
                                Free Consultation
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
