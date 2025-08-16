

function Footer () {

  return (
    <>
      {/* Footer Start */}
      <div className="container-fluid footer py-5" data-aos="fade-in" data-aos-delay="200">
        <div className="container py-5">
          <div className="row g-5">
            {/* Newsletter */}
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <h4 className="text-white mb-4">Newsletter</h4>
                <p className="mb-3 text-white">
                  Dolor amet sit justo amet elitr clita ipsum elitr est. Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  consectetur adipiscing elit.
                </p>
                <div className="position-relative mx-auto rounded-pill">
                  <input
                    className="form-control rounded-pill w-100 py-3 ps-4 pe-5"
                    type="text"
                    placeholder="Enter your email"
                  />
                  <button
                    type="button"
                    className="btn btn-primary rounded-pill position-absolute top-0 end-0 py-2 mt-2 me-2"
                  >
                    SignUp
                  </button>
                </div>
              </div>
            </div>

            {/* Explore Links */}
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <h4 className="text-white mb-4">Explore</h4>
                {[
                  'Home',
                  'Services',
                  'About Us',
                  'Latest Projects',
                  'Testimonial',
                  'Our Team',
                  'Contact Us',
                ].map((item, i) => (
                  <a href="#" className="text-white text-decoration-none" key={i}>
                    <i className="fas fa-angle-right me-2 text-white"></i> {item}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <h4 className="text-white mb-4">Contact Info</h4>
                <a href="#" className="text-white text-decoration-none"><i className="fa fa-map-marker-alt me-2 text-white text-decoration-none"></i> 123 Street, New York, USA</a>
                <a href="#" className="text-white text-decoration-none"><i className="fas fa-envelope me-2 text-white text-decoration-none"></i> info@example.com</a>
                <a href="#" className="text-white text-decoration-none"><i className="fas fa-envelope me-2 text-white text-decoration-none"></i> info@example.com</a>
                <a href="#" className="text-white text-decoration-none"><i className="fas fa-phone me-2 text-white text-decoration-none"></i> +012 345 67890</a>
                <a href="#" className="mb-3 text-white text-decoration-none"><i className="fas fa-print me-2 text-white text-decoration-none"></i> +012 345 67890</a>

                <div className="d-flex align-items-center">
                  {['facebook-f', 'twitter', 'instagram', 'linkedin-in'].map((icon, i) => (
                    <a key={i} className="btn btn-light btn-md-square me-2 " href="#">
                      <i className={`fab fa-${icon}`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Popular Posts */}
          <div className="col-md-6 col-lg-6 col-xl-3">
  <div className="footer-item-post d-flex flex-column">
    <h4 className="text-white mb-4">Popular Post</h4>
    <div className="d-flex flex-column mb-3">
      <p className="text-uppercase text-primary mb-2 text-white">Investment</p>
      <a href="#" className="text-white text-decoration-none">Revisiting Your Investment & Distribution Goals</a>
    </div>
    <div className="d-flex flex-column mb-3">
      <p className="text-uppercase text-primary mb-2 text-white">Business</p>
      <a href="#" className="text-white text-decoration-none">Dimensional Fund Advisors Interview with Director</a>
    </div>
    <div className="footer-btn text-start">
      <a href="#" className="btn btn-light rounded-pill px-4">
        View All Post <i className="fa fa-arrow-right ms-1"></i>
      </a>
    </div>
  </div>
</div>

          </div>
        </div>
      </div>
      {/* Footer End */}


    </>
  );
};

export default Footer;
