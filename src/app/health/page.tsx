"use client";

import Aside from "@/components/aside/Aside";
import Header from "@/components/header";
import NewsCardSmall from "@/components/newsCardSmall/NewsCardSmall";
import React, { useEffect } from "react";

import { useNews } from "@/context/NewsContext";
import Footer from "@/components/footer";

function HealthPage() {
  //  const { getCategoryNews, loading, error } = useNews();
  //  const articles = getCategoryNews("health");


// For Local Json call
 
     const { articlesByCategory, fetchFromLocal, loading, error } = useNews();
  
    useEffect(() => {
      fetchFromLocal("health");
    }, [fetchFromLocal]);

    const healthArticles = articlesByCategory["health"];

    if (loading) return <p>Loading health news...</p>;
    if (error) return <p>{error}</p>;
  
  



  if (loading) return <p>Loading politics news...</p>;
  if (error) return <p>{error}</p>;


  return (
    <>
      <Header />
      <div className="container">
        <main>
          <Aside />
              <div className="card-grid three-cards ">
            {healthArticles  && healthArticles.map((article) => (
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

export default HealthPage;
