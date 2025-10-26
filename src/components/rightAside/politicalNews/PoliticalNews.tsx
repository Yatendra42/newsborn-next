import ShortNewsCard from '@/components/shortNewsCard/ShortNewsCard'
import Link from 'next/link'
import React from 'react'

function PoliticalNews() {
  return (
   <>
         <div className="card right-aside">
          <div className="section-header">
            <h2 className="section-header__title">
              Political <span className="text-regular"> News</span>
            </h2>
            <Link className="see-link" href="/politics">
              See all →
            </Link>
          </div>

          <div className="right-aside__content">
            <ShortNewsCard 
              href={""} 
              title={"Youth Turnout Could Shape 2025 Global Elections"} 
              imageUrl={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1MWm4Uc-yhWB5bkRg8r_Vy6ueABFtDb_qSA&s"} 
              date={""} 
              category={""} />

                <ShortNewsCard 
              href={""} 
              title={"Youth Turnout Could Shape 2025 Global Elections"} 
              imageUrl={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1MWm4Uc-yhWB5bkRg8r_Vy6ueABFtDb_qSA&s"} 
              date={""} 
              category={""} />
           
          </div>
        </div>
   </>
  )
}

export default PoliticalNews