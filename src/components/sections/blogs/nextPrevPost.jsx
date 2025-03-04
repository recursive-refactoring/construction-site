import React from 'react'
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const NextPrevPost = () => {
    return (
        <>
            <div className="arry pt-30 pb-30 d-flex align-items-center justify-content-between">
                <a href="#0"><i className="pe-1"><FaArrowLeftLong /></i> Previous Blog</a>
                <a href="#0">Next Blog <i className="ps-1"><FaArrowRightLong /></i></a>
            </div>
            <div className="row g-4">
                <Card date={"10/01/2023"} src={"images/blog/sm3.png"} title={"The blind peo ple who train their own guide"} />
                <Card date={"11/01/2023"} src={"images/blog/sm4.png"} title={"The blind peo ple who train their own guide"} />
            </div>
        </>
    )
}

export default NextPrevPost

const Card = ({ src, date, title }) => {
    return (
        <div className="col-md-6">
            <div className="recent-post sub-bg">
                <div className="img"><img src={src} alt="image" /></div>
                <div className="con">
                    <span>{date}</span>
                    <h5><Link to="#0">{title}</Link></h5>
                </div>
            </div>
        </div>
    )
}