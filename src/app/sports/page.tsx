'use client';

import Aside from "@/components/aside/Aside";
import Footer from "@/components/footer";
import Header from "@/components/header";
import NewsCardSmall from "@/components/newsCardSmall/NewsCardSmall";
import React,{useEffect} from "react";


import { useNews } from "@/context/NewsContext";

function SportsPage() {
  
   const { getCategoryNews, loading, error } = useNews();
   const articles = getCategoryNews("sports");

  if (loading) return <p>Loading sports news...</p>;
  if (error) return <p>{error}</p>;

  console.log(articles);

  return (
    <>
      <Header />
      <div className="container">
        <main>
          <Aside />
          <div className="card-grid three-cards ">
                 {articles.map((article) => (
              <NewsCardSmall
                key={article.url}
                imageSrc={article.image}
                imageAlt={article.title}
                title={article.title}
                content={article.description}
                source={article.url}
              />
            ))}
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default SportsPage;
