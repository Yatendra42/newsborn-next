"use client";

import ShortNewsCard from '@/components/shortNewsCard/ShortNewsCard'
import Link from 'next/link'
import React, { useEffect } from 'react'

import { useNews } from "@/context/NewsContext";

function MarketNews() {
  const { articlesByCategory, fetchFromLocal, loading, error } = useNews();

  useEffect(() => {
    fetchFromLocal("business");
  }, [fetchFromLocal]);

  const marketArticles = articlesByCategory["business"];

  if (loading) return <p>Loading market news...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <div className="card right-aside">
        <div className="section-header">
          <h2 className="section-header__title">
            Market <span className="text-regular"> News</span>
          </h2>
          <Link className="see-link" href="/business">
            See all →
          </Link>
        </div>

        <div className="right-aside__content">
          {marketArticles && marketArticles.length > 0 ? (
            marketArticles.slice(0, 3).map((article) => (
              <ShortNewsCard
                key={article.url || article.link}
                href={article.url || article.link || "#"}
                title={article.title}
                timestamp={article.publishedAt}
              />
            ))
          ) : (
            <p>No articles found.</p>
          )}
        </div>
      </div>
    </>
  )
}

export default MarketNews