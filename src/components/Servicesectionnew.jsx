import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function Servicesectionnew() {
  return (
    <>
    <div className="container-fluid py-5 service">
      <div className="container py-5">
        <div className="text-center mx-auto mb-5" style={{ maxWidth: "700px" }}>
          <h4 className="text-primary fw-bold">Our Services</h4>
          <h1 className="display-6 fw-semibold text-dark">
            Explore Our Best Travel Services
          </h1>
        </div>

        <div className="row g-4">
          {/* Card 1 */}
          <div className="col-lg-4 col-md-6">
            <div className="service-item rounded-4 bg-white shadow-sm h-100 overflow-hidden">
              <div className="service-img overflow-hidden rounded-top">
                <img
                  src="/img/service1.jpg"
                  className="img-fluid w-100 zoom-img"
                  alt="Service 1"
                />
              </div>
              <div className="p-4">
                <h5 className="fw-bold text-dark">Luxury Hotel Booking</h5>
                <p className="text-muted mb-0">
                  Book premium hotels with exclusive discounts and offers.
                </p>
              </div>
              <div className="p-3">
                <Link
                  to="/service/1"
                  className="btn btn-outline-primary rounded-pill py-2 px-4 w-100"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-lg-4 col-md-6">
            <div className="service-item rounded-4 bg-white shadow-sm h-100 overflow-hidden">
              <div className="service-img overflow-hidden rounded-top">
                <img
                  src="/img/service2.jpg"
                  className="img-fluid w-100 zoom-img"
                  alt="Service 2"
                />
              </div>
              <div className="p-4">
                <h5 className="fw-bold text-dark">Flight Ticket Booking</h5>
                <p className="text-muted mb-0">
                  Book domestic and international flights with ease.
                </p>
              </div>
              <div className="p-3">
                <Link
                  to="/service/2"
                  className="btn btn-outline-primary rounded-pill py-2 px-4 w-100"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-lg-4 col-md-6">
            <div className="service-item rounded-4 bg-white shadow-sm h-100 overflow-hidden">
              <div className="service-img overflow-hidden rounded-top">
                <img
                  src="/img/service3.jpg"
                  className="img-fluid w-100 zoom-img"
                  alt="Service 3"
                />
              </div>
              <div className="p-4">
                <h5 className="fw-bold text-dark">Tour Packages</h5>
                <p className="text-muted mb-0">
                  Enjoy special tour packages to your favorite destinations.
                </p>
              </div>
              <div className="p-3">
                <Link
                  to="/service/3"
                  className="btn btn-outline-primary rounded-pill py-2 px-4 w-100"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="col-lg-4 col-md-6">
            <div className="service-item rounded-4 bg-white shadow-sm h-100 overflow-hidden">
              <div className="service-img overflow-hidden rounded-top">
                <img
                  src="/img/service4.jpg"
                  className="img-fluid w-100 zoom-img"
                  alt="Service 4"
                />
              </div>
              <div className="p-4">
                <h5 className="fw-bold text-dark">Car Rentals</h5>
                <p className="text-muted mb-0">
                  Rent luxury cars for city travel or long trips.
                </p>
              </div>
              <div className="p-3">
                <Link
                  to="/service/4"
                  className="btn btn-outline-primary rounded-pill py-2 px-4 w-100"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>

          {/* Card 5 */}
          <div className="col-lg-4 col-md-6">
            <div className="service-item rounded-4 bg-white shadow-sm h-100 overflow-hidden">
              <div className="service-img overflow-hidden rounded-top">
                <img
                  src="/img/service5.jpg"
                  className="img-fluid w-100 zoom-img"
                  alt="Service 5"
                />
              </div>
              <div className="p-4">
                <h5 className="fw-bold text-dark">Cruise Trips</h5>
                <p className="text-muted mb-0">
                  Luxury cruise experiences across the globe.
                </p>
              </div>
              <div className="p-3">
                <Link
                  to="/service/5"
                  className="btn btn-outline-primary rounded-pill py-2 px-4 w-100"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>

          {/* Card 6 */}
          <div className="col-lg-4 col-md-6">
            <div className="service-item rounded-4 bg-white shadow-sm h-100 overflow-hidden">
              <div className="service-img overflow-hidden rounded-top">
                <img
                  src="/img/service6.jpg"
                  className="img-fluid w-100 zoom-img"
                  alt="Service 6"
                />
              </div>
              <div className="p-4">
                <h5 className="fw-bold text-dark">Visa Assistance</h5>
                <p className="text-muted mb-0">
                  Hassle-free visa processing for all countries.
                </p>
              </div>
              <div className="p-3">
                <Link
                  to="/service/6"
                  className="btn btn-outline-primary rounded-pill py-2 px-4 w-100"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
                  </>
  );
}
