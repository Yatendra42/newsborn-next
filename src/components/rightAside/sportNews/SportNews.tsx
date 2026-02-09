"use client";

import ShortNewsCard from '@/components/shortNewsCard/ShortNewsCard'
import Link from 'next/link'
import React, { useEffect } from 'react'

import { useNews } from "@/context/NewsContext";
import { PlaceHolder } from '@/assets';

function SportNews() {
  const { articlesByCategory, fetchFromLocal, loading, error } = useNews();

  useEffect(() => {
    fetchFromLocal("sports");
  }, [fetchFromLocal]);

  const sportsArticles = articlesByCategory["sports"];

  if (loading) return <p>Loading sports news...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <div className="card right-aside">
        <div className="section-header">
          <h2 className="section-header__title">
            Sports <span className="text-regular"> News</span>
          </h2>
          <Link className="see-link" href="/sports">
            See all →
          </Link>
        </div>

        <div className="right-aside__content">
          {sportsArticles && sportsArticles.length > 0 ? (
            sportsArticles.slice(0, 2).map((article) => (
              <ShortNewsCard
                key={article.url || article.link}
                href={article.url}
                title={article.title}
                imageUrl={article.image || article.image_url || PlaceHolder.src}
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

export default SportNews
