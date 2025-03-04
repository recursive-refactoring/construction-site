import React from 'react'
import { teamData } from '../utils/fackData/teamData'
import TeamCardOne from '../components/sections/teams/teamCardOne'
import PageBanner from '../components/sections/pageBanner'

const TeamTwo = () => {
    return (
        <main>
             <PageBanner breadcrumbTitle={"Team Style 02"} />
            <section className="team-two section-padding">
                <div className="container">
                    <div className="row g-4">
                        {teamData.map(({ id, name, position, src }) => <div key={id} className="col-lg-4 col-md-6"><TeamCardOne name={name} position={position} src={src} /></div>)}
                    </div>
                </div>
            </section>
        </main>
    )
}

export default TeamTwo