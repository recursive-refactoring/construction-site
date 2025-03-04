import React from 'react'
import { blogDataOne } from '../../../utils/fackData/blogDataOne'
import SectionTitle from '../../ui/sectionTitle'
import BlogMainCard from './blogMainCard'

const BlogThree = () => {
    return (
        <section className="blog-three section-padding">
            <div className="shape1 d-none d-lg-block float-bob-y">
                <img src="/images/shape/shape1.png" alt="" />
            </div>
            <div className="shape2 d-none d-lg-block float-bob-y">
                <img src="/images/shape/shape2.png" alt="" />
            </div>
            <div className="container">
                <SectionTitle className={"text-center"}>
                    <SectionTitle.Name>LATEST BLOG</SectionTitle.Name>
                    <SectionTitle.Title>latest news from blog</SectionTitle.Title>
                </SectionTitle>
                <div className="row g-4">
                    {
                        blogDataOne.slice(0, 3).map(({ author, date, details, id, thumbnail, title }) => <BlogMainCard key={id} id={id} author={author} date={date} details={details} thumbnail={thumbnail} title={title} />)
                    }
                </div>
            </div>
        </section>
    )
}

export default BlogThree
