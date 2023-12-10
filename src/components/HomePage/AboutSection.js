import React from "react";

const AboutSection = () => {
  return (
    <>
      <section
        id="about"
        className="about-area about-p pt-70 pb-120 p-relative"
        style={{
          background: "url(img/features/about-bg-aliments.png) no-repeat",
          backgroundPosition: "center center",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 col-sm-12 pr-30">
              <div
                className="s-about-img p-relative wow fadeInLeft animated"
                data-animation="fadeInLeft"
                data-delay=".4s"
              >
                <img src="img/features/about_img.png" alt="img" />
                <div className="about-text second-about">
                  <div className="all-text">
                    <h3>50</h3>
                    <span>
                      years of <br />
                      experience
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div
                className="about-content s-about-content wow fadeInRight animated"
                data-animation="fadeInRight"
                data-delay=".4s"
              >
                <div className="about-title second-atitle pb-25">
                  <h5>About</h5>
                  <h2>Welcome To Online Class Educato</h2>
                </div>
                <p>
                  Curabitur tristique, sem id sagittis varius, lacus ligula
                  mollis dui, ac condimentum felis metus ut nulla. Aenean ut
                  ultricies turpis, sed sollicitudin eros. Aliquam quis dui ut
                  diam lobortis dignissim ut aliquet ex.
                </p>
                <div className="about-content3">
                  <div className="row">
                    <div className="col-md-12">
                      <ul className="green">
                        <li>
                          Nulla pellentesque posuere metus, sed hendrerit purus
                          venenatis in. Sed at vestibulum magna.
                        </li>
                        <li>
                          Etiam quis lacinia ipsum. Aliquam blandit, mauris nec
                          molestie interdum, quam massa finibus turpis, ut
                          eleifend tellus massa eget nunc.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="slider-btn mt-10">
                  <a
                    href="about.html"
                    className="btn ss-btn"
                    data-animation="fadeInRight"
                    data-delay=".8s"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
