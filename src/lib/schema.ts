const SITE_URL = "https://3octavevocal.com";
const SITE_NAME = "3옥타브장인 보컬학원";

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/images/og-image.png`,
    sameAs: [
      "https://blog.naver.com/3octave1",
      "https://www.youtube.com/channel/UCp1xHspGwp6EhZwalQmI8Iw",
      "https://www.instagram.com/3octave_official/",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "0507-1406-2849",
      contactType: "customer service",
      areaServed: "KR",
      availableLanguage: "Korean",
    },
  };
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
  };
}

export function getLocalBusinessSchemas() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#seoul`,
      name: "3옥타브장인 보컬학원 서울점",
      image: `${SITE_URL}/images/og-image.png`,
      telephone: "0507-1406-2849",
      address: {
        "@type": "PostalAddress",
        streetAddress: "서초대로78길 36, 강남지웰타워 5층",
        addressLocality: "서초구",
        addressRegion: "서울",
        addressCountry: "KR",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Friday"],
          opens: "13:00",
          closes: "22:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Saturday", "Sunday"],
          opens: "12:00",
          closes: "19:00",
        },
      ],
      url: SITE_URL,
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#incheon`,
      name: "3옥타브장인 보컬학원 인천점",
      image: `${SITE_URL}/images/og-image.png`,
      telephone: "0507-1319-1769",
      address: {
        "@type": "PostalAddress",
        streetAddress: "경원대로 1414, 2층",
        addressLocality: "부평구",
        addressRegion: "인천",
        addressCountry: "KR",
      },
      url: SITE_URL,
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#busan`,
      name: "3옥타브장인 보컬학원 부산점",
      image: `${SITE_URL}/images/og-image.png`,
      telephone: "0507-1351-9158",
      address: {
        "@type": "PostalAddress",
        streetAddress: "서전로17, 3층",
        addressLocality: "부산진구",
        addressRegion: "부산",
        addressCountry: "KR",
      },
      url: SITE_URL,
    },
  ];
}

export function getBreadcrumbSchema(
  items: { name: string; url: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
