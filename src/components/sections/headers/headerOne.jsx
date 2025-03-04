import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { FaArrowRight, FaBars } from "react-icons/fa6";
import TopHeaderOne from './topHeaderOne'
import Menus from './menus';
import ShopCart from './shopCart';
import useStickyHeader from '../../../hooks/useStickyHeader';
import Sidebar from './sidebar';

const HeaderOne = () => {
    const pathName = useLocation().pathname
    useStickyHeader()
    const [isActiveSidebar, setIsActiveSidebar] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    useEffect(() => {
        setIsMobileMenuOpen(false)
    }, [pathName])
    
    return (
        <>
            <header className="header header-one">
                <TopHeaderOne />
                <div className="header-section">
                    <div className="container">
                        <div className="header-wrapper">
                            <div className="logo d-block d-xl-none pb-0">
                                <img src="/images/logo/logo-light.svg" alt="logo" />
                            </div>
                            <div className={`header-bar d-xl-none ${isMobileMenuOpen ? "active" : ""}`} onClick={()=> setIsMobileMenuOpen(!isMobileMenuOpen)}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <ul className={`main-menu ${isMobileMenuOpen ? "active" : ""}`}>
                                <Menus />
                            </ul>
                            {/* <div className="header_one_info d-none d-xl-flex align-items-center">
                                <ShopCart />
                                <i id="openButton" className="fa-solid fa-bars" onClick={() => setIsActiveSidebar(true)}><FaBars /></i>
                                <Link to="contact.html" className="btn-one"><span>Get Consultation</span> <i><FaArrowRight /></i></Link>
                            </div> */}
                        </div>
                    </div>
                </div>
            </header>
            {/* <Sidebar isActiveSidebar={isActiveSidebar} setIsActiveSidebar={setIsActiveSidebar} /> */}
        </>
    )
}

export default HeaderOne