import React from 'react'
import PageBanner from '../components/sections/pageBanner'
import ProductTable from '../components/sections/products/productTable'

const Cart = () => {
    return (
        <main>
            <PageBanner breadcrumbMain={"Shop"} breadcrumbMainLink={"/shop"} breadcrumbTitle={"Cart page"} />
            <ProductTable/>
        </main>
    )
}

export default Cart