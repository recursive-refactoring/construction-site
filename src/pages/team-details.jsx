import React from 'react'
import PageBanner from '../components/sections/pageBanner'
import SummaryTeamSingle from '../components/sections/teams/summaryTeamSingle'
import DetailsTeamSingle from '../components/sections/teams/detailsTeamSingle'

const TeamDetails = () => {
    return (
        <main>
            <PageBanner breadcrumbMain={"Team"} breadcrumbMainLink={"/team-1"} breadcrumbTitle={"Sana p. Lesh"} />
            <SummaryTeamSingle/>
            <DetailsTeamSingle/>
        </main>
    )
}

export default TeamDetails