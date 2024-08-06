import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
const Footer = () => {
  const [mapVisible, setMapVisible] = useState(false);

  const location = { lat: 40.7128, lng: -74.006 }; // New York koordinatalari
  return (
    <>
      <div className="footer">
        <div className="footer-container">
          <div className="footer-main">
            <ol className="footer-main-list">
              <li className="fot-begin">
                <div className="footer-logo">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/icons/icon.svg`}
                    alt="rasm"
                  />
                  <span className="footer-logo-text">
                    Grow <span>Be</span>
                  </span>
                </div>
                <p className="fot-begin-desc">
                  Distinctively exploit optimal alignments for intuitive
                  bandwidth. Quickly coordinate business through revolutionary.
                </p>

                <div className="social-networks-wrapper">
                  <a href="#">
                    <i class="facebook fa-brands fa-facebook-f"></i>
                  </a>
                  <a href="#">
                    <i class="twitter fa-brands fa-twitter"></i>
                  </a>
                  <a href="##">
                    <i class="linkedin fa-brands fa-linkedin-in"></i>
                  </a>
                  <a href="#">
                    <i class="google fa-brands fa-google"></i>
                  </a>
                </div>
              </li>
              <li className="company">
                <h2 className="company-heading">Our Company</h2>
                <ol className="company-list">
                  <a href="#">
                    <li>
                      <span></span> About Us
                    </li>
                  </a>
                  <a href="#">
                    <li>
                      <span></span> Our Services
                    </li>
                  </a>
                  <a href="#">
                    <li>
                      <span></span> Our Plan
                    </li>
                  </a>
                  <a href="#">
                    <li>
                      <span></span> Our Team
                    </li>
                  </a>
                  <a href="#">
                    <li>
                      <span></span> Latest News
                    </li>
                  </a>
                </ol>
              </li>
              <li className="services">
                <h2 className="services-heading">Our Services</h2>
                <ol className="services-list">
                  <a href="#">
                    <li>
                      <span></span> Digital Marketing
                    </li>
                  </a>
                  <a href="#">
                    <li>
                      <span></span> SEO Optimazation
                    </li>
                  </a>
                  <a href="#">
                    <li>
                      <span></span> Web Development
                    </li>
                  </a>
                  <a href="#">
                    <li>
                      <span></span> Link Building
                    </li>
                  </a>
                  <a href="#">
                    <li>
                      <span></span> Terms & Privacy
                    </li>
                  </a>
                </ol>
              </li>
              <li className="contact-us">
                <h2 className="contact-us-heading">Contact Us</h2>
                <div className="contact-main-wrapper">
                  <div className="location">
                    <div>
                      <div className="address">
                        <a
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            setMapVisible(!mapVisible);
                          }}
                        >
                          <span className="location-text">Location:</span> 1370
                          Orvilly Rot APT, New York, USA
                        </a>
                      </div>

                      {mapVisible && (
                        <LoadScript
                          googleMapsApiKey="YOUR_API_KEY" // Google Maps API kalitingizni shu yerga qo'ying
                        >
                          <GoogleMap
                            mapContainerStyle={{
                              height: "200px",
                              width: "100%",
                              position: "absolute",
                              zIndex: "10",
                              marginRight: "10px",
                            }}
                            center={location}
                            zoom={20}
                          >
                            <Marker position={location} />
                          </GoogleMap>
                        </LoadScript>
                      )}
                    </div>
                  </div>
                  <div className="email">
                    <p className="email-text">Email:</p>
                    <a href="mailto:growbeinfo@gmail">growbeinfo@gmail</a>
                  </div>
                  <div className="tel">
                    <p className="tel-text">Phone</p>
                    <a href="tel:+32493325018">+324-9332-5018</a>
                  </div>
                </div>
              </li>
            </ol>
          </div>
          <hr className="footer-hr" />
          <div className="footer-bottom">
            <p className="footer-bottom-desc">
              Copyright © GrowBe 2021. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
