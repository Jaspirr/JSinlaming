import React, { useContext } from 'react'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import TopSaleSection from '../sections/TopSaleSection'
import ProductGridSection from '../sections/ProductGridSection'
import { GoodInfo } from '../sections/GoodInfo'
import { ProductContext } from '../contexts/contexts'



const HomeView = () => {
    window.top.document.title = 'Fixxo.'
    const productContext = useContext(ProductContext)
   
    return (
        <>
            <MainMenuSection />
            <TopSaleSection />
            <ProductGridSection title="Featured Products" items={productContext.featuredProducts}/>
            <ProductGridSection title="Top Products" />
            <GoodInfo />
            <FooterSection />
        </>
    )
}

export default HomeView