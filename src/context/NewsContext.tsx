"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { fetchNews } from "@/lib/api/gnews";

type Article = {
  title: string;
  description: string;
  url: string;
  image: string;
  publishedAt: string;
  source: string;
};

interface AllNews {
  [category: string]: Article[];
}

interface NewsContextType {
  allNews: AllNews;
  getCategoryNews: (category: string) => Article[];
  refreshAllNews: () => Promise<void>;
  loading: boolean;
  error: string | null;
}

const categories = [
  "general",
  "business",
  "sports",
  "technology",
  "entertainment",
  "science",
  "health",
  "world",
];

const CACHE_KEY = "all_news_cache_v2";
const CACHE_TTL = 1000 * 60 * 60; // 1 hour

const NewsContext = createContext<NewsContextType | undefined>(undefined);

export const NewsProvider = ({ children }: { children: React.ReactNode }) => {
  const [allNews, setAllNews] = useState<AllNews>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const delay = (ms: number) => new Promise((r) => setTimeout(r, ms));

  const loadAllNews = async () => {
    try {
      setLoading(true);
      setError(null);

      const cached = localStorage.getItem(CACHE_KEY);
      if (cached) {
        const parsed = JSON.parse(cached);
        const age = Date.now() - parsed.timestamp;

        // ✅ Cache valid for 1 hour
        if (age < CACHE_TTL) {
          setAllNews(parsed.data);
          setLoading(false);
          return;
        }
      }

      const allData: AllNews = {};

      // 🕐 Load categories one by one (prevent rate limit)
      for (const cat of categories) {
        const articles = await fetchNews({
          endpoint: "top-headlines",
          category: cat,
          language: "en",
          country: "in",
          max: 10,
        });
        allData[cat] = articles;

        // 🧩 Small delay (GNews rate limit friendly)
        await delay(1500);
      }

      setAllNews(allData);

      // Save cache
      localStorage.setItem(
        CACHE_KEY,
        JSON.stringify({ data: allData, timestamp: Date.now() })
      );
    } catch (err: any) {
      setError("Failed to fetch news or API limit reached.");
      console.error("News fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadAllNews();
  }, []);

  const getCategoryNews = (category: string): Article[] => {
    return allNews[category] || [];
  };

  return (
    <NewsContext.Provider
      value={{
        allNews,
        getCategoryNews,
        refreshAllNews: loadAllNews,
        loading,
        error,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};

export const useNews = () => {
  const context = useContext(NewsContext);
  if (!context) throw new Error("useNews must be used within a NewsProvider");
  return context;
};
