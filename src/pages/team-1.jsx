import React from 'react'
import PageBanner from '../components/sections/pageBanner'
import { teamData } from '../utils/fackData/teamData'
import TeamCardTwo from '../components/sections/teams/teamCardTwo'

const TeamOne = () => {
    return (
        <main>
            <PageBanner breadcrumbTitle={"Team Style 01"} />
            <section className="team-one section-padding">
                <div className="container">
                    <div className="row g-4">
                        {teamData.map(({id, name, position, src }) => <div key={id} className="col-lg-4 col-md-6"><TeamCardTwo name={name} position={position} src={src} /></div>)}
                    </div>
                </div>
            </section>
        </main>
    )
}

export default TeamOne