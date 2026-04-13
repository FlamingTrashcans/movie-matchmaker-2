import React from 'react'

const MovieCards = () => {
  return (
     <div class="movie">
                        <div class="movie-card">
                            <div class="movie-card__container">
                                <h3 class="movie__name">Movie</h3>
                                <h4 class="movie__year">19XX</h4>
                                <div class="movie__poster">
                                    <div class="movie__poster--wrapper">
                                        <img src="./4.1Pics/Movie-reel.svg.png" alt="" class="poster__placeholder"/>
                                    </div>
                                </div>
                                <button class="btn">Rent Now!</button>
                            </div>
                        </div>
                    </div>
  )
}

export default MovieCards
