import React from 'react'
import { Link } from 'react-router-dom'
import SectionTitle from '../../ui/sectionTitle'
import SlideDown from '../../../utils/animations/slideDown'
import { blogDataTwo } from '../../../utils/fackData/blogDataTwo'
import BlogCardSmall from './blogCardSmall'
import BlogCardLarge from './blogCardLarge'

const BlogTwo = () => {
    return (
        <section className="blog-two section-padding">
            <div className="container">
                <SectionTitle className="text-center">
                    <SectionTitle.Name>LATEST BLOG</SectionTitle.Name>
                    <SectionTitle.Title>latest news from blog</SectionTitle.Title>
                </SectionTitle>
                <div className="row g-4">
                    {blogDataTwo.slice(0, 2).map(({ author, date, details, id, tag, thumbnail, title }) => {
                        return (
                            id % 2 === 0 ?
                                <BlogCardSmall key={id} thumbnail={thumbnail} author={author} date={date} details={details} tag={tag} title={title} />
                                :
                                <BlogCardLarge key={id} thumbnail={thumbnail} author={author} date={date} details={details} tag={tag} title={title} />
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default BlogTwo