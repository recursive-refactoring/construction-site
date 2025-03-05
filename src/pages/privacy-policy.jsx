import React from "react";
import PageBanner from "../components/sections/pageBanner";
import { PrivacyPolicyContent } from "../components/sections/policies/privacy-policy-content/privacy-policy-content";

const PrivacyPolicy = () => {
  return (
    <main>
      <PageBanner
        bgImage={"/images/banner/contact-banner.jpg"}
        breadcrumbTitle={"Privacy policy"}
      />
      <div style={{ maxWidth: "1400px", margin: "auto", padding: "8rem 2rem" }}>
        <PrivacyPolicyContent />
      </div>
    </main>
  );
};

export default PrivacyPolicy;
