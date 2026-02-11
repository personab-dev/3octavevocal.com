import Link from "next/link";
import Image from "next/image";
import { Youtube, Instagram, Music } from "lucide-react";

const socialLinks = [
  {
    icon: Youtube,
    href: "https://www.youtube.com/@3octave",
    label: "YouTube",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/3octave_official/",
    label: "Instagram",
  },
  {
    icon: Music,
    href: "https://soundcloud.com/user-208871057",
    label: "SoundCloud",
  },
];

const footerColumns = [
  {
    title: "교육과정",
    links: [
      { label: "기본 교육과정", href: "/program/basic" },
      { label: "심화 교육과정", href: "/program/advanced" },
      { label: "커리큘럼 안내", href: "/program" },
    ],
  },
  {
    title: "소개",
    links: [
      { label: "대표 철학", href: "/about/philosophy" },
      { label: "차별점", href: "/about/difference" },
      { label: "지점 찾기", href: "/about/locations" },
    ],
  },
  {
    title: "커뮤니티",
    links: [
      { label: "수강생 후기", href: "/community/reviews" },
      { label: "발성 꿀팁", href: "/community/tips" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Top music staff lines */}
      <div className="flex flex-col gap-[4px]">
        <div className="h-[1px] bg-white/10" />
        <div className="h-[1px] bg-white/10" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <Image
              src="/images/logo-white.png"
              alt="3옥타브장인 보컬학원"
              width={180}
              height={32}
              className="h-7 w-auto"
            />
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Exceed Your Range.
              <br />
              대한민국 프로페셔널 발성전문 보컬 트레이닝 학원
            </p>

            {/* Social links */}
            <div className="flex gap-4 mt-2">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="w-10 h-10 border border-white/10 flex items-center justify-center text-gray-500 hover:text-accent hover:border-accent/50 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </Link>
              ))}
              {/* Naver Blog - custom icon */}
              <Link
                href="https://blog.naver.com/3octave1"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="w-10 h-10 border border-white/10 flex items-center justify-center text-gray-500 hover:text-accent hover:border-accent/50 transition-all duration-300"
                aria-label="네이버 블로그"
              >
                <span className="text-xs font-bold">N</span>
              </Link>
            </div>
          </div>

          {/* Link columns */}
          {footerColumns.map((column) => (
            <div key={column.title} className="flex flex-col gap-4">
              <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-gray-500">
                {column.title}
              </h4>
              <div className="flex flex-col gap-3">
                {column.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-accent transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-[1440px] mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs text-gray-600">
          <div className="flex flex-col gap-1">
            <p>
              3옥타브장인보컬학원 주식회사 | 대표: 김윤민 |
              사업자등록번호: 202-85-35932
            </p>
            <p>
              서울시 서초구 서초대로78길 36, 강남지웰타워 5층 501호 |
              02-566-2848
            </p>
          </div>
          <p>&copy; 2026 3옥타브장인 보컬학원. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
