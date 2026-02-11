import type { Metadata } from "next";
import CommunityLanding from "@/components/community/CommunityLanding";

export const metadata: Metadata = {
  title: "커뮤니티",
  description:
    "수강생 후기와 발성 꿀팁. 3옥타브장인 보컬학원의 교육 효과를 직접 확인하세요.",
};

export default function CommunityPage() {
  return <CommunityLanding />;
}
