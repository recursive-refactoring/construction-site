import React from 'react'
import PageBanner from '../components/sections/pageBanner'
import { teamData } from '../utils/fackData/teamData'
import TeamCardThree from '../components/sections/teams/teamCardThree'

const TeamThree = () => {
    return (
        <main>
            <PageBanner breadcrumbTitle={"Team Style 03"} />
            <section className="team-three section-padding">
                <div className="container">
                    <div className="row g-4">
                        {teamData.map(({ id, name, position, src }) => <div key={id} className="col-lg-4 col-md-6"><TeamCardThree name={name} position={position} src={src} /></div>)}
                    </div>
                </div>
            </section>
        </main>
    )
}

export default TeamThree