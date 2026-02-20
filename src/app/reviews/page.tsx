import type { Metadata } from "next";
import ReviewsContent from "@/components/community/ReviewsContent";
import JsonLd from "@/components/JsonLd";
import { getBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "수강생 후기 & 레슨 현장",
  description:
    "7,000명 이상의 수강생이 검증한 3옥타브장인 보컬학원. 생생한 레슨 현장과 수강 후기를 확인하세요.",
  alternates: { canonical: "/reviews" },
  openGraph: {
    title: "수강생 후기 & 레슨 현장",
    description:
      "7,000명 이상의 수강생이 검증한 3옥타브장인 보컬학원. 생생한 레슨 현장과 수강 후기를 확인하세요.",
    url: "/reviews",
  },
};

export default function ReviewsPage() {
  return (
    <>
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "홈", url: "https://3octavevocal.com" },
          { name: "수강생 후기", url: "https://3octavevocal.com/reviews" },
        ])}
      />
      <ReviewsContent />
    </>
  );
}
