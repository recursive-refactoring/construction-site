import React from 'react'
import PageBanner from '../components/sections/pageBanner'
import ProjectArticle from '../components/sections/projects/projectArticle'

const PortfolioDetails = () => {
    return (
        <main>
            <PageBanner breadcrumbMain={"Portfolio"} breadcrumbMainLink={'/portfolio-1'} breadcrumbTitle={"Renovation Of Roofs"} />
            <ProjectArticle/>
        </main>
    )
}

export default PortfolioDetails