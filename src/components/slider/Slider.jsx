import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import './slider.scss';



function Slider() {


  return (
    <>
      <div className="main">
      <Carousel>
     
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/slider_background.jpg"
          alt="First slide"
        />

        <Carousel.Caption>
          <h3>xx</h3>
          <p>1</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/slider_background.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>xx</h3>
          <p>
          2
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      </div>
    </>
  );
}

export default Slider;
