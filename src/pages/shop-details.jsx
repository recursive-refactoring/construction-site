import React from 'react'
import PageBanner from '../components/sections/pageBanner'
import ProductInfo from '../components/sections/products/productInfo'
import Review_description_tab from '../components/sections/products/review_description_tab'
import ProductsSlider from '../components/sections/products/productsSlider'
import ProductThumds from '../components/sections/products/productThumbs'

const ShopDetails = () => {
    return (
        <main>
            <PageBanner breadcrumbMain={"Shop"} breadcrumbMainLink={"/shop"} breadcrumbTitle={"shop details"} />
            <section className="shop-single section-padding">
                <div className="container">
                    <div className="product-details-single pb-40">
                        <div className="row g-4">
                            <ProductThumds/>
                            <ProductInfo/>
                        </div>
                    </div>
                    <Review_description_tab/>
                </div>
            </section>
            <ProductsSlider bg_color={"sub-bg"} shop_single_title={true} />
        </main>
    )
}

export default ShopDetails