import React from 'react'
import { NavLink } from 'react-router-dom'


const PoductCard = ({product}) => {

  const addToWishList = (e) => {
    console.log(`${e.target}added to wish list`)
  }

  const addToCompare = (e) => {
    console.log("added to Compare")
  }

  const addToCart = (e) => {
    console.log("added to Cart")
  }


  return (
    <div className="col" >
      <div className="card">
        <div className="card-img">
          <img src={product.img} alt={product.name}></img>
          <div className="card-menu d-xl-none">
            <button onClick={addToWishList} className="menu-link"><i className="fa-regular fa-heart"></i></button>
            <button onClick={addToCompare} className="menu-link"><i className="fa-regular fa-code-compare"></i></button>
            <button onClick={addToCart} className="menu-link"><i className="fa-regular fa-bag-shopping"></i></button>
          </div>
          <NavLink to={`/products/${product.name.toLowerCase().replace(/ /gi, "-")}`} className="btn-theme btn-card-theme d-xl-none">
            <span className="corner-left"></span>
            <span className="corner-right"></span>
            QUICK VIEW
          </NavLink>
        </div>
        <div className="card-body">
          <p className="card-category">{product.category}</p>
          <h5 className="card-title">{product.name}</h5>
          <p className="card-rating">
            <i className="fa-sharp fa-solid fa-star"></i>
            <i className="fa-sharp fa-solid fa-star"></i>
            <i className="fa-sharp fa-solid fa-star"></i>
            <i className="fa-sharp fa-solid fa-star"></i>
            <i className="fa-sharp fa-solid fa-star"></i>
          </p>
          <p className="card-price">{product.price}</p>
        </div>
      </div>
    </div>
      // <div className="card">
      //   <ul className="card-menu">
      //       <li id="heart"><a href="#"><i className="fa-regular fa-heart"></i></a></li>
      //       <li id="shuffel"><a href="#"><i className="fa-regular fa-shuffle"></i></a></li>
      //       <li id="bag"><a href="#"><i className="fa-regular fa-bag-shopping"></i></a></li>
      //   </ul>
      //   <div className="card-body">
      //       <button id="btn-card" className="btn-theme">QUICK VIEW</button>
      //   </div>
      //   <div className="category-titel">category</div>
      //   <div className="category-name">Modern Black Blouse</div>
      //   <div className="stars">
      //       <i className="fa-sharp fa-solid fa-star-sharp"></i>
      //       <i className="fa-sharp fa-solid fa-star-sharp"></i>
      //       <i className="fa-sharp fa-solid fa-star-sharp"></i>
      //       <i className="fa-sharp fa-solid fa-star-sharp"></i>
      //       <i className="fa-sharp fa-solid fa-star-sharp"></i>
      //   </div>
      //   <div className="price">$35.00</div>    
      // </div>
  )
}

export default PoductCard