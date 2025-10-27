"use client";

import React, {useState, useEffect} from "react";
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

interface TopHeadlinesProps {
  title?: string;
  category?: string;
  image?: string | StaticImageData;
  description?: string;
}


const TopHeadlines = ({
  title = "Top Headlines",
  category = "Latest News",
}: TopHeadlinesProps) => {

  const { getCategoryNews, loading, error } = useNews();
  const articles = getCategoryNews("general");

  if (loading) return <p>Loading general news...</p>;
  if (error) return <p>{error}</p>;

 console.log("Articles in TopHeadlines:", articles);
 
  return (
    
    <section className="top-headlines-section" style={{  }}>
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
        {articles.map((headline, index) => (
          <SwiperSlide key={index}>
            <CustomCard
              image={headline.image}
              title={headline.title}
              description={headline.description}
              //category={headline.category}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TopHeadlines;
