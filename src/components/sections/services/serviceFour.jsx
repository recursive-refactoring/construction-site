import React from 'react'
import ServicesSwiper from './servicesSwiper'
import SectionTitle from '../../ui/sectionTitle'
import SlideUp from '../../../utils/animations/slideUp'

const ServiceFour = () => {
    return (
        <section className="service page">
            <div className="container-fluid p-0">
                <div className="container about-three">
                    <div className="row g-5 mb-65 align-items-center">
                        <div className="col-xl-6">
                            <SectionTitle className={"m-0"}>
                                <SectionTitle.Name>WHAT WE DO</SectionTitle.Name>
                                <SectionTitle.Title>Our Services That We Provide</SectionTitle.Title>
                            </SectionTitle>
                        </div>
                        <div className="col-xl-6">
                            <div className="content">
                                <SectionTitle.Description>We have facility to produce advance work various industrial applications based on specially developed technol-ogy. We are also ready to developement by according to users changing.</SectionTitle.Description>
                                <SlideUp>
                                    <ul>
                                        <li><span></span> Greate Technology</li>
                                        <li><span></span> Delivery Ontime</li>
                                        <li><span></span> Certified Engineers</li>
                                    </ul>
                                </SlideUp>
                            </div>
                        </div>
                    </div>
                </div>
                <ServicesSwiper />
            </div>
        </section>
    )
}

export default ServiceFour