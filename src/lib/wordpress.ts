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
