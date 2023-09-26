import React from "react";
import "./banner.css";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import LazyImage from "../LazyImg/LazyImage";

const Banner = ({ slides, activeIndex, onSelect, style }) => {
  return (
    <div className="main__Banner" style={style}>
      <Carousel
        fade
        interval={5000}
        activeIndex={activeIndex}
        onSelect={onSelect}
      >
        {slides.map((slide, index) => (
          <Carousel.Item key={index}>
            <LazyImage src={slide.imgSrc} alt={slide.alt} />
            <div className="overlay">{slide.overlayContent}</div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
