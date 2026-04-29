export default function BlogLoading() {
  return (
    <>
      <div className="bg-zinc-900 h-[280px] md:h-[360px]" />
      <div className="bg-zinc-900 h-14 border-b border-white/10" />
      <section className="bg-white py-16 lg:py-18">
        <div className="max-w-5xl mx-auto px-6">
          <div className="h-6 w-24 bg-zinc-200 rounded mx-auto mb-3 animate-pulse" />
          <div className="h-12 w-72 bg-zinc-200 rounded mx-auto animate-pulse" />
        </div>
      </section>
      <section className="bg-zinc-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="h-9 w-20 bg-zinc-200 rounded-full animate-pulse" />
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="rounded-2xl border border-zinc-100 bg-white overflow-hidden">
                <div className="aspect-video bg-zinc-200 animate-pulse" />
                <div className="p-5 md:p-6 space-y-3">
                  <div className="h-3 w-32 bg-zinc-200 rounded animate-pulse" />
                  <div className="h-6 w-full bg-zinc-200 rounded animate-pulse" />
                  <div className="h-4 w-5/6 bg-zinc-200 rounded animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
