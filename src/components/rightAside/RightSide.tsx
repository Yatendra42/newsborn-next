import React from "react";
import "./RightSide.scss";
import Link from "next/link";
import Image from "next/image";
import ShortNewsCard from "../shortNewsCard/ShortNewsCard";
import SportNews from "./sportNews/SportNews";
import PoliticalNews from "./politicalNews/PoliticalNews";

function RightSide() {
  return (
    <>
      <div className="right-aside-container">
        <div className="card right-aside">
          <div className="section-header">
            <h2 className="section-header__title">
              Market <span className="text-regular"> News</span>
            </h2>
            <Link className="see-link" href="/market">
              See all →
            </Link>
          </div>

          <div className="right-aside__content">
            <h3 className="right-aside__headline">
              Local Team Wins Championship
            </h3>
            <p className="right-aside__description">
              In an exhilarating final match, the local team clinched the
              championship title, marking their first victory in over a decade.
            </p>
          </div>
        
      </div>

     
      <SportNews />
      <PoliticalNews />

    
    
      
 </div> {/* container ended here */}

    </>
  );
}

export default RightSide;
