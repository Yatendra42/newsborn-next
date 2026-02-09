import Link from "next/link";
import React from "react";
import { PlaceHolder } from '@/assets';
import "./NewsCardSmall.scss";

interface NewsCardSmallProps {
  imageSrc?: string;
  imageAlt?: string;
  title?: string;
  content?: string;
  source?: string;
  link?: string;
  date?: string;
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

function NewsCardSmall(props: NewsCardSmallProps) {
  return (
    <>
      <Link href={props.source || props.link || "#"} className="card news-card-small" target="_blank" title={props.title} rel="noopener noreferrer">
        <div>
          <img
            src={props.imageSrc || PlaceHolder.src}
            alt={props.imageAlt}
          />
          <h2 className="title-heading">{props.title}</h2>
          <p className="card-content">{props.content}</p>
          {props.timestamp && <span className="timestamp">{formatTimeAgo(props.timestamp)}</span>}
        </div>
      </Link>
    </>
  );
}

export default NewsCardSmall;
