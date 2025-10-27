import React from "react";
import "./RightSide.scss";
import Link from "next/link";
import Image from "next/image";
import ShortNewsCard from "../shortNewsCard/ShortNewsCard";
import SportNews from "./sportNews/SportNews";
import PoliticalNews from "./politicalNews/PoliticalNews";
import MarketNews from "./marketNews/MarketNews";

function RightSide() {
  return (
    <>
      <div className="right-aside-container">
       <MarketNews />

     
      <SportNews />
      <PoliticalNews />

    
    
      
 </div> {/* container ended here */}

    </>
  );
}

export default RightSide;
