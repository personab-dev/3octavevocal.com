import type { Metadata } from "next";
import BlogContent from "@/components/community/BlogContent";
import JsonLd from "@/components/JsonLd";
import { getBreadcrumbSchema } from "@/lib/schema";
import { getAllPosts, getAllCategories } from "@/lib/wordpress";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "블로그",
  description:
    "3옥타브장인 보컬학원 블로그. 발성, 보컬 트레이닝, 수업 소식 등 다양한 콘텐츠를 만나보세요.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "블로그",
    description:
      "3옥타브장인 보컬학원 블로그. 발성, 보컬 트레이닝, 수업 소식 등 다양한 콘텐츠를 만나보세요.",
    url: "/blog",
  },
};

export default async function BlogPage() {
  const [posts, categories] = await Promise.all([
    getAllPosts(),
    getAllCategories(),
  ]);

  return (
    <>
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "홈", path: "/" },
          { name: "블로그", path: "/blog" },
        ])}
      />
      <BlogContent posts={posts} categories={categories} />
    </>
  );
}
