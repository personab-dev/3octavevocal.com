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
} from "@/lib/schema";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: { url: "/" },
};

export default function Home() {
  const localBusinessSchemas = getLocalBusinessSchemas();

  return (
    <>
      <JsonLd data={getOrganizationSchema()} />
      <JsonLd data={getWebSiteSchema()} />
      {localBusinessSchemas.map((schema, i) => (
        <JsonLd key={i} data={schema} />
      ))}
      <div className="flex flex-col w-full">
        <HeroSection />
        <PainPointsSection />
        <ProblemSolutionSection />
        <BeforeAfterSection />
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
