import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import ReactWOW from 'react-wow';

export default function Customers() {
  return (
    <ReactWOW animation='fadeIn' delay={'1s'}>
    <div className="customers">
      <div className="container">
        <div className="customers__inner-wrapper">
          <div className="row justify-content-between">
            <div className="customers__customer col-lg-auto align-self-center text-center">
              <StaticImage src="../../images/names-faces.png" alt="" />
            </div>

            <div className="customers__customer col-lg-auto align-self-center text-center">
              <StaticImage src="../../images/gruntwork.png" alt="" />
            </div>

            <div className="customers__customer col-lg-auto align-self-center text-center">
              <StaticImage src="../../images/ideo.png" alt="" />
            </div>

            <div className="customers__customer col-lg-auto align-self-center text-center">
              <StaticImage src="../../images/maido.png" alt="" />
            </div>

            <div className="customers__customer col-lg-auto align-self-center text-center">
              <StaticImage
                className="mb-mobile-0"
                src="../../images/sellout.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    </ReactWOW>
  )
}
