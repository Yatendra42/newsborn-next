import Link from "next/link";
import React from "react";
import "./ShortNewsCard.scss";

interface ShortNewsCardProps {
  href?: string;
  link?: string;
  title: string;
  imageUrl?: string;
  date?: string;
  category?: string;
  source?: string;
  article?: any; // Adjust type as needed
}

function ShortNewsCard({
  href = "#",
  link = "#",
  title,
  imageUrl,
  date,
  category,
  article,
  source,
}: ShortNewsCardProps) {
  return (
    <Link className="short-news-card" target="_blank" rel="noopener noreferrer" href={href || link || "#"}>
       {imageUrl &&  <div className="thumb">
      <img src={imageUrl} alt={title} />
      </div> }

      <div className="content">
     
        <h3 className="title">{title}</h3>
        
       
      </div>
    </Link>
  );
}

export default ShortNewsCard;