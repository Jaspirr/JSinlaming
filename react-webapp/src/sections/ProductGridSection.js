import React, { useContext } from 'react'
import ProductCard from '../components/ProductCard'
import { ProductContext } from '../contexts/contexts'

const ProductGridSection = ({title}) => {

  const products = useContext(ProductContext)

  return (
    <section className="product-grid">
      <div className="container">
        <h1 className="featured-title">{title}</h1>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
            {
              products.map( product => <ProductCard key={product.articleNumber} item={product} />)
            }
        </div>
      </div>
    </section>
  )
}

export default ProductGridSection