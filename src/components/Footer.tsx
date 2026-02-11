import Link from "next/link";
import { Icons } from "./Icons";

const socialLinks = [
    { icon: Icons.Youtube, href: "https://www.youtube.com/@3octave", label: "YouTube" },
    { icon: Icons.Instagram, href: "#", label: "Instagram" },
    { icon: Icons.MapPin, href: "#", label: "Naver Blog" }, // Using MapPin as placeholder for Blog
];

export default function Footer() {
    return (
        <footer className="bg-black text-white py-12 border-t border-white/10">
            <div className="max-w-[1440px] mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
                {/* Brand */}
                <div className="flex flex-col gap-4">
                    <span className="font-display text-2xl font-bold tracking-tighter">
                        3 OCTAVE <span className="text-accent">MASTER</span>
                    </span>
                    <p className="text-gray-400 text-sm">
                        Exceed Your Range. <br />
                        대한민국 프로페셔널 발성전문 보컬 트레이닝 학원
                    </p>
                    <div className="flex gap-4 mt-4">
                        {socialLinks.map((social) => (
                            <Link
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-accent transition-colors"
                            >
                                <social.icon size={20} />
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Links: Program */}
                <div className="flex flex-col gap-4">
                    <h4 className="font-bold uppercase tracking-wider text-sm text-gray-500">Program</h4>
                    <Link href="/program/basic" className="hover:text-accent transition-colors">Basic Class</Link>
                    <Link href="/program/advanced" className="hover:text-accent transition-colors">Advanced Class</Link>
                    <Link href="/program" className="hover:text-accent transition-colors">Curriculum</Link>
                </div>

                {/* Links: About & Community */}
                <div className="flex flex-col gap-4">
                    <h4 className="font-bold uppercase tracking-wider text-sm text-gray-500">Explore</h4>
                    <Link href="/about" className="hover:text-accent transition-colors">About Us</Link>
                    <Link href="/community/reviews" className="hover:text-accent transition-colors">Reviews</Link>
                    <Link href="/community/tips" className="hover:text-accent transition-colors">Vocal Tips</Link>
                </div>

                {/* Contact info */}
                <div className="flex flex-col gap-4">
                    <h4 className="font-bold uppercase tracking-wider text-sm text-gray-500">Contact</h4>
                    <p className="text-sm text-gray-400">
                        02-566-2848 <br />
                        서울시 서초구 서초대로78길 36, 강남지웰타워 5층 501호
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block mt-2 text-accent font-bold hover:underline"
                    >
                        Get in touch &rarr;
                    </Link>
                </div>
            </div>

            <div className="max-w-[1440px] mx-auto px-6 mt-12 pt-8 border-t border-white/10 text-xs text-gray-600 flex flex-col md:flex-row justify-between items-center gap-4">
                <p>
                    3옥타브장인보컬학원 주식회사 | 대표: 김윤민 | 사업자등록번호: 202-85-35932
                </p>
                <p>
                    &copy; {new Date().getFullYear()} 3 Octave Master. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
