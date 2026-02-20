"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Icons } from "./Icons";
import { navItems } from "@/lib/navigation";

export default function MobileMenu({ scrolled }: { scrolled: boolean }) {
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
                className={`p-2 transition-colors duration-500 hover:text-accent ${scrolled ? "text-gray-800" : "text-white"
                    }`}
                aria-label="Toggle menu"
            >
                {isOpen ? <Icons.X size={24} /> : <Icons.Menu size={24} />}
            </button>

            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Blur backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 top-16 bg-black/40 backdrop-blur-sm z-40"
                            onClick={() => setIsOpen(false)}
                        />
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-md border-b border-white/10 p-6 flex flex-col gap-6 z-50"
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
                                                                className="text-base text-gray-400 hover:text-white py-1.5 block"
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
                                className="block w-full text-center bg-accent hover:bg-white hover:text-black text-white px-6 py-3.5 font-bold transition-all text-base tracking-widest"
                            >
                                무료 상담 예약
                            </Link>
                        </div>
                    </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}
