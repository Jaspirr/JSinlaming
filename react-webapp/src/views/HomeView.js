import React from 'react'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import TopSaleSection from '../sections/TopSaleSection'
import ProductGridSection from '../sections/ProductGridSection'
import { GoodInfo } from '../sections/GoodInfo'



const HomeView = () => {
    window.top.document.title = 'Fixxo.'
   
    return (
        <>
            <MainMenuSection />
            <TopSaleSection />
            <ProductGridSection title="Featured Products" />
            <ProductGridSection title="Top Products" />
            <GoodInfo />
            <FooterSection />
        </>
    )
}

export default HomeView