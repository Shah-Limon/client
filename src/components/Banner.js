import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  const [topBanners, setTopBanners] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/top-banner`)
      .then((res) => res.json())
      .then((info) => setTopBanners(info));
  }, []);

  return (
    <>
      <section id="home" className="slider-area slider-four fix p-relative">
        <div className="slider-active">
          <div
            className="single-slider slider-bg d-flex align-items-center"
            style={{
              background: "url(img/slider/slider_img_bg.png) no-repeat",
              backgroundPosition: "center center",
            }}
          >
            <div className="container">
              <div className="row justify-content-center pt-50 pb-150">
                <div className="col-lg-7">
                  <div className="slider-content s-slider-content mt-200">
                    <h2 data-animation="fadeInUp" data-delay=".4s">
                      Start Learning With Us Now!
                    </h2>
                    <p data-animation="fadeInUp" data-delay=".6s">
                      Cras faucibus ornare ipsum, non luctus leo imperdiet sit
                      amet. Praesent egestas orci eu risus iaculis luctus.
                      Phasellus maximus orci metus.
                    </p>
                    <div
                      className="subricbe"
                      data-animation="fadeInDown"
                      data-delay=".4s"
                    >
                      <form
                        action="news-mail.php"
                        method="post"
                        className="contact-form"
                      >
                        <label>
                          <i className="icon fal fa-envelope" /> Email Address
                        </label>
                        <input
                          type="text"
                          id="email2"
                          name="email2"
                          className="header-input"
                          placeholder="Your Email Address..."
                          required
                        />
                        <button className="btn header-btn">
                          Subscribe Now
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div
                    className="slider-img"
                    data-animation="fadeInUp"
                    data-delay=".4s"
                  >
                    <img src="img/slider/slider_img05.png" alt="slider_img05" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
