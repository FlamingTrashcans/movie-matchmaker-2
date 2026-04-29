import React from 'react'
import { Link } from 'react-router-dom'
import './Hamburger.css'

const Hamburger = () => {
  return (
      <div className="hamburger-container">
            <div className="hamburger-links">
                <Link className="hamburger-option" to={'/'}>Home</Link>
                <Link className="hamburger-option" to={'/SearchResults'}>Find a Movie</Link>
                <Link className="hamburger-option hamburger-cart" to={'/Cart'}>My Cart</Link>
                <Link className="hamburger-option sign-out"  onClick={() => alert('This function is not programmed for the sake of the project')}>Sign Out</Link>
            </div>
      </div>
  )
}

export default Hamburger
