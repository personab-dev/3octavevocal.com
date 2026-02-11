import type { Metadata } from "next";
import LocationsContent from "@/components/about/LocationsContent";

export const metadata: Metadata = {
  title: "지점 찾기",
  description:
    "서울 강남, 인천 부평, 부산 서면. 가까운 3옥타브장인 보컬학원 지점을 찾아보세요.",
};

export default function LocationsPage() {
  return <LocationsContent />;
}
