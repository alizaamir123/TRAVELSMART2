

function Testimonial() {
  return (
    <div className="container-fluid testimonial py-5">
      <div className="container py-5">
        <div className="row g-4 align-items-center">
          <div className="col-xl-4" data-aos="fade-left" data-aos-delay="100">
            <div className="h-100 rounded shadow p-4 bg-white">
              <h4 className="text-primary fw-bold">Our Feedbacks</h4>
              <h1 className="display-6 fw-semibold text-dark">Clients are Talking</h1>
              <p className="mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum atque soluta unde itaque. Consequatur quam odit blanditiis harum veritatis porro.
              </p>
              <a className="btn btn-outline-primary rounded-pill py-2 px-4" href="#">
                Read All Reviews <i className="fas fa-arrow-right ms-2"></i>
              </a>
            </div>
          </div>
          <div className="col-xl-8">
            <div className="testimonial-carousel owl-carousel" data-aos="fade-up" data-aos-delay="100">
              {[
                { img: "img/testimonial-1.jpg", name: "Person Name", profession: "Profession" },
                { img: "img/testimonial-2.jpg", name: "Person Name", profession: "Profession" },
                { img: "img/testimonial-3.jpg", name: "Person Name", profession: "Profession" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="testimonial-item bg-white rounded p-4 shadow-sm transition-zoom"
                  data-aos="fade-up"
                  data-aos-delay={300 + index * 200}
                >
                  <div className="d-flex">
                    <i className="fas fa-quote-left fa-3x text-dark me-3"></i>
                    <p className="mt-4">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam eos impedit eveniet dolorem culpa ullam incidunt vero quo recusandae nemo? Molestiae doloribus iure.
                    </p>
                  </div>
                  <div className="d-flex justify-content-end align-items-center">
                    <div className="text-end">
                      <h5>{item.name}</h5>
                      <p className="mb-0">{item.profession}</p>
                    </div>
                    <div className="bg-white rounded-circle ms-3">
                      <img
                        src={item.img}
                        className="rounded-circle p-2 border border-primary"
                        style={{ width: '80px', height: '80px' }}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
