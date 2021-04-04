import React from "react"
import ReactWOW from "react-wow"
import { Carousel } from "react-bootstrap"
import { StaticImage } from "gatsby-plugin-image"
import Img from "gatsby-image"
import "./index.scss"

function ShowcaseCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <StaticImage src="../../assets/images/showcase/showcase-3.png" alt="" />
      </Carousel.Item>

      <Carousel.Item>
        <StaticImage src="../../assets/images/showcase/showcase-2.png" alt="" />
      </Carousel.Item>

      <Carousel.Item>
        <StaticImage src="../../assets/images/showcase/showcase-4.png" alt="" />
      </Carousel.Item>

      <Carousel.Item>
        <StaticImage src="../../assets/images/showcase/showcase-5.png" alt="" />
      </Carousel.Item>

      <Carousel.Item>
        <StaticImage src="../../assets/images/showcase/showcase-6.png" alt="" />
      </Carousel.Item>

      <Carousel.Item>
        <StaticImage src="../../assets/images/showcase/showcase-7.png" alt="" />
      </Carousel.Item>

      {/* <Carousel.Item>
        <StaticImage src="../../assets/images/showcase/showcase-8.png" alt="" />
      </Carousel.Item> */}

      {/* <Carousel.Item>
        <StaticImage src="../../assets/images/showcase/showcase-9.png" alt="" />
      </Carousel.Item> */}
      {/* <Carousel.Item>
        <img className="d-block w-100" alt="..." />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" alt="..." />
      </Carousel.Item>           */}
    </Carousel>
  )
}

function ShowcaseBrowser({ children }) {
  return (
    <div className="showcase-browser">
      <div className={"showcase-browser__header"}>
        <div className={"showcase-browser__header-close-btns"}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div className={"showcase-browser__body"}>{children}</div>
    </div>
  )
}

export default function Showcase() {
  return (
    <ReactWOW animation="fadeIn" duration={"2s"}>
      <div className="showcase">
        <div className="container showcase__container">
          <div className="showcase__app">
            <ShowcaseBrowser>
              <ShowcaseCarousel />
            </ShowcaseBrowser>
          </div>
        </div>
      </div>
    </ReactWOW>
  )
}
