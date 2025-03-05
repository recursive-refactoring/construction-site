import React from "react";
import PageBanner from "../components/sections/pageBanner";
import ServiceArtical from "../components/sections/services/serviceArtical";
import ServiceFive from "../components/sections/services/serviceFive";
import { useParams } from "react-router";
import { serviceDetailsData } from "../utils/fackData/serviceDetailsData";

const ServiceDetails = () => {
  const { id } = useParams();
  const serviceDetail = serviceDetailsData?.[id];

  return (
    <main>
      <PageBanner
        breadcrumbMain={"Our Services"}
        breadcrumbMainLink={"/services"}
        breadcrumbTitle={serviceDetail?.title}
      />
      <ServiceArtical serviceDetail={serviceDetail} />
      <ServiceFive serviceDetail={serviceDetail} />
    </main>
  );
};

export default ServiceDetails;
