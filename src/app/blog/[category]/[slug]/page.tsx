import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import BlogPostBody from "@/components/blog/BlogPostBody";
import PostCard from "@/components/blog/PostCard";
import { getAllPosts, getPostBySlug } from "@/lib/wordpress";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL!;
const SITE_NAME = "3옥타브장인 보컬학원";

export const revalidate = 3600;
export const dynamicParams = true;

interface Props {
  params: Promise<{ category: string; slug: string }>;
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    category: post.categories?.nodes[0]?.slug || "uncategorized",
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, category } = await params;
  const decodedSlug = decodeURIComponent(slug);
  const decodedCategory = decodeURIComponent(category);
  const post = await getPostBySlug(decodedSlug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  const description = post.excerpt?.replace(/<[^>]*>/g, "").trim().slice(0, 160);
  const ogImage = post.featuredImage?.node.sourceUrl;
  const url = `/blog/${decodedCategory}/${post.slug}`;

  return {
    title: post.title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: post.title,
      description,
      url,
      siteName: SITE_NAME,
      publishedTime: post.date,
      ...(ogImage && {
        images: [{ url: ogImage, width: 1200, height: 630, alt: post.title }],
      }),
    },
    twitter: {
      card: ogImage ? "summary_large_image" : "summary",
      title: post.title,
      description,
      ...(ogImage && { images: [ogImage] }),
    },
  };
}

function getReadingTime(html: string): number {
  const text = html.replace(/<[^>]*>/g, "");
  const minutes = Math.ceil(text.length / 500);
  return Math.max(1, minutes);
}

export default async function BlogPostPage({ params }: Props) {
  const { slug, category } = await params;
  const decodedSlug = decodeURIComponent(slug);
  const decodedCategory = decodeURIComponent(category);
  const post = await getPostBySlug(decodedSlug);

  if (!post) {
    notFound();
  }

  const readingTime = getReadingTime(post.content || "");
  const categoryName = post.categories?.nodes[0]?.name || "블로그";
  const url = `${SITE_URL}/blog/${decodedCategory}/${post.slug}`;

  const allPosts = await getAllPosts();
  const relatedPosts = allPosts
    .filter(
      (p) =>
        p.slug !== post.slug &&
        p.categories?.nodes.some((cat) => cat.slug === decodedCategory)
    )
    .slice(0, 3);

  const blogPostingLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt?.replace(/<[^>]*>/g, "").trim().slice(0, 160),
    datePublished: post.date,
    dateModified: post.date,
    url,
    ...(post.featuredImage && {
      image: {
        "@type": "ImageObject",
        url: post.featuredImage.node.sourceUrl,
      },
    }),
    author: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "홈", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "블로그", item: `${SITE_URL}/blog` },
      {
        "@type": "ListItem",
        position: 3,
        name: categoryName,
        item: `${SITE_URL}/blog?category=${decodedCategory}`,
      },
      { "@type": "ListItem", position: 4, name: post.title },
    ],
  };

  return (
    <div className="bg-white text-text-on-light">
      <JsonLd data={blogPostingLd} />
      <JsonLd data={breadcrumbLd} />

      <article className="container mx-auto max-w-6xl px-4 py-16 lg:py-20">
        {/* 브레드크럼 */}
        <nav aria-label="breadcrumb" className="mb-8">
          <ol className="flex flex-wrap items-center gap-1.5 text-sm text-zinc-500">
            <li>
              <Link href="/" className="transition-colors hover:text-text-on-light">
                홈
              </Link>
            </li>
            <li aria-hidden="true" className="text-zinc-300">/</li>
            <li>
              <Link href="/blog" className="transition-colors hover:text-text-on-light">
                블로그
              </Link>
            </li>
            <li aria-hidden="true" className="text-zinc-300">/</li>
            <li>
              <Link
                href={`/blog?category=${decodedCategory}`}
                className="transition-colors hover:text-text-on-light"
              >
                {categoryName}
              </Link>
            </li>
            <li aria-hidden="true" className="text-zinc-300">/</li>
            <li className="line-clamp-1 text-text-on-light" aria-current="page">
              {post.title}
            </li>
          </ol>
        </nav>

        {/* 글 헤더 */}
        <header className="mb-12">
          <div className="mb-4 flex flex-wrap items-center gap-3 text-sm text-zinc-500">
            <Link
              href={`/blog?category=${decodedCategory}`}
              className="rounded-full bg-zinc-100 px-3 py-1 font-medium text-text-on-light transition-colors hover:bg-zinc-200"
            >
              {categoryName}
            </Link>
            <span>·</span>
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
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-text-on-light">
            {post.title}
          </h1>
        </header>

        {/* 대표 이미지 */}
        {post.featuredImage && (
          <div className="mb-12 aspect-video w-full overflow-hidden rounded-2xl border border-zinc-100 bg-zinc-100">
            <Image
              src={post.featuredImage.node.sourceUrl}
              alt={post.featuredImage.node.altText || post.title}
              width={1200}
              height={675}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        )}

        {/* 본문 */}
        <BlogPostBody html={post.content || ""} />
      </article>

      {/* 관련 글 */}
      {relatedPosts.length > 0 && (
        <section className="border-t border-zinc-200 bg-zinc-50 py-16">
          <div className="container mx-auto max-w-6xl px-4">
            <h2 className="mb-8 text-2xl font-bold tracking-tight text-text-on-light">
              관련 글
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
              {relatedPosts.map((relatedPost) => (
                <PostCard key={relatedPost.slug} post={relatedPost} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
