import type { Metadata } from "next";
import LocationsContent from "@/components/about/LocationsContent";
import JsonLd from "@/components/JsonLd";
import { getBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "강남·부평·서면 지점 안내",
  description:
    "서울 강남, 인천 부평, 부산 서면. 가까운 3옥타브장인 보컬학원 지점을 찾아보세요.",
  alternates: { canonical: "/locations" },
  openGraph: {
    title: "강남·부평·서면 지점 안내",
    description:
      "서울 강남, 인천 부평, 부산 서면. 가까운 3옥타브장인 보컬학원 지점을 찾아보세요.",
    url: "/locations",
  },
};

export default function LocationsPage() {
  return (
    <>
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "홈", url: "https://3octavevocal.com" },
          { name: "지점 안내", url: "https://3octavevocal.com/locations" },
        ])}
      />
      <LocationsContent />
    </>
  );
}
