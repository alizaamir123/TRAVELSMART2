import React from "react";
import { useLocation } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function HeaderCarousel() {
  const location = useLocation();

  const getPageHeading = () => {
    const path = location.pathname;

    switch (path) {
      case "/about":
        return "Discover More About Us";
      case "/services":
        return "Explore Our Services";
      case "/contact":
        return "Get In Touch With Us";
      default:
        return null; // Homepage
    }
  };

  const heading = getPageHeading();

  return (
    <div className="header-wrapper position-relative">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showArrows={false}
        interval={6000}
        className="carousel-bg"
      >
        <div>
          <img src="/img/carousel1.jpg" alt="Slide 1" />
        </div>
        <div>
          <img src="/img/carousel2.jpg" alt="Slide 2" />
        </div>
        <div>
          <img src="/img/carousel3.jpg" alt="Slide 3" />
        </div>
      </Carousel>

      <div className="overlay">
        <div className="container py-5 text-center text-white">
          {heading ? (
            <h1 className="page-heading display-5 fw-bold">{heading}</h1>
          ) : (
            <div className="home-text">
              <h1 className="main-title mb-3 fw-bold">Explore the World with Ease</h1>
              <p className="lead tagline">Personalized trips for every budget</p>
              <p className="lead tagline">Let us help you plan unforgettable adventures</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default HeaderCarousel;
