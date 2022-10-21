import React from 'react'

const PoductCard = () => {
  return (
      <div className="card">
        <ul className="card-menu">
            <li id="heart"><a href="#"><i className="fa-regular fa-heart"></i></a></li>
            <li id="shuffel"><a href="#"><i className="fa-regular fa-shuffle"></i></a></li>
            <li id="bag"><a href="#"><i className="fa-regular fa-bag-shopping"></i></a></li>
        </ul>
        <div className="card-body">
            <button id="btn-card" className="btn-theme">QUICK VIEW</button>
        </div>
        <div className="category-titel">category</div>
        <div className="category-name">Modern Black Blouse</div>
        <div className="stars">
            <i className="fa-sharp fa-solid fa-star-sharp"></i>
            <i className="fa-sharp fa-solid fa-star-sharp"></i>
            <i className="fa-sharp fa-solid fa-star-sharp"></i>
            <i className="fa-sharp fa-solid fa-star-sharp"></i>
            <i className="fa-sharp fa-solid fa-star-sharp"></i>
        </div>
        <div className="price">$35.00</div>    
      </div>
  )
}

export default PoductCard