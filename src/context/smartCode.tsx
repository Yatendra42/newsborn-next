"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";
import { NewsArticle, FetchOptions } from "@/types";
import { fetchGNews, fetchNewsData } from "@/lib/api";

interface NewsContextType {
  articles: NewsArticle[];
  loading: boolean;
  error: string | null;
  fetchFromGNews: (options: FetchOptions) => Promise<void>;
  fetchFromNewsData: (options: FetchOptions) => Promise<void>;
  fetchFromLocal: (category: string) => Promise<void>;
  fetchSmart: (options: FetchOptions) => Promise<void>; // ✅ intelligent loader
}

const NewsContext = createContext<NewsContextType | undefined>(undefined);

export const NewsProvider = ({ children }: { children: ReactNode }) => {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // ✅ Persistent cache across all calls
  const cache = new Map<string, NewsArticle[]>();

  // ------------------------
  // Fetch from Local JSON
  // ------------------------
  const fetchFromLocal = async (category: string) => {
    const key = `local_${category}`;
    if (cache.has(key)) {
      setArticles(cache.get(key)!);
      return;
    }

    try {
      setLoading(true);
      const res = await fetch(`/data/${category}.json`);
      if (!res.ok) throw new Error(`Local file not found: ${category}.json`);

      const data = await res.json();
      cache.set(key, data);
      setArticles(data);
      setError(null);
      console.log("✅ Loaded from local JSON:", category);
    } catch (err: any) {
      setError(err.message);
      throw err; // important for fallback chain
    } finally {
      setLoading(false);
    }
  };

  // ------------------------
  // Fetch from NewsData.io
  // ------------------------
  const fetchFromNewsData = async (options: FetchOptions) => {
    const key = JSON.stringify({ api: "newsdata", ...options });
    if (cache.has(key)) {
      setArticles(cache.get(key)!);
      return;
    }

    try {
      setLoading(true);
      const data = await fetchNewsData(options);
      cache.set(key, data);
      setArticles(data);
      setError(null);
      console.log("✅ Fetched from NewsData.io:", options);
    } catch (err: any) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // ------------------------
  // Fetch from GNews.io
  // ------------------------
  const fetchFromGNews = async (options: FetchOptions) => {
    const key = JSON.stringify({ api: "gnews", ...options });
    if (cache.has(key)) {
      setArticles(cache.get(key)!);
      return;
    }

    try {
      setLoading(true);
      const data = await fetchGNews(options);
      cache.set(key, data);
      setArticles(data);
      setError(null);
      console.log("✅ Fetched from GNews.io:", options);
    } catch (err: any) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // ------------------------
  // Smart Fetch (Local → NewsData → GNews)
  // ------------------------
  const fetchSmart = async (options: FetchOptions) => {
    const category = options.category || "general";
    const key = JSON.stringify({ api: "smart", ...options });

    if (cache.has(key)) {
      setArticles(cache.get(key)!);
      return;
    }

    try {
      setLoading(true);

      // ✅ 1️⃣ Try Local JSON
      try {
        await fetchFromLocal(category);
        console.log(`✅ Using cached local data for ${category}`);
        cache.set(key, cache.get(`local_${category}`)!);
        return;
      } catch {
        console.log(`⚠️ No local file for ${category}, fallback to API...`);
      }

      // ✅ 2️⃣ Try NewsData.io API
      try {
        await fetchFromNewsData(options);
        cache.set(key, cache.get(JSON.stringify({ api: "newsdata", ...options }))!);
        return;
      } catch {
        console.log("⚠️ NewsData API failed, fallback to GNews...");
      }

      // ✅ 3️⃣ Try GNews API
      await fetchFromGNews(options);
      cache.set(key, cache.get(JSON.stringify({ api: "gnews", ...options }))!);
    } catch (err: any) {
      setError("Failed to load news from all sources.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <NewsContext.Provider
      value={{
        articles,
        loading,
        error,
        fetchFromGNews,
        fetchFromNewsData,
        fetchFromLocal,
        fetchSmart, // ✅ expose smart fetch
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
