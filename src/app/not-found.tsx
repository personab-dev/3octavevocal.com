import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "페이지를 찾을 수 없습니다",
};

export default function NotFound() {
  return (
    <section className="relative min-h-[calc(100vh-64px)] flex items-center justify-center overflow-hidden bg-black">
      {/* Logo watermark */}
      <div className="absolute right-[5%] top-1/2 -translate-y-1/2 pointer-events-none">
        <Image
          src="/images/cta/logo-watermark.png"
          alt=""
          width={500}
          height={500}
          className="opacity-[0.04] w-[300px] lg:w-[500px] h-auto"
        />
      </div>

      {/* Music staff lines */}
      <div className="absolute top-1/4 left-0 w-full flex flex-col gap-[6px] opacity-[0.06]">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="h-[1px] w-full bg-white" />
        ))}
      </div>

      <div className="relative z-10 text-center px-6">
        {/* 404 number */}
        <p className="font-display text-[120px] md:text-[180px] lg:text-[220px] leading-none text-accent/20 select-none">
          404
        </p>

        {/* Message */}
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white -mt-4 md:-mt-6">
          이 음은 악보에 없습니다
        </h1>
        <p className="text-gray-500 text-base md:text-lg mt-4 max-w-md mx-auto">
          찾으시는 페이지가 존재하지 않거나, 이동되었을 수 있습니다.
        </p>

        {/* CTA */}
        <div className="flex flex-col items-center justify-center gap-4 mt-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-accent text-white hover:bg-accent/90 rounded-r-full px-8 py-4 text-base font-bold transition-all duration-300"
          >
            홈으로 돌아가기
            <svg
              width="16"
              height="12"
              viewBox="0 0 16 12"
              fill="none"
              className="transition-transform group-hover:translate-x-1"
            >
              <path d="M10 1L15 6L10 11M0 6H15" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </Link>
          <Link
            href="/contact"
            className="text-gray-400 hover:text-white text-base font-bold transition-colors duration-300"
          >
            상담 문의하기
          </Link>
        </div>
      </div>
    </section>
  );
}
