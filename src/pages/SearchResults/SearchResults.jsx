import React from 'react'
import Footer from '../../components/Footer/Footer'
import MovieCards from '../../components/MovieCards/MovieCards'
import Navbar from '../../components/Navbar/Navbar'
import Filter from '../../components/Filter/Filter'
import SearchBar from '../../components/Searchbar/SearchBar'
import './SearchResults.css'

const SearchResults = () => {
  return (
    <div>
      <Navbar/>
      <div className="search-controls">
        <SearchBar/>
        <Filter/>
      </div>
      <MovieCards/>
      <Footer/>
    </div>
  )
}

export default SearchResults
