import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa6'
import FooterCommonLink from './footerCommonLink'
import { Link } from 'react-router-dom'
import SlideUp from '../../../utils/animations/slideUp'

const FooterTwo = () => {
    const year = new Date().getFullYear()
    return (
        <footer className="secondary-bg">
            <div className="map">
                <img src="/images/footer/map.png" alt="" />
            </div>
            <div className="container">
                <div className="chat">
                    <div className="row g-0 align-items-center">
                        <div className="col-lg-2">
                            <div className="chat_icon">
                                <img src="/images/icon/chat.png" alt="icon" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <h2>get free consultation</h2>
                        </div>
                        <div className="col-lg-4">
                            <ul>
                                <li className="info"><img src="/images/footer/info1.png" alt="image" />
                                    <img className="info_image" src="/images/footer/info2.png" alt="iamge" />
                                </li>
                                <li><Link to="tel:+910215365003">+91 0215 365 003</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="pt-65 pb-65">
                    <div className="row g-4">
                        <SlideUp className="col-lg-3 col-md-6">
                            <div className="item">
                                <div className="logo pb-3">
                                    <Link to="#0">
                                        <img src="/images/logo/footer-logo.svg" alt="logo" />
                                    </Link>
                                </div>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration</p>
                                <div className="social-icon">
                                    <Link to="#0"><i><FaFacebookF /></i></Link>
                                    <Link to="#0"><i><FaTwitter /></i></Link>
                                    <Link to="#0"><i><FaYoutube /></i></Link>
                                    <Link to="#0"><i><FaInstagram /></i></Link>
                                </div>
                            </div>
                        </SlideUp>
                        <FooterCommonLink/>
                    </div>
                </div>
                <div className="copyright">
                    <p>Copyright {year} <strong>Mistri</strong>. Design By <Link to="#">ultradevs</Link></p>
                </div>
            </div>
        </footer>
    )
}

export default FooterTwo