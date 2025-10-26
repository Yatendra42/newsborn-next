import Link from 'next/link'
import React from 'react'
import './VideoSection.scss';

function VideoSection() {
  return (
   <>
      <div className="video-container">
         <div className="section-header">
            <h3 className="section-header__title">
              Video
            </h3>
            <Link className="see-link" href="/video">
              See all →
            </Link>
          </div>

          <div className="video-container--content">
              <video controls  >
                <source src="https://cdn.pixabay.com/video/2019/12/08/29982-378308905_large.mp4" type="video/mp4" />
              </video>

               <video  controls  >
                <source src="https://cdn.pixabay.com/video/2023/11/29/191288-889685041_large.mp4" type="video/mp4" />
              </video>

             
          </div>
      </div>
   </>
  )
}

export default VideoSection