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

interface NewsContextType {
  articles: Article[];
  refreshNews: () => Promise<void>;
}

const NewsContext = createContext<NewsContextType | undefined>(undefined);

export const NewsProvider = ({ children }: { children: React.ReactNode }) => {
  const [articles, setArticles] = useState<Article[]>([]);

  const loadNews = async () => {
    const data = await fetchNews("general");
    setArticles(data);
  };

  useEffect(() => {
    loadNews();
  }, []);

  return (
    <NewsContext.Provider value={{ articles, refreshNews: loadNews }}>
      {children}
    </NewsContext.Provider>
  );
};

export const useNews = () => {
  const context = useContext(NewsContext);
  if (!context) throw new Error("useNews must be used within a NewsProvider");
  return context;
};
