import React from 'react'
import PageBanner from '../components/sections/pageBanner'
import ProductsGrid from '../components/sections/products/productsGrid'

const Shop = () => {
    return (
        <main>
            <PageBanner breadcrumbTitle={"shop page"} />
            <ProductsGrid/>
        </main>
    )
}

export default Shop