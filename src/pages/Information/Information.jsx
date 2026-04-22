import React from 'react'
import movie_reel from '../../assets/Movie-reel.svg.png'
import './Information.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { Link } from 'react-router-dom'
import { useParams, useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

const Information = () => {
  
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(()=>{
    async function fetchMovie() {
      const res = await fetch(
        `https://www.omdbapi.com/?apikey=7f8a3fce&i=${id}`
      );
      const data = await res.json();
      setMovie(data);
    }

    fetchMovie();
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (

  <>
    <Navbar/>
      <div className="back_arrow_wrapper">
         <img
            src={back_arrow_icon}
            alt=""
            className="back_arrow"
            onClick={() => {
              if (location.state?.from) {
                navigate(location.state.from);
              } else {
                navigate("/SearchResults");
              }
      }}
    />
      </div>
      <div className="info_wrapper">
        <div className="info">
          <div className="poster-wrapper">
            <img
              src={movie.Poster !== "N/A" ? movie.Poster : movie_reel}
              alt={movie.Title}/>
          </div>
          <div className="info-text">
              <div className="info-header">            
                <h2 className="movie-title">{movie.Title}</h2>
                <h3 className="movie-year">{movie.Year}</h3>
                <div className="rent_me-container">
                  <Link className="rent_me" to={'/Cart'} state={{ from: location }}>Rent Me!</Link>
                </div>
              </div>  
              <div className="desc-wrapper">
                <p className="movie-desc">{movie.Plot}</p>
              </div>
          </div>   
        </div>  
      </div>
      <Footer/>
  </>  
  )
}

export default Information
