import React from 'react'
import ProgressBar from '../../ui/progressBar'
import SectionTitle from '../../ui/sectionTitle'

const ExperienceContent = () => {
    return (
        <div className="right-item">
            <SectionTitle>
                <SectionTitle.Name>WORKING WITH EXCELLENT</SectionTitle.Name>
                <SectionTitle.Title>Always Powering Your Business For Over 30 Years</SectionTitle.Title>
                <SectionTitle.Description>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly</SectionTitle.Description>
            </SectionTitle>

            <div className="experience-progress-wrapper">
                <ProgressBar title={"Power & Energy Sector"} finalWidth={"80"} />
                <ProgressBar title={"Mechanical Engineering"} finalWidth={"90"} />
                <ProgressBar title={"Gas & Oil Refining"} finalWidth={"70"} />
                <ProgressBar title={"Construction Building"} finalWidth={"95"} />
            </div>
        </div>
    )
}

export default ExperienceContent