import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa6'
import SlideLeft from '../../../utils/animations/slideLeft'

const BlogMainCard = ({ id, title, author, date, thumbnail, details }) => {
    return (
        <SlideLeft delay={id} className="col-md-6 col-xl-4">
            <div className="item">
                <div className="image">
                    <img src={thumbnail} alt="image" />
                    <div className="content">
                        <h3>{title}</h3>
                        <div className="info">
                            <strong>By:</strong>
                            <Link to="#0">{author}</Link>
                            <span className="px-1">|</span>
                            <span>{date}</span>
                        </div>
                    </div>
                </div>
                <div className="content-up">
                    <h3>
                        <Link to="/blog-single">{title}</Link>
                    </h3>
                    <p>{details}</p>
                    <Link to="/blog-single" className="btn-two">News Details <i><FaArrowRight /></i></Link>
                </div>
            </div>
        </SlideLeft>
    )
}

export default BlogMainCard