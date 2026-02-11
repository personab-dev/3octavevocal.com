import Link from "next/link";
import { Icons } from "@/components/Icons";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* SECTION 1: HERO */}
      <section className="relative min-h-[calc(100vh-80px)] flex flex-col lg:flex-row">
        {/* Left: Image Placeholder */}
        <div className="w-full lg:w-[55%] bg-zinc-900 relative min-h-[50vh] lg:min-h-auto group overflow-hidden">
          {/* Text Overlay on Image */}
          <div className="absolute inset-0 flex items-end p-8 lg:p-12 z-10 bg-gradient-to-t from-black/80 via-transparent to-transparent">
            <span className="font-script text-5xl lg:text-7xl text-white transform -rotate-2">
              Exceed your range
            </span>
          </div>

          {/* Symbol Overlay */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-20 pointer-events-none mix-blend-overlay">
            <div className="w-80 h-80 border-[24px] border-white rounded-full flex items-center justify-center">
              <span className="text-[10rem] font-bold font-display text-white">3</span>
            </div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center text-zinc-700 font-bold text-xl uppercase tracking-widest pointer-events-none">
            Stage Image Area
          </div>
        </div>

        {/* Right: Content */}
        <div className="w-full lg:w-[45%] bg-black flex flex-col justify-center p-8 lg:p-16 relative border-l border-white/10">
          {/* Top Right Decoration - Hot Pink Chevron > */}
          <div className="absolute top-12 right-12 text-accent animate-pulse">
            <span className="font-display text-8xl font-black leading-none opacity-50 select-none">&gt;</span>
          </div>

          <div className="flex flex-col gap-6 max-w-lg relative z-10">
            <h1 className="font-display text-6xl lg:text-8xl font-bold leading-[0.85] tracking-tighter text-white">
              3 OCTAVE <br />
              <span className="text-accent">MASTER</span>
            </h1>
            <p className="text-gray-300 text-lg lg:text-xl font-light leading-relaxed pl-1 border-l-2 border-accent">
              대한민국 프로페셔널 <br className="hidden lg:block" />
              발성전문 보컬 트레이닝 학원
            </p>

            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-block bg-accent hover:bg-white hover:text-black text-white px-10 py-5 text-sm font-bold tracking-widest uppercase transition-all shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
              >
                Free Consultation
              </Link>
            </div>
          </div>

          {/* Bottom Left Decoration - Hot Pink Chevron < */}
          <div className="absolute bottom-12 left-12 text-accent animate-pulse delay-75">
            <span className="font-display text-8xl font-black leading-none opacity-50 select-none">&lt;</span>
          </div>
        </div>
      </section>

      {/* SECTION 2: STATS */}
      <section className="bg-black py-20 border-t border-b border-white/10 relative z-20">
        <div className="max-w-[1440px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
          {/* Stat 1 */}
          <div className="flex flex-col items-center justify-center p-8 text-center gap-2 group">
            <span className="font-display text-7xl lg:text-8xl font-bold text-white group-hover:text-accent transition-colors">7,000+</span>
            <span className="text-gray-400 text-sm font-bold tracking-widest uppercase">Cumulative Students</span>
            <span className="text-gray-500 text-xs">누적 수강생</span>
          </div>

          {/* Vertical Separator 1 (Music Lines) */}
          <div className="hidden md:flex flex-col justify-center gap-1 h-32 self-center opacity-20">
            <div className="w-[1px] h-full bg-white"></div>
            <div className="w-[1px] h-full bg-white"></div>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col items-center justify-center p-8 text-center gap-2 group">
            <span className="font-display text-7xl lg:text-8xl font-bold text-white group-hover:text-accent transition-colors">110K+</span>
            <span className="text-gray-400 text-sm font-bold tracking-widest uppercase">YouTube Subscribers</span>
            <span className="text-gray-500 text-xs">유튜브 구독자</span>
          </div>

          {/* Vertical Separator 2 (Music Lines) */}
          <div className="hidden md:flex flex-col justify-center gap-1 h-32 self-center opacity-20">
            <div className="w-[1px] h-full bg-white"></div>
            <div className="w-[1px] h-full bg-white"></div>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col items-center justify-center p-8 text-center gap-2 group">
            <span className="font-display text-7xl lg:text-8xl font-bold text-white group-hover:text-accent transition-colors">3</span>
            <span className="text-gray-400 text-sm font-bold tracking-widest uppercase">Branches</span>
            <span className="text-gray-500 text-xs">서울 / 인천 / 부산</span>
          </div>
        </div>
      </section>

      {/* SECTION 3: CORE VALUES (Staircase) */}
      <section className="bg-black py-32 relative overflow-hidden">
        {/* Background Music Lines Decoration - Top */}
        <div className="absolute top-20 left-0 w-full opacity-10 pointer-events-none flex flex-col gap-1">
          <div className="h-[1px] bg-white w-full"></div>
          <div className="h-[1px] bg-white w-full"></div>
        </div>

        <div className="max-w-[1440px] mx-auto px-6">
          <div className="flex flex-col md:flex-row items-stretch justify-center gap-0 relative">

            {/* Step 1 - Bottom Level */}
            <div className="flex-1 flex flex-col justify-end group">
              <div className="border-l border-t border-r border-white/20 p-8 min-h-[300px] bg-gradient-to-b from-zinc-900 to-black hover:border-accent transition-colors relative">
                <span className="text-accent font-display text-6xl mb-4 block opacity-50 group-hover:opacity-100 transition-opacity">01</span>
                <h3 className="font-display text-4xl text-white mb-4 group-hover:text-accent transition-colors">CHALLENGE</h3>
                <p className="text-gray-400 font-light">기초 발성부터 체계적으로<br />탄탄하게 쌓아올립니다.</p>
              </div>
              {/* Double Line Separator below is naturally handled by next section or footer, but let's add a visual connector */}
              <div className="h-[2px] w-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>

            {/* Connector: Music Sheet Lines */}
            <div className="hidden md:flex w-[100px] flex-col justify-end pb-12 items-center gap-1 opacity-20">
              <div className="w-full h-[1px] bg-white"></div>
              <div className="w-full h-[1px] bg-white"></div>
            </div>

            {/* Step 2 - Middle Level */}
            <div className="flex-1 flex flex-col justify-end group md:-mt-[150px] z-10">
              <div className="border-l border-t border-r border-white/20 p-8 min-h-[300px] bg-gradient-to-b from-zinc-900 to-black hover:border-accent transition-colors relative shadow-2xl">
                <span className="text-accent font-display text-6xl mb-4 block opacity-50 group-hover:opacity-100 transition-opacity">02</span>
                <h3 className="font-display text-4xl text-white mb-4 group-hover:text-accent transition-colors">PATIENCE</h3>
                <p className="text-gray-400 font-light">끈기 있는 단계별 트레이닝으로<br />포기하지 않는 힘을 기릅니다.</p>
              </div>
              <div className="h-[2px] w-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>

            {/* Connector: Music Sheet Lines */}
            <div className="hidden md:flex w-[100px] flex-col justify-end pb-[162px] items-center gap-1 opacity-20">
              <div className="w-full h-[1px] bg-white"></div>
              <div className="w-full h-[1px] bg-white"></div>
            </div>

            {/* Step 3 - Top Level */}
            <div className="flex-1 flex flex-col justify-end group md:-mt-[300px] z-20">
              <div className="border-l border-t border-r border-white/20 p-8 min-h-[300px] bg-gradient-to-b from-zinc-900 to-black hover:border-accent transition-colors relative shadow-2xl">
                <span className="text-accent font-display text-6xl mb-4 block opacity-50 group-hover:opacity-100 transition-opacity">03</span>
                <h3 className="font-display text-4xl text-white mb-4 group-hover:text-accent transition-colors">DREAM</h3>
                <p className="text-gray-400 font-light">한계를 넘어<br />꿈의 보컬을 실현합니다.</p>
              </div>
              <div className="h-[2px] w-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>

          </div>
        </div>

        {/* Background Music Lines Decoration - Bottom */}
        <div className="absolute bottom-20 right-0 w-full opacity-10 pointer-events-none flex flex-col gap-1 items-end">
          <div className="h-[1px] bg-white w-full"></div>
          <div className="h-[1px] bg-white w-full"></div>
        </div>
      </section>

      {/* SECTION 4: CTA BANNER */}
      <section className="bg-accent py-20 text-center px-6">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-8">
          <h2 className="font-display text-5xl lg:text-7xl font-bold text-white leading-none">
            START YOUR JOURNEY
          </h2>
          <p className="text-white text-lg lg:text-xl font-medium max-w-2xl">
            단 10분, 첫 레슨만으로도 변화를 경험하세요.<br />
            지금 바로 무료 상담을 신청해보세요.
          </p>
          <Link
            href="/contact"
            className="bg-white text-black hover:bg-black hover:text-white px-10 py-5 text-sm font-bold tracking-widest uppercase transition-all"
          >
            Book Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
