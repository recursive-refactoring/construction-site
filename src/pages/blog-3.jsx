import React from 'react'
import PageBanner from '../components/sections/pageBanner'
import { blogDataOne } from '../utils/fackData/blogDataOne'
import BlogMainCard from '../components/sections/blogs/blogMainCard'
import Pagination from '../components/ui/pagination'

const BlogThree = () => {
    return (
        <main>
            <PageBanner breadcrumbMain={"Blog Grid :"} breadcrumbTitle={"3 Columns"} />
            <section className="blog-three section-padding">
                <div className="container">
                    <div className="row g-4">
                        {
                            blogDataOne.map(({ author, date, details, id, thumbnail, title }) => <BlogMainCard key={id} author={author} date={date} details={details} thumbnail={thumbnail} title={title} />)
                        }
                    </div>
                    <Pagination/>
                </div>
            </section>
        </main>
    )
}

export default BlogThree