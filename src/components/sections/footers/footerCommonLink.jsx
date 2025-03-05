import React, { useState } from "react";
import {
  FaEnvelope,
  FaLocationArrow,
  FaLocationDot,
  FaPhoneVolume,
  FaPlus,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import { footerGalleryImages } from "../../../utils/fackData/footerGalleryImages";
import ImagePopup from "../../ui/imagePopup";
import SlideUp from "../../../utils/animations/slideUp";

const FooterCommonLink = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openSlider = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeSlider = () => {
    setIsOpen(false);
  };

  return (
    <>
      <SlideUp delay={2} className="col-lg-3 col-md-6">
        <div className="item g-4">
          <div className="title">
            <h4>Official info</h4>
          </div>
          <ul>
            <li>
              <Link to="#0">
                <i className="pe-1 text-white">
                  <FaLocationDot />
                </i>{" "}
                Doha Qatar
              </Link>
              {/* <Link to="#0" className="map-popup">
                View Map{" "}
                <i>
                  <FaLocationArrow />
                </i>
              </Link> */}
            </li>
            <li>
              <Link to="tel:+4065550120">
                <i className="pe-1 text-white">
                  <FaPhoneVolume />
                </i>{" "}
                +974 74758881
              </Link>
            </li>
            <li>
              <Link to="#0">
                <i className="pe-1 text-white">
                  <FaEnvelope />
                </i>{" "}
                info@brickmond.com
              </Link>
            </li>
          </ul>
        </div>
      </SlideUp>
      <SlideUp delay={3} className="col-lg-3 col-md-6">
        <div className="item">
          <div className="title">
            <h4>main menu</h4>
          </div>
          <div className="row g-2">
            <div className="col-6">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about-us">About Us</Link>
                </li>
                <li>
                  <Link to="/services">Services</Link>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
                <li>
                  <Link to="/privacy-policy">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/terms-and-conditions">Terms and conditions</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </SlideUp>
      <SlideUp delay={4} className="col-lg-3 col-md-6">
        <div className="item gallery">
          <div className="title">
            <h4>Company Gallery</h4>
          </div>
          <div className="row g-2">
            {footerGalleryImages.map(({ id, src }, index) => (
              <Card key={id} src={src} index={index} openSlider={openSlider} />
            ))}
          </div>
        </div>
      </SlideUp>
      <ImagePopup
        images={footerGalleryImages}
        isOpen={isOpen}
        onClose={closeSlider}
        currentIndex={currentIndex}
      />
    </>
  );
};

export default FooterCommonLink;

const Card = ({ src, index, openSlider }) => {
  return (
    <div className="col-4">
      <div
        onClick={() => openSlider(index)}
        className="footer-popup image d-block"
      >
        <img src={src} alt="image" />
        <div className="icon">
          <i className="fa-solid fa-plus">
            <FaPlus />
          </i>
        </div>
      </div>
    </div>
  );
};
