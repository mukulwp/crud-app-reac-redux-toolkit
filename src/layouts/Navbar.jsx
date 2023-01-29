import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
      <nav className="nav">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/show">Show Book</NavLink>
          <NavLink to="/add">Add Book</NavLink>
    </nav>
  )
}

export default Navbar