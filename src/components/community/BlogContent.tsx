import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import CommunitySubNav from "./CommunitySubNav";
import BlogPostList from "@/components/blog/BlogPostList";
import type { BlogPost, BlogCategory } from "@/lib/wordpress";

interface BlogContentProps {
  posts: BlogPost[];
  categories: BlogCategory[];
}

export default function BlogContent({ posts, categories }: BlogContentProps) {
  return (
    <>
      <PageHero
        heading="COMMUNITY"
        subheading="Real Voice, Real Change"
        backgroundImage="/images/community/hero.png"
      />
      <CommunitySubNav />

      <section className="bg-white py-16 lg:py-18">
        <div className="max-w-5xl mx-auto px-6">
          <SectionHeader
            label="Blog"
            labelStyle="accent"
            heading={<>3옥타브장인<br /><span className="text-accent">블로그</span></>}
            description="발성, 보컬 트레이닝, 수업 소식 등 다양한 인사이트를 만나보세요."
          />
        </div>
      </section>

      <section className="bg-zinc-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <BlogPostList posts={posts} categories={categories} />
        </div>
      </section>
    </>
  );
}
