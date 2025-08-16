function About() {
  return (
    <div className="container-fluid about py-5">
      <div className="container py-5">
        <div className="row g-5 align-items-center">
          {/* Image Section */}
          <div className="col-lg-6 col-xl-5" data-aos="fade-right" data-aos-delay="100">
            <div className="about-img rounded-4 overflow-hidden shadow-sm d-flex flex-column gap-2">
              <img
                src="img/teamwork.jpg"
                className="img-fluid w-100 rounded-top bg-white zoom-img"
                alt="About Top"
              />
              <img
                src="img/destination.jpg"
                className="img-fluid w-100 rounded-bottom zoom-img"
                alt="About Bottom"
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="col-lg-6 col-xl-7" data-aos="fade-left" data-aos-delay="300">
            <h4 className="text-primary fw-bold">About Us</h4>
            <h1 className="display-6 fw-semibold text-dark mb-4">
              The most Profitable Travel Company Worldwide
            </h1>
            <p className="text-start position-relative ps-4 border-start border-3 border-primary mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores atque nihil unde quisquam, deleniti illo a.
            </p>

            {/* Features List */}
            <div className="row g-4 justify-content-between mb-5">
              <div className="col-lg-6 col-xl-5">
                <p className="text-dark">
                  <i className="fas fa-check-circle text-primary me-2"></i> Strategy & Consulting
                </p>
                <p className="text-dark mb-0">
                  <i className="fas fa-check-circle text-primary me-2"></i> Business Process
                </p>
              </div>
              <div className="col-lg-6 col-xl-7">
                <p className="text-dark">
                  <i className="fas fa-check-circle text-primary me-2"></i> Marketing Rules
                </p>
                <p className="text-dark mb-0">
                  <i className="fas fa-check-circle text-primary me-2"></i> Partnerships
                </p>
              </div>
            </div>

            {/* Button and Customers */}
            <div className="row g-4 justify-content-between mb-5">
              <div className="col-xl-5">
                <a href="#" className="btn btn-outline-primary rounded-pill py-3 px-5 shadow-sm">
                  Discover More
                </a>
              </div>
              <div className="col-xl-7 mb-5">
                <div className="about-customer d-flex position-relative">
                  {["1", "2", "3", "1"].map((img, i) => (
                    <img
                      key={i}
                      src={`img/customer-img-${img}.jpg`}
                      className="img-fluid rounded-circle position-absolute border border-white shadow"
                      style={{
                        left: i * 45,
                        top: 0,
                        width: "45px",
                        height: "45px",
                        objectFit: "cover",
                      }}
                      alt={`Customer ${i + 1}`}
                    />
                  ))}
                  <div className="position-absolute text-dark" style={{ left: 220, top: 8 }}>
                    <p className="mb-0 fw-semibold">5m+ Trusted</p>
                    <p className="mb-0 text-muted small">Global Customers</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Section */}
            <div className="row g-4 text-center align-items-center justify-content-center">
              <div className="col-sm-4">
                <div className="bg-primary-light rounded-4 p-4 shadow-sm">
                  <h2 className="text-primary fw-bold mb-1">32k+</h2>
                  <p className="text-muted mb-0">Projects Completed</p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="bg-white border rounded-4 p-4 shadow-sm">
                  <h2 className="text-dark fw-bold mb-1">21+</h2>
                  <p className="text-muted mb-0">Years of Experience</p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="bg-primary-light rounded-4 p-4 shadow-sm">
                  <h2 className="text-primary fw-bold mb-1">97+</h2>
                  <p className="text-muted mb-0">Team Members</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;







