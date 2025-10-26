import ShortNewsCard from '@/components/shortNewsCard/ShortNewsCard'
import Link from 'next/link'
import React from 'react'

function SportNews() {
  return (
   <>
       <div className="card right-aside">
          <div className="section-header">
            <h2 className="section-header__title">
              Sports <span className="text-regular"> News</span>
            </h2>
            <Link className="see-link" href="/sports">
              See all →
            </Link>
          </div>

          <div className="right-aside__content">
            <ShortNewsCard 
              href={""} 
              title={"Rohit Sharma's retirement plan revealed in 2027 World Cup update after Sydney show: "} 
              imageUrl={"https://www.hindustantimes.com/ht-img/img/2025/10/26/550x309/PTI10-25-2025-000143A-0_1761471495269_1761471511295.jpg"} 
              date={""} 
              category={""} />

            <ShortNewsCard 
              href={""} 
              title={"Gautam Gambhir scolded Harshit Rana before Sydney ODI"} 
              imageUrl={"https://www.hindustantimes.com/ht-img/img/2025/10/26/550x309/rana_gambhir_sydney_1761445148210_1761445156119.jpg"} 
              date={""} 
              category={""} />
          </div>
        </div>
   </>
  )
}

export default SportNews