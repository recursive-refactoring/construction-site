import React from 'react'
import PageBanner from '../components/sections/pageBanner'
import BlogArticel from '../components/sections/blogs/blogArticel'

const BlogSingleRight = () => {
  return (
    <main>
        <PageBanner breadcrumbMain={"Latest News"} breadcrumbMainLink={"/blog"} breadcrumbTitle={"Guide dog shortage: The blind"}/>
        <BlogArticel isSidebarRight={true}/>
    </main>
  )
}

export default BlogSingleRight