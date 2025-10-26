"use client";

import React from "react";
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
  // const headlinesData = [
  //   {
  //     url: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=1200&q=80",
  //     title: "Tech Giants Rally Behind AI Regulation Framework",
  //     category: "Technology",
  //     description:
  //       "Global leaders push for responsible AI practices to balance innovation with ethical concerns.",
  //   },
  //   {
  //     url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
  //     title: "Climate Action Summit Sets New Global Targets",
  //     category: "Environment",
  //     description:
  //       "Nations unite to commit to stronger emission cuts and renewable energy initiatives by 2030.",
  //   },
  //   {
  //     url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
  //     title: "Markets Rebound as Investors Eye Earnings Reports",
  //     category: "Business",
  //     description:
  //       "After weeks of volatility, global markets show signs of recovery amid strong Q4 projections.",
  //   },
  //   {
  //     url: "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?auto=format&fit=crop&w=1200&q=80",
  //     title: "Next-Gen Smartphones Redefine Mobile Experience",
  //     category: "Gadgets",
  //     description:
  //       "Foldable designs and AI-enhanced cameras dominate the latest lineup of flagship releases.",
  //   },
  //   {
  //     url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
  //     title: "Youth Turnout Could Shape 2025 Global Elections",
  //     category: "Politics",
  //     description:
  //       "A surge in youth voter registration is expected to influence key policy outcomes across continents.",
  //   },
  // ];

 const { articles, refreshNews } = useNews();

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
