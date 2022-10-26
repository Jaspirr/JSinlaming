import React, { useState } from 'react'
import ProductCard from '../components/ProductCard'

const ProductGridSection = ({title}) => {

  const [products, setProducts] = useState([
    { id: 1, name : "modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "img1.jpg"},
    { id: 2, name : "modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "img1.jpg"},
    { id: 3, name : "modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "img1.jpg"},
    { id: 4, name : "modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "img1.jpg"}
  ])

  return (
    <section className="product-grid">
      <div className="container">
        <h1 className="featured-title">{title}</h1>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
            {
              products.map(product => <ProductCard item={product} />)
            }
        </div>
      </div>
    </section>
  )
}

export default ProductGridSection