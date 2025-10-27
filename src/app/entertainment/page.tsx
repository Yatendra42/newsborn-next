"use client";

import Aside from "@/components/aside/Aside";
import Header from "@/components/header";
import NewsCardSmall from "@/components/newsCardSmall/NewsCardSmall";
import React, { useEffect } from "react";

import { useNews } from "@/context/NewsContext";
import Footer from "@/components/footer";

function EntertainmentPage() {
   const { getCategoryNews, loading, error } = useNews();
   const articles = getCategoryNews("entertainment");

  if (loading) return <p>Loading entertainment news...</p>;
  if (error) return <p>{error}</p>;


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

export default EntertainmentPage;
