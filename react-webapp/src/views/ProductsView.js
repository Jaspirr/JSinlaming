import React from 'react'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import ProductGridSection from '../sections/ProductGridSection'

const ProductsView = () => {
  window.top.document.title = 'Products | Fixxo.'

  return (
    <>
        <MainMenuSection />
        <BreadcrumbSection currentPage="Products" />
        <ProductGridSection title="Products" />
        <FooterSection />
    </>
  )
}

export default ProductsView