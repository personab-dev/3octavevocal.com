import { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/wordpress";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL!;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: now },
    { url: `${SITE_URL}/basic`, lastModified: now },
    { url: `${SITE_URL}/advanced`, lastModified: now },
    { url: `${SITE_URL}/difference`, lastModified: now },
    { url: `${SITE_URL}/philosophy`, lastModified: now },
    { url: `${SITE_URL}/locations`, lastModified: now },
    { url: `${SITE_URL}/reviews`, lastModified: now },
    { url: `${SITE_URL}/tips`, lastModified: now },
    { url: `${SITE_URL}/blog`, lastModified: now },
    { url: `${SITE_URL}/contact`, lastModified: now },
  ];

  const posts = await getAllPosts();
  const blogEntries: MetadataRoute.Sitemap = posts.map((post) => {
    const category = post.categories?.nodes[0]?.slug || "uncategorized";
    return {
      url: `${SITE_URL}/blog/${category}/${post.slug}`,
      lastModified: post.date ? new Date(post.date) : now,
    };
  });

  return [...staticEntries, ...blogEntries];
}
