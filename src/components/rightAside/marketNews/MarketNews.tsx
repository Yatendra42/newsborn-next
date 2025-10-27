"use client";

import ShortNewsCard from '@/components/shortNewsCard/ShortNewsCard'
import Link from 'next/link'
import React from 'react'

import { useNews } from "@/context/NewsContext";

function MarketNews() {

    const { getCategoryNews, loading, error } = useNews();
     const articles = getCategoryNews("business");
  
    if (loading) return <p>Loading Business news...</p>;
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
            {articles && articles.length > 0 ? (
              articles.slice(0, 3).map((article) => (
                <ShortNewsCard
                  key={article.url}
                  href={article.url}
                  title={article.title}
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