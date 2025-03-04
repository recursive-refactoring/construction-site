import React from 'react'
import PageBanner from '../components/sections/pageBanner'
import AboutThree from '../components/sections/abouts/aboutThree'
import TestimonialOne from '../components/sections/testimoniales/testimonialOne'
import PartnerTwo from '../components/sections/partners/partnerTwo'
import WorkProcessOne from '../components/sections/workProcess/workProcessOne'

const AboutTwo = () => {
  return (
    <main>
        <PageBanner breadcrumbTitle={"About Us 02"}/>
        <AboutThree className={"pt-0"}/>
        <WorkProcessOne/>
        <TestimonialOne/>
        <PartnerTwo className={"pt-0"}/>
    </main>
  )
}

export default AboutTwo