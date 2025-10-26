import React from "react";
import TopHeadlines from "../topHeadlines/TopHeadlines";
import './HomeContent.scss';
import VideoSection from "../videoSection/VideoSection";


function HomeContent() {
  return (
    <>
      <div className="home-content-container">
        <TopHeadlines />
         <VideoSection  />
      </div>
    </>
  );
}

export default HomeContent;
