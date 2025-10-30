"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { fetchGNews } from "@/lib/api/gnews-old";

type Article = {
  title: string;
  description: string;
  url: string;
  image: string;
  publishedAt: string;
  source: string;
};

interface NewsContextType {
  allNews: Record<string, Article[]>;
  getCategoryNews: (category: string) => Article[];
  refreshAll: () => Promise<void>;
  loading: boolean;
}

const NewsContext = createContext<NewsContextType | undefined>(undefined);

export const NewsProvider = ({ children }: { children: React.ReactNode }) => {
  const [allNews, setAllNews] = useState<Record<string, Article[]>>({});
  const [loading, setLoading] = useState(true);

  const categories = [
    "general",
    "business",
    "entertainment",
    "sports",
    "science",
    "technology",
    "health",
  ];

  const loadAll = async () => {
    setLoading(true);

    // Fetch all categories in parallel but handle partial errors safely
    const results = await Promise.allSettled(
      categories.map(async (cat) => {
        const data = await fetchGNews({
          endpoint: "top-headlines",
          category: cat,
          language: "en",
          country: "us",
          max: 10,
        });
        return { cat, data };
      })
    );

    // Build results object with successful responses
    const newsByCategory: Record<string, Article[]> = {};
    results.forEach((res) => {
      if (res.status === "fulfilled" && res.value.data?.length > 0) {
        newsByCategory[res.value.cat] = res.value.data;
      } else {
        console.warn("⚠️ Skipped category:", res);
      }
    });

    setAllNews(newsByCategory);
    setLoading(false);

    localStorage.setItem(
      "newsCache",
      JSON.stringify({
        data: newsByCategory,
        timestamp: Date.now(),
      })
    );
  };

  useEffect(() => {
    const cached = localStorage.getItem("newsCache");
    if (cached) {
      const { data, timestamp } = JSON.parse(cached);
      const ageInHours = (Date.now() - timestamp) / (1000 * 60 * 60);
      if (ageInHours < 3) {
        console.log("✅ Using cached news data");
        setAllNews(data);
        console.log("Cached Data:", data);
        setLoading(false);
        return;
      }
    }

    loadAll();
  }, []);

  const getCategoryNews = (category: string) => {
    return allNews[category] || [];
  };

  return (
    <NewsContext.Provider
      value={{
        allNews,
        getCategoryNews,
        refreshAll: loadAll,
        loading,
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
