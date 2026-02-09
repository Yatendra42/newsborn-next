"use client";
import React, { createContext, useContext, useState, ReactNode, useCallback } from "react";
import { NewsArticle, FetchOptions } from "@/types";
import { fetchGNews, fetchNewsData } from "@/lib/api";

interface NewsContextType {
  articlesByCategory: Record<string, NewsArticle[]>;
  loading: boolean;
  error: string | null;
  fetchFromGNews: (options: FetchOptions) => Promise<void>;
  fetchFromNewsData: (options: FetchOptions) => Promise<void>;
  fetchFromLocal: (category: string) => Promise<void>;
}

const NewsContext = createContext<NewsContextType | undefined>(undefined);

export const NewsProvider = ({ children }: { children: ReactNode }) => {
  const [articlesByCategory, setArticlesByCategory] = useState<
    Record<string, NewsArticle[]>
  >({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Global cache (for all fetch types)
  const cache = new Map<string, NewsArticle[]>();

  const fetchFromGNews = useCallback(async (options: FetchOptions) => {
    const category = options.category || "general";
    const key = JSON.stringify({ api: "gnews", ...options });

    if (cache.has(key)) {
      setArticlesByCategory((prev) => ({
        ...prev,
        [category]: cache.get(key)!,
      }));
      return;
    }

    try {
      setLoading(true);
      const data = await fetchGNews(options);
      cache.set(key, data);
      setArticlesByCategory((prev) => ({
        ...prev,
        [category]: data,
      }));
      setError(null);
      console.log("✅ Fetched from GNews:", data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchFromNewsData = useCallback(async (options: FetchOptions) => {
    const category = options.category || "general";
    const key = JSON.stringify({ api: "newsdata", ...options });

    if (cache.has(key)) {
      setArticlesByCategory((prev) => ({
        ...prev,
        [category]: cache.get(key)!,
      }));
      return;
    }

    try {
      setLoading(true);
      const data = await fetchNewsData(options);
      cache.set(key, data);
      setArticlesByCategory((prev) => ({
        ...prev,
        [category]: data,
      }));
      setError(null);
      console.log("✅ Fetched from NewsData:", data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  // fetchFromLocal uses real GNews API
  const fetchFromLocal = useCallback(async (category: string) => {
    const key = `api_${category}`;

    if (cache.has(key)) {
      setArticlesByCategory((prev) => ({
        ...prev,
        [category]: cache.get(key)!,
      }));
      return;
    }

    try {
      setLoading(true);

      const data = await fetchGNews({
        category: category === "topHeadlines" ? "general" : category,
        language: "en",
        country: "us",
        max: 10,
      });

      console.log(`✅ Fetched from GNews API for ${category}:`, data);

      cache.set(key, data);

      setArticlesByCategory((prev) => ({
        ...prev,
        [category]: data,
      }));

      setError(null);
    } catch (err: any) {
      console.error(`❌ Failed to fetch ${category}:`, err.message);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <NewsContext.Provider
      value={{
        articlesByCategory,
        loading,
        error,
        fetchFromGNews,
        fetchFromNewsData,
        fetchFromLocal,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};

export const useNews = () => {
  const context = useContext(NewsContext);
  if (!context) throw new Error("useNews must be used inside NewsProvider");
  return context;
};
