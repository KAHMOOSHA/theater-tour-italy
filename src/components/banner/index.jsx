import React from "react";
import "./banner.css";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import LazyImage from "../LazyImg/LazyImage";

const Banner = ({ slides, activeIndex, onSelect, style, indicators, interval }) => {
  return (
    <div className="main__Banner" style={style}>
      <Carousel
        fade
        interval={interval}
        activeIndex={activeIndex}
        onSelect={onSelect}
        indicators={indicators}
      >
        {slides.map((slide, index) => (
          <Carousel.Item key={index}>
            <LazyImage src={slide.imgSrc} alt={slide.alt} />
            {slide.overlayContent && (
              <div className="overlay">{slide.overlayContent}</div>
            )}
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
