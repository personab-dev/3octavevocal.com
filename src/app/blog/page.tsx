import type { Metadata } from "next";
import BlogContent from "@/components/community/BlogContent";
import JsonLd from "@/components/JsonLd";
import { getBreadcrumbSchema } from "@/lib/schema";

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

export default function BlogPage() {
  return (
    <>
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "홈", path: "/" },
          { name: "블로그", path: "/blog" },
        ])}
      />
      <BlogContent />
    </>
  );
}
