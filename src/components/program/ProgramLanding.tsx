"use client";

import PageHero from "@/components/PageHero";
import ProgramBeforeAfter from "./ProgramBeforeAfter";
import ProgramFAQ from "./ProgramFAQ";
import FinalCta from "@/components/FinalCta";
import PersonaSection from "./landing/PersonaSection";
import CurriculumSection from "./landing/CurriculumSection";
import ComparisonSection from "./landing/ComparisonSection";
import TimelineSection from "./landing/TimelineSection";
import StatsStrip from "./landing/StatsStrip";
import InstructorSection from "./landing/InstructorSection";

export default function ProgramLanding() {
  return (
    <>
      {/* 1. PageHero */}
      <PageHero
        heading="VOCAL CLASS"
        subheading="Exceed Your Range"
        description="음치, 고음불가 일반인부터 프로 가수까지 모두 동일한 레슨 과정"
      />

      {/* 2. ProgramSubNav */}

      {/* 3. Persona Cards */}
      <PersonaSection />

      {/* 4. 2-Step Curriculum (light) */}
      <CurriculumSection />

      {/* 5. Comparison Table */}
      <ComparisonSection />

      {/* 6. Learning Journey Timeline */}
      <TimelineSection />

      {/* 7. Stats Strip */}
      <StatsStrip />

      {/* 8. Instructor Preview */}
      <InstructorSection />

      {/* 9. Before & After */}
      <ProgramBeforeAfter reviewLabel="어떤 과정이든, 변화는 확실합니다." />

      {/* 10. FAQ */}
      <ProgramFAQ />

      {/* 11. CTA */}
      <FinalCta
        heading="2옥타브에서 멈추실 건가요?"
        description="무료 상담으로 시작하세요"
        buttonText="무료 상담 예약"
      />
    </>
  );
}
