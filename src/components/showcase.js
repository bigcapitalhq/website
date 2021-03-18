import React from 'react'
import { StaticImage  } from "gatsby-plugin-image"


export default function Showcase() {
    return (
        <div className="showcase">
        <div className="container showcase__container">
          <div className="showcase__app">
            <div id="appCarousel" className="carousel slide carousel-fade">
              <div className="carousel-scrollable">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <video className="videoAnimation js-logo-farm-image" poster="https://luna1.co/feaf77.png" data-src="https://d1gwm4cf8hecp4.cloudfront.net/videos/homepage/timeline/home-timeline-EN.mp4" muted="" playsinline="" autoplay="" loop="" src="https://d1gwm4cf8hecp4.cloudfront.net/videos/homepage/timeline/home-timeline-EN.mp4"></video>
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100" alt="..."/>
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100" alt="..."/>
                  </div>
                </div>
              </div>
              <ol className="carousel-indicators">
                <li data-target="#appCarousel" data-slide-to="0" className="active"></li>
                <li data-target="#appCarousel" data-slide-to="1"></li>
                <li data-target="#appCarousel" data-slide-to="2"></li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    )
}
