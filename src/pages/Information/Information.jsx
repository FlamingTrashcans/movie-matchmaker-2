import React from 'react'
import movie_reel from '../../assets/Movie-reel.svg.png'
import './Information.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { Link } from 'react-router-dom'

const Information = () => {
  return (
  <>
    <Navbar/>
      <div className="back_arrow_wrapper">
        <Link to="/SearchResults">
          <img src={back_arrow_icon} alt="" className="back_arrow" />
        </Link>  
      </div>
      <div className="info_wrapper">
        <div className="info">
          <div className="poster-wrapper">
            <img src={movie_reel} alt="" className="poster" />
          </div>
          <div className="info-text">
              <div className="info-header">            
                <h2 className="movie-title">Title</h2>
                <h3 className="movie-year">Year</h3>
                <div className="rent_me-container">
                  <Link className="rent_me" to="/Cart">Rent Me!</Link>
                </div>
              </div>  
              <div className="desc-wrapper">
                <p className="movie-desc">Desc</p>
              </div>
          </div>   
        </div>  
      </div>
      <Footer/>
  </>  
  )
}

export default Information
