import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cart from "./Cart";

const NavBar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/categories`)
      .then((res) => res.json())
      .then((info) => setCategories(info));
  }, []);
  return (
    <>
      <div>
        <header className="header-area header-three">
          <div id="header-sticky" className="menu-area">
            <div className="container">
              <div className="second-menu">
                <div className="row align-items-center">
                  <div className="col-xl-2 col-lg-2">
                    <div className="logo">
                      <a href="index.html">
                        <img src="img/logo/logo.png" alt="logo" />
                      </a>
                    </div>
                  </div>
                  <div className="col-xl-8 col-lg-8">
                    <div className="main-menu text-right text-xl-right">
                      <nav id="mobile-menu" style={{ display: "block" }}>
                        <ul>
                          <li className="sub">
                            <a href="index.html">Home</a>
                          </li>
                          <li>
                            <a href="about.html">About Us</a>
                          </li>
                          <li className="sub">
                            <a href="courses.html">Courses</a>
                            <ul>
                              <li>
                                <a href="courses.html">Courses</a>
                              </li>
                              <li>
                                <a href="courses-details.html">
                                  Courses Details
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="sub">
                            <a href="events.html">Events</a>
                            <ul>
                              <li>
                                <a href="events.html">Events</a>
                              </li>
                              <li>
                                <a href="events-details.html">Events Details</a>
                              </li>
                            </ul>
                          </li>
                          <li className="sub">
                            <a href="#">Pages</a>
                            <ul>
                              <li>
                                <a href="projects.html">Gallery</a>
                              </li>
                              <li>
                                <a href="projects-detail.html">
                                  Gallery Details
                                </a>
                              </li>
                              <li>
                                <a href="pricing.html">Pricing</a>
                              </li>
                              <li>
                                <a href="team.html">Team</a>
                              </li>
                              <li>
                                <a href="faq.html">Faq</a>
                              </li>
                              <li>
                                <a href="shop.html">Shop</a>
                              </li>
                              <li>
                                <a href="shop-details.html">Shop Details</a>
                              </li>
                            </ul>
                          </li>
                          <li className="sub">
                            <a href="blog.html">News</a>
                            <ul>
                              <li>
                                <a href="blog.html">News</a>
                              </li>
                              <li>
                                <a href="blog-details.html">News Details</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="contact.html">Contact</a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                  <div className="col-xl-2 col-lg-2 text-right d-none d-xl-block mt-30 mb-30">
                    <div className="search-top2">
                      <ul>
                        <li>
                          <a href="#" className="menu-tigger">
                            <i className="fas fa-search" />
                          </a>
                        </li>
                        <li>
                          <a href="#" className="menu-tigger">
                            <img src="img/icon/menu.png" alt="logo" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="mobile-menu" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="offcanvas-menu">
          <span className="menu-close">
            <i className="fas fa-times" />
          </span>
          <form
            role="search"
            method="get"
            id="searchform"
            className="searchform"
            action="http://wordpress.zcube.in/xconsulta/"
          >
            <input
              type="text"
              name="s"
              id="search"
              defaultValue
              placeholder="Search"
            />
            <button>
              <i className="fa fa-search" />
            </button>
          </form>
          <div id="cssmenu3" className="menu-one-page-menu-container">
            <ul id="menu-one-page-menu-2" className="menu">
              <li className="menu-item menu-item-type-custom menu-item-object-custom">
                <a href="index.html">Home</a>
              </li>
              <li className="menu-item menu-item-type-custom menu-item-object-custom">
                <a href="about.html">About Us</a>
              </li>
              <li className="menu-item menu-item-type-custom menu-item-object-custom">
                <a href="services.html">Services</a>
              </li>
              <li className="menu-item menu-item-type-custom menu-item-object-custom">
                <a href="pricing.html">Pricing </a>
              </li>
              <li className="menu-item menu-item-type-custom menu-item-object-custom">
                <a href="team.html">Team </a>
              </li>
              <li className="menu-item menu-item-type-custom menu-item-object-custom">
                <a href="projects.html">Gallery Study</a>
              </li>
              <li className="menu-item menu-item-type-custom menu-item-object-custom">
                <a href="blog.html">Blog</a>
              </li>
              <li className="menu-item menu-item-type-custom menu-item-object-custom">
                <a href="contact.html">Contact</a>
              </li>
            </ul>
          </div>
          <div id="cssmenu2" className="menu-one-page-menu-container">
            <ul id="menu-one-page-menu-1" className="menu">
              <li className="menu-item menu-item-type-custom menu-item-object-custom">
                <a href="#home">
                  <span>+8 12 3456897</span>
                </a>
              </li>
              <li className="menu-item menu-item-type-custom menu-item-object-custom">
                <a href="#howitwork">
                  <span>info@example.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="offcanvas-overly" />
      </div>
    </>
  );
};

export default NavBar;
