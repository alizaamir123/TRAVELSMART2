import React, { useState, useRef, useEffect } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { activityOptions, budgetOptions, durationOptions } from "../data/dropdownOptions";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Servicesectionnew from "../components/Servicesectionnew";

function TripPlanner() {
  const [formData, setFormData] = useState({
    destination: null,
    duration: null,
    activity: null,
    budget: null,
  });

  const [tripData, setTripData] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const tripPlanRef = useRef(null);
  const countryOptions = countryList().getData();

  const handleChange = (field, selectedOption) => {
    setFormData((prev) => ({
      ...prev,
      [field]: selectedOption,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check for empty dropdowns
    if (!formData.destination || !formData.duration || !formData.activity || !formData.budget) {
      setShowToast(true);
      return;
    }

    // Set trip data and scroll
    const trip = {
      destination: formData.destination?.label,
      duration: formData.duration?.label,
      activity: formData.activity?.label,
      budget: formData.budget?.label,
    };

    setTripData(trip);

    setTimeout(() => {
      if (tripPlanRef.current) {
        tripPlanRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // slight delay to allow render
  };

  const customSelectStyles = {   control: (base, state) => ({
    ...base,
    backgroundColor: "white",
    borderColor: "#ced4da",
    minHeight: "44px",
    height: "44px",
    boxShadow: "none",
    fontSize: "1rem",
    borderRadius: "0.375rem",
    display: "flex",
    alignItems: "center",
    paddingLeft: "10px",
  }),
  valueContainer: (base) => ({
    ...base,
    height: "44px",
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
  }),
  placeholder: (base, state) => ({
    ...base,
    textAlign: "center",
    width: "100%",
    marginLeft: "0",
    marginRight: "0",
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    color: "#6c757d",
  }),
  indicatorsContainer: (base) => ({
    ...base,
    height: "44px",
    display: "flex",
    alignItems: "center",
  }),
  dropdownIndicator: (base) => ({
    ...base,
    padding: "0 8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
  menu: (base) => ({
    ...base,
    zIndex: 9999,
  }),
  option: (base, state) => ({
    ...base,
    backgroundColor: state.isSelected
      ? "#e9ecef"
      : state.isFocused
      ? "#f8f9fa"
      : "white",
    color: "#212529",
    fontSize: "1rem",
  }),
  singleValue: (base) => ({
    ...base,
    display: "flex",
    alignItems: "center",
    height: "100%",
    paddingLeft: "2px",
  }), };

  const renderTripPlan = () => {
    if (!tripData) return null;

    const { destination, activity, budget, duration } = tripData;

    const tripStartDate = new Date();
    tripStartDate.setDate(tripStartDate.getDate() + 2);
    const formattedTripDate = tripStartDate.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    const budgetPerDay = { Low: 100, Medium: 200, High: 400 };
    const totalCost = budgetPerDay[budget] * (parseInt(duration) || 1);

    const itinerary = Array.from({ length: parseInt(duration) || 1 }, (_, index) => {
      const day = index + 1;
      let plan = '';
      if (day === 1) plan = `Arrival in ${destination}`;
      else if (day === parseInt(duration)) plan = 'Departure';
      else if (day === 2) plan = `${activity} Activities`;
      else if (day % 2 === 0) plan = 'City Exploration';
      else plan = 'Relax & Shopping';
      return { day, plan };
    });

    const citySuggestions = {
      default: ['Capital City', 'Beach Town', 'Historic Village', 'Mountain Area'],
      pakistan: ['Lahore', 'Karachi', 'Murree', 'Skardu'],
      turkey: ['Istanbul', 'Cappadocia', 'Antalya', 'Izmir'],
      france: ['Paris', 'Nice', 'Lyon', 'Marseille'],
      italy: ['Rome', 'Venice', 'Florence', 'Milan'],
    };

    const getCountryKey = (dest) => dest?.toLowerCase().trim();
    const relatedCities = citySuggestions[getCountryKey(destination)] || citySuggestions.default;

    return (
      <div ref={tripPlanRef} className="container-fluid py-5">
        <div className="container py-4">
          <div className="bg-white rounded shadow p-5" data-aos="zoom-in">
            <div className="text-center mb-4">
              <h2 className="text-primary mb-3">Trip Plan to {destination}</h2>
              <p className="text-muted">
                <strong>Trip Start Date:</strong> {formattedTripDate} <br />
                <strong>Activity:</strong> {activity} <br />
                <strong>Budget Level:</strong> {budget} <br />
                <strong>Duration:</strong> {duration} <br />
              </p>
            </div>

            <div className="row g-4">
              <div className="col-md-6">
                <img
                  src={`/images/${destination.toLowerCase()}.jpg`}
                  alt={destination}
                  className="img-fluid rounded shadow"
                />
              </div>

              <div className="col-md-6">
                <h4 className="mb-3">Sample Itinerary</h4>
                <ul className="list-group">
                  {itinerary.map(({ day, plan }) => (
                    <li key={day} className="list-group-item">
                      Day {day}: {plan}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Related Cities */}
          <div className="mt-5">
            <h3 className="text-primary mb-4 text-center">Explore More in {destination}</h3>
            <div className="row g-4">
              {relatedCities.map((city, index) => (
                <div
                  className="col-md-6 col-lg-3"
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="card h-100 shadow rounded">
                    <img
                      src={`/images/${city.toLowerCase()}.jpg`}
                      className="card-img-top"
                      alt={city}
                      style={{ height: '180px', objectFit: 'cover' }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{city}</h5>
                      <p className="card-text">
                        Enjoy {activity} activities in {city} within your {budget} budget.
                      </p>
                      <button
                        className="btn btn-outline-primary rounded-pill mt-1 mx-5 py-1 px-4"
                        onClick={() =>
                          setTripData({ destination: city, activity, budget, duration })
                        }
                      >
                        View Plan
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <Navbar />

      {/* Toast Alert */}
      <div
        className={`toast-container position-fixed top-0 end-0 p-3`}
        style={{ zIndex: 9999 }}
      >
        <div
          className={`toast align-items-center text-white bg-danger ${showToast ? "show" : ""}`}
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
          onAnimationEnd={() => setShowToast(false)}
        >
          <div className="d-flex">
            <div className="toast-body">
              Please fill all dropdown fields before submitting the form.
            </div>
            <button
              type="button"
              className="btn-close btn-close-white me-2 m-auto"
              onClick={() => setShowToast(false)}
              aria-label="Close"
            ></button>
          </div>
        </div>
      </div>

      {/* Header and Form */}
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
          <div><img src="/img/carousel1.jpg" alt="Slide 1" /></div>
          <div><img src="/img/carousel2.jpg" alt="Slide 2" /></div>
          <div><img src="/img/carousel3.jpg" alt="Slide 3" /></div>
        </Carousel>

        <div className="overlay">
          <div className="container py-5 text-center">
            <h3 className="hero-heading">Plan Your Dream Trip</h3>
            <div className="row justify-content-center">
              <div className="col-md-10">
                <div className="form-container p-4">
                  <form onSubmit={handleSubmit} className="row g-3">
                    <div className="col-md-3">
                      <label className="form-label">Destination</label>
                      <Select
                        options={countryOptions}
                        value={formData.destination}
                        onChange={(selected) => handleChange("destination", selected)}
                        placeholder="Select country"
                        styles={customSelectStyles}
                      />
                    </div>
                    <div className="col-md-3">
                      <label className="form-label">Duration</label>
                      <Select
                        options={durationOptions}
                        value={formData.duration}
                        onChange={(selected) => handleChange("duration", selected)}
                        placeholder="Select days"
                        styles={customSelectStyles}
                      />
                    </div>
                    <div className="col-md-3">
                      <label className="form-label">Activity</label>
                      <Select
                        options={activityOptions}
                        value={formData.activity}
                        onChange={(selected) => handleChange("activity", selected)}
                        placeholder="Select activity"
                        styles={customSelectStyles}
                      />
                    </div>
                    <div className="col-md-3">
                      <label className="form-label">Budget</label>
                      <Select
                        options={budgetOptions}
                        value={formData.budget}
                        onChange={(selected) => handleChange("budget", selected)}
                        placeholder="Select budget"
                        styles={customSelectStyles}
                      />
                    </div>
                    <div className="col-12 text-center">
                      <button
                        className="btn btn-outline-primary rounded-pill mt-2 py-2 px-5 shadow-sm"
                        type="submit"
                      >
                        Get Trip Plan
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {renderTripPlan()}
<Servicesectionnew />
      <Footer />
    </>
  );
}

export default TripPlanner;
