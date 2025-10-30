"use client";

import Aside from "@/components/aside/Aside";
import Header from "@/components/header";
import NewsCardSmall from "@/components/newsCardSmall/NewsCardSmall";
import React, { useEffect } from "react";

import { useNews } from "@/context/NewsContext";
import Footer from "@/components/footer";

function CryptoPage() {

// const { articles, fetchFromNewsData, loading, error } = useNews();
 
  //  useEffect(() => {
  //    fetchFromNewsData({ category: "business", country: "in", language: "en" });
  //  }, []);
 
  //  console.log("Market Articles:", articles);
 




// For Local Json call
 
     const { articlesByCategory, fetchFromLocal, loading, error } = useNews();
  
    useEffect(() => {
      fetchFromLocal("crypto");
    }, [fetchFromLocal]);

    const cryptoArticles = articlesByCategory["crypto"];

    if (loading) return <p>Loading crypto news...</p>;
    if (error) return <p>{error}</p>;
  
  

  return (
    <>
      <Header />
      <div className="container">
        <main>
          <Aside />
    <div className="card-grid three-cards ">
            {cryptoArticles  && cryptoArticles.map((article) => (
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

export default CryptoPage;
