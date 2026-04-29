import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import CommunitySubNav from "./CommunitySubNav";

export default function BlogContent() {
  return (
    <>
      <PageHero
        heading="COMMUNITY"
        subheading="Real Voice, Real Change"
        backgroundImage="/images/community/hero.png"
      />
      <CommunitySubNav />

      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-6">
          <SectionHeader
            label="Blog"
            labelStyle="accent"
            heading={<>3옥타브장인<br /><span className="text-accent">블로그</span></>}
            description="곧 새로운 콘텐츠로 찾아뵙겠습니다."
          />
        </div>
      </section>
    </>
  );
}
