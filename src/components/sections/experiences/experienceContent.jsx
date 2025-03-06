import React from "react";
import ProgressBar from "../../ui/progressBar";
import SectionTitle from "../../ui/sectionTitle";

const ExperienceContent = () => {
  return (
    <div className="right-item">
      <SectionTitle>
        <SectionTitle.Name>WORKING WITH EXCELLENT</SectionTitle.Name>
        <SectionTitle.Title>
          Building a Legacy of Trust for Over 30 Year
        </SectionTitle.Title>
        <SectionTitle.Description>
          From power & energy to construction and mechanical engineering, we
          have been the backbone of industrial growth. Our commitment to
          innovation, quality, and reliability makes us a trusted partner in
          shaping the future.
        </SectionTitle.Description>
      </SectionTitle>

      <div className="experience-progress-wrapper">
        <ProgressBar title={"Power & Energy Sector"} finalWidth={"80"} />
        <ProgressBar title={"Mechanical Engineering"} finalWidth={"90"} />
        <ProgressBar title={"Gas & Oil Refining"} finalWidth={"70"} />
        <ProgressBar title={"Construction Building"} finalWidth={"95"} />
      </div>
    </div>
  );
};

export default ExperienceContent;
