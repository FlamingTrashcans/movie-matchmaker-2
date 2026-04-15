import React from 'react'
import Footer from '../../components/Footer/Footer'
import MovieCards from '../../components/MovieCards/MovieCards'
import Navbar from '../../components/Navbar/Navbar'
import Filter from '../../components/Filter/Filter'

const SearchResults = () => {
  return (
    <div>
      <Navbar/>
      <Filter/>
      <MovieCards/>
      <Footer/>
    </div>
  )
}

export default SearchResults
