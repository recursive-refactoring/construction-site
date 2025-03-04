import React from 'react'
import { Link } from 'react-router-dom'
import SlideDown from '../../../utils/animations/slideDown'

const BlogCardLarge = ({thumbnail, title, tag, details, author, date, id}) => {
    return (
        <SlideDown delay={id} className="col-lg-8">
            <div className="item-left sub-bg">
                <div className="row g-4">
                    <div className="col-md-7">
                        <div className="content">
                            <span className="tag mb-65">{tag}</span>
                            <h3><Link to="/blog-single">{title}</Link></h3>
                            <p>{details}</p>
                            <div className="info">
                                <strong>By:</strong> <Link to="#0">{author}</Link>
                                <span className="px-1">|</span>
                                <span>{date}</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <Link to="/blog-single" className="image d-block">
                            <img src={thumbnail} alt="image" />
                        </Link>
                    </div>
                </div>
            </div>
        </SlideDown>
    )
}

export default BlogCardLarge