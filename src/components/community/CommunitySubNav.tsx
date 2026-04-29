import SubNav from "@/components/SubNav";

const tabs = [
  { label: "수강생 후기", href: "/reviews" },
  { label: "발성 꿀팁", href: "/tips" },
  { label: "블로그", href: "/blog" },
];

export default function CommunitySubNav() {
  return <SubNav tabs={tabs} />;
}
