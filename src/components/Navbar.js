import React, { useState } from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to='#' smooth={true} className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to='#projects' smooth={true} className="nav-link">Projects</Link>
          </li>
          <li className="nav-item">
            <Link to='#contact' smooth={true} className="nav-link">Contacts</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar