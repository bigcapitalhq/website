import React from "react"
import ReactWOW from 'react-wow';

export default function Intro() {
  return (
    <ReactWOW animation='fadeIn' duration={'1s'}>
    <div className="intro">
      <div className="container">
        <h1 className="intro__title">
          Most advanced accounting software for startup to enterprise businesses.
        </h1>

        <h2 className="intro__subtitle">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout — The point of
          using Lorem Ipsum
        </h2>

        <div className="intro__buttons">
          <a className="btn btn-primary btn-lg mr-lg-2 mb-3 mb-lg-0" href="">
            Request demo
          </a>
          <a className="btn btn-outline-secondary btn-lg" href="">
            Signup
          </a>
        </div>
      </div>
    </div>
    </ReactWOW>
  );
}
