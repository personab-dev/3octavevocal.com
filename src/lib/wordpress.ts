import { extractYouTubeId } from "./videos";

const API_URL = process.env.WORDPRESS_API_URL!;

export async function fetchGraphQL<T>(query: string): Promise<T> {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query }),
    next: { revalidate: 60 },
  });

  const json = await res.json();

  if (json.errors) {
    throw new Error(json.errors[0].message);
  }

  return json.data;
}

interface Review {
  title: string;
  menuOrder: number | null;
  reviewFields: {
    externalUrl: string;
    isHighlight: boolean | null;
  };
}

interface ReviewsResponse {
  reviews: {
    nodes: Review[];
  };
}

// ── Before & After ──

interface BeforeAfterNode {
  title: string;
  menuOrder: number | null;
  youtubeUrl: {
    youtubeUrl: string;
  };
}

interface BeforeAftersResponse {
  beforeAfters: {
    nodes: BeforeAfterNode[];
  };
}

export async function getBeforeAfters() {
  const data = await fetchGraphQL<BeforeAftersResponse>(`
    {
      beforeAfters(first: 50, where: { orderby: { field: MENU_ORDER, order: ASC } }) {
        nodes {
          title
          menuOrder
          youtubeUrl {
            youtubeUrl
          }
        }
      }
    }
  `);

  return data.beforeAfters.nodes.map((node) => {
    const url = node.youtubeUrl.youtubeUrl;
    const id = extractYouTubeId(url);
    return {
      id: id ?? "",
      title: node.title,
      url,
      thumbnail: `https://img.youtube.com/vi/${id}/oar2.jpg`,
    };
  });
}

// ── Consultation Type Settings ──

export interface ConsultationType {
  value: string;
  label: string;
  description: string;
}

export interface ConsultationSettings {
  visibility: "free_only" | "paid_only" | "both";
  types: ConsultationType[];
  footnote: string;
}

interface ConsultationSettingsResponse {
  consultationSettings: {
    visibility: string;
    freeLabel: string;
    freeDescription: string;
    paidLabel: string;
    paidDescription: string;
    footnote: string;
  };
}

const DEFAULT_SETTINGS: ConsultationSettings = {
  visibility: "both",
  types: [
    {
      value: "general",
      label: "[무료] 일반 상담",
      description: "내 상태 확인, 수강료, 커리큘럼, 등록 절차 등 빠른 안내",
    },
    {
      value: "deep",
      label: "[유료] 심층 보컬 진단 & 솔루션",
      description:
        "내 발성의 문제점을 심도있게 진단, 맞춤 솔루션 제공 / 진단지 및 연습파일&녹음파일 등 제공",
    },
  ],
  footnote: "* 심층 진단&솔루션 비용은 정규과정 당일 등록 시 전액 할인됩니다.",
};

export async function getConsultationSettings(): Promise<ConsultationSettings> {
  try {
    const data = await fetchGraphQL<ConsultationSettingsResponse>(`
      {
        consultationSettings {
          visibility
          freeLabel
          freeDescription
          paidLabel
          paidDescription
          footnote
        }
      }
    `);

    const s = data.consultationSettings;
    const visibility = (["free_only", "paid_only", "both"].includes(s.visibility)
      ? s.visibility
      : "both") as ConsultationSettings["visibility"];

    const allTypes: ConsultationType[] = [
      {
        value: "general",
        label: s.freeLabel || DEFAULT_SETTINGS.types[0].label,
        description: s.freeDescription || DEFAULT_SETTINGS.types[0].description,
      },
      {
        value: "deep",
        label: s.paidLabel || DEFAULT_SETTINGS.types[1].label,
        description: s.paidDescription || DEFAULT_SETTINGS.types[1].description,
      },
    ];

    const filtered =
      visibility === "free_only"
        ? allTypes.filter((t) => t.value === "general")
        : visibility === "paid_only"
          ? allTypes.filter((t) => t.value === "deep")
          : allTypes;

    return {
      visibility,
      types: filtered,
      footnote: s.footnote ?? DEFAULT_SETTINGS.footnote,
    };
  } catch {
    return DEFAULT_SETTINGS;
  }
}

// ── Reviews Page Settings ──

interface ReviewsPageSettingsResponse {
  reviewsPageSettings: {
    description: string;
  };
}

export async function getReviewsPageDescription(): Promise<string> {
  const fallback = "8,000명 이상의 수강생을 배출한 3옥타브장인 보컬학원의 생생한 레슨 현장과 후기를 소개합니다.";
  try {
    const data = await fetchGraphQL<ReviewsPageSettingsResponse>(`
      {
        reviewsPageSettings {
          description
        }
      }
    `);
    return data.reviewsPageSettings.description || fallback;
  } catch {
    return fallback;
  }
}

// ── Reviews ──

export async function getReviews() {
  const data = await fetchGraphQL<ReviewsResponse>(`
    {
      reviews(first: 50, where: { orderby: { field: MENU_ORDER, order: ASC } }) {
        nodes {
          title
          menuOrder
          reviewFields {
            externalUrl
            isHighlight
          }
        }
      }
    }
  `);

  return data.reviews.nodes;
}
