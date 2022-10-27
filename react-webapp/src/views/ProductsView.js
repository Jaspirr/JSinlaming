import React from 'react'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'

const ProductsView = () => {
  window.top.document.title = 'Products | Fixxo.'

  return (
    <>
        <MainMenuSection />
        <FooterSection />
    </>
  )
}

export default ProductsView