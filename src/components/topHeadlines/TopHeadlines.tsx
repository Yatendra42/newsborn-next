"use client";

import React, { useState, useEffect } from "react";
import "./TopHeadlines.scss";
import type { StaticImageData } from "next/image";
import CustomCard from "../customCard/CustomCard";

import { useNews } from "@/context/NewsContext";

// ✅ Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { PlaceHolder } from "@/assets";

interface TopHeadlinesProps {
  title?: string;
  category?: string;
  image?: string;
  description?: string;

}


const TopHeadlines = ({ }: TopHeadlinesProps) => {

  const { articlesByCategory, fetchFromLocal, loading, error } = useNews();

  useEffect(() => {
    fetchFromLocal("topHeadlines");
  }, [fetchFromLocal]);

  const topHeadlinesArticles = articlesByCategory["topHeadlines"];




  // ✅ All hooks called first, then conditionals
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!topHeadlinesArticles || topHeadlinesArticles.length === 0) return <p>No headlines available.</p>;

  return (
    <section className="top-headlines-section">
      <h2>Top <span className="text-regular">Headlines</span></h2>

      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 1 },
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="top-headlines-swiper"
      >
        {topHeadlinesArticles.map((headline, index) => (
          <SwiperSlide key={index}>
            <CustomCard
              image={headline.image ?? PlaceHolder.src}
              title={headline.title}
              description={headline.description ?? ""}
              timestamp={headline.publishedAt}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TopHeadlines;
