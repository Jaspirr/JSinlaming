import React from 'react'
import { NavLink } from 'react-router-dom'
import { useShoppingCart } from '../contexts/ShoppingCartContext'
import { currencyFormatter } from '../utilities/currencyFormatter'


const PoductCard = ({item}) => {
  const { incrementQuantity } = useShoppingCart()

  return (
    // component för card
      <div className="card">
        <div className="card-img">
          <img src={item.imageName} alt={item.name}></img>
          <div className="card-menu d-xl-none">
            <button className="menu-link"><i className="fa-regular fa-heart"></i></button>
            <button className="menu-link"><i className="fa-regular fa-code-compare"></i></button>
            <button onClick={() => incrementQuantity({articleNumber: item.articleNumber, product: item})} className="menu-link"><i className="fa-regular fa-bag-shopping"></i></button>
          </div>
          <NavLink to={`/products/${item.articleNumber}`} className="btn-theme btn-card-theme d-xl-none">
            <span className="corner-left"></span>
            <span className="corner-right"></span>
            QUICK VIEW
          </NavLink>
        </div>
        <div className="card-body">
          <p className="card-category">{item.category}</p>
          <h5 className="card-title">{item.name}</h5>
          <p className="card-rating">
            <i className="fa-sharp fa-solid fa-star"></i>
            <i className="fa-sharp fa-solid fa-star"></i>
            <i className="fa-sharp fa-solid fa-star"></i>
            <i className="fa-sharp fa-solid fa-star"></i>
            <i className="fa-sharp fa-solid fa-star"></i>
          </p>
          <p className="card-price">{currencyFormatter(item.price)}</p>
        </div>
      </div>
   
  )
}

export default PoductCard