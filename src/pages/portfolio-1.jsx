import React from 'react'
import PageBanner from '../components/sections/pageBanner'
import ProjectsOne from '../components/sections/projects/projectsOne'
import { projectsTwoData } from '../utils/fackData/projectsTwoData'
import WorkProcessTwo from '../components/sections/workProcess/workProcessTwo'

const PortfolioOne = () => {
    return (
        <main>
            <PageBanner breadcrumbTitle={"portfolio 01"} />
            <ProjectsOne data={projectsTwoData}/>
            <WorkProcessTwo/>
        </main>
    )
}

export default PortfolioOne