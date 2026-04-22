import React, { useEffect, useRef, useState } from "react";
import movie_reel from '../../assets/Movie-reel.svg.png'
import './MovieCards.css'
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const MovieCards = ({ movies }) => {
const location = useLocation();
 
  if (!movies || movies.length === 0) {
    return <p className="no-movies-found">No matches found, search to find your Match!</p>
  }

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <div key={movie.imdbID} className="movie">
          <div className="movie-card">
          <h3>{movie.Title}</h3>
          <p>{movie.Year}</p>
          <img
            src={
              movie.Poster && movie.Poster !== "N/A"
                ? movie.Poster
                : movie_reel}
                onError={(e) => {
                  e.target.src = movie_reel
                }}
            alt={movie.Title}
          />
          <Link to={`/Information/${movie.imdbID}`}
                state={{ from: location }}>
          <button className="btn">Rent Now!</button>
          </Link>
        </div>
      </div>  
      ))}
    </div>
  )
}

export default MovieCards
