import React from 'react'
import './CustomCard.scss';

interface CustomCardProps { 
    url: string;
    title: string;
    description: string;
    category?: string;
    link?: string;

}

function CustomCard({ url, title, description, category, link }: CustomCardProps) {
  return (
   <>
       <div className='card custom-card'>
        <div className="thumb">
            <img src={url} alt={title} />
      </div>          

          <div className='content'>
            <span className='category-chip'>{category}</span>
            <h3 className='title'>{title}</h3>
            <p className='description'>{description}</p>
            </div>
       </div>
   </>
  )
}

export default CustomCard