"use client";

import { Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import PostCard from "./PostCard";
import type { BlogPost, BlogCategory } from "@/lib/wordpress";

interface BlogPostListProps {
  posts: BlogPost[];
  categories: BlogCategory[];
}

function BlogPostListInner({ posts, categories }: BlogPostListProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get("category");

  const setCategory = (slug: string | null) => {
    const params = new URLSearchParams(searchParams.toString());
    if (slug) params.set("category", slug);
    else params.delete("category");
    const qs = params.toString();
    router.replace(qs ? `/blog?${qs}` : "/blog", { scroll: false });
  };

  const filteredPosts = currentCategory
    ? posts.filter((post) =>
        post.categories?.nodes.some((cat) => cat.slug === currentCategory)
      )
    : posts;

  const chipBase =
    "rounded-full px-4 py-1.5 text-sm font-bold transition-all duration-300 cursor-pointer";

  return (
    <>
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        <button
          type="button"
          onClick={() => setCategory(null)}
          className={cn(
            chipBase,
            !currentCategory
              ? "bg-accent text-white"
              : "bg-white border border-zinc-200 text-text-on-light hover:border-accent/40 hover:text-accent"
          )}
        >
          전체
        </button>
        {categories.map((category) => {
          const isActive = currentCategory === category.slug;
          return (
            <button
              type="button"
              key={category.slug}
              onClick={() => setCategory(category.slug)}
              className={cn(
                chipBase,
                isActive
                  ? "bg-accent text-white"
                  : "bg-white border border-zinc-200 text-text-on-light hover:border-accent/40 hover:text-accent"
              )}
            >
              {category.name}
            </button>
          );
        })}
      </div>

      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {filteredPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className="flex h-64 items-center justify-center text-center text-text-on-light/50">
          해당 카테고리에 등록된 게시글이 없습니다.
        </div>
      )}
    </>
  );
}

export default function BlogPostList(props: BlogPostListProps) {
  return (
    <Suspense fallback={null}>
      <BlogPostListInner {...props} />
    </Suspense>
  );
}
