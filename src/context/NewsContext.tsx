// "use client";

// import React, { createContext, useContext, useEffect, useState } from "react";

// const API_BASE = "https://newsdata.io/api/1";
// const API_KEY = process.env.NEXT_PUBLIC_NEWSDATA_API_KEY; // ✅ secure key from .env

// // ✅ News Article Type
// interface NewsArticle {
//   title: string;
//   description?: string;
//   link: string;
//   image_url?: string;
//   pubDate?: string;
//   country?: string;
//   language?: string;
//   source_name?: string;
//   source_icon?: string;
//   category?: string[];
// }

// // ✅ Context Type
// interface NewsContextType {
//   newsData: Record<string, NewsArticle[]>;
//   getCategoryNews: (category: string) => NewsArticle[];
//   getTopHeadlines: () => NewsArticle[];
//   loading: boolean;
//   error: string | null;
// }

// const NewsContext = createContext<NewsContextType | null>(null);

// export const NewsProvider = ({ children }: { children: React.ReactNode }) => {
//   const [newsData, setNewsData] = useState<Record<string, NewsArticle[]>>({});
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   // ✅ Define the categories you want to pre-fetch
//   const categories = ["general", "science", "politics", "business", "sports", "technology", "entertainment", "health"];

//   useEffect(() => {
//     const fetchAllNews = async () => {
//       try {
//         const results = await Promise.all(
//           categories.map(async (category) => {
//             const res = await fetch(
//               `${API_BASE}/latest?apikey=${API_KEY}&category=${category}`
//             );
//             if (!res.ok) throw new Error(`Failed to fetch ${category}`);
//             const data = await res.json();
//             return { category, articles: data.results || [] };
//           })
//         );

//         // ✅ Fetch top headlines separately
//         const topHeadlinesRes = await fetch(`${API_BASE}/latest?apikey=${API_KEY}`);
//         const topHeadlinesData = await topHeadlinesRes.json();

//         const formattedData = results.reduce(
//           (acc, { category, articles }) => ({ ...acc, [category]: articles }),
//           { top: topHeadlinesData.results || [] }
//         );

//         setNewsData(formattedData);
//       } catch (err: any) {
//         console.error(err);
//         setError("Failed to fetch news or API limit reached.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchAllNews();
//   }, []);

//   const getCategoryNews = (category: string) => newsData[category] || [];
//   const getTopHeadlines = () => newsData["top"] || [];

//   return (
//     <NewsContext.Provider value={{ newsData, getCategoryNews, getTopHeadlines, loading, error }}>
//       {children}
//     </NewsContext.Provider>
//   );
// };

// export const useNews = () => {
//   const context = useContext(NewsContext);
//   if (!context) throw new Error("useNews must be used within a NewsProvider");
//   return context;
// };




// "use client";

// import React, { createContext, useContext, useState, useEffect } from "react";
// import { fetchGNews } from "@/lib/api/gnews";

// type Article = {
//   title: string;
//   description: string;
//   url: string;
//   image: string;
//   publishedAt: string;
//   source: string;
// };

// interface NewsContextType {
//   allNews: Record<string, Article[]>;
//   getCategoryNews: (category: string) => Article[];
//   refreshAll: () => Promise<void>;
//   loading: boolean;
// }

// const NewsContext = createContext<NewsContextType | undefined>(undefined);

// export const NewsProvider = ({ children }: { children: React.ReactNode }) => {
//   const [allNews, setAllNews] = useState<Record<string, Article[]>>({});
//   const [loading, setLoading] = useState(true);

//   const categories = [
//     "general",
//     "business",
//     "entertainment",
//     "sports",
//     "science",
//     "technology",
//     "health",
//   ];

//   const loadAll = async () => {
//     setLoading(true);

//     // Fetch all categories in parallel but handle partial errors safely
//     const results = await Promise.allSettled(
//       categories.map(async (cat) => {
//         const data = await fetchGNews({
//           endpoint: "top-headlines",
//           category: cat,
//           language: "en",
//           country: "us",
//           max: 10,
//         });
//         return { cat, data };
//       })
//     );

//     // Build results object with successful responses
//     const newsByCategory: Record<string, Article[]> = {};
//     results.forEach((res) => {
//       if (res.status === "fulfilled" && res.value.data?.length > 0) {
//         newsByCategory[res.value.cat] = res.value.data;
//       } else {
//         console.warn("⚠️ Skipped category:", res);
//       }
//     });

//     setAllNews(newsByCategory);
//     setLoading(false);

//     localStorage.setItem(
//       "newsCache",
//       JSON.stringify({
//         data: newsByCategory,
//         timestamp: Date.now(),
//       })
//     );
//   };

//   useEffect(() => {
//     const cached = localStorage.getItem("newsCache");
//     if (cached) {
//       const { data, timestamp } = JSON.parse(cached);
//       const ageInHours = (Date.now() - timestamp) / (1000 * 60 * 60);
//       if (ageInHours < 3) {
//         console.log("✅ Using cached news data");
//         setAllNews(data);
//         console.log("Cached Data:", data);
//         setLoading(false);
//         return;
//       }
//     }

//     loadAll();
//   }, []);

//   const getCategoryNews = (category: string) => {
//     return allNews[category] || [];
//   };

//   return (
//     <NewsContext.Provider
//       value={{
//         allNews,
//         getCategoryNews,
//         refreshAll: loadAll,
//         loading,
//       }}
//     >
//       {children}
//     </NewsContext.Provider>
//   );
// };

// export const useNews = () => {
//   const context = useContext(NewsContext);
//   if (!context) throw new Error("useNews must be used within a NewsProvider");
//   return context;
// };



// // src/context/NewsContext.tsx
// "use client";
// import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";
// import { fetchAllNews } from "@/lib/api/gnews";

// interface NewsArticle {
//   title: string;
//   description?: string;
//   url: string;
//   image_url?: string;
//   publishedAt?: string;
//   source_name?: string;
//   source_icon?: string;
//   country?: string;
//   language?: string;
//   category?: string;
// }

// interface FetchOptions {
//   query?: string;
//   language?: string;
//   country?: string;
//   category?: string;
//   max?: number;
// }


// interface NewsContextType {
//   news: Record<string, NewsArticle[]>;
//   loading: boolean;
//   getCategoryNews: (category: string) => NewsArticle[];
//   refreshNews: () => Promise<void>;
// }

// const NewsContext = createContext<NewsContextType | undefined>(undefined);

// export const NewsProvider = ({ children }: { children: ReactNode }) => {
//   const [news, setNews] = useState<Record<string, NewsArticle[]>>({});
//   const [loading, setLoading] = useState(true);

//   // ✅ Cache key for localStorage
//   const CACHE_KEY = "cached_news_data";

//   const categories = ["general", "business", "entertainment", "science", "sports", "technology"];

//   const fetchAllCategories = async () => {
//     setLoading(true);
//     const newData: Record<string, NewsArticle[]> = {};

//     for (const cat of categories) {
//       const data = await fetchAllNews({ category: cat, country: "in", language: "en" });
//       newData[cat] = data;
//     }

//     setNews(newData);
//     localStorage.setItem(CACHE_KEY, JSON.stringify(newData));
//     setLoading(false);
//   };

//   useEffect(() => {
//     const cached = localStorage.getItem(CACHE_KEY);
//     if (cached) {
//       setNews(JSON.parse(cached));
//       setLoading(false);
//     } else {
//       fetchAllCategories();
//     }
//   }, []);

//   const getCategoryNews = (category: string) => news[category] || [];

//   const refreshNews = async () => {
//     await fetchAllCategories();
//   };

//   return (
//     <NewsContext.Provider value={{ news, loading, getCategoryNews, refreshNews }}>
//       {children}
//     </NewsContext.Provider>
//   );
// };

// // ✅ Custom Hook
// export const useNews = () => {
//   const context = useContext(NewsContext);
//   if (!context) throw new Error("useNews must be used inside NewsProvider");
//   return context;
// };




// Working code for API call:



// "use client";
// import React, { createContext, useContext, useState, ReactNode } from "react";
// import { NewsArticle, FetchOptions } from "@/types";
// import { fetchGNews, fetchNewsData } from "@/lib/api";

// interface NewsContextType {
//   articles: NewsArticle[];
//   loading: boolean;
//   error: string | null;
//   fetchFromGNews: (options: FetchOptions) => Promise<void>;
//   fetchFromNewsData: (options: FetchOptions) => Promise<void>;
// }

// const NewsContext = createContext<NewsContextType | undefined>(undefined);

// export const NewsProvider = ({ children }: { children: ReactNode }) => {
//   const [articles, setArticles] = useState<NewsArticle[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   // ✅ Cache to avoid duplicate hits (memory-based)
//   const cache = new Map<string, NewsArticle[]>();

//   const fetchFromGNews = async (options: FetchOptions) => {
//     const key = JSON.stringify({ api: "gnews", ...options });
//     if (cache.has(key)) {
//       setArticles(cache.get(key)!);
//       return;
//     }

//     try {
//       setLoading(true);
//       const data = await fetchGNews(options);
//       cache.set(key, data);
//       setArticles(data);
//       console.log("Fetched from GNews:", data);
//       setError(null);
//     } catch (err: any) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const fetchFromNewsData = async (options: FetchOptions) => {
//     const key = JSON.stringify({ api: "newsdata", ...options });
//     if (cache.has(key)) {
//       setArticles(cache.get(key)!);
//       return;
//     }

//     try {
//       setLoading(true);
//       const data = await fetchNewsData(options);
//       cache.set(key, data);
//       setArticles(data);
//       console.log("Fetched from NewsData:", data);
//       setError(null);
//     } catch (err: any) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <NewsContext.Provider
//       value={{ articles, loading, error, fetchFromGNews, fetchFromNewsData }}
//     >
//       {children}
//     </NewsContext.Provider>
//   );
// };

// export const useNews = () => {
//   const context = useContext(NewsContext);
//   if (!context) throw new Error("useNews must be used inside a NewsProvider");
//   return context;
// };





// This code for Local file call:

"use client";
import React, { createContext, useContext, useState, ReactNode, useCallback } from "react";
import { NewsArticle, FetchOptions } from "@/types";
import { fetchGNews, fetchNewsData } from "@/lib/api";

interface NewsContextType {
  articlesByCategory: Record<string, NewsArticle[]>; // ✅ category-wise storage
  loading: boolean;
  error: string | null;
  fetchFromGNews: (options: FetchOptions) => Promise<void>;
  fetchFromNewsData: (options: FetchOptions) => Promise<void>;
  fetchFromLocal: (category: string) => Promise<void>; // ✅ new function
}

const NewsContext = createContext<NewsContextType | undefined>(undefined);

export const NewsProvider = ({ children }: { children: ReactNode }) => {
 const [articlesByCategory, setArticlesByCategory] = useState<
    Record<string, NewsArticle[]>
  >({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // ✅ Global cache (for all fetch types)
  const cache = new Map<string, NewsArticle[]>();

  const fetchFromGNews = async (options: FetchOptions) => {
    // const key = JSON.stringify({ api: "gnews", ...options });
    // if (cache.has(key)) {
    //   setArticles(cache.get(key)!);
    //   return;
    // }

    // try {
    //   setLoading(true);
    //   const data = await fetchGNews(options);
    //   cache.set(key, data);
    //   setArticles(data);
    //   setError(null);
    //   console.log("✅ Fetched from GNews:", data);
    // } catch (err: any) {
    //   setError(err.message);
    // } finally {
    //   setLoading(false);
    // }
  };

  const fetchFromNewsData = async (options: FetchOptions) => {
    // const key = JSON.stringify({ api: "newsdata", ...options });
    // if (cache.has(key)) {
    //   setArticles(cache.get(key)!);
    //   return;
    // }

    // try {
    //   setLoading(true);
    //   const data = await fetchNewsData(options);
    //   cache.set(key, data);
    //   setArticles(data);
    //   setError(null);
    //   console.log("✅ Fetched from NewsData:", data);
    // } catch (err: any) {
    //   setError(err.message);
    // } finally {
    //   setLoading(false);
    // }
  };

  // ✅ NEW: Local JSON fetch (for offline or cached news)
const fetchFromLocal = useCallback(async (category: string) => {
  const key = `local_${category}`;

  // ✅ Check cache first
  if (cache.has(key)) {
    setArticlesByCategory((prev) => ({
      ...prev,
      [category]: cache.get(key)!,
    }));
    return;
  }

  try {
    setLoading(true);

    // ✅ Use safe base URL (works both in SSR & browser)
    const baseUrl =
      typeof window !== "undefined" ? window.location.origin : "";
    const res = await fetch(`${baseUrl}/data/${category}.json`);
    console.log(`Fetching local file from: ${baseUrl}/data/${category}.json`);

    if (!res.ok) throw new Error(`Local file not found: ${category}.json`);

    const data = await res.json();
  // ✅ Fixed: articles should be a variable, not a function
    const articles: NewsArticle[] = Array.isArray(data.articles) 
      ? data.articles 
      : Array.isArray(data.results) 
      ? data.results 
      : [];
    
    console.log(`✅ Fetched from local ${category}.json:`, articles);

    // ✅ Cache result
    cache.set(key, articles);

    // ✅ Store category-specific data
    setArticlesByCategory((prev) => ({
      ...prev,
      [category]: articles,
    }));

    setError(null);
  } catch (err: any) {
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
        fetchFromLocal, // ✅ expose it
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
