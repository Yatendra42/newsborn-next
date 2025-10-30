"use client";

import Aside from "@/components/aside/Aside";
import Header from "@/components/header";
import NewsCardSmall from "@/components/newsCardSmall/NewsCardSmall";
import React, { useEffect } from "react";

//import { useNews } from "@/context/NewsContext";
import Footer from "@/components/footer";
import { useNews } from "@/context/NewsContext";

function LifestylePage() {
//    const { getCategoryNews, loading, error } = useNews();
//    const articles = getCategoryNews("lifestyle");

//   if (loading) return <p>Loading world news...</p>;
//   if (error) return <p>{error}</p>;


// For Local Json call
 
     const { articlesByCategory, fetchFromLocal, loading, error } = useNews();
  
    useEffect(() => {
      fetchFromLocal("lifestyle");
    }, [fetchFromLocal]);

    const lifestyleArticles = articlesByCategory["lifestyle"];

    if (loading) return <p>Loading lifestyle news...</p>;
    if (error) return <p>{error}</p>;
  
  


  if (loading) return <p>Loading entertainment news...</p>;
  if (error) return <p>{error}</p>;



  return (
    <>
      <Header />
      <div className="container">
        <main>
          <Aside />
           <div className="card-grid three-cards ">
            {lifestyleArticles && lifestyleArticles.map((article) => (
              <NewsCardSmall
                key={article.url}
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

export default LifestylePage;
