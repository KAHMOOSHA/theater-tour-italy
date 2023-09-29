import React, { useState } from "react";
import Navbar from "../../components/navBar";
import Modal from "react-bootstrap/Modal";
import LazyImage from "../../components/LazyImg/LazyImage";
import Banner from "../../components/banner";
import "./gallery.css";

import img1 from "../../components/media/galleryImgs/gallery-img1.jpg";
import img2 from "../../components/media/galleryImgs/gallery-img2.jpg";
import img3 from "../../components/media/galleryImgs/gallery-img3.jpg";
import img4 from "../../components/media/galleryImgs/gallery-img4.jpg";
import img5 from "../../components/media/galleryImgs/gallery-img5.jpg";
import img6 from "../../components/media/galleryImgs/gallery-img6.jpg";
import img7 from "../../components/media/galleryImgs/gallery-img7.jpg";
import img8 from "../../components/media/galleryImgs/gallery-img8.jpg";
import img9 from "../../components/media/galleryImgs/gallery-img9.jpg";
import img10 from "../../components/media/galleryImgs/gallery-img10.jpg";
import img11 from "../../components/media/galleryImgs/gallery-img11.jpg";
import img12 from "../../components/media/galleryImgs/gallery-img12.jpg";
import img13 from "../../components/media/galleryImgs/gallery-img13.jpg";
import img14 from "../../components/media/galleryImgs/gallery-img14.jpg";
import img15 from "../../components/media/galleryImgs/gallery-img15.jpg";
import img16 from "../../components/media/galleryImgs/gallery-img16.jpg";
import img18 from "../../components/media/galleryImgs/gallery-img18.jpg";
import img19 from "../../components/media/galleryImgs/gallery-img19.jpg";
import img20 from "../../components/media/galleryImgs/gallery-img20.jpg";
import img21 from "../../components/media/galleryImgs/2C1A4788.JPG";
import img22 from "../../components/media/galleryImgs/2C1A4264.JPG";

const CustomGallery = () => {
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img18,
    img19,
    img20,
    img21,
    img22,
  ];

  const imageObjects = images.map((url) => ({
    imgSrc: url,
  }));

  const [lgShow, setLgShow] = useState(false);
  const [index, setIndex] = useState(0);

  const handleSelect = (index) => {
    setIndex(index);
    setLgShow(true);
  };

  return (
    <>
      <Navbar />
      <div className="Img__holder">
        <div className="background">
          <h1>Gallery</h1>
          <div className="image_items">
            {images.map((x, i) => (
              <div
                key={i}
                className="image_item"
                onClick={() => handleSelect(i)}
              >
                <LazyImage src={images[i]} alt="event" effect="blur" key={i} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Modal size="lg" show={lgShow} onHide={() => setLgShow(false)} centered>
        {/* <Modal.Header closeButton></Modal.Header> */}
        <Modal.Body>
          <Banner
            slides={imageObjects}
            activeIndex={index}
            onSelect={handleSelect}
            style={{ marginBottom: "0px" }}
            indicators={false}
            interval={20000}
          />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CustomGallery;
