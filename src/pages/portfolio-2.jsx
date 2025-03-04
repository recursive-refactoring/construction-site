import React from 'react'
import PageBanner from '../components/sections/pageBanner'
import ProjectsThree from '../components/sections/projects/projectsThree'
import TestimonialOne from '../components/sections/testimoniales/testimonialOne'

const PortfolioTwo = () => {
    return (
        <main>
            <PageBanner breadcrumbTitle={"portfolio 02"} />
            <ProjectsThree/>
            <TestimonialOne/>
        </main>
    )
}

export default PortfolioTwo