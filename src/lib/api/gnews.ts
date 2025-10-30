// src/lib/api/gnews.ts
import { FetchOptions, NewsArticle } from "@/types";

const API_BASE = "https://gnews.io/api/v4";

export async function fetchGNews(options: FetchOptions = {}): Promise<NewsArticle[]> {
  const {
    endpoint = "top-headlines",
    query,
    language = "en",
    country = "in",
    category = "general",
    max = 10,
  } = options;

  const params = new URLSearchParams({
    //...(query ? { q: query } : {}),
    lang: language,
    country,
    category,
    max: String(max),
    apikey: process.env.NEXT_PUBLIC_GNEWS_API_KEY!,
  });

  const res = await fetch(`${API_BASE}/${endpoint}?${params.toString()}`);
  if (!res.ok) throw new Error(`GNews failed: ${res.statusText}`);
  const data = await res.json();

  return (data.articles || []).map((a: any) => ({
    title: a.title,
    description: a.description,
    url: a.url,
    image: a.image || a.urlToImage || "",
    publishedAt: a.publishedAt,
    source_name: a.source?.name,
    source_icon: a.source?.icon,
    country,
    language,
    category,
  }));
}
