'use client';

import Aside from "@/components/aside/Aside";
import Footer from "@/components/footer";
import Header from "@/components/header";
import NewsCardSmall from "@/components/newsCardSmall/NewsCardSmall";
import React, { useEffect } from "react";

import { useNews } from "@/context/NewsContext";

function SportsPage() {
  const { articlesByCategory, fetchFromLocal, loading, error } = useNews();

  useEffect(() => {
    fetchFromLocal("sports");
  }, [fetchFromLocal]);

  const sportsArticles = articlesByCategory["sports"];

  if (loading) return <p>Loading sports news...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <Header />
      <div className="container">
        <main>
          <Aside />
          <div className="card-grid three-cards ">
            {sportsArticles && sportsArticles.map((article) => (
              <NewsCardSmall
                key={article.url || article.link}
                imageSrc={article.image_url || article.image || ""}
                imageAlt={article.title || ""}
                title={article.title}
                content={article.description}
                source={article.url || article.link || "#"}
                timestamp={article.publishedAt}
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
