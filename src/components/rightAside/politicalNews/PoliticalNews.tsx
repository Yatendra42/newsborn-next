'use client';

import { PlaceHolder } from '@/assets';
import ShortNewsCard from '@/components/shortNewsCard/ShortNewsCard'
import { useNews } from '@/context/NewsContext';
import Link from 'next/link';
import React, {useEffect} from 'react';

function PoliticalNews() {

  // const { articles, fetchFromNewsData, loading, error } = useNews();
   
  //    useEffect(() => {
  //      fetchFromNewsData({ category: "politics", country: "in", language: "en" });
  //    }, []);
   
  //    console.log("Market Articles:", articles);

  

// For Local Json call
 
     const { articlesByCategory, fetchFromLocal, loading, error } = useNews();
  
    useEffect(() => {
      fetchFromLocal("politics");
    }, [fetchFromLocal]);

    const politicsArticles = articlesByCategory["politics"];

    if (loading) return <p>Loading politics news...</p>;
    if (error) return <p>{error}</p>;
  
  
  return (
   <>
         <div className="card right-aside">
          <div className="section-header">
            <h2 className="section-header__title">
              Political <span className="text-regular"> News</span>
            </h2>
            <Link className="see-link" href="/politics">
              See all →
            </Link>
          </div>

     
          <div className="right-aside__content">
            {politicsArticles && politicsArticles.length > 0 ? (
              politicsArticles.slice(0, 2).map((article) => (
                <ShortNewsCard
                 key={article.url || article.link}
                  href={article.url || article.link || "#"}
                  title={article.title}
                  imageUrl={article.image || article.image_url || PlaceHolder.src} 
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

export default PoliticalNews