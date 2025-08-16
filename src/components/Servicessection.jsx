import React from "react";

function Services() {
  const services = [
    {
      img: "booking.jpg",
      title: "Flight Booking",
      desc: "Affordable and quick flight booking services across the globe.",
    },
    {
      img: "assistant.jpg",
      title: "Hotel Reservation",
      desc: "Top-rated hotels at the best prices tailored for your comfort.",
    },
    {
      img: "package.jpg",
      title: "Tour Packages",
      desc: "Explore customized packages for solo, family or group adventures.",
    },
  ]; 

  return (
    <div className="container-fluid py-5 service">
      <div className="container py-5">
        {/* Heading */}
        <div className="text-center mx-auto mb-5" style={{ maxWidth: "700px" }}>
          <h4 className="text-primary fw-bold">Our Services</h4>
          <h1 className="display-6 fw-semibold text-dark">
            Explore Our Best Travel Services
          </h1>
        </div>

        {/* Services Grid */}
        <div className="row g-4">
          {services.map((service, i) => (
            <div className="col-lg-4 col-md-6" key={i}>
              <div className="service-item rounded-4 bg-white shadow-sm h-100 overflow-hidden">
                <div className="service-img overflow-hidden rounded-top">
                  <img
                    src={`/img/${service.img}`}
                    className="img-fluid w-100 zoom-img"
                    alt={service.title}
                  />
                </div>
                <div className="p-4">
                  <h5 className="fw-bold text-dark">{service.title}</h5>
                  <p className="text-muted mb-0">{service.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Button */}
        <div className="text-center mt-5">
          <a
            className="btn btn-outline-primary rounded-pill py-3 px-5 shadow-sm"
            href="#"
          >
            Discover More
          </a>
        </div>
      </div>
    </div>
  );
}

export default Services;
