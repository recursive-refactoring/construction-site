import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa6'
import SectionTitle from '../../ui/sectionTitle'
import { blogDataOne } from '../../../utils/fackData/blogDataOne'
import SlideLeft from '../../../utils/animations/slideLeft'

const BlogOne = () => {
    return (
        <section className="blog section-padding sub-bg">
            <div className="shape1 d-none d-lg-block float-bob-y">
                <img src={'/images/shape/shape1.png'} alt="shape1" />
            </div>
            <div className="shape2 d-none d-lg-block float-bob-y">
                <img src={'/images/shape/shape2.png'} alt="shape2" />
            </div>
            <div className="container">
                <SectionTitle className="text-center">
                    <SectionTitle.Name>LATEST BLOG</SectionTitle.Name>
                    <SectionTitle.Title>latest news from blog</SectionTitle.Title>
                </SectionTitle>
                <div className="row g-4">
                    {blogDataOne.slice(0, 3).map(({ author, date, details, id, title }) => <Card key={id} id={id} author={author} date={date} title={title} details={details} />)}
                </div>
            </div>
        </section>
    )
}

export default BlogOne


const Card = ({id, title, date, author, details }) => {
    return (
        <SlideLeft delay={id} className="col-md-6 col-xl-4">
            <div className="item">
                <div className="content">
                    <h3><Link to="/blog-single">{title}</Link></h3>
                    <p>{details}</p>
                </div>
                <Link to="/blog-single" className="btn-two"><span>News Details</span> <i><FaArrowRight /></i></Link>
                <div className="info">
                    <strong>By:</strong>
                    <Link to="#0">{author}</Link>
                    <span className="px-1">|</span>
                    <span>{date}</span>
                </div>
            </div>
        </SlideLeft>
    )
}