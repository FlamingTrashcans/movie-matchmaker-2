import React from 'react'
import './Searchbar.css'

const SearchBar = () => {
  return (
    <div>
      <form action="" className="searchbar--find">
                            <div className="btn__and__form--find">
                                <input type="text" className='search__input' id="search__input" placeholder="Find a movie..."/>
                                <button type="submit" className="search__btn--find">Match Now</button>
                            </div>
                        </form> 
    </div>
  )
}

export default SearchBar