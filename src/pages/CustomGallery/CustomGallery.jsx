import React, { useState } from "react";
import Navbar from "../../components/navBar";
import Modal from "react-bootstrap/Modal";
import LazyImage from "../../components/LazyImg/LazyImage";
import Banner from "../../components/banner";
import "./gallery.css";

//imgaes

const CustomGallery = () => {
  const images = [
    "https://mdbootstrap.com/img/Photos/Others/images/76.jpg",
    "https://mdbootstrap.com/img/Photos/Others/images/75.jpg",
    "https://mdbootstrap.com/img/Photos/Others/images/74.jpg",
    "https://mdbootstrap.com/img/Photos/Others/images/72.jpg",
    "https://mdbootstrap.com/img/Photos/Others/images/71.jpg",
    "https://mdbootstrap.com/img/Photos/Others/images/70.jpg",
    "https://mdbootstrap.com/img/Photos/Others/images/68.jpg",
    "https://mdbootstrap.com/img/Photos/Others/images/67.jpg",
    "https://mdbootstrap.com/img/Photos/Others/images/66.jpg",
    "https://mdbootstrap.com/img/Photos/Others/images/65.jpg",
    "https://mdbootstrap.com/img/Photos/Others/images/64.jpg",
    "https://mdbootstrap.com/img/Photos/Others/images/63.jpg",
    "https://mdbootstrap.com/img/Photos/Others/images/62.jpg",
    "https://mdbootstrap.com/img/Photos/Others/images/61.jpg",
    "https://mdbootstrap.com/img/Photos/Others/images/60.jpg",
    "https://mdbootstrap.com/img/Photos/Others/images/59.jpg",
    "https://mdbootstrap.com/img/Photos/Others/images/58.jpg",
  ];

  const imageObjects = images.map((url) => ({
    imgSrc: url,
  }));

  const [lgShow, setLgShow] = useState(false);
  const [index, setIndex] = useState(0);

  const handleSelect = (index, e) => {
    setIndex(index);
    setLgShow(true);
    console.log("modal is opened");
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
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Body>
          <Banner
            slides={imageObjects}
            activeIndex={index}
            onSelect={handleSelect}
            style={{ marginBottom: "0px" }}
          />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CustomGallery;
