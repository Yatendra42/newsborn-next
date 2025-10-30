import { FetchOptions, NewsArticle } from "@/types";


const GNEWS_API_BASE = "https://gnews.io/api/v4";
const NEWSDATA_API_BASE = "https://newsdata.io/api/1";


// ✅ GNews API
async function fetchFromGNews(options: FetchOptions): Promise<NewsArticle[]> {
  const {
    query,
    language = "en",
    country = "in",
    category = "general",
    max = 10,
  } = options;

  const params = new URLSearchParams({
    // ...(query ? { q: query } : {}),
    lang: language,
    country,
    category,
    max: String(max),
    apikey: process.env.NEXT_PUBLIC_GNEWS_API_KEY!,
  });

  const res = await fetch(`${GNEWS_API_BASE}/top-headlines?${params}`);
  if (!res.ok) throw new Error(`GNews API failed`);
  const data = await res.json();

  return (data.articles || []).map((a: any) => ({
    title: a.title,
    description: a.description,
    url: a.url,
    image_url: a.image,
    publishedAt: a.publishedAt,
    source_name: a.source?.name,
    source_icon: a.source?.icon,
    country,
    language,
    category,
  }));
}

// https://newsdata.io/api/1/latest?apikey=pub_80203a17c032b6f8f744a4fd225fee10a42a1&category=science [category]

// ✅ NewsData.io API
async function fetchFromNewsData(options: FetchOptions): Promise<NewsArticle[]> {
  const {
    query,
    language = "en",
    country = "in",
    category = "general",
    max = 10,
  } = options;

  const params = new URLSearchParams({
    // ...(query ? { q: query } : {}),
    language,
    country,
    category,
    size: String(max),
    apikey: process.env.NEXT_PUBLIC_NEWSDATA_API_KEY!,
  });

  const res = await fetch(`${NEWSDATA_API_BASE}/latest?${params}`);
  if (!res.ok) throw new Error(`NewsData.io API failed`);
  const data = await res.json();

  return (data.results || []).map((a: any) => ({
    title: a.title,
    description: a.description,
    url: a.link,
    image_url: a.image_url,
    publishedAt: a.pubDate,
    source_name: a.source_name,
    source_icon: a.source_icon,
    country: a.country,
    language: a.language,
    category,
  }));
}

// ✅ Master function – easily extendable
export async function fetchAllNews(options: FetchOptions = {}): Promise<NewsArticle[]> {
  const [gnews, newsdata] = await Promise.allSettled([
    fetchFromGNews(options),
    fetchFromNewsData(options),
  ]);

  return [
    ...(gnews.status === "fulfilled" ? gnews.value : []),
    ...(newsdata.status === "fulfilled" ? newsdata.value : []),
  ];
}
