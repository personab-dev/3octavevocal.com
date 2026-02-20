import { MetadataRoute } from "next";

const SITE_URL = "https://3octavevocal.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, lastModified: new Date() },
    { url: `${SITE_URL}/basic`, lastModified: new Date() },
    { url: `${SITE_URL}/advanced`, lastModified: new Date() },
    { url: `${SITE_URL}/difference`, lastModified: new Date() },
    { url: `${SITE_URL}/philosophy`, lastModified: new Date() },
    { url: `${SITE_URL}/locations`, lastModified: new Date() },
    { url: `${SITE_URL}/reviews`, lastModified: new Date() },
    { url: `${SITE_URL}/tips`, lastModified: new Date() },
    { url: `${SITE_URL}/contact`, lastModified: new Date() },
  ];
}
