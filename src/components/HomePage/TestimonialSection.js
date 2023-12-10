import React from "react";

const TestimonialSection = () => {
  const divStyle = {
    backgroundImage: "url(img/testimonial/test-bg-aliments.png)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundColor: "#fff7f5",
  };

  return (
    <>
      <section class="testimonial-area pt-120 pb-120" style={divStyle}>
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div class="about-title second-atitle pt-15">
                <h5>Testimonial</h5>
                <h2>
                  See What Our <br />
                  Client Says
                </h2>
                <p class="pt-15">
                  Curabitur tristique, sem id sagittis varius, lacus ligula
                  mollis dui, ac condimentum felis metus ut nulla. Aenean ut
                  ultricies turpis, sed sollicitudin eros. Aliquam quis dui ut
                  diam lobortis dignissim ut aliquet ex.
                </p>
              </div>
            </div>

            <div class="col-lg-6">
              <div class="testimonial-active">
                <div class="single-testimonial">
                  <div class="testi-author">
                    <img src="img/testimonial/testi_avatar.png" alt="img" />
                    <div class="ta-info">
                      <h6>Eity Akhter</h6>
                      <span>Student</span>
                    </div>
                  </div>
                  <div class="qt-img">
                    <img src="img/testimonial/qt-icon.png" alt="img" />
                  </div>
                  <p>
                    Etiam quis lacinia ipsum. Aliquam blandit, mauris nec
                    molestie interdum, quam massa finibus turpis, ut eleifend
                    tellus massa eget nunc. Maecenas luctus diam id augue
                    fringilla ornare. Sed varius massa non sem rutrum malesuada.
                  </p>
                </div>
                <div class="single-testimonial">
                  <div class="testi-author">
                    <img src="img/testimonial/testi_avatar.png" alt="img" />
                    <div class="ta-info">
                      <h6>Margie R. Robinson</h6>
                      <span>Web Developer</span>
                    </div>
                  </div>
                  <div class="qt-img">
                    <img src="img/testimonial/qt-icon.png" alt="img" />
                  </div>
                  <p>
                    Etiam quis lacinia ipsum. Aliquam blandit, mauris nec
                    molestie interdum, quam massa finibus turpis, ut eleifend
                    tellus massa eget nunc. Maecenas luctus diam id augue
                    fringilla ornare. Sed varius massa non sem rutrum malesuada.
                  </p>
                </div>
                <div class="single-testimonial">
                  <div class="testi-author">
                    <img src="img/testimonial/testi_avatar.png" alt="img" />
                    <div class="ta-info">
                      <h6>Margie R. Robinson</h6>
                      <span>Web Developer</span>
                    </div>
                  </div>
                  <div class="qt-img">
                    <img src="img/testimonial/qt-icon.png" alt="img" />
                  </div>
                  <p>
                    Etiam quis lacinia ipsum. Aliquam blandit, mauris nec
                    molestie interdum, quam massa finibus turpis, ut eleifend
                    tellus massa eget nunc. Maecenas luctus diam id augue
                    fringilla ornare. Sed varius massa non sem rutrum malesuada.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialSection;
