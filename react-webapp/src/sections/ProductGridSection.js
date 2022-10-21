import React from 'react'
import ProductCard from '../components/ProductCard';

const ProductGridSection = () => {
  return (
    <section classNameName="product-grid">
        <div classNameName="featured-titel">Featured Product</div>
            <div className="container">
                <div className="parent">
                        <div id="grid-1" className="grid">
                            <ProductCard />
                        </div>
                </div>
            </div>
    </section>
  )
}

export default ProductGridSection