import React from 'react'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import './Home.css'
import SearchBar from '../../components/Searchbar/SearchBar'
import { useNavigate } from 'react-router-dom'
import movie_reel from '../../assets/Movie-reel.svg.png'

const Home = () => {

  const navigate = useNavigate();

  function handleSearch(term) {
  navigate(`/SearchResults?q=${term}`);
  }

  return (
    <div className="page">
      <Navbar />

      <main className="content">
        <div className="landing__page--wrapper--find">
          <div className="searchbar__and__stuff--find">
            <h1 className="searchbar__title--find">
              Texas' most awarded movie finder
            </h1>
            <h2 className="searchbar__subtitle--find">
              MAKE TONIGHT YOUR MOVIE NIGHT
            </h2>

            <div className="searchbar--wrapper--find">
              <SearchBar onSearch={handleSearch}/>
            </div>
            <div className="no-movies-pic-wrapper">
              <img src={movie_reel  } alt="" className="no-movies-pic" />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Home;
