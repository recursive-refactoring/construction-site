import React from 'react'
import { FaLocationDot, FaPaperPlane, FaPhoneVolume } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
const TopHeaderOne = () => {
    return (
        <div className="header-top d-none d-xl-block">
            <div className="container">
                <div className="header-top-wrp">
                    <div className="logo">
                        <Link href="/" className="logo"> <img src={'/images/logo/logo.svg'} alt="logo" /></Link>
                    </div>
                    <ul className="info">
                        <li><i className="primary-color"><FaPaperPlane /></i> <a href="#0">info@brickmond.com</a></li>
                        <li className="bor-left ms-4 ps-4"><i className="primary-color"><FaLocationDot /></i> <a href="#0">Doha Qatar</a></li>
                        <li className="bor-left fw-bold ms-4 ps-4"><i className="primary-color"><FaPhoneVolume /></i> <a href="tel:+912659302003">+974 74758881</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default TopHeaderOne