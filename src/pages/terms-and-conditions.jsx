import React from "react";
import PageBanner from "../components/sections/pageBanner";
import { TermsAndConditionsContent } from "../components/sections/policies/terms-and-conditions-content/terms-and-conditions-content";

const TermsAndConditions = () => {
  return (
    <main>
      <PageBanner
        bgImage={"/images/banner/contact-banner.jpg"}
        breadcrumbTitle={"Terms And Conditions"}
      />
      <div style={{ maxWidth: "1400px", margin: "auto", padding: "8rem 2rem" }}>
        <TermsAndConditionsContent />
      </div>
    </main>
  );
};

export default TermsAndConditions;
