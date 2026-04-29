export default function BlogPostLoading() {
  return (
    <div className="bg-white text-text-on-light">
      <article className="container mx-auto max-w-6xl px-4 py-16 lg:py-20">
        <div className="mb-8 h-4 w-64 bg-zinc-200 rounded animate-pulse" />
        <div className="mb-12 space-y-4">
          <div className="h-4 w-48 bg-zinc-200 rounded animate-pulse" />
          <div className="h-10 md:h-12 w-full bg-zinc-200 rounded animate-pulse" />
          <div className="h-10 md:h-12 w-3/4 bg-zinc-200 rounded animate-pulse" />
        </div>
        <div className="mb-12 aspect-video w-full bg-zinc-200 rounded-2xl animate-pulse" />
        <div className="space-y-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="h-4 w-full bg-zinc-200 rounded animate-pulse" />
          ))}
        </div>
      </article>
    </div>
  );
}
