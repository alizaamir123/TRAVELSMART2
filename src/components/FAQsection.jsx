function FAQ() {
  return (
    <div className="container-fluid faq-section-custom py-5">
      <div className="container py-5">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6" data-aos="fade-left" data-aos-delay="100">
            <div className="pb-5">
              <h4 className="text-primary fw-bold">FAQs</h4>
              <h1 className="display-6 fw-semibold text-dark">Get the Answers to Common Questions</h1>
            </div>

            <div className="accordion bg-white shadow-sm rounded p-4" id="accordionExample">
              {[
                {
                  id: "One",
                  question: "What Does a Financial Advisor Do?",
                },
                {
                  id: "Two",
                  question: "What industries do you specialize in?",
                },
                {
                  id: "Three",
                  question: "Can you guarantee growth?",
                },
                {
                  id: "Four",
                  question: "What makes your business plans so special?",
                },
              ].map((item, index) => (
                <div className="accordion-item border-0 mb-4" key={index}>
                  <h2 className="accordion-header" id={`heading${item.id}`}>
                    <button
                      className={`accordion-button fs-5 fw-bold rounded-top text-dark ${
                        index !== 0 ? "collapsed" : ""
                      }`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse${item.id}`}
                      aria-expanded={index === 0 ? "true" : "false"}
                      aria-controls={`collapse${item.id}`}
                    >
                      {item.question}
                    </button>
                  </h2>
                  <div
                    id={`collapse${item.id}`}
                    className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
                    aria-labelledby={`heading${item.id}`}
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body my-2">
                      <h5 className="text-primary fw-bold">Dolor sit amet consectetur adipisicing elit.</h5>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nemo impedit, sapiente quis illo quia nulla atque
                        maxime fuga minima ipsa quae cum consequatur, sit, delectus exercitationem odit officiis maiores! Neque, quidem
                        corrupti modi architecto eos saepe incidunt dignissimos rerum.
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-right" data-aos-delay="300">
            <div className="faq-img position-relative rounded overflow-hidden shadow-sm">
              <img src="img/faq-img.jpg" className="img-fluid rounded w-100" alt="FAQ" />
              <a className="faq-btn btn rounded-pill text-white py-3 px-5" href="#">
                Read More Q & A <i className="fas fa-arrow-right ms-2"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
