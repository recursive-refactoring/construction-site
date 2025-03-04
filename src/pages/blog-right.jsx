import React from 'react'
import PageBanner from '../components/sections/pageBanner'
import BlogWithSidebar from '../components/sections/blogs/blogWithSidebar'

const BlogRight = () => {
    return (
        <main>
            <PageBanner breadcrumbMain={"Blog Standard :"} breadcrumbTitle={"Right SideBar"} />
            <BlogWithSidebar isSidebarRight={true} />
        </main>
    )
}

export default BlogRight