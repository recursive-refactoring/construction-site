import React from "react";
import { Link } from "react-router-dom";
import SlideUp from "../../utils/animations/slideUp";

const PageBanner = ({
  breadcrumbTitle,
  breadcrumbMainLink,
  breadcrumbMain,
  className,
  bgImage,
}) => {
  return (
    <section
      className="page-banner bg-image section-padding"
      style={{ backgroundImage: `url${bgImage}` }}
    >
      <div className="gaps-right d-none d-sm-block float-bob-x">
        <img src="/images/shape/gaps-primary.png" alt="img" />
      </div>
      <div className="gaps-left d-none d-sm-block float-bob-x">
        <img src="/images/shape/gaps-primary.png" alt="img" />
      </div>
      <div className="container">
        <SlideUp>
          {" "}
          <h2>{breadcrumbTitle}</h2>{" "}
        </SlideUp>
        <SlideUp delay={2} className="breadcrumb-list">
          <Link to="/">Home :</Link>{" "}
          {breadcrumbMainLink ? (
            <Link to={breadcrumbMainLink}>{breadcrumbMain} :</Link>
          ) : (
            <span>{breadcrumbMain}</span>
          )}{" "}
          <span>{breadcrumbTitle}</span>
        </SlideUp>
      </div>
    </section>
  );
};

export default PageBanner;
