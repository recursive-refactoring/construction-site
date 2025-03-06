import React from "react";
import FooterCommonLink from "./footerCommonLink";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa6";
import SlideUp from "../../../utils/animations/slideUp";

const FooterOne = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer-one secondary-bg">
      <div className="map">
        <img src="/images/footer/map.png" alt="map" />
      </div>
      <div className="container">
        <div className="footer_one_top position-relative d-flex flex-wrap align-items-center justify-content-between pt-65 pb-65">
          <div className="logo">
            <a href="#0">
              <img src="/images/logo/footer-logo.svg" alt="logo" />
            </a>
          </div>
          <div className="social-icon mt-sm-0">
            <a href="#0">
              <i>
                <FaFacebookF />
              </i>
            </a>
            <a href="#0">
              <i>
                <FaTwitter />
              </i>
            </a>
            <a href="#0">
              <i>
                <FaLinkedinIn />
              </i>
            </a>
            <a href="#0">
              <i>
                <FaInstagram />
              </i>
            </a>
          </div>
        </div>
        <div className="bor-top position-relative">
          <div className="row g-4">
            <SlideUp className="col-lg-3 col-md-6">
              <div className="item">
                <div className="title">
                  <h4>About Company</h4>
                </div>
                <p>
                  Delivering innovative refractory construction & mechanical
                  solutions with precision, reliability, and a vision for a
                  sustainable future.
                </p>
              </div>
            </SlideUp>
            <FooterCommonLink />
          </div>
        </div>
        <div className="copyright">
          <p>
            Copyright © {year} <strong>Brick Mond Construction </strong>
            <span>| All Rights Reserved.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterOne;
