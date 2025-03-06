import React from "react";
import { FaEnvelope, FaLocationDot, FaPhone } from "react-icons/fa6";
import CustomSelect from "../ui/customSelect";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const options = [
  { value: "account", label: "Account" },
  { value: "service", label: "Service" },
  { value: "pricing", label: "Pricing" },
  { value: "support", label: "Support" },
];

const ContactForm = () => {
  const submitForm = (e) => {
    e.preventDefault();
    toast.success("Your message is submitted successfully");
  };
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
                  <Link to="JavaScript:void(0)">
                    <i>
                      <FaLocationDot />
                    </i>
                    Doha Qatar{" "}
                  </Link>
                </li>
                <li>
                  <Link to="tel:+97474758881">
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
              <form onSubmit={submitForm}>
                <input required type="text" placeholder="Name" />
                <input required type="email" placeholder="Email" />
                <CustomSelect
                  options={options}
                  placeholder="Select a Subject"
                />
                <textarea
                  required
                  name="Your Review"
                  id="massage"
                  placeholder="Message..."
                ></textarea>
                <div className="radio-btn mt-3">
                  <span></span>
                  <p>I accept your terms & conditions</p>
                </div>
                <button type="submit" className="mt-40">
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
