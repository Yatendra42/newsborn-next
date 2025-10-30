// src/lib/api/newsdata.ts
import { FetchOptions, NewsArticle } from "@/types";

const API_BASE = "https://newsdata.io/api/1";

export async function fetchNewsData(options: FetchOptions = {}): Promise<NewsArticle[]> {
  const {
    endpoint = "latest",
    query,
    language = "en",
    country = "in",
    category = "general",
    max = 10,
  } = options;

  const params = new URLSearchParams({
    ...(query ? { q: query } : {}),
    language,
    country,
    category,
    size: String(max),
    apikey: process.env.NEXT_PUBLIC_NEWSDATA_API_KEY!,
  });

  const res = await fetch(`${API_BASE}/${endpoint}?${params.toString()}`);
  if (!res.ok) throw new Error(`NewsData API failed: ${res.statusText}`);
  const data = await res.json();

  return (data.results || []).map((a: any) => ({
    title: a.title,
    description: a.description,
    url: a.link,
    image: a.image_url,
    publishedAt: a.pubDate,
    source_name: a.source_name,
    source_icon: a.source_icon,
    country: a.country,
    language: a.language,
    category,
  }));
}
