import React from 'react'
import type { StaticImageData } from "next/image";
import './CustomCard.scss';

interface CustomCardProps {
    image?: string;
    title: string;
    description: string;
    category?: string;
    link?: string;
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
        year: "numeric",
    });
};

function CustomCard({ image, title, description, category, link, timestamp }: CustomCardProps) {
    return (
        <>
            <div className='card custom-card'>
                <div className="thumb">
                    <img src={image} alt={title} />
                </div>

                <div className='content'>
                    {category && <span className='category-chip'>{category}</span>}
                    <h3 className='title'>{title}</h3>
                    <p className='description'>{description}</p>
                    {timestamp && <span className='timestamp'>{formatTimeAgo(timestamp)}</span>}
                </div>
            </div>
        </>
    )
}

export default CustomCard
