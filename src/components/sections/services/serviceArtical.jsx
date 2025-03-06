import React from "react";
import ServiceSidebar from "./serviceSidebar";

const ServiceArtical = (props) => {
  const { serviceDetail } = props;
  const {
    bannerImage,
    detailOne,
    detailTwo,
    listOne,
    imageOne,
    imageTwo,
    detailThree,
  } = serviceDetail ?? {};
  return (
    <section className="service-single section-padding">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-8">
            <div className="left-item">
              <div className="image">
                <img src={bannerImage} alt="image" />
              </div>
              <h3 className="text-capitalize mt-40 mb-30">
                We ensure best service
              </h3>
              <p>{detailOne}</p>
              <p className="mt-30 mb-40">{detailTwo}</p>
              <ul>
                <li>
                  <span></span> {listOne?.[0]}
                </li>
                <li>
                  <span></span> {listOne?.[1]}
                </li>
                <li>
                  <span></span> {listOne?.[2]}
                </li>
              </ul>
              <ul className="mt-30 mb-40">
                <li>
                  <span></span>
                  {listOne?.[3]}
                </li>
                <li>
                  <span></span> {listOne?.[4]}
                </li>
                <li>
                  <span></span> {listOne?.[5]}
                </li>
              </ul>
              <h3 className="text-capitalize mb-30">Modern Service Standard</h3>
              <div className="row g-4">
                <div className="col-md-6">
                  <div className="image">
                    <img src={imageOne} alt="image" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="image">
                    <img src={imageTwo} alt="image" />
                  </div>
                </div>
              </div>
              <p className="mt-3">{detailThree}</p>
            </div>
          </div>
          <div className="col-lg-4">
            <ServiceSidebar />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceArtical;
