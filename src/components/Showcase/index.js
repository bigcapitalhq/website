import React from "react"
import { Carousel } from "react-bootstrap"
import { StaticImage } from "gatsby-plugin-image"
import "./index.scss"

function ShowcaseCarousel() {
  return (
    <Carousel controls={false} touch={false}>
      <Carousel.Item>
        <ShowcaseBrowser>
          <StaticImage
            src="../../assets/images/showcase/showcase-3.png"
            alt=""
            backgroundColor={'#fff'}
          />
        </ShowcaseBrowser>
      </Carousel.Item>

      <Carousel.Item>
        <ShowcaseBrowser>
          <StaticImage
            src="../../assets/images/showcase/showcase-10.png"
            alt=""
            backgroundColor={'#fff'}
          />
        </ShowcaseBrowser>
      </Carousel.Item>

      <Carousel.Item>
        <ShowcaseBrowser>
          <StaticImage
            src="../../assets/images/showcase/showcase-4.png"
            alt=""
            backgroundColor={'#fff'}
          />
        </ShowcaseBrowser>
      </Carousel.Item>

      <Carousel.Item>
        <ShowcaseBrowser>
          <StaticImage
            src="../../assets/images/showcase/showcase-5.png"
            alt=""
            backgroundColor={'#fff'}
          />
        </ShowcaseBrowser>
      </Carousel.Item>

      <Carousel.Item backgroundColor={'#fff'}>
        <ShowcaseBrowser>
          <StaticImage
            src="../../assets/images/showcase/showcase-6.png"
            alt=""
            backgroundColor={'#fff'}
          />
        </ShowcaseBrowser>
      </Carousel.Item>

      <Carousel.Item>
        <ShowcaseBrowser>
          <StaticImage
            src="../../assets/images/showcase/showcase-7.png"
            alt=""
            backgroundColor={'#fff'}
          />
        </ShowcaseBrowser>
      </Carousel.Item>
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
    <div className="showcase" id="showcase">
      <div className="showcase__container">
        <div className="showcase__app">
          <ShowcaseCarousel />
        </div>
      </div>
    </div>
  )
}
