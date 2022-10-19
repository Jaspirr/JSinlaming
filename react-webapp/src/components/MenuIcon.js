import React from 'react'
import { NavLink } from 'react-router-dom'

const MenuIcon = ({link, icon}) => {
  return (
    <NavLink className="menu-icon" to={link} end>
        <i className={icon}></i>
    </NavLink>
  )
}

export default MenuIcon