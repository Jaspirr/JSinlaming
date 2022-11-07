import React, { useContext } from 'react'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import TopSaleSection from '../sections/TopSaleSection'
import ProductGridSection from '../sections/ProductGridSection'
import { GoodInfo } from '../sections/GoodInfo'
import { ProductContext } from '../contexts/contexts'
import InspoSection from '../sections/InspoSection'
import GridRight from '../sections/GridRight'



const HomeView = () => {
    window.top.document.title = 'Fixxo.'
    const productContext = useContext(ProductContext)
   
    return (
        <>
            <MainMenuSection />
            <TopSaleSection />
            <ProductGridSection title="Featured Products" items={productContext.featuredProducts}/>
            <InspoSection />
            <GridRight items={productContext.sale}/>
            <GoodInfo />
            <FooterSection />
        </>
    )
}

export default HomeView