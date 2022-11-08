import React, { useContext } from 'react'
import ProductCard from '../components/ProductCard'
import { SaleContext } from '../contexts/contexts'

const GridRight = ({items = []}) => {

    const products = useContext(SaleContext)
    
  return (
    <section className="grid-right">
        <div className="container">
            <div>
                <div className="box"></div>
            
            {
                items.map( product => <ProductCard key={product.articleNumber} item={product} />)
            }
            </div>
        </div>
    </section>
  )
}

export default GridRight