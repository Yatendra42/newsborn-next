"use client";

import Aside from "@/components/aside/Aside";
import Header from "@/components/header";
import NewsCardSmall from "@/components/newsCardSmall/NewsCardSmall";
import React, { useEffect } from "react";

import Footer from "@/components/footer";
import { useNews } from "@/context/NewsContext";

function TravelPage() {
  const { articlesByCategory, fetchFromLocal, loading, error } = useNews();

  useEffect(() => {
    fetchFromLocal("travel");
  }, [fetchFromLocal]);

  const travelArticles = articlesByCategory["travel"];

  if (loading) return <p>Loading travel news...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <Header />
      <div className="container">
        <main>
          <Aside />
          <div className="card-grid three-cards ">
            {travelArticles && travelArticles.map((article) => (
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

export default TravelPage;
