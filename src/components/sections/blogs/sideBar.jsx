import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const SideBar = () => {
    return (
        <div className="col-lg-4">
            <div className="right-item sub-bg">
                <h4 className="mb-30">Search</h4>
                <div className="search mb-40">
                    <input type="text" placeholder="Search here. . ." />
                    <button><i className="fa-solid fa-search"><FaSearch/></i></button>
                </div>
                <h4 className="mb-30">Categories</h4>
                <ul className="right_list mb-40">
                    <li><Link className="d-block pb-1 mb-2" to="#0">Business</Link></li>
                    <li><Link className="d-block pb-1 mb-2" to="#0">Job Market</Link></li>
                    <li><Link className="d-block pb-1 mb-2" to="#0">Marketing</Link></li>
                    <li><Link className="d-block pb-1 mb-2" to="#0">News</Link></li>
                    <li><Link className="d-block pb-1 mb-2" to="#0">Social Media</Link></li>
                    <li><Link className="d-block pb-1 mb-2" to="#0">Trends</Link></li>
                    <li><Link className="d-block" to="#0">Writing</Link></li>
                </ul>
                <h4 className="mb-30">Recent Posts</h4>
                <RecentPost date={'10/01/2023'} thumbnail={"/images/blog/sm1.png"} title={"The blind peo ple who train their own guide"} />
                <RecentPost date={'11/01/2023'} thumbnail={"/images/blog/sm2.png"} title={"A team of scientists from NASA's Jet Propulsion"} />
                <RecentPost date={'12/01/2023'} thumbnail={"/images/blog/sm3.png"} title={"The blind peo ple who train their own guide"} />
                <RecentPost date={'13/01/2023'} thumbnail={"/images/blog/sm4.png"} title={"A team of scientists from NASA's Jet Propulsion"} />

                <h4 className="mb-30 mt-40">Tags</h4>
                <div className="tags">
                    <Link to="#0">nature</Link>
                    <Link to="#0">health</Link>
                    <Link to="#0">galaxy</Link>
                    <Link to="#0">creative</Link>
                    <Link to="#0">art</Link>
                    <Link to="#0">business</Link>
                    <Link to="#0">space</Link>
                    <Link to="#0">biology</Link>
                    <Link to="#0">environemnt</Link>
                </div>
                <div className="image mt-40">
                    <img src="/images/blog/single4.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default SideBar

const RecentPost = ({ thumbnail, date, title }) => {
    return (
        <div className="recent-post p-0 bor-bottom pb-4 mb-4 sub-bg">
            <div className="img"><img src={thumbnail} alt="image" /></div>
            <div className="con">
                <span>{date}</span>
                <h5><Link to="#0">{title}</Link></h5>
            </div>
        </div>
    )
}