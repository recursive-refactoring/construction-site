import React, { useState } from 'react'
import { FaArrowRight, FaGear, FaPhoneVolume, FaPlay } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import SectionTitle from '../../ui/sectionTitle'
import ModalVideo from 'react-modal-video';
import SlideLeft from '../../../utils/animations/slideLeft';
import SlideRight from '../../../utils/animations/slideRight';
import SlideUp from '../../../utils/animations/slideUp';

const AboutFour = () => {
    const [isOpen, setOpen] = useState(false);
    const { ref, inView, entry } = useInView({
        triggerOnce: true,
        threshold: 0,
    });

    return (
        <section className="page-about section-padding">
            <div className="shape1 d-none d-lg-block float-bob-y">
                <img src="/images/shape/shape1.png" alt="img" />
            </div>
            <div className="shape2 d-none d-lg-block float-bob-y">
                <img src="/images/shape/shape2.png" alt="img" />
            </div>
            <div className="container">
                <div className="row g-4">
                    <div className="col-lg-6">
                        <div className="image">
                            <img src="/images/about/01.jpg" alt="image" />
                            <div className="sm-image d-none d-sm-block">
                                <img src="/images/about/02.png" alt="image" />
                            </div>
                            <div className="video-btn-wrp d-none d-sm-block">
                                <div className="video video-pulse">
                                    <div className="video-popup secondary-bg" onClick={() => setOpen(true)}><i className="fa-solid fa-play"><FaPlay /></i></div>
                                </div>
                            </div>
                            <div ref={ref} className="info d-none d-sm-block">
                                {inView && <h2><CountUp end={25} className='count' />+</h2>}
                                <span>Years Experience</span>
                            </div>
                            <div className="stroke-text d-none d-sm-block">
                                <h2>since 1980</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="right-item">
                            <SectionTitle className={"mb-5"}>
                                <SectionTitle.Name>CONSTRUCTION COMPANY</SectionTitle.Name>
                                <SectionTitle.Title>We Are Here to Increase Your Knowledge With Experience</SectionTitle.Title>
                                <SectionTitle.Description>We have facility to produce advance work various industrial applications based on specially developed technol-ogy. We are also ready to developement by according to users changing.</SectionTitle.Description>
                            </SectionTitle>
                            <div className="row g-4">
                                <SlideLeft className="col-sm-6">
                                    <ul>
                                        <li><span className="mb-4 me-2 primary-color"><FaGear /></span> Best Quality Support </li>
                                        <li><span className="me-2 primary-color"><FaGear /></span> Professional Expertise</li>
                                    </ul>
                                </SlideLeft>
                                <SlideRight className="col-sm-6">
                                    <ul>
                                        <li><span className="mb-4 me-2 primary-color"><FaGear /></span> 100% Quality Design</li>
                                        <li><span className="me-2 primary-color"><FaGear /></span> 24/7 On Time Support</li>
                                    </ul>
                                </SlideRight>
                            </div>
                            <SlideUp className="about_info d-flex align-items-center pt-65">
                                <Link to="/contact" className="btn-one"><span>Contact Us</span> <i><FaArrowRight /></i></Link>
                                <span className="bor-left d-none d-sm-block mx-4"></span>
                                <div className="info d-flex flex-wrap align-items-center">
                                    <i className="ring-animation"><FaPhoneVolume /></i>
                                    <div className="about_info_con">
                                        <span className="d-block text-capitalize">call any time</span>
                                        <Link to="tel:+912659302003">+91 2659 302 003</Link>
                                    </div>
                                </div>
                            </SlideUp>
                        </div>
                    </div>
                </div>
            </div>
            <ModalVideo
                channel="youtube"
                youtube={{ mute: 0, autoplay: 0 }}
                isOpen={isOpen}
                videoId="TfU0qjuZkJ4"
                onClose={() => setOpen(false)}
            />
        </section>
    )
}

export default AboutFour