import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import PainPointsSection from "@/components/home/PainPointsSection";
import ProblemSolutionSection from "@/components/home/ProblemSolutionSection";
import BeforeAfterSection from "@/components/home/BeforeAfterSection";
import OctavePromiseSection from "@/components/home/OctavePromiseSection";
import ProCurriculumSection from "@/components/home/ProCurriculumSection";
import StatsSection from "@/components/home/StatsSection";
import DifferentiatorsSection from "@/components/home/DifferentiatorsSection";
import GrowthSystemSection from "@/components/home/GrowthSystemSection";
import CourseCardsSection from "@/components/home/CourseCardsSection";
import TrustCtaSection from "@/components/home/TrustCtaSection";
import LocationsSection from "@/components/home/LocationsSection";
import FloatingSidebar from "@/components/FloatingSidebar";
import JsonLd from "@/components/JsonLd";
import {
  getOrganizationSchema,
  getWebSiteSchema,
  getLocalBusinessSchemas,
  getVideoObjectSchemas,
  getBreadcrumbSchema,
} from "@/lib/schema";
import { getBeforeAfters } from "@/lib/wordpress";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: {
    url: "/",
    title: "3옥타브장인 보컬학원, No.1 강남보컬학원",
    description:
      "10년간 8,000명 이상의 수강생, 연예인들이 증명한, 강남 No.1 3옥타브장인 보컬학원 입니다.",
  },
};

export default async function Home() {
  const beforeAfterVideos = await getBeforeAfters();
  const localBusinessSchemas = getLocalBusinessSchemas();

  return (
    <>
      <JsonLd data={getOrganizationSchema()} />
      <JsonLd data={getWebSiteSchema()} />
      <JsonLd data={getBreadcrumbSchema([{ name: "홈", path: "/" }])} />
      {localBusinessSchemas.map((schema, i) => (
        <JsonLd key={i} data={schema} />
      ))}
      {getVideoObjectSchemas(beforeAfterVideos).map((schema, i) => (
        <JsonLd key={`video-${i}`} data={schema} />
      ))}
      <div className="flex flex-col w-full">
        <HeroSection />
        <PainPointsSection />
        <ProblemSolutionSection />
        <BeforeAfterSection videos={beforeAfterVideos} />
        <OctavePromiseSection />
        <ProCurriculumSection />
        <StatsSection />
        <DifferentiatorsSection />
        <GrowthSystemSection />
        <CourseCardsSection />
        <TrustCtaSection />
        <LocationsSection />
      </div>
      <FloatingSidebar />
    </>
  );
}
