import React from "react";
import "./solid-image.css";
import LazyImage from "../LazyImg/LazyImage";

const SolidImage = ({ img, style, text }) => {
  return (
    <div>
      {/* <h1 className="custom__h1">About</h1> */}
      <div style={style} className="image_container">
        <h1>{text}</h1>
        <div className="image_overlay">
          <LazyImage src={img} />
        </div>
      </div>
    </div>
  );
};

export default SolidImage;
