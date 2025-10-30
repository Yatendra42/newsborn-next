"use client";

import Aside from "@/components/aside/Aside";
import Header from "@/components/header";
import NewsCardSmall from "@/components/newsCardSmall/NewsCardSmall";
import React, { useEffect } from "react";

import { useNews } from "@/context/NewsContext";
import Footer from "@/components/footer";

function SciencePage() {
  //  const { getCategoryNews, loading, error } = useNews();
  //  const articles = getCategoryNews("science");


// For Local Json call
 
     const { articlesByCategory, fetchFromLocal, loading, error } = useNews();
  
    useEffect(() => {
      fetchFromLocal("science");
    }, [fetchFromLocal]);

    const scienceArticles = articlesByCategory["science"];

    if (loading) return <p>Loading science news...</p>;
    if (error) return <p>{error}</p>;
  
  

  return (
    <>
      <Header />
      <div className="container">
        <main>
          <Aside />
     <div className="card-grid three-cards ">
            {scienceArticles  && scienceArticles.map((article) => (
              <NewsCardSmall
                key={article.url || article.link}
                 imageSrc={article.image_url || article.image || ""}
                imageAlt={article.title || "" }
                title={article.title}
                content={article.description}
                source={article.url || article.link || "#"}
              />
            ))}
         
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default SciencePage;
