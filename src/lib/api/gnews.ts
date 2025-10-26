// lib/newsApi.ts

export interface NewsArticle {
  title: string;
  description: string;
  url: string;
  image: string;
  publishedAt: string;
  source: string;
}

interface FetchNewsOptions {
  endpoint?: "search" | "top-headlines";
  query?: string;
  category?: string;
  language?: string;
  country?: string;
  max?: number;
}

/**
 * Universal GNews Fetcher
 * Example usage:
 * fetchNews({ endpoint: "top-headlines", category: "general", language: "hi", country: "in" })
 */
export async function fetchNews(options: FetchNewsOptions = {}) {
  const {
    endpoint = "search",
    query = "Google",
    category = "general",
    language = "en",
    country = "us",
    max = 10,
  } = options;

  const apiKey = process.env.NEXT_PUBLIC_GNEWS_API_KEY;

  // ✅ Construct API URL dynamically
  let url = `https://gnews.io/api/v4/${endpoint}?`;

  if (endpoint === "search") {
    url += `q=${encodeURIComponent(query)}&`;
  }

  if (endpoint === "top-headlines") {
    url += `category=${category}&country=${country}&`;
  }

  url += `lang=${language}&max=${max}&apikey=${apiKey}`;

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Failed to fetch news: ${res.status}`);

    const data = await res.json();

    if (!data.articles) {
      console.warn("No articles found for:", url);
      return [];
    }

    // 🧹 Extract relevant fields
    const articles: NewsArticle[] = data.articles.map((item: any) => ({
      title: item.title,
      description: item.description,
      url: item.url,
      image: item.image,
      publishedAt: item.publishedAt,
      source: item.source?.name ?? "Unknown",
    }));

    console.log(`Loaded ${articles.length} articles from ${endpoint}`);
    return articles;
  } catch (err) {
    console.error("Error fetching news:", err);
    return [];
  }
}
