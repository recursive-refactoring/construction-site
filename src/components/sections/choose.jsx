import React from 'react'
import SectionTitle from '../ui/sectionTitle'

const Choose = () => {
    return (
        <section className="choose bg-image section-padding">
            <div className="shape d-none d-xl-block float-bob-x">
                <img src="/images/choose/shape.png" alt="shape" />
            </div>
            <div className="container">
                <div className="row mb-5 mb-lg-0 ">
                    <div className="col-lg-6">
                        <SectionTitle>
                            <SectionTitle.Name>CORE FEATURES</SectionTitle.Name>
                            <SectionTitle.Title>Why Choose Us</SectionTitle.Title>
                        </SectionTitle>
                    </div>
                    <div className="col-lg-6">
                        <SectionTitle.Description>We have facility to produce advance work various industrial applications based on specially developed technol-ogy. We are also ready to developement by according to users changing.</SectionTitle.Description>
                    </div>
                </div>
                <div className="row g-4">
                    <div className="col-xl-3 col-lg-6 col-md-6">
                        <Card src={"/images/icon/choose1.png"} title={"Expert Teams"} />
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6">
                        <Card src={"/images/icon/choose2.png"} title={"Commit to Clients"} />
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6">
                        <Card src={"/images/icon/choose3.png"} title={"Maintenance & Renovation"} />
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6">
                        <Card src={"/images/icon/choose4.png"} title={"Eco Power Technologies"} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Choose

const Card = ({ src, title }) => {
    return (
        <div className="item">
            <img src={src} alt="icon" />
            <h4>{title}</h4>
        </div>
    )
}