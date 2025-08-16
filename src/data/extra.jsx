import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function TripPlanPage() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [mainTrip, setMainTrip] = useState(state);
  const [relatedCities, setRelatedCities] = useState([]);

  useEffect(() => {
    if (state) {
      setMainTrip(state);

      const getCountryKey = (dest) => dest?.toLowerCase().trim();
      const citySuggestions = {
        default: ['Capital City', 'Beach Town', 'Historic Village', 'Mountain Area'],
        pakistan: ['Lahore', 'Karachi', 'Murree', 'Skardu'],
        turkey: ['Istanbul', 'Cappadocia', 'Antalya', 'Izmir'],
        france: ['Paris', 'Nice', 'Lyon', 'Marseille'],
        italy: ['Rome', 'Venice', 'Florence', 'Milan'],
      };

      const allCities = citySuggestions[getCountryKey(state.destination)] || citySuggestions.default;

      // Remove current destination
      const filteredCities = allCities.filter(
        (city) => city.toLowerCase() !== state.destination.toLowerCase()
      );
      setRelatedCities(filteredCities);
    }
  }, [state]);

  if (!mainTrip) return <div className="container py-5 text-center">No Trip Plan Found</div>;

  const { destination, activity, budget, duration, date } = mainTrip;

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

  const handleCityClick = (clickedCity) => {
    const newRelated = [...relatedCities.filter((city) => city !== clickedCity), destination];
    setMainTrip({
      destination: clickedCity,
      activity,
      budget,
      duration,
      date,
    });
    setRelatedCities(newRelated);
    window.scrollTo(0, 0); // Optional: Scroll to top when trip is updated
  };

  return (
    <div className="container-fluid py-5">
      <div className="container py-4">
        <div className="bg-white rounded shadow p-5" data-aos="zoom-in">
          <div className="text-center mb-4">
            <h2 className="text-primary mb-3">Trip Plan to {destination}</h2>
            <p className="text-muted">
              <strong>Trip Start Date:</strong> {formattedTripDate} <br />
              <strong>Activity:</strong> {activity} <br />
              <strong>Budget Level:</strong> {budget} <br />
              <strong>Duration:</strong> {duration} <br />
              <strong>Estimated Cost:</strong> ${totalCost}
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

        {/* Related Cities Section */}
        {relatedCities.length > 0 && (
          <div className="mt-5">
            <h3 className="text-primary mb-4 text-center">Explore More Cities</h3>
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
                        onClick={() => handleCityClick(city)}
                      >
                        View Plan
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default TripPlanPage;
