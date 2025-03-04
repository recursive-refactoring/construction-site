import React from 'react'
import BlogWithSidebar from '../components/sections/blogs/blogWithSidebar'
import PageBanner from '../components/sections/pageBanner'

const BlogLeft = () => {
    return (
        <main>
            <PageBanner breadcrumbMain={"Blog Standard :"} breadcrumbTitle={"Left SideBar"} />
            <BlogWithSidebar />
        </main>
    )
}

export default BlogLeft