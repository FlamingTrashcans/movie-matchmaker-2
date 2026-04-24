import React from 'react'
import { Link } from 'react-router-dom'
import { logout } from '../../firebase'
import './Hamburger.css'

const Hamburger = () => {
  return (
      <div className="hamburger-container">
            <div className="hamburger-links">
                <Link className="hamburger-option" to={'/'}>Home</Link>
                <Link className="hamburger-option" to={'/SearchResults'}>Find a Movie</Link>
                <Link className="hamburger-option hamburger-cart" to={'/Cart'}>My Cart</Link>
                <Link className="hamburger-option sign-out"  onClick={()=>{logout()}}>Sign Out</Link>
            </div>
      </div>
  )
}

export default Hamburger
