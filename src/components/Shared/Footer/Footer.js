import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [categories, setCategories] = useState([]);
  const [footerAbout, setFooterAbout] = useState([]);
  const [footerAddress, setFooterAddress] = useState([]);
  const [footerSocial, setFooterSocial] = useState([]);
  const [footerCopyright, setFooterCopyright] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/categories`)
      .then((res) => res.json())
      .then((info) => setCategories(info));
  }, [categories]);

  useEffect(() => {
    fetch(`http://localhost:5000/footer-about`)
      .then((res) => res.json())
      .then((info) => setFooterAbout(info));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:5000/footer-address`)
      .then((res) => res.json())
      .then((info) => setFooterAddress(info));
  }, [footerAddress]);

  useEffect(() => {
    fetch(`http://localhost:5000/footer-social`)
      .then((res) => res.json())
      .then((info) => setFooterSocial(info));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:5000/footer-copyright`)
      .then((res) => res.json())
      .then((info) => setFooterCopyright(info));
  }, [footerCopyright]);

  return (
    <>
      <footer
        className="footer-bg footer-p fix"
        style={{
          backgroundImage: "url(img/bg/footer-bg.png)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="footer-top pt-70 pb-40">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-3 col-sm-12">
                <div className="footer-widget mb-30">
                  <img src="img/logo/f_logo.png" alt="img" />
                </div>
              </div>
              <div className="col-xl-7 col-lg-7 col-sm-12">
                <div className="footer-widget footer-link mt-20 text-center">
                  <ul>
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li>
                      <a href="about.html"> About Us</a>
                    </li>
                    <li>
                      <a href="services.html"> Courses </a>
                    </li>
                    <li>
                      <a href="contact.html"> Events</a>
                    </li>
                    <li>
                      <a href="blog.html">Blog </a>
                    </li>
                    <li>
                      <a href="blog.html">Contact Us </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-sm-12">
                <div className="footer-widget footer-social mt-15 text-right text-xl-right">
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-center pt-70 pb-40">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-xl-3 col-lg-3 col-sm-6">
                <div className="footer-widget mb-30">
                  <div className="f-widget-title">
                    <h2>About Us</h2>
                  </div>
                  <div className="footer-link">
                    Cras faucibus ornare ipsum, non luctus leo imperdiet sit
                    amet. Praesent egestas orci eu risus iaculis luctus.
                    Phasellus maximus orci metus. Nullam enim ex, facilisis at
                    lacinia sed, luctus vitae dolor.
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-sm-6">
                <div className="footer-widget mb-30">
                  <div className="f-widget-title">
                    <h2>Contact Us</h2>
                  </div>
                  <div className="f-contact">
                    <ul>
                      <li>
                        <i className="icon fal fa-map-marker-check" />
                        <span>
                          1247/Plot No. 39, 15th Phase, <br />
                          LHB Colony, Kanpur
                        </span>
                      </li>
                      <li>
                        <i className="icon fal fa-phone" />
                        <span>
                          1800-121-3637
                          <br />
                          +91-7052-101-786
                        </span>
                      </li>
                      <li>
                        <i className="icon fal fa-envelope" />
                        <span>
                          <a href="mailto:info@example.com">info@example.com</a>
                          <br />
                          <a href="mailto:help@example.com">help@example.com</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-sm-6">
                <div className="footer-widget mb-30">
                  <div className="f-widget-title">
                    <h2>Our Services</h2>
                  </div>
                  <div className="footer-link">
                    <ul>
                      <li>
                        <a href="index.html">Home</a>
                      </li>
                      <li>
                        <a href="about.html"> About Us</a>
                      </li>
                      <li>
                        <a href="services.html"> Services </a>
                      </li>
                      <li>
                        <a href="contact.html"> Contact Us</a>
                      </li>
                      <li>
                        <a href="blog.html">Blog </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-sm-6">
                <div className="footer-widget mb-30">
                  <div className="f-widget-title">
                    <h2>Our Gallery</h2>
                  </div>
                  <div className="f-insta">
                    <ul>
                      <li>
                        <a
                          href="img/instagram/f-galler-01.png"
                          className="popup-image"
                        >
                          <img src="img/instagram/f-galler-01.png" alt="img" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="img/instagram/f-galler-02.png"
                          className="popup-image"
                        >
                          <img src="img/instagram/f-galler-02.png" alt="img" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="img/instagram/f-galler-03.png"
                          className="popup-image"
                        >
                          <img src="img/instagram/f-galler-03.png" alt="img" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="img/instagram/f-galler-04.png"
                          className="popup-image"
                        >
                          <img src="img/instagram/f-galler-04.png" alt="img" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-wrap">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                Copyright © 2021 Luxia. All rights reserved.
              </div>
              <div className="col-lg-6 text-right text-xl-right">
                <ul>
                  <li>
                    <a href="#">Privercy</a>
                  </li>
                  <li>
                    <a href="#">Term &amp; Conditions</a>
                  </li>
                  <li>
                    <a href="#">Legal</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
