import React from "react";
import Navbar from "../../components/navBar";
import Banner from "../../components/banner";
import SolidImage from "../../components/Solid-image/SolidImage";
import Video from "../../components/Video/Video";
import "./home.css";
// import ReactPlayer from "react-player";
import img1 from "../../components/media/main1.jpg";
import img2 from "../../components/media/main2.jpg";
import img3 from "../../components/media/main3.jpg";
import img4 from "../../components/media/main4.jpg";
import img5 from "../../components/media/main5.jpg";
import image from "../../components/media/website bg-03.png";

const Home = () => {
  const bannerSlides = [
    {
      imgSrc: img1,
      alt: "event",
      overlayContent: (
        <div className="overlay">
          <h1>All That's Left To Me</h1>
        </div>
      ),
    },
    {
      imgSrc: img2,
      alt: "event",
      overlayContent: (
        <div className="overlay">
          <ul>
            <li>
              <i className="bi bi-clock"></i>
              <p>5:30 PM</p>
            </li>
            <li>
              <i className="bi bi-calendar2-week"></i>
              <p>2024/10/15</p>
            </li>
            <li>
              <i className="bi bi-geo-alt"></i>
              <p>Italy - Milano</p>
            </li>
          </ul>
        </div>
      ),
    },
    {
      imgSrc: img3,
      alt: "event",
      overlayContent: <div className="overlay"></div>,
    },
    {
      imgSrc: img4,
      alt: "event",
      overlayContent: <div className="overlay"></div>,
    },
    {
      imgSrc: img5,
      alt: "event",
      overlayContent: <div className="overlay"></div>,
    },
  ];
  return (
    <>
      <Navbar />
      <Banner slides={bannerSlides} interval={5000} />
      <div className="content_container">
        <SolidImage
          img={image}
            text="All that's left to me is a play about Home in different points of view.
                  Odysseus, Telemachus, Penelope, Calypso, and Antinos everyone of them
                  sees home in a different way, like we all do."
        />
        <Video />
      </div>
    </>
  );
};

export default Home;
