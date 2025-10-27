const API_BASE = "https://gnews.io/api/v4";


interface FetchOptions {
  endpoint?: string;
  query?: string;
  language?: string;
  country?: string;
  category?: string;
  max?: number;
}

export const fetchNews = async (options: FetchOptions = {}) => {
  const {
    endpoint = "top-headlines",
    query,
    language = "en",
    country = "in",
    category = "general",
    max = 10,
  } = options;

  const params = new URLSearchParams({
    ...(query ? { q: query } : {}),
    lang: language,
    country,
    category,
    max: String(max),
    apikey: process.env.NEXT_PUBLIC_GNEWS_API_KEY!, // ✅ Use env variable
  });

  const url = `${API_BASE}/${endpoint}?${params.toString()}`;

  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch news: ${res.statusText}`);

  const data = await res.json();
  return data.articles || [];
};
