import Link from "next/link";
import React from "react";
import { PlaceHolder } from '@/assets';

interface NewsCardSmallProps {
    imageSrc?: string;
    imageAlt?: string;
    title?: string;
    content?: string;
    source?: string;
    link?: string;
    date?: string;
}

function NewsCardSmall(props: NewsCardSmallProps) {
  return (
    <>
       <Link href={props.source || props.link || "#"} className="card" target="_blank" title={props.title} rel="noopener noreferrer">
        <div >
        <img
          src={props.imageSrc || PlaceHolder.src}
          alt={props.imageAlt}
        />
        <h2 className="title-heading">{props.title}</h2>
        <p className="card-content">{props.content}</p>
      </div>
      </Link>
    </>
  );
}

export default NewsCardSmall;
