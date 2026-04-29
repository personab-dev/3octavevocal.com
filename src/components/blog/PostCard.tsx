import Link from "next/link";
import Image from "next/image";
import type { BlogPost } from "@/lib/wordpress";

function estimateReadingTime(excerpt: string): number {
  const text = excerpt.replace(/<[^>]*>/g, "");
  const estimatedLength = text.length * 10;
  return Math.max(1, Math.ceil(estimatedLength / 500));
}

export default function PostCard({ post }: { post: BlogPost }) {
  const category = post.categories?.nodes[0];
  const readingTime = estimateReadingTime(post.excerpt || "");
  const href = `/blog/${category?.slug || "uncategorized"}/${post.slug}`;

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-100/80 bg-white shadow-sm transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-accent/30 hover:shadow-[0_20px_40px_-15px_rgba(230,32,77,0.25)]">
      <div className="relative aspect-video w-full overflow-hidden bg-zinc-100">
        {post.featuredImage ? (
          <Image
            src={post.featuredImage.node.sourceUrl}
            alt={post.featuredImage.node.altText || post.title}
            width={800}
            height={450}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-zinc-400 text-sm">
            No Image
          </div>
        )}
        {category && (
          <span className="absolute left-3 top-3 rounded-full bg-black/70 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm">
            {category.name}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5 md:p-6">
        <div className="flex items-center gap-2 text-xs text-zinc-500">
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString("ko-KR", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <span>·</span>
          <span>{readingTime}분 읽기</span>
        </div>
        <h3 className="line-clamp-2 text-lg md:text-xl font-bold leading-snug tracking-tight text-text-on-light transition-colors group-hover:text-accent">
          <Link href={href}>
            <span className="absolute inset-0" aria-hidden="true" />
            {post.title}
          </Link>
        </h3>
        <div
          className="line-clamp-3 text-sm text-text-on-light/60 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: post.excerpt }}
        />
      </div>
    </article>
  );
}
