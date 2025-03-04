import React from 'react'
import { Link } from 'react-router-dom'
import SlideDown from '../../../utils/animations/slideDown'

const BlogCardSmall = ({thumbnail, title, tag, details, author, date, id}) => {
    return (
        <SlideDown delay={id} className="col-lg-4">
            <div className="item-right sub-bg">
                <span className="tag mb-4">{tag}</span>
                <Link to="/blog-single" className="image d-block">
                    <img src={thumbnail} alt="image" />
                </Link>
                <div className="content">
                    <h3 className="py-3"><Link to="/blog-single">{title}</Link></h3>
                    <div className="info">
                        <strong>By:</strong> <Link to="#0">{author}</Link>
                        <span className="px-1">|</span>
                        <span>{date}</span>
                    </div>
                </div>
            </div>
        </SlideDown>
    )
}

export default BlogCardSmall