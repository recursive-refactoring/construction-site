import React from 'react'
import PageBanner from '../components/sections/pageBanner'
import ProductTable from '../components/sections/products/productTable'
import CheckoutForm from '../components/sections/products/checkoutForm'

const Checkout = () => {
    return (
        <main>
            <PageBanner breadcrumbMain={"Shop"} breadcrumbMainLink={"/shop"} breadcrumbTitle={"Checkout page"} />
            <ProductTable className="pb-0" />
            <CheckoutForm/>
        </main>
    )
}

export default Checkout