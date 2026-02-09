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
  article?: any;
  timestamp?: string;
}

// Helper function to format timestamp
const formatTimeAgo = (dateString?: string): string => {
  if (!dateString) return "";

  const date = new Date(dateString);
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (diffInSeconds < 60) return "Just now";
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} min ago`;
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hours ago`;
  if (diffInSeconds < 604800) return `${Math.floor(diffInSeconds / 86400)} days ago`;

  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
};

function ShortNewsCard({
  href = "#",
  link = "#",
  title,
  imageUrl,
  date,
  category,
  article,
  source,
  timestamp,
}: ShortNewsCardProps) {
  return (
    <Link className="short-news-card" target="_blank" rel="noopener noreferrer" href={href || link || "#"}>
      {imageUrl && <div className="thumb">
        <img src={imageUrl} alt={title} />
      </div>}

      <div className="content">
        <h3 className="title">{title}</h3>
        {timestamp && <span className="timestamp">{formatTimeAgo(timestamp)}</span>}
      </div>
    </Link>
  );
}

export default ShortNewsCard;
