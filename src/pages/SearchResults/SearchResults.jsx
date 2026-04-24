import React from 'react'
import { useState, useEffect } from 'react'
import Footer from '../../components/Footer/Footer'
import MovieCards from '../../components/MovieCards/MovieCards'
import Navbar from '../../components/Navbar/Navbar'
import Filter from '../../components/Filter/Filter'
import SearchBar from '../../components/Searchbar/SearchBar'
import './SearchResults.css'
import { useLocation, useNavigate } from 'react-router-dom'


const SearchResults = () => {
  const [movies, setMovies] = useState([])
  const [filteredMovies, setFilteredMovies] = useState([])
  const [loading, setLoading] = useState(false);

  async function fetchMovies(searchTerm) {
  setLoading(true);

  const response = await fetch(
    `https://www.omdbapi.com/?apikey=7f8a3fce&s=${searchTerm}`
  );
  const data = await response.json();

  if (data.Search) {
    setMovies(data.Search);
    setFilteredMovies(data.Search);
  } else {
    setMovies([]);
    setFilteredMovies([]);
  }

  setLoading(false);
}

const location = useLocation();

  useEffect(()=>{
    const params = new URLSearchParams(location.search);
    const query = params.get("q");
    
    if (query) {
      fetchMovies(query);
    }
  }, [location.search]);

    function handleFilterChange(value) {
    let sortedMovies = [...movies]

    switch (value) {
      case "az":
        sortedMovies.sort((a, b) =>
          a.Title.localeCompare(b.Title)
        )
        break
      case "za":
        sortedMovies.sort((a, b) =>
          b.Title.localeCompare(a.Title)
        )
        break
      case "new":
        sortedMovies.sort((a, b) =>
          Number(b.Year) - Number(a.Year)
        )
        break
      case "old":
        sortedMovies.sort((a, b) =>
          Number(a.Year) - Number(b.Year)
        )
        break
      default:
        return
    }

    setFilteredMovies(sortedMovies)
  }

  const navigate = useNavigate();

  return (
    <>
    <div className="page-container">
      <Navbar/>
      <div className="search-controls">
        <SearchBar onSearch={(term) => navigate(`/SearchResults?q=${term}`)}/>
        <Filter onFilterChange={handleFilterChange}/>
      </div>
      <MovieCards movies={filteredMovies}/>
    </div>  
      <Footer/>
    </>
  )
}

export default SearchResults
