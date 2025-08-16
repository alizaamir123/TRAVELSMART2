

const teamMembers = [
  {
    name: 'Mark D. Brock',
    role: 'CEO & Founder',
    image: 'img/team-1.jpg',
    delay: 100,
  },
  {
    name: 'Mark D. Brock',
    role: 'CEO & Founder',
    image: 'img/team-2.jpg',
    delay: 300,
  },
  {
    name: 'Mark D. Brock',
    role: 'CEO & Founder',
    image: 'img/team-3.jpg',
    delay: 500,
  },
  {
    name: 'Mark D. Brock',
    role: 'CEO & Founder',
    image: 'img/team-4.jpg',
    delay: 700,
  },
];

function TeamSection () {

  return (
    <div className="container-fluid team pb-5">
      <div className="container pb-5">
        <div
          className="text-center mx-auto pb-5"
          data-aos="fade-up"
          data-aos-delay="100"
          style={{ maxWidth: '800px' }}
        >
          <h4 className="text-primary fw-bold">Our Team</h4>
          <h1 className="display-6 fw-semibold text-dark">Our Travel Company Dedicated Team Member</h1>
        </div>

        <div className="row g-4 justify-content-center">
          {teamMembers.map((member, index) => (
            <div
              className="col-sm-6 col-md-6 col-lg-4 col-xl-3"
              data-aos="fade-up"
              data-aos-delay={member.delay}
              key={index}
            >
              <div className="team-item rounded">
                <div className="team-img position-relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="img-fluid w-100 rounded-top"
                  />

                </div>

                <div className="team-content bg-light text-center rounded-bottom p-4">
                  <div className="team-content-inner rounded-bottom">
                    <h4 className="text-dark">{member.name}</h4>
                    <p className="text-muted mb-0">{member.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
