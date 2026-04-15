import React from 'react'
import movie_reel from '../../assets/Movie-reel.svg.png'
import './MovieCards.css'

const MovieCards = () => {
  return (
    <div className="movie">
      {[...Array(12)].map((_, index) => (
        <div className="movie-card" key={index}>
          <div className="movie-card__container">
            <h3 className="movie__name">Movie</h3>
            <h4 className="movie__year">19XX</h4>

            <div className="movie__poster">
              <div className="movie__poster--wrapper">
                <img src={movie_reel} alt="" className="poster__placeholder" />
              </div>
            </div>

            <button className="btn">Rent Now!</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default MovieCards
