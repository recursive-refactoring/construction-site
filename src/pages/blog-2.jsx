import React from 'react'
import PageBanner from '../components/sections/pageBanner'
import { blogDataTwo } from '../utils/fackData/blogDataTwo'
import BlogCardSmall from '../components/sections/blogs/blogCardSmall'
import BlogCardLarge from '../components/sections/blogs/blogCardLarge'
import Pagination from '../components/ui/pagination'

const BlogTwo = () => {
    return (
        <main>
            <PageBanner breadcrumbMain={"Blog Grid :"} breadcrumbTitle={"2 Columns"} />
            <section className="blog-two section-padding">
                <div className="container">
                    <div className="row g-4">
                        {blogDataTwo.map(({ author, date, details, id, tag, thumbnail, title }, index) => {
                            const isEvenIteration = Math.floor(index / 2) % 2 === 0;

                            if (index % 2 === 0) {
                                return isEvenIteration ?
                                    <BlogCardLarge key={id} id={id} thumbnail={thumbnail} author={author} date={date} details={details} tag={tag} title={title} />
                                    :
                                    <BlogCardSmall key={id} id={id} thumbnail={thumbnail} author={author} date={date} details={details} tag={tag} title={title} />;
                            } else {
                                return isEvenIteration ?
                                    <BlogCardSmall key={id} id={id} thumbnail={thumbnail} author={author} date={date} details={details} tag={tag} title={title} />
                                    :
                                    <BlogCardLarge key={id} id={id} thumbnail={thumbnail} author={author} date={date} details={details} tag={tag} title={title} />;
                            }
                        })}

                    </div>
                    <Pagination />
                </div>
            </section>
        </main>
    )
}

export default BlogTwo