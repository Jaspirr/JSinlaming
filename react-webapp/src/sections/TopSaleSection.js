import React from 'react'
import { NavLink } from 'react-router-dom'

const TopSaleSection = () => {
  
    return (
    <section className="top-sale-section">
        <div className="container">
            <div className="top-sale-title-first">
               SALE UP 
            </div>
            <div className="top-sale-title-second">
            To 50% Off
            </div>
            <div className="under-text">Online shopping free home delivery over $100</div>
            <NavLink className="btn-theme btn-card-theme d-xl-none">
                <span className="corner-left"></span>
                <span className="corner-right"></span>
                QUICK VIEW
            </NavLink>
         </div>
    </section>
  )
}

export default TopSaleSection