import React from 'react'
import { NavLink } from 'react-router-dom'
import MenuIcon from '../components/MenuIcon'


const MainMenuSection = () => {
    return (
        <nav className="mainmenu container">
            <div class="brand">
                Fixxo.
            </div>
            <div className="menu-links">
                <NavLink className="menu-link" to="/">Home</NavLink>
                <NavLink className="menu-link" to="/categories">categories</NavLink>
                <NavLink className="menu-link" to="/products">products</NavLink>
                <NavLink className="menu-link" to="/contacts">contacts</NavLink>
                
            </div>
            <div className="menu-icons">
                <MenuIcon link="/search" icon="fa-regular fa-magnifying-glass"/>
                <MenuIcon link="/compare" icon="fa-regular fa-repeat"/>
                <MenuIcon link="/wishlist" icon="fa-regular fa-heart"/>
                <MenuIcon link="/shoppingcart" icon="fa-regular fa-bag-shopping"/>
            </div>
        </nav>
    )
}

export default MainMenuSection