"use client";

import PageHero from "@/components/PageHero";
import ProgramSubNav from "./ProgramSubNav";
import HookSection from "./basic/HookSection";
import ApproachSection from "./basic/ApproachSection";
import CompareSection from "./basic/CompareSection";
import CurriculumSection from "./basic/CurriculumSection";
import InstructorSection from "./basic/InstructorSection";
import ChecklistSection from "./basic/ChecklistSection";
import ProgramBeforeAfter from "./ProgramBeforeAfter";
import ProgramFAQ from "./ProgramFAQ";
import FinalCta from "@/components/FinalCta";

/* ── Component ────────────────────────────────────── */

export default function BasicProgramContent() {
  return (
    <>
      {/* ── 1. PageHero ──────────────────────────── */}
      <PageHero
        heading="기본 교육과정"
        subheading="Basic Vocal Training"
        description="발성의 기본 — 호흡, 위치, 피치를 체계적으로 배우는 기초 보컬 트레이닝"
        backgroundImage="/images/program/hero.png"
      />

      {/* ── 2. ProgramSubNav ─────────────────────── */}
      <ProgramSubNav />

      {/* ── 3. Hook Section ──────────────────────── */}
      <HookSection />

      {/* ── 4. Curriculum Approach ────────────────── */}
      <ApproachSection />

      {/* ── 5. Before / After Comparison ──────────── */}
      <CompareSection />

      {/* ── 6. Curriculum Details ─────────────────── */}
      <CurriculumSection />

      {/* ── 7. Instructors ────────────────────────── */}
      <InstructorSection />

      {/* ── 8. Checklist ──────────────────────────── */}
      <ChecklistSection />

      {/* ── 9. ProgramBeforeAfter (영상 후기) ──── */}
      <ProgramBeforeAfter reviewLabel="기본 과정을 이수한 후기가 궁금하신가요?" />

      {/* ── 10. ProgramFAQ ────────────────────────── */}
      <ProgramFAQ />

      {/* ── 11. Final CTA ─────────────────────────── */}
      <FinalCta
        heading="2옥타브에서 멈추실 건가요?"
        description="3옥타브를 뚫은 사람들이 선택한 가장 확실한 방법, 직접 경험해보세요."
      />
    </>
  );
}
