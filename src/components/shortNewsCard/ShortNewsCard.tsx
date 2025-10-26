import Link from "next/link";
import React from "react";
import "./ShortNewsCard.scss";

interface ShortNewsCardProps {
  href?: string;
  title: string;
  imageUrl?: string;
  date?: string;
  category?: string;
  source?: string;
}

function ShortNewsCard({
  href = "#",
  title,
  imageUrl,
  date,
  category,
  source
}: ShortNewsCardProps) {
  return (
    <Link className="short-news-card" href={href}>
      <div className="thumb">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="content">
     
        <h3 className="title">{title}</h3>
        
       
      </div>
    </Link>
  );
}

export default ShortNewsCard;