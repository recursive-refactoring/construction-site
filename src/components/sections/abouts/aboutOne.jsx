import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CountUp from 'react-countup';
import ModalVideo from 'react-modal-video';
import { useInView } from 'react-intersection-observer';
import { FaArrowRight, FaPhoneVolume, FaPlay } from 'react-icons/fa6'
import SectionTitle from '../../ui/sectionTitle'
import BounceLeft from '../../../utils/animations/bounceLeft';
import SlideUp from '../../../utils/animations/slideUp';
import SlideLeft from '../../../utils/animations/slideLeft';

const AboutOne = () => {
    const [isOpen, setOpen] = useState(false);
    return (
        <section className="about section-padding">
            <div className="shape1">
                <img src={'/images/shape/start1.png'} alt="" />
            </div>
            <div className="shape2">
                <img src={'/images/shape/start2.png'} alt="" />
            </div>
            <div className="about-wrp">
                <div className="bg-image inline d-none d-lg-block" style={{ backgroundImage: `url('/images/about/shape1.png')` }}></div>
                <div className="container">
                    <div className="row g-4">
                        <div className="col-lg-6">
                            <div className="left-item">
                                <div className="video-btn-wrp">
                                    <div className="video video-pulse">
                                        <div className="video-popup secondary-bg" onClick={() => setOpen(true)}><i><FaPlay /></i></div>
                                    </div>
                                </div>
                                <BounceLeft className="image">
                                    <img src={'/images/about/01.png'} alt="image" />
                                </BounceLeft>
                                <h2 className="d-none d-xl-block">Since 1980</h2>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="right-item">
                                <SectionTitle>
                                    <SectionTitle.Name>ABOUT TO MISTRI</SectionTitle.Name>
                                    <SectionTitle.Title>We take you to the next level industry solutions</SectionTitle.Title>
                                    <SectionTitle.Description>We have facility to produce advance work various industrial applications based on specially developed technol-ogy. We are also ready to developement by according to users changing.</SectionTitle.Description>
                                </SectionTitle>
                                <div className="content pb-65 bor-bottom">
                                    <div className="row g-4">
                                        <Card count={"22.8"} numberEnd={"M+"} description={"Successful Training Completions"} />
                                        <Card count={"1379"} numberEnd={""} description={"Training & Assessment Programs"} />
                                        <Card count={"1105"} numberEnd={""} description={"Accredited <br /> Organizations"} />
                                        <Card count={"6986"} numberEnd={""} description={"Points of Delivery for Training & Assessments"} />
                                    </div>
                                </div>
                                <SlideUp className="about_info pt-65">
                                    <div className="info">
                                        <i className="ring-animation"><FaPhoneVolume /></i>
                                        <div className="about_info_con">
                                            <span>call any time</span>
                                            <a href="tel:+912659302003">+91 2659 302 003</a>
                                        </div>
                                    </div>
                                    <span className="d-none d-sm-inline">Or</span>
                                    <Link to="/contact" className="btn-one"><span>Contact Us</span> <i><FaArrowRight /></i></Link>
                                </SlideUp>
                            </div>
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

export default AboutOne


const Card = ({ count, description, numberEnd }) => {
    const { ref, inView, entry } = useInView({
        triggerOnce: true,
        threshold: 0,
    });
    return (
        <SlideLeft className="col-md-6">
            <div ref={ref} className="info">
                {inView && <h3><CountUp end={count} className='count' /> {numberEnd}</h3>}
                <p dangerouslySetInnerHTML={{ __html: description }}></p>
            </div>
        </SlideLeft>
    )
}