import React from 'react'

const Navbar = () => {
  return (
    <nav>
       <div class="nav__wrapper"> 
        <div class="logo">
            <img class="logo__img" src="4.1Pics/movie matchmaker logo.png" alt="Movie Matchmaker"/>
        </div>
        <div class="nav__links">
            <a class="nav__link" href="#">Home</a>
            <a class="nav__link find--movie" href="/find-a-movie.html">Find a Movie</a>
            <button class="btn">Contact</button>
        </div>
       </div> 
    </nav>
  )
}

export default Navbar
