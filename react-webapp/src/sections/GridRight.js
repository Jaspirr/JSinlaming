import React, { useContext } from 'react'
import ProductCard from '../components/ProductCard'
import { ProductContext } from '../contexts/contexts'

const GridRight = ({items = []}) => {

    const products = useContext(ProductContext)
    
  return (
    <section className="grid-right">
        <div className="container">
            <div>
                <div className="box"></div>
            </div>
            {
                items.map( product => <ProductCard key={product.articleNumber} item={product} />)
            }
        </div>
    </section>
  )
}

export default GridRight