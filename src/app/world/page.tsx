"use client";

import Aside from "@/components/aside/Aside";
import Header from "@/components/header";
import NewsCardSmall from "@/components/newsCardSmall/NewsCardSmall";
import React, { useEffect } from "react";

import { useNews } from "@/context/NewsContext";
import Footer from "@/components/footer";

function WorldPage() {
  const { articlesByCategory, fetchFromLocal, loading, error } = useNews();

  useEffect(() => {
    fetchFromLocal("world");
  }, [fetchFromLocal]);

  const worldArticles = articlesByCategory["world"];

  if (loading) return <p>Loading world news...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <Header />
      <div className="container">
        <main>
          <Aside />
          <div className="card-grid three-cards ">
            {worldArticles && worldArticles.map((article) => (
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

export default WorldPage;
