export interface NavChild {
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
}

export const navItems: NavItem[] = [
  {
    label: "ABOUT",
    href: "/philosophy",
    children: [
      { label: "대표 철학", href: "/philosophy" },
      { label: "차별점", href: "/difference" },
      { label: "지점 찾기", href: "/locations" },
    ],
  },
  {
    label: "VOCAL CLASS",
    href: "/basic",
    children: [
      { label: "기본 교육과정", href: "/basic" },
      { label: "심화 교육과정", href: "/advanced" },
    ],
  },
  {
    label: "COMMUNITY",
    href: "/reviews",
    children: [
      { label: "수강생 후기", href: "/reviews" },
      { label: "발성 꿀팁", href: "/tips" },
    ],
  },
  {
    label: "CONTACT",
    href: "/contact",
  },
];
