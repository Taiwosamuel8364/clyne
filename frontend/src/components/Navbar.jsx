import React, { useState } from 'react'
import '../App.css'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <span>Clyne</span>
      </div>
      <div className={`nav-links ${isMenuOpen ? 'nav-links-mobile-open' : ''}`}>
        <a href="/" className="nav-link">Home</a>
        <a href="/about" className="nav-link">About Us</a>
        <a href="/contact" className="nav-link">Contact</a>
      </div>
      <div className="nav-auth">
        <button className="register-button">Register</button>
      </div>
      <button 
        className="mobile-menu-button"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span className={`menu-icon ${isMenuOpen ? 'open' : ''}`}></span>
      </button>
    </nav>
  )
}

export default Navbar