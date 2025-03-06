import React from "react";
import { FaGear, FaPlay } from "react-icons/fa6";
import SectionTitle from "../../ui/sectionTitle";
import SlideLeft from "../../../utils/animations/slideLeft";
import SlideRight from "../../../utils/animations/slideRight";

const ServiceFive = (props) => {
  const { serviceDetail } = props;
  const { benefitTitle, description, benefits, benefitImage } =
    serviceDetail ?? {};
  return (
    <section className="page-about page-service-single sub-bg section-padding">
      <div className="container">
        <div className="row g-4 align-items-center">
          <div className="col-lg-7">
            <div className="right-item">
              <SectionTitle className={"mb-5"}>
                <SectionTitle.Name>SERVICE BENEFITS</SectionTitle.Name>
                <SectionTitle.Title>{benefitTitle}</SectionTitle.Title>
                <SectionTitle.Description>
                  {description}
                </SectionTitle.Description>
              </SectionTitle>

              <div className="row g-4">
                <SlideLeft className="col-sm-6">
                  <ul>
                    <li>
                      <span className="mb-4 me-2 primary-color">
                        <FaGear />
                      </span>{" "}
                      {benefits?.[0]}
                    </li>
                    <li>
                      <span className="mb-4 me-2 primary-color">
                        <FaGear />
                      </span>{" "}
                      {benefits?.[1]}
                    </li>
                    <li>
                      <span className="mb-4 me-2 primary-color">
                        <FaGear />
                      </span>{" "}
                      {benefits?.[2]}
                    </li>
                    <li>
                      <span className="mb-4 me-2 primary-color">
                        <FaGear />
                      </span>{" "}
                      {benefits?.[3]}
                    </li>
                  </ul>
                </SlideLeft>
                <SlideRight className="col-sm-6">
                  <ul>
                    <li>
                      <span className="mb-4 me-2 primary-color">
                        <FaGear />
                      </span>{" "}
                      {benefits?.[4]}
                    </li>
                    <li>
                      <span className="mb-4 me-2 primary-color">
                        <FaGear />
                      </span>{" "}
                      {benefits?.[5]}
                    </li>
                    <li>
                      <span className="mb-4 me-2 primary-color">
                        <FaGear />
                      </span>{" "}
                      {benefits?.[6]}
                    </li>
                    <li>
                      <span className="mb-4 me-2 primary-color">
                        <FaGear />
                      </span>{" "}
                      {benefits?.[7]}
                    </li>
                  </ul>
                </SlideRight>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="image">
              <img src={benefitImage} alt="image" />
              <div className="video-btn-wrp d-none d-sm-block">
                {/* <div className="video video-pulse">
                  <a className="video-popup secondary-bg" href="#">
                    <i className="fa-solid fa-play">
                      <FaPlay />
                    </i>
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceFive;
