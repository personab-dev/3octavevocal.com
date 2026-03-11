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
