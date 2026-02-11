import type { Metadata } from "next";
import ReviewsContent from "@/components/community/ReviewsContent";

export const metadata: Metadata = {
  title: "수강생 후기",
  description:
    "7,000명 이상의 수강생이 검증한 3옥타브장인 보컬학원. 생생한 레슨 현장과 수강 후기를 확인하세요.",
};

export default function ReviewsPage() {
  return <ReviewsContent />;
}
