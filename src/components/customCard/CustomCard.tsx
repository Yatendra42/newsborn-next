import React from 'react'
import './CustomCard.scss';

interface CustomCardProps { 
    image: string;
    title: string;
    description: string;
    category?: string;
    link?: string;

}

function CustomCard({ image, title, description, category, link }: CustomCardProps) {
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
            </div>
       </div>
   </>
  )
}

export default CustomCard