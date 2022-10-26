import React from 'react'
import { NavLink } from 'react-router-dom'
import TempImg from '../assets/images/img1.jpg'

const PoductCard = ({item}) => {
  return (
    <div className="col" >
      <div className="card">
        <div className="card-img">
          <img src={`../assets/images/${item.img}`} alt={item.name}></img>
          <div className="card-menu">
            <button className="menu-link"><i className="fa-regular fa-heart"></i></button>
            <button className="menu-link"><i className="fa-regular fa-code-compare"></i></button>
            <button className="menu-link"><i className="fa-regular fa-bag-shopping"></i></button>
          </div>
          <NavLink to="/products" className="btn-theme btn-card-theme">
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
          <p className="card-price">{item.price}</p>
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