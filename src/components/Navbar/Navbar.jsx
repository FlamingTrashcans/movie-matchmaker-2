import React from 'react'
import logo from '../../assets/movie-matchmaker-logo.png'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
       <div className="nav__wrapper"> 
        <div className="logo">
            <img className="logo__img" src={logo} alt="Movie Matchmaker"/>
        </div>
        <div className="nav__links">
            <a className="nav__link" href="#">Home</a>
            <a className="nav__link find--movie" href="/find-a-movie.html">Find a Movie</a>
            <button className="btn">Contact</button>
        </div>
       </div> 
    </nav>
  )
}

export default Navbar
