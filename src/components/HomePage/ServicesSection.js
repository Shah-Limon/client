import React from "react";

const ServicesSection = () => {
  return (
    <div>
      <section
        id="services"
        className="services-area pb-90 fix"
        style={{
          backgroundImage: "url(img/bg/services-bg-aliments.png)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 col-md-12">
              <div className="about-title second-atitle pb-20">
                <h5>Services</h5>
                <h2>What We Provide To You</h2>
                <p>
                  Pellentesque fringilla, massa sit amet feugiat mollis, leo
                  turpis elementum justo, vel consequat ex urna ut massa
                  maecenas justo sapien.
                </p>
              </div>
              <div className="slider-btn mt-10">
                <a
                  href="services.html"
                  className="btn ss-btn"
                  data-animation="fadeInRight"
                  data-delay=".8s"
                >
                  View All Services
                </a>
              </div>
            </div>
            <div className="col-lg-8 col-md-12">
              <div className="row">
                <div className="col-lg-4 col-md-6">
                  <div
                    className="services-box wow fadeInDown animated"
                    data-delay=".5s"
                  >
                    <div className="services-icon">
                      <img src="img/icon/pv-icon1.png" alt="icon01" />
                    </div>
                    <div className="services-content2">
                      <h5>
                        <a href="services-detail.html">Skilled Lecturers</a>
                      </h5>
                      <p>
                        Cras ornare sagittis tortor a facilisis nteger augue
                        quam, placerat.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div
                    className="services-box wow fadeInDown animated"
                    data-delay=".5s"
                  >
                    <div className="services-icon">
                      <img src="img/icon/pv-icon2.png" alt="icon01" />
                    </div>
                    <div className="services-content2">
                      <h5>
                        <a href="services-detail.html">Hot Stone Message</a>
                      </h5>
                      <p>
                        Cras ornare sagittis tortor a facilisis nteger augue
                        quam, placerat.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div
                    className="services-box wow fadeInDown animated"
                    data-delay=".5s"
                  >
                    <div className="services-icon">
                      <img src="img/icon/pv-icon3.png" alt="icon01" />
                    </div>
                    <div className="services-content2">
                      <h5>
                        <a href="services-detail.html">Book Library</a>
                      </h5>
                      <p>
                        Cras ornare sagittis tortor a facilisis nteger augue
                        quam, placerat.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div
                    className="services-box wow fadeInDown animated"
                    data-delay=".5s"
                  >
                    <div className="services-icon">
                      <img src="img/icon/pv-icon4.png" alt="icon01" />
                    </div>
                    <div className="services-content2">
                      <h5>
                        <a href="services-detail.html">Online Classes</a>
                      </h5>
                      <p>
                        Cras ornare sagittis tortor a facilisis nteger augue
                        quam, placerat.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div
                    className="services-box wow fadeInDown animated"
                    data-delay=".5s"
                  >
                    <div className="services-icon">
                      <img src="img/icon/pv-icon5.png" alt="icon01" />
                    </div>
                    <div className="services-content2">
                      <h5>
                        <a href="services-detail.html">Home Projects</a>
                      </h5>
                      <p>
                        Cras ornare sagittis tortor a facilisis nteger augue
                        quam, placerat.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div
                    className="services-box wow fadeInDown animated"
                    data-delay=".5s"
                  >
                    <div className="services-icon">
                      <img src="img/icon/pv-icon6.png" alt="icon01" />
                    </div>
                    <div className="services-content2">
                      <h5>
                        <a href="services-detail.html">24x7 Support</a>
                      </h5>
                      <p>
                        Cras ornare sagittis tortor a facilisis nteger augue
                        quam, placerat.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesSection;
