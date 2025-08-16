function BlogSection() {
  const blogPosts = [
    {
      category: 'Investment',
      date: 'Mar 14, 2024',
      author: 'Mark D. Brock',
      image: 'img/blog-1.jpg',
      lightboxId: 'blog-1',
      title: 'Revisiting Your Investment & Distribution Goals',
      delay: 100,
    },
    {
      category: 'Business',
      date: 'Mar 14, 2024',
      author: 'Mark D. Brock',
      image: 'img/blog-2.jpg',
      lightboxId: 'blog-2',
      title: 'Dimensional Fund Advisors Interview with Director',
      delay: 300,
    },
    {
      category: 'Consulting',
      date: 'Mar 14, 2024',
      author: 'Mark D. Brock',
      image: 'img/blog-3.jpg',
      lightboxId: 'blog-3',
      title: 'Interested in Giving Back this year? Here are some tips',
      delay: 500,
    },
  ];

  return (
    <div className="container-fluid blog pb-5">
      <div className="container pb-5">
        <div
          className="text-center mx-auto pb-5"
          data-aos="fade-up"
          data-aos-delay="100"
          style={{ maxWidth: '800px' }}
        >
          <h4 className="text-primary fw-bold">Our Blogs</h4>
          <h1 className="display-6 fw-semibold text-dark">
            Latest Articles & News from the Blogs
          </h1>
        </div>

        <div className="row g-4 justify-content-center">
          {blogPosts.map((post, index) => (
            <div
              className="col-md-6 col-lg-6 col-xl-4"
              key={index}
              data-aos="fade-up"
              data-aos-delay={post.delay}
            >
              <div
                className="blog-item bg-white rounded-4 shadow-sm p-4"
              >
                {/* Category and Meta */}
                <div className="mb-4">
                  <h5 className="text-primary mb-2 fw-semibold">{post.category}</h5>
                  <div className="d-flex justify-content-between small text-muted">
                    <p className="mb-0">
                      <span className="text-dark fw-semibold">On</span> {post.date}
                    </p>
                    <p className="mb-0">
                      <span className="text-dark fw-semibold">By</span> {post.author}
                    </p>
                  </div>
                </div>

                {/* Blog Image with Hover Icon */}
                <div className="project-img position-relative overflow-hidden rounded-3 mb-4">
                  <img
                    src={post.image}
                    className="img-fluid w-100 rounded"
                    alt="Blog"
                  />
                  <div className="blog-plus-icon">
                    <a
                      href={post.image}
                      data-lightbox={post.lightboxId}
                      className="btn btn-primary btn-md-square rounded-pill"
                    >
                      <i className="fas fa-plus fa-1x"></i>
                    </a>
                  </div>
                </div>

                {/* Title and Button */}
                <div className="mb-3">
                  <a href="#" className="h5 text-decoration-none text-dark fw-semibold">
                    {post.title}
                  </a>
                </div>
                <a className="btn btn-outline-primary rounded-pill py-2 px-4" href="#">
                  Explore More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogSection;
