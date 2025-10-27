"use client";

import Aside from "@/components/aside/Aside";
import Header from "@/components/header";
import NewsCardSmall from "@/components/newsCardSmall/NewsCardSmall";
import React, { useEffect } from "react";

import { useNews } from "@/context/NewsContext";
import Footer from "@/components/footer";

function PoliticsPage() {
   const { getCategoryNews, loading, error } = useNews();
   const articles = getCategoryNews("politics");

  if (loading) return <p>Loading politics news...</p>;
  if (error) return <p>{error}</p>;


  return (
    <>
      <Header />
      <div className="container">
        <main>
          <Aside />
          <div className="card-grid three-cards ">
              <h2>Data will load here...</h2>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default PoliticsPage;
