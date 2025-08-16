
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const HeaderCarousel = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      interval={5000}
      transitionTime={800}
      emulateTouch
      stopOnHover={false}
      swipeable
    >
      {/* Slide 1 */}
      <div className="header-carousel-item">
        <div className="header-carousel-item-img">
          <img src="img/dino-reichmuth-A5rCN8626Ck-unsplash.jpg" alt="Slide 1" className="img-fluid w-100" />
        </div>
        <div className="carousel-caption">
          <div className="carousel-caption-inner text-start p-3">
            <h1 className="display-1 text-capitalize fw-bold text-white mb-4 animate__animated animate__fadeInUp">
              The most prestigious Travel company in worldwide.
            </h1>
            <p className="mb-5 fs-5 animate__animated animate__fadeInUp fw-bold">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
            <a className="btn btn-primary rounded-pill py-3 px-5 mb-4 me-4 animate__animated animate__fadeInUp" href="#">
              Apply Now
            </a>
            <a className="btn btn-dark rounded-pill py-3 px-5 mb-4 animate__animated animate__fadeInUp" href="#">
              Read More
            </a>
          </div>
        </div>
      </div>

      {/* Slide 2 */}
      <div className="header-carousel-item">
        <div className="header-carousel-item-img">
          <img src="img/mesut-kaya-eOcyhe5-9sQ-unsplash.jpg" alt="Slide 2" className="img-fluid w-100" />
        </div>
        <div className="carousel-caption">
          <div className="carousel-caption-inner text-center p-3">
            <h1 className="display-1 text-capitalize text-white mb-4 fw-bold">
              The most prestigious Travel company in worldwide.
            </h1>
            <p className="mb-5 fs-5 fw-bold">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
            <a className="btn btn-primary rounded-pill py-3 px-5 mb-4 me-4" href="#">
              Apply Now
            </a>
            <a className="btn btn-dark rounded-pill py-3 px-5 mb-4" href="#">
              Read More
            </a>
          </div>
        </div>
      </div>

      {/* Slide 3 */}
      <div className="header-carousel-item">
        <div className="header-carousel-item-img">
          <img src="img/philipp-kammerer-6Mxb_mZ_Q8E-unsplash.jpg" alt="Slide 3" className="img-fluid w-100" />
        </div>
        <div className="carousel-caption">
          <div className="carousel-caption-inner text-end p-3">
            <h1 className="display-1 text-capitalize text-white mb-4 fw-bold">
              The most prestigious Travel company in worldwide.
            </h1>
            <p className="mb-5 fs-5 fw-bold">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
            <a className="btn btn-primary rounded-pill py-3 px-5 mb-4 me-4" href="#">
              Apply Now
            </a>
            <a className="btn btn-dark rounded-pill py-3 px-5 mb-4" href="#">
              Read More
            </a>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default HeaderCarousel;
