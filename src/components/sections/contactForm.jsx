import React from "react";
import { FaEnvelope, FaLocationDot, FaPhone } from "react-icons/fa6";
import CustomSelect from "../ui/customSelect";
import { Link } from "react-router-dom";

const options = [
  { value: "account", label: "Account" },
  { value: "service", label: "Service" },
  { value: "pricing", label: "Pricing" },
  { value: "support", label: "Support" },
];

const ContactForm = () => {
  return (
    <section className="contact section-padding">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-6">
            <div className="content bg-image">
              <h2>
                We are here to assist you with your construction needs. Get in
                touch with us today!
              </h2>
              <div className="arry">
                <img src="/images/icon/arry.png" alt="" />
              </div>
              <ul>
                <li>
                  <Link
                    to="https://www.google.com/maps/d/viewer?mid=1UZ57Drfs3SGrTgh6mrYjQktu6uY&amp;hl=en_US&amp;ll=18.672105000000013%2C105.68673800000003&amp;z=17"
                    target="_blank"
                  >
                    <i>
                      <FaLocationDot />
                    </i>
                    Doha Qatar{" "}
                  </Link>
                </li>
                <li>
                  <Link>
                    <i>
                      <FaPhone />
                    </i>
                    +974 74758881
                  </Link>
                </li>
                <li>
                  <Link to="mailto:info@brickmond.com">
                    <i>
                      <FaEnvelope />
                    </i>
                    info@brickmond.com
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-area">
              <form action="#0">
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <CustomSelect
                  options={options}
                  placeholder="Select a Subject"
                />
                <textarea
                  name="Your Review"
                  id="massage"
                  placeholder="Message..."
                ></textarea>
                <div className="radio-btn mt-3">
                  <span></span>
                  <p>I accept your terms & conditions</p>
                </div>
                <button className="mt-40">
                  Submit Now <i className="fa-solid fa-arrow-right-long"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
