import React from 'react'
import { useState, useEffect } from 'react'
import Footer from '../../components/Footer/Footer'
import MovieCards from '../../components/MovieCards/MovieCards'
import Navbar from '../../components/Navbar/Navbar'
import Filter from '../../components/Filter/Filter'
import SearchBar from '../../components/Searchbar/SearchBar'
import './SearchResults.css'
import { useLocation } from 'react-router-dom'

const SearchResults = () => {
  const [movies, setMovies] = useState([])
  const [filteredMovies, setFilteredMovies] = useState([])

  async function fetchMovies(searchTerm) {
    const response = await fetch(
       `https://www.omdbapi.com/?apikey=7f8a3fce&s=${searchTerm}`
    )
    const data = await response.json()
      if (data.Search) {
        setMovies(data.Search) 
        setFilteredMovies(data.Search)
      } else {
        setMovies([])
        setFilteredMovies([])
      }
  }

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

  return (
    <>
    <div className="page-container">
      <Navbar/>
      <div className="search-controls">
        <SearchBar onSearch={fetchMovies}/>
        <Filter onFilterChange={handleFilterChange}/>
      </div>
      <MovieCards movies={filteredMovies}/>
    </div>  
      <Footer/>
    </>
  )
}

export default SearchResults
