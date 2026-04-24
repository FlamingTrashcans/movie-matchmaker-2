import React from 'react'
import logo from '../../assets/movie-matchmaker-logo.png'
import './Navbar.css'
import { useNavigate } from 'react-router-dom'
import { logout } from '../../firebase'
import { Link } from 'react-router-dom'
import Hamburger from '../Hamburger/Hamburger'
import { useState, useEffect } from 'react'

const Navbar = () => {

const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
       <div className="nav__wrapper"> 
        <div className="logo">
            <img className="logo__img" src={logo} alt="Movie Matchmaker"/>
        </div>

        <div className="hamburger">
          <div
            className="hamburger-icon"
            onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "✕" : "☰"}
          </div>

          {isOpen && <Hamburger />}
        </div>


        <div className="nav__links">
            <Link className="nav__link" to="/">Home</Link>
            <Link className="nav__link find--movie" to="/SearchResults" >Find a Movie</Link>
            <a className='sign__out' onClick={()=>{logout()}}>Sign Out</a>
            <div className="btn-wrapper">
              <Link to={'/Cart'}>
                <button className="btn">My Cart</button>
              </Link>
            </div>
        </div>
       </div> 
    </nav>
  )
}

export default Navbar
